import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ChartNoAxesCombined,
  CodeXml,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack Developer & Digital Marketer";

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
    }, 60);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };


  const leftSideIcons = [
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
    </svg>,
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>,
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500" fill="currentColor">
      <path d="M12 0c6.623 0 12 5.377 12 12 0 5.623-3.872 10.328-9.092 11.63C9.116 23.766 4 19.123 4 13.5c0-5.623 4.377-12 8-12z"/>
    </svg>
  ];

  const rightSideIcons = [
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>,
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-600" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>,
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-600" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Language Icons - Left Side - Hidden on Mobile */}
      <div className="hidden md:flex absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 flex-col gap-8 z-10">
        {leftSideIcons.map((icon, index) => (
          <div 
            key={index} 
            className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full hover:scale-110 transition-smooth opacity-60 hover:opacity-100"
            style={{ 
              animationDelay: `${index * 0.3}s`,
              transform: `translateY(${Math.sin(index * 0.5) * 30}px)` 
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Language Icons - Right Side - Hidden on Mobile */}
      <div className="hidden md:flex absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 flex-col gap-8 z-10">
        {rightSideIcons.map((icon, index) => (
          <div 
            key={index} 
            className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full hover:scale-110 transition-smooth opacity-60 hover:opacity-100"
            style={{ 
              animationDelay: `${(index + 3) * 0.3}s`,
              transform: `translateY(${Math.sin((index + 2) * 0.7) * 40}px)` 
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative max-w-5xl">
        <div className="text-center animate-fade-in-up">
          {/* Main Heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">
                Ankit Soni
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-500 text-sm font-medium">
                Available for hire
              </span>
            </div>
          </div>

          {/* Animated Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 md:mb-12 font-light min-h-[2rem] md:min-h-[3rem] flex items-center justify-center">
            <span
              className={`gradient-text-code font-semibold ${
                isTyping ? "typing-cursor" : ""
              }`}
            >
              {displayedText}
            </span>
          </h2>

          {/* Description - Stack on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="glass-effect p-4 md:p-6 rounded-xl border border-border card-hover-effect">
              <div className="flex items-center gap-2 mb-3">
                <CodeXml className="w-5 h-5 text-primary flex-shrink-0" />
                <h3 className="text-base md:text-lg font-semibold">Developer</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Crafting scalable web applications with modern technologies.
                From custom WordPress solutions to React applications.
              </p>
            </div>
            <div className="glass-effect p-4 md:p-6 rounded-xl border border-border card-hover-effect">
              <div className="flex items-center gap-2 mb-3">
                <ChartNoAxesCombined className="w-5 h-5 text-primary flex-shrink-0" />
                <h3 className="text-base md:text-lg font-semibold">Marketer</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Driving growth through data-driven campaigns. Facebook Ads,
                Google Ads, and conversion optimization expert.
              </p>
            </div>
          </div>

          {/* CTA Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16">
            <Button
              size="lg"
              className="primary-gradient hover:scale-105 transition-smooth shadow-elegant text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ApXOf6ZGJU2uMSnlxJE5I3OUTPs89el3/view",
                  "_blank"
                )
              }
            >
              Download Resume <Download className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Portfolio
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-slide-up" style={{ animationDelay: "1s" }}>
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
