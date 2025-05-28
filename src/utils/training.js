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
        quoteText: '"algun texto de prueba para la cita"',
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
  },

  [normalizeName('Tecnologías de riego por goteo')]: {
  titulo: 'Tecnologías de riego por goteo',
  descripcion:
    'Explora cómo implementar y optimizar sistemas de riego por goteo para mejorar la eficiencia hídrica en cultivos.',
  imagen: '/img/training/recursos/1.jpg',
  modulos: [
    {
      titulo: 'Módulo 1: Fundamentos del riego por goteo',
      slug: normalizeName('Módulo 1: Fundamentos del riego por goteo'),
      mainImage: '/img/training/recursos/1.jpg',
      thumbImages: ['/img/training/recursos/2.jpg', '/img/training/recursos/3.jpg'],
      statsTitle: 'Importancia y principios',
      statsText: 'Este módulo cubre los principios básicos del riego por goteo, sus ventajas en la agricultura moderna y cuándo es más efectivo.',
      quoteImage: '/img/training/recursos/avatar.jpg',
      quoteText: '"La eficiencia del agua comienza con el conocimiento de cómo aplicarla."',
      quoteAuthor: 'Ana López, ingeniera agrónoma'
    },
    {
      titulo: 'Módulo 2: Componentes del sistema de riego por goteo',
      slug: normalizeName('Módulo 2: Componentes del sistema de riego por goteo'),
      mainImage: '/img/training/recursos/4.jpg',
      thumbImages: ['/img/training/recursos/5.jpg', '/img/training/recursos/6.jpg'],
      statsTitle: 'Diseño del sistema',
      statsText: 'Revisión de los componentes técnicos: mangueras, emisores, filtros, válvulas y cómo elegirlos según tipo de cultivo.'
    },
    {
      titulo: 'Módulo 3: Instalación y mantenimiento',
      slug: normalizeName('Módulo 3: Instalación y mantenimiento'),
      mainImage: '/img/training/recursos/7.jpg',
      thumbImages: ['/img/training/recursos/8.jpg', '/img/training/recursos/9.jpg'],
      statsTitle: 'Procedimientos técnicos',
      statsText: 'Aprende cómo instalar correctamente un sistema de goteo, detectar fugas y realizar mantenimiento preventivo.'
    },
    {
      titulo: 'Módulo 4: Estrategias de uso eficiente del agua',
      slug: normalizeName('Módulo 4: Estrategias de uso eficiente del agua'),
      mainImage: '/img/training/recursos/10.jpg',
      thumbImages: ['/img/training/recursos/11.jpg', '/img/training/recursos/12.jpg'],
      statsTitle: 'Gestión hídrica avanzada',
      statsText: 'Técnicas para maximizar la eficiencia del riego, integrar sensores de humedad y adaptar la frecuencia al clima y tipo de suelo.'
    }
  ]
}

};
