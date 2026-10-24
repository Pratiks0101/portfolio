import { Code2, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
        category: "Frontend & Frameworks",
        icon: <Code2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
        skills: [
            { 
            name: "Next.js", 
            level: "Advanced",
            icon: <svg className="w-10 h-10 fill-current dark:text-white text-black" viewBox="0 0 180 180"><path d="M141.22 153.211L76.103 62.483H61.854v55.197h12.56V78.212l55.856 78.435c3.67-1.077 7.23-2.392 10.95-3.436zM118.146 62.483h12.56v55.197h-12.56z"/><path fillRule="evenodd" clipRule="evenodd" d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zM12.56 90c0-42.768 34.672-77.44 77.44-77.44 42.768 0 77.44 34.672 77.44 77.44 0 42.768-34.672 77.44-77.44 77.44C47.232 167.44 12.56 132.768 12.56 90z"/></svg>
            },
            { 
            name: "React.js", 
            level: "Advanced",
            icon: <svg className="w-10 h-10 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/></svg>
            },
            { 
            name: "TypeScript", 
            level: "Intermediate",
            icon: <svg className="w-10 h-10 fill-[#3178C6]" viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.387 5.08 5.08 0 0 0-.74-.265 4.81 4.81 0 0 0-.82-.147 4.82 4.82 0 0 0-.882-.074c-.495 0-.887.108-1.178.324-.29.216-.436.539-.436.97 0 .285.074.524.22.716.148.192.353.358.616.498.263.14.567.267.912.38.345.114.71.24 1.096.38.49.176.938.375 1.344.597.407.222.755.48 1.044.773.29.294.51.632.662 1.015.152.383.228.825.228 1.326 0 .804-.17 1.48-.51 2.029a4.01 4.01 0 0 1-1.393 1.393c-.588.343-1.287.592-2.097.747-.81.155-1.688.232-2.634.232-.736 0-1.442-.058-2.118-.175a10.02 10.02 0 0 1-1.922-.505v-2.605c.642.348 1.344.618 2.108.81.764.192 1.51.288 2.238.288.54 0 .973-.108 1.298-.324.325-.216.488-.532.488-.948 0-.314-.082-.57-.245-.768a2.53 2.53 0 0 0-.662-.534 6.7 6.7 0 0 0-.962-.416 12.3 12.3 0 0 0-1.14-.38 7.37 7.37 0 0 1-1.365-.588 3.9 3.9 0 0 1-1.071-.773 3.32 3.32 0 0 1-.68-1.028c-.156-.398-.234-.86-.234-1.387 0-.76.17-1.42.51-1.98.34-.56.812-1.011 1.417-1.353.605-.342 1.323-.588 2.153-.738.83-.15 1.723-.225 2.679-.225zm-8.817.184v2.311H7.13v10.428H4.072V12.245H1.536V9.934z"/></svg>
            },
            { 
            name: "Tailwind CSS", 
            level: "Advanced",
            icon: <svg className="w-10 h-10 fill-[#06B6D4]" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>
            },
            { 
            name: "JavaScript", 
            level: "Advanced",
            icon: (
                <svg className="w-10 h-10 rounded-lg shadow-sm" viewBox="0 0 32 32">
                <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
                <text x="16" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="15" fill="#000" textAnchor="middle">JS</text>
                </svg>
            )
            },
            { 
            name: "HTML5 / CSS3", 
            level: "Advanced",
            icon: <svg className="w-10 h-10 fill-[#E34F26]" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.658-13.203-.002.702 7.995h8.992l-.361 3.961-3.212.867-3.231-.871-.208-2.316H5.437l.389 4.802 6.133 1.696 6.11-1.696.816-9.062H8.531z"/></svg>
            }
        ]
        },
        {
        category: "Backend & APIs",
        icon: <Server className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
        skills: [
            { 
            name: "Node.js", 
            level: "Intermediate",
            icon: <svg className="w-10 h-10 fill-[#339933]" viewBox="0 0 24 24"><path d="M12 0L1.75 5.92v11.84L12 23.68l10.25-5.92V5.92L12 0z"/></svg>
            },
            { 
            name: "Express.js", 
            level: "Intermediate",
            icon: <Server className="w-10 h-10 text-slate-400" />
            },
            { 
            name: "RESTful APIs", 
            level: "Advanced",
            icon: <Code2 className="w-10 h-10 text-sky-500" />
            },
            { 
            name: "AI / LLMs", 
            level: "Intermediate",
            icon: <svg className="w-10 h-10 fill-[#10A37F]" viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"/></svg>
            }
        ]
        },
        {
        category: "Databases & Cloud",
        icon: <Database className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
        skills: [
            { 
            name: "Supabase", 
            level: "Advanced",
            icon: <svg className="w-10 h-10 fill-[#3FCF8E]" viewBox="0 0 24 24"><path d="M13.359 1.127a1.002 1.002 0 00-1.718.001L1.139 18.066a1 1 0 00.86 1.514h9.117l-1.295 3.29a1 1 0 001.718-.001l10.502-16.938a1 1 0 00-.86-1.514h-9.117l1.295-3.29z"/></svg>
            },
            { 
            name: "PostgreSQL", 
            level: "Intermediate",
            icon: <Database className="w-10 h-10 text-sky-500" />
            }
        ]
        },
        {
        category: "Tools & Workflow",
        icon: <Wrench className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
        skills: [
            { 
            name: "Git & GitHub", 
            level: "Advanced",
            icon: <Wrench className="w-10 h-10 text-rose-500" />
            },
            { 
            name: "Vite", 
            level: "Advanced",
            icon: <Code2 className="w-10 h-10 text-indigo-500" />
            }
        ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-[5vw]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 text-slate-900 dark:text-white">
            Technical <span className="text-rose-600 dark:text-rose-400">Skills</span>
            </h2>
            <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mb-12 rounded-full"></div>

            <div className="space-y-12">
            {skillCategories.map((group, idx) => (
                <div key={idx} className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shadow-md">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 dark:bg-rose-500/20">
                    {group.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{group.category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {group.skills.map((skill, sIdx) => (
                    <div 
                        key={sIdx} 
                        className="relative flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm transition-all duration-300 hover:scale-105 hover:border-rose-500 group"
                    >
                        {/* Top Tag Badge */}
                        <span className="absolute -top-3 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-600 text-white shadow-sm">
                        {skill.level}
                        </span>

                        <div className="my-4 flex items-center justify-center">
                        {skill.icon}
                        </div>

                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100 text-center mt-1">
                        {skill.name}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}