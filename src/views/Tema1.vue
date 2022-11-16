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
        p.mb-0.text-small Para comprender el proceso de propagación de material vegetal, debe partirse de las diversas condiciones que ilustran su practicidad para el establecimiento de iniciativas productivas que garanticen la reproducción de material vegetal comparativamente ventajoso en términos de rendimiento, derivado de la posibilidad que ofrece la multiplicación vegetativa de clonación de los recursos genéticos seleccionados; en tal sentido, se establece la necesidad de profundizar en los aspectos centrales de la consolidación del ensayo a realizar; #[b entre estos se encuentran la determinación de material vegetal, el establecimiento de sustratos de propagación apropiados, definición de los métodos de propagación pertinentes, identificación de equipos y herramientas necesarias, mecanismos de seguimiento del proceso y gestión apropiada de la higiene y asepsia en el laboratorio]. A continuación, se aborda cada uno de estos apartados en detalle.

    separador
    #t_1_1.titulo-segundo.color-secundario.mt-5
      h2 1.1 Determinación de material

    p.mb-5 Para dar inicio a lo correspondiente con la propagación de material vegetal, se presentan elementos destacados en la determinación de éste.

    .tarjeta.fondo-1.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p En primer lugar, el tipo de tejido a utilizar se identifica como el paso inicial para el proceso de propagación y desde esto se determina el tipo de producto que se puede llegar a obtener. En concordancia, el medio de cultivo de la propagación inicial, también se establece la necesidad de constituir un sustrato que promueva la multiplicación celular, sin desarrollar la organogénesis o embriogénesis. 
        
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_4.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p Además del tejido descrito anteriormente, es importante considerar los siguientes aspectos en el procedimiento de propagación #[i in vitro]: el medio que es inoculado inicialmente, deberá ser ubicado en un agitador orbital; la velocidad debe mantenerse entre 30 y 150 revoluciones por minuto, garantizando el mantenimiento de los tejidos celulares sin decantarse y posibilitando altas tasas de multiplicación celular. 
        
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_5.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0.text-small
            p Un cultivo en suspensión celular permite el incremento de los agentes biológicos relacionados, debido tanto a división como a elongación asociada a la asimilación de nutrientes que se encuentran presentes en el medio. En el cultivo tienen lugar diferentes fases cuyo objetivo radica en promover la proliferación celular y evitar la senescencia de los tejidos.
        
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')

    .fondo-2.p-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Dando continuidad a lo relacionado con la determinación del material para la realización de la propagación #[i in vitro], se procede a reconocer el proceso de consolidación del cultivo.

      p.mb-5 En el proceso de consolidación del cultivo #[i in vitro] Suárez-Padrón (2020) postula las fases reposo, exponencial, lineal, desaceleración y estacionaria. El significado e implicaciones de cada una de las mismas, es el siguiente:

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-secundario
          .row.justify-content-center(titulo="Paso 1")
            .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
              h4.mb-3 Fase de reposo
              p Esta fase ocurre cuando las células son transferidas a un medio de cultivo para dar inicio al crecimiento requerido; el medio al cual es transferido el material, debe ser un medio fresco, presentando disponibilidad de nutrientes y pH bajo; al tratarse de un medio fresco, no cuenta con material celular residual que pueda afectar el crecimiento y desarrollo de los tejidos emergentes.
            .col-md-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema_1/img_8.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 2")
            .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
              h4.mb-3 Fase exponencial
              p En esta fase, luego de la adaptación celular a las condiciones del nuevo medio, se procede a un aprovechamiento de las condiciones del entorno para el fomento de la división celular a su máxima velocidad.
            .col-md-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema_1/img_9.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 3")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase lineal
              p En esta fase aún se conserva la división celular, pero de forma reducida, en comparación con la fase anterior y las células generadas incrementan su talla, reduciendo el espacio y disponibilidad de nutrientes.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_10.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 4")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase desaceleración
              p En esta fase la expansión y aumento de talla celular se limitan, debido a la reducción de la disponibilidad de nutrientes y superpoblación celular.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_11.svg', alt='Texto que describa la imagen')
          .row.justify-content-center(titulo="Paso 5")
            .col-md-5.mb-4.mb-md-0
              h4.mb-3 Fase estacionaria
              p Esta fase se traduce en la detención total de la división celular; también se presenta una reducción en el volumen celular y, debido al estrés celular por la superpoblación y baja disponibilidad de nutrientes, se empieza a sufrir muerte celular y senescencia.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema_1/img_12.svg', alt='Texto que describa la imagen')

    separador
    #t_1_2.titulo-segundo.color-secundario.mt-5
      h2 1.2 Sustratos de propagación

    p.mb-5 Una vez realizada la determinación del material para la realización de la propagación #[i in vitro], se describen los sustratos de propagación.

    .tarjeta.fondo-3.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p En los elementos expuestos con anterioridad, se encuentra el medio de cultivo, que resulta crucial para la consolidación del proceso. El medio no solo es el sustrato de soporte para el ex plante, es también la fuente de energía para el material vegetal. Sus características son variables y dependen tanto del tipo de tejido a desarrollar (porciones de hojas, callo, células, entre otros), como de la morfogénesis deseada (cultivo de meristemos, organogénesis, embriogénesis somática, entre otras) (Suárez-Padrón, 2020).        
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_14.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Tanto los requerimientos nutricionales de órganos y tejidos, así como su metabolismo, posterior a la separación de los mismos de la planta madre, son aún situaciones que presentan unas posibilidades de comprensión relativamente poco conocidas; esta condición ha llevado a interpretar aquellas necesidades, de manera similar a las condiciones exigidas por la planta completa, tal es el caso de las formulaciones nutrimentales disponibles en el contexto técnico actual, que integran un conjunto de macroelementos y microelementos, así como componentes complementarios que varían en proporciones dependiendo del tipo de ex plante y la vía morfogenética que se pretende desarrollar.      
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_15.png', alt='Texto que describa la imagen')

    p.mb-5 En relación con los sustratos de propagación, se presenta a continuación aspectos destacados con la preparación del medio de cultivo.

    .tarjeta.tarjeta--gris.p-4
      .row.justify-content-center.mb-4
        .col-lg-10
          p La preparación del medio de cultivo, debe seguir un conjunto de pasos que, han de garantizar un sustrato óptimo en términos de distribución de cantidades y proporciones de los constituyentes, adecuada consistencia y nivel de pH, acorde con el proceso implementado, todo esto en condiciones de asepsia que impida posibles procesos de contaminación accidental del cultivo. A continuación, se describen cada uno de los pasos.
      PasosB.color-primario
        .row.justify-content-center(titulo="Paso 1")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Adición de componentes
            p En el caso del primer paso, asociado a la adición de componentes, se debe diluir azúcar, mioinositol, tiamina y reguladores de crecimiento. Las proporciones que se manejan de forma estandarizada corresponde a 0,5 litros de agua por cada (1) litro de medio de cultivo para diluir estos componentes, posteriormente, se aumenta la cantidad de agua hasta los 0,9 litros después de la adición de los componentes anteriormente señalados; la forma apropiada en la cual debe realizarse este proceso, es utilizando barra magnética en plato giratorio, en aras de lograr la dilución homogénea de la totalidad de los componentes.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_16.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 2")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Ajuste de pH
            p El ajuste de pH, permite lograr una solubilidad apropiada de sales en el medio, así como para otros aspectos de notable relevancia, como lo son la dureza y la asimilación de los reguladores de crecimiento; debe ser llevado cabo medición del pH, previo a la esterilización del medio; dicha medición tiene que ubicarse en un rango entre 4,5 y 6,0, propendiendo por un grado medio de 5,7. 
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
            p En cuanto a la esterilización, esta sucede en un Autoclave, bajo una presión de 1,05 kg/cm2 y a una temperatura de 121°C, siendo el tiempo de sometimiento a dichas condiciones relativo al volumen de medio trabajado; la tabla 1 presenta una relación de dichas variables. En compuestos sensibles al calor, se puede esterilizar mediante filtración (exclusiva para medios líquidos), que implica un proceso de filtración por membranas con poros de 0,22 µm; el objetivo con este proceso de tamizado es eliminar la posible presencia de microorganismos como bacterias, hongos y virus.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_19.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 5")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Distribución
            p Finalmente, el último paso a considerar es la distribución, que puede ser realizado de forma previa o posterior a la esterilización del medio y, se encuentra definida por las características físicas del mismo y el material de los recipientes potencialmente utilizables; los recipientes plásticos, no soportan el sometimiento a condiciones de alta temperatura de la esterilización, razón por la cual, la distribución se realiza después de dicho proceso. Por otro lado, cuando se utilizan recipientes de vidrio, la distribución puede realizarse antes de la esterilización.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_1/img_20.png', alt='Texto que describa la imagen')

    separador
    #t_1_3.titulo-segundo.color-secundario.mt-5
      h2 1.3  Métodos de propagación

    .bloque-texto-g.color-primario.p-4.p-sm-4.p-md-4(data-aos="fade-left").mb-5
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_21.png')})`}"
      )
      .bloque-texto-g__texto.p-5.caj_txt
        p.mb-0 Una vez determinados los materiales y los sustratos de propagación, se procede a la determinación de métodos de micropropagación más pertinentes para el proceso que se pretende desarrollar, partiendo del reconocimiento de la necesidad de cumplimiento estricto de los diferentes requerimientos de laboratorio para el logro del objetivo; entre estas exigencias, se destaca el manejo controlado de las condiciones ambientales, mediante una infraestructura acorde con el cumplimiento de dichas garantías de producción (Vences-Contreras, 2016).

    .row.justify-content-center.mb-5
      .col-lg-10
        p En la micropropagación del material vegetal, se reconocen tres métodos aplicables, dependiendo de la especie, variedad y los objetivos de operación, estos son: la micropropagación a partir del cultivo de ex plantes con meristemos pre existentes, la organogénesis y la embriogénesis somática. A continuación, se presenta cada uno de estos de forma específica. 

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Micropropagación a partir del cultivo de ex plantes con meristemos pre existentes")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Micropropagación a partir del cultivo de ex plantes con meristemos pre existentes
            p Micropropagar material vegetal desde ex plantes con meristemos preexistentes, es una técnica que permite reproducir tallos nuevos, sea desde meristemos terminales o meristemos axilares, continuando con el proceso de enraizamiento respectivo. La ocurrencia de la micropropagación referenciada sucede por la inducción del crecimiento de las yemas que se encuentran en el ex plante, crecimiento que es la resultante de la supresión de la dominancia apical de este, producto del surgimiento en altas proporciones de proteínas en el sustrato. 
            p Este tipo de técnica es de mayor utilización para la producción de cultivos #[i in vitro], puesto que garantiza un alto potencial de estabilidad genética y notables tasas de efectividad, en la más amplia gama de materiales vegetales objeto de propagación. Los estados que presenta este tipo de micropropagación son acondicionamiento de plantas madre, establecimiento del cultivo estéril #[i in vitro], multiplicación del propágulo, enraizamiento y adaptación a condiciones ex vitro.
      .py-3.py-md-4(titulo="Organogénesis")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_23.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Organogénesis
            p En cuanto a la técnica denominada organogénesis (conocida también como caulogénesis), se fundamenta en la formación de tallos nuevos, de origen adventicio, desde ex plantes que no presentan meristemos preexistentes y puede ocurrir mediante dos formas distintas (directa e indirecta), siendo una condición que depende del proceso morfogenético definido por las condiciones de determinación y competencia celulares en el ex plante. La organogénesis directa sucede cuando el brote emerge de meristemos caulinares cuya formación ocurre de células presentes en el ex plante y que no pasan por la fase celular de tejido tipo callo; la organogénesis indirecta, por el contrario, si encuentra su origen en tejido celular tipo callo desarrollado desde el ex plante.
      .py-3.py-md-4(titulo="Embriogénesis somática")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/temas/tema_1/img_24.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Embriogénesis somática
            p La tercera técnica, denominada embriogénesis somática, se enfoca en la generación de tejido embrionario desde células distintas al zigoto, los cuales se conocen como embriones somáticos, siendo un proceso que, en plantas angiospermas sucede al integrarse gameto femenino con gameto masculino en el saco embrionario, para posteriormente establecer un continuo de divisiones celulares y diferenciación de las mismas que concluye con el establecimiento de un embrión cobijado por el tejido cubierta de la semilla; para las condición #[i in vitro], el inicio del proceso de embriogénesis sucede desde células somáticas, siendo el resultado, un embrión que carece de la protección de tejido cubierta propio de las semillas.

    separador
    #t_1_4.titulo-segundo.color-secundario.mt-5
      h2 1.4 Equipos y herramientas de propagación

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_25.png')})`}"
          )
          .bloque-texto-g__texto.p-4.text-small
            p.mb-0 Teniendo en cuenta los requerimientos técnicos para llevar a cabo el proceso de micropropagación del tejido vegetal #[i in vitro], así como las condiciones controladas del entorno inmediato que se han descrito anteriormente, el laboratorio en el cual se han de llevar a cabo las diferentes actividades relacionadas, debe contar con una dotación instrumental acorde con los distintos procedimientos de interés, puesto que su presencia y acción es complementaria.#[br]
            p.mb-0 #[b Este tipo de dotación instrumental puede clasificarse en tres categorías específicas, a saber: equipos, utensilios y reactivos.]

    p.mb-5 A continuación, se presentan algunos de los equipos destacados para la determinación de la dotación instrumental, incluyendo su función.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_26.svg' alt='AvatarTop')
        h4.text-center Autoclave
        p.text-center.mb-0 Su función consiste en la esterilización de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_27.svg' alt='AvatarTop')
        h4.text-center Horno microondas
        p.text-center.mb-0 Su función consiste en la esterilización de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_28.svg' alt='AvatarTop')
        h4.text-center Estufa de secado
        p.text-center.mb-0 Su función consiste en el secado de instrumentos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_29.svg' alt='AvatarTop')
        h4.text-center Medidor de pH
        p.text-center.mb-0 Su función consiste en la medición del pH de sustrato.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_30.svg' alt='AvatarTop')
        h4.text-center Plato giratorio
        p.text-center.mb-0 Su función consiste en la dilución de componentes.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_31.svg' alt='AvatarTop')
        h4.text-center Cámaras de flujo laminar
        p.text-center.mb-0 Su función consiste en la asepsia del aire. 
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_32.svg' alt='AvatarTop')
        h4.text-center Micropipetas
        p.text-center.mb-0 Su función consiste en la transferencia de materiales.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_33.svg' alt='AvatarTop')
        h4.text-center Balanzas
        p.text-center.mb-0 Su función consiste en la medición de proporciones.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_34.svg' alt='AvatarTop')
        h4.text-center Termómetro
        p.text-center.mb-0 Su función consiste en la medición de temperatura.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_35.svg' alt='AvatarTop')
        h4.text-center Destilador o filtro del agua
        p.text-center.mb-0 Su función consiste en la purificación de agua.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_35.svg' alt='AvatarTop')
        h4.text-center Microscopio
        p.text-center.mb-0 Su función consiste en el reconocimiento de estructuras celulares.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_36.svg' alt='AvatarTop')
        h4.text-center Agitador orbital
        p.text-center.mb-0 Su función consiste en la preparación de sustancias.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_37.svg' alt='AvatarTop')
        h4.text-center Medidor de humedad relativa
        p.text-center.mb-0 Su función consiste en la medición de condiciones ambientales.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img.img-a(src='@/assets/curso/temas/tema_1/img_38.svg' alt='AvatarTop')
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
              h3.text-center.mb-0 Bisturís
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

    separador
    #t_1_5.titulo-segundo.color-secundario.mt-5
      h2 1.5 Mecanismos de seguimiento al proceso

    .fondo-5.p-5.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.m-left(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_43.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez realizado el reconocimiento de los métodos de propagación, se van a abordar los mecanismos de seguimiento al proceso. #[b Al respecto se puede indicar que cada proceso emprendido con fines de cumplir un objetivo, requiere del establecimiento metódico de los diferentes procedimientos implicados en su materialización]; la naturaleza de cada temática define las necesidades de monitoreo y control de cada uno de los pasos, de manera que asegure el logro de cada constituyente, para alcanzar una construcción conjunta y armónica del camino que oriente al cumplimiento de una meta. 

      p.mb-5 Proporcionando continuidad al seguimiento al proceso, se puede indicar que, en la micropropagación, al tratarse de un conjunto de procedimientos que exigen el cumplimiento de diversas situaciones garantes de la manipulación apropiada de los tejidos y el control de las condiciones ambientales, requiere de un monitoreo y control estricto, tal como se describe a continuación.

      .tarjeta.fondo-1.p-4.mb-5(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p El monitoreo debe ser capaz de proporcionar respuestas a las situaciones emergentes de cada fase o subproceso, en aras del mantenimiento de las condiciones garantes del crecimiento y desarrollo del material vegetal; por tal motivo, el tipo de seguimiento a realizar sobre el cultivo generado debe tener la capacidad de interpretar asertivamente todo lo que ocurre en el establecimiento productivo, para lo cual se hace indispensable la construcción y uso de indicadores desde el comportamiento de variables determinantes para el proceso.
          
            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_45.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p Entre las variables determinantes para el proceso, se puede asumir aquellas asociadas al crecimiento del material vegetal en suspensión celular por mm2, asociadas al aumento de volumen (precipitados celulares) y asociadas al incremento de peso (frascos con tejidos); lógicamente, para realizar un apropiado proceso de seguimiento desde la interpretación de las variables referenciadas anteriormente, es necesario establecer un punto de referencia, relativo a la medición en el momento cero del proceso o momento en el que específicamente inicia el ensayo.
            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_46.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p En el caso específico del crecimiento en suspensión celular, debe realizarse la identificación a través de microscopio, realizando tinción celular con azul de metileno. La lectura es llevada a cabo mediante la colocación previa de fondo milimetrado y desarrollando conteo de células por milímetro cuadrado.
            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_47.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p En cuanto al aumento de peso, la forma de realizar la lectura de esta variable es mediante el registro del valor de masa (fresca) presente por unidad de muestra; es de aclarar que, previo a la realización del pesaje, es necesario separar el material vegetal del medio de cultivo utilizando un filtro, mientras se enjuaga con agua destilada y luego, se elimina la humedad en la cámara de flujo.
            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_48.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mb-md-0.text-small
              p Finalmente, la variable relacionada con el incremento de volumen, se reconoce como uno de los métodos se seguimiento de mayor uso en los procesos de crecimiento celular; este consiste en el decantado celular desde contenido mezclado de cultivo y tejidos, registrando la cantidad en mm2 de células obtenidas.
            .col-md-7
              figure
                img.img-a(src='@/assets/curso/temas/tema_1/img_49.png', alt='Texto que describa la imagen')

    .fondo-6.P-5
      separador
      #t_1_6.titulo-segundo.color-secundario.mt-5.p-5
        h2 1.6 Gestión de higiene y residuos en la propagación

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_51.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Entre todos los elementos referenciados con anterioridad, es la asepsia la piedra angular del proceso de micropropagación de material vegetal #[i in vitro], debido a que las condiciones ambientales artificiales generadas, aunadas con la disponibilidad nutricional y ausencia de agentes antagónicos, permite que la presencia de cualquier organismo microbiano encuentre un entorno óptimo para el establecimiento y proliferación; un episodio de contaminación de este tipo, puede causar la pérdida, sea parcial o total, del tejido cultivado. La amenaza por agentes microbianos es permanente, pero el momento más álgido es durante el establecimiento del explante en el medio. 

    p.mb-5 Recordando la condición de artificialidad propia del cultivo #[i in vitro], cualquier tipo de organismo microbiano se identifica como potencial agente contaminante del material vegetal y, por lo tanto, una amenaza para la producción proyectada. Se reconocen entre estos, bacterias, hongos y virus. A continuación, algunos elementos asociados a posibles condiciones indicadoras de contaminación por cada uno de este tipo de agentes en un cultivo #[i in vitro].

    
    .row.mb-5.bg_2
      .col-lg-4.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_1/img_52.png', alt='Texto que describa la imagen')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Bacterias")
            p Son los agentes más comunes en los cultivos #[i in vitro] y ocasionan en los tejidos vegetales síntomas como no uniformidad de crecimiento, necrosis localizada, tasas modestas de multiplicación de brotes, baja capacidad de enraizamiento y hasta la muerte del explante. 
          div(titulo="Hongos")
            p Son reconocidos como agentes con actuación externa al explante, con algunos casos excepcionales en los cuales ciertas especies afectan el tejido vascular del material en formación; el crecimiento del micelio puede cubrir con rapidez al explante y ocasionar la muerte de sus tejidos.
          div(titulo="Virus")
            p Organismos que pueden llegar a generar enfermedades en las plantas, mediante el desplazamiento a través del sistema vascular; requieren de una célula hospedera. Se configura como uno de las afectaciones más intensas a las que puede someterse el material vegetal, puesto que la contaminación relacionada no es eliminable por medio de desinfecciones superficiales del explante; encuentra expresión en el crecimiento lento, capacidad limitada de enraizamiento, generación de tonalidad amarilla en las hojas, entre otros.

    .fondo-7.p-5.mb-5
      .row.justify-content-center.align-items-center
       .col-lg-6.mb-4.mb-md-0
        p Además de los organismos microbianos que se presentan como amenazas para el cultivo #[i in vitro], también se presentan otros elementos que también deben ser considerados, debido a la fragilidad manifiestas del material vegetal; tal es el caso de los ataques por artrópodos, entre los que se destacan algunos arácnidos, ácaros y #[i trips], así como hormigas que además de generar un impacto mecánico directo, pueden facilitar el ingreso de algunos de los mencionados microorganismos al espacio controlado.
       .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_1/img_53.png', alt='Texto que describa la imagen')
      
    p.mb-5 Resulta fundamental, en este sentido, reconocer las principales fuentes de contaminación de este tipo de espacios: el material vegetal, el aire y el operario; respecto a cada uno de estos, debe comprenderse el papel que juega en el esquema de afectación posible, para determinar desde esto las formas apropiadas de gestionar el riesgo implícito en cada escenario productivo.

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
              p.text-center.mb-0 Finalmente, el papel del operario u operarios que, al igual que las superficies vegetales, cuenta con una con una flora en interacción con la epidermis y que en el escenario de un cultivo #[i in vitro], podría contaminar el material vegetal, incluso, con producto del mismo proceso de renovación de la piel puede llegar a contaminar el cultivo o con la saliva expulsada al hablar.

    p.mb-5 En el siguiente video se presentará la técnica estéril para la micropropagación #[i in vitro].

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


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
