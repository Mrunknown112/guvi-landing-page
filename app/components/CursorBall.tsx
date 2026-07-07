import { useEffect, useRef } from "react";

export function CursorBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      // Trail follows with lerp (lazy easing)
      trail.current.x += (pos.current.x - trail.current.x) * 0.1;
      trail.current.y += (pos.current.y - trail.current.y) * 0.1;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${pos.current.x - 8}px, ${pos.current.y - 8}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 20}px, ${trail.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Outer trailing glow */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0) 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'opacity 0.2s',
        }}
      />
      {/* Inner sharp dot */}
      <div
        ref={ballRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'rgba(34,197,94,0.9)',
          boxShadow: '0 0 10px rgba(34,197,94,0.6), 0 0 20px rgba(34,197,94,0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
