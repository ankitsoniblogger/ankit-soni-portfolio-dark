import { Button } from "@/components/ui/button";
import { ArrowDown, ChartNoAxesCombined, CodeXml, Download } from "lucide-react";
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


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 font-playful">
      {/* Orange & Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-green-100/40 to-orange-50/30"></div>
      
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
              <div className="flex items-center gap-2 bg-green-500/15 border border-green-400/30 rounded-full px-4 py-2 shadow-lg">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm"></span>
                <span className="text-green-700 text-sm font-semibold">
                  Available for hire
                </span>
              </div>
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
              className="orange-green-gradient hover:scale-105 transition-smooth shadow-3d text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto relative overflow-hidden group hover:shadow-3d-hover font-semibold"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ApXOf6ZGJU2uMSnlxJE5I3OUTPs89el3/view",
                  "_blank"
                )
              }
            >
              <span className="relative z-10">Download Resume</span>
              <Download className="ml-2 w-4 h-4 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-3d-outline hover:shadow-3d text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto relative overflow-hidden group bg-white/50 backdrop-blur-sm font-semibold"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
