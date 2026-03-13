import { CalendarDays, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const meetingUrl = 'https://calendly.com/fabrizioval-seg/30min';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5493517169604';
    const text = `Hola Fabrizio, soy ${name}. Mi correo es ${email}. Proyecto: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">Contacto</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Contame tu idea y te propongo una solucion concreta
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
            Trabajo con negocios de Cordoba y tambien de toda Argentina. Elegi el canal que te resulte mas comodo: WhatsApp, email, formulario o reunion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <a
              href="https://wa.me/5493517169604?text=Hola%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-teal-300/40 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-zinc-400 text-sm">Respuesta rapida para cotizacion</p>
                </div>
              </div>
              <span className="text-zinc-200 text-sm">Abrir</span>
            </a>

            <a
              href="mailto:fabrizioval.seg@gmail.com?subject=Consulta%20de%20proyecto"
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-teal-300/40 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-zinc-400 text-sm">fabrizioval.seg@gmail.com</p>
                </div>
              </div>
              <span className="text-zinc-200 text-sm">Enviar</span>
            </a>

            <a
              href={meetingUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-teal-300/40 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-medium">Agendar reunion</p>
                  <p className="text-zinc-400 text-sm">Llamada de descubrimiento</p>
                </div>
              </div>
              <span className="text-zinc-200 text-sm">Reservar</span>
            </a>

            <a
              href="tel:+5493517169604"
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-teal-300/40 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefono</p>
                  <p className="text-zinc-400 text-sm">+54 9 351 716 9604</p>
                </div>
              </div>
              <span className="text-zinc-200 text-sm">Llamar</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-2xl p-7 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">Formulario rapido</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-teal-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-teal-300"
                  required
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Contame que necesitas y que objetivo queres lograr"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-teal-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-teal-300 transition-colors"
              >
                <Send className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>

            <p className="text-xs text-zinc-500 mt-4">
              Te respondo con alcance estimado, tiempos y propuesta inicial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;