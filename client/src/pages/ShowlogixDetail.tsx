import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Layers, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Showlogix Detail Page
 * Complete product information and specifications
 */

export default function ShowlogixDetail() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: "⚡",
      title: "Frame-Accurate Synchronization",
      description: "Ensures perfect playback across unlimited projectors with zero frame drift or visual artifacts.",
    },
    {
      icon: "🎯",
      title: "Intelligent Edge-Blending",
      description: "Automatic detection and seamless blending of overlapping projection areas for flawless visuals.",
    },
    {
      icon: "🔧",
      title: "Advanced Warping",
      description: "Geometric correction for irregular surfaces, curved walls, and complex architectural elements.",
    },
    {
      icon: "☁️",
      title: "Cloud Management",
      description: "Update content, monitor systems, and manage installations from anywhere in the world.",
    },
    {
      icon: "📊",
      title: "Real-Time Diagnostics",
      description: "Comprehensive monitoring and automatic alerts for system health and performance issues.",
    },
    {
      icon: "🎨",
      title: "Content Flexibility",
      description: "Support for multiple video formats, live input, and custom codec integration.",
    },
  ];

  const specifications = [
    { label: "Supported Projectors", value: "Unlimited" },
    { label: "Max Resolution", value: "8K (7680 x 4320)" },
    { label: "Frame Rate", value: "Up to 120fps" },
    { label: "Latency", value: "< 1 frame" },
    { label: "Video Formats", value: "H.264, H.265, ProRes, DNxHD" },
    { label: "Platform", value: "Windows 10/11, Linux" },
    { label: "RAM Required", value: "8GB minimum (16GB recommended)" },
    { label: "GPU", value: "NVIDIA RTX series recommended" },
  ];

  const useCases = [
    {
      title: "Museum Installations",
      description: "Create immersive exhibitions with synchronized multi-projector displays across gallery walls.",
      icon: "🏛️",
    },
    {
      title: "Theme Parks",
      description: "Power attraction pre-shows and immersive experiences with reliable, high-performance projection.",
      icon: "🎢",
    },
    {
      title: "Corporate Events",
      description: "Deliver stunning presentations and brand experiences with professional-grade projection systems.",
      icon: "🏢",
    },
    {
      title: "Live Performances",
      description: "Support concerts, theater productions, and live events with real-time content switching.",
      icon: "🎭",
    },
    {
      title: "Architectural Projection",
      description: "Transform buildings and landmarks with dynamic, perfectly-blended projection mapping.",
      icon: "🏗️",
    },
    {
      title: "Retail & Advertising",
      description: "Create eye-catching displays and interactive installations for retail environments.",
      icon: "🛍️",
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
            <div className="text-8xl mb-4">🎬</div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              SHOWLOGIX
              <br />
              <span className="text-primary">Professional Projection Control</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Advanced projection mapping software for multi-projector installations with intelligent edge-blending and real-time content management.
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

        {/* Use Cases */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Use <span className="text-primary">Cases</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{useCase.description}</p>
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

        {/* Comparison with LightMagic */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Showlogix vs <span className="text-primary">LightMagic Fusion</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold">Feature</th>
                    <th className="text-center py-4 px-4 font-bold">Showlogix</th>
                    <th className="text-center py-4 px-4 font-bold">LightMagic Fusion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Multi-Projector Support</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Dome Optimization</td>
                    <td className="text-center py-4 px-4">✓</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">8K Support</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">Cloud Management</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Best For</td>
                    <td className="text-center py-4 px-4 text-primary font-bold">General Projection</td>
                    <td className="text-center py-4 px-4 text-primary font-bold">Dome Theaters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Ready to Transform
              <br />
              <span className="text-primary">Your Projection System?</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Contact our team to schedule a demo and see Showlogix in action.
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
