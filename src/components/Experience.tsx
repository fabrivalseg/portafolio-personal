import { motion } from 'framer-motion';
import { ClipboardCheck, Rocket, MessageSquare, TestTube2, Wrench } from 'lucide-react';

const Experience = () => {
  const processSteps = [
    {
      title: 'Brief y diagnostico',
      description: 'Entiendo tu negocio, objetivo comercial, plazos y alcance para diseñar una propuesta realista.',
      icon: MessageSquare,
    },
    {
      title: 'Propuesta y roadmap',
      description: 'Defino arquitectura, prioridades y entregables para que sepas exactamente que vas a recibir.',
      icon: ClipboardCheck,
    },
    {
      title: 'Diseno y desarrollo',
      description: 'Construyo la solucion con foco en UX, rendimiento y conversion desde el primer sprint.',
      icon: Rocket,
    },
    {
      title: 'QA y puesta online',
      description: 'Pruebas funcionales, optimizacion tecnica y deployment para salir a produccion sin fricciones.',
      icon: TestTube2,
    },
    {
      title: 'Soporte y evolucion',
      description: 'Acompano mejoras continuas para que tu web o sistema siga escalando con tu negocio.',
      icon: Wrench,
    },
  ];

  return (
    <section id="proceso" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">Proceso</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Como trabajamos juntos</h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
            Metodo claro, entregas transparentes y comunicacion directa de principio a fin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="glass-panel rounded-2xl p-5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 text-teal-300 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-2">Paso {index + 1}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;