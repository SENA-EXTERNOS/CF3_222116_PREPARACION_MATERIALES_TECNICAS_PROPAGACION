<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Unidades de expresión de las sustancias en preparación de cultivo 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de formulaciones que permitieran obtener el medio de cultivo ideal ocupó gran parte de la atención de la investigación en este campo de la biotecnología durante la segunda mitad del siglo XX; este interés permitió la generación de diversas fórmulas, orientadas para diferentes propósitos, pero en su mayoría fundamentadas en la inserción de sales en cantidades relativamente bajas (Suárez-Padrón, 2020). 

    separador
    #t_4_1.titulo-segundo.color-secundario.mt-5
      h2 4.1 Elementos a utilizar, cálculos de producción en sustancias, nomenclatura y propiedades de componentes

    p.mb-5 En el año de 1962, Toshio Murashige y Floke K. Skoog mientras investigaban requerimientos minerales en el tabaco, obtuvieron una combinación de sales, con altos contenidos de nitrato y amonio, que permitieron alcanzar tasas de crecimiento vegetal de hasta 25 veces más, que las combinaciones usadas tradicionalmente hasta ese momento. El rendimiento sin precedentes de esta formulación, ha permitido que en la actualidad siga siendo el principal medio de cultivo utilizado en el mundo.

    .cajon.color-secundario.mb-5
      .row
        .col-lg-6.d-flex.aliln_1
          .p-5
            p Los componentes del medio de cultivo, regularmente son agua, minerales, compuestos orgánicos y materiales complementarios de soporte; las características generales de cada uno de estos constituyentes se reseñan a continuación.
        .col-lg-6
          img.img-a(src='@/assets/curso/temas/tema_4/img_2.png', alt='Texto que describa la imagen')

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_4/img_3.svg' alt='AvatarTop')
        .tarjeta.bg_5
          .p-4
            h4.text-center Agua
            p.text-center.mb-0 Representa el 95 % del medio y es solvente de todos los solutos adicionados al medio; debe contar con un alto grado de purificación, para lo cual se recurre a mecanismos como destilación, desionización y ósmosis inversa.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_4/img_4.svg' alt='AvatarTop')
        .tarjeta.bg_5
          .p-4
            h4.text-center Minerales
            p.text-center.mb-0 Son los elementos inorgánicos requeridos para el desarrollo de la planta (macro y microelementos), entre los que se encuentran Nitrógeno, Fósforo, Potasio, Magnesio, Azufre, Calcio, Cloro, Sodio, Manganeso, Zinc, Boro, Cobre, Molibdeno, Cobalto, Hierro (Flórez - Hernández #[i et al], 2017).

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_4/img_5.svg' alt='AvatarTop')
        .tarjeta.bg_5
          .p-4
            h4.text-center Compuestos Orgánicos
            p.text-center.mb-0 Compuestos orgánicos conformados por moléculas de átomos de carbono, entre los que se encuentran carbohidratos o fuentes energéticas, vitaminas, reguladores de crecimiento y suplementos pertinentes.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_4/img_5.svg' alt='AvatarTop')
        .tarjeta.bg_5
          .p-4
            h4.text-center Mecanismo de soporte
            p.text-center.mb-0 Existen dos estados posibles de consistencia, que son el líquido y el semisólido; el primero regularmente está conformado por la formulación disuelta en agua, el segundo, corresponde a medios con cierta dureza generada por gelatinizantes, siendo el agar el más utilizado por el grado de dureza e inactividad iónica, que facilita la movilización de nutrientes hacia los tejidos en formación.
    
    .cajon.color-acento-contenido.mb-5
      .row.d-flex
        .col-lg-6.aliln_1
          .p-5.text-small
            p El cálculo de la cantidad de cada componente del medio de cultivo, es otro de los elementos cruciales del proceso; regularmente se expresan en unidades de masa; sin embargo, esto puede no reflejar siempre las diferencias en estructura molecular entre algunos de los componentes, esto debido a que la acción concreta depende de la cantidad de moléculas en el medio, más no del peso del mismo; esta condición se convierte en un factor crítico en los reguladores de crecimiento.
            p Para superar esta posible dificultad, debe realizarse el cálculo de cantidades de componentes en unidades molares, recurriendo a las siguientes fórmulas de conversión (Suárez-Padrón, 2020):
        .col-lg-6
          img.img-a(src='@/assets/curso/temas/tema_4/img_7.png', alt='Texto que describa la imagen')

    separador
    #t_4_2.titulo-segundo.color-secundario.mt-5
      h2 4.2	Aplicación de fórmulas para disolución

    p.mb-5 El desarrollo de las mezclas de nutrientes y elementos complementarios para la consolidación de un medio de cultivo apropiado, se constituye como la base para la generación de las condiciones óptimas de propagación vegetativa; no existe un único método o combinación, se reconocen diversas opciones resultantes de procesos de investigación biotecnológica; los más destacados, se referencian en la siguiente tabla.

    .row.justify-content-center.mb-5
      .col-lg-5
        table.text-center
          thead.thead_1
            tr
              td
              td MS
              td White                      
              td B5
              td WPM
          tbody
            tr.td_1
              td
              td 1650.000
              td
              td
              td 400.000
            
            tr.td_2
              td
              td
              td 300.000 
              td
              td 556.000
            
            tr.td_1
              td
              td 1900.000
              td 80.000 
              td 2500.000
              td
              
            tr.td_2
              td
              td
              td 65.000
              td
              td
            
            tr.td_1
              td
              td
              td
              td 134.000
              td
            
            tr.td_2
              td
              td
              td
              td
              td 99.0000
            
            tr.td_1
              td
              td
              td
              td
              td 170.000
            
            tr.td_2
              td
              td 333.000
              td
              td 150.000
              td 96.000
            tr.td_1
              td
              td 181.000
              td 720.000
              td 250.000
              td 370.000
            
            tr.td_2
              td 
              td 170.000
              td
              td
              td
            
            tr.td_1
              td 
              td 36.700
              td
              td
              td
            
            tr.td_2
              td
              td 6.200
              td 1.500
              td 3.000
              td 6.200
            
            tr.td_1
              td
              td 16.900
              td 7.000   
              td 10.00
              td 22.300
            
            tr.td_2
              td
              td 8.600
              td 3.000
              td 2.000
              td 8.600

            
            tr.td_1
              td
              td 0,830
              td 0,750
              td 0,750
              td
            tr.td_2
              td
              td 0,250	
              td
              td 0,250
              td 0,250

            
            tr.td_1
              td
              td 0,025    
              td                              
              td 0,025
              td 0,250			
            tr.td_2
              td
              td 0,025 
              td
              td 0,025									
              td
            
            tr.td_1
              td
              td
              td
              td 27.800
              td 27.800
            tr.td_2
              td
              td
              td
              td 27.800
              td 27.800
            
            tr.td_1
              td
              td
              td 200.000
              td 150.000
              td
            
            tr.td_2
              td
              td
              td 2.500
              td
              td
            
          



    .fondo-2.p-5
      p.mb-5 Continuando con el planteamiento de Suárez-Padrón (2020), se reconocen tres tipos de formas de preparar los medios de cultivo, las cuales son:
      TabsC.color-secundario.mb-5
        .py-3.py-md-4(titulo="Pesaje de cada componente al momento de preparación de la fórmula").fondo-9
          .row.justify-content-center.align-items-center
            .col-md-4.mb-4.mb-md-0
              img.img-a(src='@/assets/curso/temas/tema_4/img_8.png', alt='Texto que describa la imagen')
            .col-md-6
              h4 Pesaje de cada componente al momento de preparación de la fórmula
              p Es un método complejo, debido a las dificultades de pesaje de algunos componentes, como es el caso de los micronutrientes.
        .py-3.py-md-4(titulo="Preparación de soluciones madre <em>(stock)</em>").fondo-9
          .row.justify-content-center.align-items-center
            .col-md-4.mb-4.mb-md-0
              img.img-a(src='@/assets/curso/temas/tema_4/img_9.png', alt='Texto que describa la imagen')
            .col-md-6
              h4 Preparación de soluciones madre <em>(stock)</em>
              p Este método consiste en realizar una preparación en altas concentraciones, para luego tomar muestras proporcionales a las necesidades y diluirlas en agua.
        .py-3.py-md-4(titulo="Formulaciones premezcladas obtenidas en el mercado").fondo-9
          .row.justify-content-center.align-items-center
            .col-md-4.mb-4.mb-md-0
              img.img-a(src='@/assets/curso/temas/tema_4/img_10.png', alt='Texto que describa la imagen')
            .col-md-6
              h4 Formulaciones premezcladas obtenidas en el mercado
              p Este último método proporciona especificidad en las medidas, pero su uso es limitado por concepto del costo económico asociado.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La comprensión de los diferentes elementos que competen a la propagación del material vegetal, no se limita a la adopción mecánica y reiterada de un tipo de procedimientos a desarrollar en el laboratorio, debe adentrarse el ejercicio sobre la interpretación apropiada de las formas, en las cuales se propende por el establecimiento del cultivo #[i in vitro] y la promoción del crecimiento como condiciones determinantes para sentar las bases del éxito productivo del proceso. Hemos llegado al final de este componente formativo.  Recuerde explorar los demás recursos que se encuentran disponibles, para ello diríjase al menú principal en el cual encontrará la síntesis, la actividad didáctica, material complementario, entre otros.

      
    




</template>

<script>
export default {
  name: 'Tema4',
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
