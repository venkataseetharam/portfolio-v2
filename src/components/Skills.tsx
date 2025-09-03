const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "Hugging Face", level: 88 },
      ]
    },
    {
      title: "Cloud & MLOps",
      skills: [
        { name: "AWS SageMaker", level: 90 },
        { name: "AWS Bedrock", level: 88 },
        { name: "MLflow", level: 85 },
        { name: "Docker", level: 85 },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "SQL", level: 92 },
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 85 },
        { name: "MongoDB", level: 80 },
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
            Expertise in AI/ML, RAG Frameworks, Healthcare AI, and Demand Forecasting
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
              <h4 className="text-lg font-semibold text-primary mb-3">LLM & AI</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>GPT-4, LLaMA</p>
                <p>Prompt Engineering</p>
                <p>RAG Frameworks</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Frameworks</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>FastAPI</p>
                <p>Flask</p>
                <p>Airflow</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Specializations</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Healthcare AI</p>
                <p>Demand Forecasting</p>
                <p>Anomaly Detection</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-3">Certifications</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>AWS AI Practitioner</p>
                <p>IBM Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;