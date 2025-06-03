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
              <div className={styles.cardD}>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.localidad} fill className={styles.image} />
                </div>
                <div>
                  <div className={styles.cardDText}>
                    <Image src="/img/icono40x40.png" alt="Icono de información" width={40} height={40} />
                    <p>Módulo de riego:</p>
                    <p>{item.modulo}</p>
                  </div>


                </div>


              </div>



              <div className={styles.card}>
                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Municipio:</p>
                </div>
                <p>{item.municipio}</p>

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Localidad:</p>
                </div>
                <p>{item.localidad}</p>

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Localidad:</p>
                </div>
                <p>{item.municipio}</p>
                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Ubicación:</p>
                </div>
                <p>{item.ubicacion}</p>

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Comó llegar por tierra:</p>
                </div>
                <p>{item.referencias}</p>

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Cultivo:</p>
                </div>
                <p>{item.cultivo}</p>

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Sistema:</p>
                </div>
                <p>{item.sistema}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
