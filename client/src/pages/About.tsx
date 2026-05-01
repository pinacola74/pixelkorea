import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";

/**
 * About Page - Pixelkorea
 * Company information and mission
 */

export default function About() {
  const [, setLocation] = useLocation();

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description: "We continuously push the boundaries of projection technology to deliver cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work closely with our clients to understand their needs and deliver tailored solutions.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "We maintain the highest standards of quality, reliability, and customer service.",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description: "We're committed to developing environmentally responsible projection solutions.",
    },
  ];

  const team = [
    {
      name: "Dr. Park Jin-ho",
      role: "CEO & Founder",
      bio: "20+ years of experience in projection technology and immersive experiences.",
    },
    {
      name: "Kim Min-jun",
      role: "Chief Technology Officer",
      bio: "Leading innovation in edge-blending and warping algorithms.",
    },
    {
      name: "Lee Sarah",
      role: "VP of Sales",
      bio: "Dedicated to building strong partnerships with clients worldwide.",
    },
    {
      name: "Choi David",
      role: "VP of Support",
      bio: "Ensuring customer success with 24/7 technical support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="low" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              ABOUT
              <br />
              <span className="text-primary">PIXELKOREA</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Pioneers in projection technology, delivering immersive experiences to the world.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-black">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                To transform how people experience immersive content by providing innovative, reliable, and user-friendly projection solutions that bring imagination to life.
              </p>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-5xl font-black">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                To become the global leader in projection mapping and dome theater technology, enabling creators and organizations to deliver unforgettable immersive experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Our <span className="text-primary">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all bg-card/50">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Our <span className="text-primary">Story</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">2010</h3>
                <p className="text-foreground/70">
                  Pixelkorea was founded with a vision to revolutionize projection technology. Our founders, with decades of combined experience in the industry, set out to create solutions that would change how immersive experiences are delivered.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">2015</h3>
                <p className="text-foreground/70">
                  We launched Showlogix, our flagship projection mapping software. The solution quickly gained recognition for its advanced edge-blending and warping capabilities, becoming the industry standard for multi-projector installations.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">2018</h3>
                <p className="text-foreground/70">
                  Pixelkorea partnered with LightMagic to bring their Fusion technology to the market. This specialized dome theater solution opened new possibilities for immersive experiences in planetariums and science centers worldwide.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="text-2xl font-bold mb-2">2024</h3>
                <p className="text-foreground/70">
                  Today, Pixelkorea serves clients in over 50 countries, powering immersive experiences in museums, theme parks, corporate events, and theaters. We continue to innovate and expand our product offerings to meet the evolving needs of our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Our <span className="text-primary">Leadership Team</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all bg-card/50">
                  <div className="text-5xl mb-4">👤</div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-bold text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Countries" },
                { number: "500+", label: "Installations" },
                { number: "1000+", label: "Happy Clients" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="text-5xl font-black text-primary mb-3">{stat.number}</div>
                  <p className="text-foreground/70 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Join Us in Creating
              <br />
              <span className="text-primary">Immersive Experiences</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether you're a client, partner, or potential team member, we'd love to hear from you.
            </p>

            <Button
              onClick={() => setLocation("/contact")}
              size="lg"
              className="bg-primary hover:opacity-90 text-background font-bold text-base"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-bold text-primary text-lg mb-4">Pixelkorea</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Projection mapping, dome displays, and immersive solutions for the modern world.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Products</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Showlogix
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      LightMagic Fusion
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
              <p>© 2026 Pixelkorea. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
