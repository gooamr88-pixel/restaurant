import Image from "next/image";
import Button from "@/components/ui/Button";
import { specialDish } from "@/data/home";

export default function SpecialDish() {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <Image
          src="/images/special-dish-banner.jpg"
          width={940}
          height={900}
          sizes="(min-width: 992px) 50vw, 100vw"
          alt="special dish"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <Image src="/images/badge-1.png" width={28} height={41} alt="badge" className="abs-img" />

          <p className="section-subtitle label-2" id="dish-label">Special Dish</p>

          <h2 className="headline-1 section-title">{specialDish.name}</h2>

          <p className="section-text">{specialDish.description}</p>

          <div className="wrapper">
            <del className="del body-3">{specialDish.oldPrice}</del>

            <span className="span body-1">{specialDish.price}</span>
          </div>

          <Button href="#menu">View All Menu</Button>
        </div>
      </div>

      <Image src="/images/shape-4.png" width={179} height={359} alt="" className="shape shape-1" />

      <Image src="/images/shape-9.png" width={351} height={462} alt="" className="shape shape-2" />
    </section>
  );
}
