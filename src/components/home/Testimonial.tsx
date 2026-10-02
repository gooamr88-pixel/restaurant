import Image from "next/image";
import { testimonial } from "@/data/home";

export default function Testimonial() {
  return (
    <section
      className="section testi text-center has-bg-image"
      style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }}
      aria-label="testimonials"
    >
      <div className="container">
        <div className="quote">”</div>

        <p className="headline-2 testi-text">{testimonial.text}</p>

        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>

        <div className="profile">
          <Image src={testimonial.avatar} width={100} height={100} alt={testimonial.name} className="img" />

          <p className="label-2 profile-name">{testimonial.name}</p>
        </div>
      </div>
    </section>
  );
}
