import { motion } from 'framer-motion';
import { BadgeDollarSign, Clock3, Handshake, Sparkles } from 'lucide-react';

const About = () => {
  const differentiators = [
    {
      title: 'Precios accesibles',
      description: 'Estrategia de desarrollo por etapas para invertir donde realmente importa.',
      icon: BadgeDollarSign,
    },
    {
      title: 'Atencion personalizada',
      description: 'Hablas directo conmigo, sin capas de gestion que atrasen decisiones.',
      icon: Handshake,
    },
    {
      title: 'Desarrollo rapido',
      description: 'Entregas tempranas para validar resultados antes de avanzar al siguiente sprint.',
      icon: Clock3,
    },
    {
      title: 'Solucion a medida',
      description: 'Cada proyecto se diseña para tu contexto, objetivo y tipo de cliente.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">Confianza</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Tu proyecto con trato directo y foco en resultados
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-zinc-300 leading-relaxed text-lg">
              Soy Fabrizio, desarrollador de software especializado en aplicaciones y sistemas web.
              Trabajo con empresas, emprendedores y negocios que necesitan una solucion digital
              profesional para captar clientes, vender online o mejorar procesos.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Mi enfoque combina vision de negocio con ejecucion tecnica: priorizo conversion,
              experiencia de usuario y estabilidad para que tu inversion tenga retorno.
            </p>
            <a
              href="https://wa.me/5493517169604?text=Hola%20Fabrizio,%20quiero%20hablar%20sobre%20mi%20proyecto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-teal-300 transition-colors"
            >
              Hablar de mi proyecto
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="glass-panel rounded-2xl p-5 border border-white/10"
                >
                  <div className="w-11 h-11 rounded-lg border border-white/15 bg-white/5 text-teal-300 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;