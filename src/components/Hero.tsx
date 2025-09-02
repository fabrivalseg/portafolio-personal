import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Fabrizio
          </h1>
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-white">
            Valverde Segura
          </h2>
          <div className="relative">
            <div className="text-xl md:text-2xl text-cyan-300 font-light tracking-wider animate-bounce">
              &lt; Desarrollador Full Stack /&gt;
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Estudiante de Ingeniería en Sistemas | Especializado en desarrollo web moderno 
          con Java, React y tecnologías emergentes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#proyectos" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            Ver Proyectos
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contacto"
            className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contáctame
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:fabrizioval.seg@gmail.com"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Mail className="w-6 h-6 text-cyan-400" />
          </a>
          <a
            href="https://github.com/fabrivalseg"
            target='_blank'
            className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Github className="w-6 h-6 text-cyan-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabrizio-valverde-segura"
            target='_blank'
            className="p-3 rounded-full bg-slate-800/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Linkedin className="w-6 h-6 text-cyan-400" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;