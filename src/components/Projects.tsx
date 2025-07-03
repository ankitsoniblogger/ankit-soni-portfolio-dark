import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Euroconnect.co",
      description: "A comprehensive European business networking platform with advanced features for connecting professionals across borders.",
      tech: ["WordPress", "Custom Development", "SEO", "Performance Optimization"],
      category: "Business Platform",
      featured: true
    },
    {
      title: "Durgeshsoni.com", 
      description: "Personal branding website for a professional consultant with modern design and conversion-focused marketing strategies.",
      tech: ["WordPress", "Responsive Design", "Digital Marketing", "Brand Strategy"],
      category: "Personal Branding",
      featured: true
    },
    {
      title: "E-commerce Solutions",
      description: "Custom WordPress e-commerce platforms with integrated payment gateways and marketing automation systems.",
      tech: ["WooCommerce", "Payment Integration", "Marketing Automation", "Analytics"],
      category: "E-commerce",
      featured: false
    },
    {
      title: "Marketing Campaigns",
      description: "Data-driven Facebook and Google Ads campaigns that generated significant ROI for various international clients.",
      tech: ["Facebook Ads", "Google Ads", "Analytics", "Conversion Optimization"],
      category: "Digital Marketing", 
      featured: false
    },
    {
      title: "SaaS Web Applications",
      description: "Modern React-based web applications with real-time features and seamless user experiences.",
      tech: ["React.js", "Node.js", "Database Design", "API Development"],
      category: "Web Application",
      featured: false
    },
    {
      title: "Brand Identity Projects",
      description: "Complete brand identity solutions including logo design, website development, and digital marketing strategies.",
      tech: ["Brand Design", "WordPress", "Social Media", "Content Strategy"],
      category: "Branding",
      featured: false
    }
  ];

  const ProjectCard = ({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) => (
    <div className={`group card-gradient rounded-2xl border border-border/50 hover:border-primary/50 transition-elastic overflow-hidden animate-fade-in-up card-hover-effect shadow-card hover:shadow-float ${project.featured ? 'lg:col-span-2' : ''}`}
         style={{ animationDelay: `${delay}ms` }}>
      
      {/* Project Image Placeholder with Gradient */}
      <div className="relative h-48 overflow-hidden">
        <div className={`w-full h-full ${
          project.category === 'Business Platform' ? 'code-gradient' :
          project.category === 'Personal Branding' ? 'primary-gradient' :
          project.category === 'E-commerce' ? 'marketing-gradient' :
          project.category === 'Digital Marketing' ? 'marketing-gradient' :
          project.category === 'Web Application' ? 'code-gradient' : 'primary-gradient'
        } opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="grid grid-cols-2 gap-4">
            {project.tech.slice(0, 4).map((tech, index) => (
              <div key={tech} className="glass-effect px-3 py-1 rounded-full text-xs font-mono animate-bounce-gentle"
                   style={{ animationDelay: `${index * 100}ms` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="ml-2 text-yellow-500 text-sm font-medium bg-yellow-500/10 px-3 py-1 rounded-full backdrop-blur-sm">
              ⭐ Featured
            </span>
          )}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elastic hover:scale-105"
          >
            View Details
          </Button>
          <Button 
            className="code-gradient hover:scale-105 transition-elastic shadow-card"
          >
            Live Demo
          </Button>
        </div>
      </div>
      
      {/* Animated Bottom Line */}
      <div className="h-2 primary-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful projects spanning web development, digital marketing, and brand strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <Button 
            size="lg"
            className="primary-gradient hover:scale-105 transition-smooth shadow-elegant"
            onClick={() => window.open('https://github.com/ankitsoniblogger/', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;