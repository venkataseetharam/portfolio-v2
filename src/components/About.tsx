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
                Hello! I'm excited to introduce myself as a recent graduate holding a 
                <span className="text-primary font-semibold"> Master of Science degree in Data Science</span>, 
                proudly earned from the esteemed <span className="text-primary font-semibold">New Jersey Institute of Technology</span>.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Over the past nearly three years, I've had the privilege of working as a 
                <span className="text-primary font-semibold"> Data Scientist with Wipro</span> on complex data science projects. 
                This experience has honed my skills in data analysis, machine learning, and model development.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Currently, I am working as an <span className="text-primary font-semibold">LLM Engineer at Connective Care</span>, 
                where I've led the development of a cutting-edge chatbot for mental health support, 
                emphasizing inclusivity for minority communities.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Current Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Large Language Model (LLM) Engineering</li>
                  <li>• Generative AI & Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Mental health AI applications</li>
                </ul>
              </div>
            </div>
            
            {/* Experience stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">M.S.</div>
                <div className="text-muted-foreground">Data Science NJIT</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">ML Projects</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">AI</div>
                <div className="text-muted-foreground">Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;