"use client";


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/CarouselSlider.module.css";

const slides = [
  {
    title: "Doctor Strange",
    description:
      "America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti.",
    image: "/img/parcelas demostrativas/1.jpg",
  },
  {
    title: "Thor: Ragnarok",
    description:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok.",
    image: "/img/parcelas demostrativas/1.jpg",
  },
  {
    title: "Eternals",
    description:
      "Ajak, Sersi, Ikaris, Kingo, Sprite, and Thena—are sent by the Celestials to protect humanity from the Deviants.",
    image: "/img/parcelas demostrativas/1.jpg",
  },
];

const CarouselSlider = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div className={styles.slideOverlay}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
