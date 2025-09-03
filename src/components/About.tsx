const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Summary
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground">
                AI Engineer and Data Scientist with over <span className="text-primary font-semibold">5+ years of experience</span> 
                delivering scalable machine learning and generative AI solutions across 
                <span className="text-primary font-semibold"> e-commerce, healthcare, and retail</span>.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Developed Retrieval-Augmented Generation (RAG) frameworks, domain-specific chatbots, 
                and recommendation engines using <span className="text-primary font-semibold">Python, PyTorch, LangChain, and AWS SageMaker</span>. 
                Achieved a 21% improvement in forecast accuracy and increased user engagement by 18%.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Currently working as an <span className="text-primary font-semibold">AI Engineer at Hygia</span>, 
                building AI-powered patient monitoring platforms that monitor patient vitals in real time 
                and alert clinicians to critical changes across 50+ hospital units.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Core Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-Powered Healthcare Solutions</li>
                  <li>• RAG Frameworks & LLM Development</li>
                  <li>• MLOps & Automated Pipelines</li>
                  <li>• Demand Forecasting & Recommendation Systems</li>
                </ul>
              </div>
            </div>
            
            {/* Experience stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.0</div>
                <div className="text-muted-foreground">GPA M.S. NJIT</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">21%</div>
                <div className="text-muted-foreground">Forecast Accuracy</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-muted-foreground">Time Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;