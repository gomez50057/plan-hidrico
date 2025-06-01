"use client";
import { useState } from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import './ProjectMap.css';

const MapSection = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev);
    const elem = document.getElementById("map");
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  return (
    <section className="mapaConte">
      <div id="map">
        <div id="fullscreenButton" onClick={toggleFullScreen}>
          {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </div>

        <iframe
          src="https://gomez50057.github.io/Plan-Hidrico-Metropolitano/"
          title="Mapa Interactivo"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
        />
      </div>

      <div className="mapaTxt">
      <h2><span>Mapa: Infraestructura</span> <span className="spanDoarado">Hidroagrícola</span></h2>
        <p>Descubre nuestro mapa interactivo, donde podrás visualizar de manera dinámica los 3 Distritos de Riego del Valle del Mezquital.</p>
        <p>Esta herramienta te permite conocer <span>la infraestructura</span> de los Distritos y Módulos de Riego, y cómo avanza va avanzando el Plan Hídrico del Valle del Mezquital.</p>
      </div>
    </section>
  );
};

export default MapSection;
