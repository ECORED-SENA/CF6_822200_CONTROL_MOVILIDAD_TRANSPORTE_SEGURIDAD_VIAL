<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fundamentos sobre competencias ciudadanas en tránsito y seguridad vial

    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-6.order-2.order-xl-1.pe-xl-4(data-aos="fade-right") La vida de los seres humanos en sociedad requiere que todos y cada uno de los integrantes de una comunidad tengan una serie de habilidades cognitivas emocionales y comunicativas para vivir en armonía con los demás, a lo que se le denomina competencias ciudadanas; al aterrizar este concepto al ámbito que se está abordando sobre tránsito y seguridad vial se debe hacer referencia al conocimiento y las habilidades que tiene cada uno de los actores viales, llámese “conductor, pasajero o peatón”, al utilizar la vía para desplazarse de un sitio a otro de la forma más segura y responsable, a lo que se le llama norma de comportamiento, generando un ambiente armónico en la movilidad.
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema5/img-1.png" data-aos="fade-left" style="max-width: 610px")
    
    .bg-text-edit-right.mb-5(data-aos="fade-left")
      p.pe-md-5.col-md.mb-0.order-2.order-md-1 Estas normas de comportamiento vial se encuentran establecidas en el Código Nacional de Tránsito, el cual en su Título III establece las reglas de comportamiento vial para los conductores, los peatones y los pasajeros, describiendo los comportamientos que deben tener cada uno de estos actores viales al movilizarse por la vía y aclarando las limitaciones y prohibiciones específicas, que al no ser acatadas en esta misma norma establece algunos de los comportamientos como infracciones de tránsito; vea esto con mayor profundidad: 
      img.mx-auto.mx-md-4.mb-4.mb-md-0.order-1.order-md-2(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 70px")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Comportamiento vial
    
    .tarjeta.tarjeta--azul.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2_1.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
      data-aos="fade-left"
    )
      SlyderA(tipo="b")
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Peatones
            p La norma de comportamiento vial establece que deben transitar por la acera o anden y si requieren cruzar la vía lo harán por las bocacalles, sitios en los cuales tendrán prelación o haciendo el correcto uso de puentes o pasos peatonales; en perímetros rurales los peatones transitarán por la berma y como recomendación de seguridad vial en sentido contrario al paso peatonal.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-3.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Pasajeros
            p Se pueden definir como las personas distintas al conductor de un vehículo, que pagaron su pasaje para transportarse en un vehículo de servicio público, tienen unas normas de comportamiento en los automotores como son: no llevar objetos, animales o equipajes que puedan incomodar a los demás, ni utilizar expresiones injuriosas, groseras, promover riñas, tomar bebidas embriagantes o fumar en el vehículo de servicio público, estas son las principales normas de comportamiento de este actor vial.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-4.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Conductores de vehículos automotores y no automotores
            p La norma de comportamiento vial les exige competencias específicas para la conducción de dichos vehículos, siempre respetando las normas de tránsito y de comportamiento ciudadano, la señalización horizontal y vertical para cada una de las vías, dando prelación a los actores viales más vulnerables.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-5.png' style="max-width: 537px")
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
