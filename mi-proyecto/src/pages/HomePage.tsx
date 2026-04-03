import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from '../components/layout/NavBar';
import Hero from '../features/hero/Hero';
import Services from '../features/services/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../features/contact/Contact';
import AboutMe from '../features/about/AboutMe';
import NewsCarousel from '../components/NewsCarousel';
import FAQ from '../components/FAQ';
import WhatsAppButton from '../components/WhatsAppButton';
import Process from '../components/Process';
import LocationMap from '../components/LocationMap';
import Footer from '../components/layout/Footer';

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-slate-900 font-sans selection:bg-yellow-200 selection:text-yellow-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <NavBar />
      
      <main>
        <Hero />
        <Process />
        <Services />
        <AboutMe />
        <Portfolio />
        <NewsCarousel />
        <FAQ />
        <LocationMap />
        <Contact />
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default HomePage;
