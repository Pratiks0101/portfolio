import Image from 'next/image';

export default function Work() {
    const projects = [
        {
        title: "Gym Management SaaS",
        description: "Multi-tenant Gym Management SaaS Platform built with Next.js App Router, Supabase, dynamic QR check-in verification, and automated subscription tracking.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL"],
        live: "https://gym-management-dun-delta.vercel.app/",
        github: "https://github.com/Pratiks0101/gym-management",
        image: "/gym-saas.png"
        },
        {
        title: "Quizzical App",
        description: "A dynamic React quiz application built with focus on Web Accessibility (a11y), keyboard navigation, semantic HTML frameworks, dynamic ARIA live states, and responsive UI.",
        tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
        live: "https://quizzycal.netlify.app",
        github: "https://github.com/Pratiks0101/quizzical",
        image: "/quiz.png"
        },
        {
        title: "Password Generator",
        description: "A simple, logic-driven password generator built in Vanilla JavaScript, emphasizing clean UI/UX with algorithmic randomization.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://password-generatorhere.netlify.app",
        github: "https://github.com/Pratiks0101/password-generator",
        image: "/password-generator.png"
        }
    ];

    return (
        <section id="work" className="py-24 px-[5vw]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 dark:text-white text-black">
            Featured <span className="text-[#ff3258]">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-[#ff3258] mb-12"></div>

            <div className="space-y-16">
            {projects.map((proj, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl border bg-neutral-50 border-neutral-200 dark:bg-neutral-900/40 dark:border-neutral-800">
                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold dark:text-white text-black">{proj.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs px-3 py-1 rounded-md bg-[#ff3258]/10 text-[#ff3258] font-medium">
                        {t}
                        </span>
                    ))}
                    </div>
                    <div className="flex items-center gap-6 pt-2">
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-[#ff3258] font-semibold hover:underline">
                        Visit Site &rarr;
                    </a>
                    <a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex gap-2 items-center text-slate-800 dark:text-slate-200 hover:text-[#ff3258] dark:hover:text-rose-400 transition-colors duration-200 font-medium"
                        >
                        <svg className="w-4 h-4 fill-current transition-colors duration-200 group-hover:text-[#ff3258] dark:group-hover:text-rose-400" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                    </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-64 rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700">
                    <Image src={proj.image} alt={proj.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition duration-500" />
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}