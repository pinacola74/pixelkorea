import { Button } from "@/components/ui/button";
import ModernNav from "@/components/ModernNav";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowRight, Zap, Lightbulb, Target, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Home Page - 2026 Modern Design
 * Design Philosophy: Glassmorphism, Asymmetric Layout, Bold Typography
 * Color: Neon Cyan on Almost Black, with Purple accents
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("showlogix");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="high" />

      {/* Navigation */}
      <ModernNav />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                      ✨ Next Generation Projection Technology
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    모든 공간을
                    <br />
                    <span className="text-primary">
                      캔버스로
                    </span>
                  </h1>
                  <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                    프로젝션 맵핑, 돔 디스플레이, LED 시스템의 최고 수준 솔루션으로 
                    건축물, 전시관, 공연장을 변신시킵니다.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:opacity-90 text-background font-semibold group"
                  >
                    솔루션 살펴보기
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 text-primary"
                  >
                    데모 보기
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-foreground/60">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-foreground/60">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-foreground/60">Global Partners</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-96 md:h-full min-h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/10 rounded-3xl blur-3xl" />
                <div className="absolute inset-0 border border-primary/20 rounded-3xl backdrop-blur-sm" />
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-primary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  <Zap className="w-16 h-16 text-primary mb-4 animate-bounce" />
                  <p className="text-foreground/70 text-sm">Interactive Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-4 mb-16">
              <h2 className="text-5xl font-bold">
                우리의 <span className="text-primary">솔루션</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl">
                전 세계 프로젝션 맵핑 및 돔 디스플레이 시장을 선도하는 두 가지 프리미엄 솔루션
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-12 border-b border-border/30">
              {[
                { id: "showlogix", label: "Showlogix" },
                { id: "fusion", label: "LightMagic Fusion" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-2 font-semibold transition-all relative ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  {activeTab === "showlogix" ? "Showlogix" : "LightMagic Fusion"}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {activeTab === "showlogix"
                    ? "이스라엘 기술 기반의 프로페셔널 프로젝션 맵핑 솔루션으로, 멀티 프로젝터 시스템에서 완벽한 이음새 없는 대형 화면을 구현합니다."
                    : "과학관, 천문대, 테마파크의 돔 영상관을 위한 자동 캘리브레이션 및 실시간 렌더링 시스템입니다."}
                </p>

                <div className="space-y-3">
                  {(activeTab === "showlogix"
                    ? [
                        "엣지 블랜딩",
                        "기하학적 와핑",
                        "색상 캘리브레이션",
                        "멀티 프로젝터 제어",
                      ]
                    : [
                        "자동 캘리브레이션",
                        "엣지 블랜딩",
                        "실시간 렌더링",
                        "콘텐츠 재생"
                      ]
                  ).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-primary hover:opacity-90 text-background font-semibold group">
                  자세히 알아보기
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl" />
                <div className="relative border border-primary/20 rounded-2xl p-8 backdrop-blur-sm bg-card/50 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="w-20 h-20 text-primary/50 mx-auto mb-4" />
                    <p className="text-foreground/60">Interactive Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16">
              왜 <span className="text-primary">픽셀코리아</span>를 선택하나요?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "경험",
                  description: "2009년부터 축적된 프로젝션 맵핑 및 돔 시스템 구축 경험",
                },
                {
                  icon: Zap,
                  title: "기술",
                  description: "이스라엘 Showlogix, LightMagic과의 공식 파트너십",
                },
                {
                  icon: Lightbulb,
                  title: "신뢰",
                  description: "국내외 주요 프로젝트의 성공적 완료",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative p-8 border border-primary/20 rounded-2xl backdrop-blur-sm bg-card/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative space-y-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h2 className="text-5xl font-bold mb-4">
                  최근 <span className="text-primary">프로젝트</span>
                </h2>
                <p className="text-lg text-foreground/60">
                  국내외 주요 프로젝트에서 우리의 기술력을 증명했습니다.
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex border-primary/30 hover:bg-primary/10 text-primary">
                모든 프로젝트 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Projects Grid - Asymmetric */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
              {[
                { title: "서울 광화문 돔 영상관", category: "Dome Theater", size: "md:col-span-2 md:row-span-2" },
                { title: "미술관 건축물 프로젝션", category: "Projection Mapping", size: "" },
                { title: "테마파크 돔 영상", category: "Dome Theater", size: "" },
                { title: "LED 디스플레이 시스템", category: "LED Display", size: "md:col-span-2" },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border border-primary/20 backdrop-blur-sm bg-gradient-to-br from-primary/10 to-accent/5 hover:border-primary/50 transition-all duration-300 cursor-pointer ${project.size} h-64`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16">
              최신 <span className="text-primary">인사이트</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "엣지 블랜딩이란? 기술 원리와 적용 사례",
                  category: "기술 문서",
                  date: "2026-05-01",
                  excerpt: "멀티 프로젝터 시스템에서 완벽한 이음새 없는 화면을 만드는 엣지 블랜딩 기술의 원리를 알아봅시다.",
                },
                {
                  title: "돔 디스플레이 자동 캘리브레이션 프로세스",
                  category: "기술 문서",
                  date: "2026-04-28",
                  excerpt: "LightMagic Fusion의 자동 캘리브레이션 기술로 돔 영상관의 설치 시간을 50% 단축할 수 있습니다.",
                },
                {
                  title: "2026년 프로젝션 맵핑 기술 트렌드",
                  category: "인사이트",
                  date: "2026-04-25",
                  excerpt: "AI 기반 자동 캘리브레이션, 실시간 콘텐츠 생성, 대형 LED 시스템과의 통합 등 올해의 주요 기술 트렌드를 분석합니다.",
                },
              ].map((post, idx) => (
                <div
                  key={idx}
                  className="group p-6 border border-primary/20 rounded-xl backdrop-blur-sm bg-card/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-foreground/70">{post.excerpt}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/blog" className="text-primary font-semibold hover:underline flex items-center justify-center gap-2">
                모든 포스트 보기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 backdrop-blur-sm bg-primary/10 p-12 md:p-16">
              <div className="absolute inset-0 bg-primary/5 opacity-50" />
              <div className="relative text-center space-y-8">
                <h2 className="text-5xl font-bold">
                  프로젝트 상담이
                  <br />
                  필요하신가요?
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  기술 상담, 견적 요청, 프로젝트 컨설팅 등 언제든지 연락해주세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:opacity-90 text-background font-semibold"
                  >
                    지금 문의하기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 text-primary"
                  >
                    기술 자료 다운로드
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 py-12 mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold text-primary mb-4">Pixelkorea</h3>
                <p className="text-sm text-foreground/60">
                  프로젝션 맵핑, 돔 디스플레이, LED 시스템의 전문 솔루션
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">솔루션</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition">Showlogix</a></li>
                  <li><a href="#" className="hover:text-primary transition">LightMagic Fusion</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">회사</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition">회사소개</a></li>
                  <li><a href="#" className="hover:text-primary transition">프로젝트</a></li>
                  <li><a href="/blog" className="hover:text-primary transition">블로그</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">연락처</h4>
                <p className="text-sm text-foreground/60">
                  <a href="mailto:info@pixelkorea.com" className="hover:text-primary transition">
                    info@pixelkorea.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
              <p>&copy; 2026 Pixelkorea. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition">개인정보처리방침</a>
                <a href="#" className="hover:text-primary transition">이용약관</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
