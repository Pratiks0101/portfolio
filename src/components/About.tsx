import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 px-[5vw]">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 text-slate-900 dark:text-white">
            About <span className="text-rose-600 dark:text-rose-400">Me</span>
            </h2>
            <div className="h-1 w-20 bg-rose-600 dark:bg-rose-500 mb-12 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left: Clean Portrait Image */}
            <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                <Image 
                    src="/linkedin-profile-photo.png"
                    alt="Pratik Sharma" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover object-top"
                />
                </div>
            </div>

            {/* Right: Concise Bio & Integrated Meta */}
            <div className="md:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                I&apos;m a <strong className="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</strong> based in Nagpur, MH, with over 3 years of experience building scalable web applications and institutional software solutions.
                </p>
                
                <p>
                I hold a B.E. in Information Technology from G.H. Raisoni College of Engineering and specialize in <strong className="text-slate-900 dark:text-white font-semibold">React, Next.js (App Router), TypeScript, Node.js, PostgreSQL, and Supabase</strong>. I love crafting clean code, multi-tenant architectures, and intuitive UI experiences.
                </p>

                {/* Subtle Inline Highlights */}
                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium border-t border-slate-200 dark:border-slate-800">
                <div>📍 Nagpur, MH</div>
                <div>💼 3+ Years Exp.</div>
                <div>🎓 B.E. in Information Technology</div>
                </div>

                {/* LinkedIn CTA */}
                <div>
                <a 
                    href="https://www.linkedin.com/in/pratik-sharma789" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-rose-500 hover:bg-rose-500 hover:ease-in-out dark:hover:border-rose-400 text-sm font-semibold transition-all hover:scale-105"
                >
                    My LinkedIn &rarr;
                </a>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}