import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

/**
 * Blog Page - Pixelkorea
 * Latest news, technology updates, and industry insights
 */

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "The Future of Immersive Experiences: 8K Projection Mapping",
      excerpt:
        "Discover how 8K projection technology is revolutionizing immersive experiences and creating unprecedented visual fidelity.",
      category: "Technology",
      date: "May 1, 2026",
      author: "Dr. James Chen",
      image: "🎬",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Case Study: How Showlogix Reduced Setup Time by 60%",
      excerpt:
        "Learn how our advanced calibration algorithms are transforming the way projection systems are deployed.",
      category: "Case Study",
      date: "April 28, 2026",
      author: "Sarah Kim",
      image: "📊",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Sustainability in Projection Technology",
      excerpt:
        "Exploring how modern projection solutions are reducing energy consumption and environmental impact.",
      category: "Sustainability",
      date: "April 25, 2026",
      author: "Michael Green",
      image: "🌱",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Mastering Edge-Blending: Advanced Techniques",
      excerpt:
        "A comprehensive guide to achieving perfect edge-blending across complex multi-projector installations.",
      category: "Tutorial",
      date: "April 22, 2026",
      author: "Alex Rodriguez",
      image: "🎯",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "Industry News: Dome Theaters See Record Growth",
      excerpt:
        "Recent market analysis shows a 45% increase in dome theater installations worldwide, driven by immersive content demand.",
      category: "News",
      date: "April 20, 2026",
      author: "Emma Watson",
      image: "📰",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Pixelkorea Partners with Leading Theme Parks",
      excerpt:
        "Announcing strategic partnerships with major theme parks to deploy next-generation projection solutions.",
      category: "News",
      date: "April 18, 2026",
      author: "David Park",
      image: "🤝",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "AI-Powered Content Optimization",
      excerpt:
        "How artificial intelligence is being used to automatically optimize content for different projection environments.",
      category: "Technology",
      date: "April 15, 2026",
      author: "Dr. Lisa Chen",
      image: "🤖",
      readTime: "10 min read",
    },
    {
      id: 8,
      title: "Live Event Production: Best Practices",
      excerpt:
        "Essential tips and techniques for managing complex projection systems during live events and performances.",
      category: "Tutorial",
      date: "April 12, 2026",
      author: "Tom Anderson",
      image: "🎪",
      readTime: "9 min read",
    },
  ];

  const categories = ["all", "Technology", "Case Study", "Tutorial", "News", "Sustainability"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              LATEST
              <br />
              <span className="text-primary">NEWS & INSIGHTS</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest technology trends, case studies, and industry insights from Pixelkorea.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-background"
                      : "bg-card border border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative bg-card/50 h-48 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      <div className="relative text-6xl">{post.image}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/60">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-foreground/70 text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-foreground/60 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 bg-primary/10 border-t border-b border-primary/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Stay Updated
              <br />
              <span className="italic font-light">with Pixelkorea</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest technology updates, case studies, and industry insights directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:opacity-90 text-background font-bold">
                Subscribe
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
