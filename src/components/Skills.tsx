const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 88 },
        { name: "C", level: 80 },
        { name: "Spark", level: 82 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "PyTorch", level: 92 },
        { name: "TensorFlow", level: 90 },
        { name: "LangChain", level: 88 },
        { name: "Llama Index", level: 85 },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 85 },
        { name: "MLFlow", level: 80 },
        { name: "Git", level: 92 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Technical Skills
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Specialized in Machine Learning, Deep Learning, and Generative AI technologies
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full hero-gradient transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skill categories */}
          <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Databases</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Oracle SQL</p>
                <p>MySQL</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Frameworks</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Streamlit</p>
                <p>Flask</p>
                <p>AirFlow</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Specializations</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>NLP</p>
                <p>Computer Vision</p>
                <p>Generative AI</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Tools</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Tableau</p>
                <p>VS Code</p>
                <p>CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;