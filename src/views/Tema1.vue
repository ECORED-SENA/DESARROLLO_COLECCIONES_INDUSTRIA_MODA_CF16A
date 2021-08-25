<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Introducción al mundo de la ropa interior


    .bloque-texto-b.color-secundario.p-2.mb-5
      .bloque-texto-b__texto.mb-2
        p Las prendas que se conocen como ropa interior son las usadas regularmente debajo de la ropa de calle o externa. Éstas pueden ser elaboradas bajo un cuadro de tallas o personalizadas con tallas propias. Las cuales, son fundamentales en la higiene y cuidado del cuerpo además de simbolizar sensualidad, misterio y seducción.

        p.mb-0 Es importante en este punto diferenciar la corsetería de la lencería y conocer algunas características de ambas técnicas.  La corsetería se define como toda aquella prenda que va por debajo de la ropa de calle y la lencería se refiere sólo a la ropa de cama o para dormir. 
        p Ambas clases de prendas utilizan técnicas de confección diferentes por tradición, pero gracias a las telas de punto en ocasiones se pueden llegar a fusionar. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          .h5.mb-5 Por ejemplo: es posible confeccionar un Brasier (corsetería) al que luego se le unirá un patrón en tela de campana plato dando como resultado un Babydoll (lencería).

          .row.align-items-center
            .col-lg-3.px-0.mx-0
              p.BorTit #[strong Figura:] Brasier
              figure
                img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='Brasier')
            .col-lg-1.px-0.mx-0.d-sm-none.d-lg-block
              .hr.mt-5

            .col-lg-3.px-0.mx-0
              p.BorTit #[strong Figura:] Tul
              figure
                img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='Tul')
            .col-lg-1.px-0.mx-0.d-sm-none.d-lg-block
              .hr.mt-5
            .col-lg-3.px-0.mx-0
              p.BorTit #[strong Figura:] Babydoll
              figure
                img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='Babydoll')

    .row
      .col-lg-7
        .bloque-texto-b.color-secundario.p-2
          .bloque-texto-b__texto.mb-2
            p Una de las funciones de la ropa interior es #[strong dar soporte y comodidad al cuerpo] femenino. El brasier o sostén es una de las prendas fundamentales a la hora de confeccionar ya que en sus terminaciones debe primar la suavidad, es por ello que desde su estructura es necesario incorporar materiales compresores que permitan el soporte, y un espacio con expansión llamado copa que completa la función de cuidar de posibles daños los ligamentos que soportan el busto. El panty, por su lado, tiene la función principal de servir de forma higiénica cubriendo la zona de los genitales.

        p La indumentaria interior masculina también está diseñada de manera especial, para que de igual manera dé soporte y comodidad; estas prendas se caracterizan por la confortabilidad ofrecida a través del diseño, ya que buscan adaptarse a la forma de la parte íntima masculina, para ello, incluye un área cóncava frontal llamada tiro o bragueta (en el caso del bóxer se llama canguro) satisfaciendo así la necesidad de este segmento de mercado.

        p La confección de estas prendas está ligada totalmente a su diseño debido a la variedad y funcionalidad, de tal manera que puedan cumplir con las dos funciones mencionadas anteriormente como son: satisfacer la necesidad de cubrir las partes íntimas del cuerpo ofreciendo protección y que pueda llegar a usarse como medio de conquista. 
        p En este componente se explican y se realizan las operaciones principales de estas prendas con sus modelos básicos.
      .col-lg-5
        p.BorTit #[strong Figura:] Modelos ropa interior
        figure
          img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Babydoll')



  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
