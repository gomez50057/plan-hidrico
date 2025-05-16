"use client";

import React from "react";
import styles from "./ParallaxSlider.module.css";
import Link from "next/link";
const imgBasePath = "/img/paginas/";


const info = [
  {
    title: "Ecos del Territorio Hídrico",
    subtitle:
      "Descubre voces ciudadanas: Artículos de opinión, ensayos y estudios independientes que inspiran tu visión del agua",
    href: "/ecos-del-territorio-hidrico",
    image: "/img/training/recursos/15.jpg",
  },
  {
    title: "Planeación para el Futuro del Agua",
    subtitle:
      "Accede a documentos oficiales y estrategias del gobierno para estar siempre informado en temas hídricos",
    href: "/planeacion-para-el-futuro-del-agua",
    image: "/img/training/recursos/12.jpg",
  },
  {
    title: "Capacitación",
    subtitle:
      "Aprende a tu ritmo y accede a recursos prácticos que impulsarán tus habilidades al siguiente nivel. ¡Haz que tu conocimiento trabaje para ti!",
    href: "/capacitacion",
    image: "/img/training/recursos/11.jpg",
  },
];

export default function ParallaxSlider() {
  return (
    <section className={styles.parallaxStack}>
      {info.map((item, idx) => {
        if (idx === 0) {
          return (
            <div key={idx} className={`${styles.parallaxItem} ${styles.designA}`} >
              <div className={styles.containerDesignA}>
                <div className={styles.imgTituleDesignA}>
                  <img src={`${imgBasePath}ecos.png`} alt={item.title} />
                </div>
                <div className={styles.overlayTextDesignA}>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <div className={styles.imgeWrapperDesignA}>
                <div className={styles.buttonDesignA}>
                  <Link href={item.href} className={styles.ctaLink}>
                    Conoce más ↗
                  </Link>
                </div>
                <img src={`${imgBasePath}ecos01.png`} alt={item.title} />
              </div>
            </div>
          );
        }
        if (idx === 1) {
          return (
            <div
              key={idx}
              className={`${styles.parallaxItem} ${styles.designB}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlayTextDesignB}>
                <div className={styles.imgTituleDesignB}>
                  <img src={`${imgBasePath}planeacion.png`} alt={item.title} />
                </div>
                <p>{item.subtitle}</p>
                <div className={styles.buttonDesignB}>
                  <Link href={item.href} className={styles.ctaLink}>
                    Conoce más ↗
                  </Link>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div
            key={idx}
            className={`${styles.parallaxItem} ${styles.designC}`}
          >
            <div className={styles.textContentDesignC}>
              <div className={styles.imgTituleDesignC}>
                <img src={`${imgBasePath}capacitacion.png`} alt={item.title} />
              </div>
              <p>{item.subtitle}</p>
              <div className={styles.buttonDesignC}>
                <Link href={item.href} className={styles.ctaLink}>
                  Conoce más ↗
                </Link>
              </div>
            </div>
            <div className={styles.imgDesignC}>
              <img src={`${imgBasePath}capacitacion01.png`} alt={item.title} />
            </div>
          </div>
        );
      })}
    </section>
  );
}