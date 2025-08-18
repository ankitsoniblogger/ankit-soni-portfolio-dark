import { useState } from "react";


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("development");

  const developmentSkills = [
    {
      name: "WordPress Development",
      level: 95,
      icon: "🔧",
      description: "Custom themes, plugins, and full-stack solutions",
    },
    {
      name: "React.js",
      level: 90,
      icon: "⚛️",
      description: "Modern web applications with hooks and state management",
    },
    {
      name: "JavaScript/TypeScript",
      level: 88,
      icon: "⚡",
      description: "ES6+, async programming, and type-safe development",
    },
    {
      name: "PHP",
      level: 85,
      icon: "🐘",
      description: "Backend development, APIs, and server-side logic",
    },
    {
      name: "Node.js",
      level: 80,
      icon: "🟢",
      description: "Server-side JavaScript and real-time applications",
    },
    {
      name: "Database Management",
      level: 82,
      icon: "🗄️",
      description: "MySQL, PostgreSQL, and database optimization",
    },
  ];

  const designSkills = [
    {
      name: "UI/UX Design",
      level: 85,
      icon: "🎨",
      description: "User-centered design and interface optimization",
    },
    {
      name: "Responsive Design",
      level: 92,
      icon: "📱",
      description: "Mobile-first approach and cross-device compatibility",
    },
    {
      name: "Adobe Creative Suite",
      level: 78,
      icon: "🖼️",
      description: "Photoshop, Illustrator, and creative design tools",
    },
    {
      name: "Figma",
      level: 80,
      icon: "🔮",
      description: "Collaborative design and prototyping",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: "💨",
      description: "Utility-first CSS framework and design systems",
    },
    {
      name: "Bootstrap",
      level: 85,
      icon: "🎯",
      description: "Rapid prototyping and component-based design",
    },
  ];

  const marketingSkills = [
    {
      name: "Facebook Ads",
      level: 95,
      icon: "📘",
      description: "Campaign optimization and audience targeting",
    },
    {
      name: "Google Ads",
      level: 88,
      icon: "🔍",
      description: "Search, display, and shopping campaign management",
    },
    {
      name: "SEO Optimization",
      level: 90,
      icon: "📈",
      description: "On-page, off-page, and technical SEO strategies",
    },
    {
      name: "Content Marketing",
      level: 85,
      icon: "✍️",
      description: "Strategic content creation and distribution",
    },
    {
      name: "Analytics & Reporting",
      level: 87,
      icon: "📊",
      description: "Data analysis, conversion tracking, and insights",
    },
    {
      name: "Social Media Strategy",
      level: 82,
      icon: "🌐",
      description: "Platform-specific strategies and community management",
    },
  ];

  const categories = [
    {
      id: "development",
      label: "Development",
      skills: developmentSkills,
      gradient: "code-gradient",
      theme: "developer" as const,
    },
    {
      id: "design",
      label: "Design",
      skills: designSkills,
      gradient: "primary-gradient",
      theme: "creative" as const,
    },
    {
      id: "marketing",
      label: "Marketing",
      skills: marketingSkills,
      gradient: "marketing-gradient",
      theme: "marketer" as const,
    },
  ];

  const SkillCard = ({
    skill,
    delay = 0,
    isActive,
  }: {
    skill: (typeof developmentSkills)[0];
    delay?: number;
    isActive: boolean;
  }) => (
    <div
      className={`group relative transition-all duration-700 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
      <div className="relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group-hover:shadow-card group-hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {skill.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                {skill.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary mb-1">
              {skill.level}%
            </div>
            <div className="text-xs text-muted-foreground">Proficiency</div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                activeCategory === "development"
                  ? "code-gradient"
                  : activeCategory === "design"
                  ? "primary-gradient"
                  : "marketing-gradient"
              }`}
              style={{
                width: isActive ? `${skill.level}%` : "0%",
                transitionDelay: `${delay + 300}ms`,
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  );

  const activeTheme =
    categories.find((cat) => cat.id === activeCategory)?.theme || "developer";

  return (
    <section
      id="skills"
      className="py-20 bg-background relative overflow-hidden"
    >
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical expertise and creative marketing
            acumen
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="glass-effect p-2 rounded-2xl border border-border/50 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 text-lg ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20 hover:scale-105"
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                activeCategory === category.id ? "block" : "hidden"
              }`}
            >
              <div className="mb-12">
                <h3
                  className={`text-4xl font-bold text-center mb-4 ${
                    category.id === "development"
                      ? "gradient-text-code"
                      : category.id === "design"
                      ? "text-gradient"
                      : "gradient-text-marketing"
                  }`}
                >
                  {category.label} Expertise
                </h3>
                <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
                  {category.id === "development" &&
                    "Building robust, scalable applications with modern technologies"}
                  {category.id === "design" &&
                    "Creating beautiful, user-centered designs that convert"}
                  {category.id === "marketing" &&
                    "Driving growth through data-driven marketing strategies"}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={index * 150}
                    isActive={activeCategory === category.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div
          className="grid md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-4xl font-bold gradient-text-code mb-3 group-hover:scale-110 transition-transform">
              50+
            </div>
            <div className="text-muted-foreground font-medium">
              Projects Completed
            </div>
            <div className="text-sm text-muted-foreground/70 mt-2">
              Web & Marketing
            </div>
          </div>
          <div className="text-center glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">
              99%
            </div>
            <div className="text-muted-foreground font-medium">
              Client Satisfaction
            </div>
            <div className="text-sm text-muted-foreground/70 mt-2">
              5-Star Reviews
            </div>
          </div>
          <div className="text-center glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-4xl font-bold gradient-text-marketing mb-3 group-hover:scale-110 transition-transform">
              $50K+
            </div>
            <div className="text-muted-foreground font-medium">
              Ad Spend Managed
            </div>
            <div className="text-sm text-muted-foreground/70 mt-2">
              ROI Optimized
            </div>
          </div>
          <div className="text-center glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">
              5+
            </div>
            <div className="text-muted-foreground font-medium">
              Years Experience
            </div>
            <div className="text-sm text-muted-foreground/70 mt-2">
              Dubai & Global
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
