import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { contact, hours, navLinks, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <Image src="/images/logo.svg" width={160} height={50} alt="grilli home" />
            </a>

            <address className="body-4">{contact.address}</address>

            <a href={contact.email.href} className="body-4 contact-link">{contact.email.label}</a>

            <a href={contact.bookingPhone.href} className="body-4 contact-link">
              Booking Request : {contact.bookingPhone.label}
            </a>

            <p className="body-4">{hours.footer}</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Get News &amp; Offers</p>

            <p className="label-1">
              Subscribe us &amp; Get <span className="span">25% Off.</span>
            </p>

            <form className="input-wrapper">
              <div className="icon-wrapper">
                <IoMailOutline className="ion-icon" aria-hidden="true" />

                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  aria-label="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>

              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>

          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="label-2 footer-link hover-underline">{link.label}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="label-2 footer-link hover-underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2022 Grilli. All Rights Reserved | Crafted by{" "}
            <a href="https://github.com/codewithsadee" target="_blank" rel="noopener noreferrer" className="link">
              codewithsadee
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
