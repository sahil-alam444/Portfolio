/**
 * Central Data Store for Sahil Alam's Portfolio
 * Contains all personal info, work experience, projects, skills, education, and achievements.
 */

export const personalInfo = {
	name: "Sahil Alam",
	firstName: "Sahil",
	tagline: "Frontend React Developer & Full-Stack Software Engineer",
	typedRoles: [
		"Frontend React & TS Developer",
		"Full-Stack Java & Spring Engineer",
		"Spring Boot Modulith Builder",
		"AI & Machine Learning Explorer",
	],
	shortBio: "Final-year B.Tech CSE student at MSIT (MAKAUT) with a 7.45 CGPA, currently developing production web apps at Elevate Healthcare Solutions and engineering modular full-stack solutions.",
	longBio: "I am a frontend-focused software developer with deep experience in React, TypeScript, TanStack Query, and modern UI architectures. On the backend, I design modular systems using Spring Boot Modulith and MySQL. Selected among 1,000+ candidates for Microsoft x Edunet AI Azure program, I have built natural language classifiers and mentored over 50 students in core programming.",
	location: "Kolkata, West Bengal, India",
	timezone: "IST (UTC+5:30)",
	email: "sa400919@gmail.com",
	phone: "+91-8017476702",
	portfolioUrl: "https://sahilalamsoftdev.netlify.app",
	resumeUrl: "/Sahil Alam Resume.pdf",
	status: "Available for Full-Time & Freelance Roles",
	stats: [
		{ value: "7.45", label: "CGPA (B.Tech CSE)", description: "MSIT / MAKAUT" },
		{ value: "50+", label: "Students Mentored", description: "30+ Live Sessions" },
		{ value: "87%", label: "Model Accuracy", description: "AI Resume Classifier" },
		{ value: "100%", label: "Code Dedication", description: "Type-Safe & Clean Architecture" }
	],
	socialLinks: {
		github: "https://github.com/sahil-alam444",
		linkedin: "https://linkedin.com/in/sahil-alam444",
		instagram: "https://instagram.com/rivage.__",
		portfolio: "https://sahilalamsoftdev.netlify.app",
		email: "mailto:sa400919@gmail.com"
	}
};

export const experiences = [
	{
		id: "elevate-healthcare",
		role: "Frontend React Developer",
		company: "Elevate Healthcare Solutions",
		type: "Startup (Remote)",
		location: "Kolkata, India",
		period: "Jan 2026 - Present",
		current: true,
		badge: "Current Role",
		summary: "Building high-performance, accessible clinical and operations dashboards using React, TypeScript, TanStack Query, and Zustand.",
		achievements: [
			"Developed scalable, type-safe frontend UI components using TypeScript, improving maintainability across teams.",
			"Integrated REST APIs with TanStack Query for efficient background data caching, synchronization, and optimistic UI updates.",
			"Constructed responsive analytical charts and operational health metrics using Chart.js.",
			"Implemented protected navigation layers and authenticated route authorization using React Router DOM.",
			"Engineered atomic global state stores using Zustand for lightweight, performant data flow.",
			"Collaborated in a remote agile team alongside Django, Docker, and MySQL engineers via GitHub pull requests."
		],
		techStack: [
			"ReactJS",
			"TypeScript",
			"TanStack Query",
			"Zustand",
			"Chart.js",
			"Tailwind CSS",
			"React Router DOM",
			"Docker"
		]
	},
	{
		id: "sas-academy",
		role: "Programming Instructor & Educator",
		company: "SAS Academy",
		type: "Teaching & Mentorship",
		location: "Kolkata, India",
		period: "2024 - 2025",
		current: false,
		badge: "50+ Students Mentored",
		summary: "Delivered structured live lectures and hands-on coding instruction in Java, Python, C, and Web Development to over 50 students.",
		achievements: [
			"Conducted 30+ structured live interactive sessions covering core programming fundamentals (Java, Python, C) and web development.",
			"Designed practical coding assignments, problem sets, and weekly algorithmic challenges that improved student code quality by 40%.",
			"Facilitated live debugging workshops, guiding students step-by-step through troubleshooting runtime errors, syntax bugs, and logic flaws.",
			"Mentored students on core data structures, object-oriented programming principles (OOP), and clean software development habits."
		],
		techStack: [
			"Java",
			"Python",
			"C",
			"Web Development",
			"Data Structures",
			"Algorithms",
			"Live Debugging"
		]
	},
	{
		id: "microsoft-azure",
		role: "AI & Azure Virtual Intern",
		company: "Microsoft & Edunet Foundation",
		type: "Virtual Internship",
		location: "India (Remote)",
		period: "May 2025",
		current: false,
		badge: "Selected among 1,000+",
		summary: "Competitive 4-week applied AI internship researching NLP document classification with Azure Cloud Services.",
		achievements: [
			"Selected among 1,000+ national applicants for an intensive AI and Microsoft Azure Cloud program.",
			"Cleaned and labeled 1,000+ unstructured resumes using Pandas and regular expressions to isolate key technical competencies.",
			"Vectorized domain vocabularies via TF-IDF and trained a Multinomial Naive Bayes model reaching 87% test accuracy.",
			"Evaluated multi-class predictions across Data Science, HR, and Web Development candidate domains."
		],
		techStack: [
			"Python",
			"Pandas",
			"Scikit-Learn",
			"NLTK",
			"TF-IDF",
			"Microsoft Azure",
			"Regex"
		]
	}
];

