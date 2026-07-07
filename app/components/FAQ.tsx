/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState } from "react";

const faqs = [
  {
    q: "What is included in the Black Friday Sale?",
    a: "The sale gives you access to premium courses at a steep discount from the regular price of ₹2,499. You can choose from Cybersecurity, Web Development, Game Development, AI Tools Mastery, Data Recovery, and more — all for just ₹999.",
  },
  {
    q: "How long is the offer valid?",
    a: "This is a limited-time offer only. Make sure you enroll before the countdown timer runs out to grab this exclusive discounted price. Once the timer hits zero, the offer expires.",
  },
  {
    q: "Is ₹999 the price per course or for everything?",
    a: "₹999 is the complete bundle price — not per course. You pay once and get lifetime access to all the courses listed in the bundle you choose.",
  },
  {
    q: "Will I have access to the courses forever?",
    a: "Yes! All courses come with lifetime access, so you can learn at your own pace and revisit the content anytime — even after you've completed the program.",
  },
  {
    q: "Can I get a refund if I'm not satisfied?",
    a: "Absolutely! We offer a 7-day, no-questions-asked refund policy. If you're not satisfied with the course for any reason, simply request a full refund within 7 days of purchase.",
  },
  {
    q: "Are these courses suitable for beginners?",
    a: "Yes! Our courses are designed for learners of all levels — from absolute beginners to working professionals. Each course includes step-by-step guidance and hands-on practice to ensure everyone can follow along.",
  },
  {
    q: "Will I receive a certificate after completing the course?",
    a: "Yes! After completing the course, you will receive a resume-ready, shareable certificate that proves your skills and is recognized by recruiters and hiring companies.",
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely. All our courses offer flexible, self-paced learning — you can progress as fast or as slow as you like, pause anytime, and balance the course with your other commitments.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{ backgroundColor: '#080808', fontFamily: 'var(--font-body)' }}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }} className="text-sm font-semibold uppercase tracking-widest mb-2">
            FAQ
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            className="font-bold"
          >
            Got Questions? Check Out Our FAQs!
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: open === i ? '#141414' : '#0f0f0f',
                border: '1px solid',
                borderColor: open === i ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)',
                borderRadius: 'calc(var(--radius) * 1.2)',
                overflow: 'hidden',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  fontFamily: 'var(--font-body)',
                  color: open === i ? '#fff' : 'rgba(255,255,255,0.75)',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="w-full flex items-center justify-between px-5 py-4 font-medium text-sm"
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  style={{
                    color: open === i ? '#fff' : 'rgba(255,255,255,0.4)',
                    flexShrink: 0,
                    transition: 'transform 0.2s, color 0.2s',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    width: '22px',
                    height: '22px',
                    border: '1px solid',
                    borderColor: open === i ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
                  className="px-5 py-4 text-sm leading-relaxed"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
