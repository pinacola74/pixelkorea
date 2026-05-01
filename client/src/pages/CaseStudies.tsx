import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Award } from "lucide-react";

/**
 * Case Studies Page - Pixelkorea
 * Showcasing real-world projects with technical advantages and benefits
 */

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Heritage Reimagined",
      location: "Dubai, UAE",
      category: "Projection Mapping",
      description: "A stunning projection mapping project that transformed a historic building facade into an interactive storytelling canvas.",
      challenge: "The client needed to project complex, multi-layered visuals across an irregular surface with perfect synchronization and edge-blending.",
      solution: "Showlogix with advanced edge-blending and warping capabilities enabled seamless projection across 12 projectors with frame-accurate sync.",
      results: [
        "100% synchronized playback across all projectors",
        "Reduced setup time by 60% with automated calibration",
        "Zero frame drops during 8-hour daily operation",
        "Visitor engagement increased by 45%",
      ],
      technologies: ["Showlogix", "Edge-Blending", "Warping", "Multi-Projector Sync"],
      image: "🏛️",
    },
    {
      id: 2,
      title: "Cosmic Odyssey",
      location: "Doha, Qatar",
      category: "Dome Theater",
      description: "A full-dome immersive experience showcasing the universe with stunning visuals and perfect synchronization.",
      challenge: "Dome theaters require precise geometric correction and seamless content playback across curved surfaces. Traditional solutions were complex and unreliable.",
      solution: "LightMagic Fusion provided automatic dome correction, advanced warping, and frame-accurate playback for 8K content.",
      results: [
        "Automatic dome geometry correction",
        "8K content playback at 60fps without stuttering",
        "Content management from single interface",
        "Reduced operational complexity by 70%",
      ],
      technologies: ["LightMagic Fusion", "Dome Display", "Automatic Warping", "8K Support"],
      image: "🌌",
    },
    {
      id: 3,
      title: "Urban Canvas",
      location: "Singapore",
      category: "LED Display Integration",
      description: "Large-scale LED display project combining projection mapping with native LED displays for a hybrid immersive environment.",
      challenge: "Integrating multiple LED displays with projection systems while maintaining color accuracy and perfect synchronization across different hardware.",
      solution: "Showlogix's unified control system managed both projection and LED displays with color-matched output and frame-accurate sync.",
      results: [
        "Unified control of mixed hardware (projection + LED)",
        "Color accuracy maintained across all displays",
        "Single point of content management",
        "Reduced operational staff by 50%",
      ],
      technologies: ["Showlogix", "LED Integration", "Color Matching", "Unified Control"],
      image: "🎨",
    },
    {
      id: 4,
      title: "Infinite Perspectives",
      location: "Riyadh, Saudi Arabia",
      category: "Event Installation",
      description: "A temporary immersive installation for a major international conference featuring real-time content switching and audience interaction.",
      challenge: "Temporary setup required quick deployment, reliable operation, and real-time content management during live events.",
      solution: "Showlogix's cloud-based management and intuitive interface enabled remote content updates and real-time switching without technical expertise.",
      results: [
        "Setup completed in 4 hours (vs. 2 days with traditional systems)",
        "Zero technical issues during 3-day event",
        "Remote content management from any device",
        "Event organizers managed content independently",
      ],
      technologies: ["Showlogix", "Cloud Management", "Real-time Switching", "Remote Control"],
      image: "✨",
    },
  ];

  const advantages = [
    {
      icon: "⚡",
      title: "Unmatched Synchronization",
      description: "Frame-accurate playback across unlimited projectors ensures perfect visual harmony, eliminating sync drift and visual artifacts.",
    },
    {
      icon: "🎯",
      title: "Intelligent Calibration",
      description: "Automatic edge-blending and warping algorithms reduce setup time by 60% while maintaining pixel-perfect precision.",
    },
    {
      icon: "🔧",
      title: "Intuitive Control",
      description: "Web-based interface allows operators of any skill level to manage complex multi-projector systems from any device.",
    },
    {
      icon: "🌐",
      title: "Cloud Integration",
      description: "Update content remotely, manage multiple installations, and access real-time diagnostics from anywhere in the world.",
    },
    {
      icon: "💚",
      title: "Energy Efficient",
      description: "Optimized rendering engine reduces power consumption by 40% compared to traditional solutions without compromising quality.",
    },
    {
      icon: "🛡️",
      title: "Enterprise Reliability",
      description: "99.9% uptime guarantee with automatic failover, redundant systems, and 24/7 technical support.",
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
              CASE
              <br />
              <span className="text-primary">STUDIES</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Real-world projects showcasing how Pixelkorea solutions transform immersive experiences across the globe.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {cases.map((caseStudy, idx) => (
              <div
                key={caseStudy.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg blur-3xl" />
                    <div className="relative border border-primary/20 rounded-lg p-16 backdrop-blur-sm bg-card/50 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">{caseStudy.image}</div>
                        <p className="text-foreground/60">{caseStudy.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                      {caseStudy.category}
                    </p>
                    <h2 className="text-4xl font-black mb-2">{caseStudy.title}</h2>
                    <p className="text-foreground/60">{caseStudy.location}</p>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{caseStudy.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Challenge</h4>
                      <p className="text-foreground/70">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Solution</h4>
                      <p className="text-foreground/70">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-3">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Why Our Clients Choose <span className="text-primary">Pixelkorea</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((adv, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all bg-card/50">
                  <div className="text-5xl mb-4">{adv.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Ready to Transform
              <br />
              <span className="text-primary">Your Next Project?</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Let's discuss how Pixelkorea can bring your immersive vision to life with cutting-edge projection technology and unmatched reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:opacity-90 text-background font-bold text-base">
                GET IN TOUCH
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary font-bold text-base">
                EXPLORE SOLUTIONS
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