export const projectCategories = [
	{ id: "all", label: "All Projects" },
	{ id: "fullstack", label: "Full-Stack & Systems" },
	{ id: "frontend", label: "Frontend & UI" },
	{ id: "ai", label: "AI & Data Science" },
	{ id: "python", label: "Python & Games" }
];

export const projects = [
	{
		id: "ai-resume-analyzer",
		title: "AI Resume Analyzer & Classifier",
		subtitle: "Intelligent NLP Resume Classification (Microsoft x Edunet)",
		category: "ai",
		featured: true,
		accentColor: "from-cyan-500 via-blue-500 to-indigo-600",
		borderGlow: "group-hover:border-cyan-500/50",
		description: "Machine learning text processing pipeline that analyzes unstructured candidate resumes and classifies them into domain tracks with 87% accuracy.",
		problemStatement: "HR screening is bottlenecked by inconsistent resume formats and manual text analysis, requiring automated yet precise skill and role extraction.",
		solutionArchitecture: "Built a Python NLP workflow with Pandas and NLTK regex cleaners, transforming raw text into vectorized matrices using TF-IDF and training a Multinomial Naive Bayes classification model.",
		metrics: [
			{ label: "Classification", value: "87% Accuracy" },
			{ label: "Dataset Size", value: "1,000+ Resumes" },
			{ label: "Cohort Selection", value: "Top in 1,000+" }
		],
		keyPoints: [
			"Preprocessed 1,000+ resumes using Pandas and Regex to extract role-specific keywords",
			"Vectorized domain text via TF-IDF feature extraction pipelines",
			"Trained a Multinomial Naive Bayes model to classify into Data Science, HR, and Web Dev",
			"Delivered as top-performing project during Microsoft x Edunet AI Azure Internship"
		],
		techStack: ["Python", "Pandas", "Scikit-Learn", "NLTK", "TF-IDF", "Regex", "Azure"],
		github: "https://github.com/sahil-alam444",
		live: null,
		status: "Azure AI Capstone"
	},
	{
		id: "elevate-healthcare",
		title: "Elevate Healthcare Analytics Dashboard",
		subtitle: "High-Performance Medical Operations & Telemetry Interface",
		category: "frontend",
		featured: true,
		accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
		borderGlow: "group-hover:border-emerald-500/50",
		description: "Production web application delivering real-time clinical and operations dashboards with TanStack Query caching and atomic Zustand state stores.",
		problemStatement: "Health operations require responsive data representations and instant updates without laggy re-renders or out-of-sync API states.",
		solutionArchitecture: "Engineered a type-safe frontend with TypeScript. Integrated TanStack Query for smart background caching and optimistic UI updates, paired with Zustand for lightweight client state.",
		metrics: [
			{ label: "State Layer", value: "Zustand Atomic" },
			{ label: "Data Caching", value: "TanStack Query" },
			{ label: "Visualizations", value: "Chart.js" }
		],
		keyPoints: [
			"Implemented efficient REST API caching and real-time synchronization with TanStack Query",
			"Constructed responsive data visualization charts for operational metrics using Chart.js",
			"Built reusable, type-safe UI component libraries in TypeScript and Tailwind CSS",
			"Protected route boundaries and role verification using React Router DOM"
		],
		techStack: ["ReactJS", "TypeScript", "TanStack Query", "Zustand", "Chart.js", "Tailwind CSS"],
		github: "https://github.com/sahil-alam444",
		live: null,
		status: "Current Startup"
	},
	{
		id: "flappy-bird",
		title: "Flappy Bird 60 FPS Physics Engine",
		subtitle: "Arcade Game Recreation in Python with Object-Oriented Design",
		category: "python",
		featured: false,
		accentColor: "from-amber-500 via-orange-500 to-red-500",
		borderGlow: "group-hover:border-amber-500/50",
		description: "High-performance 60 FPS arcade recreation built in Python and Pygame featuring custom jump kinematics and pixel-accurate hitbox collision.",
		problemStatement: "Creating an engaging physics recreation requires predictable delta-time frame execution and modular object boundaries.",
		solutionArchitecture: "Designed with decoupled OOP entities (Bird, Pipe, Ground) and a central event loop handling continuous gravity acceleration, collision sweeps, and high score states.",
		metrics: [
			{ label: "Framerate", value: "60 FPS Locked" },
			{ label: "Hitboxes", value: "Pixel-Accurate" },
			{ label: "Architecture", value: "Clean OOP" }
		],
		keyPoints: [
			"Implemented custom jump acceleration and kinematic falling algorithms",
			"Procedural pipe generation with randomized heights and safe gaps",
			"Pixel-accurate collision detection preventing phantom impact bugs",
			"Clean OOP component hierarchy built within one week"
		],
		techStack: ["Python", "Pygame", "OOP", "Physics Simulation"],
		github: "https://github.com/sahil-alam444",
		live: null,
		status: "Completed"
	},
	{
		id: "portfolio-v2",
		title: "Executive Portfolio Web Application",
		subtitle: "Modern Next.js 16 + React 19 Portfolio with Glassmorphism",
		category: "fullstack",
		featured: false,
		accentColor: "from-violet-600 via-indigo-600 to-cyan-500",
		borderGlow: "group-hover:border-violet-500/50",
		description: "The current portfolio platform engineered with Next.js App Router, Tailwind CSS v4, dark luxury glassmorphism, SEO optimization, and fluid micro-animations.",
		problemStatement: "A modern developer portfolio must balance executive formal aesthetics with engaging interactivity, high lighthouse performance, and responsive layout fidelity.",
		solutionArchitecture: "Designed with Next.js App Router and Tailwind CSS v4, combining server components for optimal initial payload delivery with focused client components for dynamic interactions.",
		metrics: [
			{ label: "Framework", value: "Next.js 16" },
			{ label: "React Version", value: "React 19" },
			{ label: "Design Style", value: "Glass Bento" }
		],
		keyPoints: [
			"Executive obsidian glassmorphism aesthetic with subtle cyber glow accents",
			"Interactive Typed.js headline, live copy utilities, and confetti celebration animations",
			"Interactive project and skill matrix with instant category filtering",
			"100% responsive across phones, tablets, and ultra-wide desktop displays"
		],
		techStack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Typed.js", "Canvas Confetti"],
		github: "https://github.com/sahil-alam444/Portfolio",
		status: "Live"
	}
];

