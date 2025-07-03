import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:hello@ankitsoni.in",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+971522104014", 
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ankitsoniblogger/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/ankitsoniblogger/",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-16 section-gradient border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ankit Soni</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full Stack WordPress Developer & Digital Marketing Specialist based in Dubai, UAE. 
              Creating exceptional digital experiences that drive real business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" || link.label === "GitHub" ? "_blank" : undefined}
                  rel={link.label === "LinkedIn" || link.label === "GitHub" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-muted/20 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:hello@ankitsoni.in"
                  className="text-primary hover:text-primary/80 transition-smooth"
                >
                  hello@ankitsoni.in
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a 
                  href="tel:+971522104014"
                  className="text-primary hover:text-primary/80 transition-smooth"
                >
                  +971 52 210 4014
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Availability</p>
                <p className="text-green-500 font-medium">Available for new projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ankit Soni. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <a 
                href="https://ankitsoni.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                ankitsoni.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;