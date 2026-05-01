import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export default function AnimatedBackground({
  intensity = "medium",
  className = "",
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 입자 개수 설정
    const particleCount =
      intensity === "low" ? 10 : intensity === "medium" ? 20 : 30;

    // 입자 생성
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // 랜덤 크기
      const size = Math.random() * 6 + 2; // 2px ~ 8px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // 랜덤 위치
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // 랜덤 색상 (Cyan, Purple, Blue)
      const colors = [
        "rgba(6, 182, 212, 0.6)",    // Cyan
        "rgba(139, 92, 246, 0.5)",   // Purple
        "rgba(0, 82, 204, 0.4)",     // Blue
      ];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // 랜덤 애니메이션 속도
      const duration = Math.random() * 5 + 3; // 3s ~ 8s
      const delay = Math.random() * 2;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);
    }

    return () => {
      // 클린업
      container.innerHTML = "";
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(0, 82, 204, 0.08) 0%,
            rgba(6, 182, 212, 0.08) 25%,
            rgba(139, 92, 246, 0.08) 50%,
            rgba(0, 82, 204, 0.08) 100%
          )
        `,
        animation: "gradientShift 15s ease infinite",
        backgroundSize: "200% 200%",
      }}
    >
      {/* 기하학적 형태 */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)",
          top: "10%",
          left: "10%",
          animation: "shapePulse 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full opacity-15"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)",
          bottom: "5%",
          right: "5%",
          animation: "shapePulse 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
    </div>
  );
}
