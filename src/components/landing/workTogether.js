"use client";

import { useRef, useEffect } from "react";
import { trabajar_conjunto } from "@/utils/workTogetherUtils";
import styles from '@/styles/workTogether.module.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imgBasePath = "/img/numbers/";

export default function WorkTogether() {
  const itemsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, Object.values(trabajar_conjunto).length);

    if (typeof window !== "undefined") {
      gsap.fromTo(
        itemsRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.23,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse", // ← así entra y revierte siempre
            // markers: true, // descomenta para ver visualmente el trigger en dev
          }
        }
      );
    }
  }, []);

  return (
    <div className={styles.containerWorkTogether} ref={sectionRef}>
      <h2>
        <span>¿Cómo Vamos</span> a <span className="spanDoarado">Trabajar</span> en <span className="spanDoarado">Conjunto?</span>
      </h2>
      {Object.values(trabajar_conjunto).map((data, idx) => (
        <div
          className={styles.container}
          key={idx}
          ref={el => (itemsRef.current[idx] = el)}
          style={{ opacity: 0, transform: "translateX(-80px)" }}
        >
          <div className={styles.text}>
            <div className={styles.left}>
              <span className={styles.title}>
                <em>{data.titulo}</em>
              </span>
            </div>
            <div className={styles.right}>
              <ul>
                {Array.isArray(data.items) && data.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.bgImage}>
            <img src={`${imgBasePath}${data.img}`} alt="img_representativa" className={styles.floatingImg} />
          </div>
        </div>
      ))}
    </div>
  );
}
