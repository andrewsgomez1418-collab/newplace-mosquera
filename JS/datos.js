/* ═══════════════════════════════════════════════════════
   NEWPLACE STORE — DATOS
   ⭐ Este es el único archivo que necesitas editar
      para agregar, modificar o eliminar negocios.
   ═══════════════════════════════════════════════════════ */
 
/* ──────────────────────────────────────────────────────────
   BLOG MOSQUERA — Edita aquí el contenido del blog
   ────────────────────────────────────────────────────────── */
const BLOG = {
  titulo:   "Bienvenidos a Mosquera, Cundinamarca",
  subtitulo: "El municipio que crece contigo",
  descripcion: "Mosquera es uno de los municipios de mayor crecimiento y desarrollo de Cundinamarca. Ubicado a solo 15 minutos de Bogotá, combina la tranquilidad del municipio con la dinámica empresarial y comercial de la región. Aquí encontrarás los mejores negocios locales, todos a tu alcance.",
  cualidades: [
    // Para editar: cambia el emoji (icon), el título y la descripción de cada tarjeta
    // Para agregar una: copia un bloque { icon, titulo, desc } y pégalo antes del ]
    { icon:"📍", titulo:"Ubicación Estratégica",   desc:"A 15 minutos del centro de Bogotá, con fácil acceso por la Calle 13 y Autopista Sur." },
    { icon:"🏘️", titulo:"Comunidad en Crecimiento", desc:"Más de 180.000 habitantes y en constante expansión residencial y comercial." },
    { icon:"🏭", titulo:"Zona Empresarial",         desc:"Sede de importantes empresas y parques industriales de la región." },
    { icon:"🌿", titulo:"Calidad de Vida",          desc:"Municipio seguro, con parques, colegios y servicios de primera calidad." },
    { icon:"🛒", titulo:"Comercio Local",           desc:"Una vibrante oferta de negocios locales que impulsan la economía del municipio." },
    { icon:"🚀", titulo:"Ciudad del Futuro",        desc:"Proyectos de infraestructura y desarrollo que posicionan a Mosquera como referente regional." },
  ],
  etiquetas: ["📌 Mosquera, Cundinamarca", "🇨🇴 Colombia", "⭐ Negocios Locales"],
};
 
/* ──────────────────────────────────────────────────────────
   CATEGORÍAS — No necesitas cambiar nada aquí
   ────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────────
   CATEGORÍAS
   Para agregar la foto de cada categoría, pon la imagen en:
   assets/categorias/nombre-categoria.jpg
   y escríbela en el campo  img  de cada una.
   Si no hay foto, se usa el color de fondo + emoji.
   ───────────────────────────────────────────────────────────── */
const CATS = [
  { id:"salud",        n:"SALUD",                          e:"", c:"#27ae60", img:"assets/categorias/categoria-salud.webp", imgHdr:"assets/categorias/destacados/destacados-salud.webp", showTitle: false},
  { id:"antojos",      n:"ANTOJOS",                        e:"", c:"#e74c3c", img:"assets/categorias/categoria-antojos.webp", imgHdr:"assets/categorias/destacados/destacados-antojos.webp", showTitle: false},
  { id:"hogar",        n:"SOLUCIONES DEL HOGAR",           e:"", c:"#2980b9", img:"assets/categorias/categoria-hogar.webp", imgHdr:"assets/categorias/destacados/destacados-soluciones-hogar.webp", showTitle: false},
  { id:"consumo",      n:"CONSUMO FRECUENTE",              e:"", c:"#8e44ad", img:"assets/categorias/categoria-consumofrecuente.webp", imgHdr:"assets/categorias/destacados/destacados-negocios- frecuentes.webp", showTitle: false},
  { id:"empresarial",  n:"SOLUCIONES EMPRESARIALES",       e:"", c:"#2c3e50", img:"assets/categorias/categoria-empresarial.webp", imgHdr:"assets/categorias/destacados/salud.webp", showTitle: false},
  { id:"servicios",    n:"SERVICIOS",                      e:"", c:"#d35400", img:"assets/categorias/categoria-servicios.webp", imgHdr:"assets/categorias/destacados/salud.jpg", showTitle: false},
  { id:"gourmet",      n:"EXPERIENCIA GOURMET",            e:"", c:"#922b21", img:"assets/categorias/categoria-gourmet.webp", imgHdr:"assets/categorias/destacados/destacados-gourmet.webp", showTitle: false},
  { id:"bienestar",    n:"SALUD Y BIENESTAR",                      e:"", c:"#1abc9c", img:"assets/categorias/categoria-bienestar.webp", imgHdr:"assets/categorias/destacados/destacado-bienestar.webp", showTitle: false},
  { id:"shopping",     n:"SHOPPING",                       e:"", c:"#e5007d", img:"assets/categorias/categoria-shopping.webp", imgHdr:"assets/categorias/destacados/destacados-shopping.webp", showTitle: false},
  { id:"imagen",       n:"IMAGEN Y ESTILO",                e:"", c:"#9b59b6", img:"assets/categorias/categoria-estilo.webp", imgHdr:"assets/categorias/destacados/destacados-imagen-estilo.webp", showTitle: false},
  { id:"mascotas",     n:"MUNDO MASCOTAS",                 e:"", c:"#f39c12", img:"assets/categorias/mascotas.webp", imgHdr:"assets/categorias/destacados/destacados-macotas.webp", showTitle: false},
  { id:"educacion",    n:"EDUCACION Y APRENDIZAGE",        e:"", c:"#3498db", img:"assets/categorias/categoria-educacion.webp", imgHdr:"assets/categorias/destacados/destacados-educacion.webp", showTitle: false},
  { id:"movilidad",    n:"TALLERES Y MOVILIDAD",           e:"", c:"#616161", img:"assets/categorias/categoria-talleres.webp", imgHdr:"assets/categorias/destacados/salud.jpg", showTitle: false},
  { id:"clasificados",    n:"CLASIFICADOS",                e:"", c:"#e65100", img:"assets/categorias/categoria-clasificados.webp", imgHdr:"assets/categorias/destacados/salud.jpg", showTitle: false},
  { id:"entretenimiento", n:"ENTRETENIMIENTO",             e:"", c:"#7b1fa2", img:"assets/categorias/categoria-entretenimiento.webp", imgHdr:"assets/categorias/destacados/salud.jpg", showTitle: false},
];
 
/* ──────────────────────────────────────────────────────────
   NEGOCIOS — AQUÍ AGREGAS CADA NEGOCIO
   
   CÓMO AGREGAR UN NEGOCIO NUEVO:
   1. Copia uno de los bloques de abajo (desde { hasta },)
   2. Pégalo debajo del último negocio, antes del ];
   3. Cambia los datos
   4. Guarda con Ctrl+S → el sitio se actualiza solo
 
   TIPOS:
     tipo:"estandar"    → info + contacto + mapa + galería
     tipo:"restaurante" → + pestaña de Menú
     tipo:"catalogo"    → + pestaña de Catálogo
 
   PARA EL LOGO:
     - Si tienes imagen: logo:"assets/logos/mi-logo.jpg"
     - Si no tienes:     logo:"🏪"  (cualquier emoji)
 
   PARA EL MAPA (mapUrl):
     1. Abre Google Maps, busca la dirección
     2. Clic en Compartir → Insertar un mapa → Copiar HTML
     3. Del código copiado, extrae solo la URL del src=""
     4. Pégala en mapUrl
 
   PARA LA GALERÍA:
     - Pon las fotos en la misma carpeta que este archivo
     - Escríbelas así: galeria:["foto1.jpg","foto2.jpg"]
   ────────────────────────────────────────────────────────── */
