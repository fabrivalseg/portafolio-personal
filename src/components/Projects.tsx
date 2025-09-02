import { ExternalLink, Github, Coffee, IceCream, Heading as Bread } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Landing page residencia',
      description: 'Landing page para una residencia de adultos mayores',
      technologies: ['Next.js', 'Css', 'React', 'SEO optimizado'],
      icon: Coffee,
      gradient: 'from-amber-400 to-orange-500',
      borderGradient: 'from-amber-500/20 to-orange-500/20',
      linkWeb: "https://geriatrico.netlify.app/",
      linkGit: "https://github.com/fabrivalseg/geriatrico.git"
    },
    {
      title: 'Sistema de Gestión - Heladería',
      description: 'Sistema de toma y realizacion de pedidos para una cafeteria, incluye gestion de productos, empleados y pedidos.',
      technologies: ['React', 'Css', 'Supabase', 'Java', 'Spring Boot'],
      icon: IceCream,
      gradient: 'from-pink-400 to-purple-500',
      borderGradient: 'from-pink-500/20 to-purple-500/20',
      linkWeb: "",
      linkGit: "https://github.com/fabrivalseg/geriatrico.git"
    },
    {
      title: 'Web Profesional - Santo Horno',
      description: 'Sitio web moderno y optimizado para panificadora con diseño responsive y SEO optimizado.',
      technologies: ['Astro', 'Css', 'SEO optimizado'],
      icon: Bread,
      gradient: 'from-yellow-400 to-amber-500',
      borderGradient: 'from-yellow-500/20 to-amber-500/20',
      linkGit: "https://github.com/SantoHornoWeb/santo_horno_web",
      linkWeb: "https://santohorno.com/"
    },
    {
      title: 'Traductor de idiomas',
      description: 'Traductor al estilo google, no hecho responsive solamente para laptops',
      technologies: ['Css', 'React', 'Javascript'],
      icon: Bread,
      gradient: 'from-yellow-400 to-amber-500',
      borderGradient: 'from-yellow-500/20 to-amber-500/20',
      linkWeb: "https://translateappmaster.netlify.app/",
      linkGit: "https://github.com/fabrivalseg/translate-app-master.git"
    },
    {
      title: 'Sitema gestion de invitados',
      description: 'Diseñé una solución sencilla y funcional para gestionar el acceso de invitados a una fiesta, permitiendo control en la entrada y verificación digital.',
      technologies: ['React', 'Css', 'Node js', 'Mongo Db'],
      icon: Bread,
      gradient: 'from-yellow-400 to-amber-500',
      borderGradient: 'from-yellow-500/20 to-amber-500/20',
      linkWeb: "", 
      linkGit: ""
    },
    {
      title: 'Frontend Ecommerce',
      description: 'Pagina principal de un ecommerce que permite agregar el producto y visualizar imagenes y links de una manera interesante.',
      technologies: ['Html', 'Css', 'Javascript'],
      icon: Bread,
      gradient: 'from-yellow-400 to-amber-500',
      borderGradient: 'from-yellow-500/20 to-amber-500/20',
      linkWeb: "https://github.com/fabrivalseg/pagina-principal-eccomerce.git", 
      linkGit: "https://github.com/fabrivalseg/pagina-principal-eccomerce.git"
    },
    {
      title: 'Tienda de ropa',
      description: 'Tienda de ropa online con carrito de compras y gestion de productos',
      technologies: ['React', 'Css', 'Javascript', 'Vite'],
      icon: Bread,
      gradient: 'from-yellow-400 to-amber-500',
      borderGradient: 'from-yellow-500/20 to-amber-500/20',
      linkWeb: "", 
      linkGit: ""
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Glowing border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.borderGradient} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 h-full border border-slate-700/50 group-hover:border-transparent transition-all duration-300 transform group-hover:scale-105">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {
                    project.linkWeb && project.linkGit &&
                    <div className="flex space-x-3">
                    <a href={project.linkGit} target='_blank' className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                    <a href={project.linkWeb} target='_blank' className="flex items-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>Visualizacion</span>
                    </a>
                  </div>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;