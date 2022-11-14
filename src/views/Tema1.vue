<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad en tránsito y transporte
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-right" style="max-width: 400px")
      p.col-xl.ps-xl-4.mb-0(data-aos="fade-left") La normatividad de tránsito inicia a partir de la Constitución Política de Colombia que establece en el Estado Social de Derecho el respeto de la dignidad humana y la solidaridad son prioridad y prevalece el interés general sobre el particular y, los límites de sus derechos están donde comienzan los demás, por lo cual el ordenamiento jurídico debe ser respetado con ese fin. Por esto, la libre locomoción es un derecho fundamental regulado por la legislación, que para el caso serán todas las normas de tránsito y de transporte que establecen parámetros y normas de comportamiento para los actores viales, donde son fundamentales los niños, las niñas y los adolescentes teniendo prevalencia y por tanto, serán protegidos por todos.
        br
        br
        |De otra parte, la palabra “tránsito” puede definirse como la movilidad de todos y cada uno de los actores viales que recorren las vías en calidad de peatones, conductores o pasajeros, todos con obligaciones respecto a sus comportamientos, las cuales se encuentran establecidas a través del Código Nacional de Tránsito (Ley 769, 2002), que ha sido actualizado constantemente para ajustar temas concernientes a la movilidad; por esto se recomienda consultar la norma directamente desde la fuente oficial que es la Secretaría del Senado, la cual mantiene las actualizaciones vigentes que sufra la norma. 
    
    p.mb-5(data-aos="fade-right") Es así que para dar inicio a este tema tan importante sobre la normatividad en tránsito y transporte se recomienda observar el siguiente video, que puede ayudarle a entender con mayor facilidad.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fBb7pif3fBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.flex-wrap.align-items-center.mb-5.p-4(style="background-color: #FFF5C5")
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") De otra parte, el sector transporte se define como el traslado de personas, animales o cosas de un punto a otro a través de un medio físico, el cual se encuentra regulado en cabeza del Ministerio de Transporte como máxima autoridad en el tema y cuyo objetivo primordial es la formulación y adopción de las políticas, los planes, los programas, los proyectos y la regulación económica en esta materia, estableciendo los parámetros y la regulación técnica en los modos de transporte terrestre marítimo, fluvial, férreo y aéreo, expidiendo varias normas que regulan el sector transporte.
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-left" style="max-width: 505px")

    p.mb-5(data-aos="fade-right") Para conocer más sobre la normatividad en tránsito y transporte revise lo que se expone a continuación:

    img(src="@/assets/curso/temas/tema1/img-3.svg" data-aos="fade-left")    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