const NEGOCIOS = [
 
  /* ── NEGOCIO TIPO ESTÁNDAR (con galería de fotos) ───────── */
  {
    /* ══════════════════════════════════════════════════════════════
       COPIA ESTANDAR
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "estandar",
    cat:         "",
    destacado: 1,  // ORO 🥇
    destacado: 2,  // PLATA 🥈
    destacado: 3,  // BRONCE 🥉
    nombre:      "",
    slogan:      "",
    desc:        "",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/",
    cardImage:   "assets/logos/",
    portada:     "assets/logos/",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "", numero: "" },
],
    tel:         "",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "",
    mapUrl:      "",
    mapsLinks: [
      { nombre: "", url: "" },
      { nombre: "", url: "" },
      { nombre: "", url: "" },
    ],
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/.jpg",
    ],
  },
 
  /* ── NEGOCIO TIPO RESTAURANTE (con menú) ────────────────── */
  {
    /* ══════════════════════════════════════════════════════════════
       RESTAURANTE EJEMPLO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "restaurante-ejemplo",
    cat:         "",
    nombre:      "Restaurante Ejemplo",
    slogan:      "Cocina casera auténtica, sabores que enamoran",
    desc:        "El mejor restaurante de la zona con más de 15 años de tradición. Cocina casera con ingredientes frescos en un ambiente familiar.",
    tipo:        "restaurante",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "🍽️",
    cardImage:   "",
    portada:     "",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573009876543",
    tel:         "6012345678",
    ig:          "https://instagram.com/restaurante",
    fb:          "https://facebook.com/restaurante",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 10 #20-30, Bogotá",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [],
 
    /* ─── MENÚ DE COMIDAS ─── */
    menu: [
      {
        s: "Entradas",
        items: [
          { n:"Cazuela de mariscos", p:"$18.000", d:"Cremosa sopa de mariscos frescos" },
          { n:"Patacones con hogao",  p:"$8.000",  d:"Clásico colombiano" },
        ]
      },
      {
        s: "Platos Fuertes",
        items: [
          { n:"Bandeja paisa",   p:"$32.000", d:"El plato emblema de Colombia" },
          { n:"Churrasco",       p:"$45.000", d:"Carne de res a la parrilla" },
          { n:"Sancocho especial", p:"$22.000", d:"Receta de la abuela" },
        ]
      },
      {
        s: "Bebidas",
        items: [
          { n:"Limonada de coco", p:"$8.000", d:"Refrescante y cremosa" },
          { n:"Jugo natural",     p:"$6.000", d:"Mango, mora o maracuyá" },
        ]
      },
    ],
  },
 
  /* ── NEGOCIO TIPO CATÁLOGO (con productos) ──────────────── */
  {
    /* ══════════════════════════════════════════════════════════════
       TIENDA EJEMPLO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "tienda-ejemplo",
    cat:         "",
    nombre:      "Tienda Ejemplo",
    slogan:      "Tendencias urbanas a precios accesibles",
    desc:        "Ropa y accesorios de moda para toda la familia. Las últimas tendencias a precios que no creerás. Nuevas colecciones cada semana.",
    tipo:        "catalogo",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "👗",
    cardImage:   "",
    portada:     "",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573111111111",
    tel:         "",
    ig:          "https://instagram.com/tienda",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [],
 
    /* ─── CATÁLOGO DE PRODUCTOS ─── */
    catalogo: [
      { n:"Camiseta básica",  p:"$35.000", img:"👕", d:"100% algodón, varios colores" },
      { n:"Jean clásico",     p:"$89.000", img:"👖", d:"Corte recto, tallas 28-38" },
      { n:"Tenis deportivos", p:"$120.000",img:"👟", d:"Comodidad y estilo" },
      { n:"Bolso crossbody",  p:"$65.000", img:"👜", d:"Cuero sintético, varios colores" },
    ],
  },
 // ══ SALUD ════════════════════════════════════════════════
 // ══ SALUD ════════════════════════════════════════════════
 // ══ SALUD ════════════════════════════════════════════════
 // ══ SALUD ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       DRA INGRID MEDICO CIRUJANO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "dra-ingrid",
    cat:         "salud",
    destacado:   1,
    nombre:      "DRA INGRID MEDICO CIRUJANO",
    slogan:      "Especialista en medicina alternativa y farmacología vegetal médica funcional y estética ",
    desc:        "METABOLISMO: * sobrepeso * hígado graso * diabetes * estreñimiento * gastritis * hipotiroidismo * resistencia a la insulina * desintoxicación básica y profunda. MEDICINA ESTÉTICA: * tratamientos faciales avanzadas * tratamiento de acné * rejuvenecimiento facial * reducción de grasa localizada * tratamiento para acidez * terapias capilares * depilación laser permanente. SALUD MENTAL: * ansiedad * depresión y estrés * alteraciones de sueño. DOLOR Y REGENERACIÓN CELULAR: * artritis y artrosis * dolor lumbar * migraña * parálisis facial * neuralgia * fibromialgia * cansancio y fatiga crónica * contracturas musculares",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/draingrid/logo-doctora-ingrid.jpg",
    cardImage:   "assets/logos/draingrid/inicio-doctora-ingrid.jpg",
    portada:     "assets/logos/draingrid/portada-doctora-ingrid.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573212406305",
    tel:         "3212406305",
    ig:          "https://www.instagram.com/dra.ingrid.manrique/",
    fb:          "https://www.facebook.com/p/Dra-Ingrid-Andrea-Manrique-100064058706256/?locale=es_LA",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 5 # 1-64 PISO 2 entrada por la calle 2da MOSQUERA",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/draingrid/ingridfoto1.jpeg","assets/logos/draingrid/ingridfoto2.jpeg","assets/logos/draingrid/ingridfoto3.jpeg","assets/logos/draingrid/ingridfoto4.jpeg","assets/logos/draingrid/ingridfoto5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       DRA JULIA PSICOLOGA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "dra-julia",
    cat:         "salud",
    destacado:   1,
    nombre:      "DRA JULIA PSICOLOGA",
    slogan:      "SALUD MENTAL, PSICOTERAPIA, BIENESTAR EMOCIONAL, APOYO TERAPEUTICO, ATENCIÓN PSICOLOGIA ",
    desc:        " Egresada de la universidad Santo Tomás, con más de 35 años de experiencia en el abordaje de diversas problemáticas que afectan la salud mental de niños(as), adolescentes, jóvenes, adultos y personas mayores. Mi enfoque es sistémico, orientado a resultados, utilizando estrategias efectivas que facilitan la resolución de los conflictos y el bienestar emocional del paciente. Me caracterizo por ser una persona empática, amable, centrada en las necesidades individuales de cada consultante, ofreciendo un espacio seguro y de confianza para el proceso terapéutico.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/drajulia/logo-doctora-julia.jpg",
    cardImage:   "assets/logos/drajulia/inicio-doctora-julia.jpg",
    portada:     "assets/logos/drajulia/portada-doctora-julia.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573125369622",
    tel:         "3144441385",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 5 No. 1-64 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/iAktyZDwT12PNE1H8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/drajulia/juliafoto1.jpeg","assets/logos/drajulia/juliafoto2.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       CONSULTORIO TERAPEUTICO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "consultorio-terapeutico",
    cat:         "salud",
    nombre:      "CONSULTORIO TERAPEUTICO",
    slogan:      "Cada servicio es orientado a tus necesidades garantizando un tratamiento seguro y efectivo. Nuestros servicios realizados por profesionales en fisioterapia",
    desc:        "Valoración de terapia física Sesión de terapia física Descarga muscular Masajes de relajación y deportivos Valoración y masajes reductores Terapias especializadas Recuperación y maneja de lecciones Prevención de sobrecargas musculares Hidroterapia Vendaje neuromuscular y funcional sanación emocional acompañamiento terapéuticoequilibrio mental desarrollo personal escucha activa",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/terapeutico/logo-terapeutico.jpg",
    cardImage:   "assets/logos/terapeutico/inicio-terapeutico.jpg",
    portada:     "assets/logos/terapeutico/portada-terapeutico.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573224456329",
    tel:         "3224456329",
    ig:          "https://www.instagram.com/consultorioterapeuticoom25?igsh=dGliNXQ1dDJkN2U3",
    fb:          "https://www.facebook.com/share/14bsWWuNbz5/",
    tk:          "https://vt.tiktok.com/ZSxJF7V66/",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 2 ESTE # 3-59 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/NKAyJvtSV7oRr5Gu7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/terapeutico/terapeuticofoto1.jpeg","assets/logos/terapeutico/terapeuticofoto2.jpeg","assets/logos/terapeutico/terapeuticofoto3.jpeg","assets/logos/terapeutico/terapeuticofoto4.jpeg","assets/logos/terapeutico/terapeuticofoto5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
        LYDA TOVAR ODONTOLOGIA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lida-tovar",
    cat:         "salud",
    nombre:      "LYDA TOVAR ODONTOLOGIA",
    slogan:      "Sonrisa saludable, rehabilitacion dental, blanqueamiento dental, estética dental, diseño de la sonrisa.",
    desc:        "en “ odontología estética e integral Lyda Tovar” te ofrecemos una atención odontológica integral y personalizada, con las últimas tecnologías y tratamientos innovadores.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/lydatovar/logo-doctora-tovar.webp",
    cardImage:   "assets/logos/lydatovar/inicio-doctora-tovar.webp",
    portada:     "assets/logos/lydatovar/portada-doctora-tovar.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573009914883",
    tel:         "3009914883",
    ig:          "https://www.instagram.com/lydatovar.od?igsh=MWMzdDNmOG12bzA4MQ==",
    fb:          "https://www.facebook.com/share/1BuDKFfnNx/",
    tk:          "https://www.tiktok.com/@lydatovar.od?_r=1&_t=ZS-91YqqBHeTk0",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3A # 17 sur 96 Local 119 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "ASSETS/LOGOS/LYDATOVAR/lydatovar1jpeg.webp","ASSETS/LOGOS/LYDATOVAR/lydatovar2.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ROSEMBERG
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "rosemberg",
    cat:         "salud",
    nombre:      "CENTRO MEDICO Y LABORATORIO CLÍNICO DE REFERENCIA",
    slogan:      "Nuestra prioridad es tu salud y nuestra mejor herramienta es la prevención. ",
    desc:        "👩🏻‍🔬Calidad humana en la atención, eficiente oportunidad de entrega en los resultados,ambiente confortable; adecuada orientación según la necesidad de cada usuario. PRUEBAS DE EMBARAZO,  QUÍMICA SANGUÍNEO, HEMATOLOGÍA, EXAMEN DE ORINA Y COPROLOGICO",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/rosenberg/logo-centro-medico-rosenber.jpg",
    cardImage:   "assets/logos/rosenberg/inicio-centro-medico-rosenber.jpg",
    portada:     "assets/logos/rosenberg/portada-centro-medico-rosenber.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573123397984",
    tel:         "3123397984",
    ig:          "https://www.instagram.com/bio.careoficial?igsh=cDU5NW8zejYyMXZo",
    fb:          "https://www.facebook.com/share/184oFmhcGQ/",
    tk:          "",
    web:         "https://biocaresalud.com/",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 1 # 1 - 11 mosquera centro edificio alta vista local 101 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/G2YtfL2ms4VKcu9n6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/rosenberg/clinica1.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       FAST MEDICAL I.P.S. DR DAVID 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "fast-medical",
    cat:         "salud",
    nombre:      "FAST MEDICAL I.P.S. DR DAVID",
    slogan:      "Especialista en Salud y Seguridad en el Trabajo, Diplomado en Homeosinatria y Sueroterapia Heel",
    desc:        "Estamos comprometidos con la salud y bienestar. Brindamos servicios médicos integrales con atención profesional, humana de calidad, ofreciendo consultas, procedimientos especializados y acompañamiento en cada etapa del cuidado de nuestros pacientes. Trabajamos con responsabilidades, tecnología y equipo capacitado para garantizar confianza, seguridad y atención oportuna para toda la comunidad. salud integral, atención especializada, servicios médicos, bienestar y cuidado, calidad humana. ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/fast/logo-fast- medical.jpg",
    cardImage:   "assets/logos/fast/inicio-fast- medical.jpg",
    portada:     "assets/logos/fast/portada-fast-medical.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573053020214",
    tel:         "3138395531",
    ig:          "",
    fb:          "https://www.facebook.com/telemedicinadoctorflorian",
    tk:          "https://www.tiktok.com/@drdavidflorian?_r=1&_t=ZS-91mTBKjsUyq",
    web:         "https://telemedicinadoctorflorian.com.co/",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "centro comercial NOVATERRA LOCAL 315 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/VrL1zfUNVHArfwTk9?g_st=ipc",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/fast/fastfoto1.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ODONTOLOGIA CLAUDIA ZALAQUE 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "odontologa-claudia",
    cat:         "salud",
    nombre:      "ODONTOLOGIA CLAUDIA ZALAQUE",
    slogan:      "- Limpieza dental    - Blanqueamiento   - Ortodoncia  - Endodoncia - Odontología general",
    desc:        "En nuestra clínica odontológica cuidamos tu sonrisa con atención profesional, tecnología y un servicio de calidad, ofrecemos tratamientos de odontología general, estética dental, ortodoncia, limpieza, blanqueamientos, rehabilitación oral y salud preventiva para niños y adultos. y atención personalizada para brindarte bienestar, salud y una sonrisa llena de seguridad. ortodoncia, implementos dentales, higiene oral, atención profesional, higiene y bioseguridad  ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/zalaque/logo-doctora- claudia.jpg",
    cardImage:   "assets/logos/zalaque/inicio-doctora-claudia.jpg",
    portada:     "assets/logos/zalaque/portada-doctora-claudia.png",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573208293216",
    tel:         "3208293216",
    ig:          "https://www.instagram.com/p/DL8ip8DxWMS/?igsh=MWsxZHN2ZWU5MWtjYw==",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Cra. 2a #22-02, Barrio el cabrero, Mosquera, Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/tuvapCbBaecr16an9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/zalaque/claudiafoto1.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       PSICOLOGA YER
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "psicologa-yer",
    cat:         "salud",
    nombre:      "PSICOLOGA YER",
    slogan:      "Donde tu mente encuentra su lugar y tu historia su propósito.",
    desc:        "en nuestro centro de psicología brindamos acompañamiento profesional y humano para el bienestar emocional y mental. Ofrecemos atención personalizada en terapia individual, de pareja, familiar e infantil, orientada al manejo de ansiedad, estrés, autoestima, emociones y crecimiento personal. Trabajamos con compromiso, empatía y confidencialidad para ayudarte a encontrar equilibrio y bienestar en cada etapa de tu vida. Depresión * duelo * ansiedad * pautas de crianza *Anorexia",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/yer/logo-doctora-yolima.jpg",
    cardImage:   "assets/logos/yer/inicio-doctora-yolima.jpg",
    portada:     "assets/logos/yer/portada-doctora-yolima.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573103346547",
    tel:         "3103346547",
    ig:          "https://www.instagram.com/psi2024yolima?igsh=Zjl0ZHk3Z3Vrazhm",
    fb:          "https://www.facebook.com/profile.php?id=61567573120873",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 5 # 1-28 ESTE MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/kn3Lp99LxDr9hz6S9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/yer/yerfoto1.webp","assets/logos/yer/yerfoto2.webp","assets/logos/yer/yerfoto3.webp","assets/logos/yer/yerfoto4.webp","assets/logos/yer/yerfoto5.webp",
    ],
  },
  // ══ ANTOJOS ════════════════════════════════════════════════
  // ══ ANTOJOS ════════════════════════════════════════════════
  // ══ ANTOJOS ════════════════════════════════════════════════
  // ══ ANTOJOS ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       LA GRAN PARADA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lagranparada",
    cat:         "antojos",
    destacado:   1,
    nombre:      "LA GRAN PARADA",
    slogan:      "El placer de comer.",
    desc:        "Somos un espacio ideal para disfrutar sabores tradicionales y productos frescos todos los días. Trabajamos con calidad, sabor casero y atención amable para brindar a nuestros clientes una experiencia deliciosa en cada visita. SURTIMOS TU NEGOCIO: buñuelos, pan de bono, empanadas, palitos de queso }arepas de maiz con queso, pan de queso, crema de avena, masa lista para buñuelos, masa lista para pan de bonos",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/granparada/logo-gran-parada.jpg",
    cardImage:   "assets/logos/granparada/inicio-gran-parada.jpg",
    portada:     "assets/logos/granparada/portada-gran-parada.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573115866976",
    tel:         "3115866976",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 5 este #10-161 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/yLyydQGfmKZoMDU17?g_st=awb",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/granparada/parada1.jpeg","assets/logos/granparada/parada2.jpeg","assets/logos/granparada/parada3.jpeg","assets/logos/granparada/parada4.jpeg","assets/logos/granparada/parada5.jpeg",
    ],
  },
  
  {
    /* ══════════════════════════════════════════════════════════════
       GUSTOSO ARROZ PAISA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "gustoso",
    cat:         "antojos",
    destacado:   1,
    nombre:      "GUSTOSO ARROZ PAISA",
    slogan:      "Lo mejor del sabor !",
    desc:        "Gustoso no nació en una oficina, nació en una cocina de casa, entre el aroma del arroz recién salteado y el sonido crujiente de una milanesa en su punto exacto.​Quisimos crear algo que nos hiciera sentir orgullosos de nuestra tierra: una comida honesta, abundante y con ese toque artesanal que solo se logra cuando se cocina sin afán. Por eso, cada salsa es nuestra, cada arroz tiene su secreto y cada milanesa se prepara pensando en que tú, nuestro vecino, vuelvas siempre por más.​¡Gracias por ser parte de nuestra mesa!. sabor tradicional ,arroz chino ,comida paisa,cocina fusión,almuerzos especiales",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/gustoso/logo-gustoso.jpg",
    cardImage:   "assets/logos/gustoso/inicio-gustoso.jpg",
    portada:     "assets/logos/gustoso/portada-gustoso.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573118202319",
    tel:         "3224523902",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 19 #1-15 escuelita MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/tUSm4GFZnAZAzEDs8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/gustoso/gustosa1.jpg","assets/logos/gustoso/gustosa2.jpg","assets/logos/gustoso/gustosa4.jpg","assets/logos/gustoso/gustosa5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       EL BROASTER DEL CHEF
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "elbroasterdelchef",
    cat:         "antojos",
    nombre:      "EL BROASTER DEL CHEF",
    slogan:      "¡El mejor pollo del planeta!",
    desc:        " Es el lugar ideal para disfrutar del auténtico sabor del pollo broaster crocante y una gran variedad de comidas rápidas y platos especiales. Ofrecemos almuerzos caseros, carnes a la plancha, alitas bañadas, sándwiches, nuggets y mucho más, preparados con calidad, sabor y excelente atención. Somos un espacio perfecto para compartir en familia y disfrutar de promociones, buen ambiente y el mejor sabor en cada bocado. gastronomía gourmet, cocina tradicional, experiencia culinaria, ingredientes frescos, atención de calidad",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/broasterdelchef/logo-broaster- chef.jpg",
    cardImage:   "assets/logos/broasterdelchef/inicio-broaster-chef.jpg",
    portada:     "assets/logos/broasterdelchef/portada-broaster-chef.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573238233537",
    tel:         "3238233537",
    ig:          "https://www.instagram.com/elbroasterdelchefmosquera?igsh=cGo5ODkzbGtodzU2",
    fb:          "https://www.facebook.com/share/1LJHjdGQpA/",
    tk:          "https://www.tiktok.com/@el.broaster.del.chef.mos?_r=1&_t=ZS-94Zq0FIUFMq",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 10 # 15 - 35 EL POBLADO MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/zBcBXogXoZDnZmoR9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/broasterdelchef/boasterchef1.jpeg","assets/logos/broasterdelchef/boasterchef2.jpeg","assets/logos/broasterdelchef/boasterchef3.jpeg","assets/logos/broasterdelchef/boasterchef4.jpeg","assets/logos/broasterdelchef/boasterchef5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       BROASTER RAPI EXPRESS 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "rapiexpress",
    cat:         "antojos",
    nombre:      "BROASTER RAPI EXPRESS",
    slogan:      "Hecho con sabor, servido con amor, COMIDA CHINA Y PLATOS A LA CARTA",
    desc:        "En Broaster Rapi Express ofrecemos una deliciosa variedad de comida rápida, comida china y platos a la carta preparados con sabor, calidad y frescura. Disfruta de pollo broaster crujiente, arroces especiales, carnes, acompañamientos y recetas ideales para compartir en familia o con amigos. Nos destacamos por nuestra atención rápida, buen servicio y sabores que conquistan en cada bocado. COMIDA CHINA Y PLATOS A LA CARTA Pollo broaster, comida rápida, domicilios express, sabor crujiente, atención rápida",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/rapiexpress/logo-rapi-express.jpg",
    cardImage:   "assets/logos/rapiexpress/inicio-rapi-express.jpg",
    portada:     "assets/logos/rapiexpress/portada-rapi-express.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573143522518",
    tel:         "3143522518",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 19 # 1-36 Barrio La Esperanza MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/2eWhcta4MNHvnz4D6?g_st=awb",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/rapiexpress/rapiexpress1.webp","assets/logos/rapiexpress/rapiexpress2.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       HOJA VIVA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "hojaviva",
    cat:         "antojos",
    nombre:      "HOJA VIVA",
    slogan:      "UN SABOR QUE ENVUELVE TU CORAZÓN",
    desc:        "Somos un negocio dedicado a ofrecer sabores tradicionales y caseros con productos frescos y de excelente calidad. Disfruta de deliciosos envueltos, empanadas, arepas de maíz y tamales preparados con recetas típicas que resaltan el auténtico sabor de nuestra cocina. brindamos atención amable y un ambiente ideal para compartir meriendas tradicionales y sabor. Envueltos tradicionales, sabor casero, recetas artesanales, comida típica, maíz comlombiano",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/hojaviva/logo-hoja-viva.jpg",
    cardImage:   "assets/logos/hojaviva/inicio-hoja-viva.png",
    portada:     "assets/logos/hojaviva/portada-hoja-viva.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573209077219",
    tel:         "3209077219",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 13 Con calle 12 c MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/DNeYSXyKRcZDPuUz9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/hojaviva/hojviva1.jpg","assets/logos/hojaviva/hojviva2.png",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       DON HOJALDRE
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "donhojaldre",
    cat:         "antojos",
    nombre:      "DON HOJALDRE",
    slogan:      "PASTELERIA ARTESANAL",
    desc:        "Disfruta de nuestros deliciosos pasteles en hojaldre, preparados con masa fresca, crujiente y rellenos llenos de sabor. Acompañalos con una variedad de bebidas frías y calientes ideales para cualquier momento del día. Somos el lugar perfecto para compartir un desayuno, una merienda y un antojo con calidad, sabor casero y excelente atención. pasteles artesanales, repostería creativa, sabores caseros, tortas personalizadas, postres gourmet",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/hojaldre/logo-hojaldre.jpg",
    cardImage:   "assets/logos/hojaldre/inicio-hojaldre.jpg",
    portada:     "assets/logos/hojaldre/portada-hojaldre.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573503987052",
    tel:         "3503987052",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 2 # 2-65 mosquera centro",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/a66syFmoJnELjz3b7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/hojaldre/hojaldre1.jpeg","assets/logos/hojaldre/hojaldre2.jpeg","assets/logos/hojaldre/hojaldre3.jpeg","assets/logos/hojaldre/hojaldre4.jpg","assets/logos/hojaldre/hojaldre5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       PIZZA EXPRESS 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "pizzaexpress",
    cat:         "antojos",
    nombre:      "PIZZA EXPRESS",
    slogan:      "AQUÍ SERVIMOS NO COMPETIMOS. ",
    desc:        "En Pizza Express ofrecemos deliciosas pizzas preparadas al momento, acompañadas de una gran variedad de sabores para todos los gustos. Disfruta de nuestrasañas caseras, ensaladas de frutas refrescantes y muchas más opciones ideales para compartir en familia o con amigos. Nos destacamos por la calidad, el buen sabor y una atención rápida y amable que hace de cada visita una experiencia especial. Pizza artesanal, domicilios, rápidos sabor italiano, ingredientes frescos,  comida express ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/pizzaexpress/logo-pizza-express.jpg",
    cardImage:   "assets/logos/pizzaexpress/inicio-pizza-express.jpg",
    portada:     "assets/logos/pizzaexpress/portada-pizza-express.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573102507039",
    tel:         "3102507039",
    ig:          "",
    fb:          "https://www.facebook.com/share/14MfWbLTjSt/",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 9a este#16A-30 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/JnidzMc4x3fWPRcTA?g_st=aw",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/pizzaexpress/express1.jpg","assets/logos/pizzaexpress/express2.jpg","assets/logos/pizzaexpress/express3.jpg","assets/logos/pizzaexpress/express4.jpg","assets/logos/pizzaexpress/express5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       RICA TENTACION RT
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "ricatentacion",
    cat:         "antojos",
    nombre:      "RICA TENTACION",
    slogan:      "PORQUE MERECES LO MEJOR.",
    desc:        "Somos una frutería especializada en ofrecer productos frescos, deliciosos y llenos de sabor. Disfruta de waffles, ensaladas de frutas, jugos naturales, batidos, postres y una gran variedad de opciones perfectas para cualquier momento del día. Trabajamos con ingredientes de calidad y excelente atención para brindar una experiencia refrescante, dulce y saludable a cada cliente. Antojos dulces, postres deliciosos, sabores irresistible, repostería artesanal, dulce tentacion",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/TENTACION/logo-rica-tentacion.jpg",
    cardImage:   "assets/logos/TENTACION/inicio-rica-tentacion.jpg",
    portada:     "assets/logos/TENTACION/portada-rica-tentacion.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573134901857",
    tel:         "3134901857",
    ig:          "https://www.instagram.com/ricatentacionfru?igsh=MXhtOTBjdjQ1dDlkMw==",
    fb:          "https://www.facebook.com/share/1KjtX7pkij/",
    tk:          "https://www.tiktok.com/@rica.tentacion.rt1?_r=1&_t=ZS-9511vbKhTEq",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Kra 14c No 18-30 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/AZmm4PnxjJAzzTCw6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/TENTACION/tentacion1.jpg","assets/logos/TENTACION/tentacion2.jpg","assets/logos/TENTACION/tentacion3.jpg","assets/logos/TENTACION/tentacion4.jpg","assets/logos/TENTACION/tentacion5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       SANDWICH Y BURGER
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "sandwichyburger",
    cat:         "antojos",
    nombre:      "SANDWICH Y BURGER",
    slogan:      "Más sabor en cada mordida.",
    desc:        "En sandwich & burger ofrecemos una experiencia llena de sabor con hamburguesas y sándwiches preparados al momento, utilizando ingredientes frescos y de excelente calidad. Disfruta de combinaciones irresistibles, acompañamientos deliciosos y bebidas perfectas para compartir en familia o con amigos. Somos el lugar ideal para quienes buscan comida rápida con sabor casero, buena atención y el mejor ambiente. Hamburguesas artesanales, sandwich gourmet, comida rápida,  ingredientes frescos, sabor irresistible",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/SANDWICH/logo-sandwich-burguer.jpg",
    cardImage:   "assets/logos/SANDWICH/inicio-sandwich-burguer.jpg",
    portada:     "assets/logos/SANDWICH/portada-sandwich-burguer.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WHATSAPP", numero: "573118984012" },
  { nombre: "WHATSAPP", numero: "573212860408" },
],
    tel:         "3118984012",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 19 # 1-29 VILLA MARIA 2 (sede principal)-/-CARRERA 3 # 3-67 (SEDE CENTRAL)",
    mapUrl:      "",
    mapsLinks: [
      { nombre: "VILLA MARIA 2", url: "https://maps.app.goo.gl/qrXDUXNJrox4NwL5A" },
      { nombre: "SEDE CENTRAL", url: "https://maps.app.goo.gl/GDBh6LPk1aAwQXET6" },
    ],
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/SANDWICH/samdwich1.jpeg","assets/logos/SANDWICH/samdwich2.jpeg","assets/logos/SANDWICH/samdwich3.jpg","assets/logos/SANDWICH/samdwich4.jpg","assets/logos/SANDWICH/samdwich5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       SERVIPOLLOS LA 22 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "servipollosla22",
    cat:         "antojos",
    nombre:      "SERVIPOLLOS LA 22",
    slogan:      "UN LUGAR DE TRADICIÓN QUE NO NECESITA PRESENTACIÓN",
    desc:        "En nuestro asadero te ofrecemos sabor, calidad y tradición en cada preparación. Disfruta de deliciosos pollos asados, jugosos y perfectamente sazonados acompañados de papas, arepas, ensaladas, comida de variedad y muchos más. Trabajamos con ingredientes frescos y atención rápida para brindar a nuestros clientes una experiencia llena de sabor, ideal para compartir en familia o con amigos. Carnes asadas, sabor auténtico, cocina al carbón, especialidad gourmet, parrilla tradicional ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/POLLOSLA22/logo-servipollos.jpg",
    cardImage:   "assets/logos/POLLOSLA22/inicio-servipollos.jpg",
    portada:     "assets/logos/POLLOSLA22/portada-servipollos.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573183909968",
    tel:         "3183909968",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Cra 12 8-38 Santana-Mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/mSqxrx74q2m2J6QU8?g_st=awb",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/POLLOSLA22/servipollo1.webp","assets/logos/POLLOSLA22/servipollo2.webp","assets/logos/POLLOSLA22/servipollo3.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       LA CASA DE LOS ARROCES 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lacasadelosarroces",
    cat:         "antojos",
    nombre:      "LA CASA DE LOS ARROCES",
    slogan:      "Sabores que llenan, recetas que enamoran.",
    desc:        "Disfruta el mejor sabor en cada plato con nuestra especialidad en arroz chino y arroz paisa, preparados al momento con ingredientes frescos, abundantes porciones y ese toque casero que encanta. Una combinación perfecta entre tradición, sazón y variedad para compartir en familia o disfrutar cuando quieras darte un buen gusto. Arroz chino / arroz paisa / comida rápida / sabor casero / almuerzos / domicilio / comida colombiana / comida oriental / porciones grandes / restaurante familiar.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/casadearroces/Logo-casa-de-los-arroces.webp",
    cardImage:   "assets/logos/casadearroces/Inicio-casa-de-los-arroces.webp",
    portada:     "assets/logos/casadearroces/Portada-casa-de-los-arroces.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573138207416",
    tel:         "3138207416",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 17 6 - 15e maipore Mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/s2XKoStAmYAqJBWW9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/casadearroces/casadelosarroces1.webp","assets/logos/casadearroces/casadelosarroces2.webp",
    ],
  },
// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
{
    /* ══════════════════════════════════════════════════════════════
       STTEL  304
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "steel304",
    cat:         "hogar",
    destacado:   1,
    nombre:      "STTEL  304",
    slogan:      "SOLUCIONES EN VIDRIOS Y ACERO INOXIDABLES A MEDIDA DISEÑO- FABRICACION INSTALACION",
    desc:        "Divisiones de baño en vidrio Barandales y fachadas Accesorios en acero inoxidables Sandblasting y mecanizado Ventas de cortinas",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/STTEL/logo-stell.jpg",
    cardImage:   "assets/logos/STTEL/inicio-stell.jpg",
    portada:     "assets/logos/STTEL/portada-sttel.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573102927384",
    tel:         "3138506002",
    ig:          "https://www.instagram.com/steel304_co?igsh=YTRsczllNXU1Zmoz",
    fb:          "https://www.facebook.com/share/1L6kwFco9d/",
    tk:          "https://www.tiktok.com/@steel.3041?_r=1&_t=ZS-96MEppVmnxg",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 10a 14 46 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/XyyJYfhFZdkgZ36o9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/STTEL/steel1.jpg","assets/logos/STTEL/steel2.jpg","assets/logos/STTEL/steel3.jpg",
      ],
    },
  {
    /* ══════════════════════════════════════════════════════════════
       CERRAJERIA MAXSECURITY
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "maxsecuri",
    cat:         "hogar",
    nombre:      "MAXSECURITY",
    slogan:      "Seguridad y confianza en cada acceso",
    desc:        "Ofrecemos soluciones integrales en cerrajería y seguridad para hogares, vehículos y negocios. Contamos con apertura de puertas, duplicado de llaves, instalación de chapas, cerraduras, sistemas de seguridad y atención rápida y confiable. Trabajamos con calidad, responsabilidad y tecnología para brindarte tranquilidad y protección.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/MAXSECURITY/logo-cerrajeria-maxsecurity.jpg",
    cardImage:   "assets/logos/MAXSECURITY/inicio-cerrajeria-maxsecurity.jpg",
    portada:     "assets/logos/MAXSECURITY/portada-cerrajeria-maxsecurity.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573212557963",
    tel:         "3212557963",
    ig:          "https://www.instagram.com/cerrajeria_maxsecurity?utm_source=qr&igsh=bGs0a3F3ZDR2Y2Rr",
    fb:          "https://www.facebook.com/share/14KRHsVkWn8/",
    tk:          "https://www.tiktok.com/@cerrajera.maxsecu?_t=ZS-90RcqNFUc5Q&_r=1",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3 # 14-23 Mosquera",
    mapUrl:      "",
    mapsLink:    "https://www.google.com/maps/place/Cerrajer%C3%ADa+MaxSecurity/@4.7118037,-74.2252238,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f7801973a6761:0xd1c4ae3297a53092!8m2!3d4.7118037!4d-74.2226489!16s%2Fg%2F11b7q8mmvd?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/MAXSECURITY/cerrajeria1.jpg","assets/logos/MAXSECURITY/cerrajeria2.jpg","assets/logos/MAXSECURITY/cerrajeria3.jpg","assets/logos/MAXSECURITY/cerrajeria4.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       GALLERY HOME 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "galleryhome",
    cat:         "hogar",
    nombre:      "GALLERY HOME ",
    slogan:      "34 AÑOS DE EXPERIENCIA",
    desc:        "CORTINAS Y PERSIANAS, ROMANAS, ENRROLLABLES, DOMÓTICA, PANEL JAPONES, MOTORIZADOS, CORTINAS TRADICIONAL, PERSIANAS MADERAS Y ALUMINIO, MANTENIMIENTO DE CORTINAS",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/GALLERY/logo-gallery-home.webp",
    cardImage:   "assets/logos/GALLERY/inicio-gallery-home.webp",
    portada:     "assets/logos/GALLERY/portada-gallery-home.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573123726267",
    tel:         "3105512663",
    ig:          "https://www.instagram.com/galleryhomecortinas?igsh=MWc2aXJtbmpiZGdodA==",
    fb:          "https://www.facebook.com/share/1CFGbiHuda/",
    tk:          "https://www.tiktok.com/@galleryhomecortinas?_r=1&_t=ZS-93Go1I9buNw",
    web:         "https://youtube.com/@galleryhomecortinas?si=BX-81PDGrkGmCdlC",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 10 A # 11-154 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/tMi7UHEb9hBq7eCt7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/GALLERY/gallery1.webp","assets/logos/GALLERY/gallery2.webp","assets/logos/GALLERY/gallery3.webp","assets/logos/GALLERY/gallery4.jpg","assets/logos/GALLERY/gallery5.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       GAMA inspecciones e ingeniería 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "gama",
    cat:         "hogar",
    nombre:      "GAMA ",
    slogan:      "Revisión periódica de gas (RESIDENCIAL Y COMERCIAL). Acreditados por ONAC bajo la norma ISO/ IEC 17020",
    desc:        "garantizando seguridad, cumplimiento y correcto funcionamiento de las instalaciones residenciales y comerciales. Ofrecemos inspección, diagnóstico y certificación del sistema de gas, brindando confianza y tranquilidad a nuestros clientesRealizamos revisión periódica de gas con personal capacitado y equipos especializados.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/gama/logo-gama.jpg",
    cardImage:   "assets/logos/gama/inicio-gama.jpg",
    portada:     "assets/logos/gama/portada-gama.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573138446394",
    tel:         "3138446394",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 18 # 3a esté 04 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/gama/gama1.jpg","assets/logos/gama/gama2.jpg","assets/logos/gama/gama3.jpg","assets/logos/gama/gama4.jpg","assets/logos/gama/gama5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       INNOVA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "innova",
    cat:         "hogar",
    nombre:      "INNOVA ",
    slogan:      "Estamos juntos para ayudarte a construir, asegurar y transformar tu espacio",
    desc:        "Nos dedicamos a la carpintería y la herrería, ofreciendo servicios de diseño, elaboración y reestructuración de muebles en madera, adaptados a las necesidades y estilos de cada cliente. Trabajamos en la creación y restauración de piezas funcionales y decorativas, cuidando cada detalle para garantizar calidad y durabilidad. Además, complementamos nuestros procesos con trabajos en fabricación de estructuras, soportes y refuerzos que brindan mayor resistencia y estabilidad, logrando así soluciones integrales, personalizadas y de alto nivel para todo tipo de espacios.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/innova/logo-innova.jpg",
    cardImage:   "assets/logos/innova/inicio-innova.jpg",
    portada:     "assets/logos/innova/portada-innova.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573202801379",
    tel:         "3202801379",
    ig:          "https://www.instagram.com/innova_herrajeser?igsh=Z255NWp5MjdrMWxj",
    fb:          "https://www.facebook.com/share/15bxZij47iF/",
    tk:          "https://www.tiktok.com/@innova_herrajes?_r=1&_t=ZS-94gruQRpsOI",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 8a # 20 21 Villa María IV etapa",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/innova/innova1.jpg","assets/logos/innova/innova2.jpg","assets/logos/innova/innova3.jpg","assets/logos/innova/innova4.jpg","assets/logos/innova/innova5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MAYTON ARTE Y MADERA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "mayton",
    cat:         "hogar",
    nombre:      "MAYTON ARTE Y MADERA",
    slogan:      "Transformamos tus ideas en muebles únicos que se adaptan a tu hogar o negocio.",
    desc:        "Mayton Arte y Diseño en Madera es un taller de carpintería especializado en la fabricación de muebles a medida, cocinas integrales, closets y proyectos personalizados en madera. Nos enfocamos en crear espacios funcionales, modernos y duraderos, combinando diseño, calidad y acabados detallados para cada cliente.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/mayton/logo-mayton.jpg",
    cardImage:   "assets/logos/mayton/inicio-mayton.jpg",
    portada:     "assets/logos/mayton/portada-mayton.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573133828058",
    tel:         "3133828058",
    ig:          "https://www.instagram.com/maytonarteymadera?igsh=MWhxczk1dnhpaXY4cQ==",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 14c#18-09 Mosquera Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/f1QgZnTaPFmWPpcY6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/mayton/mayton1.jpg","assets/logos/mayton/mayton2.jpg","assets/logos/mayton/mayton3.jpg","assets/logos/mayton/mayton4.jpg","assets/logos/mayton/mayton5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MODULARES Vr
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "modularesvr",
    cat:         "hogar",
    nombre:      "MODULARES Vr",
    slogan:      "Transformando hogares en Mosquera con calidad, experiencia y cercanía",
    desc:        "En Mosquera, Cundinamarca, Modulares VR SAS se ha consolidado como una empresa que entiende las necesidades reales de las familias y trabaja para transformar sus espacios en lugares funcionales, modernos y acogedores.Con más de 14 años de experiencia, la empresa se especializa en el diseño, fabricación e instalación de mobiliario en madera, ofreciendo soluciones personalizadas que se adaptan al estilo de vida, presupuesto y gustos de cada cliente.Uno de los pilares de Modulares VR SAS es su compromiso con el medio ambiente, trabajando con madera reforestada, lo que permite ofrecer productos resistentes y duraderos, aportando al mismo tiempo a la sostenibilidad y al cuidado del entorno.Su portafolio incluye la fabricación de cocinas integrales, closets, puertas, centros de entretenimiento y mobiliario personalizado, desarrollando proyectos pensados para optimizar los espacios del hogar y mejorar la calidad de vida de las familias.Más allá de fabricar muebles, Modulares VR SAS se destaca por brindar un acompañamiento cercano durante todo el proceso, desde la asesoría inicial hasta la instalación final, garantizando calidad, cumplimiento y satisfacción en cada proyecto.Hoy, la empresa continúa creciendo en Mosquera y sus alrededores, convirtiéndose en un aliado confiable para quienes desean renovar, organizar y embellecer sus hogares con soluciones hechas a la medida.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/modulares/logo-modulares-vr.jpg",
    cardImage:   "assets/logos/modulares/inicio-modulares-vr.jpg",
    portada:     "assets/logos/modulares/portada-modulares-vr.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573123718939",
    tel:         "3123718939",
    ig:          "https://www.instagram.com/modularesvr?igsh=bDcwN2w5amhxbXYz",
    fb:          "https://www.facebook.com/share/1CRN3KLWKe/",
    tk:          "https://www.tiktok.com/@modularesvr?_r=1&_t=ZS-96MO0izLGbg",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 15 # 9C-10, Mosquera, Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/fFZ2DtNt2HUKntge6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/modulares/modularesvr1.jpg","assets/logos/modulares/modularesvr2.jpg","assets/logos/modulares/modularesvr3.jpg","assets/logos/modulares/modularesvr4.jpg","assets/logos/modulares/modularesvr5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MULTIEXPRESS CERRAJERIA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "multiexpress",
    cat:         "hogar",
    nombre:      "MULTIEXPRESS CERRAJERIA ",
    slogan:      "Aperturas Cambios de guardas Instalaciones de chapas de seguridad Duplicados de llaves Automóviles",
    desc:        "Nos encargamos de hacer aperturas, cambios de guardas, instalaciones de chapas de seguridad, sencillas, duplicados de llaves y en general todo lo relacionado con la cerrajería. Aperturas, Cambios de guardas, Instalaciones de chapas de seguridad, Duplicados de llaves, Automóviles",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/multiexpress/logo-multiexpress.jpg",
    cardImage:   "assets/logos/multiexpress/inicio-multiexpress.jpg",
    portada:     "assets/logos/multiexpress/portada-multiexpress.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573228982393",
    tel:         "3228982393",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 12 7b 82 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/FJpEgt7VouPNhNa59",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/multiexpress/multiexpress1.jpg","assets/logos/multiexpress/multiexpress2.jpg","assets/logos/multiexpress/multiexpress3.jpg","assets/logos/multiexpress/multiexpress4.jpg","assets/logos/multiexpress/multiexpress5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ALUMINGLASS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "aluminglas",
    cat:         "hogar",
    nombre:      "ALUMINGLASS",
    slogan:      "Transparencia, resistencia y elegancia en cada detalle.",
    desc:        "No solo instalamos estructuras; transformamos espacios. Nos especializamos en soluciones arquitectónicas en vidrio y aluminio, destacándose por: Acabados de Excelencia: Cuidamos los detalles que otros ignoran.Cumplimiento Garantizado: Entregas a tiempo porque respetamos tu cronograma.Innovación: Diseños modernos alineados con las tendencias actuales de decoración y arquitectura. divisiones de baño acero inoxidable diseños modernos aluminio arquitectónico vidrio templado ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/ALUMINGLASS/logo-aluminglass.webp",
    cardImage:   "assets/logos/ALUMINGLASS/inicio-aluminglass.webp",
    portada:     "assets/logos/ALUMINGLASS/portada-aluminglass.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573126321030",
    tel:         "3126321030",
    ig:          "https://www.instagram.com/alumiglass.col?igsh=czN4eWFkcGg0OThn",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "tv. 15a # 8 - 77 mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/wBMQDdbxeJsN5o6N9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/aluminglass/aluminglass1.webp","assets/logos/aluminglass/aluminglass2.webp","assets/logos/aluminglass/aluminglass3.webp","assets/logos/ALUMINGLASS/aluminglass4.webp","assets/logos/aluminglass/aluminglass5.webp",
    ],
  },
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
{
    /* ══════════════════════════════════════════════════════════════
        PATIKOO PAÑALERIA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "patikoo",
    cat:         "shopping",
    destacado:   1,
    nombre:      "PATIKOO PAÑALERIA",
    slogan:      "Celebraciones creativas y llenas de amor.",
    desc:        "Piñatería Patikoo nace para crear celebraciones creativas y llenas de amor, donde cada detalle cuenta. Es un emprendimiento dedicado a la ambientación y decoración de eventos infantiles y familiares, ofreciendo propuestas personalizadas para cumpleaños, baby showers, bautizos y fechas especiales.Además, en Piñatería Patikoo los clientes pueden encontrar todo lo necesario para decorar sus fiestas en un solo lugar, como guirnaldas, bombas, serpentinas, piñatas, globos metalizados, velas y diversos accesorios para celebraciones. Su trabajo se distingue por la creatividad, el cuidado en los detalles y el compromiso de convertir cada evento en un recuerdo especial.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/patikoo/logo-patikoo-pañalera.jpg",
    cardImage:   "assets/logos/patikoo/inicio-patikoo-pañalera.jpg",
    portada:     "assets/logos/patikoo/portada-patikoo-pañalera.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573112484143",
    tel:         "3112484143",
    ig:          "https://www.instagram.com/pinateria_patikoo?igsh=bXd3cmRmY3A3dGF0&utm_source=qr",
    fb:          "https://www.facebook.com/share/1CnVw5AK38/?mibextid=wwXIfr",
    tk:          "https://www.tiktok.com/@pinateria_patikoo?_r=1&_t=ZS-93HppPfDs3s",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Transversal 15a # 8-35 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/sK7xGFxq8jFLHJ2i6?g_st=ac",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/patikoo/patiko1.jpeg","assets/logos/patikoo/patiko2.jpeg","assets/logos/patikoo/patiko3.jpeg","assets/logos/patikoo/patiko4.jpeg","assets/logos/patikoo/patiko5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       COMPRA Y VENTA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "compraventa",
    cat:         "shopping",
    nombre:      "COMPRA Y VENTA ",
    slogan:      "Compra ventas lavadoras, neveras y estufas. Servicio técnico de mantenimiento y reparación a domicilio.",
    desc:        "Nuestro compromiso es hacer que tus equipos vuelvan a funcionar como nuevos, para que puedas seguir disfrutando de la vida sin preocupaciones. Así que no dudes en ponerte en contacto con nosotros y permítenos ser tu solución de confianza en reparaciones. ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/compraventa/logo-compra-y-venta.jpg",
    cardImage:   "assets/logos/compraventa/inicio-compra-y-venta.jpg",
    portada:     "assets/logos/compraventa/portada-compra-y-venta.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573195888525",
    tel:         "3195888525",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "DG. 18 # 4A-21 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/GAhnYsF42LnaA7tA6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       FLORALIA FLOWER MARKET
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "floraliaflowermarket",
    cat:         "shopping",
    nombre:      "FLORALIA FLOWER MARKET",
    slogan:      "En floralia flower market convertimos emociones en detalles.",
    desc:        "Imagen publicitaria de una floristería llamada Floralia Flower Market, enfocada en la venta de detalles especiales y regalos llenos de amor y elegancia. En el diseño se destacan hermosos arreglos florales con rosas rojas, bouquets personalizados, anchetas, peluches y desayunos sorpresa, ideales para sorprender en ocasiones especiales. La imagen transmite un estilo romántico, delicado y moderno, acompañado de la frase “Detalles que hablan por ti”, resaltando la importancia de expresar emociones a través de regalos únicos y memorables. Arreglos florales, Peluches, Anchetas, Desayunos sorpresa, Llenos de amor y estilo. Cada producto está diseñado para sorprender, celebrar y enamorar.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/floralia/logo-floralia.jpg",
    cardImage:   "assets/logos/floralia/inicio-floralia.jpg",
    portada:     "assets/logos/floralia/portada-floralia.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573237985111",
    tel:         "3237985111",
    ig:          "https://www.instagram.com/floraliaflowermarket?igsh=MWFyMXFpNjIyYzFncw==",
    fb:          "https://www.facebook.com/share/19s9ggfRbC/?mibextid=wwXIfr",
    tk:          "https://www.tiktok.com/@floraliaflowermarket?_r=1&_t=ZT-925VAzsBSDv",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 1 No.3-68 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/h72LdKNWQcgzhhkB7?g_st=ipc",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/floralia/floralia1.webp","assets/logos/floralia/floralia2.webp","assets/logos/floralia/floralia3.webp","assets/logos/floralia/floralia4.webp","assets/logos/floralia/floralia5.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       FLORES Y DETALLES CON AMOR
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "floresconamor",
    cat:         "shopping",
    nombre:      "FLORES Y DETALLES CON AMOR",
    slogan:      "DETALLES QUE FLORECEN MOMENTOS QUE SE QUEDAN CON EL ARTE DE REGALAR LA MAGIA DE FLORECER.",
    desc:        "Una floristería y tienda de detalles dedicada a crear momentos inolvidables a través de arreglos florales elegantes, personalizados y llenos de amor. Ofrecemos bouquets, rosas eternas, cajas sorpresa, desayunos especiales, peluches, globos, anchetas y detalles para toda ocasión como cumpleaños, aniversarios, grados y celebraciones especiales. Nos destacamos por la calidad de nuestros productos, la creatividad en cada diseño y una atención cálida y confiable que convierte cada entrega en una experiencia única.  Arreglos florales, flores naturales, regalos especiales, detalles personalizados, decoración floral ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/conamor/logo-flores-y-detalles-con-amor.jpg",
    cardImage:   "assets/logos/conamor/inicio-flores-y-detalles-con-amor.jpg",
    portada:     "assets/logos/conamor/portada-flores-y-detalles-con-amor.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573116780284",
    tel:         "3116780284",
    ig:          "",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 18#7-76 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/77hKTs4REUVSBWey5",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/conamor/conamor1.jpg","assets/logos/conamor/conamor2.jpg","assets/logos/conamor/conamor3.jpg","assets/logos/conamor/conamor4.jpg","assets/logos/conamor/conamor5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MERKASA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "merkasa",
    cat:         "shopping",
    nombre:      "MERKASA",
    slogan:      "Dormir bien no es un lujo, es una decisión. Empieza por tu cama.",
    desc:        "Contamos con una amplia variedad de sábanas, edredones, cubrelechos, fundas, cobijas y accesorios para cama como los son los cojines y peluches, alfombras, protectores para colchones, cortinas y toallas; elaborados con materiales suaves, duraderos y diseños modernos que se adaptan a todos los gustos. Nuestro compromiso es brindarte productos que no solo embellecen tu hogar, sino que también mejoren tu experiencia de descanso cada día. ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/merkasa/logo-merkasa.webp",
    cardImage:   "assets/logos/merkasa/inicio-merkasa.webp",
    portada:     "assets/logos/merkasa/portada-merkasa.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573237112012",
    tel:         "3237112012",
    ig:          "",
    fb:          "https://www.facebook.com/share/1GrKzjuDB7/",
    tk:          "https://www.tiktok.com/@merkasals7?_r=1&_t=ZS-94dhPGnR4T4",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 10a 15a 80 Villa Marcela MOSQUERA ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/63kMKy27rayJFSFM6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/merkasa/merkasa1.jpg","assets/logos/merkasa/merkasa2.jpg","assets/logos/merkasa/merkasa3.jpg","assets/logos/merkasa/merkasa4.jpg","assets/logos/merkasa/merkasa5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       OLD SCHOOL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "oldschool",
    cat:         "shopping",
    nombre:      "OLD SCHOOL",
    slogan:      "Compromiso con la Calidad y la Seguridad",
    desc:        "Bienvenido a Old School, un establecimiento dedicado a los amantes de la cultura rock y la música metal. Nos especializamos en ofrecer una amplia gama de productos y servicios que destacan por su calidad y autenticidad - Ropa y Accesorios: Encuentra las últimas tendencias en moda rockera, desde camisetas y chaquetas hasta accesorios únicos que te ayudarán a expresar tu estilo personal - Música: Disponemos de una variada selección de CD 's de música nacional e internacional, abarcando distintos géneros de metal. - Insumos para Tatuajes: Ofrecemos una completa gama de insumos para tatuajes, garantizando que encuentres todo lo que necesitas para tu arte corporal - Servicios de Tatuajes, Perforaciones y Modificaciones: Contamos con profesionales altamente capacitados en la industria del tatuaje y perforaciones corporales. Todos nuestros servicios cumplen con las normativas de sanidad y bioseguridad, asegurando un ambiente seguro y confiable para nuestros clientes - Industria Textil: Ofrecemos servicios de estampados personalizados, utilizando materiales de excelente calidad. Además, fabricamos prendas a medida, ajustándonos a tus deseos y necesidades. Compromiso con la Calidad y la Seguridad",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/oldschool/logo-old-school.jpg",
    cardImage:   "assets/logos/oldschool/inicio-old-school.jpg",
    portada:     "assets/logos/oldschool/portada-old-school.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WHATSAPP", numero: "573128467477" },
  { nombre: "WHATSAPP", numero: "573504523048" },
],
    tel:         "3128467477",
    ig:          "https://www.instagram.com/old_school_tienda?igsh=MTFoYmxtbGpnN2R1dg==",
    fb:          "https://www.facebook.com/share/17uuuS9qKp/",
    tk:          "https://www.tiktok.com/@tiendaoldschool?_r=1&_t=ZS-93SR1n35QWn",
    web:         "https://drive.google.com/drive/folders/1gOIbekrAs09ryjfQZYNl_BUQGPaJlUdo",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 18 # 7 - 88 Villa María 3 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/RDVZbiMzD78K2ba19",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/oldschool/oldschool1.jpg","assets/logos/oldschool/oldschool2.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       PIÑATERIA SAAVEDRA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "piñateriasaavedra",
    cat:         "shopping",
    nombre:      "PIÑATERIA SAAVEDRA",
    slogan:      "Lo hacemos posible",
    desc:        "En la Piñatería Saavedra puedes encontrar gran variedad de detalles como anchetas, peluches, mugs, globos de latex, globos metalizados, cortinas, decoración y accesorios según la temática que estés buscando, artículos para la hora loca, bombas infladas con helio certificado (100% seguro), decoración para tortas, velas, Lluvia de sobres, artículos cosméticos, accesorios para el cabello, piñatas personalizadas y relleno, deliciosos snacks, dulces y salados para calmar el antojo, platos, vasos y cubiertos en icopor, plástico o cartón. Dependiendo de la temporada encuentra útiles escolares con los personajes de moda, para San Valentín y Amor y Amistad los detalles más tiernos, lo mejor para recordarle a Mamá y Papá cuánto los amamos. Vive el mejor Halloween con artículos para decoración y accesorios que complementan tu disfraz, en las fiestas decembrinas lleva la mejor decoración, velas navideñas, empacamos tus regalos, armamos tus anchetas, además que contamos con magníficos juguetes para que la diversión no termine. Acá siempre encontrarás todo para festejar como más te guste, elaboramos la decoración para tu fiesta o puedes llevar todo y te asesoramos para hacerlo tú mismo.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/saavedra/logo-piñateria-saavedra.jpg",
    cardImage:   "assets/logos/saavedra/inicio-piñateria-saavedra.jpg",
    portada:     "assets/logos/saavedra/portada-piñateria-saavedra.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573143458641",
    tel:         "3143458641",
    ig:          "https://www.instagram.com/pinateriasaavedra/",
    fb:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Diagonal 19 # 3 - 43 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/fpFm3gABW9uuyfcd9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/saavedra/saavedra1.jpeg","assets/logos/saavedra/saavedra2.jpeg","assets/logos/saavedra/saavedra3.jpeg","assets/logos/saavedra/saavedra4.jpeg","assets/logos/saavedra/saavedra5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       AGUATECNICOS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "aguatecnicos",
    cat:         "shopping",
    nombre:      "AGUATECNICOS",
    slogan:      "Purificador de Carbón Activado elimina:Sedimentos.Bacterias.Metales pesados.Químicos",
    desc:        "El agua es 99.9% PURA. 100.000 veces del ensayo cíclico estricto bajo la presión máxima de agua 100 PSI. Rango de temperatura: 40-100ºF(4.4-37.7ºC). Capacidad 2000 galones. Certificado por NSF. No requiere electricidad. No cambia el sabor del agua",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/aguatecnicos/logo-aguatecnicos.webp",
    cardImage:   "assets/logos/aguatecnicos/inicio-aguatecnicos.webp",
    portada:     "assets/logos/aguatecnicos/portada-aguatecnicos.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573503944060",
    tel:         "3503944060",
    ig:          "https://www.instagram.com/aguatecnicoscolombiasas/",
    fb:          "https://www.facebook.com/aguatecnicoscolombiasas",
    web:         "http://www.aguatecnicos.com",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CRA 5 ESTE # 10 - 171 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/ZckPD6bzgBLrNZb58",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/aguatecnicos/aguatecnicos1.webp","assets/logos/aguatecnicos/aguatecnicos2.webp","assets/logos/aguatecnicos/aguatecnicos3.webp","assets/logos/aguatecnicos/aguatecnicos4.webp","assets/logos/aguatecnicos/aguatecnicos5.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       BARUCH COMUNICACIONES
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "baruch",
    cat:         "shopping",
    nombre:      "BARUCH COMUNICACIONES",
    slogan:      "UN MUNDO DE TECNOLOGÍA A TU ALCANCE ",
    desc:        "El lugar ideal para encontrar lo último en celulares, accesorios y movilidad eléctrica. Trabajamos con marcas líderes como APPLE, SAMSUNG Y XIAOMI, ofreciendo calidad, respaldo y excelentes precios. Nos destacamos por nuestra atención personalizada y compromiso con la satisfacción del cliente. Visítanos y descubre una nueva forma de vivir la tecnología",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/baruch/logo-baruch.jpg",
    cardImage:   "assets/logos/baruch/inicio-baruch.jpg",
    portada:     "assets/logos/baruch/portada-baruch.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573224521315",
    tel:         "3224521315",
    ig:          "https://www.instagram.com/baruchmobile?igsh=MTUxeWloYjFreWtwNA%3D%3D&utm_source=qr",
    fb:          "https://www.facebook.com/share/1C5ygezP8G/?mibextid=wwXIfr",
    tk:          "https://www.tiktok.com/@baruch.comunicaci?_r=1&_t=ZS-94HKWtXoxla",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3 # 21-24 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/g8u3ayAZMyNKzvcd7?g_st=ac",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/baruch/baruch1.webp","assets/logos/baruch/baruch2.jpg","assets/logos/baruch/baruch3.jpg","assets/logos/baruch/baruch4.jpg","assets/logos/baruch/baruch5.jpg",
    ],
  },
  // ══ CONSUMO ════════════════════════════════════════════════
  // ══ CONSUMO ════════════════════════════════════════════════
  // ══ CONSUMO ════════════════════════════════════════════════
  // ══ CONSUMO ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       EL NOVILLO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "elnovillo",
    cat:         "consumo",
    destacado:   1,
    nombre:      "EL NOVILLO",
    slogan:      "La calidad y el sabor se cortan a tu medida.",
    desc:        "Más que Carniceros, Asesores Gastronómicos. El verdadero valor diferencial de Carnicería El Novillo reside en su equipo humano. Detrás del mostrador no solo hay expertos en el manejo del cuchillo, sino auténticos asesores gastronómicos. El cliente de hoy no solo busca un corte; busca el consejo experto sobre el tiempo de maduración, el método de cocción ideal (ya sea a la plancha, al horno o a las brasas) y el maridaje perfecto. En El Novillo, cada interacción es una oportunidad para educar el paladar y honrar el oficio del carnicero tradicional. Calidad premium, productos, pollo y cerdo, cortes especiales, carne fresca ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/novillo/logo-el-novillo.jpg",
    cardImage:   "assets/logos/novillo/inicio-el-novillo.jpg",
    portada:     "assets/logos/novillo/portada-el-novillo.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573176914707",
    tel:         "3176914707",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 10#15-35 mosquera ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/zgG61DS7NPdbTkCv7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/novillo/novillo1.jpg","assets/logos/novillo/novillo2.jpg","assets/logos/novillo/novillo3.jpg","assets/logos/novillo/novillo4.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       AMARETTO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "amaretto",
    cat:         "consumo",
    destacado:   1,
    nombre:      "PANADERIA AMARETTO",
    slogan:      "EL SABOR CASERO QUE ALEGRA CADA MAÑANA ",
    desc:        "En Amaretto encuentras deliciosos desayunos y comidas tradicionales preparadas con sabor casero y productos frescos. Disfruta de caldos, tamales, calentado, huevos al gusto, huevos rancheros, agua de panela con queso, porciones de fruta, yogur, migado y exquisitas ensaladas de frutas. Un lugar ideal para compartir y disfrutar de variedad, calidad y buena atención. Caldo tamales chocolate y pan moñona y jugo huevos rancheros chocolate y pan agua de panela queso y pan porción de fruta cereal con leche o yogurtmigao ensaladas de frutas",
    tipo:        "restaurante",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/amaretto/logo- amaretto.webp",
    cardImage:   "assets/logos/amaretto/inicio-amaretto.webp",
    portada:     "assets/logos/amaretto/portada- amaretto.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573159548488",
    tel:         "3159548488",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3 # 10-39 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://share.google/q7zsxtEySbByj327j",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:[
      "assets/logos/amaretto/amaretto1.webp","assets/logos/amaretto/amaretto2.webp","assets/logos/amaretto/amaretto3.webp","assets/logos/amaretto/amaretto4.webp","assets/logos/amaretto/amaretto5.webp",
    ],
 
    /* ─── MENÚ DE COMIDAS ─── */
    menu: [
      {
        s: "DESAYUNOS ESPECIALES",
        items: [
          { n:"MIGAO", p:"$14.000", d:"La perfecta combinación de dulce y salado en una taza. Chocolate artesanal caliente y batido al momento, acompañado de una selección premium de nuestros mejores amasijos tradicionales (almojábana, pandebono y buñuelo) y galletas artesanales. Incluye una generosa porción de queso fresco fundido que estira en cada bocado. Una experiencia reconfortante y llena de textura." },
          { n:"AREPA ROPA VIEJA",  p:"$15.000",  d:"Nuestra tradicional arepa de maíz, dorada por fuera y suave por dentro, rellena de una jugosa sobrebarriga desmechada, sazonada lentamente en sus propios jugos y un sofrito criollo de la casa. Acompañada de hilos de queso derretido que complementan esta obra de arte de la cocina latina." },
        ]
      },
      {
        s: "CALDOS",
        items: [
          { n:"DE COSTILLA",   p:"$9.000", d:"El clásico e infaltable de la mañana. Sustancioso caldo casero preparado con costilla de res seleccionada, cocida lentamente hasta que quede increíblemente suave y se desprenda del hueso. Servido con papa sabanera, cebolla y cilantro fresco picado. Acompañado de arepa tradicional. ¡El reconfortante perfecto para empezar el día!" },
          { n:"DE PESCADO",    p:"$9.000", d:"Una delicia ligera y nutritiva. Concentrado caldo preparado a base de pescado blanco seleccionado, sazonado con un sofrito criollo de cebolla,y un toque de especias que realzan su sabor. Servido con trozos de pescado suave, papa, y cilantro fresco. Acompañado de limón para darle el toque final a tu gusto." },
          { n:"DE PATA",       p:"$9.000", d:"Una joya de la cocina tradicional, famosa por su consistencia única y su alto valor nutritivo. Caldo espeso preparado con pata de res cocida a fuego lento durante horas para lograr una textura suave y un sabor profundo y concentrado. Sazonado con un picadillo de cebolla, ajo y cilantro. Puro colágeno y energía para el cuerpo." },
          { n:"DE PAJARILLA",  p:"$9.000", d:"Para los amantes de los sabores auténticos y tradicionales. Un caldo robusto y muy nutritivo preparado con pajarilla de res (bazo) y un toque de menudo, cocido en un sustancioso caldo con papa, sazonado con un potente ahogado criollo de cebolla larga, ajo y cilantro. Un plato lleno de hierro, sabor y tradición." },
          { n:"DE POLLO",      p:"$9.000", d:"Caldo de Pollo Casero (Como el de la abuela) El remedio perfecto para consentir el cuerpo. Caldo claro y reconfortante preparado con presas de pollo seleccionadas, cocidas con verduras frescas, papa suave y un toque de cilantro. Ligero, nutritivo y con ese sazón hogareño que a todos nos encanta."},
        ]
      },
      {
        s: "CHANGUAS",
        items: [
          { n:"Changua Tradicional",  p:"$7.000", d:"Sopa típica de nuestra región a base de leche, agua y cilantro fresco, servida con calado calientico y huevo pochado que se cocina en el caldo. Un clásico bogotano." },
          { n:"Changua Especial",     p:"$11.000", d:"Nuestra receta tradicional potenciada con almojábana, doble porción de huevo pochado y una generosa porción de queso doble crema derretido en la taza." },
        ]
      },
      {
        s: "TAMAL",
        items: [
          { n:"TAMAL",              p:"$7.000", d:"Masa suave de maíz sazonada, rellena de carne de cerdo, pollo, trozos de zanahoria, arveja y papa, todo envuelto y cocido al vapor en hoja de plátano para un sabor auténtico." },
          { n:"TAMAL ESPECIAL",     p:"$8.000", d:"Nuestro tamal tradicional acompañado con una porción de jugosa costilla de cerdo premium extra, servido con pan de la casa o arepa con queso." },
        ]
      },
      {
        s: "HUEVOS",
        items: [
          { n:"HUEVOS FRITOS", p:"$5.000", d:"Dos huevos frescos preparados al término de tu elección, con la yema suave o bien cocida. El clásico que nunca falla." },
          { n:"HUEVOS PERICOS",     p:"$5.000", d:"Tradición en tu mesa. Dos huevos revueltos con un fresco y jugoso sofrito casero de tomate y cebolla larga." },
          { n:"HUEVOS EN TORTILLA",     p:"$5.000", d:"Tortilla suave, ligera y esponjosa de dos huevos bien batidos, perfectamente sazonada y dorada." },
          { n:"HUEVOS RANCHEROS",     p:"$8.000", d:"Dos huevos revueltos con trozos de salchicha seleccionada y maíz tierno, todo bañado en un toque de queso de la casa." },
        ]
      },
      {
        s: "PLATOS FUERTES Y CALENTADOS",
        items: [
          { n:"MOÑONA", p:"$13.000", d:"El plato fuerte de la casa para los de buen apetito. Un jugoso filete de carne en bistec bañado en nuestro guiso tradicional de tomate y cebolla cabezona, servido sobre una base de arroz blanco y papa sudada bien sazonada. Todo coronado con dos huevos al gusto encima. ¡Tradición, sustancia y puro sabor en un solo plato!" },
          { n:"CALENTADO PAISA",     p:"$12.000", d:"El rey de las mañanas. Mezcla perfecta de fríjoles del día anterior, arroz, sazón de hogao casero y trocitos de chicharrón o carne, servido con huevo frito y arepa." },
        ]
      },
      {
        s: "OPCION LIGERA",
        items: [
          { n:"CEREAL CON LECHE O YOGURT", p:"$7.000", d:"Una opción fresca y ligera para iniciar el día. Crujientes hojuelas de maíz acompañadas a tu elección con leche fría o yogurt cremoso (pregunta por nuestros sabores disponibles)." },
        ]
      },
       {
        s: "COMBOS",
        items: [
          { n:"COMBO 1", p:"$20.800", d:"CALDO DE COSTILLA, TAMAL ESPECIAL, CHOCOLATE Y PAN" },
          { n:"COMBO 2", p:"$17.800", d:"CALDO DE COSTILLA, HUEVOS, CHOCOLATE O CAFE Y PAN" },
          { n:"COMBO 3", p:"$13.500", d:"HUEVOS CON ARROZ, CHOCOLATE PAN Y QUESO " },
          { n:"COMBO 4", p:"$11.500", d:"HUEVOS, CHOCOLATE O CAFE, PAN Y QUESO" },
          { n:"COMBO 5", p:"$10.800", d:"TAMAL, CHOCOLATE O CAFE Y PAN" },
          { n:"COMBO 6", p:"$7.000", d:"CHOCOLATE O CAFE, PAN Y QUESO" },
          { n:"COMBO 7", p:"$15.500", d:"HUEVOS RANCHEROS, CHOCOLATE O CAFE, PAN Y QUESO" },
          { n:"COMBO 8", p:"$19.500", d:"MOÑONA Y JUGO" },
          { n:"COMBO 9", p:"$10.800", d:"CHANGUA, CHOCOLATE O CAFE Y PAN" },
          { n:"COMBO 10", p:"$9.000", d:"AGUAPANELA,QUESO Y PAN" },
          { n:"COMBO 11", p:"$10.000", d:"PORCION DE FRUTA, CEREAL CON LECHE O YOGURT" },
        ]
      },
      {
        s: "BEBIDAS",
        items: [
          { n:"SODAS", p:"$10.000", d:"FRUTOS ROJOS, FRUTOS AMARILLOS, CHICLE" },
          { n:"MALTEADAS", p:"$10.000", d:"FRESA, MORA, AREQUIPE, NATA, MANDARINA, VAINILLA, BROWNIE, RON CON PASAS" },
          { n:"JUGOS NATURALES", p:"$6.000 o $7.000", d:"GUANABANA, MORA, FRESA, MANGO, MARACUYA., LULO, FEIJOA, MANGO VICHE" },
          { n:"LIMONADAS", p:"$6.000 o $7.000", d:"NATURAL, HIERVA BUENA, COCO, CEREZADA" },
        ]
      },
      {
        s: "HELADERIA",
        items: [
          { n:"CONO SENCILLO", p:"$4.000" },
          { n:"CONO DOBLE", p:"$6.000" },
          { n:"VASO DE HELADO X2 1 TOPPING", p:"$7.500" },
          { n:"VASO DE HELADO X3 2 TOPPING Y 1 SALSA", p:"$10.000" },
          { n:"GUSANITO", p:"$10.000" },
          { n:"PAYASO", p:"$10.000" },
          { n:"UNICORNIO", p:"$10.000" },
          { n:"PANDA", p:"$10.000" },
          { n:"MERENGONES", p:"$10.000" },
        ]
      },
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       FERRELECTRICOS MADENEL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "madenel",
    cat:         "consumo",
    nombre:      "FERRELECTRICOS MADENEL",
    slogan:      "Calidad y soluciones que conectan tus proyectos.",
    desc:        "Construimos tu futuro, Todo en herramientas, electricidad y electrónica en un sololugar, a qui encontrarás lo mejor en calidad y precios; También te brindamos los servicio técnico de instalación y mantenimiento encontrarás la disponibilidad de productos para el hogar y proyectos profesionales. Tu aliado confiable en cada proyecto Herramientas resistentes para trabajos exigentes Calidad que se nota en cada tornillo ¡Dales potencia a tus proyectos! Iluminación, cables y más ¿Necesitas ayuda con tu proyecto? ¡Nosotros te asesoramos!Trae tu muestra y te ayudamos a encontrarla",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/ferrelectricos/logo-madenel.jpg",
    cardImage:   "assets/logos/ferrelectricos/inicio-madenel.jpg",
    portada:     "assets/logos/ferrelectricos/portada-madenel.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573217776025",
    tel:         "3217776025",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 15 #9d-26 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/BekNph9wmmKgJjjL8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/ferrelectricos/madenel1.jpg","assets/logos/ferrelectricos/madenel2.jpg","assets/logos/ferrelectricos/madenel3.jpg","assets/logos/ferrelectricos/madenel4.jpg","assets/logos/ferrelectricos/madenel5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       EL EDEN
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "eleden",
    cat:         "consumo",
    nombre:      "EL EDEN",
    slogan:      "FRUTAS Y VERDURAS TAMBIEN MANEJAN SALSAMENTARIA Y PRODUCTOS DE ASEO ",
    desc:        "Verduras frescas, fruta para jugos naturales, mercado saludable, verduras selectas, productos del campo, carnes premium, cortes gourmet, maduración especial, calidad selecta, parilla y asados ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/eleden/logo- fruvery-carniceria.jpg",
    cardImage:   "assets/logos/eleden/inicio- fruvery-carniceria.jpg",
    portada:     "assets/logos/eleden/portada- fruvery-carniceria.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WHATSAPP", numero: "573024605951" },
  { nombre: "WHATSAPP", numero: "573212405093" },
],
    tel:         "3024605951",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 4 # 3 49 a Mosquera ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/nRMEJK9RcMQzSpkJA",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/eleden/eden1.webp","assets/logos/eleden/eden2.jpg","assets/logos/eleden/eden3.jpg","assets/logos/eleden/eden4.jpg","assets/logos/eleden/eden5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       VARIEDADESSL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "variedadessl",
    cat:         "consumo",
    nombre:      "VARIEDADES SL",
    slogan:      "Papelería escolar, utiles de oficina, regalos y detalles, variedades y accesorios, fotocopias e impreciones ",
    desc:        "Nos caracterizamos por ofrecer variedad, calidad y precios competitivos, brindando soluciones prácticas tanto para clientes individuales como empresariales. Adicionalmente, ofrecemos una amplia gama de servicios complementarios, entre los que se destacan la venta de cuentas de entretenimiento, servicios de corresponsalía bancaria, redacción y expedición de documentos, así como servicios de mensajería y envíos a nivel nacional e internacional a través de INTERRAPIDISIMO, garantizando rapidez, seguridad y confiabilidad. Nuestro compromiso es proporcionar a nuestros clientes un servicio ágil, confiable y cercano, convirtiéndonos en un aliado estratégico para sus necesidades comerciales, personales y administrativas.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/variedadessl/logo-papeleria-y-variedades.jpg",
    cardImage:   "assets/logos/variedadessl/inicio-papeleria-y-variedades.jpg",
    portada:     "assets/logos/variedadessl/portada-papeleria-y-variedades.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573209270400",
    tel:         "3209270400",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 15 Calle 9d 03 MOSQUERA ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/H8dDMQGSenFBRz3K9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/variedadessl/variedadessl1.jpg","assets/logos/variedadessl/variedadessl2.jpg","assets/logos/variedadessl/variedadessl3.jpg","assets/logos/variedadessl/variedadessl4.jpg","assets/logos/variedadessl/variedadessl5.webp",
    ],
  },
