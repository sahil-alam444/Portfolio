"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-xl mt-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
					{/* Col 1: Brand & Bio */}
					<div className="md:col-span-2 flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
								SA
							</div>
							<span className="text-lg font-bold tracking-tight text-white">
								SAHIL ALAM
							</span>
						</div>
						<p className="text-sm text-slate-400 max-w-md leading-relaxed">
							Frontend React Developer & Full-Stack Engineer specializing in scalable web applications, 
							modular Spring Boot architectures, and modern interactive user interfaces.
						</p>
						<div className="flex items-center gap-3 mt-2">
							<a
								href="https://github.com/sahil-alam444"
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
								aria-label="GitHub Profile"
							>
								<GithubIcon className="w-4 h-4" />
							</a>
							<a
								href={personalInfo.socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:scale-105"
								aria-label="LinkedIn Profile"
							>
								<LinkedinIcon className="w-4 h-4" />
							</a>
							<a
								href={personalInfo.socialLinks.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all duration-200 hover:scale-105"
								aria-label="Instagram Profile"
							>
								<InstagramIcon className="w-4 h-4" />
							</a>
							<a
								href="mailto:sa400919@gmail.com"
								className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-105"
								aria-label="Email Sahil"
							>
								<Mail className="w-4 h-4" />
							</a>
							<a
								href="https://sahilalamsoftdev.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200 hover:scale-105"
								aria-label="Web Profile"
							>
								<Globe className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Col 2: Navigation */}
					<div className="flex flex-col gap-3">
						<h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
							Navigation
						</h3>
						<ul className="flex flex-col gap-2 text-sm text-slate-400">
							<li><Link href="/#home" className="hover:text-white transition-colors">Home</Link></li>
							<li><Link href="/#about" className="hover:text-white transition-colors">About & Education</Link></li>
							<li><Link href="/#experience" className="hover:text-white transition-colors">Work Experience</Link></li>
							<li><Link href="/#projects" className="hover:text-white transition-colors">Featured Projects</Link></li>
							<li><Link href="/#skills" className="hover:text-white transition-colors">Technical Skills</Link></li>
							<li><Link href="/#contact" className="hover:text-white transition-colors">Get In Touch</Link></li>
							<li>
								<a
									href={personalInfo.resumeUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors inline-flex items-center gap-1.5"
								>
									Resume (PDF) ↗
								</a>
							</li>
						</ul>
					</div>

					{/* Col 3: Coordinates */}
					<div className="flex flex-col gap-3">
						<h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
							Contact Details
						</h3>
						<ul className="flex flex-col gap-2.5 text-sm text-slate-400">
							<li className="flex items-center gap-2.5">
								<MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
								<span>Kolkata, West Bengal, India</span>
							</li>
							<li className="flex items-center gap-2.5">
								<Mail className="w-4 h-4 text-indigo-400 shrink-0" />
								<a href="mailto:sa400919@gmail.com" className="hover:text-white transition-colors">
									sa400919@gmail.com
								</a>
							</li>
							<li className="flex items-center gap-2.5">
								<Phone className="w-4 h-4 text-indigo-400 shrink-0" />
								<a href="tel:+918017476702" className="hover:text-white transition-colors">
									+91-8017476702
								</a>
							</li>
							<li className="pt-2">
								<span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
									Available for new opportunities
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
					<p>© {new Date().getFullYear()} Sahil Alam. Crafted with Next.js, Tailwind CSS & React.</p>
					<button
						onClick={scrollToTop}
						className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all duration-200 group cursor-pointer"
					>
						<span>Back to Top</span>
						<ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</footer>
	);
};