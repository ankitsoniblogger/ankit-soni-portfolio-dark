import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead />
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        {/* Gradient Divider */}
        <div className="h-24 bg-gradient-to-b from-background via-muted/30 to-background"></div>
        
        <About />
        
        {/* Gradient Divider */}
        <div className="h-16 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <Skills />
        
        {/* Gradient Divider */}
        <div className="h-16 bg-gradient-to-b from-background via-muted/20 to-section-gradient"></div>
        
        <Projects />
        
        {/* Gradient Divider */}
        <div className="h-16 bg-gradient-to-b from-section-gradient via-primary/5 to-background"></div>
        
        <Experience />
        
        {/* Gradient Divider */}
        <div className="h-16 bg-gradient-to-b from-background via-muted/10 to-background"></div>
        
        <Certifications />
        
        {/* Gradient Divider */}
        <div className="h-16 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <Contact />
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
