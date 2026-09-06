import Link from "next/link";
import { 
	GraduationCap, 
	Users, 
	Award, 
	CheckCircle2, 
	ArrowLeft, 
	FileText, 
	Compass, 
	Laptop 
} from "lucide-react";
import { personalInfo, educationList, coursework, honorsAndAchievements } from "@/data/portfolioData";

export const metadata = {
	title: `About Me | ${personalInfo.name}`,
	description: `Discover the educational background, software development journey, and mentorship experience of ${personalInfo.name}.`,
};

export default function AboutPage() {
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
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
					<Compass className="w-3.5 h-3.5" />
					<span>Biography & Background</span>
				</div>
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
					About <span className="text-gradient-accent">{personalInfo.name}</span>
				</h1>
				<p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
					{personalInfo.longBio}
				</p>
			</div>

			{/* Narrative Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
				<div className="lg:col-span-8 space-y-6">
					{/* Journey section */}
					<div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
						<h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
							<Laptop className="w-5 h-5 text-cyan-400" />
							<span>My Engineering Journey</span>
						</h2>
						<p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
							I discovered programming early through computational problem-solving and algorithms. Over the past four years as a Computer Science student at MAKAUT, I evolved from writing CLI tools in C and Java to architecting complex full-stack web platforms and interactive user experiences.
						</p>
						<p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
							At <strong className="text-white">Elevate Healthcare Solutions</strong>, I specialize in crafting responsive, type-safe frontend dashboards with React, TypeScript, TanStack Query, and Zustand. Working in distributed teams has instilled in me a deep appreciation for clean architecture, automated API synchronization, component modularity, and peer code reviews.
						</p>
						<p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
							On the backend, I leverage <strong className="text-white">Spring Boot (Modulith)</strong> and MySQL to construct scalable, decoupled business modules with role-based JWT security, automated validations, and clean RESTful API contracts.
						</p>
					</div>

					{/* Education Milestones */}
					<div className="glass-card rounded-3xl p-6 sm:p-8">
						<div className="flex items-center justify-between mb-6">
							<h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
								<GraduationCap className="w-5 h-5 text-indigo-400" />
								<span>Detailed Academic Record</span>
							</h2>
							<span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
								Class of 2026
							</span>
						</div>

						<div className="space-y-5">
							{educationList.map((item, idx) => (
								<div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
										<div>
											<span className="text-xs font-mono text-indigo-400 font-semibold">{item.period}</span>
											<h3 className="text-base font-bold text-white">{item.degree}</h3>
											<div className="text-xs text-slate-400">{item.institution} &bull; {item.location}</div>
										</div>
										<span className="self-start sm:self-center px-2.5 py-0.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
											{item.score}
										</span>
									</div>
									<p className="text-xs text-slate-400 leading-relaxed">{item.highlight}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Right Sidebar: Mentorship & Achievements */}
				<div className="lg:col-span-4 space-y-5">
					{/* Mentorship Card */}
					<div className="glass-card rounded-3xl p-6 relative overflow-hidden">
						<div className="w-9 h-9 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
							<Users className="w-4 h-4" />
						</div>
						<h3 className="text-base font-bold text-white mb-1.5">Teaching & Mentorship</h3>
						<p className="text-xs text-slate-300 leading-relaxed mb-3">
							At SAS Academy, I conducted over 30 structured live lectures teaching Java, Python, C, and Web Development to more than 50 students.
						</p>
						<div className="space-y-1.5 text-xs text-slate-400">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>Live interactive debugging sessions</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>Structured curriculum & homework</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
								<span>Improved student code quality by 40%</span>
							</div>
						</div>
					</div>

					{/* Key Accolades */}
					<div className="glass-card rounded-3xl p-6">
						<div className="w-9 h-9 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
							<Award className="w-4 h-4" />
						</div>
						<h3 className="text-base font-bold text-white mb-2.5">Honors & Competitions</h3>
						<ul className="space-y-2 text-xs text-slate-300">
							{honorsAndAchievements.map((item, idx) => (
								<li key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
									<div className="font-semibold text-white">{item.title}</div>
									<div className="text-slate-400 text-[11px] mt-0.5">{item.description}</div>
								</li>
							))}
						</ul>
					</div>

					{/* Resume Action */}
					<div className="glass-card rounded-3xl p-5 text-center space-y-2.5 border-indigo-500/30">
						<FileText className="w-7 h-7 text-indigo-400 mx-auto" />
						<div className="text-xs sm:text-sm font-bold text-white">Official Resume</div>
						<p className="text-[11px] text-slate-400">Download the verified PDF document with comprehensive contact information.</p>
						<a
							href={personalInfo.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
						>
							View Resume PDF
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}