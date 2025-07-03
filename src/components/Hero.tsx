import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Background3D from "./Background3D";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack WordPress Developer & Digital Marketer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    "React.js", "WordPress", "JavaScript", "PHP", "Node.js", "TypeScript",
    "Facebook Ads", "Google Ads", "SEO", "Analytics", "Tailwind CSS", "MySQL"
  ];

  return (
    <section className="min-h-[85vh] hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <Background3D />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techStack.map((tech, index) => (
          <div
            key={tech}
            className="absolute text-xs font-mono text-primary/30 animate-bounce-gentle glass-effect px-2 py-1 rounded"
            style={{
              left: `${10 + (index * 7) % 80}%`,
              top: `${20 + (index * 11) % 60}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + (index % 3)}s`
            }}
          >
            {tech}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center animate-fade-in-up">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              Hi, I'm <span className="text-gradient animate-pulse-glow">Ankit Soni</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-500 text-sm font-medium">Available for hire</span>
            </div>
          </div>
          
          {/* Animated Subtitle */}
          <h2 className="text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light min-h-[3rem] flex items-center justify-center">
            <span className={`gradient-text-code font-semibold ${isTyping ? 'typing-cursor' : ''}`}>
              {displayedText}
            </span>
          </h2>
          
          {/* Description with Developer/Marketer Split */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl border border-primary/20 card-hover-effect">
              <h3 className="gradient-text-code text-lg font-bold mb-3">💻 Developer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Crafting scalable web applications with modern technologies. 
                From custom WordPress solutions to React applications.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-primary/20 card-hover-effect">
              <h3 className="gradient-text-marketing text-lg font-bold mb-3">📊 Marketer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Driving growth through data-driven campaigns. Facebook Ads, 
                Google Ads, and conversion optimization expert.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="code-gradient hover:scale-105 transition-elastic shadow-float text-lg px-8 py-6 glow-code"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="floating-animation">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToAbout}
              className="mx-auto text-primary hover:text-primary-foreground hover:bg-primary/20 transition-smooth"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;