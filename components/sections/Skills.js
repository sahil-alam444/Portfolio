"use client";

import { useState } from "react";
import { Layers, Sparkles } from "lucide-react";
import { skills, skillCategories } from "@/data/portfolioData";

const Skills = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = activeCategory === "all"
		? skills
		: skills.filter(s => s.category === activeCategory);

	const getLevelDot = (level) => {
		switch (level) {
			case "Advanced":    return "bg-emerald-400";
			case "Proficient":  return "bg-indigo-400";
			case "Intermediate":return "bg-cyan-400";
			default:            return "bg-amber-400";
		}
	};

	const getLevelBadge = (level) => {
		switch (level) {
			case "Advanced":    return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
			case "Proficient":  return "bg-indigo-500/15 text-indigo-400 border-indigo-500/30";
			case "Intermediate":return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30";
			default:            return "bg-amber-500/15 text-amber-400 border-amber-500/30";
		}
	};

	const getProgressBarColor = (level) => {
		switch (level) {
			case "Advanced":    return "from-emerald-500 to-teal-400";
			case "Proficient":  return "from-indigo-500 to-cyan-400";
			case "Intermediate":return "from-cyan-500 to-blue-400";
			default:            return "from-amber-500 to-orange-400";
		}
	};

	return (
		<section id="skills" className="py-8 scroll-mt-24">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center mb-8">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2.5">
					<Layers className="w-3.5 h-3.5" />
					<span>Technical Competencies</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					Skills & <span className="text-gradient-accent">Technologies</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm hidden sm:block">
					A comprehensive technical arsenal developed across professional frontend engineering, enterprise full-stack development, and academic research.
				</p>
			</div>

			{/* Category Filter Pills */}
			<div className="flex flex-wrap items-center justify-center gap-2 mb-6">
				{skillCategories.map(cat => (
					<button
						key={cat.id}
						onClick={() => setActiveCategory(cat.id)}
						className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
							activeCategory === cat.id
								? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
								: "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
						}`}
					>
						{cat.label}
					</button>
				))}
			</div>

			{/* ── MOBILE: Compact chip grid (2-col) ── */}
			<div className="grid grid-cols-2 gap-2 lg:hidden">
				{filteredSkills.map((skill, index) => (
					<div
						key={index}
						className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-150"
					>
						<span className={`w-2 h-2 rounded-full flex-shrink-0 ${getLevelDot(skill.level)}`} />
						<div className="flex-1 min-w-0">
							<p className="text-xs font-semibold text-slate-200 truncate leading-tight">{skill.name}</p>
							<p className={`text-[10px] font-medium mt-0.5 ${
								skill.level === "Advanced" ? "text-emerald-400" :
								skill.level === "Proficient" ? "text-indigo-400" :
								skill.level === "Intermediate" ? "text-cyan-400" : "text-amber-400"
							}`}>{skill.level}</p>
						</div>
					</div>
				))}
			</div>

			{/* ── DESKTOP: Full detail cards ── */}
			<div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-3.5">
				{filteredSkills.map((skill, index) => (
					<div
						key={index}
						className="glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-200"
					>
						<div>
							<div className="flex items-center justify-between gap-2 mb-1.5">
								<h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
									{skill.name}
								</h3>
								<span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${getLevelBadge(skill.level)}`}>
									{skill.level}
								</span>
							</div>
							<p className="text-[11px] text-slate-400 leading-relaxed min-h-[34px]">
								{skill.desc}
							</p>
						</div>
						<div className="mt-3 pt-2.5 border-t border-white/5">
							<div className="flex items-center justify-between text-[10px] text-slate-500 mb-1 font-mono">
								<span className="capitalize">{skill.category}</span>
								<span>{skill.proficiency}%</span>
							</div>
							<div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
								<div
									className={`h-full rounded-full bg-gradient-to-r ${getProgressBarColor(skill.level)} transition-all duration-500`}
									style={{ width: `${skill.proficiency}%` }}
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Soft Skills Banner */}
			<div className="mt-6 p-4 sm:p-6 rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-cyan-500/20">
						<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
					</div>
					<div>
						<h4 className="text-xs sm:text-sm font-bold text-white">Engineering Practices & Soft Skills</h4>
						<p className="text-[11px] text-slate-400 hidden sm:block">Live debugging under pressure, adaptive teaching, clean code conventions, and high velocity.</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-1.5 sm:gap-2">
					{["Live Debugging", "Adaptive Teaching", "Peer Code Reviews", "Agile Workflow"].map(tag => (
						<span key={tag} className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
							{tag}
						</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
