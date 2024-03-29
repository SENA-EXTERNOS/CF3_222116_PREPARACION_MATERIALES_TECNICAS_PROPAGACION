export default {
  global: {
    componenteFormativo: 'Preparación de materiales y técnicas de propagación',
    descripcionCurso:
      'Este componente formativo aborda el proceso de propagación de material vegetal, estableciendo condiciones precisas de asepsia en la implementación. Entre los aspectos determinantes, resaltan la clasificación específica del material vegetal, define métodos de propagación, uso de equipos y herramientas, interpretación de condiciones de nutrición vegetal, preparación de medios de cultivo y definición de protocolos de seguimiento al cultivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [{}],
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
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inicio del ciclo del cultivo <em>in vitro</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Nutrición vegetal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Unidades de expresión de las sustancias en preparación para el cultivo',
        desarrolloContenidos: true,
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
      tema: 'Propagación de material vegetal',
      referencia:
        'Hernández-Morales, R (27 de octubre de 2021). <em>Medios de cultivo en propagación vegetal.</em> [Archivo de video]. youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kn5rvSDRCXA',
    },
    {
      tema: 'Inicio del ciclo de cultivo <em>in vitro</em>',
      referencia:
        'Suárez-Padrón, I (2020). <em>Cultivo de tejidos vegetales</em>. Fondo editorial Universidad de Córdoba.',
      tipo: 'Libro',
      link: 'https://core.ac.uk/download/pdf/288339333.pdf',
    },
    {
      tema: 'Propagación de material vegetal',
      referencia:
        'Perea, M (2009). <em>Cultivo de tejidos vegetales in vitro</em>.',
      tipo: 'Libro',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/79882/Tejidos%20Vegetales%20In%20Vitro%209789587194975.pdf',
    },
    {
      tema: 'Unidades de expresión de las sustancias en preparación de cultivo',
      referencia:
        'Ruíz-Benítez, M. (2020). <em>Biotecnología de plantas</em>. Guía.',
      tipo: 'Guia',
      link:
        'https://bonga.unisimon.edu.co/bitstream/handle/20.500.12442/7983/Gu%C3%ADa%20de%20Biotecnolog%C3%ADa%20de%20plantas.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Autoclave',
      significado:
        'recipiente de presión metálico de paredes gruesas con un cierre hermético, que permite trabajar a alta presión para realizar una reacción industrial, una cocción o una esterilización con vapor de agua a fin de esterilizar materiales e instrumentos quirúrgicos.',
    },
    {
      termino: 'Célula somática',
      significado:
        'células que conforman el crecimiento de los tejidos y órganos de un ser vivo pluricelular.',
    },
    {
      termino: 'Competencia celular',
      significado:
        'condición en la cual las células han retenido o adquirido la capacidad de diferenciación y organogénesis celular para formar nuevas estructuras.',
    },
    {
      termino: 'Determinación celular',
      significado:
        'grado de compromiso de la célula en su programación biológica para seguir un proceso morfológico controlado, sin verse afectado por estímulos externos.',
    },
    {
      termino: 'Embriogénesis somática',
      significado:
        'desarrollo de embriones a partir de células que no son producto de la fusión de gametos durante la fecundación.',
    },
    { termino: 'Endofítico', significado: 'dentro de la planta.' },
    {
      termino: 'Mioinositol',
      significado:
        'sustancia que ayuda a las células a desarrollar las membranas y a generar respuesta frente a los mensajes que llegan del ambiente.',
    },
    {
      termino: 'Propágulo',
      significado:
        'biología es un tipo de germen, parte o estructura de un organismo, producido sexual o asexualmente, capaz de desarrollarse de manera separada para dar lugar a un nuevo organismo idéntico al que lo formó.',
    },
    {
      termino: 'Regulador osmótico',
      significado:
        'sustancias que disminuyen el potencial hídrico dentro de la célula para evitar la deshidratación.',
    },
    {
      termino: 'Senescencia',
      significado:
        'proceso iniciado como respuesta al estrés y daño ocurrido en una célula, y constituye una ruta alternativa de respuesta a la muerte celular programada',
    },
    {
      termino: 'Tutorado de las plantas',
      significado:
        'tutorar se refiere a utilizar un material que permita que la planta se mantenga vertical para que crezca hacia arriba, erguida, y no toque el suelo, para que su desarrollo se dé más sano de mayor calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flórez-Hernández, L. A. Robledo-Paz, A. & Jimarez-Montiel, M. J. (2017). Medio de cultivo y sustitutos del agar en el crecimiento <em>in vitro</em> de orquídeas. <em>Revista Mexicana de Ciencias Agrícolas, 8</em>(6), p. 1315-1328. ',
      link:
        'https://www.scielo.org.mx/pdf/remexca/v8n6/2007-0934-remexca-8-06-1315-en.pdf',
    },
    {
      referencia:
        'Ramos, A., Cano, J., López, G. & Varguez, A. (2021). <em>Alcances y perspectivas del área de biotecnología vegetal del CIATEJ en el Sureste de México</em>. ',
      link:
        'https://www.researchgate.net/publication/354659004_Alcances_y_perspectivas_del_area_de_Biotecnologia_Vegetal_del_CIATEJ_en_el_Sureste_de_Mexico',
    },
    {
      referencia:
        'Suárez-Padrón, I (2020). <em>Cultivo de tejidos vegetales</em>. ',
      link:
        'https://repositorio.unicordoba.edu.co/handle/ucordoba/2553#:~:text=El%20cultivo%20de%20tejidos%20vegetales,agr%C3%ADcola%20y%20la%20investigaci%C3%B3n%20vegetal',
    },
    {
      referencia:
        'Vences-Contreras, C. (2016). <em>Manual de prácticas. Unidad de aprendizaje: micropropagación vegetal</em>. Universidad Autónoma del Estado de México. Facultad de Ciencias Agrarias.',
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
