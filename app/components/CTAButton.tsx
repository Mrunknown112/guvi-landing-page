/* Matches Figma Button design: gradient bg, inset highlight, green border, near-black text */

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function CTAButton({ children, href, onClick, type = "button", className = "" }: CTAButtonProps) {
  const inner = (
    <div className={`relative inline-block ${className}`} style={{ borderRadius: 'var(--btn-radius)' }}>
      {/* Gradient background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'var(--btn-radius)',
          background: 'linear-gradient(to bottom, var(--btn-gradient-from), var(--btn-gradient-to))',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 24px',
          borderRadius: 'var(--btn-radius)',
          overflow: 'hidden',
          /* inset highlight at top */
          boxShadow: 'inset 0px 3px 3px 0px var(--btn-highlight)',
          color: 'var(--btn-text)',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1.5,
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {children}
      </div>

      {/* Outer border */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-1.5px',
          borderRadius: 'calc(var(--btn-radius) + 1.5px)',
          border: '1.5px solid var(--btn-border-color)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );

  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      onClick?.();
    };
    return (
      <a
        href={href}
        onClick={handleClick}
        style={{ display: 'inline-block', textDecoration: 'none', opacity: 1, transition: 'opacity 0.15s' }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-block', opacity: 1, transition: 'opacity 0.15s', width: '100%' }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {inner}
    </button>
  );
}
