"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a[href*="#"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        const hash = href!.split("#")[1];
        const element = document.querySelector("#" + hash) as HTMLElement;
        if (element && lenisRef.current) {
          lenisRef.current.scrollTo(element, { duration: 2 });
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
