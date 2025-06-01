"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ejesPlanEstatal } from '../../../utils/planEstal';
import styles from './Slider.module.css';
const imgBasePath = "/img/";

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
      <div className={styles.wrapper} ref={wrapperRef}>

        <div className={styles.logoAcuerdo}></div>
        <div className={styles.titule}>
          <h2>Un <span>Plan</span> para el <span className="spanDoarado">Futuro de Hidalgo</span></h2>
          <p>Construido Contigo</p>
        </div>

        <div className={styles.element}>
          <div className={styles.imgBackContainer}>
            <div className={styles.backgroundShape}></div>
            <div className={styles.imgContainer}>
              <Image src={`${imgBasePath}eje2.png`} alt="prueba" width={600} height={100} objectFit="contain" />
            </div>
          </div>
          <div className={styles.textElement01}>
            <h2>¿Qué es el Plan Hídrico del Valle del Mezquital?</h2>
            <p>Es un conjunto de estrategias que buscan mejorar el uso y el cuidado del agua, asegurando que todas las personas tengan acceso a este vital líquido de manera más eficiente y justa, especialmente las comunidades vulnerables. Para lograrlo se modernizará la infraestructura hídrica y se hará más eficiente el riego agrícola, a través de su tecnificación.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.element}>
          <div className={styles.imgContainerElement02}>
            <Image src={`${imgBasePath}objetivos.png`} alt="prueba" width={600} height={100} objectFit="contain" />
          </div>
          <div className={styles.fileShapeR}>
            <h2 className={styles.title}>¿Qué busca el Plan Hídrico en Hidalgo?</h2>
            <div className={styles.cardElement02}>
              <div className={styles.item}>
                <span className={styles.circle}></span>
                <span className={styles.textElement02}>Garantizar el derecho humano al agua para todas y todos, sin excepción.</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.item}>
                <span className={styles.circle}></span>
                <span className={styles.textElement02}>Prevenir inundaciones que afecten a las familias y a su patrimonio.</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.item}>
                <span className={styles.circle}></span>
                <span className={styles.textElement02}>Sanear los ríos contaminados para proteger la salud y el medio ambiente.</span>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.item}>
                <span className={styles.circle}></span>
                <span className={styles.textElement02}>Aprovechar de mejor manera el agua de uso agrícola, mejorando la productividad de la tierra.</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.element}>
            <div className={styles.imgContainerElement03}>
              <Image src={`${imgBasePath}justificacion.png`} alt="prueba" width={600} height={100} objectFit="contain" />
            </div>
            <div className={styles.textJustificacion}>
              <h2><span className="spanVino">¿Cuáles son sus componentes?</span> </h2>
              <h3><span>Agua Segura, Futuro Seguro: Por un Hidalgo Sustentable y Próspero</span></h3>
              <p><span className={styles.vinoColor}>1.</span><span>Agua Potable:</span> Se busca mejorar el uso y el cuidado del agua, realizando obras para mejorar la conducción del vital líquido,</p>
              <p><span className={styles.vinoColor}>2.</span><span>Prevención e Inundaciones:</span> Acciones y obras enfocadas a la protección de la población contra inundaciones, incluidas las limpiezas de lodo, tierra, basura u otros materiales que se acumulan en drenajes, ríos, presas, canales o alcantarillas, y que impiden que el agua fluya correctamente.</p>
              <p><span className={styles.vinoColor}>3.</span><span>Saneamiento:</span> Limpiar los ríos de la región cambiando el tránsito de los sistemas de drenaje municipales para su tratamiento.</p>
              <p><span className={styles.vinoColor}>4.</span><span>Plan de Justicia:</span> A través del Programa de Tecnificación se busca mejorar el uso del agua en el campo, apoyando a los agricultores para que usen sistemas de riego más eficientes, como el riego por goteo, aspersión o multicompuertas, revestimiento y rehabilitación de los canales, regaderas y nivelación de tierras, además de mejorar la productividad de sus parcelas.</p>
            </div>
          </div> */}
      </div>
    </div >
  );
};

SingleSlider.propTypes = {
  items: PropTypes.array.isRequired,
};

const Slider = () => {
  return <SingleSlider items={ejesPlanEstatal} />;
};

export default Slider;
