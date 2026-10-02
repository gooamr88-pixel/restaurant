"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import Hiring, { HiringBadge } from "@/components/coming-soon/Hiring";
import { contact, launchDate, socialLinks } from "@/data/site";

const LAUNCH_TIME = new Date(launchDate).getTime();

// Tick once per second; the server renders "--" so hydration never mismatches.
const subscribe = (onTick: () => void) => {
  const interval = window.setInterval(onTick, 1000);
  return () => window.clearInterval(interval);
};
const getNow = () => Math.floor(Date.now() / 1000) * 1000;
const getServerNow = () => null;

function timeLeft(now: number) {
  const diff = Math.max(LAUNCH_TIME - now, 0);

  return [
    { label: "Days", value: Math.floor(diff / 86_400_000) },
    { label: "Hours", value: Math.floor(diff / 3_600_000) % 24 },
    { label: "Minutes", value: Math.floor(diff / 60_000) % 60 },
    { label: "Seconds", value: Math.floor(diff / 1000) % 60 },
  ];
}

export default function ComingSoon() {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);
  const [subscribed, setSubscribed] = useState(false);

  const units = timeLeft(now ?? LAUNCH_TIME);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the email to a newsletter service / API route.
    setSubscribed(true);
  };

  return (
    <main
      className="coming-soon has-bg-image text-center"
      style={{ backgroundImage: "url('/images/hero-slider-1.jpg')" }}
    >
      <div className="coming-soon-inner container">
        <div className="logo">
          <Image src="/images/logo.svg" width={160} height={50} alt="grilli home" preload />
        </div>

        <HiringBadge />

        <p className="label-2 section-subtitle">Coming Soon</p>

        <h1 className="display-1 coming-soon-title">
          Something delicious <br />
          is cooking
        </h1>

        <p className="body-2 coming-soon-text">
          We are putting the final touches on our kitchen. Join the list and be the first to book a
          table on opening night.
        </p>

        <ul className="countdown" aria-label="time until opening">
          {units.map((unit) => (
            <li className="countdown-item" key={unit.label}>
              <span className="title-1 countdown-value">
                {now === null ? "--" : String(unit.value).padStart(2, "0")}
              </span>
              <span className="label-2 countdown-label">{unit.label}</span>
            </li>
          ))}
        </ul>

        {subscribed ? (
          <p className="body-2 coming-soon-thanks" role="status">
            Thank you! We&apos;ll let you know the moment we open.
          </p>
        ) : (
          <form className="coming-soon-form" onSubmit={handleSubmit}>
            <div className="icon-wrapper">
              <IoMailOutline className="ion-icon" aria-hidden="true" />

              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                aria-label="Your email"
                required
                className="input-field"
              />
            </div>

            <Button type="submit">Notify Me</Button>
          </form>
        )}

        <Hiring />

        <ul className="coming-soon-social">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="label-2 footer-link hover-underline">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href={contact.email.href} className="body-4 coming-soon-contact">{contact.email.label}</a>
      </div>
    </main>
  );
}
