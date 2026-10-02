"use client";

import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 50);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#top" className={`back-top-btn ${visible ? "active" : ""}`} aria-label="back to top">
      <IoChevronUp className="ion-icon" aria-hidden="true" />
    </a>
  );
}
