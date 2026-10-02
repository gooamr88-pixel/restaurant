"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/** About-section image stack that drifts opposite to the mouse pointer. */
export default function ParallaxBanner() {
  const mainRef = useRef<HTMLImageElement>(null);
  const absRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items: [HTMLElement | null, number][] = [
      [mainRef.current, 1],
      [absRef.current, 1.75],
    ];
    let frame = 0;

    const onMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // -5..5, reversed so the image moves against the pointer
        const x = -((event.clientX / window.innerWidth) * 10 - 5);
        const y = -((event.clientY / window.innerHeight) * 10 - 5);

        for (const [element, speed] of items) {
          if (element) element.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <figure className="about-banner">
      <Image
        ref={mainRef}
        src="/images/about-banner.jpg"
        width={570}
        height={570}
        sizes="(min-width: 992px) 570px, 100vw"
        alt="about banner"
        className="w-100"
      />

      <div className="abs-img abs-img-1 has-before" ref={absRef}>
        <Image src="/images/about-abs-image.jpg" width={285} height={285} alt="" className="w-100" />
      </div>

      <div className="abs-img abs-img-2 has-before">
        <Image src="/images/badge-2.png" width={133} height={134} alt="" />
      </div>
    </figure>
  );
}
