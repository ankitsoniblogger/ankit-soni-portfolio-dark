const Skills = () => {
  const developmentSkills = [
    { name: "WordPress Development", level: 95 },
    { name: "React.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 88 },
    { name: "PHP", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Database Management", level: 82 }
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Responsive Design", level: 92 },
    { name: "Adobe Creative Suite", level: 78 },
    { name: "Figma", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 }
  ];

  const marketingSkills = [
    { name: "Facebook Ads", level: 95 },
    { name: "Google Ads", level: 88 },
    { name: "SEO Optimization", level: 90 },
    { name: "Content Marketing", level: 85 },
    { name: "Analytics & Reporting", level: 87 },
    { name: "Social Media Strategy", level: 82 }
  ];

  const SkillCategory = ({ title, skills, delay = 0 }: { title: string; skills: typeof developmentSkills; delay?: number }) => (
    <div className={`card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth animate-fadeInUp`} 
         style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-2xl font-bold mb-8 text-center text-gradient">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div 
                className="h-full primary-gradient rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${delay + (index * 100)}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical expertise and creative marketing acumen
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <SkillCategory title="Development" skills={developmentSkills} delay={0} />
          <SkillCategory title="Design" skills={designSkills} delay={200} />
          <SkillCategory title="Marketing" skills={marketingSkills} delay={400} />
        </div>
      </div>
    </section>
  );
};

export default Skills;