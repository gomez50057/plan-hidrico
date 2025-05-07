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
    subtitle: "Explora los saberes ciudadanos",
    href: "/ecos-del-territorio-hidrico",
  },
  {
    title: "Planeación para el Futuro del Agua",
    subtitle: "Un enfoque estratégico",
    href: "/planeacion-para-el-futuro-del-agua",
  },
  {
    title: "Capacitación",
    subtitle: "Aprende e involúcrate",
    href: "/capacitacion",
  },
];

export default function ParallaxSlider() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      const img = el.querySelector("img");
      gsap.fromTo(
        el,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
      gsap.to(img, {
        y: -50,
        scale: 1.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className={styles.parallaxStack}>
      {info.map((item, index) => (
        <div className={styles.parallaxItem} key={index} ref={el => sectionsRef.current[index] = el}>
          <div className={styles.imageWrapper}>
            <img src="/img/headerimg.png" alt={item.title} />
          </div>
          <div className={styles.textContent}>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Link href={item.href} className={styles.ctaLink}>Conoce más</Link>
          </div>
        </div>
      ))}
    </section>
  );
}


