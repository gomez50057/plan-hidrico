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
    title: "Planes Directores de los Distritos de Riego",
    description:
      "Accede al conjunto de Planes Directores de los Distritos de Riego del Valle del Mezquital.",
    image: "/img/advertisements/planes-directores-dr.jpg",
    href: "/planes-directores-dr"
  },
  {
    title: "Proveedores Cooperantes en Parcelas Demostrativas",
    description:
      "Descubre a los Proveedores Cooperantes en Parcelas Demostrativas: accede al listado completo de todos los participantes.",
    image: "/img/advertisements/proveedores-cooperantes.jpg",
    href: "/proveedores-cooperantes"
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
                <div className={styles.buttonWrapper}>
                  <Link href={slide.href} passHref>
                    <button className={styles.slideButton}>Ver más</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
