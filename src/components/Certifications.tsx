const Certifications = () => {
  const certifications = [
    {
      title: "Facebook Marketing Professional",
      issuer: "Meta",
      date: "2023",
      description: "Advanced certification in Facebook Ads management, audience targeting, and campaign optimization",
      badge: "🎯",
      verified: true
    },
    {
      title: "JavaScript Programming",
      issuer: "BitDegree",
      date: "2022",
      description: "Comprehensive JavaScript programming certification covering ES6+, DOM manipulation, and modern frameworks",
      badge: "⚡",
      verified: true
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      description: "Proficiency in Google Analytics 4, conversion tracking, and data-driven marketing strategies",
      badge: "📊",
      verified: true
    },
    {
      title: "WordPress Developer",
      issuer: "WordPress.org",
      date: "2021",
      description: "Advanced WordPress development including custom themes, plugins, and performance optimization",
      badge: "🔧",
      verified: true
    },
    {
      title: "Google Ads Certification",
      issuer: "Google",
      date: "2022",
      description: "Certified in Google Ads campaign management, keyword research, and ROI optimization",
      badge: "🎪",
      verified: true
    },
    {
      title: "SEO Specialist",
      issuer: "SEMrush",
      date: "2022", 
      description: "Advanced SEO certification covering technical SEO, content optimization, and ranking strategies",
      badge: "🔍",
      verified: true
    }
  ];

  const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => (
    <div className={`group card-gradient p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 animate-scaleIn`}
         style={{ animationDelay: `${index * 100}ms` }}>
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
          {cert.badge}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
          {cert.title}
        </h3>
        
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-primary font-medium">{cert.issuer}</span>
          {cert.verified && (
            <span className="text-green-500 text-sm">✓ Verified</span>
          )}
        </div>
        
        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mb-4 inline-block">
          {cert.date}
        </span>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {cert.description}
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="w-full bg-muted rounded-full h-1">
          <div className="h-1 primary-gradient rounded-full group-hover:animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certifications" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications</span> & Credentials
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies and marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.title} 
              cert={cert} 
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <div className="card-gradient p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Commitment to Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying current with industry trends and best practices. These certifications 
              represent my dedication to delivering the highest quality solutions and maintaining 
              expertise in rapidly evolving digital landscapes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;