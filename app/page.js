import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<div className="section-divider" />
			<About />
			<div className="section-divider" />
			<Experience />
			<div className="section-divider" />
			<Project />
			<div className="section-divider" />
			<Skills />
			<div className="section-divider" />
			<Hobbies />
			<div className="section-divider" />
			<Contact />
		</div>
	);
}
