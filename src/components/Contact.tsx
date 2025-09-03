import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Contact Information
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Data Scientist | Machine Learning Engineer | Deep Learning Engineer
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in discussing new opportunities in Machine Learning, 
                  AI, and Data Science. Whether you're looking for an ML Engineer, Data Scientist, 
                  or AI consultant, let's explore how I can contribute to your team.
                </p>
              </div>
              
              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:pendekantiseetharam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      pendekantiseetharam@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+17182855670" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 718 285 5670
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Harrison, New Jersey, USA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Resume</p>
                    <a 
                      href="https://drive.google.com/file/d/1smvOPm0GoZUD9bkj5PM43-RodyMD57tX/view?usp=share_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Experience highlight */}
              <div className="glass-card rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Current Position</h4>
                <p className="text-muted-foreground">
                  <span className="font-medium">AI Engineer</span> at Hygia
                  <br />
                  <span className="text-sm">Apr 2025 - Present | AI-Powered Patient Monitoring</span>
                </p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="glass-card rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold text-primary mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="ML/AI Opportunity" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                
                <Button className="w-full hero-gradient text-white hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;