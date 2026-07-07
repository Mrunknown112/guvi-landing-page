/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SyllabusModal, type Module } from "./SyllabusModal";

function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 2, h: 12, m: 36, s: 0 });
  useEffect(() => {
    const end = Date.now() + ((2 * 86400 + 12 * 3600 + 36 * 60) * 1000);
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
    <div className="flex items-center gap-1.5 flex-wrap justify-center">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-1.5">
          <div className="text-center">
            <div
              style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontFamily: 'var(--font-heading)', color: '#fff', minWidth: '40px' }}
              className="px-2 py-1.5 font-bold text-xl"
            >
              {u.val}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }} className="text-xs mt-1">{u.label}</p>
          </div>
          {i < 3 && <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-heading)' }} className="font-bold text-lg mb-4">:</span>}
        </div>
      ))}
    </div>
  );
}

const courses: Array<{
  number: string; title: string; desc: string; hours: string;
  enrolled: string; rating: string; originalPrice: string; image: string; modules: Module[];
}> = [
  {
    number: "01",
    title: "Cybersecurity Bundle",
    desc: "Master essential cybersecurity tools to protect networks, systems, and data.",
    hours: "~45+ Hours",
    enrolled: "2,000+",
    rating: "4.8",
    originalPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=220&fit=crop&auto=format",
    modules: [
      { title: "Beginner Module", topics: ["Introduction to Cybersecurity", "Understanding Threats & Vulnerabilities", "Basics of Networking & Protocols", "Linux Fundamentals for Security"] },
      { title: "Intermediate Module", topics: ["Ethical Hacking Concepts", "Penetration Testing Basics", "Web Application Security", "Firewalls & IDS/IPS Systems"] },
      { title: "Advanced Module", topics: ["Advanced Threat Detection", "SIEM & Log Analysis", "Malware Analysis", "Incident Response & Forensics"] },
      { title: "Expert Module", topics: ["Red Team vs Blue Team Operations", "Cloud Security Architecture", "Zero Trust Security Model", "Certifications Prep: CEH, CompTIA Security+"] },
    ],
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Become a job-ready web developer by mastering HTML, CSS, JavaScript, and modern tools.",
    hours: "~50+ Hours",
    enrolled: "40,000+",
    rating: "4.6",
    originalPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=220&fit=crop&auto=format",
    modules: [
      { title: "Beginner Module", topics: ["HTML5 Structure & Semantics", "CSS3 Styling & Flexbox", "Responsive Design Basics", "Introduction to JavaScript"] },
      { title: "Intermediate Module", topics: ["DOM Manipulation & Events", "ES6+ JavaScript Features", "REST APIs & Fetch", "Version Control with Git"] },
      { title: "Advanced Module", topics: ["React.js Components & Hooks", "State Management", "Node.js & Express Backend", "Database Integration (MongoDB)"] },
      { title: "Expert Module", topics: ["Full-Stack Project Build", "Deployment on Vercel/AWS", "Performance Optimization", "Portfolio & Job Readiness"] },
    ],
  },
  {
    number: "03",
    title: "Game Development Bundle",
    desc: "Create your own games from scratch with our hands-on Game Development course.",
    hours: "~40+ Hours",
    enrolled: "1,000+",
    rating: "4.5",
    originalPrice: "₹2,999",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=220&fit=crop&auto=format",
    modules: [
      { title: "Beginner Module", topics: ["Game Design Fundamentals", "Introduction to Python & Pygame", "Sprites, Loops & Game Logic", "Build: Snake & Pong"] },
      { title: "Intermediate Module", topics: ["Unity Engine Basics", "C# Scripting for Games", "Physics & Collision Systems", "Build: Platformer Game"] },
      { title: "Advanced Module", topics: ["3D Game Development in Unity", "Animation & Rigging", "AI Pathfinding (NavMesh)", "Build: 3D Maze Explorer"] },
      { title: "Expert Module", topics: ["Godot Engine Introduction", "Multiplayer Game Basics", "Publishing to App Stores", "Game Monetization Strategies"] },
    ],
  },
  {
    number: "04",
    title: "AI Tools Mastery",
    desc: "Use powerful AI tools to automate tasks, boost productivity, and enhance your workflow.",
    hours: "~55+ Hours",
    enrolled: "2,500+",
    rating: "4.5",
    originalPrice: "₹1,000",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop&auto=format",
    modules: [
      { title: "Beginner Module", topics: ["Introduction to AI & LLMs", "Using ChatGPT Effectively", "Prompt Engineering Basics", "AI for Writing & Research"] },
      { title: "Intermediate Module", topics: ["AI Image Generation (Midjourney, DALL·E)", "AI for Code (GitHub Copilot)", "Automating Tasks with Zapier + AI", "AI in Google Workspace"] },
      { title: "Advanced Module", topics: ["Building Custom GPTs", "LangChain Fundamentals", "AI Agents & Workflows", "Data Analysis with AI"] },
      { title: "Expert Module", topics: ["AI in Business Processes", "Fine-tuning Open Source LLMs", "Building AI-Powered Products", "Ethics, Safety & Future of AI"] },
    ],
  },
  {
    number: "05",
    title: "Data Recovery Bundle",
    desc: "Restore lost, deleted, or corrupted data using professional recovery tools and techniques.",
    hours: "~9+ Hours",
    enrolled: "1,000+",
    rating: "4.5",
    originalPrice: "₹1,500",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=220&fit=crop&auto=format",
    modules: [
      { title: "Beginner Module", topics: ["Understanding Data Loss Causes", "File Systems & Storage Basics", "Introduction to Recovery Tools", "Recuva & PhotoRec Walkthrough"] },
      { title: "Intermediate Module", topics: ["Hard Drive & SSD Recovery", "Partition Recovery Techniques", "RAID Data Recovery Basics", "Mobile Data Recovery"] },
      { title: "Advanced Module", topics: ["Disk Imaging with dd & Clonezilla", "Hex Editor Analysis", "Database File Recovery", "Cloud Data Recovery"] },
      { title: "Expert Module", topics: ["Professional Recovery Workflows", "Data Recovery Business Setup", "Legal & Ethical Considerations", "Case Studies & Practice Labs"] },
    ],
  },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  const [showSyllabus, setShowSyllabus] = useState(false);
  return (
    <>
    {showSyllabus && (
      <SyllabusModal
        courseTitle={course.title}
        modules={course.modules}
        onClose={() => setShowSyllabus(false)}
      />
    )}
    <div
      style={{
        background: 'rgba(12, 26, 12, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 'calc(var(--radius) * 1.5)',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Thumbnail */}
      <div className="relative" style={{ height: '185px' }}>
        <ImageWithFallback
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(6,13,6,0.85) 0%, rgba(6,13,6,0.1) 55%)' }}
        />
        {/* Rating badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1"
          style={{ backgroundColor: '#facc15', borderRadius: '6px' }}
        >
          <span style={{ color: '#000', fontFamily: 'var(--font-heading)' }} className="font-bold text-xs">
            ⭐ {course.rating}
          </span>
        </div>
      </div>

      {/* Glass body */}
      <div className="p-5">
        <h3
          style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
          className="font-bold text-lg mb-2"
        >
          {course.title}
        </h3>
        <p
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
          className="text-sm mb-4 leading-relaxed"
        >
          {course.desc}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-5">
          <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }} className="text-xs flex items-center gap-1">
            🕐 {course.hours}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }} className="text-xs flex items-center gap-1">
            👥 {course.enrolled}
          </span>
        </div>

        {/* Price + CTA */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }} className="font-bold text-2xl">
              ₹999
            </span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }} className="text-sm line-through">
              {course.originalPrice}
            </span>
          </div>
          <button
            onClick={() => setShowSyllabus(true)}
            style={{
              background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.35)',
              borderRadius: 'var(--btn-radius)',
              color: 'var(--primary)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              padding: '8px 14px',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.22)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.12)')}
          >
            View Syllabus
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export function Courses() {
  const topRow = courses.slice(0, 3);
  const bottomRow = courses.slice(3);

  const [offerTime, setOfferTime] = useState({ h: 5, m: 13, s: 53 });
  useEffect(() => {
    const end = Date.now() + ((5 * 3600 + 13 * 60 + 53) * 1000);
    const id = setInterval(() => {
      const diff = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setOfferTime({ h: Math.floor(diff / 3600), m: Math.floor((diff % 3600) / 60), s: diff % 60 });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, var(--background) 0%, #071407 100%)',
        fontFamily: 'var(--font-body)',
      }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Promo banner */}
        <div
          className="mb-10 rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 40%, #2d1b4e 70%, #0f0a1a 100%)' }}
        >
          {/* Single centered layout */}
          <div className="px-8 py-10 flex flex-col items-center gap-5 text-center relative overflow-hidden">
            {/* Abstract background lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line x1="0" y1="30%" x2="100%" y2="10%" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
              <line x1="0" y1="60%" x2="100%" y2="40%" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
              <line x1="0" y1="90%" x2="100%" y2="70%" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
              <line x1="10%" y1="0" x2="0%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="35%" y1="0" x2="20%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="65%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="90%" y1="0" x2="78%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <ellipse cx="15%" cy="50%" rx="120" ry="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
              <ellipse cx="85%" cy="50%" rx="100" ry="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
            </svg>

            {/* H:M:S countdown */}
            <div className="flex items-end gap-2 justify-center">
              {[
                { val: offerTime.h, label: 'Hours' },
                { val: offerTime.m, label: 'Minutes' },
                { val: offerTime.s, label: 'Seconds' },
              ].map((u, i) => (
                <div key={u.label} className="flex items-end gap-2">
                  <div className="text-center">
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.18)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '10px',
                        fontFamily: 'var(--font-heading)',
                        color: '#fff',
                        minWidth: '52px',
                      }}
                      className="px-3 py-2 font-bold text-2xl leading-none"
                    >
                      {String(u.val).padStart(2, '0')}
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }} className="text-xs mt-1">
                      {u.label}
                    </p>
                  </div>
                  {i < 2 && (
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-heading)' }} className="font-bold text-xl mb-5">:</span>
                  )}
                </div>
              ))}
            </div>

            {/* Headline */}
            <h2
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)', lineHeight: 1.3 }}
              className="font-bold max-w-2xl"
            >
              Get Access to Top Tech Courses with Globally Recognized Certifications
            </h2>

            {/* Price row */}
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', textDecoration: 'line-through' }} className="text-[24px]">
                ₹2,499
              </span>
              <span style={{ color: '#fff', fontFamily: 'var(--font-heading)' }} className="font-bold text-[32px]">→ ₹999</span>
              <span style={{ color: '#4ade80', fontFamily: 'var(--font-heading)' }} className="font-bold text-[15px] text-[16px]">
                You Save ₹1,500!
              </span>
            </div>

            {/* Feature icons */}
            <div className="flex items-start gap-8 justify-center flex-wrap">
              {[
                { icon: '🛡️', label: '7-Day Money-Back' },
                { icon: '⚡', label: 'Instant Access' },
                { icon: '♾️', label: 'Lifetime Access' },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{f.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }} className="text-xs whitespace-nowrap">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Enroll button */}
            <CTAButton href="#enroll">Enroll Now →</CTAButton>

          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-8 mt-12">
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold mb-3"
          >
            Grab Our In-Demand Tech Courses Now!
          </h2>
          <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="max-w-xl mx-auto">
            Our best-selling courses are filling up fast! Grab your spot now and start mastering
            high-demand tech skills for just ₹999.
          </p>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {topRow.map((course) => (
            <CourseCard key={course.number} course={course} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3 mx-auto">
          {bottomRow.map((course) => (
            <CourseCard key={course.number} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
