import { normalizeName } from './utils';

export const trainingContent = {
  [normalizeName('Nivelación de tierras para la eficiencia hídrica')]: {
    titulo: 'Nivelación de tierras para la eficiencia hídrica',
    descripcion:
      'Aprende técnicas de nivelación para optimizar el usoaaaaaaaaaa del agua en cultivos.',
    imagen: '/img/training/recursos/1.jpg',
    modulos: [
      {
        titulo: 'Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua',
        slug: normalizeName('Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua'),
        mainImage: '/img/training/recursos/4.jpg',
        thumbImages: ['/img/training/recursos/1.jpg', '/img/training/recursos/2.jpg'],
        statsTitle: 'subtitulo',
        statsText: 'En este Módulo se revisará la definición de la nivelación de tierras, su importancia, así como el impacto en la eficiencia del riego, ahorro de agua y producción agrícola.',
        quoteImage: '/img/training/recursos/avatar.jpg',
        quoteText: 'algun texto de prueba para la cita',
        quoteAuthor: 'Peter Hoff, founder'
      },
      {
        titulo: 'Módulo 2: Diagnóstico del terreno y tecnologías aplicables',
        slug: normalizeName('Módulo 2: Diagnóstico del terreno y tecnologías aplicables'),
        mainImage: '/img/training/recursos/9.jpg',
        thumbImages: ['/img/training/recursos/3.jpg', '/img/training/recursos/4.jpg'],
        statsTitle: 'subtitulo',
        statsText: 'En este Módulo se tocarán temas como el diagnóstico del terreno, levantamientos topográficos básicos, métodos tradicionales y tecnologías modernas.'
      },
      {
        titulo: 'Módulo 3: Planeación y ejecución de la nivelación',
        slug: normalizeName('Módulo 3: Planeación y ejecución de la nivelación'),
        mainImage: '/img/training/recursos/8.jpg',
        thumbImages: ['/img/training/recursos/5.jpg', '/img/training/recursos/6.jpg'],
        statsTitle: 'subtitulo',
        statsText: 'En este Módulo se estudiarán temas como el tipo de maquinaria necesaria y su manejo básico en la nivelación de tierras.'
      },
      {
        titulo: 'Módulo 4: Seguimiento y mantenimiento de terrenos nivelados',
        slug: normalizeName('Módulo 4: Seguimiento y mantenimiento de terrenos nivelados'),
        mainImage: '/img/training/recursos/7.jpg',
        thumbImages: ['/img/training/recursos/7.jpg', '/img/training/recursos/8.jpg'],
        statsTitle: 'subtitulo',
        statsText: 'En este Módulo se revisará cómo se da el mantenimiento de terrenos nivelados, así como el uso racional del agua después de la nivelación.'
      }
    ]
  }
};
