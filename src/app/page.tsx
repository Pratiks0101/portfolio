import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <BackToTop />
      <Footer />
    </main>
  );
}