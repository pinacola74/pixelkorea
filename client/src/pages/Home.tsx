import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Home Page - Professional Design
 * Inspired by: Christie Digital + Barco
 * Design: Black background, Pure white text, Neon Cyan accents
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("showlogix");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="high" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-[fade-in-up_0.8s_ease-out]">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                      ✨ Next Generation Projection Technology
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    모든 공간을
                    <br />
                    <span className="text-primary">캔버스로</span>
                  </h1>
                  <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                    프로젝션 맵핑, 돔 디스플레이, LED 시스템의 최고 수준 솔루션으로 건축물, 전시관, 공연장을 변신시킵니다.
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
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-sm text-foreground/60">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">100+</p>
                    <p className="text-sm text-foreground/60">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-foreground/60">Global Partners</p>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden md:block animate-[slide-in-right_0.8s_ease-out]">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl" />
                <div className="relative border border-primary/20 rounded-2xl p-8 backdrop-blur-sm bg-card/50 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-primary/30 mb-4">✦</div>
                    <p className="text-foreground/60">Interactive Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                우리의 <span className="text-primary">솔루션</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                세계 최고 수준의 프로젝션 맵핑과 돔 디스플레이 기술
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-12 border-b border-border/30">
              {[
                { id: "showlogix", label: "Showlogix" },
                { id: "lightmagic", label: "LightMagic Fusion" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-medium transition-all border-b-2 ${
                    activeTab === tab.id
                      ? "text-primary border-primary"
                      : "text-foreground/60 border-transparent hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  {activeTab === "showlogix"
                    ? "엣지 블랜딩 & 프로젝션 맵핑"
                    : "자동 캘리브레이션 & 돔 재생"}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {activeTab === "showlogix"
                    ? "이스라엘 Showlogix의 고급 소프트웨어로 완벽한 엣지 블랜딩, 기하학적 와핑, 색상 캘리브레이션을 제공합니다."
                    : "LightMagic Fusion의 자동 캘리브레이션 기술로 돔 디스플레이의 완벽한 이미지 정렬과 실시간 콘텐츠 재생을 지원합니다."}
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

              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl" />
                <div className="relative border border-primary/20 rounded-2xl p-8 backdrop-blur-sm bg-card/50 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-primary/30 mb-4">⚡</div>
                    <p className="text-foreground/60">Advanced Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pixelkorea Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16">
              왜 <span className="text-primary">픽셀코리아</span>를 선택하나요?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "경험",
                  description: "2009년부터 축적된 프로젝션 맵핑 및 돔 시스템 구축 경험",
                },
                {
                  icon: Zap,
                  title: "기술",
                  description: "이스라엘 Showlogix, LightMagic과의 공식 파트너십",
                },
                {
                  icon: Shield,
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
                  <li><a href="#" className="hover:text-primary transition-colors">Showlogix</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">LightMagic Fusion</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">회사</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition-colors">소개</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">프로젝트</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">연락처</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition-colors">문의하기</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">지원</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-foreground/60">
                © 2026 Pixelkorea. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
