import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, FileText, HelpCircle, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Support Page - Pixelkorea
 * Manuals, tutorials, and FAQ for customers
 */

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Showlogix",
      duration: "12:34",
      description: "Learn the basics of Showlogix setup and initial configuration.",
      thumbnail: "🎬",
    },
    {
      id: 2,
      title: "Edge-Blending Configuration",
      duration: "18:45",
      description: "Step-by-step guide to configuring edge-blending for multi-projector setups.",
      thumbnail: "🎬",
    },
    {
      id: 3,
      title: "Warping and Geometric Correction",
      duration: "15:20",
      description: "Master warping techniques for irregular surfaces and complex geometries.",
      thumbnail: "🎬",
    },
    {
      id: 4,
      title: "LightMagic Fusion Dome Setup",
      duration: "20:15",
      description: "Complete guide to setting up and optimizing dome theater displays.",
      thumbnail: "🎬",
    },
    {
      id: 5,
      title: "Content Management Best Practices",
      duration: "14:30",
      description: "Organize and manage your content library efficiently.",
      thumbnail: "🎬",
    },
    {
      id: 6,
      title: "Troubleshooting Common Issues",
      duration: "16:50",
      description: "Solutions to common problems and how to resolve them quickly.",
      thumbnail: "🎬",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the system requirements for Showlogix?",
      answer:
        "Showlogix requires a modern computer with at least 8GB RAM, SSD storage, and a dedicated graphics card. It supports Windows 10/11 and Linux. For optimal performance with 4K+ content, we recommend 16GB RAM and NVIDIA RTX series GPUs.",
    },
    {
      id: 2,
      question: "How many projectors can Showlogix control simultaneously?",
      answer:
        "Showlogix can control unlimited projectors across multiple networks. We have successfully deployed systems with 100+ projectors. The only limitation is network bandwidth and the rendering capacity of your control computer.",
    },
    {
      id: 3,
      question: "What video formats does Showlogix support?",
      answer:
        "Showlogix supports H.264, H.265 (HEVC), ProRes, DNxHD, and custom codecs. It also supports Notch LC and Avolites AiM codecs for advanced creative workflows.",
    },
    {
      id: 4,
      question: "Can I control Showlogix remotely?",
      answer:
        "Yes, Showlogix includes cloud-based remote management. You can access your installations from anywhere using the web interface, update content, monitor system health, and troubleshoot issues remotely.",
    },
    {
      id: 5,
      question: "What is the warranty period for Pixelkorea products?",
      answer:
        "All Pixelkorea products come with a 2-year hardware warranty and lifetime software updates. We also offer extended warranty and support plans for enterprise customers.",
    },
    {
      id: 6,
      question: "How often should I perform system maintenance?",
      answer:
        "We recommend monthly system checks and quarterly deep maintenance. Showligix includes automated diagnostics that alert you to potential issues before they become problems.",
    },
    {
      id: 7,
      question: "Is training available for my team?",
      answer:
        "Yes, we offer comprehensive training programs including online courses, on-site training, and certification programs. Contact our support team to schedule training for your organization.",
    },
    {
      id: 8,
      question: "What support options are available?",
      answer:
        "We offer 24/7 email support, phone support during business hours, and premium customers get dedicated technical support. Response times are typically under 2 hours for critical issues.",
    },
  ];

  const resources = [
    {
      title: "Showlogix User Manual",
      description: "Complete reference guide for all Showlogix features and functions.",
      icon: "📖",
      link: "#",
    },
    {
      title: "LightMagic Fusion Guide",
      description: "Comprehensive documentation for dome theater setup and operation.",
      icon: "📘",
      link: "#",
    },
    {
      title: "API Documentation",
      description: "Developer documentation for custom integrations and plugins.",
      icon: "💻",
      link: "#",
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and solutions for quick problem resolution.",
      icon: "🔧",
      link: "#",
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
              SUPPORT &
              <br />
              <span className="text-primary">RESOURCES</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to get the most out of your Pixelkorea solutions.
            </p>
          </div>
        </section>

        {/* Tutorial Videos Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16">
              Tutorial <span className="text-primary">Videos</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="group cursor-pointer border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative bg-card/50 h-40 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    <div className="relative text-6xl">{tutorial.thumbnail}</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold leading-tight">{tutorial.title}</h3>
                      <span className="text-sm text-foreground/60 whitespace-nowrap ml-2">{tutorial.duration}</span>
                    </div>
                    <p className="text-sm text-foreground/70">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black mb-16">
              Documentation &<span className="text-primary"> Resources</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.link}
                  className="p-8 border border-border rounded-lg hover:border-primary/50 bg-card/50 hover:bg-card transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{resource.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                      <p className="text-foreground/70">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-card/50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                        expandedFaq === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6 border-t border-border/50 pt-4">
                      <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-24 px-6 bg-primary/10 border-t border-b border-primary/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Need More
              <br />
              <span className="italic font-light">Help?</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our support team is here to help. Contact us for technical assistance, training, or any questions about your Pixelkorea solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div className="space-y-4">
                <div className="text-4xl">📧</div>
                <h3 className="font-bold">Email Support</h3>
                <p className="text-foreground/70 text-sm">support@pixelkorea.com</p>
                <p className="text-foreground/60 text-xs">Response within 2 hours</p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">📞</div>
                <h3 className="font-bold">Phone Support</h3>
                <p className="text-foreground/70 text-sm">+82-2-XXXX-XXXX</p>
                <p className="text-foreground/60 text-xs">Mon-Fri, 9am-6pm KST</p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">💬</div>
                <h3 className="font-bold">Live Chat</h3>
                <p className="text-foreground/70 text-sm">Available on our website</p>
                <p className="text-foreground/60 text-xs">24/7 for premium members</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:opacity-90 text-background font-bold text-base">
              CONTACT SUPPORT
              <Mail className="ml-2 w-5 h-5" />
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