// ══ EMPRESARIAL ════════════════════════════════════════════════
// ══ EMPRESARIAL ════════════════════════════════════════════════
// ══ EMPRESARIAL ════════════════════════════════════════════════
// ══ EMPRESARIAL ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       JD PERFILERIA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "perfileriajd",
    cat:         "empresarial",
    nombre:      "JD PERFILERIA",
    slogan:      "Herramientas industriales, materiales de construcción, pinturas y acabados, tornilleria y fijaciones, ferretería en general",
    desc:        "JD perfileria es cdalidad y experiencia en perfileria metalica para proyectos estructurales, arquitectonicos e industriales. Ofrecemos variedad de perfiles y fabricamos tejas arquitectonicas, modernas y resistentes, respaldados por maquinatria industrial y un equipo experto que garantiza confianza en cada proyecto.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/jd/logo-jd-perfileria.jpg",
    cardImage:   "assets/logos/jd/inicio-jd-perfileria.jpg",
    portada:     "assets/logos/jd/portada-jd-perfileria.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573177304265",
    tel:         "3177304265",
    ig:          "https://www.instagram.com/perfileriajyd?igsh=MTA3ajhjNmJ5YmlmdA==",
    fb:          "https://www.facebook.com/share/17JUAECBk9/",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Cra 10 15 a 15 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/5eFryFZ5ZxKyNSyY8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/jd/jdfoto1.jpeg","assets/logos/jd/jdfoto2.jpeg","assets/logos/jd/jdfoto3.jpeg",
    ],
  },
  // ══ SERVICIOS ════════════════════════════════════════════════
  // ══ SERVICIOS ════════════════════════════════════════════════
  // ══ SERVICIOS ════════════════════════════════════════════════
  // ══ SERVICIOS ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       LAVANDERIA MYM
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lavanderiamym",
    cat:         "servicios",
    nombre:      "LAVANDERIA MYM",
    slogan:      "DONDE LAS MANCHAS DESAPARECEN Y LOS BUENOS MOMENTOS PERMANECEN",
    desc:        "Somos una  lavandería y tintorería profesional especializada en el cuidado y limpieza de prendas con altos estándares de calidad. Ofrecemos lavado, secado, planchado, desmanchado y tratamiento especializado para ropa de vestir, prendas delicadas, cobijas, edredones y más. Nos destacamos por brindar excelente atención, puntualidad y resultados impecables para que tus prendas luzcan siempre como nuevas. LAVANDERIA Y TINTORERIA LAVADO DE ROPA DE DIARIOTRAJES, VESTIDOS, CUBRELECHOS, SÁBANA, COBIJAS, TENISCAMAS DE PERRO, TAPETES, GUACALES",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/mym/logo-lavanderia-mym.jpg",
    cardImage:   "assets/logos/mym/inicio-lavanderia-mym.jpg",
    portada:     "assets/logos/mym/portada-lavanderia-mym.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573054061750",
    tel:         "3054061750",
    ig:          "https://www.instagram.com/lavanderialaundrymm?igsh=MTRyZmoyeXBhZ3lyNQ%3D%3D&utm_source=qr",
    fb:          "",
    tk:          "https://www.tiktok.com/@laundry.mm?_t=ZS-901xGgX8MNE&_r=1",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 4 # 2 34 Mosquera Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/4X5WXz7eM75SgiFi6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/mym/mymfoto1.jpeg","assets/logos/mym/mymfoto2.jpeg","assets/logos/mym/mymfoto3.jpeg","assets/logos/mym/mymfoto4.jpeg","assets/logos/mym/mymfoto5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MIS MUNDO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lavanderiamismundo",
    cat:         "servicios",
    nombre:      "MIS MUNDO",
    slogan:      "Confección a medida sastrería elegante arreglo de ropa uniformes y bordados moda y costura ",
    desc:        "Somos una lavandería y sastrería especializada en el cuidado, limpieza y arreglo de prendas. Ofrecemos lavado profesional, planchado, ajustes, confecciones y reparación de ropa para dama, caballero y prendas especiales. Trabajamos con calidad, puntualidad y excelente atención para que cada prenda luzca impecable y como nueva. Arreglo de costuras, Lavado de cortinas, Lavado de tapetes, Lavado de zapatillas, Tinturados de cuero, Tinturados de algodón, Lavado de bolsos, Lavado de forros para colchón, Lavado de cobijas y edredones, Lavado de muñecos",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/mismundo/logo-mis-mundo.jpg",
    cardImage:   "assets/logos/mismundo/inicio-mis-mundo.jpg",
    portada:     "assets/logos/mismundo/portada-lavanderia-mis-mundo.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WHATSAPP", numero: "573208950252" },
  { nombre: "WHATSAPP", numero: "573174210785" },
],
    tel:         "3208950252",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 1 A este # 19 08 Barrio la esperanza MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/WiMDcnXD8znTPyCaA",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/mismundo/mundofoto1.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       IMAGEN DIGITAL XAVIER 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "imagendigital",
    cat:         "servicios",
    nombre:      "IMAGEN DIGITAL XAVIER ",
    slogan:      "Detenemos el tiempo para que tus mejores momentos duren para siempre",
    desc:        "En Imagen Digital, transformamos momentos e ideas en recuerdos tangibles y recursos visuales de alto impacto. Somos un equipo de profesionales de la fotografía comprometidos con la excelencia técnica y la sensibilidad artística. Ya sea retratando la calidez de un evento familiar, capturando la fuerza de un retrato personal o destacando las virtudes de un producto, nos aseguramos de que cada detalle brille con luz propia a través de la lente.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/imagendigital/logo- imagen-digital-xavier.jpg",
    cardImage:   "assets/logos/imagendigital/inicio-imagen-digital.jpg",
    portada:     "assets/logos/imagendigital/portada- imagen-digital-xavier.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573214291976",
    tel:         "3214291976",
    ig:          "https://www.instagram.com/photoimagendigital?igsh=b3Fhem1zeDNicHZ6",
    fb:          "https://www.facebook.com/share/14Zbmbj6agB/",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 18 7-77 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://www.google.com/maps/place/photo+imagen+digital/@4.7185871,-74.29929,12z/data=!4m10!1m2!2m1!1sPHOTO+IMAGEN+DIGITAL!3m6!1s0x8e3f793dc3027601:0xafbd65026fe56466!8m2!3d4.7153577!4d-74.2227109!15sChRQSE9UTyBJTUFHRU4gRElHSVRBTFoWIhRwaG90byBpbWFnZW4gZGlnaXRhbJIBEnBob3RvZ3JhcGh5X3N0dWRpb-ABAA!16s%2Fg%2F11fjsbb46v?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/imagendigital/digital1.jpeg","assets/logos/imagendigital/digital2.jpeg","assets/logos/imagendigital/digital3.jpeg","assets/logos/imagendigital/digital4.jpeg","assets/logos/imagendigital/digital5.jpeg",
    ],
  },
  // ══ GOURMET ════════════════════════════════════════════════
  // ══ GOURMET ════════════════════════════════════════════════
  // ══ GOURMET ════════════════════════════════════════════════
  // ══ GOURMET ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       DIMASHK
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "dimashk",
    cat:         "gourmet",
    nombre:      "DIMASHK",
    slogan:      "Somos un restaurante de comida árabe, la cual recibimos por tradición de nuestro abuelo paterno quien migró desde Siria a Damasco. ",
    desc:        "Comida arabe, shawarma, falafel, cocina mediterránea, kebab artesanal",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/dimashk/logo-arabe-dimashk.jpg",
    cardImage:   "assets/logos/dimashk/inicio-arabe-dimashk.jpg",
    portada:     "assets/logos/dimashk/portada-arabe-dimashk.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573145268035",
    tel:         "",
    ig:          "https://www.instagram.com/dimashkexperiencias?igsh=ZG84YmNtcmt6cHFv",
    fb:          "https://www.facebook.com/profile.php?id=100089974960376",
    tk:          "https://www.tiktok.com/@dimashkexperiencias?_r=1&_t=ZS-96Rr6jeS8eu",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 5 o - 23 este MOSQUERA ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/EYek5kaCiwZzqG9w5",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/dimashk/dimashk1.jpg","assets/logos/dimashk/dimashk2.jpg","assets/logos/dimashk/dimashk3.jpg","assets/logos/dimashk/dimashk4.jpg","assets/logos/dimashk/dimashk5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       PESCADERIA ASPRILLA RIVAS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "asprillarivas",
    cat:         "gourmet",
    nombre:      "PESCADERIA ASPRILLA RIVAS",
    slogan:      "RESTAURANTE Y PESCADERIA",
    desc:        "Ofrecemos sabor, tradición y calidad en cada plato. Ideal para compartir en familia y con amigos, excelente atención y sabores auténticos que hacen de cada visita un momento especial. Comida del pacífico Pescados y mariscos Comida típica colombiana Encocados y ceviches Sabor a mar",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/asprilla/logo-asprilla-rivas.jpg",
    cardImage:   "assets/logos/asprilla/inicio-asprilla-rivas.jpg",
    portada:     "assets/logos/asprilla/portada-asprilla-rivas.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573208298353",
    tel:         "3208298353",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 1 ESTE 3 54 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/bexKBUasCF11jvgW8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/asprilla/pacifico1.jpeg","assets/logos/asprilla/pacifico2.jpeg","assets/logos/asprilla/pacifico3.jpeg","assets/logos/asprilla/pacifico4.jpeg","assets/logos/asprilla/pacifico5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       BENDITO CHICHARON 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "benditochicharron",
    cat:         "gourmet",
    nombre:      "BENDITO CHICHARON ",
    slogan:      "Sabor que reúne y momentos que se disfrutan!",
    desc:        "En Bendito Chicharrón encontrarás el sabor de la comida tradicional con un ambiente ideal para compartir en familia, con amigos o en eventos especiales. Ofrecemos deliciosos desayunos, almuerzos caseros, almuerzos ejecutivos y una variada carta de platos preparados con calidad y excelente sabor. Además, contamos con atención para eventos empresariales y familiares, acompañados de cócteles, tragos, cervezas y mucho más. Un lugar perfecto para disfrutar de buena comida, buen ambiente y una experiencia inolvidable. Gastrobar gourmet Cocteles de autor Cosina fusión Ambiente nocturno Comida y bebidas gourmet",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/chicharron/logo- bendito-chicharron.jpg",
    cardImage:   "assets/logos/chicharron/inicio-bendito-chicharron.jpg",
    portada:     "assets/logos/chicharron/portada-bendito-chicharron.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573008784892",
    tel:         "3008784892",
    ig:          "https://www.instagram.com/chicharronbendito/",
    fb:          "https://www.facebook.com/share/18K55QiAk4/",
    tk:          "https://www.tiktok.com/@benditochicharron?_r=1&_t=ZS-94YUPKvGits",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CARRERA 3 No 10a 17 piso 2 torre GAB  barrio el Carmen Mosquera Cundinamarca el Carmen Mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/go5mqarY1K8CbVq97?g_st=ac",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       POMODORO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "pomodoro",
    cat:         "gourmet",
    nombre:      "POMODORO",
    slogan:      "¡Tradición italiana con manos colombianas!",
    desc:        "El restaurante Pizza & Pasta Pomodoro funciona desde abril del año 2020, en el municipio de Mosquera-Cundinamarca. Nace con el objetivo de ofrecer un servicio gastronómico novedoso de tipo italiano, en específico pizzas y pastas, así como ofrecer un menú variado, único y de alta calidad a los clientes. Nuestra oferta gastronómica está dirigida a todo cliente que desee probar una receta 100% italiana de pizza con masa multigrano y madurada a 72 horas. Así como una amplia y exclusiva oferta en pastas, lasañas y bebidas. Siempre hemos conservado lineamientos y estandarización de alta calidad en la materia prima de nuestros productos ofrecidos, siendo así reconocidos en la zona como la mejor pizzería.“Pomodoro” traduce del italiano al español algo tan sencillo como “tomate”. Sin lugar a duda, es un ingrediente esencial en toda la gastronomía; su preparación y combinación se fundamenta en el placer, tradición y conocimiento de toda cocina. Esta es la razón por la cual decidimos que este proyecto tuviera este nombre y para resaltar y ser reconocidos por tener la mejor receta italiana de pizza con masa madurada y cocida en horno de piedra 100% italiano. Nuestro lema:",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/pomodoro/logo- pomodoro.jpg",
    cardImage:   "assets/logos/pomodoro/inicio-pomodoro.jpg",
    portada:     "assets/logos/pomodoro/portada- pomodoro.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573125572621",
    tel:         "3125572621",
    ig:          "https://www.instagram.com/pomodoro_pizza_y_pasta?igsh=MWZ0bnBmN2E5NWg5Yw==",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 17 # 6-55 este piso 2 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/UbYHKkiMsUf4Hgyp6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/pomodoro/pododoro1.webp","assets/logos/pomodoro/pomodoro2.jpg","assets/logos/pomodoro/pomodoro3.jpg","assets/logos/pomodoro/pomodoro4.jpg", "assets/logos/pomodoro/pomodoro5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       LA GRAN MURALLA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lagranmuralla",
    cat:         "gourmet",
    nombre:      "LA GRAN MURALLA",
    slogan:      "El auténtico sabor oriental en cada plato.",
    desc:        "Un restaurante especializado en comida china y asiática, donde cada plato está preparado con sabor auténtico, ingredientes frescos y recetas tradicionales que conquistan el paladar. Disfruta de una gran variedad de arroz chino, pasta oriental, ramen, verduras salteadas, rollos chinos, carnes, pollo y mucho más. Un lugar ideal para compartir en familia o con amigos, ofreciendo calidad, buen servicio y el verdadero sabor de la cocina oriental en cada bocado. Comida china Arroz oriental Chop suey Pollo agridulce Cocina asiática ",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/muralla/logo- la-gran-muralla.jpg",
    cardImage:   "assets/logos/muralla/inicio-la-gran-muralla.jpg",
    portada:     "assets/logos/muralla/portada-la-gran-muralla.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573115023288",
    tel:         "573229734237",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 3 5-32 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/tYfuH3ED9tVnG93J7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/muralla/lagranmuralla1.jpg","assets/logos/muralla/lagranmuralla2.jpg","assets/logos/muralla/lagranmuralla3.jpg","assets/logos/muralla/lagranmuralla4.jpg","assets/logos/muralla/lagranmuralla5.jpg"
    ],
  },
  // ══ MOVILIDAD ════════════════════════════════════════════════
  // ══ MOVILIDAD ════════════════════════════════════════════════
  // ══ MOVILIDAD ════════════════════════════════════════════════
  // ══ MOVILIDAD ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       AR MOTOS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "armotos",
    cat:         "movilidad",
    nombre:      "AR MOTOS",
    slogan:      "AR motos: El pulso de tu moto, el récord de tu viaje.",
    desc:        "En AR motos, entendemos que tu motocicleta no es solo un medio de transporte, es tu estilo de vida. Somos un taller especializado en mantenimiento, diagnóstico y optimización de motos, donde combinamos tecnología de vanguardia con la pasión por las dos ruedas. Nuestro compromiso es garantizar que cada máquina que sale de nuestras manos alcance su máximo rendimiento, seguridad y durabilidad. Llevamos el cuidado de tu moto al siguiente nivel, registrando solo la excelencia en cada kilómetro que recorres.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/armotos/logo-ar-motos.webp",
    cardImage:   "assets/logos/armotos/inicio-ar-motos.webp",
    portada:     "assets/logos/armotos/portada-ar-motos.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573132543923",
    tel:         "3132543923",
    ig:          "https://www.instagram.com/armimotos_oficial?igsh=MXd6M294dWszcXk1bA==",
    fb:          "https://www.facebook.com/share/1GksRpRR6s/",
    tk:          "https://www.tiktok.com/@armimotos_oficial?_r=1&_t=ZS-95vKBflAs80",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 17 # 9b-05 villa marcela MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/nDJFX6sLPaKZ4v3Z7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/armotos/armimotos1.webp","assets/logos/armotos/armimotos2.webp","assets/logos/armotos/armimotos3.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       MAXIOIL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "maxioil",
    cat:         "movilidad",
    nombre:      "MAXIOIL",
    slogan:      "Cuidamos cada detalle de tu motor, porque nuestro compromiso es contigo.",
    desc:        "Somos una empresa del área automotriz enfocada principalmente en la renovación de aceite para toda clase de vehículos, manejando gran variedad de lubricantes. Además, contamos con una amplia gama de productos para mejorar su funcionamiento (aditivos, refrigerantes, siliconas, entre otros). Más de diez años de trayectoria en el sector nos avalan, y nuestro personal altamente capacitado se caracteriza por brindar atención oportuna y de calidad.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/maxioil/logo-maxi-oil.jpg",
    cardImage:   "assets/logos/maxioil/inicio-max-oil.jpg",
    portada:     "assets/logos/maxioil/portada-max-oil.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573002196754",
    tel:         "3002196754",
    ig:          "https://www.instagram.com/_maxi_oil_?igsh=MWQ2OWJobDZlM3M0dw==",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 5 este 15. 55 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/DR58zKAi1SCUeb8R7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/maxioil/maxioli1.jpeg","assets/logos/maxioil/maxioli2.jpeg","assets/logos/maxioil/maxioli3.jpeg","assets/logos/maxioil/maxioli4.jpeg","assets/logos/maxioil/maxioli5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       BARRELEC
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "barrelec",
    cat:         "movilidad",
    nombre:      "BARRELEC",
    slogan:      "Barrelec: Rompe la distancia, conecta con tu ciudad",
    desc:        "En Barrelec transformamos la movilidad urbana combinando tecnología de punta, diseño vanguardista y sostenibilidad. Somos una marca líder en la venta de bicicletas eléctricas pensadas para el ritmo de la vida moderna: ágiles, potentes y respetuosas con el medio ambiente. Nuestras e-bikes están diseñadas para liberarte del tráfico, reducir tu huella de carbono y hacer de cada trayecto diario una experiencia placentera y sin esfuerzo. Descubre una nueva forma de moverte con la autonomía, seguridad y el estilo que solo Barrelec te puede ofrecer.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/barrelec/logo-barrelec.jpg",
    cardImage:   "assets/logos/barrelec/inicio-barrelet.jpg",
    portada:     "assets/logos/barrelec/portada-barrelec.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573245943454",
    tel:         "3028511471",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 10 # 3-36 barrio el Carmen / centro comercial el trébol stand de ventas – entrada 2 ( Mosquera )",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/nU7N5JasP2R3gCjEA",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/barrelec/barrelec1.jpg","assets/logos/barrelec/barrelec2.jpg","assets/logos/barrelec/barrelec3.jpg","assets/logos/barrelec/barrelec4.jpg","assets/logos/barrelec/barrelec5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       BIKE SHOP
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "bikeshop",
    cat:         "movilidad",
    nombre:      "BIKE SHOP",
    slogan:      "Innovación y estilo en cada pedaleo ",
    desc:        "Somos el centro integral definitivo para los apasionados del ciclismo en todas sus formas. En nuestro espacio combinamos la venta de bicicletas convencionales y eléctricas de última generación con un servicio técnico especializado de primer nivel. Ya sea que busques la pureza del pedal tradicional, la potencia de la movilidad urbana eléctrica, o necesites un mantenimiento de precisión para tu compañera de rutas, contamos con las herramientas y el equipo experto para garantizar tu seguridad y rendimiento. Rodamos contigo, impulsando tu camino y cuidando cada detalle de tu bicicleta.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/bikeshop/logo-bike.jpg",
    cardImage:   "assets/logos/bikeshop/inicio-bike.jpg",
    portada:     "assets/logos/bikeshop/portada-bike.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573203626549",
    tel:         "3203626549",
    ig:          "https://www.instagram.com/bike_shops_tp2?igsh=MTB1NzZuY2xtMThmcw==",
    fb:          "",
    tk:          "https://www.tiktok.com/@bike_shops_tp2?_r=1&_t=ZS-93e8wqLP8h2",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         " Cl 10a # 12c - 56 BARRIO VILLA SAJONIA 2: CRA 12 # 8b - 61 LOCAL 2 BARRIO SANTANA",
    mapUrl:      "",
    mapsLinks: [
      { nombre: "VILLA SAJONIA", url: "https://maps.app.goo.gl/sSCqhMrVJcmXythBA" },
      { nombre: "SANTANA", url: "https://maps.app.goo.gl/xxrzq5brdveRCS8H9" },
    ],
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/bikeshop/bike1.jpeg","assets/logos/bikeshop/bike2.jpeg","assets/logos/bikeshop/bike3.jpeg","assets/logos/bikeshop/bike4.jpeg","assets/logos/bikeshop/bike5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       CRISTAL CARS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "cristal",
    cat:         "movilidad",
    nombre:      "CRISTAL CARS",
    slogan:      "Cristal Cars: Claridad en tu camino, energía en tu vehículo.",
    desc:        "En Cristal Cars nos especializamos en encender la seguridad y el confort de tu vehículo. Somos un centro técnico profesional dedicado al diagnóstico y reparación del sistema eléctrico automotriz, optimización e instalación de sistemas de luces de alta gama (LED/HD) y mantenimiento integral de elevavidrios y ventanas. Combinamos precisión técnica con componentes de alta calidad para que tu carro recupere su total funcionalidad y una visibilidad impecable en carretera. En Cristal Cars, hacemos que tu auto funcione a la perfección y brille como el primer día.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/cristal/logo-cristal-cars.jpg",
    cardImage:   "assets/logos/cristal/inicio-cristal-cars.jpg",
    portada:     "assets/logos/cristal/portada-cristal-cars.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573002500554",
    tel:         "3002500554",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 18 # 4 -81 este, Mosquera, Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/UGvf69UM8tkkLhvz7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/cristal/cristal1.jpg","assets/logos/cristal/cristal2.jpg","assets/logos/cristal/cristal3.jpg","assets/logos/cristal/cristal4.jpg","assets/logos/cristal/cristal5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       W RECORDS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "wrecords",
    cat:         "movilidad",
    nombre:      "W RECORDS",
    slogan:      "Mecánica de confianza para que nunca dejes de rodar.",
    desc:        "Somos el taller especializado donde la pasión por las dos ruedas se traduce en un servicio técnico de máxima calidad. Nos dedicamos al mantenimiento preventivo y correctivo, diagnóstico computarizado, sincronización, frenos y reparación de motores para todo tipo de motocicletas. Nuestro equipo de mecánicos expertos trabaja con repuestos garantizados y herramientas de precisión para asegurar que tu moto recupere su potencia, suavidad y, sobre todo, tu seguridad en la ruta. En nuestro taller, cuidamos tu moto como si fuera la nuestra.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/wrecords/logo-w-records.jpg",
    cardImage:   "assets/logos/wrecords/inicio-w-records.jpg",
    portada:     "assets/logos/wrecords/portada-w-records.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573208903912",
    tel:         "3208903912",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 5 este 18-15 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/y5HhuQudUKgBgg5s8",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/wrecords/wrecors1.jpeg","assets/logos/wrecords/wrecors2.jpeg","assets/logos/wrecords/wrecors3.jpeg","assets/logos/wrecords/wrecors4.jpeg","assets/logos/wrecords/wrecors5.jpg",
    ],
  },
  // ══ MASCOTAS ════════════════════════════════════════════════
  // ══ MASCOTAS ════════════════════════════════════════════════
  // ══ MASCOTAS ════════════════════════════════════════════════
  // ══ MASCOTAS ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       Cheramy Spa Mascotas
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "cheramy",
    cat:         "mascotas",
    destacado:   1,
    nombre:      "Cheramy Spa Mascotas",
    slogan:      "Cuidamos tu mascota como parte de nuestra familia",
    desc:        "CHERAMY SPA MASCOTAS es un centro de estética y bienestar animal diseñado para ofrecer una experiencia de relajación y cuidado integral a los consentidos del hogar. Su enfoque no es solo la limpieza, sino el equilibrio emocional y físico de cada mascota a través de servicios personalizados. Trato amoroso y responsable. ✔Personal capacitado✔Productos Seleccionados Con Cuidado✔Ambiente limpio y segur✔Experiencia Pensada Para El Bienestar De Tu Mascota",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/logo-cheramy.jpeg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/cheramy/logo-cheramy.jpg",
    cardImage:   "assets/logos/cheramy/inicio-cheramy.jpg",
    portada:     "assets/logos/cheramy/portada-cheramy.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573223934817",
    tel:         "3223934817",
    ig:          "https://www.instagram.com/cher_ami070?igsh=MTc5NG14YjhxbXdmZA==",
    fb:          "",
    tk:          "",
    web:         "",
    agendamiento:"https://cheramipets.site.agendapro.com/co",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 17 SUR 4 46 Mosquera, Cundinamarca",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/7fKRfQu7PC8ve27x6",
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/cheramy/cheramy-foto1.jpg", "assets/logos/cheramy/cheramy-foto2.jpg","assets/logos/cheramy/cheramy-foto3.jpg",],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       Medicina Veterinaria Javi Vet
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "javivet",
    cat:         "mascotas",
    destacado:   1,
    nombre:      "Medicina Veterinaria Javi Vet",
    slogan:      "Porque tu mascota merece lo mejor, estamos aquí! medicina veterinaria con amor, calidad y profesionalismo",
    desc:        "Medicina Veterinaria Javi Vet es un centro especializado en el cuidado integral de mascotas, comprometido con la excelencia médica y el bienestar animal. Contamos con un equipo de profesionales dedicados a ofrecer servicios de consulta general, diagnóstico y tratamientos preventivos, utilizando tecnología adecuada y un enfoque ético. En Javi Vet, entendemos que tu mascota es parte de la familia, por lo que priorizamos una atención personalizada y transparente para garantizar su salud en cada etapa de su vida.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/javivet.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/javi-vet/logo-javivet.jpg",
    cardImage:   "assets/logos/javi-vet/inicio-javivet.jpg",
    portada:     "assets/logos/javi-vet/portada-javivet.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573002651539",
    tel:         "3002651539",
    ig:          "https://www.instagram.com/javivet_medicinaveterinaria?igsh=NDYxMnMyM3Y5OGxt",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 17s 4-14 Mosquera, Colombia",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/HewyTsQwVJxBLvUb8",
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/javi-vet/javivet-foto1.jpg", "assets/logos/javi-vet/javivet-foto2.jpg", "assets/logos/javi-vet/javivet-foto3.jpg", "assets/logos/javi-vet/javivet-foto4.jpg", "assets/logos/javi-vet/javivet-foto5.jpg",],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       DE MASKOT·S
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "de-mascot·s",
    cat:         "mascotas",
    destacado:   1,
    nombre:      "De Maskot·s",
    slogan:      "Todo lo relacionado para tu mascota, pregunta por la comida favorita de tu perro o gato. ",
    desc:        "Tienda especializada en concentrados, accesorios y productos para el cuidado integral de mascotas, ofreciendo alimentos de las mejores marcas, dieta BARF, juguetes, camas, guacales y artículos esenciales para perros y gatos. En “De Maskot’s” trabajamos con variedad, calidad y atención personalizada para brindar bienestar, nutrición y comodidad a cada mascota. Nuestro compromiso es ayudar a las familias a encontrar todo lo necesario para consentir y cuidar a sus compañeros de vida. Equipos de gimnasios, suplementos deportivos, alimento para mascotas, comida para gatos, accesorios y entretenimientos.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/de maskot·s.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:   "assets/logos/demaskot-s/logodemascots.jpg",
    cardImage:   "assets/logos/demaskot-s/inicio-demaskots.jpg",
    portada:     "assets/logos/demaskot-s/portada-demascots.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573223761816",
    tel:         "3223761816",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 12a 10 04 Mosquera, Colombia",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/1nAL66T9n6YdYK817?g_st=awbXZ",
    
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/demaskot-s/demascot-s-foto1.jpg", "assets/logos/demaskot-s/demascot-s-foto2.jpg","assets/logos/demaskot-s/demascot-s-foto3.jpg","assets/logos/demaskot-s/demascot-s-foto4.jpg","assets/logos/demaskot-s/demascot-s-foto5.jpg",],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       GRANDRES AMIGOS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "grandes-amigos",
    cat:         "mascotas",
    nombre:      "Grandes Amigos",
    slogan:      "Lo que necesitas para consentir a tu mascota",
    desc:        "Grandes Amigos es un espacio dedicado al bienestar y cuidado de las mascotas, donde encontrarás alimentos de excelente calidad, accesorios, juguetes, productos de higiene y salud para perros y gatos. Ofrecemos una amplia variedad de artículos como arenas sanitarias, productos para la orina, desparasitantes y todo lo necesario para brindarles comodidad, diversión y una vida saludable a tus mejores amigos. Nos destacamos por nuestra atención amable, asesoría confiable y compromiso con el cuidado de cada mascota. Alimentación para mascotas, salud y bienestar animal, accesorios para perros y gatos, higiene y cuidado veterinario, desparasitantes y prevención.",
    tipo:        "estandar",
 
    /* --- IMÁGENES Y LOGOS --- */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:   "assets/logos/grandes-amigos/logo-grandesamigos.jpg",
    cardImage:   "assets/logos/grandes-amigos/inicio-grandesamigos.jpg",
    portada:     "assets/logos/grandes-amigos/portada-grandesamigos.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573124266502",
    tel:         "3118211235",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "calle 19 con carrera 1b este Mosquera, Colombia",
    mapUrl:      "",
    mapsLink:    "https://share.google/tcgexGkf5hNkf0pm0",
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     [],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       SURGICAL CARE
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "surgical-care",
    cat:         "mascotas",
    nombre:      "Surgical Care",
    slogan:      "Cuidados para tu mejor amigo",
    desc:        "Surgical Care: Excelencia en Alta Complejidad Veterinaria Somos un centro especializado en la resolución de patologías quirúrgicas complejas en animales de compañía. Nuestro enfoque se centra en tres pilares fundamentales: cirugía de tejidos blandos, ortopedia avanzada y traumatología.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#fdfeff",
    logoPerfil:   "assets/logos/surgical/logo-surgicalcare.jpg",
    cardImage:   "assets/logos/surgical/inicio-surgicalcare.jpg",
    portada:     "assets/logos/surgical/portada-surgicalcare.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573022726793",
    tel:         "3022726793",
    ig:          "https://www.instagram.com/surgicalcare2023?igsh=bTB3MGh1dHlyeDk4",
    fb:          "https://www.facebook.com/share/1DNdUgAUR3/",
    tk:          "https://www.tiktok.com/@surgical.care8?_r=1&_t=ZS-92HLxwgyYRr",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 4#1-18 centro mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/EtG3CeKsDKT4VP2F6",
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/surgical/surgical-foto1.jpeg", "assets/logos/surgical/surgical-foto2.jpeg", "assets/logos/surgical/surgical-foto3.jpeg", "assets/logos/surgical/surgical-foto4.jpeg", "assets/logos/surgical/surgical-foto5.jpeg",],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       DISTRI MASCOTAS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "distri-mascotas",
    cat:         "mascotas",
    nombre:      "DISTRI MASCOTAS",
    slogan:      " lo mejor para tus macotas",
    desc:        "Distribuidora de mascotas La Sabana, especializada en ofrecer alimentos, accesorios, productos de cuidado y bienestar para perros y gatos. Brindamos variedad, calidad y atención personalizada para consentir a tus mascotas con todo lo que necesitan, desde concentrados y juguetes hasta artículos de higiene y salud animal. Nuestro compromiso es ofrecer productos confiables y un servicio cercano que garantice el cuidado, la felicidad y el bienestar de cada mascota. Alimento para perros y gatos, juguetes para mascotas, nutrición canina, accesorios para mascotas, productos veterinarios",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:   "assets/logos/distri-mascotas/logo-distrimascotas.jpg",
    cardImage:   "assets/logos/distri-mascotas/inicio-distrimascotas.jpg",
    portada:     "assets/logos/distri-mascotas/portada-distrimascotas.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573108003827",
    tel:         "3108003827",
    ig:          "https://www.instagram.com/distrimascotas_sabana?igsh=MWFlYnFzd2YwdjVyOQ==",
    fb:          "",
    tik:         "https://www.tiktok.com/@distrimascotas_sabana?_r=1&_t=ZS-95mWMxpB28O",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 9h 14b 04 Mosquera, Colombia",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/A69yTyEdNcQvodPt6",
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/distri-mascotas/distri-foto1.jpg", "assets/logos/distri-mascotas/distri-foto2.jpg", "assets/logos/distri-mascotas/distri-foto3.jpg", "assets/logos/distri-mascotas/distri-foto4.jpg", "assets/logos/distri-mascotas/distri-foto5.jpg",],
  },{
    /* ══════════════════════════════════════════════════════════════
       VETERINARIA & SPA JUDATA VIP
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "veterinariajudata",
    cat:         "mascotas",
    nombre:      "VETERINARIA & SPA JUDATA VIP",
    slogan:      "Salud integral, atención humana y amor en cada latido.",
    desc:        "En nuestra veterinaria trabajamos cada día con amor, respeto y compromiso por el bienestar de los animales y sus familias. Creemos que cada mascota merece ser atendida con paciencia, empatía y dedicación, cuidando no solo su salud física, sino también su tranquilidad, su energía y su calidad de vida. Contamos con servicios de consulta veterinaria, toma de exámenes de sangre, ecografía, radiografía, vacunación y desparasitación, además de procedimientos quirúrgicos menores como esterilizaciones, profilaxis y otros procedimientos básicos, siempre realizados con responsabilidad y cuidado. También ofrecemos servicio de spa y baño, porque sabemos que el bienestar también está en sentirse limpios, cómodos y felices. Nuestro propósito es brindar una atención integral, humana y consciente, acompañando a cada paciente y a su familia en cada etapa, generando confianza, tranquilidad y mucho amor. Estamos siempre para servirles y para ayudar a que sus compañeros de vida vibren bonito, estén sanos y reciban el cuidado que merecen. Bienestar/ desparasitanantes / vacunación / salud animal / atención veterinaria.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:   "assets/logos/judata/Logo-judata.webp",
    cardImage:   "assets/logos/judata/Portada-judata.webp",
    portada:     "assets/logos/judata/Inicio-judata.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573115175014",
    tel:         "3115175014",
    ig:          "https://www.instagram.com/veterinaria_judatavip?igsh=dHN1eHJjbjY5cXlv&utm_source=qr",
    fb:          "",
    tik:         "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 17 # 07-89E Maipore /  Cra 12 # 15-35 Villa Marcela",
    mapUrl:      "",
    mapsLinks: [
      { nombre: "Maipore", url: "https://maps.app.goo.gl/nxtLXN2EEoLtgBpq9" },
      { nombre: "Villa Marcela", url: "https://maps.app.goo.gl/DBhPuUBuXYCKDv4cA" },
    ],
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     [
      "assets/logos/judata/judata1.webp","assets/logos/judata/judata2.webp","assets/logos/judata/judata3.webp","assets/logos/judata/judata4.webp","assets/logos/judata/judata5.webp","assets/logos/judata/judata7.webp","assets/logos/judata/judata8.webp", 
    ],
  },
  // ══ BIENESTAR ════════════════════════════════════════════════
  // ══ BIENESTAR ════════════════════════════════════════════════
  // ══ BIENESTAR ════════════════════════════════════════════════
  // ══ BIENESTAR ═══════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       ESTÉTICA FIGURA ARMONIOSA SPA  
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "armoniosaspa",
    cat:         "bienestar",
    nombre:      "ESTÉTICA FIGURA ARMONIOSA SPA",
    slogan:      "Relajación, belleza y bienestar en perfecta armonía.",
    desc:        "Figura Armoniosa Spa es un espacio dedicado al bienestar, la relajación y el cuidado integral de la belleza. Ofrecemos servicios especiales como sauna, jacuzzi, masajes relajantes, tratamientos corporales y faciales, diseñados para brindar armonía, descanso y renovación tanto física como emocional. Contamos con atención personalizada, un ambiente tranquilo y profesionales comprometidos en hacer de cada visita una experiencia única de relajación y bienestar. Estética integral, ambiente armonioso, relajación y bienestar, facial, cuidado corporal",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/ARMONIOSA/logo-estetica-figura.jpg",
    cardImage:   "assets/logos/ARMONIOSA/inicio-estetica-figura.jpg",
    portada:     "assets/logos/ARMONIOSA/portada-estetica-figura.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573118068424",
    tel:         "3118068424",
    ig:          "https://www.instagram.com/figurasarmoniosas?igsh=NW5udmZkNHg3bnF",
    fb:          "https://www.facebook.com/share/1XcRG7nMMN/",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CARRERA 13a # 17-01 segundo piso barrio villa Sajonia MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/7YfDeH7i8GLyD2oJ9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/ARMONIOSA/armoniosa1.jpeg","assets/logos/ARMONIOSA/armoniosa2.jpeg","assets/logos/ARMONIOSA/armoniosa3.jpeg","assets/logos/ARMONIOSA/armoniosa4.jpeg","assets/logos/ARMONIOSA/armoniosa5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       GUHO LEN´S 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "guholens",
    cat:         "bienestar",
    nombre:      "GUHO LEN´S ",
    slogan:      "¡Vuelve a ver el mundo con claridad!",
    desc:        "Óptica es un espacio especializado en el cuidado de la salud visual, ofreciendo monturas modernas, lentes de alta calidad y atención confiable para toda la familia. Contamos con examen visual profesional, asesoría personalizada y una amplia variedad de estilos que se adaptan a cada necesidad y personalidad. Nuestro compromiso es brindar comodidad, claridad y confianza, ayudando a nuestros clientes a cuidar su visión con productos y servicios de excelente calidad. Examen visual profesional • Monturas modernas • Lentes de alta calidad a precios justos. Gafas formuladas, examen visual, optica profesional, lentes de alta calidad, monturas modernas.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/guholens/logo-guho-lens-optica.jpg",
    cardImage:   "assets/logos/guholens/inicio-guho-lens-optica.jpg",
    portada:     "assets/logos/guholens/portada-guho-lens-optica.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573192163876",
    tel:         "3192163876",
    ig:          "https://www.instagram.com/guholens?igsh=MTM5eDIyZ2pvaTBsMg==",
    fb:          "https://www.facebook.com/share/1LQTDZWDtx/",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         " CALLE 18 # 6-43 VILLA MARIA ( mosquera )",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/DiDWV6dEGGYW5b4Z7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/guholens/hugolens1.jpeg","assets/logos/guholens/hugolens2.jpeg","assets/logos/guholens/hugolens3.jpeg","assets/logos/guholens/hugolens4.jpeg","assets/logos/guholens/hugolens5.jpeg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ORIGEN VITAL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "origenvital",
    cat:         "bienestar",
    nombre:      "ORIGEN VITAL",
    slogan:      "Consiente tu salud de manera natural. ¡ tenemos lo que buscas!",
    desc:        "Origen Vital es una tienda naturista dedicada al bienestar, la salud y el cuidado integral de las personas. Ofrecemos productos naturales, suplementos, vitaminas, cuidado personal y alternativas saludables para mejorar la calidad de vida de nuestros clientes. Brindamos atención personalizada y asesoría para ayudarte a encontrar opciones naturales que aporten equilibrio, energía y bienestar para tu día a día. Un espacio pensado para quienes buscan vivir de manera más saludable y natural. Bienestar integral, alimentos saludables, medicina natural, suplemento vitamínico, productos naturales",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/origenvital/logo-origen-vital.jpg",
    cardImage:   "assets/logos/origenvital/inicio-origen-vital.jpg",
    portada:     "assets/logos/origenvital/portada-origen-vital.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573114023108",
    tel:         "3114023108",
    ig:          "https://www.instagram.com/tiendanaturistaorigenvital?igsh=dzZlNWdtcG85OGU3",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "3 A 17 sur 96 Moll meridiano novatora local 155 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/nYTqYr8v5Rd5EX9R7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       VICTORIA GOMEZ COSMETICA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "victoriacosmetica",
    cat:         "bienestar",
    nombre:      "VICTORIA GOMEZ COSMETICA",
    slogan:      "Realzamos tu belleza, cuidamos tu bienestar",
    desc:        "Victoria Gomez Cosmiatría es un espacio dedicado al cuidado, bienestar y belleza integral, ofreciendo tratamientos faciales y corporales diseñados para resaltar la belleza natural de cada persona. Especialistas en cosmiatría y cuidado estético, brindando atención personalizada, calidad en cada procedimiento y un ambiente cómodo y profesional. Además, cuentan con servicios especiales y detalles pensados para consentir a sus clientes y hacer de cada visita una experiencia única. Belleza, cosmiatría, bienestar, estética, cuidado facial.",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/VICTORIAESTETICA/logo-victoria-estetica.jpg",
    cardImage:   "assets/logos/VICTORIAESTETICA/inicio-victoria-estetica.jpg",
    portada:     "assets/logos/VICTORIAESTETICA/portada-victoria-estetica.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573118904703",
    tel:         "3118904703",
    ig:          "https://www.instagram.com/estetica_cosmetologiavg?igsh=c20ydmhibmdxcWEw",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "CALLE 1 # 1-21 MOSQUERA CENTRO",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/ywv2bhnP2RtqYSTGA",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/VICTORIAESTETICA/victoria1.jpeg","assets/logos/VICTORIAESTETICA/victoria2.jpeg","assets/logos/VICTORIAESTETICA/victoria3.jpeg","assets/logos/VICTORIAESTETICA/victoria4.jpeg","assets/logos/VICTORIAESTETICA/victoria5.jpeg",
    ],
  },
  // ══ IMAGEN ════════════════════════════════════════════════
  // ══ IMAGEN ════════════════════════════════════════════════
  // ══ IMAGEN ════════════════════════════════════════════════
  // ══ IMAGEN ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       CORTES Y ESTILOS 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "cortesyestilos",
    cat:         "imagen",
    destacado:   1,
    nombre:      "CORTES Y ESTILOS",
    slogan:      "SOMOS UNA SALA DE BELLEZA ( DISEÑADORES DE COLOR)",
    desc:        "Sala de belleza especializada en realzar la imagen y el estilo de cada cliente mediante servicios profesionales de colorimetría, keratina, uñas, peinados y maquillaje. En “Cortes y Estilos” trabajamos con técnicas modernas, productos de alta calidad y atención personalizada para brindar experiencias de belleza, cuidado y transformación. Nuestro compromiso es resaltar tu esencia con elegancia, creatividad y las últimas tendencias en estética y cuidado personal. Peinados profesionales, Cuidado estético, Alisados capilares, Maquillaje estético, Spa de belleza",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/cortes/logo-cortes-y-estilos.jpg",
    cardImage:   "assets/logos/cortes/inicio-cortes-y-estilos.jpg",
    portada:     "assets/logos/cortes/portada-cortes-y-estilos.jpg",

    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WHATSAPP", numero: "573213880163" },
  { nombre: "WHATSAPP", numero: "573124495857" },
],
    tel:         "3213880163",
    ig:          "https://www.instagram.com/cortesyestilosmosquera?igsh=eWJsemJuNzNxODlp",
    fb:          "https://www.facebook.com/share/1EToFzgZGG/",
    tk:          "https://www.tiktok.com/@cortes_y.estilos?_r=1&_t=ZS-96S5ca7dllo",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3 #21-41, Cl. 22 #2a-17a, El Cabrero, Mosquera, Cundinamarca ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/yowwtmxdHNpEMKQz6",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/cortes/cortesyestilos1.jpg","assets/logos/cortes/cortesyestilos2.jpg","assets/logos/cortes/cortesyestilos3.jpg","assets/logos/cortes/cortesyestilos4.jpg","assets/logos/cortes/cortesyestilos5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       LA PELUQUERÍA (Centro avanzado de belleza) 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "lapeluqueria",
    cat:         "imagen",
    nombre:      "LA PELUQUERÍA (Centro avanzado de belleza) ",
    slogan:      "TECNICOS CAPILARES Y ESTÉTICOS AL SERVICIO DE TU IMAGEN",
    desc:        "Peluquería especializada en realzar la belleza y el estilo de cada persona, ofreciendo servicios de cortes, peinados, coloración, cepillados, tratamientos capilares y cuidado integral del cabello. Brindamos atención personalizada, productos de alta calidad y un ambiente moderno y acogedor donde cada cliente vive una experiencia de confianza, renovación y bienestar. Nuestro compromiso es resaltar tu imagen con profesionalismo, creatividad y las últimas tendencias en belleza. PELUQUERÍA:Corte ¿dama y caballero, Colorimetría, Peinados de alta gama, Peinados de niña, Cepillados, Maquillaje, Extensiones de cabello punto a punto y tira, Arreglos de novia, quinceañera, Keratina y keramix Peluquería profesional, Técnicos capilares, Estética integral, Tratamientos capilares, Belleza y cuidado",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/lapeluqueria/logo-la-peluqueria.jpg",
    cardImage:   "assets/logos/lapeluqueria/inicio-la-peluqueria.jpg",
    portada:     "assets/logos/lapeluqueria/portada-la-peluqueria.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573233887811",
    tel:         "3233887811",
    ig:          "https://tr.ee/WZJ_WC_Fhc",
    fb:          "https://tr.ee/c9wkrEvSVZ",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "carrera 3 # 3-75 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/6ckcV3vHPDpaegtN7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "",
    ],
  },
  // ══ EDUCACION ════════════════════════════════════════════════
  // ══ EDUCACION ════════════════════════════════════════════════
  // ══ EDUCACION ════════════════════════════════════════════════
  // ══ EDUCACION ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       ACADEMIA ABICUN 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "abicun",
    cat:         "educacion",
    nombre:      "ACADEMIA ABICUN ",
    slogan:      "Técnico en cosmetología y belleza integral educación para el trabajo y desarrollo humano.",
    desc:        "Abicun Academia es un centro de formación especializado en cosmetología y belleza integral, comprometido con preparar profesionales altamente capacitados en el mundo de la estética. Ofrecemos cursos y capacitaciones en maquillaje, peluquería, barbería, uñas, tratamientos faciales y corporales, brindando enseñanza práctica, técnicas actualizadas y acompañamiento profesional. Nos destacamos por formar talentos con creatividad, disciplina y pasión por la belleza, en un ambiente moderno y de aprendizaje continuo. Estética integral, cuidado facial y corporal, belleza avanzada, tecnicas de spa, cosmetologia profecional",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/abicun/logo-academia-abicun.webp",
    cardImage:   "assets/logos/abicun/inicio-academia-abicun.webp",
    portada:     "assets/logos/abicun/portada-academia-abicun.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573123883183",
    tel:         "3123883183",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 22 #2a - 30 barrio el cabrero MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/jJhS7V84DYKrXhoG9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      ""
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ACADEMIA NOVA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "nova",
    cat:         "educacion",
    nombre:      "ACADEMIA NOVA ",
    slogan:      "¡Transforma tu pasión en arte y tu arte en ingresos! ",
    desc:        "Capacítate con nuestras clases semi personalizadas, especializadas en manicura rusa semipermanente (técnicas en tendencia) acrílico básico intermedio polygel   soft gel sistema dual y sistemas híbridos.  Contamos con clases entre  semana y domingos   Vuélvete  una profesional de las uñas junto a nosotros. De 9:00am a 6:00pm Studio de uñas y pestañas nova by shalom !! Somos especialistas en resaltar tu belleza  nuestros servicios 👇🏻👇🏻 Manicure y pedicure tradicional y semipermanente  Recubrimientos en uña natural  Acrílico, Polygel, Pestañas pelo a pelo, Soft gel, Dual System",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/nova/logo-academia-nova.jpg",
    cardImage:   "assets/logos/nova/inicio-academia-nova.jpg",
    portada:     "assets/logos/nova/portada-academia-nova.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573237287641",
    tel:         "3237287641",
    ig:          "https://www.instagram.com/academia_nova_?igsh=dGJpMngwdDlueW5x",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/GWt1TSTsqSREyN567",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/nova/nova1.jpg","assets/logos/nova/nova2.jpg","assets/logos/nova/nova3.jpg","assets/logos/nova/nova4.jpg","assets/logos/nova/nova5.jpg",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ACADEMIA VALENTINA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "valentina",
    cat:         "educacion",
    nombre:      "ACADEMIA VALENTINA",
    slogan:      "Aquí no solo aprendes, aquí cocinas.",
    desc:        "Academia presencial de cocina, repostería y panadería con clases prácticas y preparaciones para llevar. 🎓✨ ¡Aprende, Emprende y Disfruta con Nuestros Cursos Disponibles 1-)Repostería y Pastelería (tortas, rellenos, cubiertas y decoración). 2-)Panadería básica, pizza y hojaldre 3-)Repostería saludable (sin gluten y sin azúcar) 4-)Asados al barril 5-)Amasijos colombianos (almojábanas, avena cubana, buñuelos, mantecadas, garullas, pan de bono y pan de yuca) 6-)Cocina internacional para principiantes 7-)Chorizos artesanales 8-)Yogurt artesanal para emprender 9-)Repostería para emprender (mesa dulce, donas, brownies, fresas con chocolate, postres, galletas, cupcakes y chocolatería) 10-)Comidas rápidas para negocio 11-)Sushi para principiantes 12-)Curso para niños 👦 Manejamos horarios flexibles entre semana y domingos. Cocina profesional, repostería artesanal, panadería técnica, formacion gastronomica, técnicas culinarias",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/valentina/logo-academia-valentina.jpg",
    cardImage:   "assets/logos/valentina/inicio-academia-valentina.jpg",
    portada:     "assets/logos/valentina/portada-academia-valentina.jpg",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573144503449",
    tel:         "3144503449",
    ig:          "http://instagram.com/academia_valentina_2",
    fb:          "https://www.facebook.com/share/17o4rkpyrs/?mibextid=wwXIfr",
    tk:          "",
    web:         "https://wa.me/c/573005268037",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/TaLwujz3XbcVmcTm9",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/valentina/valentina1.jpeg","assets/logos/valentina/valentina2.jpeg","assets/logos/valentina/valentina3.jpeg","assets/logos/valentina/valentina4.jpeg","assets/logos/valentina/valentina5.jpeg",
    ],
  },


  


  
 
];