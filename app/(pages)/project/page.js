"use client";

import { useState } from "react";
import Link from "next/link";
import { 
	ArrowLeft, 
	FolderGit2, 
	ExternalLink, 
	CheckCircle2, 
	Cpu, 
	ShieldCheck 
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects, projectCategories } from "@/data/portfolioData";

export default function ProjectPage() {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredProjects = activeCategory === "all"
		? projects
		: projects.filter(p => p.category === activeCategory);

	return (
		<div className="py-8 space-y-10">
			{/* Back button */}
			<div>
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
				>
					<ArrowLeft className="w-3.5 h-3.5" />
					<span>Back to Home</span>
				</Link>
			</div>

			{/* Page Header */}
			<div className="max-w-3xl">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
					<FolderGit2 className="w-3.5 h-3.5" />
					<span>Engineering Portfolio</span>
				</div>
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
					Project Deep Dives & <span className="text-gradient-accent">Case Studies</span>
				</h1>
				<p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
					Detailed architectural breakdowns of production applications, machine learning experiments, and enterprise web solutions built by Sahil Alam.
				</p>
			</div>

			{/* Filter Pills */}
			<div className="flex flex-wrap items-center gap-2">
				{projectCategories.map(cat => (
					<button
						key={cat.id}
						onClick={() => setActiveCategory(cat.id)}
						className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
							activeCategory === cat.id
								? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
								: "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
						}`}
					>
						{cat.label}
					</button>
				))}
			</div>

			{/* Case Studies List */}
			<div className="space-y-8">
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
					>
						<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-white/5">
							<div>
								<div className="flex items-center gap-2.5 flex-wrap mb-1.5">
									<span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
										{project.status}
									</span>
									<span className="text-xs text-indigo-400 font-semibold">
										{project.subtitle}
									</span>
								</div>
								<h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
									{project.title}
								</h2>
								<p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
									{project.description}
								</p>
							</div>

							<div className="flex items-center gap-2.5 shrink-0">
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
									>
										<GithubIcon className="w-3.5 h-3.5" />
										<span>Source Code</span>
									</a>
								)}
								{project.live && (
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors"
									>
										<ExternalLink className="w-3.5 h-3.5" />
										<span>Live App</span>
									</a>
								)}
							</div>
						</div>

						{/* Metrics Row */}
						<div className="grid grid-cols-3 gap-2.5 my-5">
							{project.metrics.map((m, idx) => (
								<div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
									<div className="text-xs sm:text-sm font-bold text-white">{m.value}</div>
									<div className="text-[9px] text-slate-400 font-mono uppercase mt-0.5">{m.label}</div>
								</div>
							))}
						</div>

						{/* Problem & Solution Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
							<div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
								<h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
									<ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
									<span>Problem Statement</span>
								</h3>
								<p className="text-xs text-slate-400 leading-relaxed">
									{project.problemStatement}
								</p>
							</div>

							<div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
								<h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
									<Cpu className="w-3.5 h-3.5 text-indigo-400" />
									<span>Technical Architecture</span>
								</h3>
								<p className="text-xs text-slate-400 leading-relaxed">
									{project.solutionArchitecture}
								</p>
							</div>
						</div>

						{/* Key Features Bullet List */}
						<div className="space-y-1.5 mb-5">
							<h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
								Core Features & Technical Highlights
							</h4>
							{project.keyPoints.map((feat, fIdx) => (
								<div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
									<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
									<span>{feat}</span>
								</div>
							))}
						</div>

						{/* Tech stack badge list */}
						<div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
							<span className="text-[11px] text-slate-500 font-mono mr-1">Tech Stack:</span>
							{project.techStack.map((t, idx) => (
								<span
									key={idx}
									className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/5"
								>
									{t}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}