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
        "프로젝션 맵핑 및 엣지블렌딩 전문 소프트웨어입니다. 무제한의 프로젝터를 하나의 시스템으로 제어하며, 고급 2D/3D 와핑 기술로 어떤 형태의 곡면에도 완벽한 픽셀 정렬을 달성합니다. 전문 엔지니어 없이도 클릭 몇 번으로 복잡한 프로젝션 시스템을 구축할 수 있습니다.",
      icon: "🎬",
      features: [
        "프레임 정확도의 멀티 프로젝터 동기화",
        "지능형 엣지블렌딩 및 와핑",
        "클라우드 기반 콘텐츠 관리",
        "실시간 진단 및 모니터링",
        "직관적인 웹 기반 인터페이스",
        "무제한 프로젝터 지원",
      ],
      useCases: [
        "박물관 및 전시관",
        "테마파크 및 놀이공원",
        "기업 행사 및 프레젠테이션",
        "라이브 공연 및 이벤트",
        "건축물 외벽 프로젝션",
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
        "돔 디스플레이 전문 소프트웨어로 360도 완전 몰입형 경험을 제공합니다. 자동 돔 캘리브레이션으로 설치 후 복잡한 수동 보정을 불필요하게 하며, 여러 프로젝터의 영상을 돔 전체에 완벽하게 블렌딩합니다. 4K/8K 고해상도 콘텐츠를 지원하며 인터랙티브 콘텐츠 연동도 가능합니다.",
      icon: "🌌",
      features: [
        "자동 돔 기하학 보정",
        "8K 콘텐츠 60fps 지원",
        "고급 와핑 알고리즘",
        "완벽한 멀티 프로젝터 블렌딩",
        "직관적인 돔 전용 컨트롤",
        "엔터프라이즈급 안정성",
      ],
      useCases: [
        "플래너타리움 및 우주관",
        "과학관 및 교육 시설",
        "테마파크 돔 시어터",
        "몰입형 영상관",
        "박물관 특별 전시 공간",
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
              어떤 규모의 프로젝션 시스템이든 완벽하게 제어할 수 있는 최첨단 솔루션입니다.
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
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-3">주요 기능</h4>
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
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-3">적용 분야</h4>
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
              픽셀코리아의 전문가들이 당신의 프로젝트에 가장 적합한 솔루션을 선택하도록 도와드립니다.
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
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">솔루션</h4>
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
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">회사</h4>
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
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">문의</h4>
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
