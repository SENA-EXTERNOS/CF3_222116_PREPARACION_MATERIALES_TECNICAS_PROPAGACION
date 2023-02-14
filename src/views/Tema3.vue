<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Nutrición vegetal

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img8.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.text-small El elemento central de la formación de las nuevas plantas producidas en el proceso de micropropagación, es la condición nutricional; el explante, a diferencia de las plantas consolidadas en el proceso de desarrollo, aún no se sintetiza como un organismo autótrofo, porque es incapaz de realizar fotosíntesis y depende del suministro apropiado de nutrientes que faciliten la conformación de los diferentes órganos garantes, para la autonomía como individuo; el medio de cultivo se configura como el espacio que permite esta estabilización, y la demanda nutricional celular para la diferenciación, es muy similar a la demanda nutricional de la planta plenamente constituida.

    .row.mt-5
      h3 Micronutrientes y macronutrientes

    p.mb-5 En el medio del cultivo la composición de su mezcla varía, de acuerdo con el genotipo del material vegetal y con los objetivos promotores del ensayo en construcción (Suárez-Padrón, 2020).
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
          
        h2.text-center Micronutrientes
        p.text-center Grupo constituido por los conocidos elementos mayores los cuales son: Nitrógeno (N), Fósforo (P), Potasio (K), Calcio (Ca), Magnesio (Mg) y Azufre (S); todos son protagonistas en el proceso de consolidación y crecimiento de las estructuras celulares, y es necesario utilizar de manera apropiada, el balance de los mismos en la solución, debido a que, por excesos o por defectos, se pueden ocasionar daños irreversibles a los ejemplares vegetales en formación como, por ejemplo, la vitrificación por nitrógeno.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Macronutrientes
        p.text-center Grupo constituido por los conocidos elementos mayores los cuales son: Nitrógeno (N), Fósforo (P), Potasio (K), Calcio (Ca), Magnesio (Mg) y Azufre (S); todos son protagonistas en el proceso de consolidación y crecimiento de las estructuras celulares, y es necesario utilizar de manera apropiada, el balance de los mismos en la solución, debido a que, por excesos o por defectos, se pueden ocasionar daños irreversibles a los ejemplares vegetales en formación como, por ejemplo, la vitrificación por nitrógeno.

    .row.mt-5
      h3 Vitaminas, carbohidratos, aminoácidos y gelificantes 

      p Continuando con la descripción de la nutrición celular se describen, a continuación, las vitaminas, los carbohidratos, los aminoácidos y los gelificantes.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
          .tarjeta.bg_6
            .p-4
              h4 Vitaminas
              p En plantas superiores, las vitaminas contribuyen con su crecimiento y desarrollo, así como también en la catalización de reacciones enzimáticas; la vitamina B1 (tiamina) es quizás la más utilizada, debido a su relevancia en la conversión del ácido pirúvico a acetil CoA, la cual interactúa con el ciclo de Krebs. También se observa la importancia de otras vitaminas, como es el caso del ácido nicotínico (fundamental para la coenzima NAD y la síntesis de ADN); la vitamina B6 (piroxina), implicada en la transformación energética de los nutrientes y la respiración; el ácido pantoténico, resulta sustancial para la coenzima A; la biotina, vital para el transporte de CO2, y el ácido fólico, determinante para el transporte de unidades de carbono. (Ramos, et al., 2021)

      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.bg_6
            .p-4
              h4 Carbohidratos
              p Monosacáridos y disacáridos, se presentan como las principales fuentes de carbono en cultivos <em>in vitro</em>; la formación del nuevo ejemplar debe ser promovida desde el uso de carbohidratos, en un proceso que estimule el desarrollo de la capacidad para realizar la fotosíntesis, sabiendo que, la sacarosa, es el azúcar de mayor uso por parte de las plantas, como fuente de energía.

      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.bg_6
            .p-4
              h4 Aminoácidos
              p Son conocidos como la fuente de nitrógeno para las células, debido a que tienen integración metabólica más fácil que el nitrógeno inorgánico; la adición de compuestos de aminoácidos, se limita al momento de formación del callo, por ser un estimulante de la proliferación celular con relevante importancia en el desarrollo de tejido vegetal.

      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
          .tarjeta.bg_6
            .p-4
              h4 Gelificantes
              p Son sustancias que pueden o no, hacer parte del medio de cultivo; su presencia responde a las necesidades del tipo de explante, así como también, de los objetivos de la producción, en casos en los cuales se utilizan células en suspensión como, por ejemplo, no se incluyen gelificantes, porque este medio contiene un importante contenido de nutriente complejo - hormonas de crecimiento y necesita un alto nivel de movilidad para la producción del oxígeno, requerido para el crecimiento celular.

    .row.mt-5
      h3 Reguladores de crecimiento

    p.mb-5 Teniendo en cuenta lo anterior, continuamos con el tema relacionado con la nutrición vegetal; a continuación, se presentan los reguladores de crecimiento.

    .fondo-8.p-5
      .row.mb-5.bg_2
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          img.img-a(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen')
        .col-lg-7(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Proceso de diferenciación celular")
              p El logro del proceso de diferenciación celular es el garante del éxito de la micropropagación de material vegetal; la configuración de esto proporciona al explante la posibilidad de consolidarse como un individuo autónomo y realizador de fotosíntesis; en esta transformación, es vital abordar el crecimiento y su regulación, como aspectos indispensables para la producción vegetativa.

            div(titulo="Concepto de reguladores de crecimiento")
              p Con la necesidad de brindar soporte vital al tejido vegetal y cierto proceso de tutorado para el desarrollo óptimo de los ejemplares nuevos; es fundamental asumir el concepto de “reguladores de crecimiento” o, en otras palabras, hormonas vegetales porque este corresponde a las características del tipo de explante implicado y los objetivos de desarrollo relacionados.

            div(titulo="Orgánicos y sintéticos")
              p Los reguladores de crecimiento pueden ser orgánicos o sintéticos y, en el cultivo <em>in vitro</em>, se suman a los medios de cultivo. Entre estos se identifican auxinas, citoquininas, giberelinas, etileno, poliaminas, brasinoesteroides, ácido jasmónico y antioxidantes (Ramos, et al., 2021).


    




</template>

<script>
export default {
  name: 'Tema3',
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
