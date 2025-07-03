import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('development');

  const developmentSkills = [
    { name: "WordPress Development", level: 95, icon: "🔧" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript/TypeScript", level: 88, icon: "⚡" },
    { name: "PHP", level: 85, icon: "🐘" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Database Management", level: 82, icon: "🗄️" }
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 85, icon: "🎨" },
    { name: "Responsive Design", level: 92, icon: "📱" },
    { name: "Adobe Creative Suite", level: 78, icon: "🖼️" },
    { name: "Figma", level: 80, icon: "🔮" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "Bootstrap", level: 85, icon: "🎯" }
  ];

  const marketingSkills = [
    { name: "Facebook Ads", level: 95, icon: "📘" },
    { name: "Google Ads", level: 88, icon: "🔍" },
    { name: "SEO Optimization", level: 90, icon: "📈" },
    { name: "Content Marketing", level: 85, icon: "✍️" },
    { name: "Analytics & Reporting", level: 87, icon: "📊" },
    { name: "Social Media Strategy", level: 82, icon: "🌐" }
  ];

  const categories = [
    { id: 'development', label: 'Development', skills: developmentSkills, gradient: 'code-gradient' },
    { id: 'design', label: 'Design', skills: designSkills, gradient: 'primary-gradient' },
    { id: 'marketing', label: 'Marketing', skills: marketingSkills, gradient: 'marketing-gradient' }
  ];

  const SkillBar = ({ skill, delay = 0, isActive }: { skill: typeof developmentSkills[0]; delay?: number; isActive: boolean }) => (
    <div className={`space-y-3 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
         style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-foreground font-medium">{skill.name}</span>
        </div>
        <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded-full">
          {skill.level}%
        </span>
      </div>
      <div className="relative w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            activeCategory === 'development' ? 'code-gradient' :
            activeCategory === 'design' ? 'primary-gradient' : 'marketing-gradient'
          }`}
          style={{ 
            width: isActive ? `${skill.level}%` : '0%',
            transitionDelay: `${delay + 200}ms`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical expertise and creative marketing acumen
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="glass-effect p-2 rounded-2xl border border-border/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeCategory === category.id ? 'block' : 'hidden'
              }`}
            >
              <div className="card-gradient p-8 rounded-2xl border border-border/50 shadow-card card-hover-effect">
                <h3 className={`text-3xl font-bold mb-8 text-center ${
                  category.id === 'development' ? 'gradient-text-code' :
                  category.id === 'design' ? 'text-gradient' : 'gradient-text-marketing'
                }`}>
                  {category.label} Expertise
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={index * 100}
                      isActive={activeCategory === category.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center glass-effect p-6 rounded-2xl border border-primary/20">
            <div className="text-3xl font-bold gradient-text-code mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl border border-primary/20">
            <div className="text-3xl font-bold text-gradient mb-2">99%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-2xl border border-primary/20">
            <div className="text-3xl font-bold gradient-text-marketing mb-2">$500K+</div>
            <div className="text-muted-foreground">Ad Spend Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;