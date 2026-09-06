import { 
	Heart, 
	Code2, 
	Gamepad2, 
	Headphones, 
	Users, 
	Activity, 
	Laptop, 
	Sparkles 
} from "lucide-react";
import { hobbies } from "@/data/portfolioData";
import { SpotifyPlaylist } from "@/components/sections/SpotifyPlaylist";

const iconMap = {
	Code2: Code2,
	Gamepad2: Gamepad2,
	Headphones: Headphones,
	Users: Users,
	Activity: Activity,
	Laptop: Laptop,
};

const Hobbies = () => {
	return (
		<section id="hobbies" className="py-8 scroll-mt-24">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2.5">
					<Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
					<span>Passions & Interests</span>
				</div>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
					Beyond the <span className="text-gradient-accent">Terminal</span>
				</h2>
				<p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
					Creative pursuits, algorithmic hobbies, and activities that inspire focus and technical craft.
				</p>
			</div>

			{/* Hobbies Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{hobbies.map((hobby) => {
					const IconComponent = iconMap[hobby.icon] || Sparkles;

					return (
						<div
							key={hobby.id}
							className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-indigo-500/40 relative overflow-hidden transition-all duration-300"
						>
							{/* Top Accent Gradient Bar */}
							<div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hobby.accent}`} />

							<div>
								<div className="flex items-center justify-between gap-2 mb-4">
									<div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${hobby.accent} flex items-center justify-center text-white shadow-md shadow-indigo-600/20`}>
										<IconComponent className="w-5 h-5" />
									</div>
									<span className="text-[10px] font-mono font-semibold text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
										{hobby.tag}
									</span>
								</div>

								<div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1">
									{hobby.category}
								</div>

								<h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
									{hobby.title}
								</h3>

								<p className="text-xs text-slate-300 mt-2 leading-relaxed">
									{hobby.description}
								</p>
							</div>

							<div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
								<span>Active Interest</span>
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
							</div>
						</div>
					);
				})}
			</div>

			{/* Spotify Developer Account Playlist Integration */}
			<SpotifyPlaylist />
		</section>
	);
};

export default Hobbies;
