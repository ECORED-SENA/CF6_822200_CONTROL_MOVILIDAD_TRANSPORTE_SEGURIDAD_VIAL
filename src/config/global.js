export default {
  global: {
    componenteFormativo:
      'Promoción de procesos educativos y formación normativa en seguridad vial',
    descripcionCurso:
      'Es muy importante desarrollar competencias para ser un promotor de procesos educativos y formativos en seguridad vial, ya que el factor humano es el primer causante de accidentes de tránsito, y es la persona en calidad de actor vial quien toma las decisiones sobre el movimiento y mantenimiento de su vehículo o el correcto tránsito por las vías públicas.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad en tránsito y transporte',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos pedagógicos en seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Conceptos de andragogía y formación preescolar en seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Modelos pedagógicos: fundamentos, tipos, conceptos, características y enfoques didácticos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Fundamentos sobre competencias ciudadanas en tránsito y seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Características de la enseñanza y del aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Fundamentos en evaluación del aprendizaje',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Valores universales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Normatividad en tránsito y transporte',
      referencia:
        'Decreto 1079 de 2015. [Presidente de  la República de Colombia]. pública. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Mayo 26 de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },
    {
      tema:
        'Modelos pedagógicos: fundamentos, tipos, conceptos, características, enfoques didácticos',
      referencia:
        'Agencia Nacional de Seguridad Vial. (s.f.). <em>Campañas pedagógicas en seguridad vial.</em> ANSV.',
      tipo: 'Página web',
      link:
        'https://ansv.gov.co/contenidos/escuela/fase1/on/ANSV_PT019_HTML06/index.html',
    },
  ],
  glosario: [
    {
      termino: 'Acera o andén',
      significado:
        'Franja longitudinal de la vía urbana, destinada exclusivamente a la circulación de peatones, ubicada a los costados de esta.',
    },
    {
      termino: 'Andragogía',
      significado:
        'Conjunto de técnicas de enseñanza orientadas a educar a las personas adultas.',
    },
    {
      termino: 'Bocacalle',
      significado: 'Embocadura de una calle en una intersección.',
    },
    {
      termino: 'Carreteable',
      significado:
        'Vía sin pavimentar destinada a la circulación de vehículos.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Parte de la Pedagogía que estudia las técnicas y los métodos de enseñanza.',
    },
    {
      termino: 'Embriaguez',
      significado:
        'Estado de alteración transitoria de las condiciones físicas y mentales, causada por intoxicación aguda que no permite un adecuado desarrollo de las actividades de riesgo.',
    },
    {
      termino: 'OMS',
      significado: 'Organización Mundial de la Salud.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'Ciencia social e interdisciplinaria enfocada en la investigación y reflexión de las teorías educativas en todas las etapas de la vida, no solo en la infancia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (s.f.). Campañas pedagógicas en seguridad vial. ANSV.',
      link:
        'https://ansv.gov.co/contenidos/escuela/fase1/on/ANSV_PT019_HTML06/index.html',
    },
    {
      referencia:
        'Ausubel, D. (1990). <em>Psicología educativa: un punto de vista cognoscitivo.</em> Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Blanco, A. (2000). Los modelos pedagógicos. <em>Universidad Abierta Revista del Instituto de Educación a Distancia de la Universidad de Tolima, 7, p. 1-10.</em>',
      link: '',
    },
    {
      referencia:
        'Castillero, O. (2016). <em>La teoría del aprendizaje de Robert Gagné.</em> Psicología y Mente.',
      link:
        'https://psicologiaymente.com/desarrollo/teoria-aprendizaje-robert-gagne',
    },
    {
      referencia:
        'Centro de Investigación y Formación en Educación -CIFE- y Departamento de Psicología Universidad de Los Andes. (2003). <em>Estándares básicos de competencias ciudadanas.</em> Ministerio de Educación Nacional.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-75768_archivo_pdf.pdf',
    },
    {
      referencia:
        'Contreras, J. (2012). <em>La realidad de la práctica pedagógica y curricular en la educación básica y bachillerato del colegio Técnico Carlos Lenin Ávila de la Parroquia Bayas del Cantón Azogues, Provincia del Cañar, durante el año lectivo 2011-2012.</em> [Tesis de Maestría]. Universidad Técnica Particular de Loja.',
      link:
        'https://1library.co/document/9yn69pqv-practica-pedagogica-curricular-educacion-bachillerato-tecnico-parroquia-provincia.html',
    },
    {
      referencia:
        'DANE. (2021). <em>Censo nacional de población y vivienda 2018 - Colombia.</em> DANE.',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/censo-nacional-de-poblacion-y-vivenda-2018/cuantos-somos',
    },
    {
      referencia:
        'Decreto 1079 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },
    {
      referencia:
        'De Zubiría, J. (1994). <em>Tratado de pedagogía conceptual: los modelos pedagógicos.</em> Fundación Merani. Fondo de Publicaciones Bernardo Herrera Merino 8.',
      link: '',
    },
    {
      referencia:
        'Díaz, F. (2002). <em>Capítulo 8 Tipos de evaluación.</em> Universidad Nacional Abierta.',
      link:
        'https://des-for.infd.edu.ar/sitio/upload/diazbarrigacap8_EVALUACION.pdf',
    },
    {
      referencia: 'EUROINNOVA. (s.f.). <em>Escuela activa.</em> EUROINNOVA.',
      link: 'https://www.euroinnova.co/blog/escuela-activa',
    },
    {
      referencia:
        'Flórez, R. (1994). <em>Hacia una pedagogía del conocimiento.</em> McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Fundación MAPFRE. (s.f.). <em>El factor humano en la seguridad vial.</em> Fundación MAPFRE.',
      link:
        'https://www.fundacionmapfre.org/educacion-divulgacion/seguridad-vial/movilidad-segura-salud/sabias-que/factor-humano-seguridad-vial/',
    },
    {
      referencia:
        'Gagné, R. (1970). <em>Las condiciones del aprendizaje.</em> Aguilar.',
      link: '',
    },
    {
      referencia:
        'Grupo Educativo IMEI Plantel Zinapécuaro. (2019). <em>Fundamento de la Pedagogía.</em> IMEI.',
      link: 'https://www.grupoimei.mx/blog/2',
    },
    {
      referencia:
        'Ibáñez, C. (2020). Sobre el uso de los conceptos de ciclo de vida e historia de vida en ecología y evolución. <em>Gayana</em> (Concepción), 84(2), p.  93-100.',
      link: 'https://dx.doi.org/10.4067/S0717-65382020000200093',
    },
    {
      referencia:
        'Klein, S. (1994). Aprendizaje, principios y aplicaciones. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Knowles, M. (1980). <em>The modern practice of adult education: from pedagogy to andragogy.</em>  Association Press.',
      link: 'https://adams.marmot.org/Record/.b13242921',
    },
    {
      referencia:
        'Ley 1811 de 2016. [Congreso de la República]. Por la cual se otorgan incentivos para promover el uso de la bicicleta en el territorio nacional y se modifica el Código Nacional de Tránsito. Octubre 21 de 2016.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1811_2016.html#:~:text=OBJETO.,y%20mejorar%20la%20movilidad%20urbana',
    },
    {
      referencia:
        'Ley 1696 de 2013. [Congreso de Colombia]. Por medio de la cual se dictan disposiciones penales y administrativas para sancionar la conducción bajo el influjo del alcohol u otras sustancias psicoactivas. Diciembre 19 de 2013.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=55964',
    },
    {
      referencia:
        'Ley 769 de 2002.  [Poder Público - Rama Legislativa]. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). <em>Pedagogía.</em>  Ministerio de Educación Nacional.',
      link: 'https://www.mineducacion.gov.co/1621/article-80185.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). <em>Sistema educativo colombiano.</em> Ministerio de Educación Nacional.',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-superior/Sistema-de-Educacion-Superior/231235:Sistema-Educativo-Colombiano',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2022). <em>Traumatismos causados por el tránsito.</em> Organización Mundial de la Salud.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia:
        'Ortiz, A. (2013). <em>Modelos pedagógicos y teorías del aprendizaje.</em> Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Paniagua, K. y Umaña, M. (2008). La teoría de las inteligencias múltiples en la práctica docente en educación preescolar. <em>Revista Electrónica Educare,</em> XII (1), p. 135 - 149.',
      link: 'https://www.redalyc.org/articulo.oa?id=194114582017',
    },
    {
      referencia:
        'Personería de Bogotá. (s.f.). <em>ABC Derechos fundamentales.</em> Personería de Bogotá.',
      link:
        'https://www.personeriabogota.gov.co/images/ABC/ABC-Derechos-fundamentales.pdf',
    },
    {
      referencia:
        'Saborio, A. (2019). <em>Teorías del aprendizaje según Bruner.</em> Psicología-Online.',
      link:
        'https://www.psicologia-online.com/teorias-del-aprendizaje-segun-bruner-2605.html',
    },
    {
      referencia:
        'Truyols, S. y Sampedro, A. (2010). <em>Fundamentos de la seguridad vial.</em> Delta Publicaciones.',
      link: '',
    },
    {
      referencia:
        'Vygotski, L. (2015). <em>Obras escogidas II Pensamiento y lenguaje-conferencias sobre Psicología.</em> Antonio Machado Libros.',
      link: '',
    },
    {
      referencia:
        'Zaragoza, M. (2020). <em>Diferencia entre Pedagogía y Andragogía.</em> Educar para el cambio.',
      link:
        'https://educarparaelcambio.com/2020/02/17/diferencia-entre-pedagogia-y-andragogia/',
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
        nombre: 'Lino Andrés Quiroga Amaya',
        cargo: 'Experto temático',
        centro:
          'Centro de Tecnologías del Transporte - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Roja',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
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
