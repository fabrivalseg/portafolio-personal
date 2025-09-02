import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5493517169604"; // tu número en formato internacional sin "+"
    const text = `Hola, soy ${name}. Mi correo es ${email}. Mensaje: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:fabrizioval.seg@gmail.com"
                  target='_blank'
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-cyan-400">fabrizioval.seg@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+5493517169604"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-cyan-400">+54 9 3517169604</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-cyan-400">Río Segundo, Córdoba, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-4">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Desarrollo full stack con tecnologías modernas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Experiencia en proyectos reales para empresas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Autodidacta y en constante aprendizaje</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Responsable y orientado a resultados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
         <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={5}
                    placeholder="Tu mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h3>
            <p className="text-gray-300 mb-6">
              Colaboremos para crear soluciones innovadoras que marquen la diferencia
            </p>
            <a
              href="mailto:fabrizioval.seg@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Comenzar Conversación</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;