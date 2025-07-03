import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@ankitsoni.in",
      link: "mailto:hello@ankitsoni.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 52 210 4014",
      link: "tel:+971522104014"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ankitsoniblogger",
      link: "https://www.linkedin.com/in/ankitsoniblogger/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ankitsoniblogger",
      link: "https://github.com/ankitsoniblogger/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fadeInLeft">
            <div className="card-gradient p-8 rounded-2xl border border-border/50 shadow-card h-fit">
              <h3 className="text-2xl font-bold mb-8 text-primary">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.label === "LinkedIn" || info.label === "GitHub" ? "_blank" : undefined}
                    rel={info.label === "LinkedIn" || info.label === "GitHub" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-primary/10 transition-smooth group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-smooth">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-semibold mb-3 text-foreground">Based in Dubai, UAE</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Working with clients worldwide • Available for remote collaboration • 
                  Open to freelance and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInRight">
            <form onSubmit={handleSubmit} className="card-gradient p-8 rounded-2xl border border-border/50 shadow-card">
              <h3 className="text-2xl font-bold mb-8 text-primary">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-muted/20 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-muted/20 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, consultation, etc."
                    className="bg-muted/20 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    className="bg-muted/20 border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full primary-gradient hover:scale-105 transition-smooth shadow-elegant text-lg py-6"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;