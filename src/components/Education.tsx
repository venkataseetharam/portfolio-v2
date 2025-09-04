const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      period: "Sep 2022 – May 2024",
      gpa: "GPA: 4.0/4.0"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication",
      school: "G.PullaReddy Engineering College",
      location: "Kurnool, India", 
      period: "Jul 2015 – May 2019",
      gpa: ""
    }
  ];


  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Education
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Academic Background
          </p>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium mb-1">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.gpa && <p className="text-sm font-medium text-primary">{edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;