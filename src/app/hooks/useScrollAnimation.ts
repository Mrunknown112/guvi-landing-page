import { useEffect, useRef } from "react";

export type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface Options {
  variant?: AnimationVariant;
  delay?: number; // ms
  threshold?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: Options = {}) {
  const { variant = "fade-up", delay = 0, threshold = 0.12 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;

    const setInitial = () => {
      if (variant === "fade-up") el.style.transform = "translateY(36px)";
      else if (variant === "fade-left") el.style.transform = "translateX(-36px)";
      else if (variant === "fade-right") el.style.transform = "translateX(36px)";
      else el.style.transform = "none";
    };
    setInitial();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0, 0)";
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  return ref;
}
