"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const LOGOS = [
  { src: "/img/forms nivelacion tierra/logos/Gob Federal.png", alt: "Gobierno Federal" },
  { src: "/img/forms nivelacion tierra/logos/Gob Hgo.png", alt: "Gobierno del Estado de Hidalgo" },
  { src: "/img/headertxt.png", alt: "Logo de Tenemos un Acuerdo" },
];

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  {
    label: "Materiales de apoyo",
    submenu: [
      { label: "Ecos del territorio hídrico", href: "/ecos-del-territorio-hidrico" },
      { label: "Planeación para el futuro del agua", href: "/planeacion-para-el-futuro-del-agua" },
    ],
  },
  { label: "Capacitación", href: "/capacitacion" },
  {
    label: "Tecnificación y nivelación parcelaria",
    href: "https://bancodeproyectos.hidalgo.gob.mx/planhidrico/login/",
    external: true,
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const lastScrollPos = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < lastScrollPos.current || currentScrollPos < 10);
      lastScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const toggleSubmenu = useCallback(() => setSubmenuOpen(prev => !prev), []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  const renderNavItems = (isMobile = false) => (
    <ul className={isMobile ? styles.navbarOpcMobile : styles.navbarOpcDesktop}>
      {NAV_ITEMS.map((item, index) => (
        <li
          key={index}
          className={`${item.submenu ? styles.dropdown : ""} ${isMobile && item.label === "Materiales de apoyo" && submenuOpen ? styles.dropdownOpen : ""
            }`}
        >
          {item.submenu ? (
            <>
              <span
                className={styles.dropdownToggle}
                onClick={isMobile ? toggleSubmenu : undefined}
              >
                {item.label}
              </span>
              <ul
                className={`${styles.dropdownMenu} ${isMobile && submenuOpen ? styles.menuOpen : ""
                  }`}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href} onClick={isMobile ? handleLinkClick : undefined}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={item.href}
              onClick={isMobile ? handleLinkClick : undefined}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.Navbar} ${isVisible ? styles.active : styles.hidden} ${lastScrollPos.current > 100 ? styles.scrolled : ''
          }`}
      >
        <div className={styles.NavbarList}>
          <div className={styles.NavbarImg}>
            {LOGOS.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>

          <div className={styles.NavbarInicio}>
            <div className={styles.NavbarCirculo} onClick={toggleMenu}>
              <img src="/img/estrella.webp" alt="Menú" />
            </div>
            {renderNavItems(false)}
          </div>
        </div>
      </nav>

      <div className={`${styles.NavbarMenuContainer} ${menuOpen ? styles.menuOpen : ''}`}>
        {renderNavItems(true)}
      </div>
    </>
  );
};

export default Navbar;
