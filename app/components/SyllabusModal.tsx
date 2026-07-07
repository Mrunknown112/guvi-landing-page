/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import { useState, useEffect } from "react";
import { CTAButton } from "./CTAButton";

export interface Module {
  title: string;
  topics: string[];
}

interface SyllabusModalProps {
  courseTitle: string;
  modules: Module[];
  onClose: () => void;
}

export function SyllabusModal({ courseTitle, modules, onClose }: SyllabusModalProps) {
  const [openModule, setOpenModule] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-14px',
            right: '-14px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: '#111',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Course title */}
          <h2
            style={{ fontFamily: 'var(--font-heading)', color: '#111', fontSize: '1.6rem', lineHeight: 1.2 }}
            className="font-bold mb-6"
          >
            {courseTitle}
          </h2>

          {/* Accordion modules */}
          <div className="flex flex-col gap-3">
            {modules.map((mod, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                  borderColor: openModule === i ? '#22c55e' : '#e5e7eb',
                }}
              >
                {/* Module header */}
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    color: '#111',
                    fontSize: '1rem',
                    textAlign: 'left',
                    fontWeight: 600,
                  }}
                >
                  <span>{mod.title}</span>
                  <span
                    style={{
                      fontSize: '20px',
                      color: openModule === i ? '#22c55e' : '#6b7280',
                      transition: 'transform 0.2s, color 0.2s',
                      transform: openModule === i ? 'rotate(45deg)' : 'none',
                      display: 'inline-block',
                      lineHeight: 1,
                      fontWeight: 300,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Module content */}
                {openModule === i && (
                  <div
                    style={{ borderTop: '1px solid #f3f4f6', backgroundColor: '#fafafa', padding: '16px 20px' }}
                  >
                    <ul className="flex flex-col gap-2">
                      {mod.topics.map((topic, j) => (
                        <li
                          key={j}
                          style={{ fontFamily: 'var(--font-body)', color: '#374151', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', gap: '8px' }}
                        >
                          <span style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }}>✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enroll CTA */}
          <div className="mt-8 flex justify-center">
            <CTAButton href="#enroll" onClick={onClose}>Enroll Now — Just ₹999 →</CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
