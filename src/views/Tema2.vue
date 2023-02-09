<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Inicio del ciclo del cultivo #[i in vitro]

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.text-small Luego del aprendizaje del proceso de la micropropagación de material vegetal, se continúa con el contenido sobre la temática general de propagación in vitro, mostrando el panorama asociado con las diferentes fases generales de esta técnica de reproducción asexual del material vegetal. 
        br
        br
        p.mb-0.text-small En este tema, se proporcionan elementos relacionados con las condiciones y procedimientos básicos de introducción de los tejidos a los medios de cultivo, la correspondiente multiplicación de brotes, necesaria para el logro de nuevos individuos y, finalmente, un recorrido por los aspectos requeridos para el sostenimiento de los explantes y su consolidación.


    .row.mt-5
      h3 Introducción de los tejidos seleccionados al medio de cultivo

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="fade-left")
        p Introducción de los tejidos seleccionados al medio de cultivo

        p La propagación in vitro de material vegetal, integra un conjunto de procesos que deben ser meticulosamente desarrollados, para lograr el objetivo de producción; el paso inicial de este procedimiento, es la introducción de los tejidos al medio seleccionado.

    p.mb-5 Para establecer un proceso de propagación vegetal in vitro, es necesario comprender la necesidad de contar con un medio de cultivo apropiado para el desarrollo de las fases implicadas. Conozcamos más sobre el tema.

    .tarjeta.fondo-3.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Para establecer un proceso de propagación vegetal in vitro, es necesario comprender la necesidad de contar con un medio de cultivo apropiado para el desarrollo de las fases implicadas. Conozcamos más sobre el tema.

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_2/img_3.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Los medios de cultivo están conformados por la combinación de diferentes componentes, que varían proporcionalmente, de acuerdo con las características del tejido que se pretende desarrollar, sea yema, porciones de hoja, células, porciones de tallo, entre otros, y por el proceso morfogenético que se desea seguir (cultivo de meristemos, organogénesis o embriogénesis somática).

          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_2/img_4.png', alt='Texto que describa la imagen')

    p.mb-5 A partir de lo anterior, se describe la siguiente composición descriptiva de un medio de cultivo.

    .fondo-2.p-4.mb-5
      .row.mb-5.justify-content-center
        .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
          .tarjeta.tarjeta-slide.izquierda.tarjeta_1(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img.img-a(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_5.svg')})`}")
              .tarjeta-slide__contenido.px-4.py-5.p-xl-4.aling-items-center.text-center
                h2 Agua
                p El 95 % de cualquier medio de cultivo es agua, así como solvente de todos los solutos, la cual debe estar en alto grado de pureza.
              

        .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
          .tarjeta.tarjeta-slide.abajo.tarjeta_2(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_6.svg')})`}")
              .tarjeta-slide__contenido.px-4.py-5.p-xl-4.aling-items-center.text-center
                h2 Minerales
                p Son los elementos inorgánicos importantes para el desarrollo de la planta, que consisten en macro y microelementos.
        .col-sm-6.col-xl-4.mb-4.mb-sm-0(data-aos="fade-left")
          .tarjeta.tarjeta-slide.derecha.tarjeta_3(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_7.svg')})`}")
              .tarjeta-slide__contenido.px-4.py-5.p-xl-4.aling-items-center.text-center
                h2 Compuestos orgánicos
                p Constituido por carbohidratos, fuentes energéticas, reguladores de crecimiento y suplementos.

      .row.mb-5.justify-content-center
        .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
          .tarjeta.tarjeta-slide.izquierda.tarjeta_2(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img.img-a(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img3.svg')})`}")
              .tarjeta-slide__contenido.px-4.py-5.p-xl-4.aling-items-center.text-center
                h2 Mecanismo de soporte
                p Estos son, básicamente, agentes gelatinizantes que proporcionan cierta dureza al medio de cultivo.
              

        .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
          .tarjeta.tarjeta-slide.derecha.tarjeta_3(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_9.svg')})`}")
              .tarjeta-slide__contenido.px-4.py-5.p-xl-4.aling-items-center.text-center
                h2 Preparación del medio de cultivo
                p También se conoce como la elaboración propiamente dicha de la mezcla, conservando pH apropiado, consistencia y asepsia.

    p.mb-5 Continuando con este aprendizaje, se procede a introducir el material vegetal in vitro; para el desarrollo de este proceso, es importante conocer los siguientes pasos:

    .tarjeta.bg_4.p-4
      PasosB.color-primario
        .row.justify-content-center(titulo="Paso 1")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Paso 1
            p Elegir la planta madre.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 2")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Paso 2
            p Extraer los fragmentos de la planta madre, para obtener los explantos requeridos, sean yemas, trozos de hojas, raíces o semillas.

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 3")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Paso 3
            p Desinfectar el material vegetal; este paso puede lograrse con el uso de agua esterilizada, por un tiempo prudencial (5 -15 minutos).

          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 4")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Paso 4
            p El periodo promedio de germinación o regeneración de tejidos, sucede entre los 7 y 15 días.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')

    .row.mt-5
      h3 Multiplicación de brotes y generación de subcultivos

    .row.justify-content-center.mb-5.mt-5
        .col-lg-3(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')
        .col-lg-9
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Una vez realizado el reconocimiento de los métodos de propagación, se van a abordar los mecanismos de seguimiento al proceso. Se puede indicar que cada proceso emprendido con fines de cumplir un objetivo, requiere del establecimiento metódico de los diferentes procedimientos implicados en su materialización; la naturaleza de cada temática define las necesidades de monitoreo y control de cada uno de los pasos, de manera que asegure el logro de cada constituyente, para alcanzar una construcción conjunta y armónica del camino que oriente al cumplimiento de una meta. 


</template>

<script>
export default {
  name: 'Tema2',
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
