import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Contact Page - Pixelkorea
 * Contact form and company information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
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
        <section className="min-h-[50vh] flex items-center justify-center pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              GET IN
              <br />
              <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-8">
                <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-foreground/70 text-sm">info@pixelkorea.com</p>
                  <p className="text-foreground/70 text-sm">support@pixelkorea.com</p>
                </div>

                <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-foreground/70 text-sm">+82-2-XXXX-XXXX</p>
                  <p className="text-foreground/70 text-sm">Mon-Fri, 9AM-6PM KST</p>
                </div>

                <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-foreground/70 text-sm">Seoul, South Korea</p>
                  <p className="text-foreground/70 text-sm">Serving clients worldwide</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-border rounded-lg bg-card/50">
                  {submitted && (
                    <div className="p-4 bg-accent/20 border border-accent rounded-lg">
                      <p className="text-accent font-bold">Thank you! We'll get back to you soon.</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-background border-border text-foreground placeholder:text-foreground/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-background border-border text-foreground placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-background border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="showlogix">Showlogix Inquiry</option>
                      <option value="lightmagic">LightMagic Fusion Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:opacity-90 text-background font-bold text-base">
                    SEND MESSAGE
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-16 text-center">
              Frequently Asked
              <br />
              <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is the typical implementation timeline?",
                  a: "Most installations are completed within 2-4 weeks, depending on the complexity of your setup and content preparation.",
                },
                {
                  q: "Do you offer training and support?",
                  a: "Yes, we provide comprehensive training, 24/7 technical support, and regular maintenance for all our solutions.",
                },
                {
                  q: "Can I integrate with existing systems?",
                  a: "Absolutely. Our solutions are designed to integrate seamlessly with most existing projection and control systems.",
                },
                {
                  q: "What are the system requirements?",
                  a: "Requirements vary by solution. Contact our team for specific details based on your installation size and needs.",
                },
                {
                  q: "Do you offer trial versions?",
                  a: "Yes, we offer demos and trial periods. Contact us to schedule a demonstration.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <h3 className="font-bold mb-3 text-lg">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
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
