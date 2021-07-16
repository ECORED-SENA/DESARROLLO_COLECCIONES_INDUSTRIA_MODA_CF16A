<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3 
      h1 Ejercicio pegar elásticos panty, bóxer y brasier

    .bloque-texto-b.color-secundario.p-2.mb-5
      .bloque-texto-b__texto.mb-2
        p La forma de pegar los elásticos a las prendas de ropa interior depende de factores como el acabado, el recogido, o el cubrimiento de este. Las técnicas para hacerlo usualmente se dividen en cuatro (4) y se pueden realizar tanto en una máquina familiar como en máquinas industriales (zigzag sencillo, zigzag triple, recubridora fileteadora) utilizando guías aéreas y folders como ayuda para que el acabado y apariencia quede mejor logrando su cometido. Algunas de estas técnicas se hacen en un solo paso y otras en dos pasos. 

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-3 
          .row.align-items-center
            .col-lg-5
              p.BorTit1 Figura: Costura plana
              figure
                img.img-a(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')
            .col-lg-7
              p #[strong La puntada] utilizada es en su mayoría de dimensión mediana, pero el tamaño dependerá del ancho del elástico.

              p #[strong El hilo] debe ser #[strong poliéster] para una mayor resistencia y que aporte a la elasticidad de los materiales. 

              p A continuación, se explica el paso a paso de cada una de estas técnicas.

    .row.justify-content-center
      .col-lg-10
        .jumbo_3.p-4
          figure.mb-5
            img.img-a(src='@/assets/curso/tema_3/img_2.png', alt='Texto que describa la imagen')

          TabsB.color-acento-contenido.mb-5
            .py-4.py-md-5.px-4.tarj-azul(titulo="Elástico girado" :icono="require('@/assets/curso/tema_3/img_3.png')")
              .row
                .col-md-7.mb-4.mb-md-0
                  h5 Elástico girado
                  p En esta técnica se utiliza elástico picot en el cual tiene dos bordes uno liso y el otro con moras, ondas o picos, y algunos de ellos adornado con hilos Lurex que le dan un acabado brillante. 
                  p Se realizan dos pasos: 

                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Primero se trabaja el lado derecho de la tela sobre el borde (piernas, cinturas o sisa o escotes) una vez este esté igualado con el borde liso del elástico se procede a realizar una costura en zigzag un poco antes de la mora del elástico.
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Después se gira al revés de la prenda y otra vez se hace una costura en zigzag en el borde opuesto al ya hecho para fijarlo.
              
                .col-md-5
                  .row
                    .col-lg-2
                      figure.mb-5
                        img.img-a(src='@/assets/curso/tema_3/img_4.png', alt='Texto que describa la imagen')
                    .col-lg-10
                      p Para esta técnica las márgenes de costura son de 5 milímetros.
                  figure.mb-3
                    img.img-a(src='@/assets/curso/tema_3/img_5.png', alt='Texto que describa la imagen')
                  figure
                    img.img-a(src='@/assets/curso/tema_3/img_6.png', alt='Texto que describa la imagen')
                    
            .py-4.py-md-5.px-4.tarj-azul(titulo="Elástico para envivar o sesgar" :icono="require('@/assets/curso/tema_3/img_3.png')")
              .row
                .col-md-7
                  h5 Elástico para envivar o sesgar
                  p Esta técnica se realiza con un elástico de 1,4 cm y posee un canal en el medio que permite el doblado haciendo las veces de sesgo, con la diferencia de que ese es elastizado, esto se produce por la falta de un hilo en toda la parte media lo que permite su fácil doblado envolviendo el material a ambos lados dando un acabado de calidad. Este va en maquina zigzag o en recubridora a dos agujas con folder y base guía en L.
                .col-md-5.mb-4.mb-md-0
                  .row
                    .col-lg-2
                      figure.mb-5
                        img.img-a(src='@/assets/curso/tema_3/img_4.png', alt='Texto que describa la imagen')
                    .col-lg-10
                      p No tiene margen de costura debido a que va al borde de la prenda.
                  figure.mb-3
                    img.img-a(src='@/assets/curso/tema_3/img_7.png', alt='Texto que describa la imagen')
              
            .py-4.py-md-5.px-4.tarj-azul(titulo="Elástico Embutido" :icono="require('@/assets/curso/tema_3/img_3.png')")
              .row
                .col-md-7.mb-4.mb-md-0
                  h5 Elástico Embutido
                  p Este tipo de pegado de elástico se ejecuta en prendas deportivas y en algunas de ropa interior que lo requieran y se realiza en 2 pasos. 

                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Primero se coloca el elástico en el borde de la prenda por el revés de esa y con puntada de zigzag se unen por el borde externo de la prenda. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Luego se cubre el elástico con la tela y se cose nuevamente con zigzag simple o triple, pero esta vez sujetando el borde interno de la prenda quedando el elástico escondido y sujetado por la tela, otra variante del paso uno es filetear el borde de la tela con el elástico como se hace en el bóxer clásico. 
              
                .col-md-5
                  .row
                    .col-lg-2
                      figure.mb-5
                        img.img-a(src='@/assets/curso/tema_3/img_4.png', alt='Texto que describa la imagen')
                    .col-lg-10
                      p El segundo paso se asienta en recubridora o maquina resortadora.
                  figure.mb-3
                    img.img-a(src='@/assets/curso/tema_3/img_8.png', alt='Texto que describa la imagen')
                  figure
                    img.img-a(src='@/assets/curso/tema_3/img_9.png', alt='Texto que describa la imagen')

            .py-4.py-md-5.px-4.tarj-azul(titulo="Elástico apoyado o expuesto" :icono="require('@/assets/curso/tema_3/img_3.png')")
              .row
                .col-md-7
                  h5 Elástico apoyado o expuesto
                  p.mb-0 Para esta técnica el elástico se fija a la prenda en el borde de esta con recubridora para Bóxer o en zigzag triple para pantys. 
                  p El elástico queda en el derecho unido al borde del tela y al igual que en la técnica de envivar o sesgar.
                .col-md-5.mb-4.mb-md-0
                  .row
                    .col-lg-2
                      figure.mb-5
                        img.img-a(src='@/assets/curso/tema_3/img_4.png', alt='Texto que describa la imagen')
                    .col-lg-10
                      p No tiene margen de costura.
                  figure.mb-3
                    img.img-a(src='@/assets/curso/tema_3/img_10.png', alt='Texto que describa la imagen')




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

<style lang="sass" scoped></style>
