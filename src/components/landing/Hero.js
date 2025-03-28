"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from "../../styles/Hero.module.css";
const imgBasePath = "/img/";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const txtRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    // Pinnea la sección completa (elemento con id "header") durante 1000px de scroll
    ScrollTrigger.create({
      trigger: "#header",
      start: "top top",
      end: "top+=1000 top",
      pin: true,
      markers: false,
    });

    // Animación de la máscara: expandir el agujero de 100px a 100vw sin que se mueva
    if (maskRef.current) {
      gsap.set(maskRef.current, {
        "--mask-size": "400px"
      });

      gsap.to(maskRef.current, {
        scrollTrigger: {
          trigger: "#header",
          start: "top top",
          end: "top+=1000 top",
          scrub: true,
          markers: false,
        },
        "--mask-size": "200vw",
        ease: "none"
      });
    }

    if (txtRef.current) {
      // Cálculo de la distancia para la animación del texto
      const headerSection = document.getElementById("header");
      const nextSection = headerSection?.nextElementSibling;
      const headerTxtEl = txtRef.current;
      const headerTxtRect = headerTxtEl.getBoundingClientRect();
      const headerTxtDocBottom = window.scrollY + headerTxtRect.bottom;

      let distance = 0;
      if (nextSection) {
        const nextSectionRect = nextSection.getBoundingClientRect();
        const innerContainer = nextSection.querySelector('[class*="logoAcuerdo"]');
        let nextSectionCenter = 0;
        if (innerContainer) {
          const innerRect = innerContainer.getBoundingClientRect();
          nextSectionCenter = window.scrollY + innerRect.top + innerRect.height;
        } else {
          nextSectionCenter = window.scrollY + nextSectionRect.top + nextSectionRect.height / 2;
        }
        distance = nextSectionCenter - headerTxtDocBottom;
      }

      gsap.set(txtRef.current, { y: 0, opacity: 1, filter: 'none' });

      // Animación del texto que se inicia cuando finaliza la animación de la máscara (después de 1000px)
      gsap.to(txtRef.current, {
        scrollTrigger: {
          trigger: "#header",
          start: "top+=1000 top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
        y: distance,
        scale: 1,
        opacity: 0.5,
        filter: "grayscale(100%) brightness(200%)",
        ease: "none"
      });
    }
  }, []);

  return (
    <section id="header">
      <div className={styles.contentHeader}>
        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`} ref={txtRef}>
          <img src={`${imgBasePath}headertxt.png`} alt="img_representativa" />
        </div>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}headerimg.png`} alt="img_representativa" className={styles.floatingImg} />
        </div>
      </div>
      <div className={styles.maskOverlay} ref={maskRef} />
    </section>
  );
}
