const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "PyTorch", "LangChain", "Hugging Face", "XGBoost", "Scikit-learn"]
    },
    {
      title: "Cloud & MLOps", 
      skills: ["AWS SageMaker", "AWS Bedrock", "MLflow", "Docker", "Kubernetes", "FastAPI"]
    },
    {
      title: "Data & Analytics",
      skills: ["SQL", "Power BI", "Tableau", "MongoDB", "PostgreSQL", "ETL Pipelines"]
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
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </span>
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