import Image from 'next/image';
import styles from '@/styles/LogoCarousel.module.css';

const imgBasePath = "/img/";

const logos = [
  { src: 'headertxt.png', alt: 'Logo 1', link: 'https://www.logo1.com' },
  { src: 'headertxt2.png', alt: 'Logo 2', link: 'https://www.logo2.com' },
  { src: 'Logox2.png', alt: 'Logo 3', link: 'https://www.logo3.com' },
];

const LogoCarousel = () => {
  // Repetimos X veces el array para llenar el espacio y evitar huecos
  const repeatedLogos = Array(4).fill(logos).flat();

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {repeatedLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <div className={styles.logoContainer}>
              <Image
                src={`${imgBasePath}${logo.src}`}
                alt={logo.alt}
                width={300}
                height={100}
                className={styles.logoImage}
              />
              <span className={styles.tooltip}>¡Conócelo!</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
