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
      <h2><span>Huella Hídrica</span> <span className="spanDoarado">Dónde Estamos</span></h2>
      <h3>Mapa: Infraestructura Hidroagrícola</h3>
        <p>Descubre nuestro mapa interactivo, donde podrás visualizar de manera dinámica los 3 Distritos de Riego, los tipos de Módulos de Riego de tierra (sus canales están hechos de tierra compactada) y revestido (Sus canales están revestidos con concreto u otro material), así como el Bloque 1 de los Módulos de Riego que serán revestidos en el 2025.</p>
        <p>Esta herramienta te permite conocer los Distritos y Módulos de Riego, y cómo va avanzando el Plan Hídrico Metropolitano de Hidalgo.</p>
      </div>
    </section>
  );
};

export default MapSection;
