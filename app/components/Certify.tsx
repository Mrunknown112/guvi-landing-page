/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { CTAButton } from "./CTAButton";

const certPoints = [
  { icon: "🏅", title: "Industry-Recognized Credentials", desc: "Get certificates that recruiters and tech companies value." },
  { icon: "🔗", title: "Shareable on LinkedIn", desc: "Add your achievements to LinkedIn and impress potential employers." },
  { icon: "✅", title: "Proof of Real Skills", desc: "Each certificate reflects the practical knowledge and tools you've mastered." },
  { icon: "📄", title: "Resume-Ready Format", desc: "Download and attach your certificate to job applications effortlessly." },
];

export function Certify() {
  return (
    <section
      style={{ backgroundColor: 'var(--background)', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold mb-4"
          >
            Earn Certificates That Boost Your Career
          </h2>
          <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="max-w-xl mx-auto leading-relaxed">
            Showcase your skills with industry-recognized certificates designed to elevate your profile.
            Every certificate you earn adds credibility, strengthens your resume, and helps you stand out
            in a competitive job market.
          </p>
        </div>

        {/* 2×2 feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {certPoints.map((pt) => (
            <div
              key={pt.title}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'calc(var(--radius) * 1.5)',
              }}
              className="flex items-start gap-4 p-5"
            >
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}
              >
                {pt.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }} className="font-bold mb-1">
                  {pt.title}
                </h4>
                <p style={{ color: 'var(--subtle)', fontFamily: 'var(--font-body)' }} className="text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAButton href="#enroll">START EARNING CERTIFICATES →</CTAButton>
        </div>
      </div>
    </section>
  );
}
