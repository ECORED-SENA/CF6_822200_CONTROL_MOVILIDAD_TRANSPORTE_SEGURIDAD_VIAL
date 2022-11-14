<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos de andragogía y formación preescolar en seguridad vial

    .bloque-texto-g.color-primario.p-3.p-sm-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-right") Los seres humanos se encuentran en un proceso constante de aprendizaje, desde el día de su nacimiento hasta el día de su muerte, entendiendo que nunca se para de aprender, todos los días hay una oportunidad de adquirir nuevos conocimientos. Para el caso específico de impartir formación sobre el control de movilidad, el transporte, la normatividad y la seguridad vial debe tenerse en cuenta, por ejemplo, que la educación de los niños, las niñas y los adolescentes debe ir enfocada a la enseñanza sobre el respeto de las normas de comportamiento vial y las obligaciones de cada uno de los actores viales, ya sea como conductor, pasajero o peatón, utilizando didácticas acordes a cada uno de los tipos de edades, utilizando estrategias didácticas activas y recursos didácticos como juegos en seguridad vial, impresos como cuentos y revistas infantiles, videos relacionados con el tema, auditivos como el reconocimiento de las señales sonoras de emergencia, equipos y herramientas como vehículos, bicicletas patinetas, patines, entre otros, que le permitan a los niños y los jóvenes asimilar los conceptos a través de todos sus sentidos.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") En cambio, la educación sobre seguridad vial para personas adultas debe generar recordación y para ello, es necesario mover las emociones de las personas, así que debe ir encaminada a dejarle un aprendizaje de por vida en un tema tan necesario para la sociedad como lo es la seguridad vial y los buenos hábitos en esta materia, ya que esto previene accidentes que pueden costar su vida.
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-2.png" data-aos="fade-left" style="max-width: 400px")
    
    .bg-edit-text-img.mb-2
      p.mb-4.position-relative(data-aos="fade-right") Aterrizando el tema en Colombia, es importante reconocer el aspecto poblacional y cultural de la zona donde posteriormente se aplique lo aprendido, es decir, se debe conocer la problemática general y las cifras de accidentalidad vial del municipio donde resida o donde se vaya a trabajar en este tipo de funciones, con el fin de lograr conectarlo con su día a día, por lo cual se presenta el siguiente dato del índice poblacional actual del país:
      .d-flex.flex-wrap.justify-content-between.position-relative
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema3/img-3.svg" data-aos="fade-right" style="max-width: 231px")
        img(src="@/assets/curso/temas/tema3/img-4.svg" data-aos="fade-left" style="max-width: 761px")
    p.mb-5.px-4.py-2(style="background-color: #E1EAF4;") Nota. Tomado de DANE (2021).

    .d-flex.flex-wrap.align-items-center.mb-5.p-4.pb-xl-0(style="background-color: #FFF6E9")
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") Un aforismo muy utilizado en el tema del civismo y comportamiento ciudadano según lo dijo Pitágoras 24 siglos atrás, en los cimientos de la sociedad, donde aún en la actualidad no es difícil encontrar en diferentes escenarios académicos y artísticos la siguiente frase “Educad a los niños y no será necesario castigar a los hombres”, siendo los niños la base de la próxima generación de actores viales quienes deben ser correctamente formados en el tema de la seguridad vial y los actores viales en calidad de adultos deben ser corregidos, y para esto hay actividades de prevención o aplicación de la norma como lo establece el Código de Tránsito al definir las posibles infracciones de tránsito. 
        br
        br
        |Se puede concluir, entonces, que el docente o instructor en seguridad vial debe dominar las técnicas pedagógicas para la educación de los niños y los conceptos de andrología para la educación de los adultos, siendo el común denominador el tema de prevenir riesgos para evitar accidentes de tránsito y con ello, muertes.
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-5.svg" data-aos="fade-left" style="max-width: 377px")
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
.bg-edit-text-img
  overflow: hidden
  background-color: #FFF5C5
  border-radius: 5px
  padding: 3rem 6rem
  position: relative
  &::after
    position: absolute
    content: ''
    top: 3rem
    left: 1rem
    width: 100px
    height: 20px
    border-radius: 20px
    background-color: #313131
    transform: rotate(-45deg)
  &::before
    position: absolute
    content: ''
    left: -3rem
    bottom: 3rem
    width: 400px
    height: 80px
    border-radius: 80px
    background-color: #FDD98F
    transform: rotate(-45deg)
  @media (max-width: 991px)
    padding: 2rem
    &::after
      display: none
</style>
