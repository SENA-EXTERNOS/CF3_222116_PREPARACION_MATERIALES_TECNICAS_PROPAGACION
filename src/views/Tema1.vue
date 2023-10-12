<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Propagación de material vegetal

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.text-small Para comprender el proceso de propagación de material vegetal, se debe partir del análisis de las diferentes condiciones que muestran su funcionalidad, para presentar iniciativas productivas que garanticen la reproducción de material vegetal, comparativamente ventajoso en términos de rendimiento; todo esto proviene de la posibilidad que ofrece la multiplicación vegetativa de clonación de los recursos genéticos seleccionados y, es por este motivo que, se presenta la necesidad de profundizar en los aspectos centrales de esta temática: determinación de material vegetal, establecimiento de sustratos de propagación apropiados, definición de los métodos de propagación relacionados, identificación de equipos y herramientas necesarias, mecanismos de seguimiento del proceso, y gestión apropiada de la higiene y asepsia en el laboratorio. A continuación, se aborda cada uno en detalle.

    .row.mt-5
      h3 Determinación de material

    p.mb-5 Para dar inicio al tema de la propagación de material vegetal, conoceremos algunos elementos importantes.

    .tarjeta.fondo-1.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p En primer lugar, el tipo de tejido a utilizar, se identifica como el paso inicial para el proceso de propagación y, desde este tejido, se determina el tipo de producto que se puede llegar a obtener. En concordancia con el tejido, el medio de cultivo de la propagación inicial, también establece la necesidad de constituir un sustrato que promueva la multiplicación celular, sin desarrollar la organogénesis o embriogénesis. 

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_4.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p Además del tejido descrito anteriormente, es importante considerar el siguiente aspecto en el procedimiento de la propagación <em>in vitro</em>: el medio, que es inoculado inicialmente, deberá ser ubicado en un agitador orbital; la velocidad debe mantenerse entre 30 y 150 revoluciones por minuto, garantizando el mantenimiento de los tejidos celulares sin decantarse y posibilitando altas tasas de multiplicación celular. 

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_5.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p Un cultivo en suspensión celular, permite el incremento de los agentes biológicos relacionados debido tanto a la división como a la elongación, asociadas con la asimilación de nutrientes que se encuentran presentes en el medio. En el cultivo, tienen lugar diferentes fases, cuyo objetivo radica en promover la proliferación celular y evitar la senescencia de los tejidos.

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')

    .fondo-2.p-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 De acuerdo con lo relacionado sobre la determinación del material para la realización de la propagación <em>in vitro</em>, se procede a reconocer el proceso de consolidación del cultivo.

      p.mb-5 Suárez-Padrón (2020), postula las fases de reposo, exponencial, lineal, desaceleración y estacionaria, como fundamentales en el proceso de consolidación del cultivo <em>in vitro</em>. El significado y las implicaciones de cada una de estas etapas, son:

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-secundario
          .row.justify-content-center(titulo="Paso 1")
            .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
              h4.mb-3 Fase de reposo
              p Esta fase ocurre cuando las células son transferidas a un medio de cultivo para dar inicio al crecimiento requerido; el medio al cual es transportado el material, debe ser un medio fresco, que aporte buena disponibilidad de nutrientes y un pH bajo; al tratarse de un medio fresco, no cuenta con material celular residual que pueda afectar el crecimiento y desarrollo de los tejidos emergentes. 

            .col-md-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema_1/img_8.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 2")
            .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
              h4.mb-3 Fase exponencial
              p En esta fase, luego de la adaptación celular a las condiciones del nuevo medio, se procede a un aprovechamiento de las condiciones del entorno, para el fomento de la división celular, a su máxima velocidad.

            .col-md-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema_1/img_9.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 3")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase lineal
              p En esta fase, aún se conserva la división celular, aunque de forma reducida, en comparación con la fase anterior; las células generadas incrementan su talla, reduciendo el espacio y disponibilidad de nutrientes.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_10.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 4")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase desaceleración
              p En esta fase, la expansión y aumento de talla celular se limitan, debido a la reducción de la disponibilidad de nutrientes y superpoblación celular.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_11.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 5")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase estacionaria
              p En esta fase, la expansión y aumento de talla celular se limitan, debido a la reducción de la disponibilidad de nutrientes y superpoblación celular.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_12.svg', alt='Texto que describa la imagen')

    .row.mt-5
      h3 Sustratos de propagación

    p.mb-5 Una vez realizada la determinación del material para la realización de la propagación #[i in vitro], se describen los sustratos de propagación.

    .tarjeta.fondo-3.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p En los elementos expuestos con anterioridad, se encuentra el medio de cultivo, que resulta crucial para la consolidación del proceso. El medio no solo es el sustrato de soporte para el explante, es también la fuente de energía para el material vegetal. Sus características son variables y dependen, tanto del tipo de tejido a desarrollar (porciones de hojas, callo, células, entre otros), como de la morfogénesis deseada (cultivo de meristemos, organogénesis, embriogénesis somática, entre otras). (Suárez-Padrón, 2020)

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_14.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Tanto los requerimientos nutricionales de órganos y tejidos, así como su metabolismo, posterior a la separación de los mismos, de la planta madre, son aún situaciones que presentan unas posibilidades de comprensión relativamente poco conocidas; esta condición ha llevado a interpretar aquellas necesidades, de manera similar a las condiciones exigidas por la planta completa; tal es el caso de las formulaciones nutrimentales disponibles en el contexto técnico actual, que integran un conjunto de macroelementos y microelementos, así como componentes complementarios que varían en proporciones, dependiendo del tipo de explante y la vía morfogenética, que se pretende desarrollar.

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_15.png', alt='Texto que describa la imagen')

    p En relación con los sustratos de propagación, se presentan aspectos destacados con la preparación del medio de cultivo.

    p La preparación del medio de cultivo, debe seguir un conjunto de pasos que garanticen un sustrato óptimo en términos de distribución de cantidades y proporciones de los constituyentes, adecuada consistencia y nivel de pH, acordes con el proceso implementado y desarrollado en condiciones adecuadas de asepsia, para que impida posibles procesos de contaminación accidental del cultivo. A continuación, se describe cada uno de los pasos:

    .tarjeta.tarjeta--gris.p-4.mt-5
      PasosB.color-primario
        .row.justify-content-center(titulo="Paso 1")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Adición de componentes
            p El primer paso está asociado con la adición de componentes que se deben diluir en azúcar, mioinositol, tiamina y reguladores del crecimiento. Las proporciones que se manejan, de forma estandarizada, corresponden a 0,5 litros de agua por cada litro (1) del medio de cultivo, para diluir estos componentes; luego se aumenta la cantidad de agua hasta los 0,9 litros después de la adición de los componentes anteriormente indicados; la forma apropiada como debe realizarse este proceso, es utilizando una barra magnética en plato giratorio, con el objetivo de lograr la dilución homogénea de la totalidad de los componentes. 

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_16.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 2")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Ajuste de pH
            p El ajuste del pH permite alcanzar una solubilidad apropiada de sales en el medio, y también para otros aspectos de notable relevancia, como la dureza y la asimilación de los reguladores de crecimiento; la medición del pH se debe llevar a cabo, antes de la esterilización del medio; con la medición, el pH tiene que ubicarse en un rango entre 4,5 y 6,0, propendiendo por un grado medio de 5,7.

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_17.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 3")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Adición del agar
            p La adición del agar proporciona estructura física de contacto al tejido (en el caso de medios que impliquen consistencia semisólida); es importante mencionar que la adición del agar debe suceder de forma posterior a la medición del pH, pues una posible adición previa a la medición, podría afectar el instrumento de medición (potenciómetro) hasta averiarlo.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_18.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 4")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Esterilización
            p La esterilización se realiza en un autoclave metálico, bajo una presión de 1,05 kg/cm2 y a una temperatura de 121 °C, con un tiempo de sometimiento a estas condiciones, relativo al volumen del medio trabajado; la tabla presenta una relación de dichas variables. En compuestos sensibles al calor, se puede esterilizar mediante filtración (exclusiva para medios líquidos), que implica un proceso de filtrado por membranas con poros de 0,22 µm; el objetivo con este proceso de tamizado, es el de eliminar la posible presencia de microorganismos, como bacterias, hongos y virus.

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_19.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 5")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Distribución
            p La distribución puede ser realizada de forma previa o posterior a la esterilización del medio, y es definida por las características físicas del mismo medio y el material de los recipientes potencialmente utilizables; los recipientes plásticos no soportan ser sometidos a las condiciones de alta temperatura de la esterilización y, por esta razón, la distribución se realiza después de este proceso. Cuando se utilizan recipientes de vidrio, la distribución puede realizarse antes de la esterilización.

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_20.png', alt='Texto que describa la imagen')

    .row.mt-5
      h3 Métodos de propagación

    .bloque-texto-g.color-primario.p-4.p-sm-4.p-md-4(data-aos="fade-left").mb-5
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_21.png')})`}"
      )
      .bloque-texto-g__texto.p-5.caj_txt
        p.mb-0 Una vez determinados los materiales y los sustratos de propagación, se procede a la determinación de métodos de micropropagación, más pertinentes, para el proceso que se pretende desarrollar, partiendo del reconocimiento de la necesidad de cumplimiento estricto de los diferentes requerimientos de laboratorio para el logro del objetivo; entre estas exigencias, se destaca el manejo controlado de las condiciones ambientales, mediante una infraestructura, acorde con el cumplimiento de dichas garantías de producción. (Vences-Contreras, 2016).

    .row.justify-content-center.mb-5
      .col-lg-10
        p En la micropropagación del material vegetal, se reconocen tres métodos aplicables que dependen de la especie, la variedad y los objetivos de operación; estos métodos son: la micropropagación a partir del cultivo de explantes con meristemos preexistentes, la organogénesis y la embriogénesis somática. A continuación, expondremos cada técnica, de forma específica.

    TabsC.color-primario.mb-5
      .py-3.py-md-4.bgr1-tema1(titulo="Micropropagación a partir del cultivo de explantes con meristemos preexistentes")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Micropropagación a partir del cultivo de explantes con meristemos preexistentes
            p Micropropagar material vegetal, desde explantes con meristemos preexistentes, es una técnica que permite reproducir tallos nuevos, sea desde meristemos terminales o meristemos axilares, continuando con el proceso de enraizamiento respectivo. La ocurrencia de la micropropagación referenciada, sucede por la inducción del crecimiento de las yemas que se encuentran en el explante; este crecimiento resulta de suprimir la dominancia apical, producto del surgimiento, en altas proporciones de proteínas, en el sustrato.

            p Este tipo de técnica, se utiliza más para la producción de cultivos <em>in vitro</em>, puesto que garantiza un alto potencial de estabilidad genética y notables tasas de efectividad en la más amplia gama de materiales vegetales, objeto de la propagación. Los estados que presenta este tipo de micropropagación, son: acondicionamiento de plantas madre, establecimiento del cultivo estéril <em>in vitro</em>, multiplicación del propágulo, 

      .py-3.py-md-4(titulo="Organogénesis")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_23.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Organogénesis
            p En cuanto a la organogénesis, también conocida como caulogénesis, esta se fundamenta en la formación de tallos nuevos, de origen adventicio, desde explantes que no presentan meristemos preexistentes y puede ocurrir mediante dos formas distintas (directa e indirecta); la organogénesis depende del proceso morfogenético definido por las condiciones de determinación y competencia celulares en el explante. La organogénesis directa, se presenta cuando el brote emerge de meristemos caulinares, cuya formación ocurre de células presentes en el explante y que no pasan por la fase celular de tejido tipo callo; la organogénesis indirecta, por el contrario, sí encuentra su origen en tejido celular tipo callo, desarrollado desde el explante.

      .py-3.py-md-4(titulo="Embriogénesis somática")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_24.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Embriogénesis somática
            p Esta técnica o método, se enfoca en la generación de tejido embrionario, desde células distintas al zigoto, y que se conocen como embriones somáticos; este es un proceso que, en plantas angiospermas, sucede al integrarse gameto femenino con gameto masculino, en el saco embrionario para, posteriormente, establecer divisiones celulares incesantes y diferenciación de las mismas, lo que concluye con el establecimiento de un embrión cobijado por el tejido cubierta de la semilla; para la condición <em>in vitro</em>, el inicio del proceso de embriogénesis sucede desde células somáticas, siendo el resultado, un embrión que carece de la protección de tejido cubierta, propio de las semillas.

    .row.mt-5
      h3 Equipos y herramientas de propagación

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_25.png')})`}"
          )
          .bloque-texto-g__texto.p-4.text-small
            p.mb-0 Teniendo en cuenta los requerimientos técnicos para llevar a cabo el proceso de micropropagación del tejido vegetal <em>in vitro</em>, así como las condiciones controladas del entorno inmediato que se han descrito anteriormente, el laboratorio en el cual se han de llevar a cabo las diferentes actividades relacionadas, debe contar con una dotación instrumental acorde con los distintos procedimientos de interés, puesto que su presencia y acción es complementaria.
            br
            br
            p Este tipo de dotación instrumental puede clasificarse en tres categorías específicas, a saber: equipos, utensilios y reactivos.

    p.mb-5 A continuación, se presentan algunos de los equipos destacados para la determinación de la dotación instrumental, incluyendo su función.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
        h4.text-center Autoclave
        p.text-center.mb-0 Su función consiste en la esterilización de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
        h4.text-center Horno microondas
        p.text-center.mb-0 Su función consiste en la esterilización de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
        h4.text-center Estufa de secado
        p.text-center.mb-0 Su función consiste en el secado de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
        h4.text-center Medidor de pH
        p.text-center.mb-0 Su función consiste en la medición del pH del sustrato.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
        h4.text-center Plato giratorio
        p.text-center.mb-0 Su función consiste en la dilución de componentes.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
        h4.text-center Cámaras de flujo laminar
        p.text-center.mb-0 Su función consiste en la asepsia del aire. 
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
        h4.text-center Micropipetas
        p.text-center.mb-0 Su función consiste en la transferencia de materiales.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
        h4.text-center Balanzas
        p.text-center.mb-0 Su función consiste en la medición de proporciones.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        h4.text-center Termómetro
        p.text-center.mb-0 Su función consiste en la medición de temperatura.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h4.text-center Destilador o filtro del agua
        p.text-center.mb-0 Su función consiste en la purificación de agua.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        h4.text-center Microscopio
        p.text-center.mb-0 Su función consiste en el reconocimiento de estructuras celulares.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
        h4.text-center Agitador orbital
        p.text-center.mb-0 Su función consiste en la preparación de sustancias.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
        h4.text-center Medidor de humedad relativa
        p.text-center.mb-0 Su función consiste en la medición de condiciones ambientales.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
        h4.text-center Aire acondicionado
        p.text-center.mb-0 Su función consiste en la regulación de condiciones ambientales.

    .fondo-4.p-5.mb-5
      p.mb-5 Otra categoría fundamental en la dotación de instrumentos, son los utensilios. En la imagen se encuentran utensilios reconocidos como aquellos de relevancia fundamental en el proceso de micropropagación.
      .row.justify-content-center
        .col-lg-10.mt-5
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_41.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-botones.p-3(x="7%" y="-4%" numero="1")
              h3.text-center.mb-0 Cristalería
            .tarjeta.color-acento-botones.p-3(x="36%" y="-4%" numero="2")
              h3.text-center.mb-0 Pinzas quirúrgicas
            .tarjeta.color-acento-botones.p-3(x="67%" y="-4%" numero="3")
              h3.text-center.mb-0 Espátulas
            .tarjeta.color-acento-botones.p-3(x="95%" y="-4%" numero="4")
              h3.text-center.mb-0 Guantes
            .tarjeta.color-acento-botones.p-3(x="7%" y="37%" numero="5")
              h3.text-center.mb-0 Barras magnéticas
            .tarjeta.color-acento-botones.p-3(x="36%" y="37%" numero="6")
              h3.text-center.mb-0 Soportes
            .tarjeta.color-acento-botones.p-3(x="67%" y="37%" numero="7")
              h3.text-center.mb-0 Marcadores
            .tarjeta.color-acento-botones.p-3(x="95%" y="37%" numero="8")
              h3.text-center.mb-0 Bisturí
            .tarjeta.color-acento-botones.p-3(x="22%" y="77%" numero="9")
              h3.text-center.mb-0  Cuchillos
            .tarjeta.color-acento-botones.p-3(x="51%" y="77%" numero="10")
              h3.text-center.mb-0 Tabla de cortar
            .tarjeta.color-acento-botones.p-3(x="80%" y="77%" numero="11")
              h3.text-center.mb-0 Tijeras

    p.mb-5 Dando continuidad a los aspectos a considerar en la dotación de instrumentos se encuentran los reactivos. En la siguiente imagen se destacan algunos reactivos a considerar.

    .row.justify-content-center.mb-5
      .col-lg-6
        img.img-a(src='@/assets/curso/temas/tema_1/img_42.svg', alt='Texto que describa la imagen')

    .row.mt-5
      h3 Mecanismos de seguimiento al proceso

    .row.justify-content-center.mb-5
        .col-lg-8
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Una vez realizado el reconocimiento de los métodos de propagación, se van a abordar los mecanismos de seguimiento al proceso. Se puede indicar que cada proceso emprendido con fines de cumplir un objetivo, requiere del establecimiento metódico de los diferentes procedimientos implicados en su materialización; la naturaleza de cada temática define las necesidades de monitoreo y control de cada uno de los pasos, de manera que asegure el logro de cada constituyente, para alcanzar una construcción conjunta y armónica del camino que oriente al cumplimiento de una meta. 

        .col-lg-4
          img.img-a(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p Para darle continuidad al seguimiento del proceso, se puede indicar que, en la micropropagación, al tratarse de un conjunto de procedimientos que exigen el cumplimiento de diversas situaciones, garantes de la manipulación apropiada de los tejidos y el control de las condiciones ambientales, requiere de un monitoreo y un control estrictos, como se describe a continuación.

    .fondo-5.p-5.mb-5
      .tarjeta.bgr2-tema1.p-4.mb-5(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p El monitoreo debe ser capaz de proporcionar respuestas a las situaciones emergentes de cada fase o subproceso, en aras del mantenimiento de las condiciones garantes del crecimiento y desarrollo del material vegetal; por este motivo, el tipo de seguimiento que se debe realizar sobre el cultivo engendrado, debe tener la capacidad de interpretar, de manera acertada, todo lo que ocurre en el asentamiento productivo, para lo cual se hace indispensable la construcción y uso de indicadores, desde el comportamiento de las variables, determinantes para el proceso.

            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_45.png', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p Entre las variables determinantes para el proceso, se pueden asumir aquellas asociadas con el crecimiento del material vegetal en suspensión celular por mm2, asociadas con el aumento de volumen (precipitados celulares), y asociadas con el incremento de peso (frascos con tejidos); lógicamente, para realizar un apropiado proceso de seguimiento, desde la interpretación de las variables referenciadas anteriormente, es necesario establecer un punto de referencia, relativo con la medición, en el momento cero del proceso, o el momento en el que específicamente se inicia el ensayo.

            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_46.png', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p En el caso específico del crecimiento en suspensión celular, debe realizarse la identificación a través de microscopio, realizando tinción celular con azul de metileno. La lectura es llevada a cabo, mediante la colocación previa de fondo milimetrado y desarrollando conteo de células por milímetro cuadrado.

            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p En cuanto al aumento de peso, la lectura de esta variable se realiza mediante el registro del valor de la masa (fresca) presente por unidad de muestra; es de aclarar que, previo a la realización del pesaje, es necesario separar el material vegetal del medio de cultivo, utilizando un filtro, mientras se enjuaga con agua destilada, y luego se elimina la humedad en la cámara de flujo.

            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_48.png', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p Finalmente, la variable relacionada con el incremento de volumen, se reconoce como uno de los métodos de seguimiento, de mayor uso en los procesos de crecimiento celular; este consiste en el decantado celular, desde el contenido, mezclado con cultivo y tejidos, y registrando la cantidad de células obtenidas, en mm2.

            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_49.png', alt='Texto que describa la imagen')

    .fondo-6.P-5
      .row.mt-5.p-4
        h3 Gestión de higiene y residuos en la propagación

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_51.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Entre todos los elementos referenciados con anterioridad, la asepsia es la piedra angular del proceso de micropropagación de material vegetal <em>in vitro</em>, debido a que las condiciones ambientales artificiales generadas, unidas con la disponibilidad nutricional y ausencia de agentes antagónicos, permite que la presencia de cualquier organismo microbiano encuentre un entorno óptimo para su establecimiento y proliferación; un episodio de contaminación de este tipo, puede causar la pérdida, sea parcial o total, del tejido cultivado. La amenaza por agentes microbianos es permanente, pero el momento más álgido se presenta durante el establecimiento del explante en el medio.

    p.mb-5 Recordando la condición de artificialidad propia del cultivo #[i in vitro], cualquier tipo de organismo microbiano se identifica como potencial agente contaminante del material vegetal y, por lo tanto, una amenaza para la producción proyectada. Se reconocen entre estos, bacterias, hongos y virus. A continuación, algunos elementos asociados a posibles condiciones indicadoras de contaminación por cada uno de este tipo de agentes en un cultivo #[i in vitro].

    
    .row.mb-5.bg_2
      .col-lg-4.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_1/img_52.png', alt='Texto que describa la imagen')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Bacterias")
            p Son los agentes más comunes en los cultivos <em>in vitro</em> y ocasionan, en los tejidos vegetales, síntomas como: desigualdad en el crecimiento, necrosis localizada, limitada multiplicación de brotes, baja capacidad de enraizamiento e inclusive, la muerte del explante.

          div(titulo="Hongos")
            p Son reconocidos como agentes con actuación externa al explante, con algunos casos excepcionales en los cuales ciertas especies afectan el tejido vascular del material en formación; el crecimiento del micelio puede cubrir con rapidez al explante y ocasionar la muerte de sus tejidos.
          div(titulo="Virus")
            p Organismos que pueden llegar a generar enfermedades en las plantas, por su desplazamiento a través del sistema vascular, y requieren de una célula hospedera. Se configuran como una de las afectaciones más intensas a las que puede someterse el material vegetal, puesto que la contaminación relacionada, no se elimina con desinfecciones superficiales del explante; se manifiesta por el crecimiento lento, la capacidad limitada de enraizamiento, la generación de tonalidad amarilla en las hojas, entre otros síntomas.

    .fondo-7.p-5.mb-5
      .row.justify-content-center.align-items-center
       .col-lg-6.mb-4.mb-md-0
        p Además de los organismos microbianos que se presentan como amenazas para el cultivo <em>in vitro</em>, también se manifiestan otros elementos que, igualmente, deben ser considerados, debido a la fragilidad manifiesta del material vegetal; tal es el caso de los ataques por artrópodos, entre los que se destacan algunos arácnidos, ácaros y <em>trips</em>, así como hormigas que, además de generar un impacto mecánico directo, pueden facilitar el ingreso de algunos de los mencionados microorganismos, al espacio controlado.

       .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_1/img_53.png', alt='Texto que describa la imagen')
      
    p.mb-5 Resulta fundamental, reconocer las principales fuentes de contaminación en este tipo de espacios: el material vegetal, el aire y el operario; con respecto a cada uno de ellos, se debe comprender el papel que juegan en el esquema de posible afectación, y determinar las formas apropiadas para gestionar el riesgo, implícito en cada escenario productivo.

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_55.svg' alt='AvatarTop')
          .tarjeta.bg_3
            .p-4
              h4.text-center Material vegetal
              p.text-center.mb-0 En términos del material vegetal, la presencia de insectos y microorganismos en plantas en sus condiciones naturales, puede transformarse en una amenaza para el cultivo #[i in vitro] (vitro patógenos); estos pueden encontrarse en cavidades de tallos y órganos del material vegetal, desde el cual se toma el explante, ubicación que puede dificultar su eliminación en el procedimiento de desinfección.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_56.svg' alt='AvatarTop')
          .tarjeta.bg_3
            .p-4
              h4.text-center Aire
              p.text-center.mb-0 En cuanto al aire, resulta natural la presencia de sólidos suspendidos, así como diferentes microorganismos (bacterias, hongos y virus); por tal motivo, es indispensable contar con un mecanismo garante del sostenimiento de la calidad del aire, reduciendo las posibilidades de contaminación.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_57.svg' alt='AvatarTop')
          .tarjeta.bg_3
            .p-4
              h4.text-center Operario
              p.text-center.mb-0 Finalmente, el papel del operario; al igual que en las superficies vegetales, se cuenta con una flora en interacción con la epidermis y, que en el escenario de un cultivo <em>in vitro</em>, puede contaminar el material vegetal; incluso, con productos del mismo proceso para la renovación de la piel, se puede llegar a contaminar el cultivo, o también con la saliva expulsada al hablar.

    p.mb-5 En el siguiente video, podrá conocer acerca de la técnica estéril para la micropropagación <em>in vitro</em>.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rAcfMSU6Uts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
