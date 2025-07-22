import Image from 'next/image';
import styles from '@/styles/LogoCarousel.module.css';

const imgBasePath = "/img/parcelasDemostrativas/logos-proveedores-cooperantes/";

const logos = [
  { src: '1-MADISA-CAT.png', alt: 'Logo de MADISA CAT' },
  { src: '2-GIMTRAC.png', alt: 'Logo de GIMTRAC' },
  { src: '3-CASA-DEL-CAMPESINO.png', alt: 'Logo de CASA DEL CAMPESINO' },
  { src: '4-ASPROS.png', alt: 'Logo de ASPROS' },
  { src: '5-ISAOSA.png', alt: 'Logo de ISAOSA' },
  { src: '6-AGROINDUTRIAL-GAR.png', alt: 'Logo de AGROINDUTRIAL GAR' },
  { src: '7-SERVIRIEGO.png', alt: 'Logo de SERVIRIEGO' },
  { src: '8-SOLCAM.png', alt: 'Logo de SOLCAM' },
  { src: '9-FERTILEX.png', alt: 'Logo de FERTILEX' },
  { src: '10-LA-ADUANA.png', alt: 'Logo de LA ADUANA' },
  { src: '11-GEOSPHERA.png', alt: 'Logo de GEOSPHERA' },
  { src: '12-SARA.png', alt: 'Logo de SARA' },
  { src: '13-AVANTE.png', alt: 'Logo de AVANTE' },
  { src: '14-CADENA.png', alt: 'Logo de CADENA' },
  { src: '15-JARDINERIA-Y-AGUA-AZUL.png', alt: 'Logo de JARDINERIA Y AGUA AZUL' },
  { src: '16-SERVICIOS-TEC-AGRICOLAS.png', alt: 'Logo de SERVICIOS TEC AGRICOLAS' },
  { src: '17-HIDROIIN.png', alt: 'Logo de HIDROIIN' },
  { src: '18-GOBALMET.png', alt: 'Logo de GOBALMET' },
];


const LogoCarousel = () => {
  // Repetimos X veces el array para llenar el espacio y evitar huecos
  const repeatedLogos = Array(4).fill(logos).flat();

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {repeatedLogos.map((logo, index) => (
          <div key={index} className={styles.logoContainer}>
            <Image
              src={`${imgBasePath}${logo.src}`}
              alt={logo.alt}
              width={300}
              height={100}
              className={styles.logoImage}
            />
            <span className={styles.tooltip}>¡Conócelo!</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
