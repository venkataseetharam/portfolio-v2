const Blogs = () => {
  const blogs = [
    {
      title: "Getting Started with RAG Frameworks",
      description: "A comprehensive guide to building Retrieval-Augmented Generation systems",
      date: "Coming Soon",
      link: "#"
    },
    {
      title: "MLOps Best Practices for Production",
      description: "Lessons learned from deploying ML models at scale",
      date: "Coming Soon", 
      link: "#"
    },
    {
      title: "The Future of AI in Healthcare",
      description: "Exploring AI applications in patient monitoring and clinical decision support",
      date: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Blog & Articles
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sharing insights on AI, Machine Learning, and Data Science
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {blog.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {blog.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                  <a 
                    href={blog.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground">
              More articles coming soon! Follow me on LinkedIn for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;