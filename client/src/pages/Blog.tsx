import { Button } from "@/components/ui/button";
import ModernNav from "@/components/ModernNav";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

/**
 * Pixelkorea Blog Page
 * Design Philosophy: Clean, minimal, focused on content
 */

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "모든 포스트" },
    { id: "technical", label: "기술 문서" },
    { id: "case-study", label: "프로젝트 사례" },
    { id: "news", label: "뉴스" },
    { id: "insight", label: "인사이트" },
  ];

  const posts = [
    {
      id: 1,
      title: "엣지 블랜딩이란? 기술 원리와 적용 사례",
      category: "technical",
      date: "2026-05-01",
      excerpt: "멀티 프로젝터 시스템에서 완벽한 이음새 없는 화면을 만드는 엣지 블랜딩 기술의 원리를 알아봅시다.",
      readTime: "8분",
    },
    {
      id: 2,
      title: "돔 디스플레이 자동 캘리브레이션 프로세스",
      category: "technical",
      date: "2026-04-28",
      excerpt: "LightMagic Fusion의 자동 캘리브레이션 기술로 돔 영상관의 설치 시간을 50% 단축할 수 있습니다.",
      readTime: "10분",
    },
    {
      id: 3,
      title: "서울 광화문 돔 영상관 프로젝트 사례",
      category: "case-study",
      date: "2026-04-25",
      excerpt: "18m 돔 스크린, 8개 프로젝터 시스템으로 구현한 최신 돔 영상관 프로젝트의 기술 리포트입니다.",
      readTime: "12분",
    },
    {
      id: 4,
      title: "2026년 프로젝션 맵핑 기술 트렌드",
      category: "insight",
      date: "2026-04-22",
      excerpt: "AI 기반 자동 캘리브레이션, 실시간 콘텐츠 생성, 대형 LED 시스템과의 통합 등 올해의 주요 기술 트렌드를 분석합니다.",
      readTime: "7분",
    },
    {
      id: 5,
      title: "픽셀코리아, 이스라엘 Showlogix와 공식 파트너십 체결",
      category: "news",
      date: "2026-04-20",
      excerpt: "차세대 엣지 블랜딩 기술의 한국 독점 공급권을 획득하여 국내 시장에 최신 솔루션을 제공합니다.",
      readTime: "5분",
    },
    {
      id: 6,
      title: "와핑 기술로 곡면 스크린에 완벽한 이미지 구현하기",
      category: "technical",
      date: "2026-04-18",
      excerpt: "비정형 곡면에 프로젝션할 때 필요한 기하학적 와핑 기술의 원리와 실제 적용 사례를 소개합니다.",
      readTime: "9분",
    },
    {
      id: 7,
      title: "미술관 건축물 프로젝션 맵핑 - 3,000m² 외벽 프로젝트",
      category: "case-study",
      date: "2026-04-15",
      excerpt: "대규모 건축물 외벽에 프로젝션 맵핑을 구현한 프로젝트의 기술 도전과제 및 해결 방안을 공유합니다.",
      readTime: "11분",
    },
    {
      id: 8,
      title: "멀티 프로젝터 색상 캘리브레이션 가이드",
      category: "technical",
      date: "2026-04-12",
      excerpt: "여러 프로젝터의 색상을 일치시키는 과정에서 발생하는 문제와 해결 방법을 단계별로 설명합니다.",
      readTime: "10분",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground intensity="low" />

      {/* Navigation */}
      <ModernNav />

      {/* Old Nav - Remove */}
      <nav className="hidden sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border relative z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">Pixelkorea</a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/" className="hover:text-primary transition">홈</a>
            <a href="/" className="hover:text-primary transition">솔루션</a>
            <a href="/" className="hover:text-primary transition">프로젝트</a>
          </div>
          <Button size="sm">문의하기</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-4">기술 문서 & <span className="text-primary">뉴스</span></h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            프로젝션 맵핑, 돔 시스템, 엣지 블랜딩 기술에 대한 최신 정보와 기술 가이드를 확인하세요.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="포스트 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-blue-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-border pb-8 hover:pb-8 transition"
                >
                  <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                        {categories.find((c) => c.id === post.category)?.label}
                      </span>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                      <span className="text-xs text-foreground/60">•</span>
                      <span className="text-xs text-foreground/60">{post.readTime}</span>
                    </div>                </div>

                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <a href="#" className="text-primary font-medium hover:underline flex items-center gap-2">
                    전체 읽기
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">검색 결과가 없습니다.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-primary font-medium hover:underline"
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">새로운 포스트를 <span className="text-primary">받아보세요</span></h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            최신 기술 문서와 프로젝트 사례가 발행되면 이메일로 알려드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
            />
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold">구독</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Pixelkorea</h3>
              <p className="text-sm text-muted-foreground">
                프로젝션 맵핑, 돔 디스플레이, LED 시스템의 전문 솔루션
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">솔루션</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Showlogix</a></li>
                <li><a href="#" className="hover:text-primary transition">LightMagic Fusion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">회사소개</a></li>
                <li><a href="#" className="hover:text-primary transition">프로젝트</a></li>
                <li><a href="#" className="hover:text-primary transition">블로그</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">연락처</h4>
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
              <a href="#" className="hover:text-primary transition">개인정보처리방침</a>
              <a href="#" className="hover:text-primary transition">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
