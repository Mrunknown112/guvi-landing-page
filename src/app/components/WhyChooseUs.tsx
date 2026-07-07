/* using raw HTML: kit catalog is empty — no components were extracted from this library */

const reasons = [
  {
    icon: "🎯",
    title: "Structured, Project-First Curriculum",
    desc: "Every concept is immediately applied to a real game project — no dry theory. You build as you learn.",
  },
  {
    icon: "🏆",
    title: "Industry-Recognized Certification",
    desc: "Our certificates carry weight. 500+ companies actively hire GUVI-certified developers.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Doubt Clearing Community",
    desc: "Get unstuck fast — our forum, Discord, and weekly live sessions mean you're never left behind.",
  },
  {
    icon: "🚀",
    title: "Placement Assistance",
    desc: "Resume reviews, mock interviews, job alerts, and a network of 500+ hiring partners to help you land your first role.",
  },
];

const stats = [
  { value: "50K+", label: "Students Enrolled" },
  { value: "4.8★", label: "Average Rating" },
  { value: "500+", label: "Hiring Partners" },
  { value: "92%", label: "Placement Rate" },
];

export function WhyChooseUs() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: 'var(--primary)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            Our Edge
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold"
          >
            Why Choose Us?
          </h2>
        </div>

        {/* Stats bar */}
        <div
          style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'calc(var(--radius) * 2)' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-14 overflow-hidden"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}
              className="p-6 text-center"
            >
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }} className="font-bold text-3xl">
                {s.value}
              </p>
              <p style={{ color: 'var(--muted-foreground)' }} className="text-sm mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'calc(var(--radius) * 1.5)' }}
              className="p-6 flex gap-5"
            >
              <div
                style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: 'var(--radius)', flexShrink: 0 }}
                className="w-14 h-14 flex items-center justify-center text-2xl"
              >
                {r.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold text-lg mb-1">
                  {r.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
