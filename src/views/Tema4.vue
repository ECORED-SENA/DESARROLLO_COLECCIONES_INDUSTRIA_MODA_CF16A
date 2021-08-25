<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Elaboración de muestras físicas: panty, bóxer y brasier

    .bloque-texto-b.color-secundario.p-2.mb-5
      .bloque-texto-b__texto.mb-2
        p Las prendas de ropa interior se pueden clasificar según la superficie que cubre del cuerpo (torso o área debajo de la cintura) ya sea diseñada para cubrir el área torácica, el área pélvica, la región abdominal, alguna sección de las extremidades inferiores o una combinación de las anteriores. Los diferentes modelos de ropa interior pueden ser clasificados dentro de la moda masculina o dentro de la moda femenina, normalmente se adaptan a la forma y necesidad de comodidad en el área genital y la región del torso. La ropa interior femenina suele ser colectivamente referida como lencería, y la masculina solo como interior incluyendo entre ellas algunas prendas que también suelen usarse como exterior. 

        p A continuación, se explicarán las operaciones de confección de algunas de ellas.

    p.BorTit1 #[strong Figura:] Costura plana
    .tarjeta.tarjeta_img.p-4.mb-5
      SlyderA
        .row
          figure
            img(src='@/assets/curso/tema_4/img_2.png', alt='Texto que describa la imagen')

        div
          figure
            img(src='@/assets/curso/tema_4/img_3.png', alt='Texto que describa la imagen')

        div
          figure
            img(src='@/assets/curso/tema_4/img_4.png', alt='Texto que describa la imagen')
        
        div
          figure
            img.img-a(src='@/assets/curso/tema_4/img_5.png', alt='Texto que describa la imagen')

    separador
        
    .titulo-segundo
      #t_4_1.h2 4.1  Elaboración muestras físicas de panty  

    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-primario.p-4
          .row
            .col-lg-6
              p.mb-0 Para realizar las operaciones en la ropa interior lo primero que se debe tener en cuenta es que éstas se caracterizan por el tipo de tejido, en donde algunos tienen mucha elongación por lo que se requiere el uso de máquinas, aditamentos, accesorios y ajustes especiales (adecuados) para dichos tejidos.
              p El panty es una de las prendas de mayor reconocimiento en la ropa interior y tiene muchas formas estructurales. 

              p En la elaboración de estas muestras se hará un panty brasilero con sesgo elástico y un panty clásico, dando a conocer cada una de sus operaciones (paso a paso).

            .col-lg-6
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_4/img_6.png', alt='Texto que describa la imagen')

    

    .row.justify-content-center
      .col-lg-4
        h4.text-center Elaboración muestra física de panty


    .row.mb-5.p-4#MapaGroup_03 
      .col-lg-6
        button.Buton_g.show.ClasePripiaBtn.collapsed.collapse(data-bs-toggle='collapse' data-bs-target='#collapse05, #f5' aria-expanded='true' aria-controls='#collapse05' @click="collapsableSeleccionado='collapse05'" ) 
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_70.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup_03')  
        img#f5.img-a.collapse.show(data-bs-parent='#MapaGroup_03')(src='@/assets/curso/tema_4/img_69.svg', alt='')
      .col-lg-6
        button.Buton_g.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse06, #f6' aria-expanded='false' aria-controls='#collapse06' @click="collapsableSeleccionado='collapse06'")
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_71.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup_03') 
        img#f6.img-a.collapse(data-bs-parent='#MapaGroup_03')(src='@/assets/curso/tema_4/img_69.svg', alt='')

      #collapse05.collapse.show(data-bs-parent='#MapaGroup_03')
        .row.mt-5.justify-content-center
          .col-lg-11
            .tarjeta.tarjeta--azul.p-4.mb-5
              LineaTiempoC.color-acento-botones
                .row.justify-content-center(titulo="Tanga")
                  p Observe el video que se presenta a continuación en donde se muestra el proceso de elaboración de una muestra física. 

                  p.mb-5 Descargue el PDF para conocer instrucciones detalladas sobre el paso a paso que le permitirá ampliar la información para la confección de esta prenda.

                  .col-lg-5.mb-5
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/G4IGF6OvFSQ" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[strong Enlace web.] Vídeo confección tanga
                
                  

                  .row.justify-content-center
                    .col-lg-12
                      .tarjeta.color-primario.p-3.mb-3
                        .row.justify-content-around.align-items-center
                          .col-3.col-sm-2.col-lg-1
                            img(src="@/assets/curso/tema_4/img_9.png")
                          .col
                            .row.justify-content-between.align-items-center
                              .col.mb-3.mb-sm-0
                                h3.mb-1 Instructivo confección tanga
                                p.text-small Infografía con los pasos para la elaboración de la muestra física. 
                              .col-sm-auto
                                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/INFOGRAFIA_TANGA_PASO_A_PASO.pdf')" target="_blank")
                                  span Descargar
                                  i.fas.fa-file-download

      #collapse06.collapse(data-bs-parent='#MapaGroup_03')
        .row.mt-5.justify-content-center
          .col-lg-11
            .tarjeta.tarjeta--azul.p-4.mb-5
              LineaTiempoC.color-acento-botones
                .row(titulo="Paso 1")
                  .col-md-8.mb-md-0
                    

                    .cajon.color-acento-contenido.p-4.mb-3 
                      .row
                        .col-lg-8
                          p Para este ejercicio cada paso corresponde a una operación que se debe realizar dentro del proceso. Empecemos…
                        .col-lg-4
                          figure
                            img.img-a(src='@/assets/curso/tema_2/img_5.svg', alt='Texto que describa la imagen')

                    .h4.text-center Paso 1. Identificación de piezas

                    p Para el alistamiento de la confección del panty clásico se necesita tener las piezas  dispuestas para ello como son: 
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-check
                        | Posterior
                      li 
                        i.fas.fa-check
                        | Delantero
                      li 
                        i.fas.fa-check
                        | 2 mariposas o refuerzos
                    
                    p.BorTit1 #[strong Figura.] Armado de bombacha 
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_10.png', alt='Texto que describa la imagen')
                
                .row.justify-content-center(titulo="Paso 2")
                  .col-md-7.mb-md-0
                    .h4.text-center Paso 2. Operaciones de preparación: unir #[br]refuerzo posterior
                    p.mb-0 Se inicia con las operaciones de preparación uniendo ambas partes del refuerzo por el extremo que va al posterior la parte más ancha, estas están revés con revés, se toma el posterior y se coloca derecho con derecho el refuerzo, haciendo coincidir las 3 telas que se unirán en fileteadora. 
                    p Se revisa que queden iguales las 3 telas sin sobrantes y bien unidas.

                     
                  .col-md-4
                    p.BorTit1 #[strong Figura:] Armado de bombacha
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_11.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 3")
                  .col-md-7.mb-md-0
                    .h4.text-center Paso 3. Operaciones de preparación: unir refuerzo #[br]delantero
                    p Para realizar estas operaciones primero se monta el delantero por el derecho de la tela de refuerzo, coincidiendo la mariposa o refuerzo; luego voltear el refuerzo que queda en la parte de abajo y traerlo encima del delantero haciendo coincidir las 3 telas, entalegando. 

                    p Filetear con puntada sencilla asegurándose de que las 3 piezas queden alineadas. 

                     
                  .col-md-4
                    p.BorTit1 #[strong Figura:] Armado de bombacha
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_12.png', alt='Texto que describa la imagen')
                
                .row.justify-content-center(titulo="Paso 4")
                  .col-md-7.mb-md-0
                    .h4.text-center Paso 4. Sesgar entrepiernas
                    p Tomando los costados del panty derecho con derecho del delantero y del posterior, filetear con filete sencillo cuidando que queden muy bien las costuras, sin sobrantes en pierna o cintura.

                     
                  .col-md-4
                    p.BorTit1 #[strong Figura:] Armado de bombacha
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 5")
                  .col-lg-7
                    .h4.text-center Paso 5. Cerrar costados
                    p Esta operación se realiza con una de las técnicas de elastizado teniendo en cuenta el margen de costura descrito en la ficha técnica y el insumo entregado, ya que puede ser elástico girado o embutido, en cuyo caso se tendría el margen de costura; si por el contrario, es con elástico para envivar o sesgar o elástico apoyado no tendría margen de costura. 

                     
                  .col-lg-4
                    p.BorTit1 #[strong Figura:] Armado de bombacha
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_14.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 6")
                  .col-lg-7
                    .h4.text-center Paso 6. Sesgar contorno de cintura
                    p Los márgenes de costura y los insumos entregados determinarán la forma de elastizar la cintura y en qué maquinaria se hará, la cual puede ser en recubridora si es a sesgar o pegar elástico apoyado o en zigzag simple o triple si es girado o embutido.

                  .col-lg-4
                    p.BorTit1 #[strong Figura:] Armado de bombacha
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_15.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 7")
                  .h4.text-center Paso 7. Operaciones de terminación 
                  p En las operaciones de terminación, hacer atraques en los dos costados llevando las costuras de filete hacia el posterior y rematando muy bien. 

                .row.justify-content-center(titulo="Paso 8")
                  .col-lg-7
                    .h4.text-center Paso 8. Pegar aplique
                    p Sobre el delantero y en el centro de la cintura se fijará un aplique rematando muy bien. 

                    p Esto en caso de que lleve aplique.

                  .col-lg-4
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_16.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 9")
                  .h4.text-center Paso 9. Limpiar y revisar prenda
                  p Las operaciones de terminado están en la revisión final de la prenda, iniciando por el revés, retirando los hilos sobrantes, se voltea revisando el posterior desde la parte superior hacia la inferior. Esta se voltea al derecho y se revisa de nuevo desde la parte superior, pasando a los costados y luego hasta la entrepierna, quedando lista para doblado y empacado.          


    separador

    .titulo-segundo
      #t_4_2.h2 4.2  Elaboración muestras físicas de bóxer

    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-primario.p-4
          p El bóxer clásico es una de las prendas interiores más cómodas, éste cubre el área pélvica y se extiende sobre una parte del muslo. Su nombre deriva de la similitud que tiene esta prenda con los pantalones cortos utilizados por los boxeadores. Los bóxeres clásicos son holgados y confeccionados en textiles absorbentes de algodón, cuentan con una apertura sobre la bragueta. El bóxer ajustado es una de las variantes del clásico, pero este tiene elástico expuesto sobre la cintura y una bolsa que permite el ajuste de la parte genital.

    .row.justify-content-center
      .col-lg-3
        p.BorTit1 #[strong Figura:] Costura plana
    .tarjeta.tarjeta_img1.p-4.mb-5
      SlyderA
        .row
          figure
            img(src='@/assets/curso/tema_4/img_18.png', alt='Texto que describa la imagen')
        div
          figure
            img(src='@/assets/curso/tema_4/img_19.png', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se explica el paso a paso (operación) a seguir en la elaboración de los bóxeres clásico y ajustado.

    .row.justify-content-center
        .col-lg-4
          h4.text-center Elaboración muestra física de Bóxer

    .row.mb-5.p-4#MapaGroup01 
      .col-lg-6
        button.Buton_r.show.ClasePripiaBtn.collapsed.collapse(data-bs-toggle='collapse' data-bs-target='#collapse01, #f1' aria-expanded='true' aria-controls='#collapse01' @click="collapsableSeleccionado='collapse01'" ) 
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_64.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup01')  
        img#f1.img-a.collapse.show(data-bs-parent='#MapaGroup01')(src='@/assets/curso/tema_4/img_66.svg', alt='')
      .col-lg-6
        button.Buton_r.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse02, #f2' aria-expanded='false' aria-controls='#collapse02' @click="collapsableSeleccionado='collapse02'")
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_65.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup01') 
        img#f2.img-a.collapse(data-bs-parent='#MapaGroup01')(src='@/assets/curso/tema_4/img_66.svg', alt='')

      #collapse01.collapse.show(data-bs-parent='#MapaGroup01')
        .row.mt-5.justify-content-center
          .col-lg-11
            TabsA.color-acento-contenido.mb-5
                .tarjeta.jumbo_3.p-5(titulo="Clásico")
                  .row.mb-5
                    .col-lg-8
                      h4 Elaboración muestra física de bóxer clásico
                      p Observe el video que se presenta a continuación en donde se muestra el proceso de elaboración de una muestra física. 
                      p Descargue el PDF para conocer instrucciones detalladas sobre el paso a paso que le permitirá ampliar la información para la confección de esta prenda.
                      p Descargue el documento en Excel que le servirá como guía base para la construcción de la ficha técnica de esta prenda (ejemplo).
                    .col-lg-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_21.png', alt='Texto que describa la imagen')
                  .row.mb-5
                    .col-lg-6
                      a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=3E8_mDzj8LU&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p #[strong Enlace web.] Video: confección bóxer clásico.
                    .col-lg-6
                      a.anexo(:href="obtenerLink('/downloads/CF16_A_4.2_Anexo_Ficha_tecnica_Boxer.xlsx')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-xml.svg")
                        .anexo__texto
                          p #[strong Anexo.] Ficha técnica confección bóxer.

                  .row.justify-content-center
                    .col-lg-12
                      .tarjeta.color-primario.p-3.mb-3
                        .row.justify-content-around.align-items-center
                          .col-3.col-sm-2.col-lg-1
                            img(src="@/assets/curso/tema_4/img_23.png")
                          .col
                            .row.justify-content-between.align-items-center
                              .col.mb-3.mb-sm-0
                                h3.mb-1 Instructivo confección bóxer
                                p.text-small Infografía con los pasos para la elaboración de la muestra física. 
                              .col-sm-auto
                                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/INFOGRAFIA_TANGA_PASO_A_PASO_boxer.pdf')" target="_blank")
                                  span Descargar
                                  i.fas.fa-file-download

      #collapse02.collapse(data-bs-parent='#MapaGroup01')
        .row.mt-5.justify-content-center
          .col-lg-11
            TabsA.color-acento-contenido.mb-5
              .tarjeta.jumbo_3.p-5(titulo="Ajustado")
                .h5.mb-5 Elaboración muestra física de bóxer ajustado
                .row
                  .col-lg-8
                    .cajon.color-acento-contenido.p-4.mb-3 
                      .row
                        .col-lg-8
                          p Para este ejercicio cada paso corresponde a una operación que se debe realizar dentro del proceso. Empecemos…
                    
                        .col-lg-4
                          figure
                            img.img-a(src='@/assets/curso/tema_2/img_5.svg', alt='Texto que describa la imagen')

                  .col-lg-4
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_22.png', alt='Texto que describa la imagen')

              .tarjeta.jumbo_3.p-4(titulo="PASO 1")
                h5.mb-5 Paso 1. Identificación de piezas
                .row
                  .col-lg-8
                    p Para el alistamiento de la confección del bóxer se necesita tener las piezas dispuestas para ello como son: 

                    ul.lista-ul--color.lista-ul.mb-5
                      li 
                        i.fas.fa-check
                        | Delanteros
                      li 
                        i.fas.fa-check
                        | Posteriores
                      li 
                        i.fas.fa-check
                        | Canguro y
                      li 
                        i.fas.fa-check
                        | Entrepierna

                    .cajon.color-acento-contenido.p-4
                      p Además del paquete técnico compuesto por la ficha técnica, la muestra física, todas las herramientas y elementos necesarios, los insumos como son los hilos, el elástico y la marquilla.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] Partes del bóxer.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_24.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 2")
                h5.mb-5 Paso 2. Cerrar elástico
                .row
                  .col-lg-8
                    p.mb-0 El elástico se mide de acuerdo a la talla en centímetros, se corta y se procede a unirlo en máquina plana a 1 cm montando uno encima del otro, rematando muy bien. 
                    p Ya terminada la costura se dobla el elástico en 4 partes y se marca muy bien por dentro y por fuera de este, para facilitar el pegado al bóxer. 

                    p Se revisa de nuevo que queden muy bien las costuras, remates y marcación.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] Cerrar elástico
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_25.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 3")
                h5.mb-5 Paso 3. Operaciones de preparación: unir posteriores
                .row
                  .col-lg-8
                    p Se inicia con las operaciones de preparación, fileteando los posteriores con filete sencillo, pegando la marquilla de la talla, esta debe quedar a 12 cm de la cintura. 

                    p Se revisa que queden muy bien las costuras, remates. 
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Unión posterior]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_26.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 4")
                h5.mb-5 Paso 4. Preparar panel delantero (canguro)
                .row
                  .col-lg-8
                    p Unir las partes del panel delantero en fileteadora, encarando los derechos y uniendo las 4 telas para filetearlas con filete sencillo, luego asentar costura en recubridora con 5 hilos.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Panel delantero]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_27.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 5")
                h5.mb-5 Paso 5. Unir entrepierna a posterior
                .row
                  .col-lg-8
                    p La entrepierna se une al posterior con filete sencillo, siguiendo la curva del tiro, sin dejar pestaña ni arrugas en él.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Entrepierna posterior]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_28.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 6")
                h5.mb-5 Paso 6. Unir entrepierna a delantero 
                .row
                  .col-lg-8
                    p La otra parte de la entrepierna se une al delantero con filete sencillo y luego se asienta costura en recubridora con 5 hilos.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Entrepierna delantera]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_29.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 7")
                h5.mb-5 Paso 7. Unir panel a cuerpo 
                .row
                  .col-lg-8
                    p Ya teniendo preparadas las entrepiernas, se procede a unir el panel al delantero, teniendo cuidado de que este quede centrado y no sobre material en ninguno de los dos lados. 

                    p Luego en recubridora se asienta costura con 5 hilos.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Panel delantero]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_30.png', alt='Texto que describa la imagen')
              .tarjeta.jumbo_3.p-4(titulo="PASO 8")
                h5.mb-5 Paso 8. Pegar elástico en cintura
                .row
                  .col-lg-8
                    p El elástico, previamente preparado se une a la cintura en máquina recubridora, con la técnica de elástico apoyado, iniciando desde el posterior, colocando la tela por debajo y el elástico encima, coincidiendo las costuras del elástico y del posterior para iniciar. 

                    p.mb-0 Se debe alinear el orillo de la tela con el elástico y que coincidan las 4 marcaciones con las costuras de costados.
                    p En la última parte se debe cuidar que, al estirar esté todo parejo, y al final del empate se saca la prenda. 

                    p Revisar costuras con parámetros de calidad.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Panel delantero]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_31.png', alt='Texto que describa la imagen')

              .tarjeta.jumbo_3.p-4(titulo="PASO 9")
                h5.mb-5 Paso 9. Dobladillar bota
                .row
                  .col-lg-8
                    p En la bota se dobla a 1 cm hacia el revés y alineando la costura, tomándola hacia el posterior, posicionando bajo el pie prensa tela de la recubridora. 

                    p Inicie la costura ayudándose con la guía dobladilladora para garantizar que la costura quede pareja (que la guía lo oriente). 

                    p En la parte del embone, se debe tener cuidado para que no se  voltee y al finalizar se realiza el empate de la costura de 2 o 3 cm máximo.

                    p Se saca la pieza y se procede a revisar con parámetros de calidad.
                  .col-lg-4
                    .row.justify-content-center
                      .col-lg-10
                        p.BorTit1 #[strong Figura:] #[i Panel delantero]
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_31.png', alt='Texto que describa la imagen')

              .tarjeta.jumbo_3.p-4(titulo="PASO 10")
                h5.mb-5 Paso 10. Limpiar y revisar prenda
                p Las operaciones de terminado están en la revisión final de la prenda, iniciando por el revés, retirando los hilos sobrantes, se voltea revisando el posterior desde la parte superior hacia la inferior. 

                p La prenda se voltea al derecho y se revisa de nuevo desde la parte superior, pasando a los costados y luego hasta la entrepierna, quedando lista para vaporizado, doblado y empacado.

    separador

    .titulo-segundo
      #t_4_3.h2 4.3  Elaboración muestras físicas de brasier

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-5 El brasier también llamado sostén es una de las prendas íntimas que ha tenido una evolución muy marcada y reconocida en cuanto a moda y a la visión del cuerpo femenino. Este añade soporte y hace que el cuerpo luzca equilibrado; gracias a la variedad de materiales utilizados en su confección, es una prenda íntima, elegante y refinada o liviana y suave adaptándose a su ocasión y necesidad de uso.
          
          .row.justify-content-center
            .col-lg-3
              p.BorTit1 #[strong Figura:]  #[i Tipos de brasier]
          figure
            img.img-a(src='@/assets/curso/tema_4/img_32.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-4
        h4.text-center Elaboración muestra física de brasier

    
    .row.p-4#MapaGroup_02 
      .col-lg-6
        button.Buton_g.show.ClasePripiaBtn.collapsed.collapse(data-bs-toggle='collapse' data-bs-target='#collapse03, #f3' aria-expanded='true' aria-controls='#collapse03' @click="collapsableSeleccionado='collapse03'" ) 
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_67.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup_02')  
        img#f3.img-a.collapse.show(data-bs-parent='#MapaGroup_02')(src='@/assets/curso/tema_4/img_69.svg', alt='')
      .col-lg-6
        button.Buton_g.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse04, #f4' aria-expanded='false' aria-controls='#collapse04' @click="collapsableSeleccionado='collapse04'")
          img.mt-3.mb-3.img-a(src='@/assets/curso/tema_4/img_68.png', alt='')
          h4.text-center(data-bs-parent='#MapaGroup_02') 
        img#f4.img-a.collapse(data-bs-parent='#MapaGroup_02')(src='@/assets/curso/tema_4/img_69.svg', alt='')

      #collapse03.collapse.show(data-bs-parent='#MapaGroup_02')
        .row.mt-5.justify-content-center
          .col-lg-11
            .tarjeta.tarjeta--azul.p-4.mb-5
              LineaTiempoC.color-acento-botones
                .row.justify-content-center(titulo="Paso 1")
                  .col-md-6.mb-3
                    .cajon.color-acento-contenido.p-4.mb-5
                      .row
                        .col-lg-8
                          p Para este ejercicio cada paso corresponde a una operación que se debe realizar dentro del proceso. Empecemos…
                        .col-lg-4
                          figure
                            img.img-a(src='@/assets/curso/tema_2/img_5.svg', alt='Texto que describa la imagen')

                    .h4.text-center Paso 1. Identificación de piezas

                    p Para el alistamiento de la confección del brasier se necesita tener las piezas dispuestas para ello, como son: 
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-check
                        | Copas
                      li 
                        i.fas.fa-check
                        | Base
                      li 
                        i.fas.fa-check
                        | Espalda
                      li 
                        i.fas.fa-check
                        | Centro
                    .cajon.color-primario.p-4
                      p Además del paquete técnico compuesto por la ficha técnica, la muestra física todas las herramientas y elementos necesarios, los insumos como son los hilos, el elástico, sesgos y la marquilla.
                  .col-md-6
                    p.mb-5.BorTit1 #[strong Figura:] Piezas para brasier
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_34.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 2")
                  .col-md-6.mb-md-0
                    .h4.text-center Paso 2. Operaciones de preparación: armar centro 
                    p Unir el centro de la base en máquina plana, derecho con derecho.
                    p Voltear la pieza y pespuntar de nuevo a 1/16 en el mismo lugar.
                  .col-md-6
                    .row.justify-content-center
                      .col-lg-6
                        p.BorTit1 #[strong Figura:] Corpiño con arco
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_35.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 3")
                  .col-md-6.mb-3
                    .h4.text-center Paso 3. Pegar centro a espalda 
                    p Se une el centro con la espalda derecha e izquierda con costura recta y se asienta recargando esta hacia las espaldas con máquina zigzag. 
                    .cajon.color-primario.p-4
                      p Si el tejido es muy elástico al momento de hacer la operación de zigzag, se puede añadir sesgo cristal para mayor refuerzo.
                  .col-md-6
                    .row.justify-content-center
                      .col-lg-6
                        p.BorTit1 #[strong Figura:] Corpiño con arco 
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_36.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 4")
                  .col-md-6.mb-md-0
                    .h4.text-center Paso 4. Pegar elástico a base
                    p Pegar elástico en la base utilizando la técnica de elastizado embutido o girado en máquina zigzag sencillo o de 3 pasos.

                    p #[strong Opción 1.] En el girado se pega el elástico de la base y luego se gira, quedando la mora de este al borde y asentando costura con la misma máquina.

                    p #[strong Opción 2.] En el embutido el elástico es sencillo y se pega de igual forma, solo que esta vez la base cubre el elástico.
                  .col-md-6
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_37.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 5")
                  .col-md-6.mb-md-0
                    .h4.text-center Paso 5. Armar copas
                    p Para esta operación se unen las copas en máquina, con puntada en zigzag uniendo las copas al beso, sin montarlas en el área donde la costura debe tomar las dos copas.

                    p Luego de terminado, se pegará sesgo cristal sobre este para reforzar la unión.
                  .col-md-6
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_38.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 6")
                  .col-md-6.mb-md-0
                    .h4.text-center Paso 6. Armar copas de encaje y forrar copas
                    p Se unen las copas de encaje en máquina con puntada en zigzag, uniendo las copas al beso sin montarlas donde la costura debe tomar las dos copas, luego de terminado encima de este se pegará.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_39.png', alt='Texto que describa la imagen')

                  .col-md-6
                    .row.justify-content-center
                      .col-lg-6
                        p.mb-5.BorTit1 #[strong Figura:] Cómo forrar copas
                    figure.mb-3
                      img.img-a(src='@/assets/curso/tema_4/img_40.png', alt='Texto que describa la imagen')
                    p Luego, estas se pegarán a las copas de guata previamente preparadas, forrándolas con costura en máquina plana alrededor, sin estirar el material para que la copa no pierda su forma.
                .row.justify-content-center(titulo="Paso 7")
                  .col-md-6.mb-md-0
                    .h4.text-center Paso 7. Pegar copas a base
                    p Ya con las copas preparadas, unir estas a la base en máquina plana del centro al costado y la otra copa del costado al centro, pasando por encima del elástico de la base, cuidando que no queden sobrantes.
                  .col-md-6
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_41.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 8")
                  .col-md-12.mb-md-0
                    .h4.text-center Paso 8. Pegar elástico a sisas
                    p.mb-5 Una vez las copas están unidas a la base, se procede a pegar elástico en sisa, utilizando una de las técnicas para ello, con girado o sesgado.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_42.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 9")
                  .col-md-12.mb-md-0
                    .h4.text-center Paso 9. Pegar sesgo de varilla
                    p Alrededor de la copa y con máquina plana 2 agujas con guía y aditamento, se procede a pegar el sesgo cubre varilla entre la copa y la base, por el centro de la costura uniendo las dos partes. 
                    p.mb-5 En la costura se debe tener cuidado de no cerrar la abertura por donde pasará la varilla.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_43.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 10")
                  .col-md-12.mb-md-0
                    .h4.text-center Paso 10. Introducir la varilla
                    p.mb-5 En el medio del sesgo de varilla y con mucho cuidado se debe introducir la varilla dando forma a la copa; también se debe tener en cuenta el color de las puntas de tal manera que se posicionen hacia donde van las sisas de las mismas.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_44.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 11")
                  .col-md-12.mb-md-0
                    .h4.mb-3.text-center Paso 11. Pegar macho y hembra a la base
                    figure.mb-5
                      img.img-a(src='@/assets/curso/tema_4/img_45.png', alt='Texto que describa la imagen')
                    p.mb-5 En los extremos de la base se procede a pegar el broche, este consta de dos partes (macho y hembra). La medida debe coincidir con el espacio tubular de estos (A-B) y se fijan con máquina zigzag.
                    figure
                      img.img-a(src='@/assets/curso/tema_4/img_46.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 12")
                  h4.mb-3.text-center Paso 12. Armado del bretel o cargaderas
                  p Para las cargaderas o bretel se necesita un elástico del largo según la talla y este tiene 3 partes. Un aro o arandela, un tensor o corredera y la tira o elástico. 
                  .row.justify-content-center.mb-5
                    .col-md-4.mb-md-0
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_47.png', alt='Texto que describa la imagen')
                    .col-md-6.mb-md-0
                      .cajon.color-primario.p-4
                        p.mb-0 El armado se realiza en un extremo introduciendo el aro y en el otro la corredera u 8.
                        p Al extremo de este último se voltea encerrando la corredera y se fija con puntada de zigzag tupido.
                  .row.justify-content-center.mb-5
                    .col-md-4.mb-md-0
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_48.png', alt='Texto que describa la imagen')
                    .col-md-6.mb-md-0
                      .cajon.color-primario.p-4
                        p.mb-0 Luego por el extremo de la arandela u aro, se desliza otra vez por el tensor o corredera, quedando el elástico doble dentro de ella, como se ve en la figura.
                  .row.justify-content-center.mb-5
                    .col-md-4.mb-md-0
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_49.png', alt='Texto que describa la imagen')
                    .col-md-6.mb-md-0
                      .cajon.color-primario.p-4
                        p.mb-0 El extremo libre del bretel se une a la base en la espalda a una distancia de 4 cm del gancho y el otro extremo irá a la copa también con zigzag tupido.
                  .row.justify-content-center.mb-5
                    .col-md-4.mb-md-0
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_50.png', alt='Texto que describa la imagen')
                    .col-md-6.mb-md-0
                      .cajon.color-primario.p-4
                        p.mb-0 Si el material con el que está construida la base es liviano, el bretel irá pegado desde el inicio de la base con atraques en zigzag en ambos lados de la espalda e igualmente en la copa, cuidando que no quede entorchado. 
                  .row.justify-content-center.mb-5
                    .col-md-4.mb-md-0
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_51.png', alt='Texto que describa la imagen')
                    .col-md-6.mb-md-0
                      .cajon.color-primario.p-4
                        p.mb-0 Si en los extremos del bretel lleva gancho, se harán dos arandelas con elásticos de 3 cm cada uno y se pegarán a la copa y a la espalda con zigzag tupido, sirviendo como soporte al gancho.
                .row.justify-content-center(titulo="Paso 13")
                  .col-md-6.mb-md-0    
                    .h4.mb-3.text-center Paso 13. Pegado de adorno
                    p En el centro del brasier se pega un adorno (moño) con zigzag tupido.
                .row.justify-content-center(titulo="Paso 14")
                  .col-md-10.mb-md-0    
                    .h4.mb-3.text-center Paso 14. Operaciones de terminación
                    p Las operaciones de terminado están en la revisión final de la prenda, iniciando por el revés, retirando los hilos sobrantes, se voltea revisando el posterior desde la parte superior hacia la inferior. 

                    p Luego se voltea la prenda al derecho y se revisa de nuevo desde la parte superior, pasando a las sisas y luego hasta los ganchos, quedando lista para doblado, y empacado.

      #collapse04.collapse(data-bs-parent='#MapaGroup_02')
        .row.mt-5.justify-content-center
          .col-lg-11
            .tarjeta.tarjeta--azul.p-4.mb-5
              LineaTiempoC.color-acento-botones
                .row.justify-content-center(titulo="Paso 1")
                  .col-md-7.mb-md-0.mb-5
                    .cajon.color-acento-contenido.p-4.mb-5
                      .row
                        .col-lg-8
                          p Para este ejercicio cada paso corresponde a una operación que se debe realizar dentro del proceso. Empecemos…
                        .col-lg-4
                          figure
                            img.img-a(src='@/assets/curso/tema_2/img_5.svg', alt='Texto que describa la imagen')

                  .row.justify-content-center.mb-5
                    .col-lg-11
                      .h4 Paso 1. Identificación de piezas
                      p Para el alistamiento de la confección del bralette se necesita tener las piezas dispuestas para ello como son: 
                      ul.lista-ul--color.lista-ul
                        li 
                          i.fas.fa-check
                          | Copas de encaje
                        li 
                          i.fas.fa-check
                          | Espalda
                        li 
                          i.fas.fa-check
                          | Centro
                      p Además del paquete técnico compuesto por la ficha técnica, la muestra física y todas las herramientas y elementos necesarios para su elaboración; como es el caso de los insumos que son: los hilos e hilazas, elástico grueso de 25 mm, tiras para brasier, elástico fantasía de 5 mm, tensores del mismo ancho de la cargadera, sesgo y la marquilla.

                  .row.justify-content-center
                    .col-lg-4.mb-mb-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_52.png', alt='Texto que describa la imagen')
                    .col-lg-4.mb-mb-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_53.png', alt='Texto que describa la imagen')
                .row.justify-content-center(titulo="Paso 2")
                  .h4.mb-5 Paso 2. Armar copas de encaje y forrar copas
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_54.png', alt='Texto que describa la imagen')
                  p Se unen las copas de encaje en máquina a 5 mm del borde conservando la forma curva de este; rematando muy bien al inicio y al final, luego de terminado, encima se puede pegar sesgo tapa costura para reforzar la unión.
                .row.justify-content-center(titulo="Paso 3")
                  .h4.mb-5 Paso 3. Pegar elástico a sisas
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_55.png', alt='Texto que describa la imagen')
                  p Una vez las copas están unidas se procede a pegar elástico de 5mm en sisa y centro por el revés de estas en máquina plana o recubridora; con puntada en zigzag; utilizando la técnica de “elástico apoyado”, respetando la mora del encaje.
                .row.justify-content-center(titulo="Paso 4")
                  .h4.mb-5 Paso 4. Pegar cargadera a copas de encaje 
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_56.png', alt='Texto que describa la imagen')
                  p Desde la parte inferior de la copa hasta la punta del encaje, se fijará el elástico de cargadera en posición centrada, por el revés en máquina plana a 1/16 de margen por ambos bordes para sujetarla.
                .row.justify-content-center(titulo="Paso 5")
                  .h4.mb-5 Paso 5. Armado del bretel o cargaderas
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_57.png', alt='Texto que describa la imagen')
                  p El armado se realiza en un extremo libre introduciendo la corredera o tensor.  
                  p Luego el extremo se introduce otra vez por el mismo extremo por la corredera, quedando el elástico doble dentro de ella, como se ve en la figura. Y se pasa de nuevo justo como la primera vez, sujetando el extremo con remate en zigzag tupido.
                .row.justify-content-center(titulo="Paso 6")
                  .h4.mb-5 Paso 6. Pegar elástico a base
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_58.png', alt='Texto que describa la imagen')
                  p Pegar el elástico en la base de las copas utilizando la técnica de “elástico apoyado” en máquina plana o recubridora. 
                  p Se ubica el derecho del bralette sobre el derecho del elástico y se une a 5 mm del borde, según la medida de contorno con margen de 1/16 se asienta. 
                .row.justify-content-center(titulo="Paso 7")
                  .h4.mb-5 Paso 7. Pegar segundo elástico 
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_59.png', alt='Texto que describa la imagen')
                  p Ya con el primer elástico de base listo, unir a 4 cm desde el borde superior hacia arriba, para ubicar el segundo elástico, este debe ir marcado en el centro para mejor ubicación y se une con puntada zigzag simple a los elásticos de sisas y centro y a la cargadera.
                .row.justify-content-center(titulo="Paso 8")
                  .h4.mb-5 Paso 8. Pegar macho y hembra a la base en los elásticos
                  .row
                    .col-lg-8
                      p En los extremos de la base se procede a pegar el broche, este consta de dos partes, macho y hembra, la medida debe coincidir con el espacio tubular y se fijan con máquina en puntada zigzag; sin embargo, como la base es elástica simplemente se puede hacer una costura de fijación con el mismo zigzag simple tupido y cerrar completamente la base.

                    .col-lg-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_60.png', alt='Texto que describa la imagen')

                .row.justify-content-center(titulo="Paso 9")
                  .h4.mb-5 Paso 9. Marcar cargaderas a base
                  .row
                    .col-lg-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_61.png', alt='Texto que describa la imagen')
                    .col-lg-8
                      p El parte posterior de la base se procede a marcar lo que será la unión de las cargaderas a 5 cm del final del broche o de la unión a cada lado.
                .row.justify-content-center(titulo="Paso 10")
                  .h4.mb-5 Paso 10. Pegado de adorno
                  figure.mb-5
                    img.img-a(src='@/assets/curso/tema_4/img_62.png', alt='Texto que describa la imagen')
                  p Cortar 2 tiras de cargadera de 7 cm de largo cada una e introducirlas por las correderas o tensores, en uno de los extremos se dobla y se fija con zigzag simple tupido. 
                  p Después estos  se fijarán primero  en el elástico superior con máquina plana rematando bien, y en el elástico inferior de la base con zigzag simple tupido se cortan los sobrantes para dar un mejor acabado.
                .row.justify-content-center(titulo="Paso 11")
                  .h4.mb-5 Paso 11. Operaciones de terminación
                  .row
                    .col-lg-8
                      p Las operaciones de terminado están en la revisión final de la prenda iniciando por el revés, retirando los hilos sobrantes, se voltea revisando el posterior desde la parte superior hacia la inferior. 
                      p Luego se voltea al derecho y se revisa de nuevo desde la parte superior, pasando a las sisas y luego hasta la base, quedando lista para doblado, y empacado.
                    .col-lg-4
                      figure
                        img.img-a(src='@/assets/curso/tema_4/img_63.png', alt='Texto que describa la imagen')            
                    
    p Para profundizar en estos temas y observar diferentes tutoriales que podrán ilustrar el proceso, le recomendamos revisar el material complementario de este componente formativo.

                


              
</template>

<script>
export default {
  name: 'Tema4',
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
