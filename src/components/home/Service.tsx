import Image from "next/image";
import type { CSSProperties } from "react";
import { services } from "@/data/home";

const cardSize = { "--width": "285", "--height": "336" } as CSSProperties;

export default function Service() {
  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
          standard dummy text ever.
        </p>

        <ul className="grid-list">
          {services.map((service) => (
            <li key={service.title}>
              <div className="service-card">
                <a href="#menu" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={cardSize}>
                    <Image
                      src={service.image}
                      width={285}
                      height={336}
                      sizes="(min-width: 768px) 285px, 100vw"
                      alt={service.title}
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#menu">{service.title}</a>
                  </h3>

                  <a href="#menu" className="btn-text hover-underline label-2">View Menu</a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Image src="/images/shape-1.png" width={246} height={412} alt="" className="shape shape-1 move-anim" />
        <Image src="/images/shape-2.png" width={343} height={345} alt="" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
}
