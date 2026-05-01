import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Layers, Globe } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Solutions Page - Pixelkorea
 * Overview of Showlogix and LightMagic Fusion solutions
 */

export default function Solutions() {
  const [, setLocation] = useLocation();

  const solutions = [
    {
      id: "showlogix",
      name: "SHOWLOGIX",
      tagline: "Professional Projection Control",
      description:
        "Advanced projection mapping software for multi-projector installations with edge-blending, warping, and real-time content management.",
      icon: "🎬",
      features: [
        "Frame-accurate multi-projector synchronization",
        "Intelligent edge-blending and warping",
        "Cloud-based content management",
        "Real-time diagnostics and monitoring",
        "Intuitive web-based interface",
        "Support for unlimited projectors",
      ],
      useCases: [
        "Museum installations",
        "Theme park attractions",
        "Corporate events",
        "Live performances",
        "Architectural projection",
      ],
      color: "from-primary/20 to-accent/20",
      cta: "EXPLORE SHOWLOGIX",
      link: "/solutions/showlogix",
    },
    {
      id: "lightmagic",
      name: "LIGHTMAGIC FUSION",
      tagline: "Dome Theater Excellence",
      description:
        "Specialized solution for dome theater displays with automatic geometric correction, advanced warping, and seamless 8K content playback.",
      icon: "🌌",
      features: [
        "Automatic dome geometry correction",
        "8K content support at 60fps",
        "Advanced warping algorithms",
        "Seamless multi-projector blending",
        "Intuitive dome-specific controls",
        "Enterprise-grade reliability",
      ],
      useCases: [
        "Planetariums",
        "Science centers",
        "Theme park domes",
        "Immersive theaters",
        "Educational institutions",
      ],
      color: "from-accent/20 to-primary/20",
      cta: "EXPLORE LIGHTMAGIC",
      link: "/solutions/lightmagic",
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
              OUR
              <br />
              <span className="text-primary">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Cutting-edge projection technology designed for immersive experiences at any scale.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {solutions.map((solution, idx) => (
              <div
                key={solution.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Visual */}
                <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className={`relative bg-gradient-to-br ${solution.color} rounded-lg p-16 h-80 flex items-center justify-center border border-primary/20`}>
                    <div className="text-center">
                      <div className="text-8xl mb-4">{solution.icon}</div>
                      <p className="text-foreground/60 text-sm">{solution.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <div>
                    <h2 className="text-4xl font-black mb-2">{solution.name}</h2>
                    <p className="text-foreground/60">{solution.tagline}</p>
                  </div>

                  <p className="text-foreground/70 leading-relaxed text-lg">{solution.description}</p>

                  <div>
                    <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => setLocation(solution.link)}
                    className="bg-primary hover:opacity-90 text-background font-bold"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Choose Your <span className="text-primary">Solution</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div key={solution.id} className="border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{solution.name}</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-3">All Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent">✓</span>
                            <span className="text-foreground/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-3">Ideal For</h4>
                      <ul className="space-y-1">
                        {solution.useCases.map((useCase, i) => (
                          <li key={i} className="text-sm text-foreground/70">
                            • {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => setLocation(solution.link)}
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10 text-primary font-bold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Ready to Get Started?
              <br />
              <span className="text-primary">Contact Us Today</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Let our experts help you choose the perfect solution for your immersive project.
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
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
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
