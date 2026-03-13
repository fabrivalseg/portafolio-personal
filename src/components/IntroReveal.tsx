import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type IntroRevealProps = {
  onFinish: () => void;
};

const INTRO_KEY = 'intro_seen_v1';

const IntroReveal = ({ onFinish }: IntroRevealProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY);

    if (seen) {
      onFinish();
      return;
    }

    setVisible(true);

    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(INTRO_KEY, '1');
      onFinish();
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-zinc-950"
        >
          <div className="absolute inset-0 hero-mesh opacity-40" />
          <div className="absolute inset-0 noise-overlay" />

          <motion.div
            initial={{ scale: 0.2, opacity: 0, y: 36 }}
            animate={{ scale: [0.2, 0.7, 1, 1.05, 8], opacity: [0, 1, 1, 1, 0], y: [36, 0, 0, 0, -18] }}
            transition={{ duration: 2.65, times: [0, 0.34, 0.6, 0.76, 1], ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
            style={{ perspective: 1200 }}
          >
            <div className="relative w-[220px] h-[148px] md:w-[300px] md:h-[198px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.18, 0.25, 0] }}
                transition={{ duration: 1.8, times: [0, 0.4, 0.75, 1] }}
                className="absolute -inset-8 rounded-[34px] bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_68%)] blur-xl"
              />

              <motion.div
                initial={{ rotateX: -92, y: 9, opacity: 0.65 }}
                animate={{ rotateX: [-92, -52, -24, -6, 0], y: [9, 2, 0, 0, 0], opacity: [0.65, 0.9, 1, 1, 1] }}
                transition={{ duration: 1.15, times: [0, 0.34, 0.58, 0.8, 1], ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '50% 100%' }}
                className="absolute inset-x-5 top-0 h-[76%] rounded-xl border border-teal-300/45 bg-zinc-900/92 shadow-[0_0_65px_rgba(45,212,191,0.2)] overflow-hidden"
              >
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.46, delay: 0.58, ease: 'easeInOut' }}
                  className="h-1.5 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.55, 0.28] }}
                  transition={{ duration: 1.25, delay: 0.35 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.35),transparent_48%)]"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: [0, 0.8, 0.45], scale: [0.92, 1, 1] }}
                  transition={{ duration: 1.2, delay: 0.66 }}
                  className="absolute inset-3 rounded-lg border border-white/20"
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.88 }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-[0.22em] uppercase text-teal-200/90"
                >
                  Fabrizio Valverde
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0.76, opacity: 0 }}
                animate={{ scaleX: [0.76, 1.02, 1], opacity: [0, 0.94, 1] }}
                transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[18%] left-0 right-0 mx-auto h-4 w-[90%] rounded-full border border-white/12 bg-gradient-to-r from-zinc-700/80 via-zinc-600/85 to-zinc-700/80"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.24, 0] }}
                transition={{ duration: 1.45, delay: 1.62 }}
                className="absolute -inset-6 rounded-[26px] border border-teal-200/35"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: [0, 0.85, 0.1], y: [8, 0, 0] }}
            transition={{ duration: 2.2, times: [0, 0.36, 1], delay: 0.6 }}
            className="absolute bottom-14 text-xs md:text-sm tracking-[0.18em] uppercase text-zinc-300"
          >
            Del concepto a una web que convierte
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroReveal;
