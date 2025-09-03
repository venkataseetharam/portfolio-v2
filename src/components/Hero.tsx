import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import venkataPic from "@/assets/venkata-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome text */}
          <p className="text-sm text-primary uppercase tracking-wider mb-4 animate-fade-in">
            Welcome to my Portfolio
          </p>
          
          {/* Profile image */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <img
                src={venkataPic}
                alt="Venkata Seetharam Profile"
                className="relative w-44 h-44 mx-auto mt-2 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm{" "}
            <span className="text-gradient">Venkata Seetharam</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            a Machine Learning Engineer
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            AI Engineer and Data Scientist with 5+ years of experience delivering scalable machine learning 
            and generative AI solutions. M.S. in Data Science from NJIT (GPA: 4.0/4.0). 
            Currently developing AI-powered patient monitoring systems at Hygia.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-opacity" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="https://www.github.com/venkataseetharam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/venkata-seetharam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pendekantiseetharam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;