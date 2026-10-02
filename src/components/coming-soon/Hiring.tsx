"use client";

import { useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { careers } from "@/data/site";

const mailto =
  `mailto:${careers.email}` +
  `?subject=${encodeURIComponent(careers.mailSubject)}` +
  `&body=${encodeURIComponent(careers.mailBody)}`;

/** Small glowing pill near the top that jumps down to the hiring card. */
export function HiringBadge() {
  return (
    <a href="#careers" className="hiring-badge label-2">
      <span className="hiring-dot" aria-hidden="true"></span>
      We&apos;re hiring &middot; Join our team
    </a>
  );
}

export default function Hiring() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(careers.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-secure context); the email stays visible to copy by hand.
    }
  };

  return (
    <section className="hiring" id="careers" aria-labelledby="careers-title">
      <p className="label-2 section-subtitle">Now Hiring</p>

      <h2 className="headline-2 hiring-title" id="careers-title">
        Join the team behind the flavor
      </h2>

      <p className="body-2 hiring-text">
        We&apos;re building our opening team and looking for people who love food and great
        hospitality. Experience is a plus &mdash; passion is a must.
      </p>

      <ul className="hiring-roles" aria-label="open positions">
        {careers.roles.map((role) => (
          <li className="label-1 hiring-role" key={role}>{role}</li>
        ))}
      </ul>

      <Button href={mailto} variant="secondary" className="hiring-btn">Apply by Email</Button>

      <p className="body-4 hiring-contact">
        Send your CV or ask us anything at
        <span className="hiring-email">
          <a href={mailto} className="hiring-email-link">{careers.email}</a>

          <button
            type="button"
            className="hiring-copy"
            onClick={copyEmail}
            aria-label={copied ? "Email copied" : "Copy email"}
            title={copied ? "Copied!" : "Copy email"}
          >
            {copied ? <IoCheckmark aria-hidden="true" /> : <IoCopyOutline aria-hidden="true" />}
          </button>
        </span>
      </p>
    </section>
  );
}
