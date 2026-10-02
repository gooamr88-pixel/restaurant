import Preloader from "@/components/layout/Preloader";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import About from "@/components/home/About";
import SpecialDish from "@/components/home/SpecialDish";
import Menu from "@/components/home/Menu";
import Testimonial from "@/components/home/Testimonial";
import Reservation from "@/components/home/Reservation";
import Features from "@/components/home/Features";
import Event from "@/components/home/Event";

export default function Home() {
  return (
    <>
      <Preloader />
      <Topbar />
      <Header />

      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <SpecialDish />
          <Menu />
          <Testimonial />
          <Reservation />
          <Features />
          <Event />
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
