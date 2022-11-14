<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El presente contenido formativo logra presentar el aspecto más relevante sobre la normatividad en tránsito y transporte como parte fundamental de la seguridad vial, seguido de los fundamentos pedagógicos aplicados al tema de la seguridad vial, presentando conceptos básicos como el de pedagogía y andragogía para la formación de niños y adultos, fundamentados en modelos pedagógicos que buscan formar competencias ciudadanas en tránsito y seguridad vial, repasando la terminología en el tema y los valores universales. Es así como se presenta el siguiente esquema conceptual al respecto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
