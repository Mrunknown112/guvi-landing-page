/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { projectId, publicAnonKey } from "/utils/supabase/info";

const SERVER = `https://${projectId}.supabase.co/functions/v1/make-server-6935ba70`;

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 'var(--radius)',
  color: 'var(--foreground)',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  boxSizing: 'border-box',
  padding: '12px 16px',
  fontSize: '14px',
};

export function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${SERVER}/enroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ name, email, phone: `+91${phone}`, course: "Black Friday Bundle" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      if (data.url) window.location.href = data.url;
    } catch (err: any) {
      console.error("Enroll error:", err);
      setError(err.message || "Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0a0d1a 0%, var(--background) 50%, #070d07 100%)',
        fontFamily: 'var(--font-body)',
      }}
      className="relative overflow-hidden px-4 pt-14 pb-0"
    >
      {/* background glow blobs */}
      <div
        style={{ backgroundColor: 'var(--primary)', opacity: 0.07 }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -translate-y-1/2"
      />
      <div
        style={{ backgroundColor: '#6366f1', opacity: 0.06 }}
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none -translate-y-1/4"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Two-column hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center pb-16">

          {/* ── Left copy ── */}
          <div>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                color: 'var(--foreground)',
                fontFamily: 'var(--font-body)',
                backdropFilter: 'blur(8px)',
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              Black Friday Sale – Limited Time Only
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--foreground)',
                lineHeight: 1.1,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              }}
              className="font-bold mb-6"
            >
              Boost Your Career With{' '}
              <span style={{ color: 'var(--primary)' }}>Top Tech Courses</span>{' '}
              at ₹999
            </h1>

            <p
              style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              className="mb-10 text-base max-w-md"
            >
              Learn in-demand tech skills with expert-led, practical courses designed
              for real growth. Start your career transformation today for just ₹999 —
              limited Black Friday offer!
            </p>

            <CTAButton href="#enroll">Grab Your Seat Now →</CTAButton>
          </div>

          {/* ── Right: Enroll form card ── */}
          <div className="flex justify-center lg:justify-end" id="enroll">
            <div
              style={{
                backgroundColor: 'rgba(10,18,10,0.85)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'calc(var(--radius) * 2)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
              }}
              className="p-8"
            >
              <h3
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: '1.3rem', lineHeight: 1.3 }}
                className="font-bold text-center mb-6"
              >
                5K people registered already!
              </h3>

              <form onSubmit={handleEnroll} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', display: 'block' }} className="text-sm font-medium mb-1.5">
                    Name<span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', display: 'block' }} className="text-sm font-medium mb-1.5">
                    Email address<span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', display: 'block' }} className="text-sm font-medium mb-1.5">
                    Phone<span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <div
                      style={{
                        borderRight: '1px solid rgba(255,255,255,0.12)',
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        flexShrink: 0,
                        fontFamily: 'var(--font-body)',
                        color: 'var(--foreground)',
                        fontSize: '14px',
                      }}
                    >
                      🇮🇳 +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'var(--foreground)',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        padding: '12px 16px',
                        fontSize: '14px',
                      }}
                      className="placeholder:text-[rgba(255,255,255,0.3)]"
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p style={{ color: '#f87171', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
                    ⚠ {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading
                      ? 'rgba(34,197,94,0.5)'
                      : 'linear-gradient(to bottom, var(--btn-gradient-from), var(--btn-gradient-to))',
                    border: '1.5px solid var(--btn-border-color)',
                    borderRadius: 'var(--btn-radius)',
                    color: 'var(--btn-text)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    padding: '14px',
                    width: '100%',
                    marginTop: '4px',
                    boxShadow: 'inset 0px 3px 3px 0px var(--btn-highlight)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {loading ? "Processing…" : "Enroll Now — ₹999"}
                </button>

                <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)', fontSize: '11px', textAlign: 'center' }}>
                  🔒 Secure checkout via Stripe · 7-day money-back guarantee
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(0,0,0,0.25)' }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {[
            { icon: '👥', val: '17,000+', label: 'Learners' },
            { icon: '⭐', val: '4.8', label: 'Course Ratings' },
            { icon: '♾️', val: 'Lifetime', label: 'Access' },
            { icon: '💬', val: 'Forum', label: 'Support' },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', fontFamily: 'var(--font-body)' }}
              className="flex flex-col items-center justify-center py-6 gap-1"
            >
              <span className="text-xl mb-1">{s.icon}</span>
              <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold text-lg">{s.val}</span>
              <span style={{ color: 'var(--subtle)' }} className="text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
