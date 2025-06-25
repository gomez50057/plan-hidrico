"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "@/styles/plot/PlotHero.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { dataSuppliers } from "@/utils/suppliers";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AUTO_ADVANCE_INTERVAL = 12000;

const normalizeUrl = (site) => {
  let url = site.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url.replace(/^www\./, "");
  }
  return url;
};

// Renderizador modular de enlaces web
function RenderWebLinks({ SitioWeb }) {
  if (!SitioWeb || SitioWeb.trim().toLowerCase() === "no cuenta con página web") {
    return "No cuenta con página web";
  }
  return SitioWeb
    .replace(/\n/g, ",")
    .replace(/\s+/g, " ")
    .split(",")
    .map(site => site.trim())
    .filter(Boolean)
    .map((site, idx, arr) => (
      <span key={site + idx}>
        <a
          href={normalizeUrl(site)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1e88e5", textDecoration: "underline" }}
        >
          {site}
        </a>
        {idx < arr.length - 1 && ', '}
      </span>
    ));
}

function RenderServiciosOfrecen({ ServiciosOfrecen }) {
  if (!ServiciosOfrecen) return null;
  const lines = ServiciosOfrecen.split('\n');
  return (
    <>
      {lines.map((line, idx) => (
        <span key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function getSocialIcon(nombre) {
  const name = nombre.trim().toLowerCase();
  if (name.includes("facebook")) return <FacebookIcon style={{ color: "#fff", verticalAlign: "middle" }} />;
  if (name.includes("instagram")) return <InstagramIcon style={{ color: "#fff", verticalAlign: "middle" }} />;
  if (name.includes("youtube")) return <YouTubeIcon style={{ color: "#fff", verticalAlign: "middle" }} />;
  const icoFile = `/img/parcelasDemostrativas/icons/${nombre}.png`;
  return (
    <img
      src={icoFile}
      alt={nombre}
      style={{
        width: "1.35em",
        height: "1.35em",
        verticalAlign: "middle",
        marginRight: "0.25em",
        objectFit: "contain"
      }}
      onError={e => e.target.style.display = 'none'}
    />
  );
}

function RenderRedesSociales({ RedesSociales }) {
  if (!Array.isArray(RedesSociales) || RedesSociales.length === 0) {
    return "No disponible";
  }
  return RedesSociales.map((red, idx) => {
    const isLink = red.url && red.url.startsWith("http");
    return (
      <span key={idx} style={{ marginRight: "1em" }}>
        {isLink ? (
          <a
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redSocialLink}
          >
            {getSocialIcon(red.nombre)}
            {red.nombre}
          </a>
        ) : (
          <>
            {getSocialIcon(red.nombre)}
            {red.nombre}
            {red.url && red.url.trim() ? (": " + red.url) : ""}
          </>
        )}
        {idx < RedesSociales.length - 1 && ', '}
      </span>
    );
  });
}

const PlotHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Callback para pasar a la siguiente slide
  const advance = useCallback(() => {
    setActiveIndex(idx => (idx + 1) % dataSuppliers.length);
  }, []);

  // Auto avance cada N segundos
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [advance, activeIndex]);

  // Navegación manual reinicia el intervalo
  const handleNav = (direction) => {
    clearInterval(intervalRef.current);
    setActiveIndex(idx => {
      if (direction === "next") return (idx + 1) % dataSuppliers.length;
      if (direction === "prev") return (idx - 1 + dataSuppliers.length) % dataSuppliers.length;
      return idx;
    });
  };

  // Clic en preview reinicia autoavance
  const handlePreviewClick = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
  };

  const getNextIndex = (index, offset) => (index + offset) % dataSuppliers.length;

  const { Empresa, bg, ServiciosOfrecen, SitioWeb, RedesSociales } = dataSuppliers[activeIndex];

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
      aria-label={`Vista de empresa ${Empresa}`}
    >
      <div className={styles.overlay}></div>

      {/* Contenido principal */}
      <div className={styles.content}>
        <div className={`${styles.name} ${styles.textAnimation} delay-1`}>
          <h2>{Empresa}</h2>
        </div>
        <div className={`${styles.description} ${styles.textAnimation} delay-2`}>
          <p>
            Servicios que ofrecen: <RenderServiciosOfrecen ServiciosOfrecen={ServiciosOfrecen} />
          </p>
        </div>
        <div className={`${styles.method} ${styles.textAnimation} delay-2`}>
          <p>
            Sitio Web:&nbsp;
            <RenderWebLinks SitioWeb={SitioWeb} />
          </p>
        </div>
        <div className={`${styles.RedesSociales} ${styles.method} ${styles.textAnimation} delay-2`}>
          <p>
            Redes Sociales:&nbsp;
            <RenderRedesSociales RedesSociales={RedesSociales} />
          </p>
        </div>
      </div>

      {/* Vista previa de los siguientes 2 slides */}
      <div className={styles.previewContainer}>
        {[1, 2].map(offset => {
          const nextIndex = getNextIndex(activeIndex, offset);
          const { bg: nextBg, Empresa: nextEmpresa } = dataSuppliers[nextIndex];
          return (
            <div
              key={nextIndex}
              className={`${styles.previewItem} ${styles.slideAnimation}`}
              style={{ backgroundImage: `url(${nextBg})` }}
              title={nextEmpresa}
              tabIndex={0}
              aria-label={`Ir a la empresa ${nextEmpresa}`}
              onClick={() => handlePreviewClick(nextIndex)}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handlePreviewClick(nextIndex); }}
            />
          );
        })}
      </div>

      {/* Botones de navegación manual */}
      <div className={styles.button}>
        <button
          className={styles.prevButton}
          onClick={() => handleNav("prev")}
          aria-label="Anterior"
        >
          <ArrowBackIos />
        </button>
        <button
          className={styles.nextButton}
          onClick={() => handleNav("next")}
          aria-label="Siguiente"
        >
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default PlotHero;
