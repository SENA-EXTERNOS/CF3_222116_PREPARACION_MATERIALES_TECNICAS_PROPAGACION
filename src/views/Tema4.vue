<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Unidades de expresión de las sustancias en preparación para el cultivo

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de formulaciones que permitieran obtener el medio de cultivo ideal, ocupó gran parte de la atención de la investigación en el campo de la biotecnología, durante la segunda mitad del siglo XX; este interés permitió la generación de diversas fórmulas, orientadas para diferentes propósitos, pero en su mayoría, fundamentadas en la inserción de sales en cantidades relativamente bajas. (Suárez-Padrón, 2020).

    .row.mt-5
      h3 Elementos a utilizar, cálculos de producción en sustancias, nomenclatura y propiedades de componentes

    p.mb-5 Mientras en 1962, Toshio Murashige y Floke K. Skoog, investigaban requerimientos minerales en el tabaco, obtuvieron una combinación de sales, con altos contenidos de nitrato y amonio, que permitieron alcanzar tasas de crecimiento vegetal, hasta 25 veces más que las combinaciones usadas tradicionalmente hasta ese momento. El rendimiento sin precedentes de esta formulación, ha permitido que, en la actualidad, siga siendo el principal medio de cultivo utilizado en el mundo.

    .cajon.color-secundario.mb-5
      .row
        .col-lg-6.d-flex.aliln_1
          .p-5
            p Por lo general, los componentes para un medio de cultivo son: agua, minerales, compuestos orgánicos y materiales complementarios de soporte; las características generales de cada uno de ellos, se conocen a continuación.
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
            p.text-center.mb-0 Son los elementos inorgánicos requeridos para el desarrollo de la planta (macro y microelementos), entre los que se encuentran Nitrógeno, Fósforo, Potasio, Magnesio, Azufre, Calcio, Cloro, Sodio, Manganeso, Zinc, Boro, Cobre, Molibdeno, Cobalto, Hierro (Flórez – Hernández, et al., 2017).

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_4/img_5.svg' alt='AvatarTop')
        .tarjeta.bg_5
          .p-4
            h4.text-center Compuestos Orgánicos
            p.text-center.mb-0 Los compuestos orgánicos están conformados por moléculas de átomos de carbono, entre los que se encuentran carbohidratos o fuentes energéticas, vitaminas, reguladores de crecimiento y suplementos pertinentes.

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
            p El cálculo de la cantidad de cada componente para el medio de cultivo, es otro de los métodos cruciales del proceso; regularmente se expresan en unidades de masa, sin embargo, esto puede no reflejar siempre las diferencias en la estructura molecular entre algunos de los componentes; se debe a que la acción concreta depende de la cantidad de moléculas en el medio, más no en el peso del mismo y esta condición se convierte en un factor crítico en los reguladores de crecimiento.
            p Para superar esta posible dificultad, debe realizarse el cálculo de cantidades de componentes en unidades molares, recurriendo a las siguientes fórmulas de conversión (Suárez-Padrón, 2020):

        .col-lg-6
          img.img-a(src='@/assets/curso/temas/tema_4/img_7.png', alt='Texto que describa la imagen').left-tema3

    .row.mt-5
      h3 Aplicación de fórmulas para disolución

    p.mb-5 El desarrollo de las mezclas de nutrientes y elementos complementarios para la consolidación de un medio de cultivo apropiado, se constituye como la base para la generación de las condiciones óptimas de propagación vegetativa; no existe un único método o combinación, se reconocen diversas opciones resultantes de procesos de investigación biotecnológica; los más destacados, se referencian en la siguiente tabla.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1
          p <em>Macro y micronutrientes</em>  
        table.text-center
          caption <b>Nota:</b> Tabla adaptada de Mezclas de Suárez (2020), Macro y micronutrientes, p. 51.
          thead.thead_1
            tr
              td Componente <br>(mg L <sup>-1</sup>)
              td MS
              td White                      
              td B5
              td WPM
          tbody
            tr.td_1
              td <b>NH<sub>4</sub>NO<sub>3</sub></b>
              td 1650.000
              td
              td
              td 400.000
            
            tr.td_2
              td <b>Ca(N0<sub>3</sub>)<sub>2</sub>4H<sub>2</sub>O</b>
              td
              td 300.000 
              td
              td 556.000
            
            tr.td_1
              td <b>KNO<sub>3</sub></b>
              td 1900.000
              td 80.000 
              td 2500.000
              td
              
            tr.td_2
              td <b>KCL</b>
              td
              td 65.000
              td
              td
            
            tr.td_1
              td <b>(NH<sub>4</sub>)<sub>2</sub>4SO<sub>4</sub></b>
              td
              td
              td 134.000
              td
            
            tr.td_2
              td <b>K<sub>2</sub>SO<sub>4</sub></b>
              td
              td
              td
              td 99.0000
            
            tr.td_1
              td <b>KH<sub>2</sub>PO<sub>4</sub></b>
              td
              td
              td
              td 170.000
            
            tr.td_2
              td <b>CaCl<sub>2</sub>2H<sub>2</sub>O</b>
              td 333.000
              td
              td 150.000
              td 96.000
            tr.td_1
              td <b>MgSO<sub>4</sub>7H<sub>2</sub>O</b>
              td 181.000
              td 720.000
              td 250.000
              td 370.000
            
            tr.td_2
              td <b>KH<sub>2</sub>PO<sub>4</sub></b>
              td 170.000
              td
              td
              td
            
            tr.td_1
              td <b>FeNaEDTA</b>
              td 36.700
              td
              td
              td
            
            tr.td_2
              td <b>H<sub>2</sub>BO<sub>3</sub></b>
              td 6.200
              td 1.500
              td 3.000
              td 6.200
            
            tr.td_1
              td <b>MnSO<sub>4</sub>H<sub>2</sub>0</b>
              td 16.900
              td 7.000   
              td 10.00
              td 22.300
            
            tr.td_2
              td <b>ZnSO<sub>4</sub>H<sub>2</sub>0</b>
              td 8.600
              td 3.000
              td 2.000
              td 8.600

            
            tr.td_1
              td <b>Kl</b>
              td 0,830
              td 0,750
              td 0,750
              td
            tr.td_2
              td <b>Na<sub>2</sub>MoO<sub>4</sub>2H<sub>2</sub>O</b>
              td 0,250	
              td
              td 0,250
              td 0,250

            
            tr.td_1
              td <b>CuSO<sub>4</sub>5H<sub>2</sub>O</b>
              td 0,025    
              td                              
              td 0,025
              td 0,250			
            tr.td_2
              td <b>CoCl<sub>2</sub>6H<sub>2</sub>O</b>
              td 0,025 
              td
              td 0,025									
              td
            
            tr.td_1
              td <b>FeSO<sub>4</sub>7H<sub>2</sub>O</b>
              td
              td
              td 27.800
              td 27.800
            tr.td_2
              td <b>Na<sub>2</sub>EDTA</b>
              td
              td
              td 27.800
              td 27.800
            
            tr.td_1
              td <b>NaH<sub>2</sub>PO<sub>4</sub>H<sub>2</sub>O</b>
              td
              td 200.000
              td 150.000
              td
            
            tr.td_2
              td <b>Fe<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub></b>
              td
              td 2.500
              td
              td
            
          



    .fondo-2.p-5
      p.mb-5 Continuando con el planteamiento de Suárez-Padrón (2020), se reconocen tres métodos para preparar los medios de cultivo; estos son:

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
          p.mb-0 El conocimiento de los diferentes elementos que corresponden con la propagación del material vegetal, no se limita a la adopción mecánica y reiterada de un tipo de procedimientos a desarrollar en el laboratorio; se debe profundizar en el ejercicio sobre la interpretación apropiada de las formas, en las cuales se propende por el establecimiento del cultivo <em>in vitro</em> y la promoción del crecimiento, como condiciones determinantes para sentar las bases del éxito productivo del proceso. Hemos llegado al final de este componente formativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.
          
    




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
