"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { ArrowUpRight, Download, Mail, Sparkles, Code2, Award, Terminal, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

const Hero = () => {
	const typedElement = useRef(null);

	useEffect(() => {
		const typed = new Typed(typedElement.current, {
			strings: personalInfo.typedRoles,
			typeSpeed: 50,
			backSpeed: 30,
			backDelay: 1600,
			loop: true,
			showCursor: true,
			cursorChar: "|",
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<section id="home" className="relative pt-6 pb-12 lg:pt-12 lg:pb-16 scroll-mt-24">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
				{/* Left Column: Text & CTAs */}
				<div className="lg:col-span-7 flex flex-col items-start gap-5">
					{/* Status badge */}
					<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-xl shadow-lg shadow-indigo-950/50">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
						</span>
						<span>{personalInfo.status}</span>
						<span className="text-indigo-400/50">•</span>
						<span className="text-slate-400">{personalInfo.location}</span>
					</div>

					{/* Title & Typed Roles */}
					<div className="space-y-2">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
							Hello, I&apos;m{" "}
							<span className="text-gradient-accent">{personalInfo.name}</span>
						</h1>
						<div className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex items-center gap-2.5 min-h-[44px]">
							<span className="text-slate-400 font-normal">I engineer as a</span>
							<span ref={typedElement} className="text-indigo-400 font-bold" />
						</div>
					</div>

					{/* Bio Summary */}
					<p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
						{personalInfo.shortBio}
					</p>

					{/* Executive Key Metrics Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl py-1">
						{personalInfo.stats.map((stat, idx) => (
							<div key={idx} className="glass-card rounded-2xl p-3 text-center group hover:border-indigo-500/40 transition-all">
								<div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
									{stat.value}
								</div>
								<div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5">
									{stat.label}
								</div>
								<div className="text-[10px] text-slate-500 truncate mt-0.5">
									{stat.description}
								</div>
							</div>
						))}
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap items-center gap-3 pt-2">
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
						>
							<span>Explore Projects</span>
							<ArrowUpRight className="w-4 h-4" />
						</Link>

						<a
							href={personalInfo.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 group"
						>
							<Download className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
							<span>Resume</span>
						</a>

						{/* Quick Social Badges */}
						<div className="flex items-center gap-2 pl-1">
							<a
								href={personalInfo.socialLinks.github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all"
								aria-label="GitHub Profile"
							>
								<GithubIcon className="w-4 h-4" />
							</a>
							<a
								href={personalInfo.socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
								aria-label="LinkedIn Profile"
							>
								<LinkedinIcon className="w-4 h-4" />
							</a>
							<a
								href={personalInfo.socialLinks.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 transition-all"
								aria-label="Instagram Profile"
							>
								<InstagramIcon className="w-4 h-4" />
							</a>
							<a
								href={personalInfo.socialLinks.email}
								className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
								aria-label="Email Sahil"
							>
								<Mail className="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>

				{/* Right Column: Hero Portrait with Floating Tech Pills */}
				<div className="lg:col-span-5 flex justify-center lg:justify-end">
					<div className="relative w-full max-w-[340px] sm:max-w-[380px]">
						{/* Ambient decorative glowing backplate */}
						<div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-25 blur-2xl animate-pulse-slow -z-10" />

						{/* Portrait Card Container */}
						<div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-2.5 bg-slate-950/70 shadow-2xl">
							<div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900">
								<Image
									src="/images/Hero.jpg"
									alt={personalInfo.name}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									priority
									className="object-cover object-top hover:scale-105 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
								
								{/* Bottom Tag inside photo */}
								<div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
									<div className="flex items-center justify-between">
										<div>
											<div className="text-xs font-bold text-white">{personalInfo.name}</div>
											<div className="text-[10px] text-slate-400">Software Developer</div>
										</div>
										<span className="text-[10px] font-mono font-semibold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/30">
											React &bull; TS &bull; Spring
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Floating Tech Pill 1: Top Right */}
						<div className="absolute -top-3 -right-3 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/15 shadow-xl animate-float-gentle">
							<span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
							<span className="text-xs font-semibold text-slate-200">TypeScript & React</span>
						</div>

						{/* Floating Tech Pill 2: Bottom Left */}
						<div className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2.5 border border-white/15 shadow-xl animate-float-gentle" style={{ animationDelay: '2s' }}>
							<div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
								<Code2 className="w-4 h-4" />
							</div>
							<div>
								<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Current</div>
								<div className="text-xs font-bold text-white">Elevate Healthcare</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;