import Image from 'next/image';
import styles from '@/styles/LogoCarousel.module.css';

const imgBasePath = "/img/parcelasDemostrativas/logos-proveedores-cooperantes/";

const logos = [
  { src: 'madisa-digital.png', alt: 'Logo de Madisa Digital' },
  { src: 'aspros-horizontal.svg', alt: 'Logo de Aspros Horizontal' },
  { src: 'isaosa.png', alt: 'Logo de Isaosa' },
  { src: 'cadena.jpg', alt: 'Logo de Cadena' },
  { src: 'aguila.png', alt: 'Logo de Aguila' },
  { src: 'digital-formato-horizontal.png', alt: 'Logo de Digital Formato Horizontal' },
  { src: 'gimtrac-digital.png', alt: 'Logo de Gimtrac Digital' },
  { src: 'agroservicios-la-aduana.png', alt: 'Logo de Agroservicios La Aduana' },
  { src: 'fertilex.svg', alt: 'Logo de Fertilex' },
  { src: 'solcam.jpg', alt: 'Logo de Solcam' },
  { src: 'serviriego-sa-de-cv.png', alt: 'Logo de Serviriego SA de CV' },
  { src: 'agroindustrial-gar.png', alt: 'Logo de Agroindustrial Gar' },
  { src: 'casa-campesino.jpeg', alt: 'Logo de Casa Campesino' },
  { src: 'sara.png', alt: 'Logo de Sara' },
  { src: 'avante.svg', alt: 'Logo de Avante' },
  { src: 'jardineria-agua-azul.jpeg', alt: 'Logo de Jardinería Agua Azul' },
  { src: 'geosphera-azul.png', alt: 'Logo de Geosphera Azul' },
  { src: 'aspros.svg', alt: 'Logo de Aspros' }
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
