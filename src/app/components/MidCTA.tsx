/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { CTAButton } from "./CTAButton";

const leftIcons = [
  { icon: "</>", label: "Code" },
  { icon: "◎", label: "Design" },
  { icon: "⬡", label: "Skills" },
];

const rightIcons = [
  { icon: "⚙", label: "Tools" },
  { icon: "◫", label: "Data" },
  { icon: "▣", label: "Mobile" },
];

const floatKeyframes = `
@keyframes float-0 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-10px) rotate(3deg)} }
@keyframes float-1 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-14px) rotate(-4deg)} }
@keyframes float-2 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-8px) rotate(2deg)} }
@keyframes float-3 { 0%,100%{transform:translateY(0px) rotate(0deg)} 33%{transform:translateY(-12px) rotate(-3deg)} 66%{transform:translateY(-4px) rotate(2deg)} }
@keyframes float-4 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-16px) rotate(4deg)} }
@keyframes float-5 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-9px) rotate(-2deg)} }
`;

function IconBox({ icon, index }: { icon: string; index: number }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'calc(var(--radius) * 1.2)',
        width: '52px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '18px',
        animation: `float-${index} ${2.5 + index * 0.4}s ease-in-out infinite`,
        animationDelay: `${index * 0.3}s`,
      }}
    >
      {icon}
    </div>
  );
}

export function MidCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(120deg, #0a2a10 0%, #0f3a18 40%, #0a2a10 100%)',
        fontFamily: 'var(--font-body)',
      }}
      className="py-14 px-6 relative overflow-hidden"
    >
      <style>{floatKeyframes}</style>
      {/* Subtle glow */}
      <div style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex items-center gap-4 lg:gap-6 relative z-10 px-2">

        {/* Left icons */}
        <div className="hidden lg:flex flex-col gap-3 shrink-0">
          {leftIcons.map((ic, i) => <IconBox key={ic.label} icon={ic.icon} index={i} />)}
        </div>

        {/* Center content */}
        <div className="flex-1 text-center">
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', lineHeight: 1.2 }}
            className="font-bold mb-3"
          >
            Master Tech Skills This Black Friday!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }} className="mb-6 text-sm leading-relaxed max-w-md mx-auto">
            Learn Cybersecurity, Web Development, AI Tools, and more with our massive Black Friday discount.
          </p>
          <div className="flex flex-col items-center gap-2">
            <CTAButton href="#enroll">Get 60% OFF →</CTAButton>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }} className="text-xs">
              Limited time offer!
            </p>
          </div>
        </div>

        {/* Right icons */}
        <div className="hidden lg:flex flex-col gap-3 shrink-0">
          {rightIcons.map((ic, i) => <IconBox key={ic.label} icon={ic.icon} index={i + 3} />)}
        </div>

      </div>
    </section>
  );
}
