"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/CarouselSlider.module.css";

const slides = [
  {
    title: "Documentos de interés",
    description:
      "Explora información relevante sobre el agua: reportes técnicos, investigaciones y normativas vigentes.",
    image: "/img/parcelas demostrativas/1.jpg",
    href: "/documentos-interes"
  },
  {
    title: "Parcelas demostrativas",
    description:
      "Conoce nuestras parcelas demostrativas y su impacto en la gestión hídrica sostenible.",
    image: "/img/parcelas demostrativas/1.jpg",
    href: "/parcelas-demostrativas"
  },
  {
    title: "Programas y proyectos",
    description:
      "Descubre iniciativas que promueven el manejo responsable del agua en diferentes regiones.",
    image: "/img/parcelas demostrativas/1.jpg",
    href: "/programas-proyectos"
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
                <Link href={slide.href} passHref>
                  <button className={styles.slideButton}>Ver más</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
