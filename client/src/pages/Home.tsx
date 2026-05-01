import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Home Page - Dark Theme with Animated Background
 * Design Philosophy: Professional, dynamic, tech-forward
 * Color: Deep Navy background with Cyan/Purple accents
 * Animation: Floating particles and gradient waves representing projection mapping
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const solutions = [
    {
      id: "showlogix",
      name: "Showlogix",
      subtitle: "엣지 블랜딩 & 와핑 소프트웨어",
      description: "이스라엘 기술 기반의 프로페셔널 프로젝션 맵핑 솔루션으로, 멀티 프로젝터 시스템에서 완벽한 이음새 없는 대형 화면을 구현합니다.",
      features: ["엣지 블랜딩", "기하학적 와핑", "색상 캘리브레이션", "멀티 프로젝터 제어"],
    },
    {
      id: "fusion",
      name: "LightMagic Fusion",
      subtitle: "돔 디스플레이 시스템",
      description: "과학관, 천문대, 테마파크의 돔 영상관을 위한 자동 캘리브레이션 및 실시간 렌더링 시스템입니다.",
      features: ["자동 캘리브레이션", "엣지 블랜딩", "실시간 렌더링", "콘텐츠 재생"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "서울 광화문 돔 영상관",
      category: "Dome Theater",
      year: "2024",
      description: "18m 돔 스크린, 8개 프로젝터 시스템",
    },
    {
      id: 2,
      title: "미술관 건축물 프로젝션 맵핑",
      category: "Projection Mapping",
      year: "2024",
      description: "3,000m² 외벽 프로젝션 맵핑",
    },
    {
      id: 3,
      title: "테마파크 돔 영상 설치",
      category: "Dome Theater",
      year: "2023",
      description: "15m 돔 스크린, 6개 프로젝터 시스템",
    },
  ];

  const whyUs = [
    {
      title: "경험",
      description: "2009년부터 축적된 프로젝션 맵핑 및 돔 시스템 구축 경험",
    },
    {
      title: "기술",
      description: "이스라엘 Showlogix, LightMagic과의 공식 파트너십",
    },
    {
      title: "신뢰",
      description: "국내외 주요 프로젝트의 성공적 완료",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="high" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Pixelkorea</div>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#solutions" className="hover:text-accent transition">솔루션</a>
              <a href="#projects" className="hover:text-accent transition">프로젝트</a>
              <a href="#about" className="hover:text-accent transition">회사소개</a>
              <a href="/blog" className="hover:text-accent transition">블로그</a>
            </div>
            <Button size="sm" className="bg-primary hover:bg-blue-700">문의하기</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 md:py-32 relative">
          <AnimatedBackground intensity="high" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                프로젝션 맵핑, 돔 디스플레이, LED 시스템
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                모든 공간을 캔버스로 만드는 최고 수준의 엔지니어링 솔루션. 
                건축물 외벽, 전시관, 돔 영상관까지 완벽한 턴키 솔루션을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-blue-700">
                  솔루션 살펴보기
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  기술 자료 다운로드
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-4">우리의 솔루션</h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
              전 세계 프로젝션 맵핑 및 돔 디스플레이 시장을 선도하는 두 가지 프리미엄 솔루션
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {solutions.map((solution) => (
                <div key={solution.id} className="border border-border rounded-lg p-8 hover:border-accent transition bg-card/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{solution.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a href="#" className="text-accent font-medium hover:underline flex items-center gap-2">
                    자세히 알아보기
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-20 md:py-32 relative bg-card/30">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-4">픽셀코리아를 선택하는 이유</h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
              15년 이상의 경험과 글로벌 기술 파트너십으로 신뢰할 수 있는 솔루션을 제공합니다.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {whyUs.map((item, idx) => (
                <div key={idx} className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-accent transition">
                  <h3 className="text-xl font-bold mb-3 text-accent">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-4">최근 프로젝트</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              국내외 주요 프로젝트에서 우리의 기술력을 증명했습니다.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["all", "dome", "mapping"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-primary text-white"
                      : "bg-card border border-border hover:border-accent"
                  }`}
                >
                  {tab === "all" && "모든 프로젝트"}
                  {tab === "dome" && "돔 영상관"}
                  {tab === "mapping" && "프로젝션 맵핑"}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-accent transition bg-card/50 backdrop-blur-sm"
                >
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">#{project.id}</div>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <p className="text-xs text-accent font-medium">{project.year}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="#" className="text-accent font-medium hover:underline flex items-center justify-center gap-2">
                모든 프로젝트 보기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 md:py-32 relative bg-card/30">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-4">최신 기술 문서 & 뉴스</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              프로젝션 맵핑, 돔 시스템, 엣지 블랜딩 기술에 대한 최신 정보를 확인하세요.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "엣지 블랜딩이란? 기술 원리와 적용 사례",
                  category: "기술 문서",
                  date: "2026-05-01",
                },
                {
                  title: "돔 디스플레이 자동 캘리브레이션 프로세스",
                  category: "기술 문서",
                  date: "2026-04-28",
                },
                {
                  title: "2026년 프로젝션 맵핑 기술 트렌드",
                  category: "인사이트",
                  date: "2026-04-25",
                },
              ].map((post, idx) => (
                <div key={idx} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent transition">
                  <p className="text-xs text-accent font-medium mb-2">{post.category}</p>
                  <h3 className="font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{post.date}</p>
                  <a href="#" className="text-accent text-sm font-medium hover:underline">
                    읽기 →
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/blog" className="text-accent font-medium hover:underline flex items-center justify-center gap-2">
                모든 포스트 보기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary relative">
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">프로젝트 상담이 필요하신가요?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              기술 상담, 견적 요청, 프로젝트 컨설팅 등 언제든지 연락해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                지금 문의하기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                기술 자료 다운로드
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 text-accent">Pixelkorea</h3>
                <p className="text-sm text-muted-foreground">
                  프로젝션 맵핑, 돔 디스플레이, LED 시스템의 전문 솔루션
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">솔루션</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-accent transition">Showlogix</a></li>
                  <li><a href="#" className="hover:text-accent transition">LightMagic Fusion</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">회사</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-accent transition">회사소개</a></li>
                  <li><a href="#" className="hover:text-accent transition">프로젝트</a></li>
                  <li><a href="/blog" className="hover:text-accent transition">블로그</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">연락처</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@pixelkorea.com" className="hover:text-accent transition">
                    info@pixelkorea.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; 2026 Pixelkorea. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-accent transition">개인정보처리방침</a>
                <a href="#" className="hover:text-accent transition">이용약관</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
