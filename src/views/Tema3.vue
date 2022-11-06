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
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.text-small El elemento central de la formación de las nuevas plantas producidas del proceso de micropropagación, es la condición nutricional; el explante, a diferencia de las plantas consolidadas en proceso de desarrollo, aún no es un organismo autótrofo pues es incapaz de realizar fotosíntesis, depende del suministro apropiado de nutrientes que facilite la conformación de los diferentes órganos garantes de la autonomía como individuo; en tal sentido, el medio de cultivo se configura como el espacio que permite dicha consolidación, siendo la demanda nutricional celular para la diferenciación muy similar a la demanda nutricional de la planta plenamente constituida. 

    separador
    #t_3_1.titulo-segundo.color-secundario.mt-5
      h2 3.1 Micronutrientes y macronutrientes

    p.mb-5 El medio de cultivo, la composición de su mezcla varía de acuerdo con el genotipo del material vegetal y a los objetivos promotores del ensayo en construcción (Suárez-Padrón, 2020).

    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema_3/img_2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Micronutrientes
        p.text-center El concepto hace referencia al nivel de concentración de ciertos elementos requeridos por parte del material vegetal para la formación de las plantas; entre estos se encuentran hierro (Fe), manganeso (Mn), Zinc (Zn), Cobre (Cu), Boro (B) y Molibdeno (Mo), siendo el primero el mayormente requerido y, en su conjunto, son relevantes para el desarrollo de procesos asociados a la fotosíntesis, regulación hormonal y crecimiento celular.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema_3/img_3.svg', alt='Texto que describa la imagen')
          
        h2.text-center Macronutrientes
        p.text-center Grupo constituido por los conocidos elementos mayores que son Nitrógeno (N), Fósforo (P), Potasio (K), Calcio (Ca), Magnesio (Mg) y Azufre (S), siendo todos protagonistas en el proceso de consolidación y crecimiento de las estructuras celulares, siendo necesario manejar de manera apropiada el balance de los mismos en la solución, debido a que por excesos o por defectos, se puede ocasionar daños irreversibles a los ejemplares vegetales en formación, por ejemplo, la vitrificación por nitrógeno.

    separador
    #t_3_2.titulo-segundo.color-secundario.mt-5
      h2 3.2	Vitaminas, carbohidratos, aminoácidos y gelificantes

    p.mb-5 Continuando con la descripción de la nutrición celular se describen a continuación las vitaminas, carbohidratos, aminoácidos y gelificantes.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_3/img_4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Vitaminas
              p En plantas superiores, las vitaminas contribuyen en el crecimiento y desarrollo, así como en la catalización de reacciones enzimáticas; la vitamina B1 (tiamina) es quizás la más utilizada, debido a su relevancia en la conversión del ácido pirúvico a acetil CoA, que interactúa con el ciclo de Krebs. También se reconoce la relevancia de otras vitaminas, como es el caso del ácido nicotínico (fundamental para la coenzima NAD y la síntesis de ADN); la vitamina B6 (piroxina), implicada en la transformación de energética de los nutrientes y la respiración; el ácido pantoténico, resulta fundamental para la coenzima A; la biotina, fundamental para el transporte de CO2 y; el ácido fólico, determinante en el transporte de unidades de carbono (Ramos et al, 2021).

      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_3/img_5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Carbohidratos
              p Monosacáridos y disacáridos se presentan como las principales fuentes de carbono en cultivos in vitro; en ese sentido, la formación del nuevo ejemplar debe ser promovida desde la utilización de carbohidratos, en un proceso que estimula el desarrollo de la capacidad de realizar fotosíntesis, siendo la sacarosa el azúcar de mayor uso como fuente de energía por las plantas.

      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_3/img_6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Aminoácidos
              p Son la fuente de nitrógeno para las células, debido a que son de más fácil integración metabólica que el nitrógeno inorgánico; la adición de compuestos de aminoácidos se limita al momento de formación del callo, a razón de ser un estimulante de proliferación celular con relevante importancia en el desarrollo de tejido vegetal.

      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_3/img_7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Gelificantes
              p Son sustancias que pueden o no hacer parte del medio de cultivo, su presencia responde a las necesidades del tipo de explante, así como de los objetivos de producción. En casos en el cual se utilizan células en suspensión, por ejemplo, no se incluyen gelificantes, debido a que dicho medio contiene un importante contenido de complejo nutriente - hormonas de crecimiento y necesita un alto nivel de movilidad para la producción de oxígeno requerido para el crecimiento celular.

    separador
    #t_3_3.titulo-segundo.color-secundario.mt-5
      h2 3.3 Reguladores de crecimiento

    p.mb-5 Dando continuidad a lo relacionado con la nutrición vegetal se presentan a continuación los reguladores de crecimiento.

    .fondo-8.p-5
      .row.mb-5.bg_2
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          img.img-a(src='@/assets/curso/temas/tema_3/img_9.png', alt='Texto que describa la imagen')
        .col-lg-7(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Proceso de diferenciación celular")
              p El logro del proceso de diferenciación celular es el garante del éxito de la micropropagación de material vegetal; la configuración de esto proporciona al ex plante la posibilidad de consolidarse como un individuo autónomo y realizador de fotosíntesis; en dicha transformación es vital abordar el crecimiento y su regulación como aspectos indispensables para la producción vegetativa. 
            div(titulo="Concepto de reguladores de crecimiento")
              p Teniendo la necesidad de brindar soporte vital al tejido vegetal y cierto proceso de tutorado para el desarrollo óptimo de los ejemplares nuevos, es fundamental asumir el concepto de “reguladores de crecimiento” o, en otras palabras, hormonas vegetales; este corresponde a las características del tipo de explante implicado y los objetivos de desarrollo relacionados.
            div(titulo="Orgánicos y sintéticos")
              p Los reguladores de crecimiento pueden ser orgánicos o sintéticos y, en el cultivo in vitro, se adicionan a los medios de cultivo. Entre estos se identifican auxinas, citoquininas, giberelinas, etileno, poliaminas, brasinoesteroides, ácido jasmónico y antioxidantes (Ramos et al, 2021).

      .row.justify-content-center
        .col-lg-9
          .cajon.color-primario.p-4
            p.mb-0 Una vez presentados los reguladores de crecimiento, a continuación, se describirán aspectos relacionados con las unidades de expresión de las sustancias en preparación de cultivo.

      
    




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
