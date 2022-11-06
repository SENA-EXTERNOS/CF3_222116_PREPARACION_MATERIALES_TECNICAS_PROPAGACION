<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-rigth")
        p Bienvenidos al tercer componente formativo del programa técnico en Propagación masiva de material vegetal del SENA, denominado Preparación de materiales y técnicas de propagación, en el cual se identificarán los mecanismos más apropiados y el tipo de alistamiento de laboratorio requerido. Para iniciar el desarrollo del componente se presenta lo correspondiente a propagación de material vegetal. En segundo lugar, se presenta el inicio del ciclo de cultivo in vitro y luego de nutrición vegetal. Finalmente se presentan las unidades de expresión de las sustancias en preparación de cultivo. Inicie este recorrido observando el video de introducción del componente formativo.
      .col-lg-3(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
