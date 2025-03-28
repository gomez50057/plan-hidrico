"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ejesPlanEstatal } from '../../../utils/planEstal';
import styles from './Slider.module.css';
const imgBasePath = "/img/Ejes/Generales/";
const statsNumber = [
  { value: '500+', label: 'Total de algo' },
  { value: '500+', label: 'Total de algo más' },
];

gsap.registerPlugin(ScrollTrigger);

const SingleSlider = ({ items }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!containerEl || !wrapper) return;

    const containerWidth = containerEl.offsetWidth;
    const wrapperWidth = wrapper.scrollWidth;
    const offset = 1000;

    const initialX = containerWidth - offset;
    const finalX = containerWidth - wrapperWidth - offset;

    gsap.set(wrapper, { x: initialX });

    gsap.to(wrapper, {
      x: finalX,
      ease: 'none',
      scrollTrigger: {
        trigger: containerEl,
        start: 'center center',
        pin: true,
        scrub: 1,
        end: () => `+=${wrapperWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [items]);

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      <div className={styles.row}>
        <div className={styles.wrapper} ref={wrapperRef}>

          <div className={styles.logoAcuerdo}></div>
          <div className={styles.titule}>
            <h2>Un <span>Plan</span> para el <span className="spanDoarado">Futuro de Hidalgo</span></h2>
            <p>Construido Contigo</p>
          </div>

          <div className={styles.element01}>
            <div className={styles.imgBackContainer}>
              <div className={styles.backgroundShape}></div>
              <div className={styles.imgContainer}>
                <Image src={`${imgBasePath}eje2.png`} alt="prueba" width={600} height={100} objectFit="contain" />
              </div>
            </div>
            <div className={styles.text}>
              <h2>¿Qué es el Plan Hídrico Metropolitano de Hidalgo ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem.</p>
              <div className={styles.line}></div>
              <div className={styles.containerNumber}>
                {statsNumber.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <h2 className={styles.value}>{item.value}</h2>
                    <p className={styles.label}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>



          {/* {items.map((item, index) => (
            <div
              key={item.id || index}
              className={styles.slide}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.text}>
                <h2>{formatText(item.name)}</h2>
                <p>{formatText(item.description)}</p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

SingleSlider.propTypes = {
  items: PropTypes.array.isRequired,
};

const Slider = () => {
  return <SingleSlider items={ejesPlanEstatal} />;
};

export default Slider;
