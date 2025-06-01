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
        <h2><span className="spanDoarado">Estrategia</span> de <span>Parcelas Demostrativas</span></h2>
        <p>Comprueba en campo cómo una correcta nivelación del suelo y un riego bien aplicado, mediante un sistema tecnificado mejoran tus cultivos. Veras resultados reales: Mayor eficiencia en el riego; plantas más sanas y vigorosas; mejores rendimientos en tus cultivos y más ganancia económica para tu familia. ¡Visita las parcelas y observa tú mismo los resultados!</p>
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
                <p><strong>Módulo de riego:</strong> {item.modulo}</p>
                <p><strong>Municipio:</strong> {item.municipio}</p>
                <p><strong>Localidad:</strong> {item.localidad}</p>
                <p><strong>Ubicación:</strong> {item.localidad}</p>
                <p><strong>Comó llegar por tierra:</strong> {item.localidad}</p>
                <p><strong>Cultivo:</strong> {item.cultivo}</p>
                <p><strong>Sistema:</strong> {item.sistema}</p>
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
