"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ParallaxSlider.module.css";
import Link from "next/link";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const info = [
  { title: "Ecos del Territorio Hídrico", subtitle: "Explora los saberes ciudadanos", href: "/ecos-del-territorio-hidrico", image: "https://source.unsplash.com/1600x900/?river,landscape" },
  { title: "Planeación para el Futuro del Agua", subtitle: "Un enfoque estratégico", href: "/planeacion-para-el-futuro-del-agua", image: "https://source.unsplash.com/1600x900/?water,architecture" },
  { title: "Capacitación", subtitle: "Aprende e involúcrate", href: "/capacitacion", image: "https://source.unsplash.com/1600x900/?training,workshop" },
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

      // Section fade with scroll-linked scrub
      gsap.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: "top 90%", end: "top 50%", scrub: true } }
      );

      // Parallax images
      gsap.to(bg, {
        y: -20,
        scale: 1.05,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.to(fg, {
        y: -60,
        scale: 1.15,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });

      // Blob pulse
      gsap.fromTo(
        blob,
        { scale: 0 },
        { scale: 1, duration: 1.2, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: el, start: "top 75%" } }
      );

      // Title animation
      gsap.from(heading, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 80%", end: "top 60%", scrub: true },
      });

      // Subtitle animation
      gsap.from(paragraph, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: paragraph, start: "top 85%", end: "top 65%", scrub: true },
      });

      // CTA pulse on hover
      cta.addEventListener("mouseenter", () => gsap.to(cta, { scale: 1.1, duration: 0.2 }));
      cta.addEventListener("mouseleave", () => gsap.to(cta, { scale: 1, duration: 0.2 }));
    });

    // Optional: respond to wheel events for extra smoothness
    let scrollTween = gsap.to({}, {});
    ScrollTrigger.create({
      onUpdate: self => {
        // dummy to keep ScrollTrigger active on wheel
      },
      toggleActions: "play reverse play reverse",
    });
  }, []);

  return (
    <section className={styles.parallaxStack}>
      {info.map((item, idx) => (
        <div
          key={idx}
          ref={el => (sectionsRef.current[idx] = el)}
          className={`${styles.parallaxItem} ${idx % 2 && styles.reverse}`}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} className={styles.bgLayer} />
            <img src={item.image} alt={item.title} className={styles.fgLayer} />
            <div className={styles.gradientOverlay} />
          </div>
          <div className={styles.textContent}>
            <div className={styles.blob} aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Link href={item.href} className={styles.ctaLink}>
              Conoce más
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}