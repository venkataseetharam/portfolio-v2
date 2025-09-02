import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-bg py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gradient mb-2">Alex Johnson</h3>
              <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/20 text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Alex Johnson © 2024</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;