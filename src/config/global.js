export default {
  global: {
    componenteFormativo: 'Preparación de materiales y técnicas de propagación',
    descripcionCurso:
      'El componente formativo tres (3) aborda el proceso de propagación de material vegetal, estableciendo condiciones precisas de asepsia en la implementación. Entre los aspectos determinantes, resaltan la clasificación específica del material vegetal, define métodos de propagación, uso de equipos y herramientas, interpretación de condiciones de nutrición vegetal, preparación medios de cultivo y definición de protocolos de seguimiento al cultivo',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Propagación de material vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Enfoques sistémicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sustratos de propagación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Métodos de propagación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Equipos y herramientas de propagación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Mecanismos de seguimiento al proceso',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Gestión de higiene y residuos en la propagación',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inicio del ciclo del cultivo in vitro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Introducción de los tejidos seleccionados al medio de cultivo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Multiplicación de brotes y generación de subcultivos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Nutrición vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Micronutrientes y macronutrientes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Vitaminas, carbohidratos, aminoácidos y gelificantes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Reguladores de crecimiento',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Unidades de expresión de las sustancias en preparación de cultivo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Elementos a utilizar, cálculos de producción en sustancias, nomenclatura y propiedades de componentes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicación de fórmulas para disolución',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Medios de cultivo',
      referencia:
        'Hernández-Morales, R (27 de octubre de 2021). Medios de cultivo en propagación vegetal [Archivo de video]. You Tube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kn5rvSDRCXA  ',
    },
    {
      tema: 'Establecimiento de cultivo <em>in vitro</em>',
      referencia:
        'Suárez-Padrón, I (2020). Cultivo de tejidos vegetales. Fondo editorial Universidad de Córdoba. Consultado en',
      tipo: 'Libro',
      descarga: '/downloads/288339333.pdf',
    },
    {
      tema: 'Técnicas de micropropagación',
      referencia:
        'Perea, M (2009). Cultivo de tejidos vegetales in vitro. Consultado de',
      tipo: 'Libro',
      descarga: '/downloads/Cultivo_de_Tejidos_Vegetales_In_Vitro.pdf',
    },
    {
      tema: 'Orientaciones de laboratorio',
      referencia:
        'Ruíz-Benítez, M. (2020). Biotecnología de plantas. Guía. Consultado de',
      tipo: 'Guia',
      descarga: '/downloads/Guia_de_Biotecnologia_de_plantas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autoclave:',
      significado:
        'recipiente de presión metálico de paredes gruesas con un cierre hermético, que permite trabajar a alta presión para realizar una reacción industrial, una cocción o una esterilización con vapor de agua a fin de esterilizar materiales e instrumentos quirúrgicos.',
    },
    {
      termino: 'Célula somática:',
      significado:
        'células que conforman el crecimiento de los tejidos y órganos de un ser vivo pluricelular.',
    },
    {
      termino: 'Competencia celular:',
      significado:
        'condición en la cual las células han retenido o adquirido la capacidad de diferenciación y organogénesis celular para formar nuevas estructuras.',
    },
    {
      termino: 'Determinación celular:',
      significado:
        'grado de compromiso de la célula en su programación biológica para seguir un proceso morfológico controlado, sin verse afectado por estímulos externos.',
    },
    {
      termino: 'Embriogénesis somática:',
      significado:
        'desarrollo de embriones a partir de células que no son producto de la fusión de gametos durante la fecundación.',
    },
    { termino: 'Endofítico:', significado: 'dentro de la planta.' },
    {
      termino: 'Mioinositol:',
      significado:
        'sustancia que ayuda a las células a desarrollar las membranas y a generar respuesta frente a los mensajes que llegan del ambiente.',
    },
    {
      termino: 'Propágulo:',
      significado:
        'biología es un tipo de germen, parte o estructura de un organismo, producido sexual o asexualmente, capaz de desarrollarse de manera separada para dar lugar a un nuevo organismo idéntico al que lo formó.',
    },
    {
      termino: 'Regulador osmótico:',
      significado:
        'sustancias que disminuyen el potencial hídrico dentro de la célula para evitar la deshidratación.',
    },
    {
      termino: 'Senescencia:',
      significado:
        'proceso iniciado como respuesta al estrés y daño ocurrido en una célula, y constituye una ruta alternativa de respuesta a la muerte celular programada',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
    {
      referencia:
        'Flores-Hernández, LA. Robledo-Paz, A. Jimarez-Montiel, MJ (2017). Medio de cultivo y sustitutos del agar en el crecimiento in vitro de orquídeas, en: Revista Mexicana de Ciencias Agrícolas, (8) (6) pp. 1315-1328. Disponible en:',
      link:
        'https://www.scielo.org.mx/pdf/remexca/v8n6/2007-0934-remexca-8-06-1315-en.pdf',
    },

    {
      referencia:
        'Ramos, A. Cano, J. López, G. & Varguez, A (2021). Alcances y perspectivas del área de biotecnología vegetal del CIATEJ en el Sureste de México. ISNB-978-607-8734-24-5. Disponible en:',
      link:
        'https://www.researchgate.net/publication/354659004_Alcances_y_perspectivas_del_area_de_Biotecnologia_Vegetal_del_CIATEJ_en_el_Sureste_de_Mexico',
    },

    {
      referencia:
        'Suárez-Padrón, I (2020). Cultivo de tejidos vegetales. ISNB-978-958-5104-09-9. Disponible en:',
      link:
        'https://repositorio.unicordoba.edu.co/handle/ucordoba/2553#:~:text=El%20cultivo%20de%20tejidos%20vegetales,agr%C3%ADcola%20y%20la%20investigaci%C3%B3n%20vegetal.',
    },

    {
      referencia:
        'Vences-Contreras, C (2016). Manual de prácticas. Unidad de aprendizaje: micropropagación vegetal. Universidad Autónoma del Estado de México. Facultad de Ciencias Agrarias. Disponible en:',
      link:
        'http://ri.uaemex.mx/bitstream/handle/20.500.11799/64552/secme-12254.pdf?sequence=',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
