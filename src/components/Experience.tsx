const Experience = () => {
  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Full Stack Developer & Digital Marketing Specialist",
      company: "Freelance / Remote",
      location: "Dubai, UAE",
      description: "Leading comprehensive digital transformation projects for international clients, combining advanced WordPress development with strategic digital marketing campaigns.",
      achievements: [
        "Delivered 50+ successful WordPress projects with 99% client satisfaction",
        "Generated $500K+ in revenue through optimized Facebook and Google Ads campaigns",
        "Improved website performance by 80% average across all client projects",
        "Built automated marketing funnels resulting in 300% increase in lead generation"
      ],
      current: true
    },
    {
      period: "2021 - 2023",
      role: "WordPress Developer & Marketing Consultant",
      company: "Digital Agency Partner",
      location: "Remote",
      description: "Specialized in creating high-performance WordPress websites and implementing data-driven marketing strategies for SMEs and startups.",
      achievements: [
        "Developed custom WordPress themes and plugins for 30+ businesses",
        "Managed Facebook Ads accounts with $50K+ monthly budgets",
        "Achieved average 40% improvement in website conversion rates",
        "Certified Facebook Marketing Professional with proven track record"
      ],
      current: false
    },
    {
      period: "2019 - 2021",
      role: "Web Developer & SEO Specialist",
      company: "Tech Startup",
      location: "India",
      description: "Focused on full-stack web development and search engine optimization, building scalable solutions for emerging businesses.",
      achievements: [
        "Built responsive websites using modern JavaScript frameworks",
        "Improved organic search rankings by 200% for multiple client websites",
        "Implemented advanced SEO strategies resulting in 150% traffic increase",
        "Developed automated reporting systems for performance tracking"
      ],
      current: false
    }
  ];

  const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => (
    <div className={`relative animate-fadeInLeft`} style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent ml-4"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 top-6 w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center ml-0 ${
        experience.current ? 'bg-primary animate-pulse' : 'bg-background'
      }`}>
        <div className={`w-3 h-3 rounded-full ${experience.current ? 'bg-primary-foreground' : 'bg-primary'}`}></div>
      </div>
      
      {/* Content */}
      <div className="ml-16 pb-12">
        <div className="card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth shadow-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{experience.role}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                <span className="font-medium text-primary">{experience.company}</span>
                <span className="hidden md:inline">•</span>
                <span>{experience.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {experience.period}
              </span>
              {experience.current && (
                <span className="text-sm font-medium bg-green-500/10 text-green-500 px-3 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {experience.description}
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth and successful project deliveries across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;