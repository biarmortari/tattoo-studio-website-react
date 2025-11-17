import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";

export default function SwiperComponent({ images }) {
  return (
    <Swiper
      className="my-swiper"
      modules={[Autoplay]}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
