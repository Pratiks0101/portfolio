'use client';

import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-[5vw] py-4 fixed left-0 right-0 top-0 z-50 transition-all duration-300 dark:bg-black/80 dark:text-[#f0e9f2] dark:border-neutral-800 bg-white/80 text-black border-b border-neutral-200 backdrop-blur-md">
        <div className="font-bold text-2xl font-['Jost'] text-[#ff3258]">
            Pratik<span className="dark:text-white text-black">.</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 list-none">
            <li><a href="#work" className="hover:text-[#ff3258] transition-colors">Projects</a></li>
            <li><a href="#experience" className="hover:text-[#ff3258] transition-colors">Experience</a></li>
            <li><a href="#skills" className="hover:text-[#ff3258] transition-colors">Skills</a></li>
            <li><a href="#about" className="hover:text-[#ff3258] transition-colors">About</a></li>
        </ul>

        <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-block px-5 py-2 rounded-xl bg-[#ff3258] text-white font-medium transition hover:opacity-90">
            Contact Me
            </a>
        </div>
        </nav>
    );
}