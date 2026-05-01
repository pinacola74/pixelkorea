import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Products Page - Pixelkorea
 * Main products overview with links to detailed pages
 */

export default function Products() {
  const [, setLocation] = useLocation();

  const products = [
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
      color: "from-primary/20 to-accent/20",
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
      color: "from-accent/20 to-primary/20",
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
              <span className="text-primary">PRODUCTS</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Cutting-edge projection solutions designed for immersive experiences at any scale.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
                >
                  {/* Product Image */}
                  <div className={`relative bg-gradient-to-br ${product.color} h-64 flex items-center justify-center border-b border-border`}>
                    <div className="text-8xl">{product.icon}</div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-black mb-2">{product.name}</h2>
                      <p className="text-foreground/60 text-sm">{product.tagline}</p>
                    </div>

                    <p className="text-foreground/70 leading-relaxed">{product.description}</p>

                    <div>
                      <h4 className="font-bold text-primary mb-3 uppercase text-sm tracking-wider">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent">✓</span>
                            <span className="text-foreground/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => setLocation(product.link)}
                      className="w-full bg-primary hover:opacity-90 text-background font-bold"
                    >
                      LEARN MORE
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Which Product
              <br />
              <span className="text-primary">Is Right For You?</span>
            </h2>

            <div className="space-y-8">
              <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-primary">Choose Showlogix If You Need:</h3>
                <ul className="space-y-3">
                  {[
                    "Multi-projector projection mapping systems",
                    "Edge-blending and warping capabilities",
                    "Real-time content management",
                    "Support for various projection scenarios",
                    "Flexible, scalable solution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent text-lg">•</span>
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-primary">Choose LightMagic Fusion If You Need:</h3>
                <ul className="space-y-3">
                  {[
                    "Specialized dome theater solutions",
                    "Automatic geometric correction",
                    "8K content playback optimization",
                    "Seamless dome projection blending",
                    "Dedicated dome theater support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent text-lg">•</span>
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Still Not Sure?
              <br />
              <span className="text-primary">Let's Talk</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our experts can help you choose the perfect solution for your specific needs and requirements.
            </p>

            <Button
              onClick={() => setLocation("/contact")}
              size="lg"
              className="bg-primary hover:opacity-90 text-background font-bold text-base"
            >
              CONTACT OUR TEAM
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
