"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { contact, hours, navLinks } from "@/data/site";

const SCROLL_THRESHOLD = 50;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;

      if (scrollY >= SCROLL_THRESHOLD) {
        setScrolled(true);
        setHidden(lastScrollPos.current < scrollY);
        lastScrollPos.current = scrollY;
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-active", navOpen);
    if (!navOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  const toggleNav = () => setNavOpen((open) => !open);
  const closeNav = () => setNavOpen(false);

  return (
    <header className={`header ${scrolled ? "active" : ""} ${hidden ? "hide" : ""}`}>
      <div className="container">
        <a href="#" className="logo">
          <Image src="/images/logo.svg" width={160} height={50} alt="Grilli - Home" />
        </a>

        <nav className={`navbar ${navOpen ? "active" : ""}`} id="primary-navigation">
          <button className="close-btn" aria-label="close menu" onClick={closeNav}>
            <IoCloseOutline className="ion-icon" aria-hidden="true" />
          </button>

          <a href="#" className="logo">
            <Image src="/images/logo.svg" width={160} height={50} alt="Grilli - Home" />
          </a>

          <ul className="navbar-list">
            {navLinks.map((link, index) => (
              <li className="navbar-item" key={link.label}>
                <a
                  href={link.href}
                  className={`navbar-link hover-underline ${index === 0 ? "active" : ""}`}
                  onClick={closeNav}
                >
                  <div className="separator"></div>

                  <span className="span">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>

            <address className="body-4">
              {contact.addressLines[0]} <br />
              {contact.addressLines[1]}
            </address>

            <p className="body-4 navbar-text">{hours.navbar}</p>

            <a href={contact.email.href} className="body-4 sidebar-link">{contact.email.label}</a>

            <div className="separator"></div>

            <p className="contact-label">Booking Request</p>

            <a href={contact.bookingPhone.href} className="body-1 contact-number hover-underline">
              {contact.bookingPhone.label}
            </a>
          </div>
        </nav>

        <Button href="#reservation" variant="secondary">Find A Table</Button>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          aria-controls="primary-navigation"
          aria-expanded={navOpen}
          onClick={toggleNav}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className={`overlay ${navOpen ? "active" : ""}`} onClick={closeNav}></div>
      </div>
    </header>
  );
}
