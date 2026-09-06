import { GraduationCap, BookOpen, Users, Compass, CheckCircle2, Award, Sparkles, Code } from "lucide-react";
import { personalInfo, educationList, coursework, honorsAndAchievements } from "@/data/portfolioData";

const About = () => {
	return (
		<section id="about" className="py-8 scroll-mt-24">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2.5">
					<Compass className="w-3.5 h-3.5" />
					<span>Background & Trajectory</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					About <span className="text-gradient-accent">{personalInfo.name}</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
					Bridging elegant, reactive frontend design with robust, maintainable backend architecture and applied machine learning.
				</p>
			</div>

			{/* Bento Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
				{/* Bento Item 1: Bio & Philosophy (Span 8) */}
				<div className="md:col-span-7 lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
					<div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
					
					<div>
						<div className="flex items-center gap-2 mb-4">
							<span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
							<h3 className="text-lg font-bold text-white tracking-tight">
								Engineering Background & Philosophy
							</h3>
						</div>
						
						<div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
							<p>
								I am a final-year Computer Science Engineering student at MAKAUT, Kolkata. My technical focus revolves around engineering reliable, scalable, and responsive web systems with clean separation of concerns.
							</p>
							<p>
								Currently working as a <strong className="text-white">Frontend React Developer at Elevate Healthcare Solutions</strong>, I build type-safe UI architectures using TypeScript, TanStack Query, and Zustand. On the server side, I design modular REST APIs with Spring Boot Modulith and MySQL.
							</p>
							<p>
								During my virtual internship with <strong className="text-white">Microsoft & Edunet Foundation</strong>, I was selected from 1,000+ applicants to construct an intelligent NLP Resume Classifier achieving an 87% accuracy rating.
							</p>
						</div>
					</div>

					{/* Bottom Accent Quote */}
					<div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
						<div className="text-xs text-slate-400 italic">
							&ldquo;Building software that balances bulletproof maintainability with intuitive elegance.&rdquo;
						</div>
						<span className="text-[11px] font-mono text-indigo-400 font-semibold shrink-0">
							B.Tech CSE &apos;26
						</span>
					</div>
				</div>

				{/* Bento Item 2: Mentorship Highlight (Span 5) */}
				<div className="md:col-span-5 lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
					
					<div>
						<div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-600/20">
							<Users className="w-5 h-5" />
						</div>
						<h3 className="text-lg font-bold text-white mb-2">
							Mentorship & Impact
						</h3>
						<p className="text-xs text-slate-300 leading-relaxed mb-4">
							Conducted 30+ structured live sessions mentoring over 50 students in core programming (Java, Python, C) and web development at SAS Academy.
						</p>

						<div className="space-y-2 text-xs text-slate-400">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>50+ students taught core programming</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>Live debugging & algorithmic problem solving</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>40% measured student code quality improvement</span>
							</div>
						</div>
					</div>

					<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
						<span className="text-slate-400">Total Sessions:</span>
						<span className="font-bold text-cyan-400 font-mono">30+ Structured Lectures</span>
					</div>
				</div>

				{/* Bento Item 3: Education Timeline (Span 7) */}
				<div className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8">
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center gap-2">
							<GraduationCap className="w-5 h-5 text-indigo-400" />
							<h3 className="text-lg font-bold text-white">
								Academic Milestone Timeline
							</h3>
						</div>
						<span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
							2018 - 2026
						</span>
					</div>

					<div className="relative border-l-2 border-indigo-500/20 ml-2 space-y-6 pl-5">
						{educationList.map((edu, idx) => (
							<div key={idx} className="relative group">
								<div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all" />
								<div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-all">
									<div className="flex items-center justify-between gap-2 mb-1">
										<span className="text-xs font-mono text-indigo-400 font-semibold">{edu.period}</span>
										<span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
											{edu.score}
										</span>
									</div>
									<h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
										{edu.degree}
									</h4>
									<div className="text-xs text-slate-400 mt-0.5">{edu.institution} &bull; {edu.location}</div>
									<p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{edu.highlight}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Bento Item 4: Coursework & Accolades (Span 5) */}
				<div className="md:col-span-5 flex flex-col gap-5">
					<div className="glass-card rounded-3xl p-6 sm:p-7">
						<div className="flex items-center gap-2 mb-4">
							<BookOpen className="w-4 h-4 text-cyan-400" />
							<h3 className="text-base font-bold text-white">Core Academic Coursework</h3>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
							{coursework.map((course, cIdx) => (
								<div key={cIdx} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-[11px] font-medium text-slate-300">
									<CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
									<span className="truncate">{course}</span>
								</div>
							))}
						</div>
					</div>

					<div className="glass-card rounded-3xl p-6 sm:p-7">
						<div className="flex items-center gap-2 mb-3">
							<Award className="w-4 h-4 text-amber-400" />
							<h3 className="text-base font-bold text-white">Hackathons & Accolades</h3>
						</div>
						<ul className="space-y-2.5 text-xs text-slate-300">
							{honorsAndAchievements.map((item, hIdx) => (
								<li key={hIdx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
									<div className="font-semibold text-white">{item.title}</div>
									<div className="text-slate-400 text-[11px] mt-0.5">{item.description}</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;