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
      {/* Texto introductorio */}
      <div className={styles.infoSwiperText}>
        <h2>
          <span className="spanDoarado">Estrategia</span> de{" "}
          <span>Parcelas Demostrativas</span>
        </h2>
        <p>
          Comprueba en campo cómo una correcta nivelación del suelo y un riego
          bien aplicado, mediante un sistema tecnificado, mejoran tus cultivos.
          Verás resultados reales: mayor eficiencia en el riego, plantas más
          sanas y vigorosas, mejores rendimientos y más ganancia económica para
          tu familia. ¡Visita las parcelas y observa tú mismo los resultados!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect="cards"
        grabCursor
        modules={[EffectCards]}
        className={styles.infoSwiper}
      >
        {dataParcelas.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideItem}>
              {/* Imagen y módulo */}
              <div className={styles.cardD}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.imgParcela}
                    alt={item.localidad}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.containerCardDText}>
                  <div className={styles.imgMunicipioWrapper}>
                    {item.imgMunicipio && (
                      <div className={styles.imgMunicipioWrapper}>
                        <Image
                          src={item.imgMunicipio}
                          alt={`Imagen de parcela: ${item.localidad}`}
                          fill
                          className={styles.imgMunicipio}
                        />
                      </div>
                    )}
                  </div>
                  <div className={styles.cardDText}>
                    <p>Módulo de riego:</p>
                    <p>{item.modulo}</p>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className={styles.card}>
                {renderInfoBlock("Municipio", item.municipio)}
                {renderInfoBlock("Localidad", item.localidad)}
                {renderInfoBlock("Cultivo", item.cultivo)}

                <div className={styles.titule}>
                  <div className={styles.circule}></div>
                  <p>Ubicación:</p>
                </div>
                <p>
                  <a
                    href={`https://www.google.com/maps?q=${item.latitud},${item.longitud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkMaps}
                  >
                    ¡Haz clic aquí para ver la parcela en el mapa y planificar tu visita! 
                  </a>
                </p>

                {renderInfoBlock("Modalidad", item.modalidad)}
                {renderInfoBlock("Cómo llegar por tierra", item.llegarTierra)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/**
 * Componente auxiliar para renderizar cada bloque de info con título y contenido
 */
const renderInfoBlock = (label, value) => (
  <React.Fragment key={label}>
    <div className={styles.titule}>
      <div className={styles.circule}></div>
      <p>{label}:</p>
    </div>
    <p>{value}</p>
  </React.Fragment>
);
