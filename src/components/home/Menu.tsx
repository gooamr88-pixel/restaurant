import Image from "next/image";
import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { menuItems } from "@/data/home";

const thumbSize = { "--width": "100", "--height": "100" } as CSSProperties;

export default function Menu() {
  return (
    <section className="section menu" aria-labelledby="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>

        <h2 className="headline-1 section-title text-center" id="menu-label">Delicious Menu</h2>

        <ul className="grid-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={thumbSize}>
                  <Image src={item.image} width={100} height={100} alt={item.name} className="img-cover" />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">{item.name}</a>
                    </h3>

                    {item.badge && <span className="badge label-1">{item.badge}</span>}

                    <span className="span title-2">{item.price}</span>
                  </div>

                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
        </p>

        <Button href="#">View All Menu</Button>

        <Image src="/images/shape-5.png" width={921} height={1036} alt="" className="shape shape-2 move-anim" />
        <Image src="/images/shape-6.png" width={343} height={345} alt="" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
}
