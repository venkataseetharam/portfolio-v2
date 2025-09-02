import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Donors Choose Prediction",
      description: "Developed a predictive model for DonorsChoose, forecasting project funding within 60 days using a Kaggle dataset of 1.4 million submissions. Achieved a top AUC of 0.88 with XGBoost model.",
      tags: ["Python", "XGBoost", "TF-IDF", "LSTM", "Kaggle"],
      githubUrl: "https://github.com/venkataseetharam/Donors-choose"
    },
    {
      title: "Traffic Segmentation using CANET",
      description: "Developed a novel Attention-guided Chained Context Aggregation method for semantic segmentation, targeting traffic scenarios in India. Achieved IoU improvement from 0.5 to 0.7 over standard U-Net.",
      tags: ["Computer Vision", "Deep Learning", "PyTorch", "Segmentation"],
      githubUrl: "https://github.com/venkataseetharam/CANET"
    },
    {
      title: "Human Activity Recognition",
      description: "Built a model that predicts human activities (Walking, Sitting, Standing, etc.) using smartphone sensor data from 30 subjects. Utilized accelerometer and gyroscope data for classification.",
      tags: ["Machine Learning", "Sensor Data", "Classification", "Scikit-learn"],
      githubUrl: "https://github.com/venkataseetharam/Human-activity-recognition"
    },
    {
      title: "Amazon Fashion Discovery Engine",
      description: "Built an apparel recommendation system using Amazon apparel dataset with text-based product similarity. Implemented advanced NLP techniques for product matching.",
      tags: ["NLP", "Recommendation System", "Text Mining", "Python"],
      githubUrl: "https://github.com/venkataseetharam/Amazonfashiondiscoveryengine"
    },
    {
      title: "Personalized Cancer Diagnosis",
      description: "Developed a Machine Learning algorithm that automatically classifies genetic variations using knowledge base as baseline. Performed intensive data analysis with class balancing techniques.",
      tags: ["Healthcare AI", "Genetic Analysis", "Classification", "Bioinformatics"],
      githubUrl: "https://github.com/venkataseetharam/PersonalizedCancerDiagnosis"
    },
    {
      title: "Patent Score Prediction",
      description: "Developed a predictive model to assess patent acceptance scores using Harvard USPTO dataset and DistilBERT NLP techniques. Advanced data preprocessing and feature engineering for enhanced accuracy.",
      tags: ["NLP", "DistilBERT", "Patent Analysis", "Transformers"],
      liveUrl: "https://sites.google.com/view/ustpo-app"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            My Projects
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A showcase of machine learning and AI projects spanning computer vision, NLP, and predictive analytics
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-primary leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 ml-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more projects button */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10" asChild>
              <a href="https://www.github.com/venkataseetharam" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;