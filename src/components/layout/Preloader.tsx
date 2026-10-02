"use client";

import { useEffect, useState } from "react";

// Never keep the page locked behind the preloader longer than this.
const MAX_WAIT_MS = 4000;

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const finish = () => setLoaded(true);

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish);
    const fallback = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (loaded) document.body.classList.add("loaded");
  }, [loaded]);

  return (
    <div className={`preload ${loaded ? "loaded" : ""}`} aria-hidden={loaded}>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  );
}
