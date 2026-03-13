import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import IntroReveal from './components/IntroReveal';

function App() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <IntroReveal onFinish={handleIntroFinish} />
      <div className="pointer-events-none fixed inset-0 hero-mesh opacity-40"></div>
      <div className="pointer-events-none fixed inset-0 noise-overlay"></div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed -top-20 -left-20 w-72 h-72 rounded-full bg-teal-300/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 18, 0], opacity: [0.22, 0.35, 0.22] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-20 -right-20 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -16, 0], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={`relative z-10 transition-all duration-700 ${introDone ? 'opacity-100 blur-0' : 'opacity-0 blur-[4px]'}`}>
        <Header />
        <main>
        <Hero />
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <Skills />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <Projects />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <Experience />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <About />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <CtaSection />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <Contact />
        </motion.div>
        </main>

        <footer className="px-6 pb-12">
          <div className="container mx-auto max-w-6xl pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-sm text-zinc-500">
            <p>Fabrizio Valverde. Desarrollo web y sistemas a medida.</p>
            <p>Atencion personalizada de principio a fin.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;