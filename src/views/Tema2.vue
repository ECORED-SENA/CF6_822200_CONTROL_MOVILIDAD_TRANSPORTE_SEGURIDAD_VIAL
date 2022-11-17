<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos pedagógicos en seguridad vial

    .d-flex.flex-wrap.align-items-center.mb-5
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") Teniendo en cuenta lo que menciona el Ministerio de Educación Nacional, la pedagogía se define como el saber de los docentes para orientar los procesos de formación de las personas, especialmente de niños y jóvenes, donde el docente genera una relación personal sobre lo que acontece diariamente en el trabajo con los alumnos, las alumnas y los colegas, para lograr el desarrollo humano y la construcción del conocimiento en ellos. 
        br
        br
        |Los fundamentos pedagógicos se definen como “todos aquellos principios y conocimientos del área de la pedagogía, que permitirán al docente conocer los métodos de enseñanza y aprendizaje que podrá utilizar durante su labor como pedagogo” ( IMEI , 2019), por lo cual son la base de la educación donde el formador es quien propicia los espacios de análisis, reflexión y práctica.
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" style="max-width: 400px")
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-4.col-xl-3.px-md-2.d-flex
        .tarjeta.p-5(style="background-color: #FEF0DE")
          img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 190px" data-aos="fade-right")
          h4.text-center(data-aos="fade-left") Guardia de tráfico
      .col-lg-4.col-xl-3.px-md-2.d-flex
        .tarjeta.p-5(style="background-color: #FEF0DE")
          img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 190px" data-aos="fade-right")
          h4.text-center(data-aos="fade-left") Lecciones sobre el tráfico
      .col-lg-4.col-xl-3.px-md-2.d-flex
        .tarjeta.p-5(style="background-color: #FEF0DE")
          img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 190px" data-aos="fade-right")
          h4.text-center(data-aos="fade-left") Enseñar sobre las señales de tránsito
    
    .d-flex.flex-wrap.align-items-center.mb-5.p-4.tarjeta(style="background-color: #E8E8E8")
      p.order-2.order-xl-1.col-xl.pe-xl-5.mb-0(data-aos="fade-right") Ahora bien, los fundamentos pedagógicos en seguridad vial son los determinados por las normas de comportamiento vial y demás que regulan el tránsito y el transporte llevadas a ambientes educativos donde es el docente quien debe aterrizar estos temas bajo un contexto pedagógico en seguridad vial, reconociendo que el expositor o persona encargada de dar la orientación debe tener claro los conceptos a explicar y reconocer el público al cual se va a dirigir, ya que hablar de seguridad vial es un tema donde debe manejarse la realidad social y cultural de la movilidad del país. Las actividades pedagógicas que se pretendan realizar sobre este tema deben ser acordes a la etapa de la vida del grupo a ser capacitado, es por esto que se debe tener en cuenta lo establecido por el (Ministerio de Salud y Protección Social, 2022), frente al ciclo de vida que es un enfoque que permite entender las vulnerabilidades y las oportunidades de invertir durante etapas tempranas del desarrollo humano; reconoce que las experiencias se acumulan a lo largo de la vida y las conductas de una generación de actores viales repercutirán en otras personas, las cuales pueden estar en algún ciclo de la vida. 
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema2/img-5.svg" data-aos="fade-left" style="max-width: 333px")
    
    p.mb-5(data-aos="fade-right") Por esta razón, orientar o educar sobre seguridad vial debe caracterizarse según el tipo de personas a capacitar, ya que ellas pueden estar en cualquiera de las etapas del desarrollo que se exponen a continuación:

    img.mb-5(src="@/assets/curso/temas/tema2/img-6.png" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Por lo anterior, el instructor para el caso SENA o docente para otras entidades que forme en seguridad vial debe estar preparado en las características que debe contener la planeación del aprendizaje en educación vial, como la prevención de la accidentalidad vial, la formación de hábitos y comportamientos seguros en la vía a cualquier tipo de público que le sea asignado como dicentes, utilizando las herramientas pedagógicas y didácticas necesarias para cada caso, dependiendo de la etapa en la que se encuentren.
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
