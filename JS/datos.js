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
  { id:"bienestar",    n:"SALUD Y BIENESTAR",              e:"", c:"#1abc9c", img:"assets/categorias/categoria-bienestar.webp", imgHdr:"assets/categorias/destacados/destacados-bienestar.webp", showTitle: false},
  { id:"shopping",     n:"SHOPPING",                       e:"", c:"#e5007d", img:"assets/categorias/categoria-shopping.webp", imgHdr:"assets/categorias/destacados/destacados-shopping.webp", showTitle: false},
  { id:"imagen",       n:"IMAGEN Y ESTILO",                e:"", c:"#9b59b6", img:"assets/categorias/categoria-estilo.webp", imgHdr:"assets/categorias/destacados/destacados-imagen-estilo.webp", showTitle: false},
  { id:"mascotas",     n:"MUNDO MASCOTAS",                 e:"", c:"#f39c12", img:"assets/categorias/mascotas.webp", imgHdr:"assets/categorias/destacados/destacados-macotas.webp", showTitle: false},
  { id:"educacion",    n:"EDUCACION Y DEPORTES",        e:"", c:"#3498db", img:"assets/categorias/categoria-educacion.webp", imgHdr:"assets/categorias/destacados/destacados-educacion.webp", showTitle: false},
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

   PARA DIDI FOOD Y RAPPI:
     - Pega el link directo a tu negocio en esas apps
     - Si no vendes por ahí, déjalo en blanco: didi:"" / rappi:""
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
    didi:        "",
    rappi:       "",
    web:         "",
    greviews:    "",
 
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
    desc:        "<p>El mejor restaurante de la zona con más de 15 años de tradición. Cocina casera con ingredientes frescos en un ambiente familiar.</p>",
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
    didi:        "https://didi-food.com/restaurante",
    rappi:       "https://www.rappi.com.co/restaurantes/restaurante",
    web:         "",
    greviews:    "",
 
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
    desc:        "<p>Ropa y accesorios de moda para toda la familia. Las últimas tendencias a precios que no creerás. Nuevas colecciones cada semana.</p>",
    tipo:        "catalogo",
    catalogoNombre: "menu",
 
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
    didi:        "",
    rappi:       "",
    web:         "",
    greviews:    "",
 
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
    desc:        "<p>METABOLISMO: sobrepeso, hígado graso, diabetes, estreñimiento, gastritis, hipotiroidismo, resistencia a la insulina, desintoxicación básica y profunda.</p><p>MEDICINA ESTÉTICA: tratamientos faciales avanzados, tratamiento de acné, rejuvenecimiento facial, reducción de grasa localizada, tratamiento para acidez, terapias capilares, depilación láser permanente.</p><p>SALUD MENTAL: ansiedad, depresión y estrés, alteraciones de sueño.</p><p>DOLOR Y REGENERACIÓN CELULAR: artritis y artrosis, dolor lumbar, migraña, parálisis facial, neuralgia, fibromialgia, cansancio y fatiga crónica, contracturas musculares.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    web:         "https://doctoraingridmanrique.com/",
 
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
    desc:        "<p>Egresada de la Universidad Santo Tomás, con más de 35 años de experiencia en el abordaje de diversas problemáticas que afectan la salud mental de niños y niñas, adolescentes, jóvenes, adultos y personas mayores.</p><p>Mi enfoque es sistémico, orientado a resultados, utilizando estrategias efectivas que facilitan la resolución de los conflictos y el bienestar emocional del paciente.</p><p>Me caracterizo por ser una persona empática, amable, centrada en las necesidades individuales de cada consultante, ofreciendo un espacio seguro y de confianza para el proceso terapéutico.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Valoración de terapia física.</p><p>Sesión de terapia física.</p><p>Descarga muscular.</p><p>Masajes de relajación y deportivos.</p><p>Valoración y masajes reductores.</p><p>Terapias especializadas.</p><p>Recuperación y manejo de lesiones.</p><p>Prevención de sobrecargas musculares.</p><p>Hidroterapia.</p><p>Vendaje neuromuscular y funcional.</p><p>Sanación emocional.</p><p>Acompañamiento terapéutico.</p><p>Equilibrio mental.</p><p>Desarrollo personal.</p><p>Escucha activa.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/terapeutico/logo-terapeutico.webp",
    cardImage:   "assets/logos/terapeutico/inicio-terapeutico.webp",
    portada:     "assets/logos/terapeutico/portada-terapeutico.webp",
 
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
      "assets/logos/terapeutico/Ortopedico1.webp","assets/logos/terapeutico/Ortopedico2.webp","assets/logos/terapeutico/Ortopedico3.webp","assets/logos/terapeutico/Ortopedico4.webp","assets/logos/terapeutico/Ortopedico5.webp",
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
    desc:        "<p>En “Odontología Estética e Integral Lyda Tovar” te ofrecemos una atención odontológica integral y personalizada, con las últimas tecnologías y tratamientos innovadores.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */

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
       CENTRO MEDICO Y LABORATORIO CLÍNICO
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "laboratorioclinico",
    cat:         "salud",
    nombre:      "CENTRO MEDICO Y LABORATORIO CLÍNICO",
    slogan:      "Nuestra prioridad es tu salud y nuestra mejor herramienta es la prevención. ",
    desc:        "<p>👩🏻‍🔬 Calidad humana en la atención, eficiente oportunidad de entrega en los resultados, ambiente confortable y adecuada orientación según la necesidad de cada usuario.</p><p>Pruebas de embarazo, examen de sangre, hematología, examen de orina y coprológico.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Estamos comprometidos con la salud y el bienestar. Brindamos servicios médicos integrales con atención profesional y humana de calidad, ofreciendo consultas, procedimientos especializados y acompañamiento en cada etapa del cuidado de nuestros pacientes.</p><p>Trabajamos con responsabilidad, tecnología y equipo capacitado para garantizar confianza, seguridad y atención oportuna para toda la comunidad.</p><p>Salud integral, atención especializada, servicios médicos, bienestar y cuidado, calidad humana.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/fast/logo-fast-medical.jpg",
    cardImage:   "assets/logos/fast/inicio-fast-medical.jpg",
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
    desc:        "<p>En nuestra clínica odontológica cuidamos tu sonrisa con atención profesional, tecnología y un servicio de calidad. Ofrecemos tratamientos de odontología general, estética dental, ortodoncia, limpieza, blanqueamientos, rehabilitación oral y salud preventiva para niños y adultos, con atención personalizada para brindarte bienestar, salud y una sonrisa llena de seguridad.</p><p>Ortodoncia, implementos dentales, higiene oral, atención profesional, higiene y bioseguridad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>En nuestro centro de psicología brindamos acompañamiento profesional y humano para el bienestar emocional y mental. Ofrecemos atención personalizada en terapia individual, de pareja, familiar e infantil, orientada al manejo de ansiedad, estrés, autoestima, emociones y crecimiento personal.</p><p>Trabajamos con compromiso, empatía y confidencialidad para ayudarte a encontrar equilibrio y bienestar en cada etapa de tu vida.</p><p>Depresión, duelo, ansiedad, pautas de crianza, anorexia.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Somos un espacio ideal para disfrutar sabores tradicionales y productos frescos todos los días. Trabajamos con calidad, sabor casero y atención amable para brindar a nuestros clientes una experiencia deliciosa en cada visita.</p><p>Surtimos tu negocio: buñuelos, pan de bono, empanadas, palitos de queso, arepas de maíz con queso, pan de queso, crema de avena, masa lista para buñuelos y masa lista para pan de bono.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       COMA MAS POR MENOS 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "comamaspormenos",
    cat:         "antojos",
    destacado:   1,
    nombre:      "COMA MAS POR MENOS",
    slogan:      "Una delicia con precio justo.",
    desc:        "Coma más por menos pesos somos un negocio de comidas rápidas especializados en una gran variedad de platos como hamburguesas 100 % artesanales perros salchipapas salvajadas platos a la carta burritos fritos mazorcadas dorilocos alitas y mucho más manejamos domicilios sin costo adicional.</p><p>Hamburguesas/ Perros calientes/ Comidas rapidas/ Combos.",
    tipo:        "restaurante",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/comamas/logo-comamas.webp",
    cardImage:   "assets/logos/comamas/inicio-comamas.webp",
    portada:     "assets/logos/comamas/portada-comamas.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573028409134 ",
    tel:         "3028409134",
    ig:          "https://www.instagram.com/andre_karito1428?igsh=Y2plY2plazZidnR4",
    fb:          "https://www.facebook.com/share/1E6CuCrFCw/",
    tk:          "https://www.tiktok.com/@comamaspormenospesos?_r=1&_t=ZS-98Rm2Th7WY0",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Cll 9 h 14 b 21 poblado, MOSQUERA",
    mapUrl:      "",
    mapsLink:    "",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/comamas/comamas-1.webp","assets/logos/comamas/comamas-2.webp","assets/logos/comamas/comamas-3.webp","assets/logos/comamas/comamas-4.webp","assets/logos/comamas/comamas-5.webp","assets/logos/comamas/comamas-6.webp","assets/logos/comamas/comamas-7.webp","assets/logos/comamas/comamas-8.webp","assets/logos/comamas/comamas-9.webp","assets/logos/comamas/comamas-10.webp",
    ],
        /* ─── MENÚ DE COMIDAS ─── */
    menu: [
      {
        s: "PERROS CALIENTES",
        items: [
          { n:"Perro Full Queso (solo)",   p:"$17.000", d:"Salchicha americana, queso fundido, cebolla caramelizada, papa chip y salsas" },
          { n:"Perro Full Queso (combo)",  p:"$25.000", d:"Incluye papas + gaseosa" },
          { n:"Perro Americano (solo)",    p:"$20.000", d:"Salchicha americana, jamón, tocineta, queso, cebolla caramelizada, papa chip y salsas" },
          { n:"Perro Americano (combo)",   p:"$28.000", d:"Incluye papas + gaseosa" },
          { n:"Perro Criollo (solo)",      p:"$25.000", d:"Salchicha americana, carne, maíz, queso, cebolla caramelizada, papa chip y salsas" },
          { n:"Perro Criollo (combo)",     p:"$33.000", d:"Incluye papas + gaseosa" },
          { n:"Perro Premium (solo)",      p:"$29.000", d:"Salchicha americana, pollo, carne, maíz, queso, cebolla caramelizada, papa chip y salsas" },
          { n:"Perro Premium (combo)",     p:"$37.000", d:"Incluye papas + gaseosa" },
        ]
      },
      {
        s: "COMBOS DOBLES",
        items: [
          { n:"Combo Full Queso",  p:"$38.000", d:"2 perros + 2 papas francesas + 2 gaseosas mini" },
          { n:"Combo Americanos",  p:"$43.000", d:"2 perros + 2 papas francesas + 2 gaseosas mini" },
          { n:"Combo Criollos",    p:"$53.000", d:"2 perros + 2 papas francesas + 2 gaseosas mini" },
          { n:"Combo Premium",     p:"$61.000", d:"2 perros + 2 papas francesas + 2 gaseosas mini" },
        ]
      },
      {
        s: "ALITAS BBQ",
        items: [
          { n:"12 Alitas", p:"$28.000", d:"Acompañadas de papa francesa" },
          { n:"24 Alitas", p:"$48.000", d:"Acompañadas de papa francesa" },
          { n:"40 Alitas", p:"$68.000", d:"Acompañadas de papa francesa" },
        ]
      },
      {
        s: "SALCHIPAPAS",
        items: [
          { n:"Salchipapa Sencilla",   p:"$12.000", d:"Papa francesa, salchicha y salsas" },
          { n:"Salchipapa Americana",  p:"$18.000", d:"Jamón, maíz tierno, salchicha americana, queso y salsas" },
          { n:"Papas Locas",           p:"$25.000", d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso y papá chip" },
          { n:"Salchipapa Personal",   p:"$27.000", d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso y papá chip" },
        ]
      },
      {
        s: "PORCIONES PARA GRUPOS",
        items: [
          { n:"Maxi Dúo (2 personas)",     p:"$48.000",  d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso y papá chip" },
          { n:"Premium (4 personas)",      p:"$68.000",  d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso, papá chip y tocineta, plátano" },
          { n:"Suprema (6 personas)",      p:"$85.000",  d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso, papá chip, tocineta, plátano y chicharrón" },
          { n:"Gigante (8 a 10 personas)", p:"$110.000", d:"Pollo, carne, maíz tierno, vegetales, jamón, salsas, queso, papá chip, tocineta, chicharrón y alitas" },
        ]
      },
      {
        s: "COMBO FAMILIAR",
        items: [
          { n:"Combo Familiar", p:"$62.000", d:"Salchipapa Maxi Dúo + porción de chicharrón + Coca-Cola 1.5 L" },
        ]
      },
      {
        s: "BURRITOS",
        items: [
          { n:"Burrito Supremo", p:"$30.000", d:"Tortilla, lechuga, pollo o carne, queso, maíz y papa francesa" },
          { n:"Burrito Premium", p:"$37.000", d:"Tortilla, lechuga, pollo o carne, queso, jamón, tocineta, maíz y papa francesa" },
        ]
      },
      {
        s: "MAZORCADAS",
        items: [
          { n:"Mazorcada Personal", p:"$29.000", d:"Maíz tierno, cebolla caramelizada, pollo, carne, chorizo, jamón, papa chip, papa francesa, queso y salsas" },
          { n:"Mazorcada Premium",  p:"$42.000", d:"Maíz tierno, cebolla caramelizada, pollo, carne, chorizo, jamón, tocineta, papa francesa, queso y salsas" },
          { n:"Mazorcada Dúo",      p:"$57.000", d:"Maíz tierno, cebolla caramelizada, pollo, carne, chorizo, maduritos, chicharrón, alitas, papa chip, papa francesa y queso" },
        ]
      },
      {
        s: "COMBO BURRITO",
        items: [
          { n:"Combo Burrito", p:"$63.000", d:"2 burritos + 2 papas + 2 gaseosas" },
        ]
      },
      {
        s: "ADICIONALES",
        items: [
          { n:"Papas Francesas", p:"$8.000",  d:"" },
          { n:"Chicharrón",      p:"$13.000", d:"" },
          { n:"Maduritos",       p:"$7.000",  d:"" },
          { n:"Queso",           p:"$7.000",  d:"" },
          { n:"Tocineta",        p:"$7.000",  d:"" },
          { n:"Jamón",           p:"$5.000",  d:"" },
        ]
      },
      {
        s: "PATACÓN RELLENO",
        items: [
          { n:"Patacón Relleno", p:"$28.000", d:"Patacón, pollo, jamón, maíz tierno, cebolla caramelizada, queso, papa chip y salsas" },
        ]
      },
      {
        s: "DORILOCOS",
        items: [
          { n:"Dorilocos Personal",  p:"$15.000", d:"Maíz tierno, lechuga, salsas y queso" },
          { n:"Dorilocos Familiar",  p:"$45.000", d:"Doritos grandes, pollo o carne, maíz tierno, lechuga, queso y salsas" },
        ]
      },
      {
        s: "PLATOS ESPECIALES",
        items: [
          { n:"Carne Asada",           p:"$30.000", d:"Incluye papa francesa, patacón y ensalada" },
          { n:"Pechuga a la Plancha",  p:"$30.000", d:"Incluye papa francesa, patacón y ensalada" },
          { n:"Pechuga Gratinada",     p:"$34.000", d:"Incluye papa francesa, patacón y ensalada" },
          { n:"Lomo de Cerdo",         p:"$30.000", d:"Incluye papa francesa, patacón y ensalada" },
        ]
      },
      {
        s: "PICADA PA' DOS",
        items: [
          { n:"Picada Pa' Dos", p:"$75.000", d:"Carne de res, carne de cerdo, pechuga, patacón, papa francesa y chicharrón + gaseosa 1.5 L. Ideal para compartir" },
        ]
      },
      {
        s: "HAMBURGUESAS ARTESANALES",
        items: [
          { n:"Clásica Normal",              p:"$18.000", d:"Carne artesanal, queso, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Clásica Doble Carne",         p:"$24.000", d:"Carne artesanal, queso, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Clásica Triple Carne",        p:"$29.000", d:"Carne artesanal, queso, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Suprema Normal",              p:"$23.000", d:"Carne artesanal, queso, jamón, tocineta, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Suprema Doble Carne",         p:"$30.000", d:"Carne artesanal, queso, jamón, tocineta, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Suprema Triple Carne",        p:"$35.000", d:"Carne artesanal, queso, jamón, tocineta, cebolla caramelizada, vegetales, papa chip y salsas" },
          { n:"Premium Normal",              p:"$26.000", d:"Carne artesanal, huevo frito, doble jamón, doble tocineta, queso, vegetales, papa chip y salsas" },
          { n:"Premium Doble Carne",         p:"$32.000", d:"Carne artesanal, huevo frito, doble jamón, doble tocineta, queso, vegetales, papa chip y salsas" },
          { n:"Premium Triple Carne",        p:"$38.000", d:"Carne artesanal, huevo frito, doble jamón, doble tocineta, queso, vegetales, papa chip y salsas" },
          { n:"Criolla Normal",              p:"$29.000", d:"Carne artesanal, maíz tierno, huevo frito, plátano, queso, papa chip y salsas" },
          { n:"Criolla Doble Carne",         p:"$35.000", d:"Carne artesanal, maíz tierno, huevo frito, plátano, queso, papa chip y salsas" },
          { n:"Criolla Triple Carne",        p:"$40.000", d:"Carne artesanal, maíz tierno, huevo frito, plátano, queso, papa chip y salsas" },
          { n:"Patacón Burger Normal",       p:"$28.000", d:"Carne artesanal, jamón, queso, huevo frito, tocineta, vegetales y salsas" },
          { n:"Patacón Burger Doble Carne",  p:"$35.000", d:"Carne artesanal, jamón, queso, huevo frito, tocineta, vegetales y salsas" },
          { n:"Patacón Burger Triple Carne", p:"$40.000", d:"Carne artesanal, jamón, queso, huevo frito, tocineta, vegetales y salsas" },
        ]
      },
      {
        s: "COMBOS AGRANDADOS",
        items: [
          { n:"Combo Clásica Normal",              p:"$26.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Clásica Doble Carne",         p:"$33.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Clásica Triple Carne",        p:"$38.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Suprema Normal",              p:"$31.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Suprema Doble Carne",         p:"$41.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Suprema Triple Carne",        p:"$47.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Premium Normal",              p:"$33.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Premium Doble Carne",         p:"$44.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Premium Triple Carne",        p:"$50.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Criolla Normal",              p:"$36.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Criolla Doble Carne",         p:"$43.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Criolla Triple Carne",        p:"$48.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Patacón Burger Normal",       p:"$35.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Patacón Burger Doble Carne",  p:"$43.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
          { n:"Combo Patacón Burger Triple Carne", p:"$48.000", d:"Incluye 250 gr de papas francesas + gaseosa" },
        ]
      },
      {
        s: "NUESTROS COMBOS",
        items: [
          { n:"Combo Pa' Dos",       p:"$39.000", d:"2 hamburguesas + 2 papas francesas + 2 gaseosas" },
          { n:"Combo Parche",        p:"$70.000", d:"4 hamburguesas + 4 papas francesas + gaseosa 1.5 L" },
          { n:"Combo Supremo",       p:"$52.000", d:"2 hamburguesas supremas + 2 papas francesas + 2 gaseosas" },
          { n:"Combo Premium",       p:"$58.000", d:"2 hamburguesas premium + 2 papas francesas + 2 gaseosas" },
        ]
      },
      {
        s: "COMBOS PARA COMPARTIR",
        items: [
          { n:"Combo Criollo",         p:"$65.000", d:"2 hamburguesas criollas + 2 papas francesas + 2 gaseosas" },
          { n:"Combo Patacón",         p:"$58.000", d:"2 hamburguesas de patacón + 2 papas francesas + gaseosa 1.9 L" },
          { n:"Combo Variado",         p:"$60.000", d:"1 hamburguesa clásica + 1 perro full queso + 1 salchipapa americana + gaseosa 1.5 L" },
          { n:"Combo Trio",            p:"$60.000", d:"3 hamburguesas clásicas + 3 papas francesas + gaseosa 1.5 L" },
          { n:"Combo Parche Supremo",  p:"$90.000", d:"4 hamburguesas supremas + 4 papas francesas + gaseosa 1.5 L" },
        ]
      },
      {
        s: "EMPANADAS",
        items: [
          { n:"Papa Rellena",              p:"$4.000",  d:"" },
          { n:"Empanadas Unidad",          p:"$1.200",  d:"Empanadas tradicionales" },
          { n:"Empanadas x 6",             p:"$6.500",  d:"Empanadas tradicionales" },
          { n:"Empanadas x 12",            p:"$13.000", d:"Empanadas tradicionales" },
          { n:"Empanadas x 18",            p:"$19.500", d:"Empanadas tradicionales" },
          { n:"Empanadas x 24",            p:"$26.000", d:"Empanadas tradicionales" },
          { n:"Empanadas x 30",            p:"$32.000", d:"Empanadas tradicionales" },
        ]
      },
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
    desc:        "<p>Gustoso no nació en una oficina, nació en una cocina de casa, entre el aroma del arroz recién salteado y el sonido crujiente de una milanesa en su punto exacto. Quisimos crear algo que nos hiciera sentir orgullosos de nuestra tierra: una comida honesta, abundante y con ese toque artesanal que solo se logra cuando se cocina sin afán.</p><p>Por eso, cada salsa es nuestra, cada arroz tiene su secreto y cada milanesa se prepara pensando en que tú, nuestro vecino, vuelvas siempre por más. ¡Gracias por ser parte de nuestra mesa!</p><p>Sabor tradicional, arroz chino, comida paisa, cocina fusión, almuerzos especiales.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Es el lugar ideal para disfrutar del auténtico sabor del pollo broaster crocante y una gran variedad de comidas rápidas y platos especiales. Ofrecemos almuerzos caseros, carnes a la plancha, alitas bañadas, sándwiches, nuggets y mucho más, preparados con calidad, sabor y excelente atención.</p><p>Somos un espacio perfecto para compartir en familia y disfrutar de promociones, buen ambiente y el mejor sabor en cada bocado.</p><p>Gastronomía gourmet, cocina tradicional, experiencia culinaria, ingredientes frescos, atención de calidad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/broasterdelchef/logo-broaster- chef.webp",
    cardImage:   "assets/logos/broasterdelchef/inicio-broaster-chef.webp",
    portada:     "assets/logos/broasterdelchef/portada-broaster-chef.webp",
 
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
      "assets/logos/broasterdelchef/boasterchef1.webp","assets/logos/broasterdelchef/boasterchef2.webp","assets/logos/broasterdelchef/boasterchef3.webp","assets/logos/broasterdelchef/boasterchef4.webp","assets/logos/broasterdelchef/boasterchef5.webp",
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
    desc:        "<p>En Broaster Rapi Express ofrecemos una deliciosa variedad de comida rápida, comida china y platos a la carta preparados con sabor, calidad y frescura. Disfruta de pollo broaster crujiente, arroces especiales, carnes, acompañamientos y recetas ideales para compartir en familia o con amigos.</p><p>Nos destacamos por nuestra atención rápida, buen servicio y sabores que conquistan en cada bocado.</p><p>Comida china y platos a la carta: pollo broaster, comida rápida, domicilios express, sabor crujiente, atención rápida.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    mapsLink:    "https://maps.app.goo.gl/CuCLFTJGAsyxsbYYA",
 
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
    desc:        "<p>Somos un negocio dedicado a ofrecer sabores tradicionales y caseros con productos frescos y de excelente calidad. Disfruta de deliciosos envueltos, empanadas, arepas de maíz y tamales preparados con recetas típicas que resaltan el auténtico sabor de nuestra cocina.</p><p>Brindamos atención amable y un ambiente ideal para compartir meriendas tradicionales y sabor.</p><p>Envueltos tradicionales, sabor casero, recetas artesanales, comida típica, maíz colombiano.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Disfruta de nuestros deliciosos pasteles en hojaldre, preparados con masa fresca, crujiente y rellenos llenos de sabor. Acompáñalos con una variedad de bebidas frías y calientes ideales para cualquier momento del día.</p><p>Somos el lugar perfecto para compartir un desayuno, una merienda y un antojo con calidad, sabor casero y excelente atención.</p><p>Pasteles artesanales, repostería creativa, sabores caseros, tortas personalizadas, postres gourmet.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
     was: [
  { nombre: "WhatsApp", numero: "573503987052" },
  { nombre: "WhatsApp", numero: "573007547137" },
],
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
    desc:        "<p>En Pizza Express ofrecemos deliciosas pizzas preparadas al momento, acompañadas de una gran variedad de sabores para todos los gustos. Disfruta también de nuestras lasañas caseras, ensaladas de frutas refrescantes y muchas más opciones ideales para compartir en familia o con amigos.</p><p>Nos destacamos por la calidad, el buen sabor y una atención rápida y amable que hace de cada visita una experiencia especial.</p><p>Pizza artesanal, domicilios rápidos, sabor italiano, ingredientes frescos, comida express.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
      RT RICA TENTACION RT
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "ricatentacion",
    cat:         "antojos",
    nombre:      "RT RICA TENTACION",
    slogan:      "PORQUE MERECES LO MEJOR.",
    desc:        "<p>Somos una frutería especializada en ofrecer productos frescos, deliciosos y llenos de sabor. Disfruta de waffles, ensaladas de frutas, jugos naturales, batidos, postres y una gran variedad de opciones perfectas para cualquier momento del día.</p><p>Trabajamos con ingredientes de calidad y excelente atención para brindar una experiencia refrescante, dulce y saludable a cada cliente.</p><p>Antojos dulces, postres deliciosos, sabores irresistibles, repostería artesanal, dulce tentación.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>En Sándwich &amp; Burger ofrecemos una experiencia llena de sabor con hamburguesas y sándwiches preparados al momento, utilizando ingredientes frescos y de excelente calidad. Disfruta de combinaciones irresistibles, acompañamientos deliciosos y bebidas perfectas para compartir en familia o con amigos.</p><p>Somos el lugar ideal para quienes buscan comida rápida con sabor casero, buena atención y el mejor ambiente.</p><p>Hamburguesas artesanales, sándwich gourmet, comida rápida, ingredientes frescos, sabor irresistible.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>En nuestro asadero te ofrecemos sabor, calidad y tradición en cada preparación. Disfruta de deliciosos pollos asados, jugosos y perfectamente sazonados, acompañados de papas, arepas, ensaladas y una gran variedad de comida.</p><p>Trabajamos con ingredientes frescos y atención rápida para brindar a nuestros clientes una experiencia llena de sabor, ideal para compartir en familia o con amigos.</p><p>Carnes asadas, sabor auténtico, cocina al carbón, especialidad gourmet, parrilla tradicional.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Disfruta el mejor sabor en cada plato con nuestra especialidad en arroz chino y arroz paisa, preparados al momento con ingredientes frescos, abundantes porciones y ese toque casero que encanta.</p><p>Una combinación perfecta entre tradición, sazón y variedad para compartir en familia o disfrutar cuando quieras darte un buen gusto.</p><p>Arroz chino, arroz paisa, comida rápida, sabor casero, almuerzos, domicilio, comida colombiana, comida oriental, porciones grandes, restaurante familiar.</p>",
    tipo:        "restaurante",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    ig:          "https://www.instagram.com/lacasadelosarroces_?igsh=MXd2OGRqOGIzY2V2cw==",
    fb:          "https://www.facebook.com/share/1D2jqx1Fbw/",
    tk:          "https://www.tiktok.com/@la.casa.de.los.ar76?_r=1&_t=ZS-96rADhFWtpE",
    web:         "",
    didi:        "Https://order.top/es-CO/store/la_casa_de_los_arroc/nWickS",
    rappi:       "",
    greviews:    "https://g.page/r/CU8tp9FOuICOEBM/review",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 17 6 - 15e maipore Mosquera",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/Kb8DJvreubv9PboP8?g_st=ac",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/casadearroces/casadelosarroces.webp","assets/logos/casadearroces/casadelosarroces2.webp","assets/logos/casadearroces/casadelosarroces3.jpeg","assets/logos/casadearroces/casadelosarroces4.jpeg","assets/logos/casadearroces/casadelosarroces5.jpeg","assets/logos/casadearroces/casadelosarroces6.jpeg","assets/logos/casadearroces/casadelosarroces7.jpeg","assets/logos/casadearroces/casadelosarroces8.jpeg","assets/logos/casadearroces/casadelosarroces9.jpeg","assets/logos/casadearroces/casadelosarroces10.jpeg",
    ],
    /* ─── MENÚ DE COMIDAS ─── */
    menu: [
      {
        s: "ARROZ PAISA",
        items: [
          { n:"Arroz Paisa Personal + papa francesa", p:"$18.000",},
          { n:"Arroz Paisa + papa francesa + 1/4 de pollo", p:"$29.000",},
          { n:"Arroz Paisa + Lomo de cerdo a la plancha", p:"$29.000",},
          { n:"Arroz Paisa Personal con alitas BBQ + papa francesa", p:"$29.000",},
          { n:"Arroz Paisa personal con costillas BBQ", p:"$29.000",},
          { n:"Arroz Paisa + papa francesa + mojarra", p:"$29.000",},
          { n:"Arroz Paisa caja mediana", p:"$32.000",},
          { n:"Arroz Paisa caja grande", p:"$47.000",},
          { n:"Arroz Paisa americano + carnes", p:"$60.000",},
          { n:"Arroz Paisa caja mediana + 1/4 de pollo", p:"$42.000",},
          { n:"Arroz Paisa caja mediana + 1/2 pollo", p:"$50.000",},
          { n:"Arroz Paisa grande + 1 pollo", p:"$75.000",},
          { n:"Arroz Paisa agrandado + 1 pollo", p:"$90.000",},
        ]
      },
      {
        s: "ARROZ ESPECIAL FESTÍN TROPICAL",
        items: [
          { n:"Arroz Chino Festín Tropical Personal", p:"$20.000",},
          { n:"Arroz Chino Festín Tropical Mediano", p:"$36.000",},
          { n:"Arroz Chino Festín Tropical (Caja Grande para 4 a 5 personas)", p:"$55.000",},
          { n:"Arroz Chino Festín Tropical + 1/4 de pollo", p:"$32.000",},
          { n:"Arroz Chino Festín Tropical + Mojarra", p:"$32.000",},
          { n:"Arroz Chino Festín Tropical + Alitas BBQ", p:"$32.000",},
          { n:"Arroz Chino Festín Tropical (Caja mediana + 1/2 pollo)", p:"$58.000",},
          { n:"Arroz Chino Festín Tropical (Caja grande + 1 pollo)", p:"$85.000",},
        ]
      },
      {
        s: "ARROZ CHINO A LA VALENCIANA",
        items: [
          { n:"Arroz Chino Personal + papa francesa", p:"$15.000",},
          { n:"Arroz Chino a la Valenciana + papa francesa + 1/4 de pollo asado o broaster", p:"$26.000",},
          { n:"Arroz Chino + papa francesa + mojarra", p:"$26.000",},
          { n:"Arroz Chino + papa francesa + alitas BBQ", p:"$26.000",},
          { n:"Arroz Chino + costillas BBQ", p:"$26.000",},
          { n:"Arroz Chino + papa francesa + lomo de cerdo a la plancha", p:"$26.000",},
          { n:"Arroz Chino caja mediana para 3 personas", p:"$39.000",},
          { n:"Arroz Chino mediano ", p:"$29.000",},
          { n:"Arroz Chino a la Valenciana + 1/2 pollo (Caja mediana)", p:"$45.000",},
          { n:"Arroz Chino caja grande para 4 personas", p:"$43.000",},
          { n:"Arroz Chino caja familiar para 6 personas", p:"$48.000",},
          { n:"Arroz Chino a la Valenciana Familiar + 1 pollo ", p:"$72.000",},
          { n:"Arroz Chino especial con camarones + papa francesa ", p:"$22.000",},
          { n:"Arroz Chino mediano especial con camarones ", p:"$38.000",},
          { n:"Arroz Chino especial con camarones (Caja grande para 4 personas) ", p:"$50.000",},
          { n:"Arroz Chino agrandado para 7 a 8 personas", p:"$85.000",},
          { n:"Arroz Chino caja mediana para 4 personas ", p:"$53.000",},
          { n:"Arroz Chino caja grande para 6 a 7 personas ", p:"$75.000",},
        ]
      },
      {
        s: "ARROZ ORIENTAL",
        items: [
          { n:"Arroz Oriental personal", p:"$15.000",},
          { n:"Arroz Oriental a la Valenciana + 1/4 de pollo (Asado o Broaster) ", p:"$26.000",},
          { n:"Arroz Oriental + mojarra ", p:"$26.000",},
          { n:"Arroz Oriental + cerdo a la plancha ", p:"$26.000",},
          { n:"Arroz Oriental a la Valenciana + 1/2 pollo (Asado o Broaster) ", p:"$45.000",},
          { n:"Arroz Oriental a la Valenciana + 1 pollo (Asado o Broaster)", p:"$72.000",},
          { n:"Arroz Oriental a la Valenciana agrandado + 1 pollo (Asado o Broaster) ", p:"$85.000",},
          { n:"Arroz Oriental caja mediana para 4 personas ", p:"$53.000",},
          { n:"Arroz Oriental caja grande para 6 a 7 personas ", p:"$75.000",},
        ]
      },
    ],
  },
  

// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
// ══ HOGAR ════════════════════════════════════════════════
{
    /* ══════════════════════════════════════════════════════════════
       STEEL  304
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "steel304",
    cat:         "hogar",
    destacado:   1,
    nombre:      "STEEL  304",
    slogan:      "SOLUCIONES EN VIDRIOS Y ACERO INOXIDABLES A MEDIDA DISEÑO- FABRICACION INSTALACION",
    desc:        "<p>Divisiones de baño en vidrio, barandales y fachadas, accesorios en acero inoxidable, sandblasting y mecanizado, venta de cortinas.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       MODULARES Vr
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "modularesvr",
    cat:         "hogar",
    nombre:      "MODULARES Vr",
    slogan:      "Muebles a la medida que transforman tu hogar",
    desc:        "<p>En Modulares VR SAS diseñamos, fabricamos e instalamos cocinas integrales, closets, puertas y mobiliario personalizado. Contamos con más de 14 años de experiencia, diseños personalizados, madera reforestada y de alta calidad, instalación profesional, cumplimiento y garantía.</p><p>Convierte tus ideas en espacios funcionales y modernos. ¡Solicita tu cotización!</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       CERRAJERIA MAXSECURITY
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "maxsecuri",
    cat:         "hogar",
    nombre:      "MAXSECURITY",
    slogan:      "Seguridad y confianza en cada acceso",
    desc:        "<p>Ofrecemos soluciones integrales en cerrajería y seguridad para hogares, vehículos y negocios. Contamos con apertura de puertas, duplicado de llaves, instalación de chapas, cerraduras y sistemas de seguridad, con atención rápida y confiable.</p><p>Trabajamos con calidad, responsabilidad y tecnología para brindarte tranquilidad y protección.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Cortinas y persianas romanas, enrollables, domótica, panel japonés, motorizadas, cortinas tradicionales, persianas de madera y aluminio, mantenimiento de cortinas.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Ofrecemos servicio de revisión técnica de gas, garantizando seguridad, cumplimiento y correcto funcionamiento de las instalaciones residenciales y comerciales. Realizamos inspección, diagnóstico y certificación del sistema de gas, brindando confianza y tranquilidad a nuestros clientes.</p><p>Realizamos revisión periódica de gas con personal capacitado y equipos especializados.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Nos dedicamos a la carpintería y la herrería, ofreciendo servicios de diseño, elaboración y reestructuración de muebles en madera, adaptados a las necesidades y estilos de cada cliente. Trabajamos en la creación y restauración de piezas funcionales y decorativas, cuidando cada detalle para garantizar calidad y durabilidad.</p><p>Además, complementamos nuestros procesos con trabajos en fabricación de estructuras, soportes y refuerzos que brindan mayor resistencia y estabilidad, logrando así soluciones integrales, personalizadas y de alto nivel para todo tipo de espacios.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Mayton Arte y Diseño en Madera es un taller de carpintería especializado en la fabricación de muebles a medida, cocinas integrales, closets y proyectos personalizados en madera. Nos enfocamos en crear espacios funcionales, modernos y duraderos, combinando diseño, calidad y acabados detallados para cada cliente.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       MULTIEXPRESS CERRAJERIA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "multiexpress",
    cat:         "hogar",
    nombre:      "MULTIEXPRESS CERRAJERIA ",
    slogan:      "Aperturas Cambios de guardas Instalaciones de chapas de seguridad Duplicados de llaves Automóviles",
    desc:        "<p>Nos encargamos de aperturas, cambios de guardas e instalación de chapas de seguridad sencillas, duplicados de llaves y, en general, todo lo relacionado con la cerrajería.</p><p>Aperturas, cambios de guardas, instalación de chapas de seguridad, duplicados de llaves, automóviles.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>No solo instalamos estructuras: transformamos espacios. Nos especializamos en soluciones arquitectónicas en vidrio y aluminio, destacándonos por acabados de excelencia, cuidando los detalles que otros ignoran, y por un cumplimiento garantizado, entregando a tiempo porque respetamos tu cronograma.</p><p>Innovación: diseños modernos alineados con las tendencias actuales de decoración y arquitectura.</p><p>Divisiones de baño en acero inoxidable, diseños modernos en aluminio arquitectónico, vidrio templado.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
  {
    /* ══════════════════════════════════════════════════════════════
       FRESCOLOMBIA FP
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "frescolombiafp",
    cat:         "hogar",
    nombre:      "FRESCOLOMBIA FP",
    slogan:      "Reparamos hoy, cuidamos siempre.",
    desc:        "<p>En Servicio Técnico Especializado ofrecemos soluciones rápidas y confiables en reparación, mantenimiento e instalación de neveras, congeladores, lavadoras y equipos de refrigeración. Trabajamos con atención profesional, diagnóstico preciso y repuestos de calidad para garantizar el óptimo funcionamiento de tus electrodomésticos y la tranquilidad de tu hogar o negocio.</p><p>Reparación de neveras, arreglo de lavadoras, servicio técnico, mantenimiento de refrigeración, técnicos especializados, servicio a domicilio.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/frescolombia/logo-frescolombia.webp",
    cardImage:   "assets/logos/frescolombia/inicio-frescolombia.webp",
    portada:     "assets/logos/frescolombia/portada-frescolombia.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WhatsApp", numero: "573114031167 " },
],
    tel:         "3114031167 ",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 5 12-88 MOSQUERA",
    mapUrl:      "",
    mapsLinks: [
    ],
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/frescolombia/frescolombia1.webp","assets/logos/frescolombia/frescolombia2.webp","assets/logos/frescolombia/frescolombia3.webp","assets/logos/frescolombia/frescolombia4.webp","assets/logos/frescolombia/frescolombia5.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       INTERVIDRIOS GUALTEROS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "intervidriosgualteros",
    cat:         "hogar",
    nombre:      "INTERVIDRIOS GUALTEROS",
    slogan:      "Cumplimiento y calidad.",
    desc:        "<p>Es su aliado estratégico en soluciones arquitectónicas y decorativas en vidrio y aluminio. Nos especializamos en el diseño, fabricación e instalación de ventanería, divisiones de baño, fachadas comerciales, espejos y vidrios de seguridad de alta calidad. Combinamos precisión técnica, materiales resistentes y un servicio experto para transformar y dar elegancia a sus proyectos residenciales, comerciales o empresariales.</p><p>Inter Vidrios Gualteros: vidrios y aluminios, divisiones de baño en vidrio, ventanería arquitectónica, instalación de vidrios de seguridad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/gualteros/logo-intervidrios.webp",
    cardImage:   "assets/logos/gualteros/inicio-intervidrios.webp",
    portada:     "assets/logos/gualteros/portada-intervidrios.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WhatsApp", numero: "573212746380" },
],
    tel:         "3212746380",
    ig:          "https://www.instagram.com/intervidrios_gualteros?igsh=MXg3a2c2OHU1aWdlNQ==",
    fb:          "https://www.facebook.com/share/1BqCfCgbSS/",
    tk:          "",
    web:         "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Calle 9d  16b-09 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/7eKAxGDBvWWzVpmE6?g_st=awb",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/gualteros/intervidrios1.webp","assets/logos/gualteros/intervidrios2.webp","assets/logos/gualteros/intervidrios3.webp","assets/logos/gualteros/intervidrios4.webp","assets/logos/gualteros/intervidrios5.webp","assets/logos/gualteros/intervidrios6.webp","assets/logos/gualteros/intervidrios7.webp","assets/logos/gualteros/intervidrios8.webp","assets/logos/gualteros/intervidrios9.webp","assets/logos/gualteros/intervidrios10.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       SISTEMAS Y SERVICIOS GAS NATURAL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "serviciosgasnatural",
    cat:         "hogar",
    nombre:      "SISTEMAS Y SERVICIOS GAS NATURAL",
    slogan:      "Eficiencia y seguridad en cada instalación",
    desc:        "<p>Sistemas y Servicios Gas Natural es una empresa experta en la instalación, mantenimiento y certificación de redes de gas residencial, comercial e industrial. Garantizamos la máxima seguridad, cumplimiento normativo y eficiencia en gasodomésticos con un equipo técnico calificado y confiable.</p><p>Instalación de redes de gas, mantenimiento y reparación de calentadores de agua y estufas, certificación de gas natural, técnico de gas certificado.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/gasnatural/logo-gas.webp",
    cardImage:   "assets/logos/gasnatural/inicio-gas.webp",
    portada:     "assets/logos/gasnatural/portada-gas.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    was: [
  { nombre: "WhatsApp", numero: "573153528225" },
],
    tel:         "3153528225",
    ig:          "",
    fb:          "",
    tk:          "",
    web:         "",
    greviews:    "https://g.page/r/CR9q4smUhTuJEBM/review",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Kra 3 No 19-37 Local 120 Centro Comercial Hacienda Villa Nueva  MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/jn4ePG6nxFfVHMpy5",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/gasnatural/GAS1.webp","assets/logos/gasnatural/GAS2.webp","assets/logos/gasnatural/GAS3.webp","assets/logos/gasnatural/GAS4.webp","assets/logos/gasnatural/GAS5.webp",
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       HERNÁNDEZ REDES Y MONTAJES ELÉCTRICOS
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "hernandeselectricos",
    cat:         "hogar",
    nombre:      "REDES Y MONTAJES ELÉCTRICOS HERNÁNDEZ SAS NIT:901359503",
    slogan:      "Conectamos tu energía con calidad y seguridad.",
    desc:        "Somos una empresa especializada en redes y montajes eléctricos, comprometida con brindar soluciones seguras, eficientes y de alta calidad para proyectos residenciales, comerciales e industriales.<p> Contamos con personal capacitado y utilizamos materiales certificados para garantizar instalaciones confiables, cumpliendo con las normas técnicas vigentes.<p> Nuestro objetivo es conectar tus proyectos con energía, innovación y confianza.</p><p>Redes eléctricas/Montajes eléctricos/Instalaciones eléctricas/Mantenimiento eléctrico/Tableros eléctricos/Cableado estructurado/Iluminación LED/Adecuaciones eléctricas/Automatización eléctrica/Proyectos eléctricos.",
    tipo:        "catalogo",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/hernandeselectricos/logo-hernandez.webp",
    cardImage:   "assets/logos/hernandeselectricos/inicio-hernandez.webp",
    portada:     "assets/logos/hernandeselectricos/portada-hernandez.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573114495203",
    tel:         "3114495203",
    ig:          "https://www.instagram.com/redesymontajes?igsh=eTF1ZDNzZnc3anR6",
    fb:          "https://www.facebook.com/share/1NuBKfDMCz/",
    tk:          "",
    web:         "https://redeselectricashernandez.com.co/?fbclid=IwdGRjcATNDGtjbGNrBM0MWGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHpnK61PL_Fm7CkVwcPR_WnDR3EUmeCpk7P38cRvYkAbND8WX5vgRKrKJKKGC_aem_QeXyRW7mmmiIpoJcA0N4sg",
    greviews:    "https://g.page/r/Ca8-l_g5AkbQEBM/review",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "",
    mapUrl:      "",
    mapsLink:    "https://share.google/T08tcb7T9DGc1m129",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/hernandeselectricos/1hernandez.webp","assets/logos/hernandeselectricos/2hernandez.webp","assets/logos/hernandeselectricos/3hernandez.webp","assets/logos/hernandeselectricos/4hernandez.webp","assets/logos/hernandeselectricos/5hernandez.webp","assets/logos/hernandeselectricos/6hernandez.webp","assets/logos/hernandeselectricos/7hernandez.webp","assets/logos/hernandeselectricos/8hernandez.webp","assets/logos/hernandeselectricos/9hernandez.webp","assets/logos/hernandeselectricos/10hernandez.webp",
      ],
       /* ─── CATÁLOGO DE SERVICIOS ─── */
    catalogo: [
      { n:"Mantenimiento correctivo y preventivo", p:"", img:"assets/logos/hernandeselectricos/1electricidad.webp", d:"Mantenimiento correctivo y preventivo de redes de distribución eléctrica" },
      { n:"Diseño y construcción de redes eléctricas", p:"", img:"assets/logos/hernandeselectricos/2electricidad.webp", d:"Diseño y construcción de tus redes eléctricas para el área residencial, comercial e industrial" },
      { n:"CCTV", p:"", img:"assets/logos/hernandeselectricos/3electricidad.webp", d:"Sistema de circuitos cerrados de televisión, incluye mantenimiento e instalación de cámaras" },
      { n:"Alumbrado público", p:"", img:"assets/logos/hernandeselectricos/4electricidad.webp", d:"Alumbrado público para todas las áreas requeridas" },
      { n:"Sistema fotovoltaico", p:"", img:"assets/logos/hernandeselectricos/5electricidad.webp", d:"Sistema de energía fotovoltaica con conexiones a la red, híbrido y aislado" },
      { n:"Medidores y aumento de carga", p:"", img:"assets/logos/hernandeselectricos/6electricidad.webp", d:"Indemnización de cuentas, aumento de carga, traslado de medidores" },
      { n:"Subestaciones de transformación", p:"", img:"assets/logos/hernandeselectricos/7electricidad.webp", d:"Construcción y mantenimiento de subestaciones de transformación para la distribución general de circuitos" },
      { n:"Trámites ante operadores de red", p:"", img:"assets/logos/hernandeselectricos/8electricidad.webp", d:"Diseño, radicación y acompañamiento ante los diferentes operadores de la red" },
      { n:"Venta de materiales certificados", p:"", img:"assets/logos/hernandeselectricos/9electricidad.webp", d:"Venta de materiales certificados para redes de BT y MT e iluminación" },
      { n:"Voz y datos", p:"", img:"assets/logos/hernandeselectricos/10electricidad.webp", d:"Diseño e instalación de voz y datos para pequeñas, medianas y grandes empresas" },
      { n:"Visita técnica en terreno", p:"", img:"assets/logos/hernandeselectricos/11electricidad.webp", d:"Visita técnica en terreno con personal calificado y experto según su necesidad, incluye informe preliminar" },
    ],
  },
    
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
// ══ SHOPPING ════════════════════════════════════════════════
{
    /* ══════════════════════════════════════════════════════════════
        PATIKOO PIÑATERIA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "patikoo",
    cat:         "shopping",
    destacado:   1,
    nombre:      "PATIKOO PIÑATERIA",
    slogan:      "Celebraciones creativas y llenas de amor.",
    desc:        "<p>Piñatería Patikoo nace para crear celebraciones creativas y llenas de amor, donde cada detalle cuenta. Es un emprendimiento dedicado a la ambientación y decoración de eventos infantiles y familiares, ofreciendo propuestas personalizadas para cumpleaños, baby showers, bautizos y fechas especiales.</p><p>Además, en Piñatería Patikoo los clientes pueden encontrar todo lo necesario para decorar sus fiestas en un solo lugar, como guirnaldas, bombas, serpentinas, piñatas, globos metalizados, velas y diversos accesorios para celebraciones.</p><p>Su trabajo se distingue por la creatividad, el cuidado en los detalles y el compromiso de convertir cada evento en un recuerdo especial.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/patikoo/logo-patikoo-pañalera.webp",
    cardImage:   "assets/logos/patikoo/inicio-patikoo-pañalera.webp",
    portada:     "assets/logos/patikoo/portada-patikoo-pañalera.webp",
 
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
    greviews:    "",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Transversal 15a # 8-35 MOSQUERA",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/sK7xGFxq8jFLHJ2i6?g_st=ac",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/patikoo/patiko1.webp","assets/logos/patikoo/patiko2.webp","assets/logos/patikoo/patiko3.webp","assets/logos/patikoo/patiko4.webp","assets/logos/patikoo/patiko5.webp",
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
    desc:        "<p>Nuestro compromiso es hacer que tus equipos vuelvan a funcionar como nuevos, para que puedas seguir disfrutando de la vida sin preocupaciones. Así que no dudes en ponerte en contacto con nosotros y permítenos ser tu solución de confianza en reparaciones.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>En Floralia Flower Market transformamos emociones en detalles inolvidables. Nos especializamos en la creación de arreglos florales, bouquets personalizados, anchetas, peluches y desayunos sorpresa diseñados para celebrar los momentos más importantes de la vida.</p><p>Cada creación está elaborada con dedicación, elegancia y creatividad, convirtiéndose en el regalo perfecto para expresar amor, gratitud, amistad y admiración. Nuestro compromiso es ayudarte a sorprender a esa persona especial con detalles únicos que hablan por ti.</p><p>Arreglos de flores, peluches, anchetas, desayunos sorpresa, creatividad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Una floristería y tienda de detalles dedicada a crear momentos inolvidables a través de arreglos florales elegantes, personalizados y llenos de amor. Ofrecemos bouquets, rosas eternas, cajas sorpresa, desayunos especiales, peluches, globos, anchetas y detalles para toda ocasión como cumpleaños, aniversarios, grados y celebraciones especiales.</p><p>Nos destacamos por la calidad de nuestros productos, la creatividad en cada diseño y una atención cálida y confiable que convierte cada entrega en una experiencia única.</p><p>Arreglos florales, flores naturales, regalos especiales, detalles personalizados, decoración floral.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    mapsLink:    "https://maps.app.goo.gl/YLLV5yeu7rvjRudy7",
 
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
    desc:        "<p>Contamos con una amplia variedad de sábanas, edredones, cubrelechos, fundas, cobijas y accesorios para cama como cojines, peluches, alfombras, protectores para colchones, cortinas y toallas, elaborados con materiales suaves, duraderos y diseños modernos que se adaptan a todos los gustos.</p><p>Nuestro compromiso es brindarte productos que no solo embellecen tu hogar, sino que también mejoran tu experiencia de descanso cada día.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Bienvenido a Old School, un establecimiento dedicado a los amantes de la cultura rock y la música metal. Nos especializamos en ofrecer una amplia gama de productos y servicios que destacan por su calidad y autenticidad.</p><p>Ropa y accesorios: encuentra las últimas tendencias en moda rockera, desde camisetas y chaquetas hasta accesorios únicos que te ayudarán a expresar tu estilo personal.</p><p>Música: disponemos de una variada selección de CD de música nacional e internacional, abarcando distintos géneros de metal.</p><p>Insumos para tatuajes: ofrecemos una completa gama de insumos para tatuajes, garantizando que encuentres todo lo que necesitas para tu arte corporal.</p><p>Servicios de tatuajes, perforaciones y modificaciones: contamos con profesionales altamente capacitados en la industria del tatuaje y las perforaciones corporales. Todos nuestros servicios cumplen con las normativas de sanidad y bioseguridad, asegurando un ambiente seguro y confiable para nuestros clientes.</p><p>Industria textil: ofrecemos servicios de estampados personalizados, utilizando materiales de excelente calidad. Además, fabricamos prendas a medida, ajustándonos a tus deseos y necesidades.</p><p>Compromiso con la calidad y la seguridad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    id:          "pinateriasaavedra",
    cat:         "shopping",
    nombre:      "PIÑATERIA SAAVEDRA",
    slogan:      "Lo hacemos posible",
    desc:        "<p>En la Piñatería Saavedra puedes encontrar gran variedad de detalles como anchetas, peluches, mugs, globos de látex, globos metalizados, cortinas, decoración y accesorios según la temática que estés buscando, artículos para la hora loca, bombas infladas con helio certificado (100% seguro), decoración para tortas, velas, lluvia de sobres, artículos cosméticos, accesorios para el cabello, piñatas personalizadas y relleno, deliciosos snacks dulces y salados para calmar el antojo, y platos, vasos y cubiertos en icopor, plástico o cartón.</p><p>Dependiendo de la temporada, encuentra útiles escolares con los personajes de moda; para San Valentín y Amor y Amistad, los detalles más tiernos; y lo mejor para recordarle a mamá y papá cuánto los amamos.</p><p>Vive el mejor Halloween con artículos de decoración y accesorios que complementan tu disfraz. En las fiestas decembrinas lleva la mejor decoración y velas navideñas: empacamos tus regalos, armamos tus anchetas, y contamos con magníficos juguetes para que la diversión no termine.</p><p>Acá siempre encontrarás todo para festejar como más te guste: elaboramos la decoración para tu fiesta o puedes llevar todo y te asesoramos para hacerlo tú mismo.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>El agua es 99.9% pura, con 100.000 ciclos de ensayo estricto bajo la presión máxima de agua de 100 PSI. Rango de temperatura: 40-100 ºF (4.4-37.7 ºC). Capacidad de 2.000 galones. Certificado por NSF. No requiere electricidad y no cambia el sabor del agua.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>El lugar ideal para encontrar lo último en celulares, accesorios y movilidad eléctrica. Trabajamos con marcas líderes como Apple, Samsung y Xiaomi, ofreciendo calidad, respaldo y excelentes precios.</p><p>Nos destacamos por nuestra atención personalizada y compromiso con la satisfacción del cliente. Visítanos y descubre una nueva forma de vivir la tecnología.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/baruch/logo-baruch.webp",
    cardImage:   "assets/logos/baruch/inicio-baruch.webp",
    portada:     "assets/logos/baruch/portada-baruch.webp",
 
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
      "assets/logos/baruch/baruch1.webp","assets/logos/baruch/baruch2.webp","assets/logos/baruch/baruch3.webp","assets/logos/baruch/baruch4.webp","assets/logos/baruch/baruch5.webp",
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
    desc:        "<p>Más que carniceros, asesores gastronómicos. El verdadero valor diferencial de Carnicería El Novillo reside en su equipo humano: detrás del mostrador no solo hay expertos en el manejo del cuchillo, sino auténticos asesores gastronómicos.</p><p>El cliente de hoy no solo busca un corte; busca el consejo experto sobre el tiempo de maduración, el método de cocción ideal (ya sea a la plancha, al horno o a las brasas) y el maridaje perfecto. En El Novillo, cada interacción es una oportunidad para educar el paladar y honrar el oficio del carnicero tradicional.</p><p>Calidad premium, pollo y cerdo, cortes especiales, carne fresca.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    
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
    desc:        "<p>En Amaretto encuentras deliciosos desayunos y comidas tradicionales preparadas con sabor casero y productos frescos. Disfruta de caldos, tamales, calentado, huevos al gusto, huevos rancheros, agua de panela con queso, porciones de fruta, yogur, migado y exquisitas ensaladas de frutas.</p><p>Un lugar ideal para compartir y disfrutar de variedad, calidad y buena atención.</p><p>Caldo, tamales, chocolate y pan, moñona y jugo, huevos rancheros, chocolate y pan, agua de panela con queso y pan, porción de fruta, cereal con leche o yogur, migado, ensaladas de frutas.</p>",
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
    desc:        "<p>Construimos tu futuro. Todo en herramientas, electricidad y electrónica en un solo lugar: aquí encontrarás lo mejor en calidad y precios. También te brindamos el servicio técnico de instalación y mantenimiento, y encontrarás la disponibilidad de productos para el hogar y proyectos profesionales.</p><p>Tu aliado confiable en cada proyecto. Herramientas resistentes para trabajos exigentes. Calidad que se nota en cada tornillo. ¡Dales potencia a tus proyectos!</p><p>Iluminación, cables y más. ¿Necesitas ayuda con tu proyecto? ¡Nosotros te asesoramos! Trae tu muestra y te ayudamos a encontrarla.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       FRUVER'S Y CARNICERIA EL EDEN
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "eleden",
    cat:         "consumo",
    nombre:      "FRUVER'S Y CARNICERIA EL EDEN",
    slogan:      "FRUTAS Y VERDURAS TAMBIEN MANEJAN SALSAMENTARIA Y PRODUCTOS DE ASEO ",
    desc:        "<p>Verduras frescas, fruta para jugos naturales, mercado saludable, verduras selectas, productos del campo, carnes premium, cortes gourmet, maduración especial, calidad selecta, parrilla y asados.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    
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
    desc:        "<p>Nos caracterizamos por ofrecer variedad, calidad y precios competitivos, brindando soluciones prácticas tanto para clientes individuales como empresariales.</p><p>Adicionalmente, ofrecemos una amplia gama de servicios complementarios, entre los que se destacan la venta de cuentas de entretenimiento, servicios de corresponsalía bancaria, redacción y expedición de documentos, así como servicios de mensajería y envíos a nivel nacional e internacional a través de Interrápidísimo, garantizando rapidez, seguridad y confiabilidad.</p><p>Nuestro compromiso es proporcionar a nuestros clientes un servicio ágil, confiable y cercano, convirtiéndonos en un aliado estratégico para sus necesidades comerciales, personales y administrativas.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>JD Perfilería es calidad y experiencia en perfilería metálica para proyectos estructurales, arquitectónicos e industriales. Ofrecemos variedad de perfiles y fabricamos tejas arquitectónicas, modernas y resistentes, respaldados por maquinaria industrial y un equipo experto que garantiza confianza en cada proyecto.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Somos una lavandería y tintorería profesional especializada en el cuidado y limpieza de prendas con altos estándares de calidad. Ofrecemos lavado, secado, planchado, desmanchado y tratamiento especializado para ropa de vestir, prendas delicadas, cobijas, edredones y más.</p><p>Nos destacamos por brindar excelente atención, puntualidad y resultados impecables para que tus prendas luzcan siempre como nuevas.</p><p>Lavandería y tintorería: lavado de ropa de diario, trajes, vestidos, cubrelechos, sábanas, cobijas, tenis, camas de perro, tapetes, guacales.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Somos una lavandería y sastrería especializada en el cuidado, limpieza y arreglo de prendas. Ofrecemos lavado profesional, planchado, ajustes, confecciones y reparación de ropa para dama, caballero y prendas especiales.</p><p>Trabajamos con calidad, puntualidad y excelente atención para que cada prenda luzca impecable y como nueva.</p><p>Arreglo de costuras, lavado de cortinas, lavado de tapetes, lavado de zapatillas, tinturado de cuero, tinturado de algodón, lavado de bolsos, lavado de forros para colchón, lavado de cobijas y edredones, lavado de muñecos.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       IMAGEN DIGITAL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "imagendigital",
    cat:         "servicios",
    nombre:      "PHOTO IMAGEN DIGITAL",
    slogan:      "Detenemos el tiempo para que tus mejores momentos duren para siempre",
    desc:        "<p>En Imagen Digital transformamos momentos e ideas en recuerdos tangibles y recursos visuales de alto impacto. Somos un equipo de profesionales de la fotografía comprometidos con la excelencia técnica y la sensibilidad artística.</p><p>Ya sea retratando la calidez de un evento familiar, capturando la fuerza de un retrato personal o destacando las virtudes de un producto, nos aseguramos de que cada detalle brille con luz propia a través de la lente.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       DIMASHK EXPERIENCIA ARABE
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "dimashk",
    cat:         "gourmet",
    nombre:      "DIMASHK EXPERIENCIA ARABE",
    slogan:      "Somos un restaurante de comida árabe, la cual recibimos por tradición de nuestro abuelo paterno quien migró desde Damasco, Siria a Colombia. ",
    desc:        "<p>Comida árabe, shawarma, falafel, cocina mediterránea, kebab artesanal.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Ofrecemos sabor, tradición y calidad en cada plato. Ideal para compartir en familia y con amigos, con excelente atención y sabores auténticos que hacen de cada visita un momento especial.</p><p>Comida del Pacífico, pescados y mariscos, comida típica colombiana, encocados y ceviches, sabor a mar.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/asprilla/logo-asprilla-rivas.webp",
    cardImage:   "assets/logos/asprilla/inicio-asprilla-rivas.webp",
    portada:     "assets/logos/asprilla/portada-asprilla-rivas.webp",
 
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
      "assets/logos/asprilla/pacifico1.webp","assets/logos/asprilla/pacifico2.webp","assets/logos/asprilla/pacifico3.webp","assets/logos/asprilla/pacifico4.webp","assets/logos/asprilla/pacifico5.webp",
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
    desc:        "<p>En Bendito Chicharrón encontrarás el sabor de la comida tradicional con un ambiente ideal para compartir en familia, con amigos o en eventos especiales. Ofrecemos deliciosos desayunos, almuerzos caseros, almuerzos ejecutivos y una variada carta de platos preparados con calidad y excelente sabor.</p><p>Además, contamos con atención para eventos empresariales y familiares, acompañados de cócteles, tragos, cervezas y mucho más. Un lugar perfecto para disfrutar de buena comida, buen ambiente y una experiencia inolvidable.</p><p>Gastrobar gourmet, cócteles de autor, cocina fusión, ambiente nocturno, comida y bebidas gourmet.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>El restaurante Pizza &amp; Pasta Pomodoro funciona desde abril de 2020 en el municipio de Mosquera, Cundinamarca. Nace con el objetivo de ofrecer un servicio gastronómico novedoso de tipo italiano, en específico pizzas y pastas, así como un menú variado, único y de alta calidad para los clientes. Nuestra oferta gastronómica está dirigida a todo cliente que desee probar una receta 100% italiana de pizza con masa multigrano madurada durante 72 horas.</p><p>Así como una amplia y exclusiva oferta en pastas, lasañas y bebidas. Siempre hemos conservado lineamientos y estandarización de alta calidad en la materia prima de nuestros productos, siendo así reconocidos en la zona como la mejor pizzería.</p><p>“Pomodoro” traduce del italiano al español algo tan sencillo como “tomate”. Sin lugar a duda, es un ingrediente esencial en toda la gastronomía; su preparación y combinación se fundamenta en el placer, la tradición y el conocimiento de toda cocina. Esta es la razón por la cual decidimos que este proyecto tuviera este nombre, para resaltar y ser reconocidos por tener la mejor receta italiana de pizza con masa madurada y cocida en horno de piedra 100% italiano.</p><p>Restaurante italiano, pastas, lasaña, pizza.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/pomodoro/logo- pomodoro.webp",
    cardImage:   "assets/logos/pomodoro/inicio-pomodoro.webp",
    portada:     "assets/logos/pomodoro/portada- pomodoro.webp",
 
    /* ─── TAMAÑOS RESPONSIVOS (clamp: min, preferido, max) ─── */
    cardHeight:      "clamp(350px, 180vw, 250px)",
    logoHeight:      "clamp(90px, 8vw, 60px)",
    portadaHeight:   "clamp(180px, 25vh, 200px)",
    galeriaHeight:   "clamp(150px, 20vw, 240px)",
 
    /* ─── CONTACTO Y REDES SOCIALES ─── */
    wa:          "573125772621",
    tel:         "3125772621",
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
      "assets/logos/pomodoro/pododoro1.webp","assets/logos/pomodoro/pomodoro2.webp","assets/logos/pomodoro/pomodoro3.jpg","assets/logos/pomodoro/pomodoro4.jpg", "assets/logos/pomodoro/pomodoro5.jpg",
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
    desc:        "<p>Un restaurante especializado en comida china y asiática, donde cada plato está preparado con sabor auténtico, ingredientes frescos y recetas tradicionales que conquistan el paladar. Disfruta de una gran variedad de arroz chino, pasta oriental, ramen, verduras salteadas, rollos chinos, carnes, pollo y mucho más.</p><p>Un lugar ideal para compartir en familia o con amigos, ofreciendo calidad, buen servicio y el verdadero sabor de la cocina oriental en cada bocado.</p><p>Comida china, arroz oriental, chop suey, pollo agridulce, cocina asiática.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>En AR Motos entendemos que tu motocicleta no es solo un medio de transporte, es tu estilo de vida. Somos un taller especializado en mantenimiento, diagnóstico y optimización de motos, donde combinamos tecnología de vanguardia con la pasión por las dos ruedas.</p><p>Nuestro compromiso es garantizar que cada máquina que sale de nuestras manos alcance su máximo rendimiento, seguridad y durabilidad. Llevamos el cuidado de tu moto al siguiente nivel, registrando solo la excelencia en cada kilómetro que recorres.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Somos una empresa del área automotriz enfocada principalmente en la renovación de aceite para toda clase de vehículos, manejando gran variedad de lubricantes. Además, contamos con una amplia gama de productos para mejorar su funcionamiento, como aditivos, refrigerantes y siliconas, entre otros.</p><p>Más de diez años de trayectoria en el sector nos avalan, y nuestro personal altamente capacitado se caracteriza por brindar atención oportuna y de calidad.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
      "assets/logos/maxioil/maxioli1.jpeg","assets/logos/maxioil/maxioli2.jpeg","assets/logos/maxioil/maxioli3.jpeg","assets/logos/maxioil/maxioli4.jpeg",
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
    desc:        "<p>En Barrelec transformamos la movilidad urbana combinando tecnología de punta, diseño vanguardista y sostenibilidad. Somos una marca líder en la venta de bicicletas eléctricas pensadas para el ritmo de la vida moderna: ágiles, potentes y respetuosas con el medio ambiente.</p><p>Nuestras e-bikes están diseñadas para liberarte del tráfico, reducir tu huella de carbono y hacer de cada trayecto diario una experiencia placentera y sin esfuerzo. Descubre una nueva forma de moverte con la autonomía, seguridad y el estilo que solo Barrelec te puede ofrecer.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/barrelec/logo-barrelec.webp",
    cardImage:   "assets/logos/barrelec/inicio-barrelet.webp",
    portada:     "assets/logos/barrelec/portada-barrelec.webp",
 
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
      "assets/logos/barrelec/barrelec1.webp","assets/logos/barrelec/barrelec2.webp","assets/logos/barrelec/barrelec3.webp","assets/logos/barrelec/barrelec4.webp","assets/logos/barrelec/barrelec5.webp",
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
    desc:        "<p>Tienda especializada en bicicletas y bicicletas eléctricas, donde encontrarás variedad de modelos, bicimotos, accesorios, repuestos y artículos para todo tipo de ciclistas. Ofrecemos productos de calidad, mantenimiento, asesoría y soluciones completas para mejorar el rendimiento, la comodidad y la movilidad de nuestros clientes.</p><p>Bicicletería, mantenimiento general, mantenimiento especializado, reparaciones, lavadas, alistamiento.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/bikeshop/logo-bike.webp",
    cardImage:   "assets/logos/bikeshop/inicio-bike.webp",
    portada:     "assets/logos/bikeshop/portada-bike.webp",
 
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
      { nombre: "SANTANA", url: "https://maps.app.goo.gl/i1wpDh4kZZndR3Ub8" },
    ],
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/bikeshop/bike1.webp","assets/logos/bikeshop/bike2.webp","assets/logos/bikeshop/bike3.webp","assets/logos/bikeshop/bike4.webp","assets/logos/bikeshop/bike5.webp",
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
    desc:        "<p>En Cristal Cars nos especializamos en encender la seguridad y el confort de tu vehículo. Somos un centro técnico profesional dedicado al diagnóstico y reparación del sistema eléctrico automotriz, la optimización e instalación de sistemas de luces de alta gama (LED/HD) y el mantenimiento integral de elevavidrios y ventanas.</p><p>Combinamos precisión técnica con componentes de alta calidad para que tu carro recupere su total funcionalidad y una visibilidad impecable en carretera. En Cristal Cars, hacemos que tu auto funcione a la perfección y brille como el primer día.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Somos el taller especializado donde la pasión por las dos ruedas se traduce en un servicio técnico de máxima calidad. Nos dedicamos al mantenimiento preventivo y correctivo, diagnóstico computarizado, sincronización, frenos y reparación de motores para todo tipo de motocicletas.</p><p>Nuestro equipo de mecánicos expertos trabaja con repuestos garantizados y herramientas de precisión para asegurar que tu moto recupere su potencia, suavidad y, sobre todo, tu seguridad en la ruta. En nuestro taller, cuidamos tu moto como si fuera la nuestra.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Cheramy Spa Mascotas es un centro de estética y bienestar animal diseñado para ofrecer una experiencia de relajación y cuidado integral a los consentidos del hogar. Su enfoque no es solo la limpieza, sino el equilibrio emocional y físico de cada mascota a través de servicios personalizados.</p><p>Trato amoroso y responsable: personal capacitado, productos seleccionados con cuidado, ambiente limpio y seguro, experiencia pensada para el bienestar de tu mascota.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/logo-cheramy.jpeg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/cheramy/logocheramy.webp",
    cardImage:   "assets/logos/cheramy/iniciocheramy.webp",
    portada:     "assets/logos/cheramy/portadacheramy.webp",
 
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
    galeria:     ["assets/logos/cheramy/cheramy1.webp","assets/logos/cheramy/cheramy2.webp",
      ],
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
    desc:        "<p>Medicina Veterinaria Javi Vet es un centro especializado en el cuidado integral de mascotas, comprometido con la excelencia médica y el bienestar animal. Contamos con un equipo de profesionales dedicados a ofrecer servicios de consulta general, diagnóstico y tratamientos preventivos, utilizando tecnología adecuada y un enfoque ético.</p><p>En Javi Vet entendemos que tu mascota es parte de la familia, por lo que priorizamos una atención personalizada y transparente para garantizar su salud en cada etapa de su vida.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/javivet.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/javi-vet/logo-javivet.jpg",
    cardImage:   "assets/logos/javi-vet/inicio-javivet.jpg",
    portada:     "assets/logos/javi-vet/portada-javipet.webp",
 
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
    dir:         "calle 3A 17sur-96 local 157 CC. MALL MERIDIANO NOVATERRA Mosquera, Colombia",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/ebiDBeT8JX8NZFr78?g_st=iw",
 
    /* --- GALERÍA DE FOTOS --- */
    galeria:     ["assets/logos/javi-vet/javivet-foto1.jpg", "assets/logos/javi-vet/javivet-foto2.jpg", "assets/logos/javi-vet/javivet-foto3.jpg", "assets/logos/javi-vet/javivet-foto4.jpg", "assets/logos/javi-vet/javivet-foto5.jpg",],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       DE MASKOT-S
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "de-maskot-s",
    cat:         "mascotas",
    destacado:   1,
    nombre:      "De Maskot-s",
    slogan:      "Todo lo relacionado para tu mascota, pregunta por la comida favorita de tu perro o gato. ",
    desc:        "<p>Tienda especializada en concentrados, accesorios y productos para el cuidado integral de mascotas, ofreciendo alimentos de las mejores marcas, dieta BARF, juguetes, camas, guacales y artículos esenciales para perros y gatos.</p><p>En “De Maskot's” trabajamos con variedad, calidad y atención personalizada para brindar bienestar, nutrición y comodidad a cada mascota.</p><p>Nuestro compromiso es ayudar a las familias a encontrar todo lo necesario para consentir y cuidar a sus compañeros de vida.</p><p>Gimnasios, suplementos deportivos, alimento para mascotas, comida para gatos, accesorios, entretenimiento.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/de maskot·s.jpg",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:   "assets/logos/demaskot-s/logodemascots.jpg",
    cardImage:   "assets/logos/demaskot-s/inicio-demaskots.jpg",
    portada:     "assets/logos/demaskot-s/portada-maskot.jpg",
 
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
    greviews:    "https://g.page/r/CUfQnO5kUCJZEBM/review",
 
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
    desc:        "<p>Grandes Amigos es un espacio dedicado al bienestar y cuidado de las mascotas, donde encontrarás alimentos de excelente calidad, accesorios, juguetes, productos de higiene y salud para perros y gatos. Ofrecemos una amplia variedad de artículos como arenas sanitarias, productos para la orina, desparasitantes y todo lo necesario para brindarles comodidad, diversión y una vida saludable a tus mejores amigos.</p><p>Nos destacamos por nuestra atención amable, asesoría confiable y compromiso con el cuidado de cada mascota.</p><p>Alimentación para mascotas, salud y bienestar animal, accesorios para perros y gatos, higiene y cuidado veterinario, desparasitantes y prevención.</p>",
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
    greviews:    "",
 
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
    desc:        "<p>Surgical Care: excelencia en alta complejidad veterinaria. Somos un centro especializado en la resolución de patologías quirúrgicas complejas en animales de compañía.</p><p>Nuestro enfoque se centra en tres pilares fundamentales: cirugía de tejidos blandos, ortopedia avanzada y traumatología.</p>",
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
    desc:        "<p>Distrimascotas de la Sabana está especializada en ofrecer accesorios, gimnasios para gatos, comida al granel y por bultos, medicamentos y desparasitantes para perros y gatos. Brindamos variedad, calidad y atención personalizada para consentir a tus mascotas con todo lo que necesitan, desde concentrados y juguetes hasta artículos de higiene y salud animal.</p><p>Contamos también con spa para tu canino o felino. Nuestro compromiso es ofrecer productos confiables y un servicio cercano que garantice el cuidado, la felicidad y el bienestar de cada mascota.</p><p>Alimento para perros y gatos, juguetes para mascotas, nutrición canina, accesorios para mascotas, productos veterinarios, petshop.</p>",
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
    desc:        "<p>En nuestra veterinaria trabajamos cada día con amor, respeto y compromiso por el bienestar de los animales y sus familias. Creemos que cada mascota merece ser atendida con paciencia, empatía y dedicación, cuidando no solo su salud física, sino también su tranquilidad, su energía y su calidad de vida.</p><p>Contamos con servicios de consulta veterinaria, toma de exámenes de sangre, ecografía, radiografía, vacunación y desparasitación, además de procedimientos quirúrgicos menores como esterilizaciones, profilaxis y otros procedimientos básicos, siempre realizados con responsabilidad y cuidado. También ofrecemos servicio de spa y baño, porque sabemos que el bienestar también está en sentirse limpios, cómodos y felices.</p><p>Nuestro propósito es brindar una atención integral, humana y consciente, acompañando a cada paciente y a su familia en cada etapa, generando confianza, tranquilidad y mucho amor. Estamos siempre para servirles y para ayudar a que sus compañeros de vida vibren bonito, estén sanos y reciban el cuidado que merecen.</p><p>Bienestar, desparasitantes, vacunación, salud animal, atención veterinaria.</p>",
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
  // ══ BIENESTAR ════════════════════════════════════════════════
  {
    /* ══════════════════════════════════════════════════════════════
       TIENDA NATURISTA ORIGEN VITAL
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "origenvital",
    cat:         "bienestar",
    destacado:   1,
    nombre:      "TIENDA NATURISTA ORIGEN VITAL",
    slogan:      "Consiente tu salud de manera natural. ¡ tenemos lo que buscas!",
    desc:        "<p>Origen Vital es una tienda naturista dedicada al bienestar, la salud y el cuidado integral de las personas.</p><p>Ofrecemos productos naturales, suplementos, vitaminas, cuidado personal y alternativas saludables para mejorar la calidad de vida de nuestros clientes.</p><p>Brindamos atención personalizada y asesoría para ayudarte a encontrar opciones naturales que aporten equilibrio, energía y bienestar para tu día a día. Un espacio pensado para quienes buscan vivir de manera más saludable y natural.</p><p>Bienestar integral, alimentos saludables, medicina natural, suplemento vitamínico, productos naturales.</p><p>Tienda naturista, bienestar, natural, orgánico, productos saludables.</p>",
    tipo:        "catalogo",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/origenvital/logo-origen-vital.webp",
    cardImage:   "assets/logos/origenvital/inicio-origen-vital.webp",
    portada:     "assets/logos/origenvital/portada-origen-vital.webp",
 
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
    dir:         "3 A 17 sur 96 Moll meridiano novatora local 155 MOSQUERA<P>Calle 7 8 - 16 local 62 Cc Los Pinos MADRID",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/nYTqYr8v5Rd5EX9R7",
 
    /* ─── GALERÍA DE FOTOS ─── */
    galeria:     [
      "assets/logos/origenvital/vital1.webp","assets/logos/origenvital/vital2.webp","assets/logos/origenvital/vital3.webp","assets/logos/origenvital/vital4.webp","assets/logos/origenvital/vital5.webp","assets/logos/origenvital/vital6.webp","assets/logos/origenvital/vital7.webp","assets/logos/origenvital/vital8.webp","assets/logos/origenvital/vital9.webp",
    ],
    /* ─── CATÁLOGO DE PRODUCTOS ─── */
    catalogo: [
      {
        s: "SUPLEMENTOS DIETARIOS",
  items: [
  { n:"TNT Ultra Creatina 100% Monohidrato", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/1origen.webp", d:"Creatina monohidrato Creapure, 150g, 50 porciones, sin sabor" },
  { n:"Vitanas Creatine Time", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/2origen.webp", d:"Creatina monohidrato micronizada, 150g, 50 porciones, sin sabor" },
  { n:"Bi Pro Classic Whey Protein Isolate", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/3origen.webp", d:"Nutramerican, aislado de proteína de suero, sabor vainilla, 910g (2Lb), 40g proteína por medidor, 0g azúcares añadidos" },
  { n:"Healthy Sports Vegan Protein", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/4origen.webp", d:"Proteína vegana a base de guisante, amaranto, alcachofa y quinua, sabor vainilla, 910g (2.01 Lbs), 21g proteína por porción" },
  { n:"Megaplex Creatine Power", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/5origen.webp", d:"Nutramerican, con creatina, BCAA y HMB, 908g (3.5Lb), 44g proteína y 1000 calorías por porción" },
  { n:"Titán Army 1000", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/6origen.webp", d:"Vitanas, fórmula con carbohidratos y proteína whey, BCAA, glutamina y probióticos, sabor vainilla, 908g (2Lb), 40g proteína" },
  { n:"Super Mega GMN", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/7origen.webp", d:"Ganador de peso con maltodextrina y proteína de suero, sabor vainilla gourmet, 908g, 53g proteína, 983 calorías, 180g carbohidratos" },
  { n:"Crea Stack", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/8origen.webp", d:"Nutramerican, complejo de creatina todo en uno con HMB, ácido alfa lipoico y sulfato de vanadilo, 600g (1.3Lb), 6g creatina por porción" },
  { n:"CR7+ Creatine Monohydrate", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/9origen.webp", d:"VitalBoostt, creatina monohidrato sin sabor, 350g (12.34oz), 70 porciones" },
  { n:"Zupram 4g", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/10origen.webp", d:"Barber, citrato y bis glicinato de magnesio con colágeno hidrolizado, calcio y vitamina D3, 90g" },
  { n:"Uriled", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/11origen.webp", d:"Ledmar, suplemento líquido a base de proteína de soya, manzana, apio, cereza y omega 3, 360ml" },
  { n:"Raizan Flomecol", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/12origen.webp", d:"Solución oral coadyuvante en la inflamación leve de vías urinarias bajas, 330ml" },
  { n:"Diuremax", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/13origen.webp", d:"Freshly, diurético natural con tratamientos científicos, 50 cápsulas" },
  { n:"Cranberry 25.000mg", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/14origen.webp", d:"Fito Medic's, arándanos rojos, coadyuvante en el manejo de recidivas de infecciones urinarias, 60 cápsulas de gelatina blanda" },
  { n:"Collagen & Biotin Complex", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/15origen.webp", d:"Suplemento dietario de colágeno y biotina, 60 softgels" },
  { n:"Colagmin", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/16origen.webp", d:"Funat, colágeno + biotina + vitamina C + vitamina E, 60 tabletas" },
  { n:"Zinc Plus", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/17origen.webp", d:"Funat, zinc para fortalecer las defensas del organismo, 30 tabletas" },
  { n:"Vitasource", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/18origen.webp", d:"Funat, multivitamínico con calcio, magnesio y zinc, 60 cápsulas blandas" },
   ]
      },
      {
        s: "ACEITES",
  items: [   
  { n:"Mano de Res", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/19origen.webp", d:"Casvior, aceite de masajes corporal 100% vegetal, hidratante y emoliente, 240ml" },
  { n:"Almendras Dulces", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/20origen.webp", d:"Casvior, aceite de masajes corporal 100% vegetal, hidratante y emoliente, 240ml" },
  { n:"Romero", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/21origen.webp", d:"Casvior, aceite de masajes corporal y capilar 100% vegetal, hidratante y emoliente, 60ml" },
  { n:"Argán 60ml Casvior", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/22origen.webp", d:"Casvior, aceite de masajes corporal y capilar 100% vegetal, hidratante y emoliente, 60ml" },
  { n:"Argán 120ml OK", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/23origen.webp", d:"Natural's OK, aceite emoliente que hidrata y suaviza el cabello, 120ml" },
  { n:"Ricino Aceite Esencial", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/24origen.webp", d:"Natural's OK, aceite esencial de ricino, 10ml" },
  { n:"Linaza", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/25origen.webp", d:"Casvior, aceite de masajes corporal y capilar 100% vegetal, hidratante y emoliente, 60ml" },
  { n:"Aceite de Café y Té Verde", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/26origen.webp", d:"Herbacol, aceite corporal antioxidante enriquecido con vitamina E, tonifica e hidrata la piel, 150ml" },
  { n:"Argán 60ml OK", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/27origen.webp", d:"Natural's OK, aceite emoliente que hidrata y suaviza el cabello, 60ml" },
  { n:"Ricino 60ml", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/28origen.webp", d:"Natural's OK, aceite emoliente para el crecimiento del cabello, 60ml" },
  { n:"Salvia", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/29origen.webp", d:"Laboratorio Bio Nature, aceite emoliente de masaje corporal, suavidad y sedosidad natural para la piel, 60ml" },
  { n:"Mineral Vitamina E 60ml", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/30origen.webp", d:"Solo Natural, aceite emoliente mineral con vitamina E, uso tópico, natural para la piel suave y sedosa, 60ml" },
  { n:"Mineral Vitamina E 120ml", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/31origen.webp", d:"Solo Natural, aceite emoliente mineral con vitamina E, uso tópico, natural para la piel suave y sedosa, 120ml" },
  { n:"Aceite de Café Hidratante", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/32origen.webp", d:"Casvior, aceite hidratante apropiado para masajes corporales que activa la circulación dérmica, 120g" },
  { n:"Ricino 120ml", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/33origen.webp", d:"Natural's OK, aceite emoliente que estimula el crecimiento del cabello, 120ml" },
  { n:"Limón", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/34origen.webp", d:"Natural's OK, aceite emoliente que ayuda a prevenir la caída del cabello, 120ml" },
  { n:"Menta", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/35origen.webp", d:"Natural's OK, aceite emoliente que ayuda a reducir los niveles de grasa, 120ml" },
  ],
  },
  {
        s: "FIBRAS",
  items: [   
{ n:"Linazamix Piña", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/36origen.webp", d:"Alimento en polvo a base de linaza molida, salvado de trigo y sen, con nopal, pitaya, piña, arándano, apio, zanahoria, té verde y estevia. Sabor piña, 450g, 25 porciones" },
  { n:"Linazamix Naranja Menta", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/37origen.webp", d:"Alimento en polvo a base de linaza molida, salvado de trigo y sen, con noni, linaza, pitaya, flor de jamaica, alcachofa, chía, espirulina y té verde. Sabor naranja menta, 450g, 25 porciones" },
  { n:"Fuxion TT3", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/38origen.webp", d:"FuXion, alimento en polvo a base de té verde con té negro, té rojo, camu camu y ácido alfa lipoico, endulzado con stevia, sabor té limón, 28 sobres" },
  { n:"Fuxion Flora Liv", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/39origen.webp", d:"FuXion, alimento en polvo a base de pulpa de granadilla con fibra prebiótica, inulina de achicoria, cultivos probióticos y uchuva, endulzado con stevia, sabor granadilla, 7 sobres, 35g" },
  { n:"Fuxion Prunex 1 (140g)", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/40origen.webp", d:"FuXion, alimento en polvo a base de linaza, endulzado con stevia, sabor guindón, 28 sobres, 140g" },
  { n:"Té Verde Jengibre y Canela", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/41origen.webp", d:"Mineralin, mezcla en polvo a base de almidón hidrolizado con té verde, jengibre y canela para bebidas frías o calientes, sabor piña, 300g" },
  { n:"Fuxion Prunex 1 (35g)", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/42origen.webp", d:"FuXion, alimento en polvo a base de linaza, endulzado con stevia, sabor guindón, 7 sobres, 35g" },
  ],
  },
  {
        s: "ALIMENTOS",
  items: [   
{ n:"Ajonjolí Crudo 500g", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/ajonjolicrudo500.webp", d:"Productos CQ, ajonjolí crudo 100% natural, 500g" },
  { n:"Fenogreco 125g", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/fenogreco125.webp", d:"Productos CQ, fenogreco 100% natural, 125g y 250g" },
  { n:"Carbón Activado", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/carbonactivado125.webp", d:"Productos CQ, carbón activado 100% natural, presentaciones de 50g y 125g" },
  { n:"Amaranto Molido", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/amarantomolido250.webp", d:"Productos CQ, amaranto molido semilla y pop 100% natural, presentaciones de 100g, 250g y 500g" },
  { n:"Salvado de Avena", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/salvadodeavena.webp", d:"Productos CQ, salvado de avena 100% natural, presentaciones de 250g y 500g" },
  { n:"Sal del Himalaya", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/salhimalaya250.webp", d:"Productos CQ, sal del Himalaya, 500g" },
  { n:"Polen", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/polen250.webp", d:"Productos CQ, polen 100% natural, 250g" },
  { n:"Semilla de Calabaza", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/semillacalabaza500.webp", d:"Productos CQ, semilla de calabaza 100% natural, 500g" },
  { n:"Acacia de la India", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/acaciaindia40.webp", d:"Productos CQ, acacia de la India 100% natural, 20g y 40g" },
  { n:"Flor de Jamaica", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/florjamaica20.webp", d:"Productos CQ, flor de Jamaica 100% natural, 20g" },
  { n:"Ajonjolí Tostado 500g", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/ajonjolitostado500.webp", d:"Productos CQ, ajonjolí tostado 100% natural, 500g" },
  { n:"Sen", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/sen40.webp", d:"Productos CQ, sen deshidratado 100% natural, 40g" },
  { n:"Stevia", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/stevia500.webp", d:"Stevia natural, hoja deshidratada, 50g" },
  { n:"Boldo", p:"", img:"ASSETS/LOGOS/ORIGENVITAL/boldo40.webp", d:"Productos CQ, boldo 100% natural, 40g" },  
  ],
  },
    ],
  },
  {
    /* ══════════════════════════════════════════════════════════════
       ESTÉTICA FIGURA ARMONIOSA SPA  
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "armoniosaspa",
    cat:         "bienestar",
    nombre:      "ESTÉTICA FIGURA ARMONIOSA SPA",
    slogan:      "Relajación, belleza y bienestar en perfecta armonía.",
    desc:        "<p>Figura Armoniosa Spa es un espacio dedicado al bienestar, la relajación y el cuidado integral de la belleza. Ofrecemos servicios especiales como sauna, jacuzzi, masajes relajantes, tratamientos corporales y faciales, diseñados para brindar armonía, descanso y renovación tanto física como emocional.</p><p>Contamos con atención personalizada, un ambiente tranquilo y profesionales comprometidos en hacer de cada visita una experiencia única de relajación y bienestar.</p><p>Estética integral, ambiente armonioso, relajación y bienestar, facial, cuidado corporal.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logo:        "assets/logos/gallery-home-logo.webp",
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/ARMONIOSA/logo-estetica-figura.webp",
    cardImage:   "assets/logos/ARMONIOSA/inicio-estetica-figura.webp",
    portada:     "assets/logos/ARMONIOSA/portada-estetica-figura.webp",
 
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
      "assets/logos/ARMONIOSA/armoniosa1.webp","assets/logos/ARMONIOSA/armoniosa2.webp","assets/logos/ARMONIOSA/armoniosa3.webp","assets/logos/ARMONIOSA/armoniosa4.webp","assets/logos/ARMONIOSA/armoniosa5.webp",
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
    desc:        "<p>Óptica es un espacio especializado en el cuidado de la salud visual, ofreciendo monturas modernas, lentes de alta calidad y atención confiable para toda la familia. Contamos con examen visual profesional, asesoría personalizada y una amplia variedad de estilos que se adaptan a cada necesidad y personalidad.</p><p>Nuestro compromiso es brindar comodidad, claridad y confianza, ayudando a nuestros clientes a cuidar su visión con productos y servicios de excelente calidad. Examen visual profesional, monturas modernas, lentes de alta calidad a precios justos.</p><p>Gafas formuladas, examen visual, óptica profesional, lentes de alta calidad, monturas modernas.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       VICTORIA GOMEZ COSMETICA
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "victoriacosmetica",
    cat:         "bienestar",
    nombre:      "VICTORIA GOMEZ COSMETICA",
    slogan:      "Realzamos tu belleza, cuidamos tu bienestar",
    desc:        "<p>Victoria Gómez Cosmiatría es un espacio dedicado al cuidado, bienestar y belleza integral, ofreciendo tratamientos faciales y corporales diseñados para resaltar la belleza natural de cada persona. Especialistas en cosmiatría y cuidado estético, brindando atención personalizada, calidad en cada procedimiento y un ambiente cómodo y profesional.</p><p>Además, cuentan con servicios especiales y detalles pensados para consentir a sus clientes y hacer de cada visita una experiencia única.</p><p>Belleza, cosmiatría, bienestar, estética, cuidado facial.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    desc:        "<p>Sala de belleza especializada en realzar la imagen y el estilo de cada cliente mediante servicios profesionales de colorimetría, keratina, uñas, peinados y maquillaje. En “Cortes y Estilos” trabajamos con técnicas modernas, productos de alta calidad y atención personalizada para brindar experiencias de belleza, cuidado y transformación.</p><p>Nuestro compromiso es resaltar tu esencia con elegancia, creatividad y las últimas tendencias en estética y cuidado personal.</p><p>Peluquería, peinados profesionales, sala de belleza, alisado, maquillaje, uñas, keratina, spa de belleza.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
    greviews:    "https://g.page/r/Ca-6D0Z9d_tiEBM/review",
 
    /* ─── UBICACIÓN Y MAPA ─── */
    dir:         "Carrera 3 #21-41, Cl. 22 #2a-17a, El Cabrero, Mosquera, Cundinamarca ",
    mapUrl:      "",
    mapsLink:    "https://maps.app.goo.gl/jafuuuFaFNWHoU4y8",
 
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
    desc:        "<p>Peluquería especializada en realzar la belleza y el estilo de cada persona, ofreciendo servicios de cortes, peinados, coloración, cepillados, tratamientos capilares y cuidado integral del cabello. Brindamos atención personalizada, productos de alta calidad y un ambiente moderno y acogedor donde cada cliente vive una experiencia de confianza, renovación y bienestar.</p><p>Nuestro compromiso es resaltar tu imagen con profesionalismo, creatividad y las últimas tendencias en belleza.</p><p>Peluquería: corte dama y caballero, colorimetría, peinados de alta gama, peinados de niña, cepillados, maquillaje, extensiones de cabello punto a punto y tira, arreglos de novia y quinceañera, keratina y keramix.</p><p>Peluquería profesional, técnicos capilares, estética integral, tratamientos capilares, belleza y cuidado.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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
       ACADEMIA NOVA 
       ══════════════════════════════════════════════════════════════ */
 
    /* ─── INFORMACIÓN BÁSICA ─── */
    id:          "nova",
    cat:         "educacion",
    nombre:      "NOVA ",
    slogan:      "¡Transforma tu pasión en arte y tu arte en ingresos! ",
    desc:        "<p>Capacítate con nuestros talleres semipersonalizados, especialistas en manicura rusa semipermanente (técnicas en tendencia), acrílico básico e intermedio, polygel, soft gel, sistema dual y sistemas híbridos. Contamos con clases entre semana y domingos, de 9:00 a. m. a 6:00 p. m.</p><p>Studio de uñas y pestañas Nova by Shalom. Somos especialistas en resaltar tu belleza. Nuestros servicios: manicure y pedicure tradicional y semipermanente, recubrimientos en uña natural.</p><p>Acrílico, polygel, pestañas pelo a pelo, soft gel, dual system.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
    logoFill:    false,
    logoBg:      "#ffffff",
    logoPerfil:  "assets/logos/nova/logo-academia-nova.jpg",
    cardImage:   "assets/logos/nova/inicio-nova.webp",
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
    desc:        "<p>Academia presencial de cocina, repostería y panadería con clases prácticas y preparaciones para llevar. ¡Aprende, emprende y disfruta con nuestros cursos disponibles!</p><p>1. Repostería y pastelería (tortas, rellenos, cubiertas y decoración). 2. Panadería básica, pizza y hojaldre. 3. Repostería saludable (sin gluten y sin azúcar). 4. Asados al barril. 5. Amasijos colombianos (almojábanas, avena cubana, buñuelos, mantecadas, garullas, pan de bono y pan de yuca). 6. Cocina internacional para principiantes. 7. Chorizos artesanales. 8. Yogurt artesanal para emprender. 9. Repostería para emprender (mesa dulce, donas, brownies, fresas con chocolate, postres, galletas, cupcakes y chocolatería). 10. Comidas rápidas para negocio. 11. Sushi para principiantes. 12. Curso para niños.</p><p>Manejamos horarios flexibles entre semana y domingos.</p><p>Cocina profesional, repostería artesanal, panadería técnica, formación gastronómica, técnicas culinarias.</p>",
    tipo:        "estandar",
 
    /* ─── IMÁGENES Y LOGOS ─── */
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