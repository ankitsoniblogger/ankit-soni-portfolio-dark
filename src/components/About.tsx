import profileImage from "@/assets/ankit-soni.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 section-gradient relative overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 primary-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer and strategic marketer crafting digital
              experiences that drive results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image & Stats */}
            <div className="animate-fadeInLeft">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-card rounded-3xl p-8 border border-border/50 shadow-card">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-lg opacity-30"></div>
                      <img
                        src={profileImage}
                        alt="Ankit Soni - Full Stack Developer & Digital Marketer"
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-background">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Ankit Soni
                    </h3>
                    <p className="text-lg text-primary font-medium mb-6">
                      Full Stack Developer & Digital Marketing Expert
                    </p>

                    <div className="grid grid-cols-2 gap-6 w-full">
                      <div className="text-center p-4 rounded-xl bg-muted/20">
                        <div className="text-2xl font-bold gradient-text-code">
                          5+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-muted/20">
                        <div className="text-2xl font-bold text-gradient">
                          50+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Projects Delivered
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-muted/20">
                        <div className="text-2xl font-bold gradient-text-marketing">
                          $50K+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ad Spend Managed
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-muted/20">
                        <div className="text-2xl font-bold text-gradient">
                          99%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fadeInRight space-y-8">
              <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50">
                <h3 className="text-3xl font-bold mb-6 text-primary">
                  Passionate Developer & Marketer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  With expertise spanning full-stack development and digital
                  marketing, I bring a unique perspective to every project. My
                  approach combines technical excellence with strategic
                  marketing insights to deliver solutions that not only function
                  flawlessly but also drive real business results.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Based in the vibrant tech hub of Dubai, UAE, I've had the
                  privilege of working with diverse clients worldwide, helping
                  them establish strong digital presences and achieve their
                  business objectives through innovative web solutions and
                  data-driven marketing strategies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-smooth group md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="text-xl font-semibold text-primary">
                      Vision
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    Continuously evolving with the latest technologies and
                    marketing trends, ensuring clients always stay ahead of the
                    competition in the digital landscape.
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
