import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const timelineItems = [
    {
      type: 'Desarrollador',
      year: '2025',
      title: 'Santo Horno',
      subtitle: 'Proyectos Reales',
      description: 'Desarrollo de una landing page moderna y responsiva para una panificadora B2B, enfocada en mostrar sus productos y captar nuevos clientes.',
      icon: Briefcase,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      type: 'Desarrollador',
      year: '2025',
      title: 'Fiesta Privada',
      subtitle: 'Proyectos Reales',
      description: 'Creación de un sistema de recepción de invitados para un evento social, permitiendo el control y validación de acceso de forma organizada.',
      icon: Briefcase,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      type: 'Desarrollador',
      year: '2024 - 2025',
      title: 'Calidia',
      subtitle: 'Proyectos Reales',
      description: 'Landing page para una residencia de adultos mayores, incluyendo múltiples secciones que muestran información completa del lugar.',
      icon: Briefcase,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      type: 'Desarrollador',
      year: '2024 - 2025',
      title: 'Genovia',
      subtitle: 'Proyectos Reales',
      description: 'Desarrollo de un sistema de toma de pedidos para una heladería/cafetería que incluye la gestión de productos, pedidos y empleados.',
      icon: Briefcase,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      type: 'education',
      year: '2022 - Presente',
      title: 'Ingeniería en Sistemas de Información',
      subtitle: 'UTN Córdoba',
      description: 'Actualmente cursando 4° año. Enfoque en desarrollo de software, estructuras de datos, y arquitectura de sistemas.',
      icon: GraduationCap,
      gradient: 'from-blue-400 to-cyan-500'
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experiencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${item.gradient} rounded-full text-white text-sm font-medium`}>
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <h4 className={`text-lg font-medium mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.subtitle}
                      </h4>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;