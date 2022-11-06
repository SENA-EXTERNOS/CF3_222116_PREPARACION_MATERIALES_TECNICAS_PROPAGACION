<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.color-adicional-1.mb-5
          h5 Propagación masiva de material vegetal.
          br
          | Síntesis: CF_3 Preparación de materiales y técnicas de propagación.
      .col-lg-2
        img.img-a(src="@/assets/curso/temas/img_sin.png", alt="alt")

    p.mb-5 La micropropagación in vitro de material vegetal, proporciona notables oportunidades de eficiencia productiva; sin embargo, su éxito depende del apropiado alistamiento de locaciones y dotaciones, también de la interpretación oportuna de las necesidades nutricionales, así como el desarrollo de procedimientos específicos que permitan garantizar una manipulación apropiada de todos los elementos relacionados, pues la más mínima falencia, puede generar un fracaso parcial o total.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
