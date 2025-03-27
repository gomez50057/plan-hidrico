"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { formatText } from '../../shared/formatText';
import { ejesPlanEstatal } from '../../../utils/planEstal';
import styles from './Slider.module.css';

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
    const offset = 80;

    const initialX = containerWidth - offset;
    const finalX = containerWidth - wrapperWidth - offset;

    gsap.set(wrapper, { x: initialX });

    gsap.to(wrapper, {
      x: finalX,
      ease: 'none',
      scrollTrigger: {
        trigger: containerEl,
        start: 'top 5vh',
        pin: true,
        scrub: 1,
        end: () => `+=${wrapperWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [items]);

  const handleSlideClick = (slug) => {
    const url = `${slug}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      <div className={styles.row}>
        <div className={styles.wrapper} ref={wrapperRef}>
          <div className={styles.titule}>
            <h3>Los 4 Ejes</h3>
            <p>Estratégicos para el Desarrollo</p>
          </div>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className={styles.slide}
              onClick={() => handleSlideClick(item.slug)}
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
          ))}
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
