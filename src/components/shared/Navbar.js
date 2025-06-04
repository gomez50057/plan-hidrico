"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const img = "/img/";
const imgLogos = "/img/forms nivelacion tierra/logos/";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(currentScrollPos < lastScrollPos.current || currentScrollPos < 10);
          lastScrollPos.current = currentScrollPos;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`${styles.Navbar} ${visible ? styles.active : styles.hidden} ${lastScrollPos.current > 100 ? styles.scrolled : ''}`}>
        <div className={styles.NavbarList}>
          <div className={styles.NavbarImg}>
            <img src={`${imgLogos}Gob Federal.png`} alt="Gobierno Federal" />
            <img src={`${imgLogos}Gob Hgo.png`} alt="Gobierno del Estado de Hidalgo" />
            <img src={`${img}headertxt.png`} alt="Logo de Tenemos un Acuerdo" />
          </div>

          <div className={styles.NavbarInicio}>
            {/* Botón hamburguesa solo para tablets y móviles */}
            <div className={styles.NavbarCirculo} onClick={toggleMenu}>
              <img src={`${img}estrella.webp`} alt="Menú" />
            </div>

            {/* Menú siempre visible en PC */}
            <ul className={styles.navbarOpcDesktop}>
              <li><Link href="/">Inicio</Link></li>
              <li className={styles.dropdown}>
                <span className={styles.dropdownToggle}>Materiales de apoyo</span>
                <ul className={styles.dropdownMenu}>
                  <li><Link href="/ecos-del-territorio-hidrico">Ecos del territorio hídrico</Link></li>
                  <li><Link href="/planeacion-para-el-futuro-del-agua">Planeación para el futuro del agua</Link></li>
                </ul>
              </li>
              <li><Link href="/capacitacion">Capacitación</Link></li>
              <li><Link href="https://bancodeproyectos.hidalgo.gob.mx/planhidrico/login/" target="_blank" rel="noopener noreferrer">Tecnificación y nivelación parcelaria</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenedor desplegable solo para tablets y móviles */}
      <div className={`${styles.NavbarMenuContainer} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.navbarOpcMobile}>
          <li><Link href="/">Inicio</Link></li>
          <li className={styles.dropdown}>
            <span className={styles.dropdownToggle}>Materiales de apoyo</span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/ecos-del-territorio-hidrico">Ecos del territorio hídrico</Link></li>
              <li><Link href="/planeacion-para-el-futuro-del-agua">Planeación para el futuro del agua</Link></li>
            </ul>
          </li>
          <li><Link href="/capacitacion">Capacitación</Link></li>
          <li><Link href="https://bancodeproyectos.hidalgo.gob.mx/planhidrico/login/" target="_blank" rel="noopener noreferrer">Tecnificación y nivelación parcelaria</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
