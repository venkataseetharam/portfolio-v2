const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience 
                building web applications and digital products. I love turning complex 
                problems into simple, beautiful solutions.
              </p>
              
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• UI/UX design and prototyping</li>
                  <li>• Mobile app development</li>
                  <li>• Technical consulting</li>
                </ul>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;