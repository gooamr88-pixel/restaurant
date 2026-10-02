"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/data/home";

const AUTO_SLIDE_MS = 7000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const slideNext = () => setCurrent((pos) => (pos + 1) % heroSlides.length);
  const slidePrev = () => setCurrent((pos) => (pos - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(slideNext, AUTO_SLIDE_MS);
    return () => window.clearInterval(interval);
  }, [paused]);

  const pauseProps = {
    onMouseOver: () => setPaused(true),
    onMouseOut: () => setPaused(false),
  };

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider">
        {heroSlides.map((slide, index) => (
          <li className={`slider-item ${index === current ? "active" : ""}`} key={slide.image}>
            <div className="slider-bg">
              <Image
                src={slide.image}
                width={1880}
                height={950}
                sizes="100vw"
                alt=""
                className="img-cover"
                preload={index === 0}
                loading={index === 0 ? undefined : "eager"}
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>

            <h1 className="display-1 hero-title slider-reveal">
              {slide.title[0]} <br />
              {slide.title[1]}
            </h1>

            <p className="body-2 hero-text slider-reveal">{slide.text}</p>

            <Button href="#menu" className="slider-reveal">View Our Menu</Button>
          </li>
        ))}
      </ul>

      <button className="slider-btn prev" aria-label="slide to previous" onClick={slidePrev} {...pauseProps}>
        <IoChevronBack className="ion-icon" aria-hidden="true" />
      </button>

      <button className="slider-btn next" aria-label="slide to next" onClick={slideNext} {...pauseProps}>
        <IoChevronForward className="ion-icon" aria-hidden="true" />
      </button>

      <a href="#reservation" className="hero-btn has-after">
        <Image src="/images/hero-icon.png" width={48} height={48} alt="booking icon" />

        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
}
