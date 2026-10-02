import Image from "next/image";
import { features } from "@/data/home";

export default function Features() {
  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>

        <h2 className="headline-1 section-title">Our Strength</h2>

        <ul className="grid-list">
          {features.map((feature) => (
            <li className="feature-item" key={feature.title}>
              <div className="feature-card">
                <div className="card-icon">
                  <Image src={feature.icon} width={100} height={80} alt="" />
                </div>

                <h3 className="title-2 card-title">{feature.title}</h3>

                <p className="label-1 card-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Image src="/images/shape-7.png" width={208} height={178} alt="" className="shape shape-1" />

        <Image src="/images/shape-8.png" width={120} height={115} alt="" className="shape shape-2" />
      </div>
    </section>
  );
}
