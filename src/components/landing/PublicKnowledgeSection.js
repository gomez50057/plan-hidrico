"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ParallaxSlider.module.css";
import Link from "next/link";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const info = [
  {
    title: "Ecos del Territorio Hídrico",
    subtitle: "Descubre voces ciudadanas: artículos de opinión, ensayos y estudios independientes que inspiran tu visión del agua",
    href: "/ecos-del-territorio-hidrico",
    image: "/img/training/recursos/15.jpg",
  },
  {
    title: "Planeación para el Futuro del Agua",
    subtitle: "Accede a documentos oficiales y estrategias del gobierno para estar siempre informado en temas hídricos",
    href: "/planeacion-para-el-futuro-del-agua",
    image: "/img/training/recursos/12.jpg",
  },
  {
    title: "Capacitación",
    subtitle: "Aprende a tu ritmo y accede a recursos prácticos que impulsarán tus habilidades al siguiente nivel. ¡Haz que tu conocimiento trabaje para ti!",
    href: "/capacitacion",
    image: "/img/training/recursos/11.jpg",
  },
];

export default function ParallaxSlider() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      const bg = el.querySelector(`.${styles.bgLayer}`);
      const fg = el.querySelector(`.${styles.fgLayer}`);
      const blob = el.querySelector(`.${styles.blob}`);
      const heading = el.querySelector("h2");
      const paragraph = el.querySelector("p");
      const cta = el.querySelector(`.${styles.ctaLink}`);
      const direction = i % 2 === 0 ? 1 : -1;

      // Entry animation (responsive on both scroll directions)
      gsap.fromTo(
        el,
        { x: 200 * direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            end: "top center-=100",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Exit animation (more noticeable and slower)
      gsap.to(
        el,
        {
          x: -200 * direction,
          opacity: 0,
          duration: 2.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: el,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Parallax images
      gsap.to(bg, { y: -20, scale: 1.05, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.to(fg, { y: -60, scale: 1.15, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });

      // Blob pulse
      gsap.fromTo(blob, { scale: 0 }, { scale: 1, duration: 1.2, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: el, start: "top 75%" } });

      // Title & subtitle animations
      gsap.from(heading, { y: 50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 80%", end: "top 60%", scrub: true } });
      gsap.from(paragraph, { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: paragraph, start: "top 85%", end: "top 65%", scrub: true } });

      // CTA hover
      cta.addEventListener("mouseenter", () => gsap.to(cta, { scale: 1.1, duration: 0.2 }));
      cta.addEventListener("mouseleave", () => gsap.to(cta, { scale: 1, duration: 0.2 }));
    });
  }, []);

  return (
    <section className={styles.parallaxStack}>
      {info.map((item, idx) => (
        <div key={idx} ref={el => (sectionsRef.current[idx] = el)} className={`${styles.parallaxItem} ${idx % 2 && styles.reverse}`}>
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} className={styles.bgLayer} />
            <img src={item.image} alt={item.title} className={styles.fgLayer} />
            <div className={styles.gradientOverlay} />
          </div>
          <div className={styles.textContent}>
            <div className={styles.blob} aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Link href={item.href} className={styles.ctaLink}>Conoce más</Link>
          </div>
        </div>
      ))}
    </section>
  );
}