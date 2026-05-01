import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Lightbulb, Globe, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Home Page
 * Design Philosophy: "The Master of Immersive Experience"
 * - Professional, trustworthy, innovative
 * - Dark mode with Electric Blue (#0066ff) and Neon Cyan (#00d9ff) accents
 * - Cinematic, immersive visual experience
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const solutions = [
    {
      id: "showlogix",
      name: "Showlogix",
      subtitle: "Edge Blending & Warping Software",
      description: "이스라엘 기술 기반의 프로페셔널 프로젝션 맵핑 솔루션",
      features: ["Edge Blending", "Warping", "Color Calibration", "Multi-Projector Control"],
      icon: Zap,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/showlogix-technology-visual-a29nxf42Tz34tpL7R8mKz9.webp",
    },
    {
      id: "fusion",
      name: "LightMagic Fusion",
      subtitle: "Dome Display System",
      description: "돔 영상관 전용 자동 캘리브레이션 및 재생 시스템",
      features: ["Dome Calibration", "Edge Blending", "Real-time Rendering", "Content Playback"],
      icon: Lightbulb,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/dome-display-system-Go55krtkyAZz92hNxAGtTY.webp",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Heritage Reimagined",
      category: "Projection Mapping",
      location: "Dubai, UAE",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/project-gallery-showcase-i5HHyKQLQdpfaNfZHfH8i4.webp",
    },
    {
      id: 2,
      title: "Cosmic Odyssey",
      category: "Dome Theater",
      location: "Doha, Qatar",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/dome-display-system-Go55krtkyAZz92hNxAGtTY.webp",
    },
    {
      id: 3,
      title: "Urban Canvas",
      category: "LED Display",
      location: "Singapore",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/hero-projection-mapping-ZGh3kY7W4ARQCrk7NG75yR.webp",
    },
  ];

  const news = [
    {
      id: 1,
      title: "ISE 2026에서 새로운 Showlogix 기술 공개",
      date: "2026-05-15",
      category: "News",
      excerpt: "올해 ISE 2026에서 차세대 엣지 블랜딩 기술을 선보일 예정입니다.",
    },
    {
      id: 2,
      title: "돔 디스플레이 시스템 기술 가이드",
      date: "2026-05-10",
      category: "Technical Blog",
      excerpt: "LightMagic Fusion의 자동 캘리브레이션 프로세스에 대해 알아봅시다.",
    },
    {
      id: 3,
      title: "픽셀코리아, 글로벌 파트너십 확대",
      date: "2026-05-05",
      category: "News",
      excerpt: "유럽 및 아시아 지역의 새로운 협력사와 계약을 체결했습니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-primary">Pixel</span>
            <span className="text-accent">Korea</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#solutions" className="text-sm hover:text-primary transition">Solutions</a>
            <a href="#projects" className="text-sm hover:text-primary transition">Projects</a>
            <a href="#company" className="text-sm hover:text-primary transition">Company</a>
            <a href="#news" className="text-sm hover:text-primary transition">News</a>
          </div>
          <Button variant="outline" size="sm">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/hero-projection-mapping-ZGh3kY7W4ARQCrk7NG75yR.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Master of
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Immersive Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              프로젝션 맵핑, 돔 디스플레이, 대형 LED 시스템까지
              <br />
              모든 공간을 캔버스로 만드는 최고 수준의 엔지니어링 솔루션
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                솔루션 살펴보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                포트폴리오 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              우리의 솔루션
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              전 세계 프로젝션 맵핑 및 돔 디스플레이 시장을 선도하는
              <br />
              두 가지 프리미엄 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="group relative rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{
                    backgroundImage: `url('${solution.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Content */}
                <div className="relative p-8 bg-gradient-to-br from-card to-background/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{solution.name}</h3>
                      <p className="text-sm text-accent">{solution.subtitle}</p>
                    </div>
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    자세히 알아보기
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              주요 실적
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              전 세계 주요 프로젝트에서 우리의 기술력을 증명했습니다
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["all", "mapping", "dome", "led"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary"
                }`}
              >
                {tab === "all" && "All Projects"}
                {tab === "mapping" && "Projection Mapping"}
                {tab === "dome" && "Dome Theater"}
                {tab === "led" && "LED Display"}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-lg overflow-hidden border border-border hover:border-accent transition-all cursor-pointer"
              >
                <div 
                  className="aspect-video bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-4 bg-card/50 backdrop-blur-sm">
                  <p className="text-xs text-accent mb-2">{project.category}</p>
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              모든 프로젝트 보기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              최신 소식 & 인사이트
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              기술 트렌드, 프로젝트 업데이트, 회사 소식을 한눈에
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {news.map((item) => (
              <article
                key={item.id}
                className="group p-6 rounded-lg border border-border hover:border-primary bg-background transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-accent">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                <a href="#" className="text-sm text-primary hover:text-accent transition flex items-center">
                  자세히 읽기
                  <ChevronRight className="ml-1 w-3 h-3" />
                </a>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              모든 뉴스 보기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                신뢰할 수 있는
                <br />
                기술 파트너
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                2009년부터 시작한 픽셀코리아는 프로젝션 맵핑, 돔 디스플레이, 대형 LED 시스템의 설계부터 구축까지 
                완벽한 턴키 솔루션을 제공하는 엔지니어링 전문 기업입니다.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">글로벌 기술 파트너십</h4>
                    <p className="text-sm text-muted-foreground">
                      이스라엘 Showlogix, LightMagic과의 공식 파트너십
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">최첨단 기술</h4>
                    <p className="text-sm text-muted-foreground">
                      실시간 엣지 블랜딩, 자동 캘리브레이션, 4K 이상 고해상도 지원
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-lg overflow-hidden border border-border h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663552736016/CSzCixC7CkZsAa4UfNzXA8/partnership-trust-visual-TbayL5gZp2U5j88R7a7bqy.webp')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            당신의 프로젝트를 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            기술 상담, 견적 요청, 프로젝트 컨설팅 등
            <br />
            언제든지 우리에게 연락해주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              지금 문의하기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              기술 자료 다운로드
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">
                <span className="text-primary">Pixel</span>
                <span className="text-accent">Korea</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Immersive Visual Solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Showlogix</a></li>
                <li><a href="#" className="hover:text-primary transition">LightMagic Fusion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@pixelkorea.com" className="hover:text-primary transition">
                  info@pixelkorea.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Pixelkorea. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
