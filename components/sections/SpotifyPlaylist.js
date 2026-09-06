"use client";

import { useState, useMemo, useEffect } from "react";
import {
	ExternalLink,
	RefreshCw,
	Music2,
	Users,
	ListMusic,
	Key,
	Copy,
	Check,
	CheckCircle2,
} from "lucide-react";
import { SpotifyIcon } from "@/components/ui/Icons";
import { useSpotifyPlaylist } from "@/api";

export const SpotifyPlaylist = () => {
	const [selectedId, setSelectedId] = useState("");
	const [showSetupGuide, setShowSetupGuide] = useState(false);
	const [copiedEnv, setCopiedEnv] = useState(false);

	const { data: playlistInfo, isFetching, refetch } = useSpotifyPlaylist(selectedId);

	useEffect(() => {
		if (!selectedId && playlistInfo?.playlistId) {
			setSelectedId(playlistInfo.playlistId);
		}
	}, [selectedId, playlistInfo?.playlistId]);

	const currentPlaylistId =
		selectedId || playlistInfo?.configuredPlaylistId || playlistInfo?.playlistId || "";

	const availablePlaylists = useMemo(() => {
		const raw = playlistInfo?.configuredPlaylists || [];
		if (raw.length < 2) return [];
		return raw.map((item, index) => {
			const id = typeof item === "object" && item !== null ? item.id : item;
			const knownTitle = typeof item === "object" && item !== null ? item.title : null;
			const knownOwner = typeof item === "object" && item !== null ? item.owner : null;
			const isCurrent = currentPlaylistId === id;
			return {
				id,
				title: knownTitle || (isCurrent && playlistInfo?.title) || `Playlist ${index + 1}`,
				owner: knownOwner || (isCurrent && playlistInfo?.owner) || null,
			};
		});
	}, [playlistInfo, currentPlaylistId]);

	const handleCopyEnvTemplate = () => {
		const template = `SPOTIFY_CLIENT_ID=your_client_id_here\nSPOTIFY_CLIENT_SECRET=your_client_secret_here\nSPOTIFY_PLAYLIST_ID=${currentPlaylistId || "your_playlist_id"}`;
		navigator.clipboard.writeText(template);
		setCopiedEnv(true);
		setTimeout(() => setCopiedEnv(false), 2500);
	};

	const artworkUrl = playlistInfo?.thumbnail_url || null;
	const playlistTitle = playlistInfo?.title || null;
	const playlistOwner = playlistInfo?.owner || null;
	const totalTracks = playlistInfo?.totalTracks || null;
	const isDevConfigured = Boolean(playlistInfo?.isDevConfigured);
	const tracks = playlistInfo?.tracks?.slice(0, 5) || [];

	return (
		<div className="my-8 relative group/card">
			{/* Animated gradient border glow */}
			<div
				className="absolute -inset-[1px] rounded-3xl opacity-70 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{
					background: "linear-gradient(135deg, #6366f1 0%, #1DB954 40%, #8b5cf6 80%, #6366f1 100%)",
					backgroundSize: "300% 300%",
					animation: "gradientShift 6s ease infinite",
				}}
			/>

			<style>{`
				@keyframes gradientShift {
					0% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
					100% { background-position: 0% 50%; }
				}
			`}</style>

			{/* Main card */}
			<div className="relative rounded-3xl overflow-hidden bg-[#0f0f17] border border-transparent">

				{/* ── Blurred artwork background ── */}
				<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
					{/* Deep base */}
					<div className="absolute inset-0 bg-[#0f0f17]" />
					{/* Artwork blur layer — fades in when art is available */}
					{artworkUrl && (
						<img
							src={artworkUrl}
							alt=""
							aria-hidden="true"
							className="absolute inset-0 w-full h-full object-cover"
							style={{
								filter: "blur(60px) saturate(1.8) brightness(0.22)",
								transform: "scale(1.2)",
								transition: "opacity 0.8s ease",
							}}
						/>
					)}
					{/* Spotify green ambient top-right glow */}
					<div className="absolute -top-16 -right-16 w-80 h-80 rounded-full"
						style={{ background: "radial-gradient(circle, rgba(29,185,84,0.16) 0%, transparent 70%)" }} />
					{/* Bottom vignette to keep text readable */}
					<div className="absolute bottom-0 left-0 right-0 h-40"
						style={{ background: "linear-gradient(to top, rgba(15,15,23,0.95) 0%, transparent 100%)" }} />
				</div>

				<div className="relative z-10 p-6 sm:p-8 flex flex-col gap-6">

					{/* ── Header ── */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
								<SpotifyIcon className="w-4 h-4 text-[#1ed760]" />
								<span className="text-xs font-bold text-white tracking-wide">Spotify</span>
							</div>

							{isDevConfigured ? (
								<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-[11px] font-bold text-emerald-300 shadow-lg shadow-emerald-500/10">
									<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
									<span>Dev API Active</span>
									<span className="relative flex w-1.5 h-1.5 ml-0.5">
										<span className="absolute inline-flex h-full w-full rounded-full bg-[#1ed760] opacity-75 animate-ping" />
										<span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#1ed760]" />
									</span>
								</span>
							) : (
								<button
									onClick={() => setShowSetupGuide(!showSetupGuide)}
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-all cursor-pointer"
								>
									<Key className="w-3 h-3" />
									{showSetupGuide ? "Hide" : "Setup Guide"}
								</button>
							)}
						</div>

						<div className="flex items-center gap-2">
							<button
								onClick={() => refetch()}
								className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
							>
								<RefreshCw className={`w-3.5 h-3.5 ${isFetching ? "animate-spin text-[#1ed760]" : ""}`} />
							</button>
							{currentPlaylistId && (
								<a
									href={`https://open.spotify.com/playlist/${currentPlaylistId}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/link"
								>
									<span>Open in Spotify</span>
									<ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
								</a>
							)}
						</div>
					</div>

					{/* ── Setup Guide ── */}
					{showSetupGuide && (
						<div className="p-5 rounded-2xl bg-indigo-950/50 border border-indigo-500/20 backdrop-blur-sm text-xs text-slate-400 space-y-3">
							<div className="flex items-center justify-between">
								<span className="font-bold text-white text-sm">Connect Spotify Developer Account</span>
								<button onClick={handleCopyEnvTemplate} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 hover:bg-white/12 text-slate-300 cursor-pointer border border-white/10 transition-colors">
									{copiedEnv ? <Check className="w-3 h-3 text-[#1ed760]" /> : <Copy className="w-3 h-3" />}
									<span>{copiedEnv ? "Copied!" : "Copy .env"}</span>
								</button>
							</div>
							<ol className="list-decimal list-inside space-y-2 text-slate-500 leading-relaxed">
								<li>Visit <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-[#1ed760] hover:underline font-medium">developer.spotify.com</a> → Create App</li>
								<li>Redirect URI: <code className="bg-white/8 px-1.5 py-0.5 rounded font-mono text-slate-300">http://127.0.0.1:3000</code> — enable Web API</li>
								<li>Add <code className="bg-white/8 px-1.5 py-0.5 rounded font-mono text-slate-300">SPOTIFY_CLIENT_ID</code>, <code className="bg-white/8 px-1.5 py-0.5 rounded font-mono text-slate-300">SPOTIFY_CLIENT_SECRET</code>, <code className="bg-white/8 px-1.5 py-0.5 rounded font-mono text-slate-300">SPOTIFY_PLAYLIST_ID</code> → <code className="bg-white/8 px-1.5 py-0.5 rounded font-mono text-slate-300">.env.local</code></li>
							</ol>
						</div>
					)}

					{/* ── Main Grid ── */}
					<div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">

						{/* Left Column: Artwork + Meta + Track List */}
						<div className="flex flex-col gap-4">

							{/* Artwork with glow */}
							<div className="relative group/art self-center lg:self-auto w-full max-w-[220px]">
								{artworkUrl && (
									<div
										className="absolute -inset-3 rounded-2xl opacity-0 group-hover/art:opacity-60 transition-opacity duration-700 pointer-events-none blur-xl"
										style={{ background: "linear-gradient(135deg, #6366f1, #1DB954)" }}
									/>
								)}
								<div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
									{artworkUrl ? (
										<img
											src={artworkUrl}
											alt={playlistTitle || "Playlist"}
											className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center"
											style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
											<Music2 className="w-10 h-10 text-slate-600" />
										</div>
									)}
									<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
								</div>
							</div>

							{/* Playlist meta + Owner identity block */}
							{playlistTitle ? (
								<div className="space-y-3">
									{/* Title */}
									<div>
										<p className="text-[10px] tracking-[0.15em] uppercase font-semibold text-slate-500 mb-1">Now Listening</p>
										<h4 className="text-sm font-bold text-white leading-snug"
											style={{ background: "linear-gradient(90deg, #fff 50%, #a5b4fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
											{playlistTitle}
										</h4>
									</div>

									{/* Track count */}
									{totalTracks && (
										<div className="flex items-center gap-1.5 text-xs text-slate-500">
											<ListMusic className="w-3 h-3 text-slate-600 flex-shrink-0" />
											{totalTracks} tracks in playlist
										</div>
									)}

									{/* ── Owner identity card ── */}
									{playlistOwner && (
										<div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/8 backdrop-blur-sm">
											{/* Avatar initial */}
											<div
												className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0 shadow-md"
												style={{ background: "linear-gradient(135deg, #6366f1, #1DB954)" }}
											>
												{playlistOwner.charAt(0).toUpperCase()}
											</div>
											<div className="min-w-0">
												<p className="text-xs font-bold text-white truncate">{playlistOwner}</p>
												<p className="text-[10px] text-slate-500 mt-0.5">Playlist Owner</p>
											</div>
										</div>
									)}
								</div>
							) : !currentPlaylistId ? (
								<div className="space-y-1.5 py-2">
									<p className="text-xs font-semibold text-slate-400">No playlist configured</p>
									<p className="text-[11px] text-slate-600 leading-relaxed">
										Add <code className="text-indigo-400">SPOTIFY_PLAYLIST_ID</code> to .env.local
									</p>
								</div>
							) : null}

							{/* Track preview list */}
							{tracks.length > 0 && (
								<div className="rounded-xl overflow-hidden border border-white/8 bg-white/[0.025]">
									{tracks.map((track, i) => (
										<div key={i}
											className="flex items-center gap-3 px-3.5 py-2.5 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors group/track cursor-default">
											<span className="text-[10px] font-mono text-slate-700 w-4 text-right flex-shrink-0">{i + 1}</span>
											<div className="flex-1 min-w-0">
												<p className="text-[11px] font-semibold text-slate-300 truncate group-hover/track:text-white transition-colors">{track.name}</p>
												<p className="text-[10px] text-slate-600 truncate">{track.artist}</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						{/* Right Column: Tabs + Embed + Status */}
						<div className="flex flex-col gap-4">

							{/* Playlist tabs */}
							{availablePlaylists.length >= 2 && (
								<div className="flex flex-wrap gap-2">
									{availablePlaylists.map((pl, i) => {
										const isSel = currentPlaylistId === pl.id;
										return (
											<button
												key={pl.id}
												onClick={() => setSelectedId(pl.id)}
												className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
													isSel
														? "bg-indigo-500/20 border-indigo-400/40 text-white shadow-lg shadow-indigo-500/10"
														: "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/8"
												}`}
											>
												<span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isSel ? "bg-[#1ed760] shadow-[0_0_6px_#1ed760]" : "bg-slate-600"}`} />
												{pl.title || `Playlist ${i + 1}`}
											</button>
										);
									})}
								</div>
							)}

							{/* Spotify embed */}
							{currentPlaylistId ? (
								<div className="flex-1 rounded-2xl overflow-hidden border border-white/8 bg-black/20" style={{ minHeight: "380px" }}>
									<iframe
										src={`https://open.spotify.com/embed/playlist/${currentPlaylistId}?utm_source=generator&theme=0`}
										width="100%"
										height="100%"
										style={{ minHeight: "380px", display: "block" }}
										frameBorder="0"
										allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
										loading="lazy"
										title="Spotify Playlist"
									/>
								</div>
							) : (
								<div className="flex-1 rounded-2xl border border-dashed border-white/10 flex items-center justify-center bg-white/[0.01]" style={{ minHeight: "380px" }}>
									<div className="text-center space-y-3 px-6">
										<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto">
											<Music2 className="w-6 h-6 text-indigo-400" />
										</div>
										<p className="text-sm font-bold text-slate-300">No Playlist Configured</p>
										<p className="text-xs text-slate-500 max-w-[260px] leading-relaxed">
											Add <code className="text-indigo-400 font-mono">SPOTIFY_PLAYLIST_ID</code> to your <code className="text-indigo-400 font-mono">.env.local</code> to stream your soundscape.
										</p>
									</div>
								</div>
							)}

							{/* Status footer */}
							<div className="flex items-center gap-2 text-[11px] text-slate-600">
								<span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
									isFetching ? "bg-amber-400 animate-ping" : isDevConfigured ? "bg-[#1ed760] animate-pulse" : "bg-slate-700"
								}`} />
								<span>
									{isFetching
										? "Syncing with Spotify…"
										: isDevConfigured
										? `Spotify Web API · ${playlistTitle || "Ready"}`
										: "Spotify Web API Ready"}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpotifyPlaylist;
