import { normalizeName } from './utils';

export const trainingContent = {
  [normalizeName('Nivelación de tierras para la eficiencia hídrica')]: {
    titulo: 'Nivelación de tierras para la eficiencia hídrica',
    descripcion:
      'Domina las técnicas de nivelación del terreno para mejorar la eficiencia del riego y maximizar la productividad agrícola.',
    imagen: '/img/training/recursos/1.jpg',
    modulos: [
      {
        titulo: 'Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua',
        slug: normalizeName('Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua'),
        mainImage: '/img/training/recursos/4.jpg',
        thumbImages: ['/img/training/recursos/1.jpg', '/img/training/recursos/2.jpg'],
        statsTitle: 'Conceptos clave y beneficios',
        statsText: 'Explora qué es la nivelación de tierras, su relevancia en la agricultura y cómo contribuye al uso eficiente del agua y aumento de rendimiento.',
        quoteImage: '/img/training/recursos/avatar.jpg',
        quoteText: 'La base de una buena cosecha empieza con un terreno bien nivelado.',
        quoteAuthor: 'José Ramírez, especialista en mecanización agrícola',
        temas: [
          {
            titulo: '¿Qué es la nivelación de tierras?',
            contenido: 'La nivelación de tierras es una técnica agrícola que permite distribuir de manera uniforme el agua de riego sobre una superficie, mejorando su aprovechamiento.',
            media: { tipo: 'imagen', src: '/img/training/recursos/12.jpg' }
          },
          {
            titulo: 'Beneficios principales',
            contenido: 'Los terrenos bien nivelados permiten un uso más eficiente del agua, reducen la erosión y mejoran el rendimiento de los cultivos.',
            media: { tipo: 'video', src: 'https://youtu.be/sD3Z5Tj_b4w?si=v-TLBrmp8L3_j4WK' }
          }
        ]
      },
      {
        titulo: 'Módulo 2: Diagnóstico del terreno y tecnologías aplicables',
        slug: normalizeName('Módulo 2: Diagnóstico del terreno y tecnologías aplicables'),
        mainImage: '/img/training/recursos/9.jpg',
        thumbImages: ['/img/training/recursos/3.jpg', '/img/training/recursos/4.jpg'],
        statsTitle: 'Evaluación inicial del terreno',
        statsText: 'Aprende cómo identificar irregularidades en el terreno, realizar levantamientos topográficos básicos y seleccionar la tecnología adecuada.',
        temas: [
          {
            titulo: 'Evaluación del terreno',
            contenido: 'Este tema aborda cómo realizar un diagnóstico inicial del campo, identificando puntos altos y bajos.',
            media: { tipo: 'imagen', src: '/img/temas/diagnostico1.jpg' }
          },
          {
            titulo: 'Tecnologías aplicables',
            contenido: 'Se presentan las tecnologías modernas disponibles para facilitar la nivelación y el análisis del terreno.',
            media: { tipo: 'video', src: 'https://www.youtube.com/embed/efgh5678' }
          }
        ]
      },
      {
        titulo: 'Módulo 3: Planeación y ejecución de la nivelación',
        slug: normalizeName('Módulo 3: Planeación y ejecución de la nivelación'),
        mainImage: '/img/training/recursos/8.jpg',
        thumbImages: ['/img/training/recursos/5.jpg', '/img/training/recursos/6.jpg'],
        statsTitle: 'Proceso técnico y maquinaria',
        statsText: 'Conoce las etapas para planificar y ejecutar la nivelación, el uso de maquinaria especializada y técnicas de calibración del terreno.',
        temas: [
          {
            titulo: 'Planeación estratégica',
            contenido: 'Cómo diseñar el plan de nivelación, identificando recursos, tiempos y equipos necesarios.',
            media: { tipo: 'imagen', src: '/img/temas/planeacion1.jpg' }
          },
          {
            titulo: 'Ejecución con maquinaria',
            contenido: 'Uso de tractores y niveladoras láser para realizar cortes y rellenos precisos.',
            media: { tipo: 'video', src: 'https://www.youtube.com/embed/ijkl9012' }
          }
        ]
      },
      {
        titulo: 'Módulo 4: Seguimiento y mantenimiento de terrenos nivelados',
        slug: normalizeName('Módulo 4: Seguimiento y mantenimiento de terrenos nivelados'),
        mainImage: '/img/training/recursos/7.jpg',
        thumbImages: ['/img/training/recursos/7.jpg', '/img/training/recursos/8.jpg'],
        statsTitle: 'Manejo post-nivelación',
        statsText: 'Implementa prácticas de mantenimiento continuo para conservar la nivelación lograda y garantizar un uso sostenible del recurso hídrico.',
        temas: [
          {
            titulo: 'Monitoreo del terreno',
            contenido: 'Cómo realizar inspecciones regulares para detectar desajustes y corregirlos a tiempo.',
            media: { tipo: 'imagen', src: '/img/temas/seguimiento1.jpg' }
          },
          {
            titulo: 'Mantenimiento preventivo',
            contenido: 'Técnicas para evitar la degradación de la nivelación lograda por lluvias o mal manejo.',
            media: { tipo: 'video', src: 'https://www.youtube.com/embed/mnop3456' }
          }
        ]
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
  },
  [normalizeName('Manejo y conservación del agua')]: {
    titulo: 'Manejo y conservación del agua',
    descripcion:
      'Descubre estrategias efectivas para la gestión sostenible del recurso hídrico en contextos agrícolas y rurales.',
    imagen: '/img/training/recursos/13.jpg',
    modulos: [
      {
        titulo: 'Módulo 1: Ciclo hidrológico y disponibilidad de agua',
        slug: normalizeName('Módulo 1: Ciclo hidrológico y disponibilidad de agua'),
        mainImage: '/img/training/recursos/13.jpg',
        thumbImages: ['/img/training/recursos/14.jpg', '/img/training/recursos/15.jpg'],
        statsTitle: 'Fundamentos hídricos',
        statsText: 'Explora el ciclo del agua, la distribución del recurso en distintas regiones y su implicancia para la agricultura.',
        quoteImage: '/img/training/recursos/avatar.jpg',
        quoteText: 'Entender el agua es el primer paso para conservarla.',
        quoteAuthor: 'Laura Díaz, experta en sostenibilidad'
      },
      {
        titulo: 'Módulo 2: Técnicas de captación y almacenamiento',
        slug: normalizeName('Módulo 2: Técnicas de captación y almacenamiento'),
        mainImage: '/img/training/recursos/14.jpg',
        thumbImages: ['/img/training/recursos/13.jpg', '/img/training/recursos/15.jpg'],
        statsTitle: 'Soluciones prácticas',
        statsText: 'Revisión de métodos como captación de agua de lluvia, almacenamiento en aljibes y reservorios comunitarios.'
      },
      {
        titulo: 'Módulo 3: Uso eficiente del agua en cultivos',
        slug: normalizeName('Módulo 3: Uso eficiente del agua en cultivos'),
        mainImage: '/img/training/recursos/15.jpg',
        thumbImages: ['/img/training/recursos/14.jpg', '/img/training/recursos/13.jpg'],
        statsTitle: 'Manejo técnico',
        statsText: 'Aplicación de prácticas agronómicas para minimizar pérdidas y optimizar el uso de agua en distintas etapas del cultivo.'
      },
      {
        titulo: 'Módulo 4: Educación y políticas de conservación',
        slug: normalizeName('Módulo 4: Educación y políticas de conservación'),
        mainImage: '/img/training/recursos/13.jpg',
        thumbImages: ['/img/training/recursos/15.jpg', '/img/training/recursos/14.jpg'],
        statsTitle: 'Sostenibilidad a largo plazo',
        statsText: 'Importancia de la educación hídrica y políticas públicas orientadas al uso responsable del agua.'
      }
    ]
  },
  [normalizeName('Optimización de canales y drenajes agrícolas')]: {
    titulo: 'Optimización de canales y drenajes agrícolas',
    descripcion:
      'Aprende a diseñar, mantener y mejorar infraestructuras hidráulicas en terrenos agrícolas para un manejo más eficiente del agua.',
    imagen: '/img/training/recursos/12.jpg',
    modulos: [
      {
        titulo: 'Módulo 1: Principios de hidráulica agrícola',
        slug: normalizeName('Módulo 1: Principios de hidráulica agrícola'),
        mainImage: '/img/training/recursos/12.jpg',
        thumbImages: ['/img/training/recursos/11.jpg', '/img/training/recursos/10.jpg'],
        statsTitle: 'Bases técnicas',
        statsText: 'Este módulo presenta conceptos clave sobre el flujo del agua, presión, caudal y comportamiento hidráulico en agricultura.',
        quoteImage: '/img/training/recursos/avatar.jpg',
        quoteText: 'Un canal bien diseñado transforma la productividad del campo.',
        quoteAuthor: 'Carlos Méndez, especialista en ingeniería rural'
      },
      {
        titulo: 'Módulo 2: Diseño de canales agrícolas',
        slug: normalizeName('Módulo 2: Diseño de canales agrícolas'),
        mainImage: '/img/training/recursos/10.jpg',
        thumbImages: ['/img/training/recursos/11.jpg', '/img/training/recursos/12.jpg'],
        statsTitle: 'Diseño técnico',
        statsText: 'Aprende a calcular dimensiones, pendientes y materiales adecuados para construir canales eficientes y sostenibles.'
      },
      {
        titulo: 'Módulo 3: Sistemas de drenaje agrícola',
        slug: normalizeName('Módulo 3: Sistemas de drenaje agrícola'),
        mainImage: '/img/training/recursos/9.jpg',
        thumbImages: ['/img/training/recursos/10.jpg', '/img/training/recursos/11.jpg'],
        statsTitle: 'Control de excesos hídricos',
        statsText: 'Identifica tipos de drenaje (superficial y subterráneo), cómo implementarlos y mantenerlos en condiciones óptimas.'
      },
      {
        titulo: 'Módulo 4: Mantenimiento y rehabilitación de infraestructuras',
        slug: normalizeName('Módulo 4: Mantenimiento y rehabilitación de infraestructuras'),
        mainImage: '/img/training/recursos/8.jpg',
        thumbImages: ['/img/training/recursos/9.jpg', '/img/training/recursos/10.jpg'],
        statsTitle: 'Gestión operativa',
        statsText: 'Buenas prácticas para prolongar la vida útil de canales y drenajes, prevenir obstrucciones y evitar pérdidas de agua.'
      }
    ]
  },


};
