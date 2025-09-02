const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java & Spring Boot', level: 75, label: "Intermedio" },
        { name: 'Node.js', level: 75, label: "Intermedio" },
        { name: 'APIs REST', level: 85, label: "Intermedio/Avanzado" },
      ],
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React & Next.js', level: 75, label: "Intermedio" },
        { name: 'Astro', level: 65, label: "Intermedio" },
        { name: 'Tailwind CSS', level: 65, label: "Intermedio" },
        { name: 'JavaScript', level: 75, label: "Intermedio" },
      ],
      gradient: 'from-cyan-400 to-blue-500'
    },
    // {
    //   title: 'Bases de Datos',
    //   skills: [
    //     { name: 'PostgreSQL', level: 85 },
    //     { name: 'MySQL', level: 80 },
    //     { name: 'SQLite', level: 90 },
    //     { name: 'H2', level: "Intermedio" },
    //   ],
    //   gradient: 'from-green-400 to-emerald-500'
    // },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git & GitHub', level: 85, label: "Intermedio/Avanzado" },
        { name: 'Linux', level: 70, label: "Intermedio" },
      ],
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.label}</span>
                    </div>
                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                      <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full opacity-50 animate-pulse`}
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;