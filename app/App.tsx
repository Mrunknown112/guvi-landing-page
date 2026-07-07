import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { CursorBall } from "./components/CursorBall";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { MidCTA } from "./components/MidCTA";
import { Features } from "./components/Features";
import { Certify } from "./components/Certify";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { StickyFooter } from "./components/StickyFooter";

function Animate({ children, delay = 0, variant = "fade-up" as const }: {
  children: React.ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
}) {
  const ref = useScrollAnimation<HTMLDivElement>({ variant, delay });
  return <div ref={ref}>{children}</div>;
}

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '80px', cursor: 'none' }}>
      <CursorBall />
      {/* MARKER-MAKE-KIT-INVOKED */}
      {/* MARKER-MAKE-KIT-DISCOVERY-READ */}
      {/* MARKER-MAKE-KIT-TOKENS-READ */}
      {/* MARKER-MAKE-KIT-FINAL-CHECK-READ */}
      {/* Kit: @make-kits/guvi-design-system — no components extracted.
          Fonts from kit CSS: Jones* (headings) via --font-heading, Wanted Sans (body) via --font-body.
          All colors via CSS custom properties: var(--primary), var(--background), var(--card), etc. */}
      <Navbar />
      <Hero />
      <Animate variant="fade-up">
        <Courses />
      </Animate>
      <Animate variant="fade-in" delay={50}>
        <MidCTA />
      </Animate>
      <Animate variant="fade-up" delay={50}>
        <Features />
      </Animate>
      <Animate variant="fade-up" delay={50}>
        <Certify />
      </Animate>
      <Animate variant="fade-up" delay={50}>
        <Testimonials />
      </Animate>
      <Animate variant="fade-up" delay={50}>
        <FAQ />
      </Animate>
      <Animate variant="fade-in">
        <FinalCTA />
      </Animate>
      <StickyFooter />
    </div>
  );
}
