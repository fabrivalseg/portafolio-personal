import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { CSSProperties } from 'react';

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [manualShift, setManualShift] = useState(0);

  const projects = [
    {
      title: 'Sitio institucional para residencia senior',
      challenge: 'Necesitaban una presencia digital clara para generar confianza y consultas.',
      solution: 'Diseño UX enfocado en servicios, testimonios y contacto inmediato por WhatsApp.',
      impact: 'Mejor percepcion de marca y mas solicitudes de informacion desde la web.',
      stack: ['React', 'SEO Tecnico', 'Tailwind'],
      linkWeb: 'https://geriatrico.netlify.app/',
    },
    {
      title: 'Sistema de pedidos para cafeteria/heladeria',
      challenge: 'El negocio gestionaba pedidos de forma manual con errores operativos.',
      solution: 'Plataforma web para administrar productos, pedidos y equipo en un unico lugar.',
      impact: 'Menos friccion en operacion diaria y mejor control de tiempos de entrega.',
      stack: ['React', 'Java', 'Spring Boot', 'Supabase'],
      linkWeb: '',
    },
    {
      title: 'Web comercial para marca gastronomica',
      challenge: 'Sitio anterior sin estructura comercial ni claridad de propuesta de valor.',
      solution: 'Nueva landing con narrativa de marca, jerarquia visual y CTA claros.',
      impact: 'Mejor experiencia movil y aumento en contactos de potenciales clientes.',
      stack: ['Astro', 'UI Responsive', 'Optimizacion de performance'],
      linkWeb: 'https://santohorno.com/',
    },
    {
      title: 'Sistema de gestion para residencia',
      challenge: 'La coordinacion entre enfermeros, medicos, administracion y residentes era fragmentada.',
      solution:
        'Plataforma integral para empleados con trazabilidad completa e historial digital de cada accion.',
      impact:
        'Procesos mas agiles, menos errores operativos y una gestion centralizada de la residencia.',
      stack: ['React', 'Java', 'Spring Boot', 'SQL'],
      linkWeb: '',
    },
  ];

  const duplicatedProjects = [...projects, ...projects];
  const manualStep = 320;

  const handlePrev = () => {
    setManualShift((current) => current + manualStep);
  };

  const handleNext = () => {
    setManualShift((current) => current - manualStep);
  };

  return (
    <section id="casos" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">Casos de exito</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Proyectos reales con impacto real
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
            Cada caso parte de un problema de negocio concreto, no solo de una necesidad estetica.
          </p>
        </motion.div>

        <div
          className="projects-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
          data-paused={isPaused}
        >
          <div
            className="projects-manual"
            style={{ '--manual-shift': `${manualShift}px` } as CSSProperties}
          >
            <div className="projects-track">
              {duplicatedProjects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="projects-card glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-300/40"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-2"><span className="text-zinc-200">Desafio:</span> {project.challenge}</p>
                  <p className="text-zinc-400 mb-2"><span className="text-zinc-200">Solucion:</span> {project.solution}</p>
                  <p className="text-zinc-400 mb-5"><span className="text-zinc-200">Impacto:</span> {project.impact}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((item) => (
                      <span
                        key={`${project.title}-${item}`}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm text-teal-300">
                      <BadgeCheck className="w-4 h-4" />
                      Caso real
                    </span>
                    {project.linkWeb ? (
                      <a
                        href={project.linkWeb}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-100 hover:text-teal-300 transition-colors"
                      >
                        Ver online
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-zinc-500 text-sm">Demo privada</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-zinc-100 hover:border-teal-300/60 hover:text-teal-300"
            aria-label="Mover carrusel hacia la izquierda"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-zinc-100 hover:border-teal-300/60 hover:text-teal-300"
            aria-label="Mover carrusel hacia la derecha"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;