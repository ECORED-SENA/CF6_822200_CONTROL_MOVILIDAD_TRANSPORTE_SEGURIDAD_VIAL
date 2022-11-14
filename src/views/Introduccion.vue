<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.align-items-center.mb-5(data-aos="fade-right")
      img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/img-1.svg" style="max-width: 87px")
      p.col-md.ps-md-4.mb-0 Estimado aprendiz es momento de continuar con el desarrollo de aprendizaje, orientado a conocer todo sobre la normatividad vigente en materia de tránsito y transporte existente. Al igual que conocer sobre los procesos pedagógicos para orientar a aquellas personas interesadas en la movilidad vial, cuya finalidad es dar seguridad a las personas que transitan por las diferentes vías del territorio nacional. Por lo anterior, se invita a revisar el siguiente video para identificar el contexto de aprendizaje.
    
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/G1SNF6ymXE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
