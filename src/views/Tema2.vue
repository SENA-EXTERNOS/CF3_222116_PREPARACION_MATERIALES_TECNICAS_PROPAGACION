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
        p.mb-0.text-small Luego del reconocimiento del proceso de la micropropagación de material vegetal, se continúa presentando un contenido introductorio a la temática general de propagación #[i in vitro], exponiendo el panorama asociado a las diferentes fases generales de esta técnica de reproducción asexual del material vegetal. En este recorrido, se proporcionan elementos relacionados con las condiciones y procedimientos básicos de introducción de los tejidos a los medios de cultivo, la correspondiente multiplicación de brotes necesaria para el logro de nuevos individuos y, finalmente, un recorrido por los aspectos requeridos para el sostenimiento de los explantes y su consolidación. 

    separador
    #t_2_1.titulo-segundo.color-secundario.mt-5
      h2 2.1 Introducción de los tejidos seleccionados al medio de cultivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_2/img_2.png', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="fade-left")
        p La propagación #[i in vitro] de material vegetal, integra un conjunto de procesos que deben ser meticulosamente desarrollados para lograr el objetivo de producción; el paso inicial de esto es la introducción de los tejidos al medio seleccionado.

    p.mb-5 Para establecer un proceso de propagación vegetal #[i in vitro], es necesario comprender la necesidad de contar con un medio de cultivo apropiado para el desarrollo de las fases implicadas.

    .tarjeta.fondo-3.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Para la técnica de cultivo #[i in vitro], el medio de cultivo funciona como sustrato, pero también como fuente energética, fundamental para el desarrollo de los tejidos.      
          .col-md-7
            figure
              img.img-a(src='@/assets/curso/temas/tema_2/img_3.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0.text-small
            p Los medios de cultivo son la combinación de diferentes componentes, que varían proporcionalmente de acuerdo con las características del tejido que se pretende desarrollar, sean yema, porciones de hoja, células, porciones de tallo, entre otros, y por el proceso morfogenético que se desea seguir (cultivo de meristemos, organogénesis o embriogénesis somática).    
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
              .tarjeta-slide__img.img-a(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_8.svg')})`}")
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

    p.mb-5 Luego de la definición de todo lo señalado hasta el presente punto, se procede a introducir el material vegetal #[i in vitro]; para el desarrollo de esto se debe:

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
            p Extraer los fragmentos de planta madre, obteniendo los ex plantos requeridos, sean yemas, trozos de hojas, raíces o semillas.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Paso 3")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            h4.mb-3 Paso 3
            p Desinfectar el material vegetal, que puede lograrse a través del uso de agua esterilizadas por un tiempo prudencial (5 -15 minutos).
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

    separador
    #t_2_2.titulo-segundo.color-secundario.mt-5
      h2 2.2 Multiplicación de brotes y generación de subcultivos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.text-small Posterior a la fase de introducción de los tejidos al medio, se da inicio al proceso de micropropagación a partir de explantes con meristemos terminales y axilares; esto se traduce en la producción de nuevos tallos. Tras la obtención de los nuevos brotes, estos deben cultivarse en un nuevo medio, generando divisiones y resiembras en tubos de cultivo u otros medios recipientes adecuados. Es importante resaltar que estas actividades deben ser realizadas en condiciones que garanticen la asepsia; esto se posibilita en cámaras de flujo laminar.

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
