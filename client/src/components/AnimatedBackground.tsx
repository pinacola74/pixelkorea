import { useEffect, useRef } from "react";
import "../animations.css";

interface AnimatedBackgroundProps {
  intensity?: "low" | "high";
}

export default function AnimatedBackground({ intensity = "high" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const particleCount = intensity === "high" ? 100 : 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 ? "rgba(0, 217, 255, " : "rgba(168, 85, 247, ",
        life: Math.random() * 100,
        maxLife: Math.random() * 200 + 100,
      });
    }

    particlesRef.current = particles;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(10, 14, 39, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const time = frameCount * 0.01;
      gradient.addColorStop(0, `rgba(0, 217, 255, ${Math.sin(time) * 0.02 + 0.02})`);
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${Math.sin(time + Math.PI / 2) * 0.02 + 0.02})`);
      gradient.addColorStop(1, `rgba(0, 217, 255, ${Math.sin(time + Math.PI) * 0.02 + 0.02})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.life++;

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.03;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Damping
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.7;

        // Draw particle with glow
        ctx.shadowColor = particle.color.replace(")", ", 0.8)");
        ctx.shadowBlur = 8;
        ctx.fillStyle = particle.color + Math.max(opacity, 0) + ")";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });

      // Draw connecting lines between nearby particles
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intensity]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Canvas for particle animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/8 pointer-events-none" />

      {/* Animated orbs - Large background elements */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl pointer-events-none" style={{ animation: "float-slow 15s ease-in-out infinite" }} />
      <div
        className="absolute -bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/15 to-primary/10 blur-3xl pointer-events-none"
        style={{ animation: "float-slow 20s ease-in-out infinite", animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 -right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/15 to-purple-500/10 blur-3xl pointer-events-none"
        style={{ animation: "float-slow 18s ease-in-out infinite", animationDelay: "6s" }}
      />

      {/* Wave patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 217, 255, 0.3)" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow-filter)"
          className="animate-[wave-motion_8s_ease-in-out_infinite]"
        />
        <path
          d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200"
          stroke="rgba(168, 85, 247, 0.25)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow-filter)"
          className="animate-[wave-motion_10s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300"
          stroke="rgba(0, 217, 255, 0.2)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow-filter)"
          className="animate-[wave-motion_12s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Geometric shapes with rotation */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-primary/25 rounded-3xl pointer-events-none" style={{ animation: "rotate-slow 25s linear infinite" }} />
      <div
        className="absolute bottom-32 left-20 w-32 h-32 border border-accent/25 rounded-full pointer-events-none"
        style={{ animation: "rotate-slow 35s linear infinite reverse", animationDelay: "5s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-purple-500/20 pointer-events-none"
        style={{ animation: "rotate-slow 40s linear infinite", animationDelay: "10s", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />

      {/* Shimmer/Glow effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ animation: "shimmer 4s ease-in-out infinite" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      {/* Additional glow spots */}
      <div className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ animation: "blur-pulse 6s ease-in-out infinite", background: "radial-gradient(circle, rgba(0, 217, 255, 0.15), transparent)" }} />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ animation: "blur-pulse 8s ease-in-out infinite", animationDelay: "2s", background: "radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent)" }}
      />
    </div>
  );
}
