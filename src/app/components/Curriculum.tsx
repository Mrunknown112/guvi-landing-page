/* using raw HTML: kit catalog is empty — no components were extracted from this library */

const modules = [
  {
    number: "01",
    title: "Python Fundamentals for Game Dev",
    lessons: "18 Lessons · 6 hrs",
    topics: ["Variables & Data Types", "Loops & Functions", "OOP Concepts", "File Handling"],
    image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=400&h=220&fit=crop&auto=format",
  },
  {
    number: "02",
    title: "Classic Arcade Games",
    lessons: "24 Lessons · 10 hrs",
    topics: ["Tetris Clone", "Snake Game", "Pong Multiplayer", "Space Invaders"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&h=220&fit=crop&auto=format",
  },
  {
    number: "03",
    title: "2D Game Development with Pygame",
    lessons: "20 Lessons · 8 hrs",
    topics: ["Sprites & Animation", "Collision Detection", "Sound & Music", "Level Design"],
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=400&h=220&fit=crop&auto=format",
  },
  {
    number: "04",
    title: "Unity & C# Essentials",
    lessons: "22 Lessons · 9 hrs",
    topics: ["Unity Interface", "C# Scripting", "Physics Engine", "Scene Management"],
    image: "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=400&h=220&fit=crop&auto=format",
  },
  {
    number: "05",
    title: "3D Game Mechanics",
    lessons: "18 Lessons · 7 hrs",
    topics: ["3D Models & Rigging", "AI & Pathfinding", "VFX & Shaders", "Lighting"],
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&h=220&fit=crop&auto=format",
  },
  {
    number: "06",
    title: "Zombie Attack — Capstone Project",
    lessons: "30 Lessons · 12 hrs",
    topics: ["Game Design Document", "Enemy AI System", "Multiplayer Mode", "Publishing to Store"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=220&fit=crop&auto=format",
  },
];

export function Curriculum() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            Course Roadmap
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold"
          >
            Game Development Bundle Curriculum
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="mt-3 max-w-xl mx-auto text-sm">
            112+ lessons across 6 structured modules — from zero to launching your own game.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.number}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'calc(var(--radius) * 1.5)',
                overflow: 'hidden',
              }}
              className="flex flex-col hover:translate-y-[-2px] transition-transform"
            >
              <div className="relative">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-44 object-cover"
                  style={{ backgroundColor: 'var(--muted)' }}
                />
                <div
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-heading)' }}
                  className="absolute top-3 left-3 px-2 py-0.5 text-sm font-bold rounded"
                >
                  Module {mod.number}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
                  className="font-bold text-lg mb-1"
                >
                  {mod.title}
                </h3>
                <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }} className="text-xs font-medium mb-3">
                  {mod.lessons}
                </p>
                <ul className="space-y-1 mt-auto">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      <span style={{ color: 'var(--primary)' }}>▸</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
