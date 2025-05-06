"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import styles from "../../../styles/knowledge/HeroCitizen.module.css";
const imgBasePath = "/img/";
const imgCitizen = "/img/knowledge/Citizen/";


const images = [
  '/img/knowledge/Citizen/carrusel/img1.jpg',
  '/img/knowledge/Citizen/carrusel/img2.jpg',
  '/img/knowledge/Citizen/carrusel/img3.jpg',
  '/img/knowledge/Citizen/carrusel/img4.jpg',
  '/img/knowledge/Citizen/carrusel/img5.jpg',
  '/img/knowledge/Citizen/carrusel/img6.jpg',
  '/img/knowledge/Citizen/carrusel/img7.jpg',
];


export default function Hero() {
  return (
    <section>
      <div className={styles.contentHeader}>
        <div className={`${styles.headeTitule} ${styles.fadeInTarget}`}>
          <img src={`${imgCitizen}hero.png`} alt="img_representativa" />
        </div>
        <div className={styles.carouselContainer}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className={styles.swiperContainer}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={src} alt={`card-${index}`} className={styles.imageCard} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`}>
          <img src={`${imgBasePath}headertxt.png`} alt="img_representativa" />
        </div>
      </div>
    </section>
  );
}
