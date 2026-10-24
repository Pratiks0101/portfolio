'use client';

export default function Contact() {
  const whatsappNumber = "919028684301";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Pratik,%20I%20saw%20your%20portfolio%20and%20want%20to%20connect!`;

    return (
        <section id="contact" className="py-24 px-[5vw]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-['Jost'] mb-2 dark:text-white text-black">
            Get in <span className="text-[#ff3258]">Touch</span>
            </h2>
            <div className="h-1 w-24 bg-[#ff3258] mx-auto mb-6"></div>
            <p className="mb-10 max-w-xl mx-auto dark:text-neutral-300 text-neutral-600">
            Are you looking for a fast-performing, user-friendly website to elevate your product or business? As a full-stack developer, I am currently open to new opportunities and ready to hit the ground running with your team or project. Whether you want to discuss a potential role, need technical consultation, or just want to say &quot;Hi 👋&quot;, I will do my best to get back to you quickly. Feel free to reach out via email or WhatsApp!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:sharmapratik789@gmail.com" className="px-8 py-3 rounded-xl bg-[#ff3258] text-white font-medium transition hover:opacity-90 shadow-lg">
                📧 Send Email
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-green-600 text-white font-medium transition hover:opacity-90 shadow-lg">
                💬 Chat on WhatsApp
            </a>
            </div>
        </div>
        </section>
    );
}