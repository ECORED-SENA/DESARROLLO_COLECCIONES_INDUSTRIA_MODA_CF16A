export default {
  global: {
    componenteFormativo: 'Taller básico de ropa interior',
    descripcionCurso:
      'A través de la historia la ropa interior no solo ha cumplido la función de cubrir el cuerpo, sino que ha evolucionado con la historia social dando una visión del cuerpo muy amplia que va desde revelar, modificar y hasta restringir.<br>Además, la moda es un factor influyente al momento de decidir aspectos asociados a su confección como lo son los materiales y formas. El segmento de ropa interior es una de las industrias más importantes y de mayor avance, ha evolucionado desarrollando prendas cada vez más funcionales que son lucidas por elección y no por imposición del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al mundo de la ropa interior',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ejercicio copas de brasier',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ejercicio: unir copas de brasier',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ejercicio: forrar copas de brasier',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ejercicio pegar elásticos panty, bóxer y brasier',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración de muestras físicas: panty, bóxer y brasier',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elaboración muestras físicas de panty',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Elaboración muestras físicas de bóxer',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Elaboración muestras físicas de brasier',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alamoda, A. (2019). Academia Alamoda. Obtenido de Academia Alamoda:',
      link: 'https://academiaconfeccionalamoda.com/',
    },
    {
      referencia:
        'A. (2018, 12 septiembre). DIY: Bralette de encaje fácil de hacer – Nocturno Design Blog. Nocturno Design Blog.',
      link:
        'https://nocturnodesignblog.com/2018/09/12/diy-bralette-de-encaje-facil-de-hacer/',
    },
    {
      referencia:
        'Colaboradores de Wikipedia. (2020, 9 diciembre). Ropa interior. Wikipedia, la enciclopedia libre.',
      link: 'https://es.wikipedia.org/wiki/Ropa_interior',
    },
    {
      referencia:
        'DG, A. (2020). Hecho en 5 minutos. Obtenido de Hecho en 5 minutos:',
      link: 'https://hechoen5minutos.com/',
    },
    {
      referencia:
        'García, M. E. (12 de octubre de 2018). El baúl de la costurera. Obtenido de El baúl de la costurera:',
      link: 'https://www.elbauldelacosturera.com/',
    },
    {
      referencia:
        'Hatem K., L. (2019, 19 diciembre). ¡Aprende a forrar Copas Prehormadas, Así de fácil! Mi Mundo De Moda - Cursos de Costura.',
      link:
        'https://mimundodemoda.com/aprende-a-forrar-copas-prehormadas-asi-de-facil/',
    },
    {
      referencia:
        'Karu. (6 de noviembre de 2020). studiocostura.com. Obtenido de studiocostura.com:',
      link: 'https://www.studiocostura.com/',
    },
    {
      referencia:
        'K. (2017, 16 julio). Cómo coser copas de foam para el sujetador Watson // How to sew foam cups for Watson bra. Studio COSTURA.',
      link: 'https://www.studiocostura.com/blog/foam-cups-for-watson-tutorial',
    },
    {
      referencia:
        'K. (2019, 6 febrero). A grey teeshirt bra and panties >. with my hands - Dream.',
      link:
        'https://withmyhandsdream.com/2019/02/06/a-grey-teeshirt-bra-and-panties/?fbclid=IwAR1D5N3xnhafSBQlqrSJOYxu73u5JbDFz27FYIfwlLmB2CfXSCnu0_rBthw',
    },
    {
      referencia: 'Make a Foam Cup Bra •. (2017, 16 noviembre). Cloth Habit.',
      link: 'https://clothhabit.com/make-a-foam-cup-bra/',
    },
    {
      referencia:
        'make Bra. (2020, 26 noviembre). Sewing Instructions for Full Band Bra - Make Bra.',
      link: 'https://learning.makebra.com/instructions/full-band-bra/',
    },
    {
      referencia:
        'Mariel. (2018). El taller de mariette. Obtenido de El taller de Mariette:',
      link: 'https://www.eltallerdemariette.com/',
    },
    {
      referencia:
        'Quevedo, G. (2013). Lencería y Corsetería. Buenos aires: Utilísima.',
    },
    {
      referencia:
        '4 Técnicas de elastizado para lencería -Segunda Parte- | El Taller de Mariette. (2017, 8 febrero). El Taller de Mariette.',
      link:
        'https://www.eltallerdemariette.com/4-tecnicas-de-elastizado-para-lenceria/?preview=true',
    },
  ],
  glosario: [
    {
      termino: 'Bragas',
      significado:
        'Calzón o pantalón corto y ajustado, actualmente es aplicado a la prenda interior femenina. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Bóxer',
      significado:
        'Prenda de ropa interior masculina, que cubre desde la cintura hasta más debajo de las ingles (calzoncillo bóxer) y se utilizan para proteger la zona genital del contacto con la ropa exterior, generalmente de algodón. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Copa',
      significado:
        'En corsetería: caparazón que guarda los senos.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Corpiño',
      significado:
        'Prenda sin mangas de cuerpo pequeño y ajustada al busto puede llegar a la mitad del talle o hasta la cintura. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Corsé',
      significado:
        'Prenda de uso interior muy ajustada, con ballenas o varillas y que comprime el cuerpo desde el busto hasta por debajo de las caderas. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Elastano',
      significado:
        'Tejido que tiene elasticidad por su estructura o por las materias que entran en su formación, y se pone en algunas prendas de vestir para que ajusten o den de sí.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Elástico',
      significado:
        'Lo que se estira por acción de alguna fuerza y cuando esta cesa recobra su disposición primitiva. Un género es elástico cuando se entretejen con los hilos otros muy delgados de caucho. // Cinta o cordón que tiene elasticidad por su estructura o por las materias que entran en su formación, y se pone en algunas prendas de vestir para que ajusten, generalmente utilizado en ropa interior, jaretas, etc. También se le conoce como banda elástica o resorte.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Encaje',
      significado:
        'Cierto tejido de mallas, lazadas o calados, con figuras u otras labores: encaje de bolillos. De tejido abierto que se forma atando o retorciendo hilos para formar un dibujo que resalta sobre el fondo de malla; tradicionalmente se fabrica de algodón, aunque también se utilizan otras fibras y colores.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Entrepierna',
      significado:
        '1. f. Parte interior de los muslos. 2. f. Piezas cosidas, entre las hojas de los calzones y pantalones, a la parte interior de los muslos, hacia la horcajadura. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Franela',
      significado:
        'Término genérico que designa diversos géneros de lana tejidos en distintos pesos y estambres. Incluye asimismo fibras artificiales. La franela suele tener tacto suave y una trama simple o cruzada. Está ligeramente cardada por uno de los lados. En el siglo XIX solía utilizarse para confeccionar enaguas. En el siglo XX se han usado varios tipos de franela para ropa interior, exterior, chaquetas, vestidos, faldas y pantalones. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Gafete',
      significado:
        'Pequeño broche metálico con forma de gancho muy usado en la cintura de faldas como seguro de la cremallera. También conocido como broche de gancho o corchete.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Jareta',
      significado:
        'Costura que se hace doblando la orilla y cosiéndola por un lado para dejar un hueco en forma a de vaina en que pasa una cinta o un cordón para ceñir a la muñeca, tobillo, cintura, etc.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Lencería',
      significado:
        'Toda la ropa interior femenina, su confección es diferente a la de la ropa exterior, tiene un acabado delicado y exquisito. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Lycra',
      significado:
        'Es una marca registrada por la empresa Du Pont en 1958 para un tejido hecho con un material sintético con propiedades elásticas del tipo llamado genéricamente spandex o fibras elastoméricas. Se trata de un polímero de cadena muy larga, formado por lo menos con un 85% de poliuretano segmentado (spandex); obteniéndose, filamentos continuos, que, pueden ser multifilamento o monofilamento. Fibra artificial elástica que realza las curvas femeninas; resistentes al fuego e indeformable. Se utilizó primero para ropa interior femenina, como las fajas, y posteriormente para la elaboración de panties, bañadores y toda clase de prendas elásticas. Es elástica, resistente al fuego y a la humedad, e indeformable. Se lava muy fácilmente. Desde que apareció, ha sido un componente esencial de la ropa interior como fajas y panties. Durante los años 70 se incorporó a las panty-medias, bañadores y prendas de gimnasia. Cuando se mezcla con otros tejidos les confiere elasticidad.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Nylon',
      significado:
        'Palabra del idioma inglés. Material sintético de índole nitrogenada, del que se hacen filamentos elásticos, muy resistentes. Se emplea en la fabricación de géneros de punto y tejidos diversos. (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Ropa interior',
      significado:
        'La que se lleva debajo del vestido y otras prendas de uso exterior.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Sujetador o sostén',
      significado:
        'Es un elemento de ropa interior femenina que consiste en dos copas que cubren total o parcialmente los pechos como soporte y pudor. Además de la conexión de las copas, tiene generalmente cuatro bandas, dos en los lados que se sujetan el uno al otro en la espalda o parte anterior sobre el pecho y dos sobre los hombros, que se unen a los otros dos en la espalda. También conocido como brassiere.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Strapless',
      significado:
        'Término que proviene del inglés "strapless" que significa sin tirantes. Es el nombre del corte que se aplica en algunos vestidos de noche y blusas formales en donde no lleva tirantes y va completamente ajustado al busto resaltando la espalda y el escote con los hombros al descubierto.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Velo',
      significado:
        'Lienzo o tul transparente y fino o de encajes con el que se cubre la cabeza o la cara como adorno o manifestación de luto cuando es negro.  (academiasistemacyc.com, s.f.).',
    },
    {
      termino: 'Vivo',
      significado:
        'Tira de tela estrecha cortada al sesgo con la que se pulen bordes de forma visible y al mismo tiempo sirve de adorno. Tira de tela con la que se pulen los bolsillos gilet. Cinta, cordoncillo o trencilla en los bordes o costuras de los vestidos.  (academiasistemacyc.com, s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        'Champion, C. S. (2019). Proceso productivo de lencería industrial para varones. Facultad de Tecnología, Universidad Nacional de Educación.',
      tipo: 'Monografía',
      descarga:
        '/downloads/Proceso_productivo_de_lenceria_industrial_para_varones.pdf',
    },
    {
      texto:
        'Unidad de producción de confección de prendas de vestir SENATI – IPACE. (2015). Guía del participante.',
      tipo: 'Guía',
      descarga: '/downloads/GUIA_DEL_PARTICIPANTE.pdf',
    },
    {
      texto:
        'Valencia de la M., L. (s.f.). Colección… Saber hacer… Ropa para hombre: Bóxer o calzoncillo.',
      tipo: 'Cartilla - taller',
      descarga:
        '/downloads/Coleccion_Saber_hacer_Ropa_para_hombre_Curso_de_Capacitacion_Instructivo.pdf',
    },
    {
      texto: 'Bóxer masculino. (s.f).',
      tipo: 'PDF',
      descarga: '/downloads/BOXER_MASCULINO.pdf',
    },
    {
      texto: 'Dreamstime.com, 2000.Ropa Interior rosa.',
      tipo: 'imagen',
      link:
        'https://es.dreamstime.com/photos-images/modelo-de-la-ropa-interior-en-color-de-rosa.html',
    },
    {
      texto: 'Gladys Quevedo, 2013; Lencería y Corsetería.',
      tipo: 'Libro',
      descarga: '/downloads/LIBRO_COMPLETO_GLADYS_QUEVEDO.zip',
    },
    {
      texto:
        'Sena, 2002; Materiales, insumos y maquinaria para la CONFECCIÓN DE ROPA INTERIOR.',
      tipo: 'Documento',
      link:
        'https://es.scribd.com/document/413343909/175410853-Insumos-y-Materiales-pdf',
    },
    {
      texto: 'Stella Serrano, 2008; Introducción a la corsetería.',
      tipo: 'Sitio Web',
      link: 'https://www.elcosturerodestellablog.com/',
    },
    {
      texto:
        'Saguam, 2016; Materiales, accesorios e implementos para la confección de ropa interior.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5ISULcEorEM&ab_channel=SAGUAM',
    },
    {
      texto:
        'Cursos de lencería fina, 2019; Telas de algodón para confeccionar Ropa Interior o Lencería.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=BnsNEYEy4wk&ab_channel=CursosDeLencer%C3%ADaFina',
    },
    {
      texto: 'María Eunice Guzman. 2017; Manual de Ropa Interior.',
      tipo: 'Documento',
      link: 'https://vdocuments.es/manual-patronaje-ind-de-ropa-mujer.html',
    },
    {
      texto: 'Mariel, 2018; El taller de Mariette.',
      tipo: 'Blog',
      link: 'https://www.eltallerdemariette.com/',
    },
    {
      texto: 'Telas activas, 2019.Microfibra.',
      tipo: 'Imagen',
      link: 'https://www.google.com/',
    },
    {
      texto: 'María Eleana García, 2018. El Baúl de la Costurera.',
      tipo: 'Sitio Web',
      link: 'https://www.elbauldelacosturera.com/',
    },
    {
      texto:
        'El taller de mariette, 2017; Técnicas de elastizado para lencería.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=dYr-dlkmCDU&ab_channel=eltallerdemariette',
    },
    {
      texto:
        'Grachyy Castro, 2016; Como coser el elástico a las prendas interiores.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=BapnjDRlzGM&ab_channel=grachyycastro',
    },
    {
      texto: 'Karu, 2020; Estudio Costura.',
      tipo: 'Sitio Web',
      link: 'https://www.instagram.com/studiocostura/',
    },
    {
      texto: 'Aurora DG, 2020; Hecho en 5 minutos.',
      tipo: 'Sitio Web',
      link:
        'https://hechoen5minutos.com/curso-gratis-aprende-hacer-tu-propio-sosten/',
    },
    {
      texto:
        'Saguam, 2016; Como forrar copa prehormada strapless para brasier, paso a paso.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9JUdZnBo84E&ab_channel=SAGUAM',
    },
    {
      texto: 'LENART Briones, 2019; Cómo coser elástico de bóxer.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=XMokzOiOSfc&ab_channel=LENARTBriones',
    },
    {
      texto: 'Gema Isabel Ramírez m, 2016; Montar Elástico a Cintura 520373.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/NbBAClwqZsI',
    },
    {
      texto: 'Confeccion, 2014; Bombachas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/oK1ZEzOnK9g',
    },
    {
      texto:
        'Academia Confección Alamoda, 2019. DIY Cómo confeccionar un Bóxer de hombre.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/Y3tyM2WTpZ0',
    },
    {
      texto: 'Limacon Export, 2012; Confección de Bóxer.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mKVAgtsoQjA&ab_channel=LIMACONEXPORT',
    },
    {
      texto: 'Inimar, 2019; Tipos De Sujetadores.',
      tipo: 'Sitio Web',
      link:
        'https://inimar.com/blog/tipos-copas-sujetador-saber-tipo-copa-sujetador-necesito',
    },
    {
      texto: 'Patrones y Confección, 2020; Cómo hacer un corpiño armado.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1yHyKgmgl_8&ab_channel=PatronesyConfecci%C3%B3n',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Luisa Yepes Sierra',
        cargo: 'Instructora',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Jhon Fernando Jaramillo Taborda',
        cargo: 'Investigador – Grupo de investigación INAMOD',
        centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica  - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Anllelo Andres Reina Montañez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
