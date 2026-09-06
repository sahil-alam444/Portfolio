"use client";

import { useState } from "react";
import { 
	Play, 
	Pause, 
	Volume2, 
	VolumeX, 
	Music, 
	Disc3, 
	SkipBack, 
	SkipForward, 
	ChevronUp, 
	ChevronDown, 
	Minimize2, 
	Maximize2,
	Radio
} from "lucide-react";
import { useAudio } from "@/components/providers/AudioProvider";

export const MusicPlayer = () => {
	const { 
		isPlaying, 
		togglePlay, 
		currentTrack, 
		currentChordName, 
		nextTrack, 
		prevTrack, 
		volume, 
		handleVolumeChange, 
		isMuted, 
		toggleMute 
	} = useAudio();

	const [isExpanded, setIsExpanded] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);

	return (
		<div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 select-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
			{/* Minimized Bottom-Left Pill */}
			{isMinimized ? (
				<div className="glass-card-interactive rounded-2xl p-2 border border-white/15 shadow-2xl backdrop-blur-2xl flex items-center gap-2">
					<button
						onClick={togglePlay}
						className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
							isPlaying
								? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30"
								: "bg-white/10 text-slate-300 hover:text-white"
						}`}
						title={isPlaying ? "Pause Music" : "Play Music"}
					>
						{isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />}
					</button>

					<div 
						onClick={() => setIsMinimized(false)}
						className="flex items-center gap-1.5 cursor-pointer pr-1"
					>
						<span className="text-[11px] font-bold text-white tracking-tight max-w-[100px] truncate">
							{currentTrack.title}
						</span>
						{isPlaying && (
							<span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono font-semibold">
								{currentChordName}
							</span>
						)}
					</div>

					{/* Mini animated equalizer */}
					<div 
						onClick={togglePlay}
						className="flex items-end gap-0.5 h-3.5 px-1 cursor-pointer"
					>
						<span className={`w-0.5 rounded-full bg-indigo-400 ${isPlaying ? "animate-pulse h-3.5" : "h-1 opacity-30"}`} />
						<span className={`w-0.5 rounded-full bg-cyan-400 ${isPlaying ? "animate-pulse h-4" : "h-1.5 opacity-30"}`} style={{ animationDelay: "0.2s" }} />
						<span className={`w-0.5 rounded-full bg-emerald-400 ${isPlaying ? "animate-pulse h-2.5" : "h-1 opacity-30"}`} style={{ animationDelay: "0.4s" }} />
					</div>

					<button
						onClick={() => setIsMinimized(false)}
						className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
						title="Expand Player"
					>
						<Maximize2 className="w-3.5 h-3.5" />
					</button>
				</div>
			) : (
				/* Full Bottom-Left Screen Music Player */
				<div className="glass-card-interactive rounded-2xl p-3 sm:p-3.5 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col gap-2.5 max-w-[320px] sm:max-w-[360px] transition-all duration-300">
					{/* Top Header: Now Playing status & minimize */}
					<div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
						<div className="flex items-center gap-2">
							<span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
							<span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
								<span>Website Audio</span>
								<span className="text-slate-600">•</span>
								<span className="text-indigo-400">{currentTrack.genre}</span>
							</span>
						</div>

						<div className="flex items-center gap-1">
							{isPlaying && (
								<span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono font-bold border border-indigo-500/30">
									{currentChordName}
								</span>
							)}
							<button
								onClick={() => setIsMinimized(true)}
								className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
								title="Minimize to bottom-left pill"
							>
								<Minimize2 className="w-3 h-3" />
							</button>
						</div>
					</div>

					{/* Track Info & Vinyl Art */}
					<div className="flex items-center gap-3">
						{/* Spinning Vinyl Cover Art */}
						<div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
							<div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${currentTrack.coverColor} flex items-center justify-center ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: '4s' }}>
								<div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-white/40" />
							</div>
						</div>

						{/* Title & Artist */}
						<div className="flex flex-col min-w-0 flex-1">
							<div className="text-xs font-bold text-white tracking-tight truncate">
								{currentTrack.title}
							</div>
							<div className="text-[11px] text-slate-400 truncate mt-0.5">
								{currentTrack.artist}
							</div>
						</div>

						{/* Animated Equalizer Frequency Bars */}
						<div 
							onClick={togglePlay}
							className="flex items-end gap-1 h-5 px-1 cursor-pointer shrink-0"
							title="Audio frequency visualizer"
						>
							<span className={`w-1 rounded-full bg-indigo-400 transition-all ${isPlaying ? "animate-pulse h-4" : "h-1.5 opacity-40"}`} />
							<span className={`w-1 rounded-full bg-cyan-400 transition-all ${isPlaying ? "animate-pulse h-5" : "h-2 opacity-40"}`} style={{ animationDelay: "0.2s" }} />
							<span className={`w-1 rounded-full bg-emerald-400 transition-all ${isPlaying ? "animate-pulse h-3" : "h-1 opacity-40"}`} style={{ animationDelay: "0.4s" }} />
							<span className={`w-1 rounded-full bg-indigo-400 transition-all ${isPlaying ? "animate-pulse h-4" : "h-1.5 opacity-40"}`} style={{ animationDelay: "0.15s" }} />
						</div>
					</div>

					{/* Playback Controls Row */}
					<div className="flex items-center justify-between pt-1">
						<div className="flex items-center gap-1.5">
							{/* Prev Track */}
							<button
								onClick={prevTrack}
								className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
								title="Previous Soundscape"
							>
								<SkipBack className="w-3.5 h-3.5 fill-current" />
							</button>

							{/* Play/Pause Button */}
							<button
								onClick={togglePlay}
								className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
									isPlaying
										? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-600/30 scale-105"
										: "bg-white/10 text-slate-300 hover:text-white hover:bg-white/15"
								}`}
								title={isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
							>
								{isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />}
							</button>

							{/* Next Track */}
							<button
								onClick={nextTrack}
								className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
								title="Next Soundscape"
							>
								<SkipForward className="w-3.5 h-3.5 fill-current" />
							</button>
						</div>

						{/* Volume Expander Chevron */}
						<div className="flex items-center gap-1">
							<button
								onClick={toggleMute}
								className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
								title={isMuted ? "Unmute" : "Mute"}
							>
								{isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
							</button>

							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
								title={isExpanded ? "Hide Volume Slider" : "Show Volume Slider"}
							>
								{isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
							</button>
						</div>
					</div>

					{/* Expandable Audio Settings Panel */}
					{isExpanded && (
						<div className="pt-2 border-t border-white/10 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-1 duration-200">
							<span className="text-[10px] text-slate-400">Vol</span>
							<input
								type="range"
								min="0"
								max="1"
								step="0.05"
								value={isMuted ? 0 : volume}
								onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
								className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-indigo-500"
								title={`Volume: ${Math.round(volume * 100)}%`}
							/>
							<span className="text-[10px] font-mono text-slate-400 min-w-[28px] text-right">
								{Math.round((isMuted ? 0 : volume) * 100)}%
							</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MusicPlayer;
