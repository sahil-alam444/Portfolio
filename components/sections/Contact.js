"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
	Mail, 
	Phone, 
	MapPin, 
	Copy, 
	Check, 
	Send, 
	MessageSquare, 
	Sparkles, 
	Clock,
	Layers,
	AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";
import { useContactMutation } from "@/api";

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const [phoneCopied, setPhoneCopied] = useState(false);
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// TanStack Query hook encapsulated in api/ layer
	const contactMutation = useContactMutation({
		onSuccess: () => {
			try {
				confetti({
					particleCount: 90,
					spread: 75,
					origin: { y: 0.6 },
					colors: ["#6366f1", "#06b6d4", "#10b981", "#ffffff"],
				});
			} catch (err) {
				console.log("Confetti trigger:", err);
			}
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		},
	});

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(personalInfo.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2500);
	};

	const handleCopyPhone = () => {
		navigator.clipboard.writeText(personalInfo.phone.replace(/[^0-9+]/g, ""));
		setPhoneCopied(true);
		setTimeout(() => setPhoneCopied(false), 2500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formState.name || !formState.email || !formState.message) return;
		contactMutation.mutate(formState);
	};

	return (
		<section id="contact" className="py-8 scroll-mt-24">
			{/* Header */}
			<div className="flex flex-col items-center text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
					<MessageSquare className="w-3.5 h-3.5" />
					<span>Direct Channel</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					Get in <span className="text-gradient-accent">Touch</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
					Whether you have a full-time role, a freelance engineering project, or simply wish to connect, my inbox is always open.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl mx-auto">
				{/* Left Column: Direct Details */}
				<div className="lg:col-span-5 flex flex-col gap-4">
					<div className="glass-card rounded-3xl p-6 sm:p-7 relative overflow-hidden">
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
						
						<h3 className="text-base font-bold text-white mb-1">
							Direct Coordinates
						</h3>
						<p className="text-xs text-slate-400 mb-5 leading-relaxed">
							Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
						</p>

						<div className="space-y-3">
							{/* Email Card */}
							<div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3">
								<div className="flex items-center gap-3 min-w-0">
									<div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
										<Mail className="w-4 h-4" />
									</div>
									<div className="min-w-0">
										<div className="text-[10px] font-mono text-slate-400">Email Address</div>
										<a 
											href={`mailto:${personalInfo.email}`} 
											className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
										>
											{personalInfo.email}
										</a>
									</div>
								</div>
								<button
									onClick={handleCopyEmail}
									className="p-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all text-xs flex items-center gap-1 shrink-0 cursor-pointer"
									title="Copy email to clipboard"
								>
									{copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
									<span className="text-[10px]">{copied ? "Copied" : "Copy"}</span>
								</button>
							</div>

							{/* Phone Card */}
							<div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3">
								<div className="flex items-center gap-3 min-w-0">
									<div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
										<Phone className="w-4 h-4" />
									</div>
									<div className="min-w-0">
										<div className="text-[10px] font-mono text-slate-400">Direct Phone</div>
										<a 
											href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`} 
											className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
										>
											{personalInfo.phone}
										</a>
									</div>
								</div>
								<button
									onClick={handleCopyPhone}
									className="p-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all text-xs flex items-center gap-1 shrink-0 cursor-pointer"
									title="Copy phone number"
								>
									{phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
									<span className="text-[10px]">{phoneCopied ? "Copied" : "Copy"}</span>
								</button>
							</div>

							{/* Location Card */}
							<div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
								<div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
									<MapPin className="w-4 h-4" />
								</div>
								<div>
									<div className="text-[10px] font-mono text-slate-400">Location & Timezone</div>
									<div className="text-xs sm:text-sm font-semibold text-white">
										{personalInfo.location} <span className="text-slate-400 font-normal">({personalInfo.timezone})</span>
									</div>
								</div>
							</div>
						</div>

						{/* Quick Social Badges */}
						<div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
							<span className="text-xs text-slate-400">Profiles:</span>
							<div className="flex items-center gap-2">
								<a
									href={personalInfo.socialLinks.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/5 transition-colors"
								>
									<GithubIcon className="w-3.5 h-3.5" />
									<span>GitHub</span>
								</a>
								<a
									href={personalInfo.socialLinks.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-xs text-indigo-300 hover:text-white border border-indigo-500/20 transition-colors"
								>
									<LinkedinIcon className="w-3.5 h-3.5" />
									<span>LinkedIn</span>
								</a>
								<a
									href={personalInfo.socialLinks.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-xs text-pink-300 hover:text-white border border-pink-500/20 transition-colors"
								>
									<InstagramIcon className="w-3.5 h-3.5" />
									<span>Instagram</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Right Column: Interactive Message Form */}
				<div className="lg:col-span-7">
					<div className="glass-card rounded-3xl p-6 sm:p-8 relative">
						<div className="flex items-center justify-between mb-4">
							<div>
								<h3 className="text-lg font-bold text-white flex items-center gap-2">
									<Sparkles className="w-4 h-4 text-indigo-400" />
									<span>Send a Direct Message</span>
								</h3>
								<p className="text-xs text-slate-400 mt-0.5">
									Have an inquiry or project proposal? Fill out the form below.
								</p>
							</div>
							<div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] font-medium text-indigo-300">
								<Layers className="w-3 h-3 text-indigo-400" />
								<span>TanStack + Axios</span>
							</div>
						</div>

						{contactMutation.isError && (
							<div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300">
								<AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
								<span>{contactMutation.error?.message || "Something went wrong. Please try again or email directly."}</span>
							</div>
						)}

						{contactMutation.isSuccess ? (
							<div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
								<div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
									<Check className="w-6 h-6" />
								</div>
								<h4 className="text-sm font-bold text-white">Message Dispatched!</h4>
								<p className="text-xs text-slate-300 max-w-sm mx-auto">
									Thank you for reaching out, Sahil will review your inquiry and follow up shortly.
								</p>
								<button
									onClick={() => contactMutation.reset()}
									className="text-xs text-indigo-400 hover:underline pt-1 inline-block font-semibold cursor-pointer"
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-3.5">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
									<div>
										<label className="block text-xs font-semibold text-slate-300 mb-1">
											Your Name <span className="text-indigo-400">*</span>
										</label>
										<input
											type="text"
											required
											value={formState.name}
											onChange={(e) => setFormState({ ...formState, name: e.target.value })}
											placeholder="e.g. Sarah Jenkins"
											className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
										/>
									</div>
									<div>
										<label className="block text-xs font-semibold text-slate-300 mb-1">
											Your Email <span className="text-indigo-400">*</span>
										</label>
										<input
											type="email"
											required
											value={formState.email}
											onChange={(e) => setFormState({ ...formState, email: e.target.value })}
											placeholder="sarah@example.com"
											className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
										/>
									</div>
								</div>

								<div>
									<label className="block text-xs font-semibold text-slate-300 mb-1">
										Subject
									</label>
									<input
										type="text"
										value={formState.subject}
										onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
										placeholder="Software Engineering Role / Project Inquiry"
										className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
									/>
								</div>

								<div>
									<label className="block text-xs font-semibold text-slate-300 mb-1">
										Message <span className="text-indigo-400">*</span>
									</label>
									<textarea
										rows={4}
										required
										value={formState.message}
										onChange={(e) => setFormState({ ...formState, message: e.target.value })}
										placeholder="Hello Sahil, I saw your portfolio and would like to discuss..."
										className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
									/>
								</div>

								<button
									type="submit"
									disabled={contactMutation.isPending}
									className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
								>
									{contactMutation.isPending ? (
										<span className="flex items-center gap-2">
											<span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
											<span>Transmitting via Axios + TanStack...</span>
										</span>
									) : (
										<>
											<Send className="w-3.5 h-3.5" />
											<span>Send Message</span>
										</>
									)}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
