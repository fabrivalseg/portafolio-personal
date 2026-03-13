import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle2, Globe2, Mail, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const meetingUrl = 'https://calendly.com/fabrizioval-seg/30min';
  const projectShots = [
    { src: '/calidia_gestion.png', label: 'Calidia Gestion' },
    { src: '/calidia.png', label: 'Calidia Web' },
    { src: '/genovia.png', label: 'Genovia' },
    { src: '/santohorno.png', label: 'Santo Horno' },
  ];
  const [activeShotIndex, setActiveShotIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveShotIndex((prev) => (prev + 1) % projectShots.length);
    }, 3800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [projectShots.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center px-5 sm:px-6 pt-20 md:pt-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div className="order-2 lg:order-1">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-teal-200/90 mb-3 sm:mb-4">
              Disponible para nuevos proyectos • 2026
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <p className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-teal-300/30 bg-zinc-900/70 text-teal-200 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Desarrollo web para empresas y emprendedores
              </p>
              <p className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/30 bg-zinc-900/70 text-cyan-200 text-sm">
                <Globe2 className="w-4 h-4" />
                Trabajo con clientes de Argentina y Latinoamerica
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
              Tu web o sistema a medida para <span className="text-teal-300">hacer crecer tu negocio</span>.
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Desarrollo paginas web y sistemas a medida para empresas y emprendedores que
              quieren digitalizar su negocio o conseguir mas clientes online.
            </p>

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/5493517169604?text=Hola%20Fabrizio,%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-teal-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Escribirme por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white hover:border-teal-300 hover:text-teal-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                Enviar formulario
              </a>
              <a
                href={meetingUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-zinc-100 hover:border-white hover:bg-white/10 transition-all"
              >
                <CalendarDays className="w-5 h-5" />
                Agendar reunion
              </a>
            </div>

            <div className="mt-5 sm:mt-6 grid sm:flex sm:flex-wrap gap-x-6 gap-y-2.5 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-300" />Sistemas web reales</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-300" />Desarrollo full stack</span>
              <span className="hidden sm:inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-300" />Integraciones y automatizacion</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <span>Empresas y emprendimientos de todas partes</span>
            </div>

            <p className="hidden sm:block mt-7 text-zinc-300 max-w-2xl leading-relaxed">
              Hola, soy Fabrizio. Desarrollo aplicaciones web y trabajo directo con cada cliente
              para crear sistemas y paginas web que realmente solucionen sus problemas.
            </p>

            <a
              href="mailto:fabrizioval.seg@gmail.com?subject=Consulta%20de%20proyecto"
              className="hidden sm:inline-flex mt-7 items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              O escribime por email: fabrizioval.seg@gmail.com
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="order-1 lg:order-2 relative h-[300px] sm:h-[430px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-300/20 via-cyan-300/10 to-blue-300/10 blur-2xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-full glass-panel rounded-3xl border border-white/15 p-4 sm:p-5"
            >
              <div className="rounded-2xl border border-white/10 bg-zinc-950/85 h-full overflow-hidden">
                <div className="h-11 border-b border-white/10 bg-zinc-900/80 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
                    <p className="text-[10px] text-teal-100">Autoplay activo</p>
                  </div>
                </div>

                <div className="p-3 sm:p-5 h-[calc(100%-44px)] grid grid-rows-[1fr_auto] gap-2.5 sm:gap-3">
                  <div className="group relative rounded-xl border border-white/10 overflow-hidden bg-zinc-900/80 transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src={projectShots[activeShotIndex].src}
                      alt={`Vista previa de ${projectShots[activeShotIndex].label}`}
                      className="w-full h-full object-contain bg-zinc-950"
                      loading="eager"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-xs sm:text-sm text-white font-medium">{projectShots[activeShotIndex].label}</p>
                      <p className="hidden sm:block text-[11px] text-zinc-300">Proyecto real desarrollado a medida</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2.5">
                    {projectShots.map((shot, index) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => setActiveShotIndex(index)}
                        className={`relative rounded-lg border overflow-hidden h-14 sm:h-24 bg-zinc-900/70 transition-all ${
                          activeShotIndex === index ? 'border-teal-300/80 ring-2 ring-teal-300/20 scale-[1.02]' : 'border-white/10 hover:border-teal-300/40 hover:scale-[1.02]'
                        }`}
                        aria-label={`Ver captura de ${shot.label}`}
                      >
                        <img
                          src={shot.src}
                          alt={`Vista previa de ${shot.label}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 px-2 py-1 bg-black/55 hidden sm:block">
                          <p className="text-[10px] text-zinc-100 truncate">{shot.label}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="hidden sm:block absolute -left-4 bottom-10 rounded-2xl border border-teal-300/35 bg-zinc-900/90 px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-teal-200">Entrega inicial</p>
              <p className="text-lg font-semibold text-white">48h</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="hidden sm:block absolute -right-3 top-12 rounded-2xl border border-cyan-300/35 bg-zinc-900/90 px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Contacto directo</p>
              <p className="text-lg font-semibold text-white">1:1</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-14 grid sm:grid-cols-3 gap-4"
        >
          <div className="glass-panel rounded-2xl p-5">
            <p className="text-3xl font-semibold text-white">A medida</p>
            <p className="text-zinc-400">Cada proyecto se adapta a tu negocio</p>
          </div>
          <div className="glass-panel rounded-2xl p-5">
            <p className="text-3xl font-semibold text-white">&lt;48h</p>
            <p className="text-zinc-400">Para primeras propuestas funcionales</p>
          </div>
          <div className="glass-panel rounded-2xl p-5">
            <p className="text-3xl font-semibold text-white">1:1</p>
            <p className="text-zinc-400">Comunicacion directa sin intermediarios</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;