import { Button } from "@/components/ui/button";
import ThreeJSBackground from "./ThreeJSBackground";
import { ExternalLink, Github, Eye } from "lucide-react";
import admissionTodayImage from "@/assets/project-admissiontoday.jpg";
import qrImage from "@/assets/project-qr.jpg";
import swissoImage from "@/assets/project-swisso.jpg";
import durgeshImage from "@/assets/project-durgesh.jpg";
import youngIndiansImage from "@/assets/project-youngindians.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Admissiontoday.in",
      description:
        "Top Education consultancy website in India helping students achieve their academic dreams with comprehensive guidance and support.",
      tech: ["Next.js", "Node.js", "Strapi", "Firebase", "AWS", "PostgreSQL"],
      category: "Education Platform",
      featured: true,
      image: admissionTodayImage,
      url: "https://admissiontoday.in",
    },
    {
      title: "qr.ankitsoni.in",
      description:
        "Create, manage, and track your QR codes with advanced features including dynamic redirects and public sharing capabilities.",
      tech: ["Vite", "Next.js", "AI", "Supabase"],
      category: "SaaS Platform",
      featured: true,
      image: qrImage,
      url: "https://qr.ankitsoni.in",
    },
    {
      title: "Swisso360.com",
      description:
        "SWISSOFI helps clients grow their wealth by restructuring portfolio and building wealth systematically using Artificial Intelligence Strategies.",
      tech: ["WordPress", "WP Page Bakery Builder", "SEO Plugin"],
      category: "Financial Platform",
      featured: false,
      image: swissoImage,
      url: "https://swisso360.com",
    },
    {
      title: "Durgeshsoni.com",
      description:
        "Personal website showcasing professional expertise and achievements in a modern, clean design with optimal user experience.",
      tech: ["Next.js"],
      category: "Personal Website",
      featured: false,
      image: durgeshImage,
      url: "https://durgeshsoni.com",
    },
    {
      title: "Youngindians.net",
      description:
        "Dream of Youth Development for Better Nation - A platform dedicated to empowering young Indians and fostering national development.",
      tech: ["WordPress", "Elementor", "Custom PHP"],
      category: "NGO Platform",
      featured: false,
      image: youngIndiansImage,
      url: "https://youngindians.net",
    },
  ];

  const ProjectCard = ({
    project,
    delay = 0,
  }: {
    project: (typeof projects)[0];
    delay?: number;
  }) => (
    <div
      className={`group relative overflow-hidden rounded-3xl animate-fade-in-up ${
        project.featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10"></div>

      {/* Project visual representation */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        {/* Project image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 ${
            project.category === "Education Platform"
              ? "bg-gradient-to-br from-blue-600/70 to-purple-600/70"
              : project.category === "SaaS Platform"
              ? "bg-gradient-to-br from-green-600/70 to-teal-600/70"
              : project.category === "Financial Platform"
              ? "bg-gradient-to-br from-yellow-600/70 to-orange-600/70"
              : project.category === "Personal Website"
              ? "bg-gradient-to-br from-purple-600/70 to-pink-600/70"
              : project.category === "NGO Platform"
              ? "bg-gradient-to-br from-red-600/70 to-orange-600/70"
              : "bg-gradient-to-br from-primary/70 to-primary/50"
          } group-hover:opacity-60 transition-all duration-700`}
        ></div>

        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-all duration-700">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/20 rounded transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-1 bg-white/40 animate-bounce-gentle"></div>
        </div>

        {/* Category and featured badges */}
        <div className="absolute top-6 left-6 z-20 flex gap-2">
          <span className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur-md rounded-full text-yellow-100 text-sm font-medium border border-yellow-400/30">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Hover action buttons */}
        <div className="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={() => window.open(project.url, "_blank")}
            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Eye className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => window.open(project.url, "_blank")}
            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-20 p-8 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(project.url, "_blank")}
            className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Project
          </Button>
          <Button
            size="lg"
            onClick={() => window.open(project.url, "_blank")}
            className="flex-1 code-gradient hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-30"></div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 section-gradient relative overflow-hidden"
    >
      <ThreeJSBackground theme="creative" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of successful projects spanning web development, digital
            marketing, and brand strategy
          </p>
        </div>

        {/* Project categories filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          {[
            "All",
            "Education Platform",
            "SaaS Platform",
            "Financial Platform",
            "Personal Website",
            "NGO Platform",
          ].map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-muted/20 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-border/50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Call to action */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "800ms" }}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can help bring your vision to life with
              cutting-edge technology and strategic marketing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="primary-gradient hover:scale-105 transition-all duration-300 shadow-elegant px-8 py-6 text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
              onClick={() =>
                window.open("https://github.com/ankitsoniblogger/", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
