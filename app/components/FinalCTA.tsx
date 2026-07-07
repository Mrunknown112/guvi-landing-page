/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 2, h: 12, m: 29, s: 48 });
  useEffect(() => {
    const end = Date.now() + ((2 * 86400 + 12 * 3600 + 29 * 60 + 48) * 1000);
    const id = setInterval(() => {
      const diff = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setTimeLeft({ d: Math.floor(diff / 86400), h: Math.floor((diff % 86400) / 3600), m: Math.floor((diff % 3600) / 60), s: diff % 60 });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { val: pad(timeLeft.d), label: "DAYS" },
    { val: pad(timeLeft.h), label: "HOURS" },
    { val: pad(timeLeft.m), label: "MINS" },
    { val: pad(timeLeft.s), label: "SECS" },
  ];
  return (
    <div className="flex items-center justify-center gap-3">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3">
          <div className="text-center">
            <div
              style={{
                backgroundColor: 'rgba(10,10,10,0.75)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                fontFamily: 'var(--font-heading)',
                color: '#fff',
                minWidth: '64px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              className="px-4 py-3 font-bold text-3xl"
            >
              {u.val}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }} className="text-xs mt-2 tracking-widest uppercase">
              {u.label}
            </p>
          </div>
          {i < 3 && (
            <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-heading)' }} className="font-bold text-2xl mb-5">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <>
      {/* Main CTA section */}
      <section
        className="relative overflow-hidden py-28 px-4"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400&h=700&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 65% 100% at 50% 50%, rgba(6,13,6,0.88) 0%, rgba(6,13,6,0.5) 100%)' }}
        />
        {/* Top/bottom fade into page bg */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-7">

          {/* Heading */}
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', lineHeight: 1.2 }}
            className="font-bold"
          >
            Don't Miss Out – Black Friday Tech Sale!
          </h2>

          {/* Subtitle */}
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }} className="text-sm leading-relaxed max-w-sm">
            Master in-demand tech skills and boost your career. Seats are filling fast — grab
            lifetime access before it's too late!
          </p>

          {/* Countdown */}
          <Countdown />

          {/* Price card */}
          <div
            style={{
              background: 'rgba(8,18,8,0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'calc(var(--radius) * 2)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
            className="px-8 sm:px-16 py-6 flex flex-col items-center"
          >
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }} className="text-sm mb-1">
              Just
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: 'clamp(3.5rem, 9vw, 5.5rem)', lineHeight: 1 }} className="font-bold">
              ₹999
            </p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }} className="text-sm mt-2">
              (Save ₹1,500!)
            </p>
          </div>

          {/* CTA button + fine print */}
          <div className="flex flex-col items-center gap-2">
            <CTAButton href="#enroll">GRAB YOUR SEAT NOW – LIMITED SEATS! →</CTAButton>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }} className="text-xs">
              Limited seats available · Don't miss this opportunity!
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)', color: 'var(--subtle)', fontFamily: 'var(--font-body)' }}
        className="py-8 px-4 text-center text-xs"
      >
        <p className="mb-1">
          <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)' }} className="font-bold">GUVI</span>
          {" "}· A product of GUVI Geek Networks Pvt. Ltd.
        </p>
        <p>© 2026 GUVI. All rights reserved. · Privacy Policy · Terms of Service</p>
      </footer>
    </>
  );
}
