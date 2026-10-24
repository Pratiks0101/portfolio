import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
        role: "Full-Stack Software Engineer",
        company: "Self-Employed",
        duration: "Jul 2025 - Present",
        location: "Nagpur, Maharashtra, India",
        description: "Architecting and deploying production-ready web applications with modern full-stack technologies.",
        featuredProject: {
            title: "Multi-Tenant Gym Management SaaS Platform",
            bullets: [
            "Built a full-stack SaaS platform enabling gym owners to manage member onboarding, subscription tiers, revenue analytics, and automated renewal alerts.",
            "Engineered a secure QR-code check-in verification engine utilizing 10-second auto-regenerating tokens and mobile verification to eliminate proxy check-ins.",
            "Implemented using Next.js (App Router), TypeScript, React, Tailwind CSS, Supabase / PostgreSQL, and RESTful APIs with strict Web Accessibility (a11y) standards."
            ]
        },
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Web Accessibility (a11y)"]
        },
        {
        role: "Full Stack Developer & Technical Solutions Engineer",
        company: "Rubrics SoftCon Private Limited",
        duration: "Jul 2020 - Jun 2025",
        location: "Nagpur, Maharashtra, India",
        description: "At Rubrics SoftCon, I combined core web application development with technical solutions engineering across enterprise and higher-education accounts.",
        keyContributions: [
            "Core Web Development: Developed form-processing modules, API data-fetching scripts, and accessible UI components using JavaScript, Node.js, and Git/GitHub.",
            "Workflow Automation: Audited client data workflows and legacy documentation to establish standardized digital templates, reducing client manual processing times by 50%.",
            "End-to-End Data Pipelines: Aggregated and formatted complex institutional records into structured, compliant digital submissions for external audits.",
            "Technical Consulting & Training: Led executive presentation workshops and platform onboarding sessions for institutional leadership teams."
        ],
        skills: ["JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs", "HTML5/CSS3", "Git", "Workflow Automation"]
        }
    ];

    return (
        <section id="experience" className="py-24 px-[5vw]">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 text-slate-900 dark:text-white">
            Work <span className="text-rose-600 dark:text-rose-400">Experience</span>
            </h2>
            <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mb-12 rounded-full"></div>

            {/* Timeline Container */}
            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-14">
            {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-rose-600 dark:bg-rose-500 ring-4 ring-white dark:ring-[#090d16] transition-transform duration-300 group-hover:scale-125"></div>

                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm mt-0.5">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                    </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                    </span>
                    </div>
                </div>

                {/* Main Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                </p>

                {/* Featured Project */}
                {exp.featuredProject && (
                    <div className="mb-5 p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                        Featured Project: <span className="text-rose-600 dark:text-rose-400">{exp.featuredProject.title}</span>
                    </h4>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.featuredProject.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-1">
                            <span className="-ml-1.5">{bullet}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}

                {/* Key Contributions */}
                {exp.keyContributions && (
                    <div className="mb-5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Key Contributions & Impact:</h4>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.keyContributions.map((item, kIdx) => {
                        const [title, ...rest] = item.split(': ');
                        return (
                            <li key={kIdx} className="flex items-start gap-2">
                            <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5">•</span>
                            <span>
                                <strong className="text-slate-800 dark:text-slate-200">{title}:</strong> {rest.join(': ')}
                            </span>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, sIdx) => (
                    <span 
                        key={sIdx}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                    >
                        {skill}
                    </span>
                    ))}
                </div>

                </div>
            ))}
            </div>
        </div>
        </section>
    );
}