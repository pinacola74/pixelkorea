import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

/**
 * LightMagic Fusion Detail Page
 * Complete product information and specifications
 */

export default function LightmagicDetail() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: "🎯",
      title: "Automatic Dome Correction",
      description: "Intelligent algorithms automatically detect and correct geometric distortions for perfect dome projection.",
    },
    {
      icon: "8️⃣",
      title: "8K Ready",
      description: "Support for 8K resolution content at 60fps for stunning visual fidelity in dome environments.",
    },
    {
      icon: "🔄",
      title: "Advanced Warping",
      description: "Specialized warping algorithms optimized for spherical surfaces and complex dome geometries.",
    },
    {
      icon: "✨",
      title: "Seamless Blending",
      description: "Invisible blending of multiple projectors for immersive, artifact-free dome experiences.",
    },
    {
      icon: "🎮",
      title: "Intuitive Controls",
      description: "Dome-specific interface designed for easy operation by theater staff and technicians.",
    },
    {
      icon: "🔒",
      title: "Enterprise Reliability",
      description: "99.9% uptime guarantee with redundant systems and 24/7 technical support.",
    },
  ];

  const specifications = [
    { label: "Max Projectors", value: "Unlimited" },
    { label: "Max Resolution", value: "8K (7680 x 4320)" },
    { label: "Frame Rate", value: "Up to 120fps" },
    { label: "Latency", value: "< 1 frame" },
    { label: "Dome Sizes", value: "Any size" },
    { label: "Video Formats", value: "H.264, H.265, ProRes, DNxHD" },
    { label: "RAM Required", value: "16GB minimum (32GB recommended)" },
    { label: "GPU", value: "NVIDIA RTX series recommended" },
  ];

  const domeTypes = [
    {
      title: "Planetariums",
      description: "Perfect for astronomical shows and educational content with precise geometric correction.",
      icon: "🌟",
    },
    {
      title: "Science Centers",
      description: "Ideal for immersive science exhibitions and interactive educational experiences.",
      icon: "🔬",
    },
    {
      title: "Theme Park Attractions",
      description: "Create unforgettable immersive experiences for theme park visitors.",
      icon: "🎢",
    },
    {
      title: "Immersive Theaters",
      description: "Deliver cinematic experiences with full-dome immersive content.",
      icon: "🎬",
    },
    {
      title: "Museums",
      description: "Showcase collections and historical content in immersive dome environments.",
      icon: "🏛️",
    },
    {
      title: "Corporate Events",
      description: "Create memorable brand experiences with immersive dome presentations.",
      icon: "🏢",
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
            <div className="text-8xl mb-4">🌌</div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              LIGHTMAGIC
              <br />
              <span className="text-primary">FUSION</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-2">Dome Theater Excellence</p>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Specialized solution for dome theater displays with automatic geometric correction and seamless 8K content playback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:opacity-90 text-background font-bold text-base">
                REQUEST DEMO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-primary font-bold text-base"
                onClick={() => setLocation("/contact")}
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Key <span className="text-primary">Features</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all bg-card/50">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dome Applications */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Perfect For <span className="text-primary">Dome Theaters</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {domeTypes.map((type, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Technical <span className="text-primary">Specifications</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {specifications.map((spec, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <span className="font-bold text-foreground/70">{spec.label}</span>
                  <span className="text-primary font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose LightMagic */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Why Choose <span className="text-primary">LightMagic Fusion?</span>
            </h2>

            <div className="space-y-4">
              {[
                "Automatic dome geometry detection and correction",
                "Optimized for spherical projection surfaces",
                "Support for unlimited projectors in dome configuration",
                "8K content playback without performance degradation",
                "Seamless multi-projector blending with invisible seams",
                "Intuitive interface designed for dome theater operators",
                "Cloud-based content management and remote monitoring",
                "Enterprise-grade reliability with 99.9% uptime SLA",
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-border/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Ready to Upgrade
              <br />
              <span className="text-primary">Your Dome Theater?</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Contact our team to schedule a demo and see LightMagic Fusion in action.
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
