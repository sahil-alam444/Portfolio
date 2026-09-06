"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowDownTrayIcon, SparklesIcon, FileText, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Home", href: "/#home" },
		{ name: "About", href: "/#about" },
		{ name: "Experience", href: "/#experience" },
		{ name: "Projects", href: "/#projects" },
		{ name: "Skills", href: "/#skills" },
		{ name: "Hobbies", href: "/#hobbies" },
		{ name: "Contact", href: "/#contact" },
	];

	return (
		<header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<nav className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
					scrolled 
						? "bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-950/20" 
						: "bg-slate-900/40 backdrop-blur-md border border-white/5"
				}`}>
					{/* Brand Monogram */}
					<Link href="/#home" className="flex items-center gap-3 group">
						<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
							SA
						</div>
						<div className="flex flex-col">
							<span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
								SAHIL ALAM
							</span>
							<span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
								Frontend & Full-Stack
							</span>
						</div>
					</Link>

					{/* Desktop Navigation Links */}
					<ul className="hidden md:flex items-center gap-1 lg:gap-2">
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					{/* Right CTA Actions */}
					<div className="hidden sm:flex items-center gap-3">
						<a
							href={personalInfo.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
						>
							<FileText className="w-3.5 h-3.5 text-indigo-400" />
							<span>Resume</span>
						</a>

						<Link
							href="/#contact"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
						>
							<Send className="w-3.5 h-3.5" />
							<span>Get In Touch</span>
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<div className="flex sm:hidden items-center gap-2">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
							aria-label="Toggle Navigation Menu"
						>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</nav>

				{/* Mobile Dropdown Menu */}
				{mobileMenuOpen && (
					<div className="sm:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
						<ul className="flex flex-col gap-2">
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
							<a
								href={personalInfo.resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMobileMenuOpen(false)}
								className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-white/10"
							>
								<FileText className="w-4 h-4 text-indigo-400" />
								<span>Download Resume</span>
							</a>
							<Link
								href="/#contact"
								onClick={() => setMobileMenuOpen(false)}
								className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-600/30"
							>
								<Send className="w-4 h-4" />
								<span>Get In Touch</span>
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};