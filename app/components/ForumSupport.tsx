/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { CTAButton } from "./CTAButton";

const forumFeatures = [
  { icon: "⚡", label: "Avg. Response", value: "< 2 hours" },
  { icon: "👥", label: "Active Members", value: "50,000+" },
  { icon: "📌", label: "Topics Answered", value: "200K+" },
  { icon: "🗓️", label: "Weekly Live Q&A", value: "Every Friday" },
];

const samplePosts = [
  { user: "Arun K.", time: "2h ago", q: "How do I handle collision detection in Pygame?", replies: 5 },
  { user: "Priya S.", time: "4h ago", q: "Unity vs Godot — which is better for beginners?", replies: 12 },
  { user: "Rahul M.", time: "1d ago", q: "My Tetris score logic isn't resetting. Here's my code...", replies: 8 },
];

export function ForumSupport() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: stats + copy */}
        <div>
          <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            Community
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}
            className="font-bold mb-4"
          >
            Dedicated Forum Support — Never Get Stuck
          </h2>
          <p style={{ color: 'var(--subtle)' }} className="mb-8 leading-relaxed">
            Hit a bug? Confused about a concept? Our forum has expert mentors and
            50,000+ learners ready to help. No question is too small.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {forumFeatures.map((f) => (
              <div
                key={f.label}
                style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '9999px' }}
                className="p-4"
              >
                <span className="text-xl">{f.icon}</span>
                <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }} className="font-bold text-xl mt-1">
                  {f.value}
                </p>
                <p style={{ color: 'var(--subtle)' }} className="text-xs mt-0.5">
                  {f.label}
                </p>
              </div>
            ))}
          </div>

          <CTAButton href="#enroll">Join the Community →</CTAButton>
        </div>

        {/* Right: forum preview */}
        <div
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'calc(var(--radius) * 2)',
            overflow: 'hidden',
          }}
        >
          {/* Forum header bar */}
          <div
            style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
            className="px-5 py-3 flex items-center justify-between"
          >
            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold">
              🗨️ GUVI Game Dev Forum
            </span>
            <span
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '9999px' }}
              className="text-xs px-2 py-0.5 font-semibold"
            >
              LIVE
            </span>
          </div>

          {/* Posts */}
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {samplePosts.map((post) => (
              <div key={post.user + post.time} className="px-5 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-heading)' }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  >
                    {post.user[0]}
                  </div>
                  <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }} className="text-sm font-medium">
                    {post.user}
                  </span>
                  <span style={{ color: 'var(--subtle)' }} className="text-xs ml-auto">
                    {post.time}
                  </span>
                </div>
                <p style={{ color: 'var(--foreground)' }} className="text-sm mb-2">
                  {post.q}
                </p>
                <span style={{ color: 'var(--primary)' }} className="text-xs">
                  💬 {post.replies} replies
                </span>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div
            style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
            className="px-5 py-3"
          >
            <div
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '9999px', color: 'var(--subtle)' }}
              className="text-sm px-4 py-2"
            >
              Ask your question or help a fellow learner…
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
