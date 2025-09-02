import { Code, Rocket, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Estudiante de Ingeniería en Sistemas en cuarto año, con una fuerte base en desarrollo web y software. 
              He trabajado en proyectos que van desde sitios web corporativos hasta un sistema de gestión para una cafetería, 
              aplicando principios de escalabilidad, rendimiento y usabilidad. Siempre enfocado aprendizaje constante
              y la mejora continua, lo que me ha permitido adaptarme rápidamente a nuevas tecnologías.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Me considero una persona proactiva, con atención al detalle y siempre en busca de nuevos desafíos que me permitan 
              seguir creciendo como profesional en el mundo del desarrollo. 🚀
            </p>
          
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Stack</h3>
              <p className="text-gray-400">Desarrollo completo de aplicaciones web</p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
              <p className="text-gray-400">Tecnologías modernas y tendencias</p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Colaboración</h3>
              <p className="text-gray-400">Trabajo en equipo efectivo</p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Objetivos</h3>
              <p className="text-gray-400">Orientado a resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;