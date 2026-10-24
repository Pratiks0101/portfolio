export default function Experience() {
    const experiences = [
        {
        company: "Rubrics Softcon Pvt. Ltd.",
        role: "Software Developer & Consultant",
        period: "July 2020 – Jun 2025",
        location: "Nagpur, MH, India",
        points: [
            "Developed, tested, and maintained core web application modules using JavaScript and Node.js backend services, enhancing system stability.",
            "Spearheaded end-to-end architecture of an in-house institutional NAAC accreditation assessment platform, automating calculations across seven quality criteria.",
            "Partnered directly with college management to convert complex compliance policies into structured software workflows, cutting client manual processing costs by 50%.",
            "Delivered structured training workshops and data management protocols (SOPs) for institutional staff."
        ],
        skills: ["JavaScript", "Node.js", "Full Stack Engineering", "Client Consulting", "Workflow Automation"]
        }
    ];

    return (
        <section id="experience" className="py-24 px-[5vw]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 dark:text-white text-black">
            Work <span className="text-[#ff3258]">Experience</span>
            </h2>
            <div className="h-1 w-24 bg-[#ff3258] mb-12"></div>

            <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div 
                key={index}
                className="p-8 rounded-2xl border bg-neutral-50 border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800 transition hover:border-[#ff3258]/50 shadow-sm"
                >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                    <h3 className="text-2xl font-semibold dark:text-white text-black">{exp.company}</h3>
                    <p className="text-[#ff3258] font-medium">{exp.role} <span className="text-xs text-neutral-500">({exp.location})</span></p>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mt-2 md:mt-0 w-fit">
                    {exp.period}
                    </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-xs px-3 py-1 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 dark:text-neutral-300 text-neutral-700 font-medium">
                        {s}
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