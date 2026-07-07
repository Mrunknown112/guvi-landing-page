/* using raw HTML: kit catalog is empty — no components were extracted from this library */
import logo from "../../imports/xdd.png";
import { CTAButton } from "./CTAButton";

export function Navbar() {
  return (
    <nav
      style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#enroll">
          <img src={logo} alt="GUVI" className="h-9 w-auto object-contain" />
        </a>
        <CTAButton href="#enroll">Enroll Now →</CTAButton>
      </div>
    </nav>
  );
}
