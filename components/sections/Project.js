"use client";

import { useState } from "react";
import Link from "next/link";
import { 
	ExternalLink, 
	FolderGit2, 
	CheckCircle2, 
	ArrowUpRight, 
	Info, 
	X, 
	Cpu, 
	ShieldCheck, 
	Layers 
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects, projectCategories } from "@/data/portfolioData";

const Project = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [selectedProject, setSelectedProject] = useState(null);

	const filteredProjects = activeCategory === "all"
		? projects
		: projects.filter(p => p.category === activeCategory);

	return (
		<section id="projects" className="py-8 scroll-mt-24">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
					<FolderGit2 className="w-3.5 h-3.5" />
					<span>Featured Portfolio</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					Engineered <span className="text-gradient-accent">Projects</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
					Real-world systems, full-stack educational platforms, applied machine learning pipelines, and interactive game physics.
				</p>
			</div>

			{/* Category Filter Tabs */}
			<div className="flex flex-wrap items-center justify-center gap-2 mb-8">
				{projectCategories.map(cat => (
					<button
						key={cat.id}
						onClick={() => setActiveCategory(cat.id)}
						className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
							activeCategory === cat.id
								? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
								: "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
						}`}
					>
						{cat.label}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-indigo-500/40 relative overflow-hidden transition-all duration-300"
					>
						{/* Top glowing ambient accent */}
						<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
						<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

						<div>
							{/* Card Header */}
							<div className="flex items-start justify-between gap-3 mb-3">
								<span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
									{project.status}
								</span>

								<div className="flex items-center gap-2">
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
											aria-label="GitHub Repository"
										>
											<GithubIcon className="w-4 h-4" />
										</a>
									)}
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 transition-colors"
											aria-label="Live Demo Link"
										>
											<ExternalLink className="w-4 h-4" />
										</a>
									)}
								</div>
							</div>

							{/* Title & Subtitle */}
							<h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
								{project.title}
							</h3>
							<div className="text-xs font-medium text-slate-400 mt-0.5 mb-3">
								{project.subtitle}
							</div>

							{/* Description */}
							<p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
								{project.description}
							</p>

							{/* Metrics Banner */}
							<div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-4 text-center">
								{project.metrics.map((metric, mIdx) => (
									<div key={mIdx}>
										<div className="text-xs sm:text-sm font-bold text-white">{metric.value}</div>
										<div className="text-[9px] text-slate-400 font-mono uppercase">{metric.label}</div>
									</div>
								))}
							</div>

							{/* Key Architecture Points */}
							<div className="space-y-1.5 mb-4">
								{project.keyPoints.slice(0, 3).map((pt, pIdx) => (
									<div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
										<CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
										<span>{pt}</span>
									</div>
								))}
							</div>
						</div>

						{/* Card Footer: Tech stack & Details button */}
						<div>
							<div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 mb-3">
								{project.techStack.map((tech, tIdx) => (
									<span
										key={tIdx}
										className="px-2 py-0.5 rounded-lg text-[10px] font-medium text-slate-300 bg-white/5 border border-white/5"
									>
										{tech}
									</span>
								))}
							</div>

							<button
								onClick={() => setSelectedProject(project)}
								className="w-full py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
							>
								<Info className="w-3.5 h-3.5 text-indigo-400" />
								<span>View Architecture & Case Study</span>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Interactive Quick View Modal */}
			{selectedProject && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
					<div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-5">
						{/* Close Button */}
						<button
							onClick={() => setSelectedProject(null)}
							className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
						>
							<X className="w-5 h-5" />
						</button>

						<div>
							<span className="text-xs font-mono text-indigo-400 font-semibold">{selectedProject.status}</span>
							<h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
							<div className="text-xs text-slate-400 mt-0.5">{selectedProject.subtitle}</div>
						</div>

						{/* Problem & Solution */}
						<div className="space-y-3 pt-2">
							<div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
								<h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
									<ShieldCheck className="w-4 h-4" />
									<span>Problem Statement</span>
								</h4>
								<p className="text-xs text-slate-300 leading-relaxed">{selectedProject.problemStatement}</p>
							</div>

							<div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
								<h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
									<Cpu className="w-4 h-4" />
									<span>Technical Architecture</span>
								</h4>
								<p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solutionArchitecture}</p>
							</div>
						</div>

						{/* All Features */}
						<div>
							<h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Key Implementation Details</h4>
							<ul className="space-y-1.5">
								{selectedProject.keyPoints.map((pt, idx) => (
									<li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
										<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
										<span>{pt}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Full Tech Stack */}
						<div>
							<h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Technologies Used</h4>
							<div className="flex flex-wrap gap-1.5">
								{selectedProject.techStack.map((tech, idx) => (
									<span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10">
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Action buttons */}
						<div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
							{selectedProject.github && (
								<a
									href={selectedProject.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10"
								>
									<GithubIcon className="w-4 h-4" />
									<span>GitHub Repository</span>
								</a>
							)}
							{selectedProject.live && (
								<a
									href={selectedProject.live}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25"
								>
									<ExternalLink className="w-4 h-4" />
									<span>Launch App</span>
								</a>
							)}
						</div>
					</div>
				</div>
			)}

			{/* Link to Full Projects Page */}
			<div className="mt-8 text-center">
				<Link
					href="/project"
					className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
				>
					<span>View Complete Case Studies Catalog</span>
					<ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
				</Link>
			</div>
		</section>
	);
};

export default Project;