/* using raw HTML: kit catalog is empty — no components were extracted from this library */

const bonuses = [
  {
    icon: "📄",
    title: "Resume Building Workshop",
    value: "₹2,999 FREE",
    desc: "Craft a developer resume that gets noticed — with a game-dev specific template.",
  },
  {
    icon: "🎤",
    title: "Mock Interview Prep",
    value: "₹1,999 FREE",
    desc: "Practice with real game-dev interview questions and get expert feedback.",
  },
  {
    icon: "🐙",
    title: "GitHub Portfolio Setup",
    value: "₹999 FREE",
    desc: "Launch a professional GitHub portfolio to showcase all your game projects.",
  },
  {
    icon: "🎨",
    title: "Game Asset Pack (200+)",
    value: "₹1,499 FREE",
    desc: "Royalty-free sprites, sounds, and backgrounds — use them in any project.",
  },
  {
    icon: "🔴",
    title: "Recorded Session Library",
    value: "₹1,999 FREE",
    desc: "Access all past live sessions, replayed and indexed for easy searching.",
  },
  {
    icon: "🏅",
    title: "Digital Achievement Badges",
    value: "₹499 FREE",
    desc: "Earn shareable micro-credentials for each module you complete.",
  },
];

export function BonusFeatures() {
  const totalValue = "₹9,994";

  return (
    <section
      style={{ backgroundColor: 'var(--muted)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: 'var(--primary)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            Exclusive Bonuses
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold mb-3"
          >
            Bonus Features You Get — Free
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">
            On top of the full course, we're throwing in{" "}
            <span style={{ color: 'var(--primary)' }} className="font-semibold">
              {totalValue} worth
            </span>{" "}
            of extras at no charge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'calc(var(--radius) * 1.5)',
              }}
              className="p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{bonus.icon}</span>
                <span
                  style={{ backgroundColor: 'rgba(34,197,94,0.12)', color: 'var(--primary)', borderRadius: 'var(--radius)' }}
                  className="text-xs font-bold px-2 py-0.5"
                >
                  {bonus.value}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold text-lg">
                {bonus.title}
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed">
                {bonus.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
