/* using raw HTML: kit catalog is empty — no components were extracted from this library */

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Cybersecurity Analyst @ TCS",
    rating: 5,
    text: "The Cybersecurity Bundle gave me the exact skills I needed to crack my first analyst interview. The hands-on practice tests and real-world scenarios made all the difference. Got certified and hired within 3 months!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&auto=format",
  },
  {
    name: "Arjun Mehta",
    role: "Full-Stack Developer @ Infosys",
    rating: 5,
    text: "I went from knowing just basic HTML to building full-stack applications in under 6 months. The Web Development bundle is incredibly well-structured and the forum support team is super responsive. Worth every rupee!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&auto=format",
  },
  {
    name: "Priya Nair",
    role: "AI Automation Specialist",
    rating: 5,
    text: "The AI Tools Mastery course completely changed how I work. I've automated 60% of my daily tasks. The lifetime access means I keep coming back as new tools drop. Best ₹999 I've ever spent on my career.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&auto=format",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#facc15' }}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            Student Stories
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold"
          >
            17,000+ Transforming Their Careers
          </h2>
          <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="mt-3 max-w-xl mx-auto">
            Learners who have advanced their careers and achieved their goals with GUVI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'calc(var(--radius) * 2)',
              }}
              className="p-6 flex flex-col"
            >
              <StarRating count={t.rating} />
              <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }} className="text-sm leading-relaxed mt-4 mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ backgroundColor: 'var(--surface)' }}
                />
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold text-sm">{t.name}</p>
                  <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
