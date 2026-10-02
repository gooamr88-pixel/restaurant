import Image from "next/image";
import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { events } from "@/data/home";

const bannerSize = { "--width": "350", "--height": "450" } as CSSProperties;

const formatDate = (isoDate: string) => isoDate.split("-").reverse().join("/");

export default function Event() {
  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>

        <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

        <ul className="grid-list">
          {events.map((event) => (
            <li key={event.image}>
              <div className="event-card has-before hover:shine">
                <div className="card-banner img-holder" style={bannerSize}>
                  <Image
                    src={event.image}
                    width={350}
                    height={450}
                    sizes="(min-width: 768px) 350px, 100vw"
                    alt={event.title}
                    className="img-cover"
                  />

                  <time className="publish-date label-2" dateTime={event.date}>{formatDate(event.date)}</time>
                </div>

                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">{event.category}</p>

                  <h3 className="card-title title-2 text-center">{event.title}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Button href="#">View Our Blog</Button>
      </div>
    </section>
  );
}
