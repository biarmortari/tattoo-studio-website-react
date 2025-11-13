import { portfolioData } from "../../data/portfolioData";
import SwiperComponent from "../Swiper/Swiper";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <SwiperComponent images={portfolioData} />
    </section>
  );
}
