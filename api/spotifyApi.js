"use client";

import { useQuery } from "@tanstack/react-query";
import request from "./request";

/**
 * Fetch Spotify playlist details and oEmbed metadata using Axios
 * @param {string} [playlistId] - Spotify playlist ID
 * @returns {Promise<Object>} Playlist metadata response
 */
export async function getSpotifyPlaylist(playlistId) {
	const response = await request.get("/api/spotify", {
		params: playlistId ? { playlistId } : {},
	});
	return response.data;
}

/**
 * TanStack Query hook for fetching and caching Spotify playlist metadata
 * @param {string} playlistId - Spotify playlist ID
 * @param {Object} [options] - Additional TanStack useQuery options
 * @returns {import("@tanstack/react-query").UseQueryResult}
 */
export function useSpotifyPlaylist(playlistId, options = {}) {
	return useQuery({
		queryKey: ["spotify-dev-playlist", playlistId],
		queryFn: () => getSpotifyPlaylist(playlistId || undefined),
		staleTime: 1000 * 60 * 10, // 10 minutes fresh cache
		...options,
	});
}

export default getSpotifyPlaylist;
