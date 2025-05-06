"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../../styles/knowledge/HeroCitizen.module.css";

const images = [
  "/img/knowledge/Citizen/carrusel/img1.jpg",
  "/img/knowledge/Citizen/carrusel/img2.jpg",
  "/img/knowledge/Citizen/carrusel/img3.jpg",
  "/img/knowledge/Citizen/carrusel/img4.jpg",
  "/img/knowledge/Citizen/carrusel/img5.jpg",
  "/img/knowledge/Citizen/carrusel/img6.jpg",
  "/img/knowledge/Citizen/carrusel/img7.jpg",
];

export default function Hero() {
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      gsap.set(track, { xPercent: 0 });

      gsap.to(track, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
        onUpdate: () => {
          itemsRef.current.forEach((el) => {
            const box = el.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const elementCenter = box.left + box.width / 2;
            const distance = Math.abs(centerX - elementCenter);
            const ratio = Math.min(distance / centerX, 1);
            const scale = 1 + ratio * 0.4; // ahora se hacen más grandes al alejarse
            const opacity = 1 - ratio * 0.5;

            const isLeft = elementCenter < centerX;
            const angle = ratio * (isLeft ? -35 : 35);

            el.style.transform = `scale(${scale}) rotateY(${angle}deg)`;
            el.style.opacity = opacity;
            el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className={styles.contentHeader}>
        <div className={`${styles.headeTitule} ${styles.fadeInTarget}`}>
          <img src="/img/knowledge/Citizen/hero.png" alt="img_representativa" />
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack} ref={trackRef}>
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className={styles.marqueeItem}
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <img src={src} alt={`carousel-${i}`} className={styles.imageCard} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`}>
          <img src="/img/headertxt.png" alt="img_representativa" />
        </div>
      </div>
    </section>
  );
}