export const skillCategories = [
	{ id: "all", label: "All Skills" },
	{ id: "frontend", label: "Frontend & UI" },
	{ id: "backend", label: "Backend & Databases" },
	{ id: "ai", label: "AI & Data Science" },
	{ id: "tools", label: "Tools & DevOps" },
	{ id: "languages", label: "Languages" }
];

export const skills = [
	// Languages
	{ name: "Java", category: "languages", level: "Advanced", proficiency: 90, desc: "Core Java, OOP, Collections, Multithreading, Enterprise patterns" },
	{ name: "Python", category: "languages", level: "Advanced", proficiency: 92, desc: "Scripting, OOP, data analysis, automation, ML modeling" },
	{ name: "TypeScript", category: "languages", level: "Proficient", proficiency: 85, desc: "Strict typing, generics, component contracts, interfaces" },
	{ name: "JavaScript (ES6+)", category: "languages", level: "Advanced", proficiency: 90, desc: "Async/Await, closures, DOM manipulation, functional programming" },
	{ name: "C", category: "languages", level: "Proficient", proficiency: 80, desc: "Pointers, memory layout, system fundamentals, algorithms" },
	{ name: "SQL", category: "languages", level: "Advanced", proficiency: 88, desc: "Complex queries, joins, indexing, relational constraints" },

	// Frontend
	{ name: "React.js", category: "frontend", level: "Advanced", proficiency: 94, desc: "Hooks, custom architecture, component lifecycle, optimization" },
	{ name: "Next.js", category: "frontend", level: "Proficient", proficiency: 86, desc: "App Router, Server Components, SSR, static optimization" },
	{ name: "Tailwind CSS", category: "frontend", level: "Advanced", proficiency: 95, desc: "Responsive design, glassmorphism, design tokens, utility systems" },
	{ name: "TanStack Query", category: "frontend", level: "Proficient", proficiency: 88, desc: "Server state caching, background sync, pagination, mutations" },
	{ name: "Zustand", category: "frontend", level: "Proficient", proficiency: 87, desc: "Atomic state stores, selectors, lightweight global state" },
	{ name: "Chart.js", category: "frontend", level: "Intermediate", proficiency: 80, desc: "Telemetry charts, time-series visualizations, dashboard metrics" },
	{ name: "React Router DOM", category: "frontend", level: "Advanced", proficiency: 90, desc: "Client-side routing, protected routes, layout outlets" },

	// Backend & Databases
	{ name: "Spring Boot", category: "backend", level: "Intermediate", proficiency: 78, desc: "Spring Modulith, RESTful APIs, Dependency Injection, JPA" },
	{ name: "MySQL", category: "backend", level: "Advanced", proficiency: 88, desc: "Relational schema design, normalization, foreign keys, query tuning" },
	{ name: "MongoDB", category: "backend", level: "Intermediate", proficiency: 75, desc: "NoSQL document persistence, schema design, queries" },
	{ name: "REST APIs & JWT", category: "backend", level: "Proficient", proficiency: 89, desc: "Stateless token auth, role-based authorization, endpoint design" },

	// AI & Data Science
	{ name: "Pandas & NumPy", category: "ai", level: "Proficient", proficiency: 85, desc: "Data cleaning, vectorized calculations, tabular manipulation" },
	{ name: "Scikit-Learn", category: "ai", level: "Intermediate", proficiency: 80, desc: "Supervised classification, model evaluation, metrics" },
	{ name: "NLTK & TF-IDF", category: "ai", level: "Intermediate", proficiency: 78, desc: "NLP tokenization, stopword removal, text vectorization" },
	{ name: "OpenCV & MediaPipe", category: "ai", level: "Learning", proficiency: 68, desc: "Computer vision fundamentals, landmark extraction" },
	{ name: "Pygame", category: "ai", level: "Intermediate", proficiency: 82, desc: "Game loops, collision sweeps, kinematics, sprite management" },

	// Tools & DevOps
	{ name: "Git & GitHub", category: "tools", level: "Advanced", proficiency: 92, desc: "Branching strategies, PR reviews, merge conflict resolution" },
	{ name: "Docker Desktop", category: "tools", level: "Intermediate", proficiency: 75, desc: "Containerized development environments, compose files" },
	{ name: "Postman", category: "tools", level: "Proficient", proficiency: 88, desc: "API endpoint verification, environment configs, mock tests" },
	{ name: "VS Code & IntelliJ IDEA", category: "tools", level: "Advanced", proficiency: 95, desc: "IDE optimization, debugging configurations, profilers" },
	{ name: "Figma", category: "tools", level: "Intermediate", proficiency: 76, desc: "UI wireframing, layout prototyping, component inspection" }
];

