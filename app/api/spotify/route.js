import { NextResponse } from "next/server";
import axios from "axios";

// In-memory token cache to minimize authentication calls
let cachedToken = null;
let tokenExpiresAt = 0;

/**
 * Fetch Client Credentials access token from Spotify Accounts service
 */
async function getSpotifyAccessToken(clientId, clientSecret) {
	const now = Date.now();
	if (cachedToken && now < tokenExpiresAt) {
		return cachedToken;
	}

	const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
	const response = await axios.post(
		"https://accounts.spotify.com/api/token",
		new URLSearchParams({ grant_type: "client_credentials" }),
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${authHeader}`,
			},
			timeout: 10000,
		}
	);

	cachedToken = response.data.access_token;
	tokenExpiresAt = now + (response.data.expires_in - 60) * 1000;
	return cachedToken;
}

export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const rawInput = 
			process.env.SPOTIFY_PLAYLIST_ID || 
			"";

		const envPlaylistIds = rawInput
			.split(",")
			.map((s) => s.trim())
			.filter(Boolean);

		const defaultPlaylistId = envPlaylistIds[0] || "37i9dQZF1DXdLEN7aqioXM";
		const clientId = process.env.SPOTIFY_CLIENT_ID;
		const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

		// Priority: query param > first env playlist > fallback default playlist
		const playlistId = searchParams.get("playlistId") || defaultPlaylistId;
		const spotifyUrl = `https://open.spotify.com/playlist/${playlistId}`;

		// 1. If Spotify Developer credentials exist in environment variables, use Spotify Web API
		if (clientId && clientSecret) {
			try {
				const accessToken = await getSpotifyAccessToken(clientId, clientSecret);
				const playlistRes = await axios.get(
					`https://api.spotify.com/v1/playlists/${playlistId}`,
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
						timeout: 10000,
					}
				);

				const pl = playlistRes.data;
				const tracks = (pl.tracks?.items || []).slice(0, 10).map((item) => {
					const t = item.track;
					return {
						name: t?.name || "Unknown Track",
						artist: t?.artists?.map((a) => a.name).join(", ") || "Various Artists",
						album: t?.album?.name || "Single",
						image: t?.album?.images?.[0]?.url || pl.images?.[0]?.url || null,
						durationMs: t?.duration_ms || 0,
						previewUrl: t?.preview_url || null,
						spotifyUrl: t?.external_urls?.spotify || spotifyUrl,
					};
				});

				// Fetch playlist title & owner for each configured playlist if multiple are provided
				let playlistSummaries = [];
				if (envPlaylistIds.length > 1) {
					const summaryPromises = envPlaylistIds.map(async (id) => {
						if (id === pl.id) {
							return {
								id: pl.id,
								title: pl.name || "Playlist",
								owner: pl.owner?.display_name || null,
							};
						}
						try {
							const r = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
								headers: { Authorization: `Bearer ${accessToken}` },
								timeout: 8000,
							});
							return {
								id: r.data.id,
								title: r.data.name || "Playlist",
								owner: r.data.owner?.display_name || null,
							};
						} catch {
							return { id, title: `Playlist (${id.slice(0, 6)}...)`, owner: null };
						}
					});
					playlistSummaries = await Promise.all(summaryPromises);
				} else {
					playlistSummaries = [
						{ id: pl.id || playlistId, title: pl.name || "Playlist", owner: pl.owner?.display_name || null }
					];
				}

				return NextResponse.json({
					success: true,
					isDevConfigured: true,
					configuredPlaylistId: defaultPlaylistId,
					configuredPlaylists: playlistSummaries,
					playlistId: pl.id || playlistId,
					title: pl.name || null,
					description: pl.description || null,
					owner: pl.owner?.display_name || null,
					followers: typeof pl.followers?.total === "number" ? pl.followers.total : null,
					totalTracks: typeof pl.tracks?.total === "number" ? pl.tracks.total : (tracks.length > 0 ? tracks.length : null),
					thumbnail_url: pl.images?.[0]?.url || null,
					embedUrl: `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`,
					externalUrl: pl.external_urls?.spotify || spotifyUrl,
					tracks,
				});
			} catch (apiErr) {
				console.warn("Spotify Developer API call note (falling back to oEmbed):", apiErr.message);
			}
		}

		// 2. Fallback: Query Spotify oEmbed API if dev credentials not yet populated
		let oembedData = null;
		try {
			const oembedRes = await axios.get("https://open.spotify.com/oembed", {
				params: { url: spotifyUrl },
				timeout: 8000,
			});
			oembedData = oembedRes.data;
		} catch (oembedErr) {
			console.warn("Spotify oEmbed fallback note:", oembedErr.message);
		}

		return NextResponse.json({
			success: Boolean(oembedData),
			isDevConfigured: Boolean(clientId && clientSecret),
			source: oembedData ? "spotify_oembed" : "none",
			configuredPlaylistId: defaultPlaylistId || null,
			configuredPlaylists: envPlaylistIds,
			playlistId,
			title: oembedData?.title || null,
			description: null,
			owner: oembedData?.author_name || null,
			followers: null,
			totalTracks: null,
			thumbnail_url: oembedData?.thumbnail_url || null,
			embedUrl: playlistId ? `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0` : null,
			externalUrl: spotifyUrl,
			tracks: [],
		});
	} catch (error) {
		console.error("Spotify API Route Error:", error);
		return NextResponse.json({
			success: false,
			isDevConfigured: false,
			configuredPlaylistId: null,
			configuredPlaylists: [],
			playlistId: null,
			title: null,
			description: null,
			owner: null,
			followers: null,
			totalTracks: null,
			thumbnail_url: null,
			embedUrl: null,
			externalUrl: null,
			tracks: [],
		});
	}
}
