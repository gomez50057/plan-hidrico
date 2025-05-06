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
      <div className={styles.row}>
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
            <div className={styles.text}>
              <h2>¿Qué es el Plan Hídrico Metropolitano de Hidalgo?</h2>
              <p>Es un conjunto de estrategias que buscan para mejorar el uso y el cuidado del agua, asegurando que todas las personas tengan acceso a este vital líquido de manera más eficiente y justa, especialmente las comunidades vulnerables. Para lograrlo se implementará o mejorará la infraestructura hídrica como tuberías y sistemas de riego.</p>
              <div className={styles.line}></div>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.fileShapeL}>
              <h2 className={styles.title}>¿Qué busca el Plan Hídrico Metropolitano de Hidalgo?</h2>
              <div className={styles.cardElement02}>
                <div className={styles.item}>
                  <span className={styles.textElement02}>Busca asegurar que todas las personas tengan agua suficiente, limpia y bien distribuida, especialmente en las zonas donde más se necesita, así como prevenir inundaciones, limpiar ríos contaminados y aprovechar mejor el agua que se usa en el campo.</span>
                </div>
              </div>
            </div>
            <div className={styles.imgContainerElement02}>
              <Image src={`${imgBasePath}objetivos.png`} alt="prueba" width={600} height={100} objectFit="contain" />
            </div>
            <div className={styles.fileShapeR}>
              <h2 className={styles.title}>¿Para qué un Plan Hídrico Metropolitano de Hidalgo?</h2>
              <div className={styles.cardElement02}>
                <div className={styles.item}>
                  <span className={styles.circle}></span>
                  <span className={styles.textElement02}>Llevar agua a quien más la necesita, de manera justa, sin desperdicios ni privilegios.</span>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.item}>
                  <span className={styles.circle}></span>
                  <span className={styles.textElement02}>Evitar inundaciones y limpiar ríos contaminados.</span>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.item}>
                  <span className={styles.circle}></span>
                  <span className={styles.textElement02}>Aprovechar mejor el agua en los campos hidalguenses a través del uso de la tecnología e incrementar la productividad en los cultivos.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.element}>
            {/* <div className={styles.imgContainerJustificacion}>
              <Image src={`${imgBasePath}eje2.png`} alt="prueba" width={600} height={100} objectFit="contain" />
            </div> */}
            <div className={styles.imgContainerElement03}>
              <Image src={`${imgBasePath}justificacion.png`} alt="prueba" width={600} height={100} objectFit="contain" />
            </div>
            <div className={styles.textJustificacion}>
              <h2><span className="spanVino">¿Cuáles son sus componentes?</span> </h2>
              <h3><span>Agua Segura, Futuro Seguro: Por un Hidalgo Sustentable y Próspero</span></h3>
              <p>1.	Agua Potable: Se busca mejorar el uso y el cuidado del agua.</p>
              <p>2.	Prevención e Inundaciones: Acciones y obras enfocadas a la protección de la población contra inundaciones, incluidas las limpiezas de lodo, tierra, basura u otros materiales que se acumulan en drenajes, ríos, presas, canales o alcantarillas, y que impiden que el agua fluya correctamente.</p>
              <p>3.	Saneamiento: Limpiar los ríos de la región cambiando el tránsito de los sistemas de drenaje municipal.</p>
              <p>4.	Plan de Justicia: A través del Programa de Tecnificación se busca mejorar el uso del agua en el campo, apoyando a los agricultores para que usen sistemas de riego más eficientes, como el riego por goteo, aspersión o multicompuertas, revestimiento y rehabilitación de los canales, revestimiento de regaderas y nivelación de tierras.</p>
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