export const educationList = [
	{
		degree: "B.Tech in Computer Science & Engineering",
		institution: "Meghnad Saha Institute of Technology (MAKAUT)",
		location: "Kolkata, West Bengal, India",
		period: "2022 - 2026",
		score: "7.45 / 10 CGPA",
		status: "Final Year (2026)",
		accent: "from-indigo-500 to-cyan-500",
		highlight: "Deep focus on Data Structures, Algorithms, Distributed Systems, Software Engineering & AI"
	},
	{
		degree: "Senior Secondary (Class XII - CBSE)",
		institution: "Kendriya Vidyalaya Fort William",
		location: "Kolkata, India",
		period: "2022",
		score: "73.2%",
		status: "Completed",
		accent: "from-cyan-500 to-emerald-500",
		highlight: "Science stream with Physics, Chemistry, Mathematics & Computer Science (Python)"
	},
	{
		degree: "Secondary Education (Class X - CBSE)",
		institution: "Kendriya Vidyalaya Fort William",
		location: "Kolkata, India",
		period: "2020",
		score: "87.0%",
		status: "Distinction",
		accent: "from-emerald-500 to-teal-500",
		highlight: "Strong analytical foundation with high distinction in Mathematics and Science"
	}
];

export const coursework = [
	"Data Structures & Algorithms",
	"Object-Oriented Programming (OOP)",
	"Web Development Architecture",
	"Database Management Systems (DBMS)",
	"Machine Learning & Data Science",
	"System Design & Modular Patterns",
	"Operating Systems",
	"Computer Networks"
];

