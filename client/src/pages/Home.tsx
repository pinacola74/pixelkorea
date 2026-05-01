import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Home Page - Hive Style
 * Design: Minimalist, Professional, Clear
 * Colors: Dark Gray background, White text, Gold + Lime Green accents
 */

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("attractions");

  const categories = {
    attractions: {
      title: "Themed Attractions",
      items: ["Theme Parks", "Visitor Attractions", "Museum & Heritage", "Planetariums & Science Centres"],
    },
    immersive: {
      title: "Immersive Experiences",
      items: ["Immersive Exhibitions", "Projection Mapping", "Experiential Installations", "Immersive Theatre"],
    },
    events: {
      title: "Live Events",
      items: ["Concerts", "Festivals", "Touring", "Ceremonies & Awards"],
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="low" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-black leading-tight tracking-tighter">
                INGENIOUS
                <br />
                <span className="text-primary">BY NATURE</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-light">
                A lighter, greener, scalable and affordable projection solution
              </p>
            </div>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We're projection experts. Bringing immersive experiences to life is second nature to us. It's why we created Pixelkorea.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:opacity-90 text-background font-bold text-base">
                DISCOVER OUR PRODUCTS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary font-bold text-base">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </section>

        {/* World's Smallest Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl font-black leading-tight">
                  World's
                  <br />
                  <span className="text-primary">smallest</span>,
                  <br />
                  most <span className="font-light italic">powerful</span>
                  <br />
                  <span className="text-primary">media engine</span>
                </h2>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our Showlogix software fits seamlessly into any display or projector. It's the invisible ingenuity powering complex, beautiful, artful video, able to be perfectly synchronized across multiple players using our own edge-blending and warping technology. We think of it like organic technology – light, flexible and better for the planet.
                </p>

                <div className="pt-4">
                  <Button className="bg-accent hover:opacity-90 text-background font-bold">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-primary/10 rounded-lg blur-3xl" />
                <div className="relative border border-primary/20 rounded-lg p-12 backdrop-blur-sm bg-card/50 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-primary/30 mb-4">⚡</div>
                    <p className="text-foreground/60">Advanced Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where to Use Section */}
        <section className="py-32 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-black mb-20 text-center">
              Where to use <span className="text-primary">PIXELKOREA</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {Object.entries(categories).map(([key, category]) => (
                <div
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`cursor-pointer p-8 rounded-lg border-2 transition-all duration-300 ${
                    activeCategory === key
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-card/50"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-black mb-20 text-center">
              Why choose <span className="text-primary">PIXELKOREA</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Naturally",
                  subtitle: "easy to use",
                  description:
                    "Our software is designed intelligently, so it can be operated from any modern web browser, on any device. Upload files and edit your playlist, from wherever you are.",
                  icon: "🎯",
                },
                {
                  title: "Works",
                  subtitle: "harmoniously",
                  description:
                    "Because our system is designed like a natural network, it works seamlessly with the latest technology. Delivers smooth video playback with support for H.264, H.265, and more.",
                  icon: "🔗",
                },
                {
                  title: "Doesn't cost",
                  subtitle: "The Earth",
                  description:
                    "Our solutions are designed without unnecessary features, creating more compact, intuitive and greener systems – with the same high quality.",
                  icon: "🌱",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4 p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                    <br />
                    <span className="text-primary">{item.subtitle}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-primary/10 border-t border-b border-primary/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-7xl font-black">
              Join the
              <br />
              <span className="italic font-light">Pixelkorea</span>
              <br />
              Revolution
            </h2>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover how Pixelkorea can transform your next immersive project
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:opacity-90 text-background font-bold text-base">
                GET IN TOUCH
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary font-bold text-base">
                VIEW CASE STUDIES
              </Button>
            </div>
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
