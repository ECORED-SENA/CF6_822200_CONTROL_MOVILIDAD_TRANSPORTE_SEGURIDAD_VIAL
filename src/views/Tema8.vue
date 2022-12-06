<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Valores universales
    
    .d-flex.flex-wrap.align-items-center.mb-5.p-4.ps-xl-5.pb-xl-0(style="background-color: #FFF5C5")
      p.order-2.order-xl-1.col-xl.px-xl-3.mb-0(data-aos="fade-right") Hacen referencia a la Declaración Universal de Derechos Humanos en una carta de normativa internacional expedida por las Naciones Unidas en 1945 y 1948, la cual establece como obligación de todos los gobiernos garantizarlos y promoverlos, siendo los más importantes el derecho a la vida y a la libertad; a no estar sometido ni a la esclavitud, ni a las torturas, sumados a la libertad de opinión y de expresión; a la educación y al trabajo, entre muchos otros.
        br
        br
        |Uno de los derechos fundamentales establecidos por la constitución colombiana es el derecho a la libre locomoción, el cual está descrito en el Artículo 24 de la Constitución Política de Colombia, encontrando que este derecho está regulado por la Ley 769 de 2002 que ya se ha mencionado en el desarrollo de este componente, donde se establecen las normas de comportamiento vial para moverse en el territorio nacional. 
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema8/img-1.svg" data-aos="fade-left" style="max-width: 500px")

    p.mb-5(data-aos="fade-right") Cada una de las personas que se involucran en la movilidad vial deben tomar conciencia de los valores a fortalecer para que las condiciones que obedece el tráfico no conlleven a la manifestación de antivalores que culminan en accidentes de tránsito o en riñas callejeras, como se puede observar con mayor detalle en el siguiente video:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fj9ekN_ew0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg-text-edit.mb-5(data-aos="fade-right")
      img.mx-auto.mx-md-4.mb-4.mb-md-0(src="@/assets/curso/temas/tema8/img-2.svg" style="max-width: 75px")
      p.ps-md-5.col-md.mb-0 Se puede decir, entonces, que el comportamiento humano juega el papel principal en la movilidad vial segura y que su estudio debe partir de la comprensión y relación que tiene la conducción y cómo asociarla a cada conductor, por ejemplo, realizar un esquema con un grupo de conductores, donde se enmarquen las siguientes clasificaciones de acuerdo con su estilo de conducción: 

    ImagenInfografica.color-secundario.mb-5.col-xl-10.mx-auto(data-aos="fade-left" style="position: relative; z-index: 1;")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema8/img-3.svg')

      .tarjeta.p-3(x="2%" y="10%" numero="+" style="background-color: #FFF1AE;")
        p Adaptación al medio y de recolección de información ante el nuevo conocimiento.
      .tarjeta.p-3(x="27%" y="74%" numero="+" style="background-color: #FFF1AE;")
        p Se adquieren habilidades que hacen de la conducción un evento habitual y el conductor se siente más seguro de sí para responder a las eventualidades.
      .tarjeta.p-3(x="56%" y="10%" numero="+" style="background-color: #FFF1AE;")
        p Las personas experimentadas adquieren hábitos de autocuidado, mantienen la calma y respetan las normas de tránsito, normalmente su conducción es segura pero se ven afectados por los afanes del día a día, llegando a realizar una conducción agresiva.
      .tarjeta.p-3(x="80%" y="74%" numero="+" style="background-color: #FFF1AE;")
        p Las personas con gran pericia entran en una zona de confort y alienan su actividad de conducir con hábitos excesivos de confianza, a tal punto que elevan la velocidad de desplazamiento y se convierten en personas riesgosas para los demás usuarios. 

    .d-flex.flex-wrap.align-items-center.mb-5.p-4.pe-xl-0
      img.mb-4.mb-xl-auto.col-xl-5.mx-auto(src='@/assets/curso/temas/tema8/img-4.svg' data-aos="fade-right" style="max-width: 505px")
      p.col-xl-7.mb-0.ps-xl-4(data-aos="fade-left") La mejor manera de mantener la movilidad en un contexto de orden y de respeto por los demás es hacer que las personas afiancen los valores de la convivencia social, incrementando los niveles de tolerancia, aceptación, empatía, autocuidado y paciencia, pero este objetivo se logra tras procesos formativos donde la educación vial juega un papel fundamental; quienes hacen parte del tránsito deben recibir una formación tanto en materia normativa, como de saberes específicos de la conducción, pero a esto se debe sumar un componente axiológico que genere conciencia ciudadana aplicada a la movilidad, de otra parte la formación ética de la persona logrará concretar una sociedad con mayores niveles culturales y definir una comunidad civilizada que actúa de manera independiente, donde no es ajena la movilidad y por ende, se lograría la construcción de relaciones prudentes y respetuosas, facilitando así el tráfico y evitando la accidentalidad vial.

    .d-flex.flex-wrap.align-items-center.mb-5
      p.order-2.order-xl-1.col-xl.pe-xl-4.mb-0(data-aos="fade-right") El buen comportamiento ajustado a la norma es la finalidad precisa que busca la educación vial, además de esculpir en las personas los valores más coherentes para el bienestar común en las relaciones interpersonales a las que se enfrentan en la vía, es justamente por esto que se tiene la convicción que la mejor manera de encontrar el equilibrio y la armonía social en las vías es la educación, ya que ciudadanos formados son más importantes que normas para quienes no se educan. 
      img.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema8/img-5.png" data-aos="fade-left" style="max-width: 400px")
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
