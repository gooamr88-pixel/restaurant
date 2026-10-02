import Image from "next/image";
import Button from "@/components/ui/Button";
import ParallaxBanner from "@/components/home/ParallaxBanner";
import { contact } from "@/data/site";

export default function About() {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>

          <h2 className="headline-1 section-title">Every Fla vor Tells a Story</h2>

          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
            industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
            it to make a type specimen book It has survived not only five centuries, but also the leap into.
          </p>

          <div className="contact-label">Book Through Call</div>

          <a href={contact.aboutPhone.href} className="body-1 contact-number hover-underline">
            {contact.aboutPhone.label}
          </a>

          <Button href="#">Read More</Button>
        </div>

        <ParallaxBanner />

        <Image src="/images/shape-3.png" width={197} height={194} alt="" className="shape" />
      </div>
    </section>
  );
}
