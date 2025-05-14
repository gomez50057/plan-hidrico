"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "@/styles/InfoSwiper.module.css";
import { dataParcelas } from "@/utils/parcelas";

export default function InfoSwiper() {
  return (
    <section className={styles.infoSwiperContainer}>

      <div className={styles.infoSwiperText}>
        <h2><span className="spanDoarado">Parcelas</span> de{" "}<span>Riego</span>        </h2>
        <p>Aquí puedes ver información sobre las parcelas de riego.</p>
      </div>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.infoSwiper}
      >
        {dataParcelas.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideItem}>
              {/* TEXTO A LA IZQUIERDA */}
              <div className={styles.card}>
                <p><strong>Módulo:</strong> {item.modulo}</p>
                <p><strong>Municipio:</strong> {item.municipio}</p>
                <p><strong>Localidad:</strong> {item.localidad}</p>
                <p><strong>Productor:</strong> {item.productor}</p>
                <div className={styles.utm}>
                  <span><strong>UTM Este:</strong> {item.utmEste}</span>
                  <span><strong>UTM Norte:</strong> {item.utmNorte}</span>
                </div>
                <p><strong>Cultivo:</strong> {item.cultivo}</p>
                <p><strong>Sistema:</strong> {item.sistema}</p>
                <p><strong>Canaleta:</strong> {item.canaleta}</p>
                <p><strong>Dimensiones:</strong> {item.dimensiones}</p>
              </div>

              {/* IMAGEN A LA DERECHA */}
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.localidad}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
