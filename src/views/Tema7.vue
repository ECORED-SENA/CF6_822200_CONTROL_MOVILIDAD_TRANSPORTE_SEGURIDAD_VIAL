<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Fundamentos en evaluación del aprendizaje

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-right") El proceso de enseñanza y de aprendizaje puede enmarcarse en una relación directa entre dicentes y docentes en un entorno rodeado de saberes que comparten de manera bidireccional entre estos dos actores del conocimiento y que se construye a partir de la crítica y la reflexión. La trasmisión del conocimiento es planificada a partir de métodos escogidos para llevar información a través de los medios idóneos y correctos para los estudiantes, estos conocimientos se basan en las necesidades que se conocen a través de procesos de evaluación y se concreta mediante la retroalimentación continua del proceso que revierte en más información, convirtiéndose en un proceso cíclico.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") Ahora bien, para la educación vial el proceso es igual; sin embargo, el conocimiento es dinámico y cambiante por la misma interacción social, la evolución de las tecnologías, la actualización de la normatividad y el crecimiento poblacional, por ende requiere una metodología diferente, una evaluación constante del conocimiento en general y de las formas pedagógicas, didácticas y el trabajo social.
        br
        br
        |Por lo anterior, se debe estar en constante creación de estrategias útiles para el mejoramiento continuo como las que se pueden observar a continuación: 
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema7/img-2.png" data-aos="fade-left" style="max-width: 400px")
    
    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FEE3C0")
          .w-100(data-aos="fade-right")
            img.mx-auto.mb-4(src='@/assets/curso/temas/tema7/img-3.svg' style="max-width: 190px")
            h4.text-center.fw-bold Compara
            p.text-center.mb-0 Lo deseado con lo realizado.
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FEE3C0")
          .w-100(data-aos="fade-right")
            img.mx-auto.mb-4(src='@/assets/curso/temas/tema7/img-4.svg' style="max-width: 190px")
            h4.text-center.fw-bold Da valor
            p.mb-0 Estima cuantitativa y cualitativamente el valor, la importancia o la incidencia de determinados objetos, personas o hechos.
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FEE3C0")
          .w-100(data-aos="fade-left")
            img.mx-auto.mb-4(src='@/assets/curso/temas/tema7/img-5.svg' style="max-width: 190px")
            h4.text-center.fw-bold Describe
            p.mb-0 Con mayor precisión los aspectos cuantitativos y cualitativos de la estructura, el proceso y el producto de la educación.
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FEE3C0")
          .w-100(data-aos="fade-left")
            img.mx-auto.mb-4(src='@/assets/curso/temas/tema7/img-6.svg' style="max-width: 190px")
            h4.text-center.fw-bold Comprueba
            p.mb-0 En qué medida se han logrado los resultados previstos en los objetivos fijados con antelación.
    
    p.mb-5.pb-5(data-aos="fade-right") De este modo, la educación se revierte en un ciclo de mejoramiento constante que emplea herramientas evaluativas para su evolución sistemática y cognitiva, basta con develar el conocimiento actual, ponerlo en práctica, ver su evolución en el tiempo, actualizar los conceptos y repotenciar el saber o la ideología para nuevamente iniciar el ciclo; no obstante, este conocimiento no se desecha, simplemente se actualiza para responder a las necesidades de la actualidad en cada tiempo observable como, por ejemplo, la actualización jurídica que sufrió el Artículo 95 del Código de Tránsito, que posterior a la evaluación jurídica se decidió actualizarlo de la siguiente manera: 

    .d-flex.flex-wrap.position-relative.mb-5
      .col-lg-6.col-xl-5.tarjeta.p-4.mx-auto.position-relative.mb-5(style="background-color: #FFD817" data-aos="fade-right")
        img.mb-4(src='@/assets/curso/temas/tema7/conductor.svg' style="max-width: 67px; margin-top: -3.4rem")
        .d-flex
          h4.py-2.px-3(style="background-color: black; border-radius: 20px; color: white;") Artículo 95 Ley 769 de 2002
        .tarjeta.p-4(style="background-color: white;")
          p.mb-0 Los conductores de este tipo de vehículo deberán transitar por la derecha a un metro de la acera, berma u orilla.
        .tarjeta.tarjeta-edit-flecha.p-4.d-none.d-xl-flex
          p.pe-3.mb-0 Proceso de evaluación y como resultado la nueva norma es:
      .col-12.d-flex.d-xl-none(data-aos="fade-down")
        .col-lg-6.mx-auto.mb-5
          .tarjeta.tarjeta-edit-flecha.p-4
            p.mb-0 Proceso de evaluación y como resultado la nueva norma es:
      .col-lg-6.col-xl-5.tarjeta.p-4.mx-auto.mb-5(style="background-color: #FFD817" data-aos="fade-left")
        img.mb-4(src='@/assets/curso/temas/tema7/conductor.svg' style="max-width: 67px; margin-top: -3.4rem")
        .d-flex
          h4.py-2.px-3(style="background-color: black; border-radius: 20px; color: white;") Artículo 95 Ley 769 de 2002  actualizado por la Ley 1811 de 2016, posterior a la evaluación de la movilidad.
        .tarjeta.p-4(style="background-color: white;")
          p.mb-0 Los conductores que transiten en grupo deberán ocupar un carril y nunca podrán utilizar las vías exclusivas para el servicio público colectivo.
    
    .d-flex.flex-wrap.align-items-center.mb-5.p-4.pe-xl-0(style="background: linear-gradient(90deg, rgba(253,216,167,1) 13%, rgba(255,255,255,1) 39%);")
      img.mb-4.mb-xl-auto.col-xl-4.mx-auto(src='@/assets/curso/temas/tema7/img-7.svg' data-aos="fade-right" style="max-width: 336px")
      p.col-xl-8.mb-0.ps-xl-4(data-aos="fade-left") Como la norma es cambiante, la manera de evaluar este proceso educativo es a través de la retroalimentación, buscando los objetivos claros del aprendizaje al tratarse de capacidades propias para un conocimiento específico, son completamente evaluables, mientras que los discernimientos que entablan la vinculación del aprendizaje que se pretende que los alumnos alcancen con respecto a sus competencias se convierten en un referente focalizado. Los criterios de evaluación obedecen a las necesidades básicas de cada una de las áreas que en cada ciclo tienen un nivel de relevancia para su desarrollo. 
        br
        br
        |De otra parte, el docente en temas de seguridad vial debe conocer los tipos de evaluación educativa para aplicar cuando lo considere necesario en sus clases, donde hay diversidad de propuestas de clasificación de la evaluación en el desarrollo del proceso de enseñanza y aprendizaje. Existen tres clases de evaluación educativa denominadas: #[b evaluación diagnóstica, evaluación formativa y evaluación sumativa], explicadas a continuación:
    
    img.mb-5(src="@/assets/curso/temas/tema7/img-8.svg" data-aos="fade-right")
    .d-flex.justify-content-end.mb-5
      a.anexo.mb-4(:href="obtenerLink('downloads/tiposdeevaluacion.pdf')" target="_blank" data-aos="fade-left")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p Anexo. Tipos de evaluación

    p.mb-0(data-aos="fade-right") Por todo lo expuesto anteriormente, es el docente quien decide el momento de la clase de seguridad vial para aplicar cualquier tipo de evaluación según el caso y el tema, recomendándole terminar la asignatura con la evaluación sumativa en busca de dar soluciones a los problemas que surgen en materia de seguridad vial, ya que en los dicentes pueden encontrarse ideas realmente innovadoras a la problemática diaria.

    

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

<style lang="sass">
.tarjeta-edit-flecha
  position: absolute
  background-color: #FFF1AE
  top: -45px
  right: -80px
  width: 356px
  &::after
    content: ''
    position: absolute
    top: -17%
    right: -29%
    border: 64px solid transparent
    border-left: 64px solid #FFF1AE
  @media (max-width: 1200px)
    position: relative
    top: 0
    right: 0
    width: 100%
    text-align: center
    margin-bottom: 3rem
    &::after
      top: 100%
      right: 50%
      transform: translate(50%)
      border: 50px solid transparent
      border-top: 50px solid #FFF1AE
</style>
