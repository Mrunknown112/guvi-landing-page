/* using raw HTML: kit catalog is empty — no components were extracted from this library */

const features = [
  { icon: "♾️", title: "Lifetime Access", desc: "Access content anytime, revisit lessons forever — no expiry, no lock-out." },
  { icon: "💬", title: "24/7 Forum Support", desc: "Get help, ask doubts, and connect with a community of 17,000+ learners." },
  { icon: "↩️", title: "7-Day Refund Policy", desc: "Try any course risk-free with a simple 7-day no-questions-asked refund window." },
  { icon: "🏅", title: "Industry-Ready Certificates", desc: "Earn recognized certificates that strengthen your resume and LinkedIn profile." },
  { icon: "📱", title: "Learn Online, Anywhere", desc: "Study from anywhere — mobile, tablet, or laptop — at your own pace." },
  { icon: "🎯", title: "100% Skill-Focused Learning", desc: "Build confidence through high-quality, industry-relevant content aligned to your career." },
  { icon: "🔧", title: "Hands-On Practice", desc: "Learn by doing, not just watching — every course includes practical exercises." },
  { icon: "🚀", title: "Job-Ready Skills", desc: "Gain expertise you can apply immediately to real-world problems and projects." },
];

export function Features() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            What's Included
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold mb-3"
          >
            Everything You Need to Learn, Grow &amp; Succeed!
          </h2>
          <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="max-w-2xl mx-auto">
            All the tools, support, and resources you need to learn effectively, grow confidently,
            and succeed in your journey — at your own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: '#111',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 'calc(var(--radius) * 2)',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              className="p-7 flex flex-col items-center text-center"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              {/* Green icon square */}
              <div
                style={{
                  backgroundColor: 'var(--primary)',
                  borderRadius: '18px',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '20px',
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff' }} className="font-bold text-base">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
