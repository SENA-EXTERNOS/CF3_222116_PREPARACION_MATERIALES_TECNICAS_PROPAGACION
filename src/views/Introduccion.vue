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
        p Bienvenido a este componente formativo, donde se identificarán los mecanismos más apropiados y el tipo de alistamiento de laboratorio requerido. Para iniciar el desarrollo del componente, se presenta lo correspondiente a la propagación de material vegetal. En segundo lugar, se presenta el inicio del ciclo de cultivo <em>in vitro</em> y, luego, el de nutrición vegetal. Finalmente, se presentan las unidades de expresión de las sustancias en preparación del cultivo. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-4(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WjN8dxupqPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
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
