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
  const heroRef = useRef(null);

  useEffect(() => {
    if (maskRef.current && heroRef.current) {
      const maskEl = maskRef.current;

      // Estado inicial: agujero pequeño (100px)
      gsap.set(maskEl, {
        "--mask-size": "100px"
      });

      // Durante los primeros 1000px de scroll la sección queda pinned y el agujero se expande hasta 100vw
      gsap.to(maskEl, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top+=1000 top", // Duración de la animación de la máscara
          scrub: true,
          pin: true,
          markers: false,
        },
        "--mask-size": "100vw",
        ease: "none"
      });
    }

    if (txtRef.current) {
      // Obtenemos la sección actual (header) y la siguiente sección
      const headerSection = document.getElementById("header");
      const nextSection = headerSection?.nextElementSibling;

      // Obtenemos el rectángulo del elemento actual
      const headerTxtEl = txtRef.current;
      const headerTxtRect = headerTxtEl.getBoundingClientRect();
      // Definimos headerTxtDocBottom como la posición absoluta inferior del elemento
      const headerTxtDocBottom = window.scrollY + headerTxtRect.bottom;

      let distance = 0;
      if (nextSection) {
        // Obtenemos el rectángulo de la siguiente sección
        const nextSectionRect = nextSection.getBoundingClientRect();
        // Buscamos el contenedor interno "logoAcuerdo" dentro de la siguiente sección.
        // Usamos un selector que verifique que la clase contenga "logoAcuerdo".
        const innerContainer = nextSection.querySelector('[class*="logoAcuerdo"]');
        let nextSectionCenter = 0;
        if (innerContainer) {
          const innerRect = innerContainer.getBoundingClientRect();
          nextSectionCenter = window.scrollY + innerRect.top + innerRect.height;
        } else {
          // Si no se encuentra, se usa el centro de la sección completa
          nextSectionCenter = window.scrollY + nextSectionRect.top + nextSectionRect.height / 2;
        }
        distance = nextSectionCenter - headerTxtDocBottom;
      }

      // Estado inicial: sin transformación
      gsap.set(txtRef.current, { y: 0, opacity: 1, filter: 'none' });

      // Animación para el texto que inicia al terminar la animación de la máscara
      gsap.to(txtRef.current, {
        scrollTrigger: {
          trigger: headerSection,
          start: "top+=1000 top", // Inicia cuando finaliza la animación de la máscara (1000px de scroll)
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
      <div className={styles.contentHeader} ref={heroRef}>
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
