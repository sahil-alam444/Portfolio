import { Briefcase, Calendar, MapPin, ChevronRight, Layers, Sparkles } from "lucide-react";
import { experiences } from "@/data/portfolioData";

const Experience = () => {
	return (
		<section id="experience" className="py-8 scroll-mt-24">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
					<Briefcase className="w-3.5 h-3.5" />
					<span>Professional Experience</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					Work <span className="text-gradient-accent">History</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
					Demonstrated history across startup product development, modular full-stack architecture, and technical education.
				</p>
			</div>

			{/* Experience Cards */}
			<div className="space-y-6 max-w-4xl mx-auto">
				{experiences.map((exp) => (
					<div
						key={exp.id}
						className="glass-card rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
					>
						{/* Active indicator bar */}
						{exp.current && (
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
						)}

						<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
							<div>
								<div className="flex items-center gap-2.5 flex-wrap">
									<h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
										{exp.role}
									</h3>
									{exp.current && (
										<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
											<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
											{exp.badge}
										</span>
									)}
								</div>

								<div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2 flex-wrap">
									<span className="text-indigo-400">{exp.company}</span>
									<span className="text-slate-500">•</span>
									<span className="text-slate-400">{exp.type}</span>
								</div>
							</div>

							<div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 shrink-0 font-mono">
								<div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-xl border border-white/5">
									<Calendar className="w-3.5 h-3.5 text-indigo-400" />
									<span>{exp.period}</span>
								</div>
								<div className="flex items-center gap-1 text-[11px] text-slate-500 pr-1">
									<MapPin className="w-3 h-3" />
									<span>{exp.location}</span>
								</div>
							</div>
						</div>

						{/* Summary */}
						<p className="text-xs sm:text-sm text-slate-300 mt-1 mb-4 leading-relaxed">
							{exp.summary}
						</p>

						{/* Achievements */}
						<ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
							{exp.achievements.map((item, bulletIdx) => (
								<li key={bulletIdx} className="flex items-start gap-2.5 leading-relaxed">
									<ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
									<span>{item}</span>
								</li>
							))}
						</ul>

						{/* Tech stack pills */}
						<div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
							<span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
								<Layers className="w-3 h-3 text-slate-500" />
								Stack:
							</span>
							{exp.techStack.map((tech, techIdx) => (
								<span
									key={techIdx}
									className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;
