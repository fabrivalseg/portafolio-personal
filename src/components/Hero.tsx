import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle2, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  const meetingUrl = 'https://calendly.com/fabrizioval-seg/30min';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center px-6 pt-24 md:pt-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-300/30 bg-zinc-900/70 text-teal-200 text-sm mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Desarrollo web profesional para empresas y emprendedores
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
            Tu proxima web o sistema, <span className="text-teal-300">hecho para vender</span>.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Ayudo a negocios que necesitan presencia digital real: sitios institucionales,
            ecommerce y sistemas a medida con foco en resultados, velocidad y trato directo
            con el desarrollador.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-zinc-100 hover:border-white hover:bg-white/10 transition-all"
            >
              <CalendarDays className="w-5 h-5" />
              Agendar reunion
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <span>Precios accesibles</span>
            <span>Entrega rapida</span>
            <span>Atencion personalizada</span>
            <span>Soluciones a medida</span>
          </div>

          <a
            href="mailto:fabrizioval.seg@gmail.com?subject=Consulta%20de%20proyecto"
            className="mt-8 inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            O escribime por email: fabrizioval.seg@gmail.com
          </a>
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