export const honorsAndAchievements = [
	{
		title: "Microsoft x Edunet AI Azure Virtual Internship",
		date: "May 2025",
		organization: "Microsoft & Edunet Foundation",
		description: "Selected among 1,000+ national applicants for intensive 4-week AI & Cloud computing training."
	},
	{
		title: "Smart India Hackathon (SIH) Participant",
		date: "2024",
		organization: "Government of India / Ministry of Education",
		description: "Represented college team tackling national problem statements with software engineering."
	},
	{
		title: "SAP College Hackathon Finalist",
		date: "2024",
		organization: "SAP & MSIT",
		description: "Engineered rapid web prototype adhering to modern cloud and enterprise standards."
	}
];

export const hobbies = [
	{
		id: "coding-puzzles",
		title: "Algorithmic Puzzles & LeetCode",
		category: "Problem Solving",
		icon: "Code2",
		accent: "from-indigo-500 to-cyan-500",
		description: "Deep diving into graph traversals, dynamic programming paradigms, and optimizing time complexity in Java and Python.",
		tag: "DSA & Logic"
	},
	{
		id: "game-physics",
		title: "Arcade Physics & Game Dev",
		category: "Creative Engineering",
		icon: "Gamepad2",
		accent: "from-cyan-500 to-blue-500",
		description: "Crafting 2D game loops, custom jump kinematics, and pixel-accurate collision hitboxes using Python and Pygame.",
		tag: "60 FPS Engines"
	},
	{
		id: "ambient-music",
		title: "Lo-Fi & Ambient Soundscapes",
		category: "Focus & Audio",
		icon: "Headphones",
		accent: "from-purple-500 to-indigo-500",
		description: "Coding with synthwave, instrumental chillhop, and atmospheric soundscapes for sustained deep work flow states.",
		tag: "Deep Work Flow"
	},
	{
		id: "mentorship",
		title: "Teaching & Community Mentoring",
		category: "Education",
		icon: "Users",
		accent: "from-emerald-500 to-teal-500",
		description: "Breaking down complex data structures and debugging runtime errors for 50+ junior developers in live interactive sessions.",
		tag: "50+ Students"
	},
	{
		id: "sports-fitness",
		title: "Badminton & Physical Fitness",
		category: "Health & Sport",
		icon: "Activity",
		accent: "from-amber-500 to-orange-500",
		description: "Recharging mental bandwidth through high-speed badminton rallies, endurance workouts, and staying active.",
		tag: "Recharge & Energy"
	},
	{
		id: "custom-setups",
		title: "Custom Setups & Keyboards",
		category: "Hardware & Workspace",
		icon: "Laptop",
		accent: "from-rose-500 to-pink-500",
		description: "Customizing minimalist workspace ergonomics, mechanical switches, terminal configs, and IDE color schemes.",
		tag: "Productivity Gear"
	}
];



