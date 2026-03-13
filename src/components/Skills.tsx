import { motion } from 'framer-motion';
import { Blocks, ShoppingCart, Wrench, Globe, Workflow, Server } from 'lucide-react';

const Skills = () => {
  const services = [
    {
      title: 'Web Institucional',
      problem: 'Tu negocio no existe online o tu web actual no transmite confianza.',
      outcome: 'Sitios claros, veloces y pensados para convertir visitas en consultas.',
      icon: Globe,
    },
    {
      title: 'E-commerce',
      problem: 'Queres vender online y no sabes por donde empezar.',
      outcome: 'Tiendas listas para vender con checkout claro e integraciones clave.',
      icon: ShoppingCart,
    },
    {
      title: 'Sistemas Web a Medida',
      problem: 'Tu operacion depende de planillas y procesos manuales.',
      outcome: 'Plataformas internas que reducen errores y ahorran tiempo operativo.',
      icon: Blocks,
    },
    {
      title: 'Integraciones con APIs',
      problem: 'Tus herramientas no se comunican entre si.',
      outcome: 'Automatizaciones y flujos conectados entre CRM, pagos, envios y mas.',
      icon: Workflow,
    },
    {
      title: 'Mantenimiento Evolutivo',
      problem: 'Tu web falla, esta desactualizada o nadie le da seguimiento.',
      outcome: 'Soporte continuo, mejoras y estabilidad tecnica real.',
      icon: Wrench,
    },
    {
      title: 'Deploy y Hosting',
      problem: 'No queres lidiar con servidores, dominios o SSL.',
      outcome: 'Publicacion segura y optimizada para que tu negocio este siempre online.',
      icon: Server,
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">Servicios</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Soluciones digitales para atraer clientes y crecer
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
            No vendo codigo suelto. Desarrollo soluciones concretas segun el objetivo de tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-300/40"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-3 leading-relaxed">{service.problem}</p>
                <p className="text-zinc-200 leading-relaxed">{service.outcome}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/5493517169604?text=Hola%20quiero%20cotizar%20un%20servicio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-teal-300 transition-colors"
          >
            Quiero una propuesta para mi negocio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;