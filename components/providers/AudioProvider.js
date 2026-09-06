"use client";

import { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext(null);

export const TRACKS = [
	{
		id: "lofi-beats",
		title: "Lo-Fi Coding Beats",
		artist: "Website Ambient Audio • Flow State",
		genre: "Neo-Soul Lo-Fi",
		coverColor: "from-indigo-600 via-purple-600 to-pink-500",
		chords: [
			{ name: "Dm9", freqs: [146.83, 220.00, 261.63, 329.63] },
			{ name: "G13", freqs: [196.00, 246.94, 329.63, 392.00] },
			{ name: "Cmaj9", freqs: [130.81, 196.00, 246.94, 329.63] },
			{ name: "Am9", freqs: [110.00, 164.81, 220.00, 261.63] },
		]
	},
	{
		id: "cyber-focus",
		title: "Midnight Deep Focus",
		artist: "Website Ambient Audio • Cyber Synth",
		genre: "Electronic Ambient",
		coverColor: "from-cyan-500 via-blue-600 to-indigo-600",
		chords: [
			{ name: "Bm7", freqs: [123.47, 185.00, 220.00, 293.66] },
			{ name: "Gmaj7", freqs: [98.00, 146.83, 196.00, 246.94] },
			{ name: "Em9", freqs: [82.41, 123.47, 164.81, 220.00] },
			{ name: "F#m7", freqs: [92.50, 146.83, 185.00, 220.00] },
		]
	},
	{
		id: "sunset-chill",
		title: "Sunset Chillhop",
		artist: "Website Ambient Audio • Analog Warmth",
		genre: "Chillhop Vibes",
		coverColor: "from-amber-500 via-rose-500 to-indigo-600",
		chords: [
			{ name: "Fmaj9", freqs: [174.61, 220.00, 261.63, 349.23] },
			{ name: "Em7", freqs: [164.81, 196.00, 246.94, 329.63] },
			{ name: "Dm7", freqs: [146.83, 174.61, 220.00, 261.63] },
			{ name: "Cmaj7", freqs: [130.81, 164.81, 196.00, 246.94] },
		]
	}
];

export const AudioProvider = ({ children }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(0.45);
	const [isMuted, setIsMuted] = useState(false);
	const [trackIndex, setTrackIndex] = useState(0);
	const [currentChordName, setCurrentChordName] = useState(TRACKS[0].chords[0].name);

	const audioContextRef = useRef(null);
	const masterGainRef = useRef(null);
	const timerIdRef = useRef(null);
	const chordIndexRef = useRef(0);
	const currentTrackRef = useRef(TRACKS[0]);

	// Keep ref in sync
	useEffect(() => {
		currentTrackRef.current = TRACKS[trackIndex];
		chordIndexRef.current = 0;
		setCurrentChordName(TRACKS[trackIndex].chords[0].name);
	}, [trackIndex]);

	// Initialize Web Audio ambient synthesizer
	const initSynth = () => {
		if (audioContextRef.current) return;

		try {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			const ctx = new AudioCtx();
			const masterGain = ctx.createGain();
			masterGain.gain.setValueAtTime(volume, ctx.currentTime);
			masterGain.connect(ctx.destination);

			audioContextRef.current = ctx;
			masterGainRef.current = masterGain;
		} catch (err) {
			console.error("Audio Context initialization failed:", err);
		}
	};

	const playChord = (chordData) => {
		if (!audioContextRef.current) return;
		const ctx = audioContextRef.current;
		const now = ctx.currentTime;
		const chordDuration = 5.0;

		setCurrentChordName(chordData.name);

		chordData.freqs.forEach((freq, idx) => {
			const osc = ctx.createOscillator();
			const gainNode = ctx.createGain();
			const filterNode = ctx.createBiquadFilter();

			osc.type = idx === 0 ? "sine" : "triangle";
			osc.frequency.setValueAtTime(freq, now);

			filterNode.type = "lowpass";
			filterNode.frequency.setValueAtTime(480 + idx * 80, now);
			filterNode.Q.setValueAtTime(1.5, now);

			gainNode.gain.setValueAtTime(0.0001, now);
			gainNode.gain.exponentialRampToValueAtTime(0.06 / (idx + 1), now + 1.2);
			gainNode.gain.exponentialRampToValueAtTime(0.0001, now + chordDuration);

			osc.connect(filterNode);
			filterNode.connect(gainNode);
			gainNode.connect(masterGainRef.current);

			osc.start(now);
			osc.stop(now + chordDuration + 0.1);
		});
	};

	const startAmbientLoop = () => {
		const loop = () => {
			if (!audioContextRef.current) return;
			const currentChords = currentTrackRef.current.chords;
			const chordData = currentChords[chordIndexRef.current];
			playChord(chordData);
			chordIndexRef.current = (chordIndexRef.current + 1) % currentChords.length;
			timerIdRef.current = setTimeout(loop, 4600);
		};

		loop();
	};

	const togglePlay = async () => {
		if (!audioContextRef.current) {
			initSynth();
		}

		if (audioContextRef.current?.state === "suspended") {
			await audioContextRef.current.resume();
		}

		if (isPlaying) {
			setIsPlaying(false);
			if (timerIdRef.current) clearTimeout(timerIdRef.current);
		} else {
			setIsPlaying(true);
			startAmbientLoop();
		}
	};

	const nextTrack = () => {
		if (timerIdRef.current) clearTimeout(timerIdRef.current);
		setTrackIndex((prev) => (prev + 1) % TRACKS.length);
		if (isPlaying) {
			setTimeout(() => {
				startAmbientLoop();
			}, 200);
		}
	};

	const prevTrack = () => {
		if (timerIdRef.current) clearTimeout(timerIdRef.current);
		setTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
		if (isPlaying) {
			setTimeout(() => {
				startAmbientLoop();
			}, 200);
		}
	};

	const handleVolumeChange = (newVol) => {
		setVolume(newVol);
		if (masterGainRef.current && audioContextRef.current) {
			masterGainRef.current.gain.setValueAtTime(
				isMuted ? 0 : newVol,
				audioContextRef.current.currentTime
			);
		}
	};

	const toggleMute = () => {
		const nextMute = !isMuted;
		setIsMuted(nextMute);
		if (masterGainRef.current && audioContextRef.current) {
			masterGainRef.current.gain.setValueAtTime(
				nextMute ? 0 : volume,
				audioContextRef.current.currentTime
			);
		}
	};

	useEffect(() => {
		return () => {
			if (timerIdRef.current) clearTimeout(timerIdRef.current);
			if (audioContextRef.current) {
				audioContextRef.current.close();
			}
		};
	}, []);

	const currentTrack = TRACKS[trackIndex];

	return (
		<AudioContext.Provider
			value={{
				isPlaying,
				togglePlay,
				currentTrack,
				currentChordName,
				trackIndex,
				nextTrack,
				prevTrack,
				volume,
				handleVolumeChange,
				isMuted,
				toggleMute,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
};

export const useAudio = () => {
	const context = useContext(AudioContext);
	if (!context) {
		throw new Error("useAudio must be used within an AudioProvider");
	}
	return context;
};
