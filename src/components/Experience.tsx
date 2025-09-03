const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Cardinal Health",
      location: "Remote",
      period: "Jan 2024 - Mar 2025",
      achievements: [
        "Developed deep learning demand forecasting models in PyTorch using historical shipment and seasonal demand data",
        "Designed a content-based product recommendation system using Sentence Transformer embeddings",
        "Implemented an MLOps pipeline with MLflow and AWS SageMaker for automated retraining",
        "Built a RAG-powered internal search tool with LangChain and Pinecone",
        "Created interactive Tableau dashboards integrating model outputs with inventory KPIs"
      ]
    },
    {
      title: "Data Scientist",
      company: "Wipro Ltd",
      location: "India",
      period: "Sep 2019 - Sep 2022",
      achievements: [
        "Architected gradient boosting models in XGBoost to measure price elasticity across multiple product categories",
        "Formulated a churn risk prediction framework in scikit-learn using purchase patterns",
        "Devised a hybrid recommendation ranking system blending collaborative filtering with demographic-based rules",
        "Streamlined weekly analytics workflows by scripting automated data validation and anomaly detection in PySpark",
        "Orchestrated interactive Power BI dashboards combining behavioral metrics with live campaign data"
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "Space Infolab",
      location: "India",
      period: "Feb 2019 - Aug 2019",
      achievements: [
        "Processed and cleaned large-scale financial transaction datasets using Python and SQL",
        "Developed statistical models to detect anomalies and potential fraud patterns in client transactions",
        "Conducted exploratory data analysis and visualization in Matplotlib and Seaborn"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Professional Experience
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Building AI Solutions Across Industries
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;