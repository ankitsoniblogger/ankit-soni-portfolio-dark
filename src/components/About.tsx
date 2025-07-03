const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Passionate Developer & Marketer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With expertise spanning full-stack WordPress development and digital marketing, 
                  I bring a unique perspective to every project. My approach combines technical 
                  excellence with strategic marketing insights to deliver solutions that not only 
                  function flawlessly but also drive real business results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Based in the vibrant tech hub of Dubai, UAE, I've had the privilege of working 
                  with diverse clients worldwide, helping them establish strong digital presences 
                  and achieve their business objectives through innovative web solutions and 
                  data-driven marketing strategies.
                </p>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <div className="space-y-6">
                <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-smooth">
                  <h4 className="text-xl font-semibold mb-3 text-primary">🎯 Mission</h4>
                  <p className="text-muted-foreground">
                    To bridge the gap between cutting-edge technology and strategic marketing, 
                    creating digital experiences that captivate users and drive business growth.
                  </p>
                </div>
                
                <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-smooth">
                  <h4 className="text-xl font-semibold mb-3 text-primary">💡 Approach</h4>
                  <p className="text-muted-foreground">
                    Every project starts with understanding your unique needs and goals. 
                    I combine technical expertise with creative problem-solving to deliver 
                    solutions that exceed expectations.
                  </p>
                </div>
                
                <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-smooth">
                  <h4 className="text-xl font-semibold mb-3 text-primary">🚀 Vision</h4>
                  <p className="text-muted-foreground">
                    To continuously evolve with the latest technologies and marketing trends, 
                    ensuring my clients always stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;