/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";

function StickyCountdown() {
  const [timeLeft, setTimeLeft] = useState({ h: 5, m: 59, s: 55 });
  useEffect(() => {
    const end = Date.now() + ((5 * 3600 + 59 * 60 + 55) * 1000);
    const id = setInterval(() => {
      const diff = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setTimeLeft({ h: Math.floor(diff / 3600), m: Math.floor((diff % 3600) / 60), s: diff % 60 });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { val: pad(timeLeft.h), label: "Hours" },
    { val: pad(timeLeft.m), label: "Minutes" },
    { val: pad(timeLeft.s), label: "Seconds" },
  ];
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-1.5">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-1.5">
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '6px',
                fontFamily: 'var(--font-heading)',
                color: '#fff',
                minWidth: '42px',
              }}
              className="px-2.5 py-1.5 font-bold text-lg text-center"
            >
              {u.val}
            </div>
            {i < 2 && (
              <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-heading)' }} className="font-bold text-base">
                :
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 pl-0.5">
        {units.map((u) => (
          <p key={u.label} style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', minWidth: '42px' }} className="text-xs text-center">
            {u.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export function StickyFooter() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'linear-gradient(90deg, #1a0a4a 0%, #2d1060 50%, #1a0a4a 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 -4px 32px rgba(0,0,0,0.5)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4">
        {/* Countdown */}
        <div className="shrink-0">
          <StickyCountdown />
        </div>

        {/* Offer text — hidden on very small screens */}
        <p
          style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)', lineHeight: 1.35 }}
          className="font-bold flex-1 text-center hidden md:block"
        >
          Grab your complete tech bundle now for just{" "}
          <span style={{ color: 'var(--primary)' }}>₹999 (60% OFF!)</span>
        </p>

        {/* CTA */}
        <div className="shrink-0">
          <CTAButton href="#enroll">Enroll Now →</CTAButton>
        </div>
      </div>
    </div>
  );
}
