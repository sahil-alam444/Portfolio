import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import QueryProvider from "@/components/providers/QueryProvider";
import { AudioProvider } from "@/components/providers/AudioProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Sahil Alam | Full-Stack & Frontend React Developer",
	description: "Portfolio of Sahil Alam, Frontend React Developer at Elevate Healthcare Solutions & Full-Stack Engineer. Showcasing scalable web apps, Spring Boot Modulith, AI Resume Analyzer, and modern UI engineering.",
	keywords: [
		"Sahil Alam",
		"Sahil Alam Portfolio",
		"Frontend Developer",
		"React Developer",
		"TypeScript",
		"Spring Boot",
		"Next.js Developer",
		"Kolkata Software Engineer",
		"Web Developer Portfolio"
	],
	authors: [{ name: "Sahil Alam" }],
	creator: "Sahil Alam",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://sahilalamsoftdev.netlify.app",
		title: "Sahil Alam | Full-Stack & Frontend React Developer",
		description: "Portfolio of Sahil Alam, Frontend React Developer & Full-Stack Engineer. Building scalable apps with React, TypeScript, Spring Boot, and AI.",
		siteName: "Sahil Alam Portfolio"
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050811] text-slate-100 min-h-screen relative flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200`}>
				<QueryProvider>
					<AudioProvider>
						{/* Top Spotlight & Ambient Mesh */}
						<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
							{/* Spotlight Beam */}
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(99,102,241,0.22),transparent)]" />
							<div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse-slow" />
							<div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
							<div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '8s' }} />
							<div className="absolute inset-0 bg-grid-pattern opacity-60" />
						</div>

						<Navbar />
						<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							{children}
						</main>
						<Footer />
					</AudioProvider>
				</QueryProvider>
			</body>
		</html>
	);
}