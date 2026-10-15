/* ═══════════════════════════════════════════════════════════════
   NEWPLACE STORE — GENERADOR DE PÁGINAS ESTÁTICAS (PRE-RENDER SEO)
   ═══════════════════════════════════════════════════════════════
   QUÉ HACE:
   Lee datos.js (SIN modificarlo) y genera, junto a este script,
   una carpeta por cada negocio y por cada categoría, cada una con
   su propio index.html que ya trae en el HTML crudo:
     - <title> correcto
     - <meta description> correcta
     - <link rel="canonical"> correcto (apuntando a esa página, no al home)
     - Open Graph / Twitter Card correctos
     - JSON-LD correcto
   Esto es lo que Google lee ANTES de ejecutar JavaScript, así que
   garantiza que cada negocio y categoría se indexen con su propia
   información, sin depender de que el JS se ejecute a tiempo.

   También regenera sitemap.xml automáticamente con TODAS las
   categorías y negocios (ya no hay que mantenerlo a mano).

   🔧 CORRECCIÓN (2026-07-16): todas las URLs generadas ahora
   terminan en "/" (barra final), tanto en canonical/OG/JSON-LD
   como en el sitemap. Esto evita que Netlify responda con un
   redirect 301 de "/negocio" -> "/negocio/" (porque las carpetas
   generadas siempre sirven vía index.html dentro de una carpeta),
   lo cual causaba que Google marcara 28 URLs como "Página con
   redirección" y no las indexara (confirmado en Search Console).

   CÓMO USARLO:
   1. node prerender.js
   2. Arrastra la carpeta completa del proyecto a Netlify, como
      siempre (ahora incluye subcarpetas nuevas por negocio/categoría).
   3. Repite el paso 1 cada vez que agregues o edites un negocio
      en datos.js, antes de subir.

   NO NECESITAS TOCAR ESTE ARCHIVO PARA AGREGAR NEGOCIOS.
   Solo edita datos.js como siempre; este script hace el resto.
   ═══════════════════════════════════════════════════════════════ */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

/* ─── CONFIGURACIÓN DEL SITIO ─── */
const CONFIG = {
  domain:   'https://newplacemosquera.com',
  ciudad:   'Mosquera',
  region:   'Cundinamarca',
  siteName: 'Newplace Store',
};

const ROOT = __dirname;

/* ─── 1. CARGAR DATOS.JS SIN MODIFICARLO (ejecutado en sandbox) ─── */
function encontrarArchivo(nombre) {
  const candidatos = [
    path.join(ROOT, nombre),
    path.join(ROOT, 'js', nombre),
    path.join(ROOT, 'JS', nombre),
  ];
  for (const ruta of candidatos) {
    if (fs.existsSync(ruta)) return ruta;
  }
  throw new Error(
    `No se encontró "${nombre}" en ninguna de estas rutas:\n` +
    candidatos.map(r => '  - ' + r).join('\n')
  );
}

function cargarDatos() {
  let codigo = fs.readFileSync(encontrarArchivo('datos.js'), 'utf8');
  codigo = codigo
    .replace(/\bconst\s+BLOG\s*=/, 'var BLOG =')
    .replace(/\bconst\s+CATS\s*=/, 'var CATS =')
    .replace(/\bconst\s+NEGOCIOS\s*=/, 'var NEGOCIOS =');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(codigo, sandbox, { filename: 'datos.js' });
  const { BLOG, CATS, NEGOCIOS } = sandbox;
  if (!CATS || !NEGOCIOS) {
    throw new Error('No se pudo leer CATS/NEGOCIOS desde datos.js');
  }
  return { BLOG, CATS, NEGOCIOS };
}

/* ─── 2. UTILIDADES ─── */
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function textoPlano(str, maxLen = 160) {
  const limpio = String(str || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return limpio.length > maxLen ? limpio.slice(0, maxLen - 1).trim() + '…' : limpio;
}

function urlImg(ruta) {
  return `${CONFIG.domain}/${encodeURI(String(ruta).replace(/^\/+/, ''))}`;
}

const TIPOS_SCHEMA = {
  antojos: 'Restaurant',
  gourmet: 'Restaurant',
  salud: 'MedicalBusiness',
  mascotas: 'PetStore',
  imagen: 'BeautySalon',
  bienestar: 'HealthAndBeautyBusiness',
  educacion: 'EducationalOrganization',
  movilidad: 'AutoRepair',
  hogar: 'HomeAndConstructionBusiness',
  shopping: 'Store',
  consumo: 'Store'
};

function bodyNegocio(neg, cat, todos) {
  const nombreCat = cat.n.charAt(0) + cat.n.slice(1).toLowerCase();
  const wa = neg.wa || (neg.was && neg.was[0] && neg.was[0].numero) || '';
  const relacionados = todos
    .filter(n => n.cat === neg.cat && n.id !== neg.id)
    .slice(0, 6)
    .map(n => `<a href="/${n.id}/">${escapeHtml(n.nombre)}</a>`)
    .join(' · ');
  const prods = [];
  (neg.menu || []).forEach(s => (s.items || []).forEach(i => prods.push(i.n + (i.d ? ' — ' + textoPlano(i.d, 200) : ''))));
  (neg.catalogo || []).forEach(p => {
    if (p.items) p.items.forEach(i => prods.push(i.n + (i.d ? ' — ' + textoPlano(i.d, 200) : '')));
    else prods.push(p.n + (p.d ? ' — ' + textoPlano(p.d, 200) : ''));
  });
  return `<section id="seo-static" style="max-width:760px;margin:0 auto;padding:20px;font-family:Poppins,sans-serif">
<h1>${escapeHtml(neg.nombre)} en ${CONFIG.ciudad}, ${CONFIG.region}</h1>
<p><strong>${escapeHtml(textoPlano(neg.slogan, 300))}</strong></p>
<p>${escapeHtml(textoPlano(neg.desc, 5000))}</p>
${neg.dir ? `<p>Dirección: ${escapeHtml(textoPlano(neg.dir, 300))}, ${CONFIG.ciudad}</p>` : ''}
${neg.tel ? `<p>Teléfono: ${escapeHtml(neg.tel)}</p>` : ''}
${wa ? `<p>WhatsApp: ${escapeHtml(String(wa).trim())}</p>` : ''}
${prods.length ? `<h2>Productos y servicios de ${escapeHtml(neg.nombre)}</h2><ul>${prods.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>` : ''}
<p>Categoría: <a href="/categoria/${cat.id}/">${escapeHtml(nombreCat)} en ${CONFIG.ciudad}</a></p>
${relacionados ? `<p>Más en ${escapeHtml(nombreCat)}: ${relacionados}</p>` : ''}
<p><a href="/">Newplace Store ${CONFIG.ciudad}</a></p>
</section>`;
}

function bodyCategoria(cat, negs) {
  const nombreCat = cat.n.charAt(0) + cat.n.slice(1).toLowerCase();
  return `<section id="seo-static" style="max-width:760px;margin:0 auto;padding:20px;font-family:Poppins,sans-serif">
<h1>${escapeHtml(nombreCat)} en ${CONFIG.ciudad}, ${CONFIG.region}</h1>
<ul>${negs.map(n => `<li><a href="/${n.id}/">${escapeHtml(n.nombre)}</a> — ${escapeHtml(textoPlano(n.slogan, 160))}</li>`).join('')}</ul>
<p><a href="/">Newplace Store ${CONFIG.ciudad}</a></p>
</section>`;
}

/* ─── 3. GENERAR JSON-LD ─── */
function jsonLdNegocio(neg, cat, url) {
  const domain = CONFIG.domain;
  let jsonLd = {
    "@context": "https://schema.org",
    "@type": TIPOS_SCHEMA[cat && cat.id] || 'LocalBusiness',
    "name": neg.nombre,
    "url": url,
    "description": textoPlano((neg.slogan || '') + ' ' + (neg.desc || ''), 300),
    "areaServed": { "@type": "City", "name": CONFIG.ciudad },
  };

  if (neg.cardImage) jsonLd.image = `${domain}/${neg.cardImage}`;
  else if (neg.portada) jsonLd.image = `${domain}/${neg.portada}`;
  else if (neg.galeria && neg.galeria.length > 0) jsonLd.image = `${domain}/${neg.galeria[0]}`;

  if (neg.dir) {
    jsonLd.address = {
      "@type": "PostalAddress",
      "streetAddress": neg.dir,
      "addressLocality": CONFIG.ciudad,
      "addressRegion": CONFIG.region,
      "addressCountry": "CO"
    };
  }

  if (neg.tel) {
    const t = String(neg.tel).replace(/\D/g, '');
    jsonLd.telephone = '+57' + (t.length === 12 && t.startsWith('57') ? t.slice(2) : t);
  }

  const numeroWa = neg.wa || (neg.was && neg.was[0] && neg.was[0].numero);
  if (numeroWa) {
    jsonLd.contactPoint = { "@type": "ContactPoint", "contactType": "WhatsApp", "telephone": numeroWa };
  }

  const sameAs = [];
  if (neg.ig) sameAs.push(neg.ig.startsWith('http') ? neg.ig : `https://instagram.com/${neg.ig}`);
  if (neg.fb) sameAs.push(neg.fb.startsWith('http') ? neg.fb : `https://facebook.com/${neg.fb}`);
  if (neg.greviews) sameAs.push(neg.greviews);
  if (sameAs.length > 0) jsonLd.sameAs = sameAs;

  return jsonLd;
}

/* ─── 4. GENERAR BLOQUE <head> PARA UN NEGOCIO ───
   🔧 CORREGIDO: url ahora termina en "/" */
function headNegocio(neg, cat, plantillaHead) {
  const domain = CONFIG.domain;
  const url = `${domain}/${neg.id}/`;
  const titulo = `${neg.nombre} en ${CONFIG.ciudad}, ${CONFIG.region} — ${CONFIG.siteName}`;
  const descripcion = textoPlano(`${neg.nombre} en ${CONFIG.ciudad}. ${neg.slogan || ''} ${neg.desc || ''}`, 200);

  let imagen = `${domain}/assets/img/og-image.jpg`;
  if (neg.cardImage) imagen = urlImg(neg.cardImage);
  else if (neg.portada) imagen = urlImg(neg.portada);
  else if (neg.galeria && neg.galeria.length > 0) imagen = urlImg(neg.galeria[0]);

  const jsonLd = jsonLdNegocio(neg, cat, url);

  return `  <!-- SEO BASICO (generado: ${neg.id}) -->
  <title>${escapeHtml(titulo)}</title>
  <meta name="description" content="${escapeHtml(descripcion)}">
  <meta name="keywords" content="${escapeHtml((cat && cat.n) || '')}, ${escapeHtml(neg.nombre)}, negocios ${CONFIG.ciudad}">
  <meta name="author" content="${CONFIG.siteName}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(titulo)}">
  <meta property="og:description" content="${escapeHtml(descripcion)}">
  <meta property="og:image" content="${imagen}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="${CONFIG.siteName}">
  <meta property="og:locale" content="es_CO">

  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(titulo)}">
  <meta name="twitter:description" content="${escapeHtml(descripcion)}">
  <meta name="twitter:image" content="${imagen}">

  <!-- JSON-LD STRUCTURED DATA -->
  <script type="application/ld+json" data-type="business">
  ${JSON.stringify(jsonLd, null, 2)}
  </script>`;
}

/* ─── 5. GENERAR BLOQUE <head> PARA UNA CATEGORÍA ───
   🔧 CORREGIDO: url ahora termina en "/" */
function headCategoria(cat, negocios) {
  const domain = CONFIG.domain;
  const url = `${domain}/categoria/${cat.id}/`;
  const nombreCat = cat.n.charAt(0) + cat.n.slice(1).toLowerCase();
  const titulo = `${nombreCat} en ${CONFIG.ciudad} — ${CONFIG.siteName}`;
  const descripcion = `Encuentra los mejores negocios de ${nombreCat.toLowerCase()} en ${CONFIG.ciudad}, ${CONFIG.region}. Contacto directo por WhatsApp con negocios locales verificados.`;
  const imagen = (cat.imgHdr || cat.img) ? urlImg(cat.imgHdr || cat.img) : `${domain}/assets/img/og-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": titulo,
    "url": url,
    "description": descripcion,
    "about": negocios.map(n => n.nombre)
  };

  return `  <!-- SEO BASICO (generado: categoria/${cat.id}) -->
  <title>${escapeHtml(titulo)}</title>
  <meta name="description" content="${escapeHtml(descripcion)}">
  <meta name="keywords" content="${escapeHtml(nombreCat)}, negocios ${CONFIG.ciudad}, comercio local">
  <meta name="author" content="${CONFIG.siteName}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(titulo)}">
  <meta property="og:description" content="${escapeHtml(descripcion)}">
  <meta property="og:image" content="${imagen}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="${CONFIG.siteName}">
  <meta property="og:locale" content="es_CO">

  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(titulo)}">
  <meta name="twitter:description" content="${escapeHtml(descripcion)}">
  <meta name="twitter:image" content="${imagen}">

  <!-- JSON-LD STRUCTURED DATA -->
  <script type="application/ld+json" data-type="business">
  ${JSON.stringify(jsonLd, null, 2)}
  </script>`;
}

/* ─── 6. REEMPLAZAR EL BLOQUE SEO DENTRO DE index.html ─── */
function construirPagina(plantillaHTML, nuevoBloqueHead, bloqueBody) {
  const inicio = plantillaHTML.indexOf('<!-- SEO BASICO -->');
  if (inicio === -1) {
    throw new Error('No se encontró el marcador <!-- SEO BASICO --> en index.html. ¿Se modificó la estructura del head?');
  }
  const ldMarker = 'application/ld+json';
  const ldPos = plantillaHTML.indexOf(ldMarker, inicio);
  if (ldPos === -1) {
    throw new Error('No se encontró el script JSON-LD (application/ld+json) en index.html.');
  }
  const cierreScript = '</script>';
  const cierrePos = plantillaHTML.indexOf(cierreScript, ldPos);
  if (cierrePos === -1) {
    throw new Error('No se encontró el cierre </script> del bloque JSON-LD en index.html.');
  }
  const fin = cierrePos + cierreScript.length;
  let html = plantillaHTML.slice(0, inicio) + nuevoBloqueHead + '\n' + plantillaHTML.slice(fin);
  if (bloqueBody) html = html.replace('<body>', () => '<body>\n' + bloqueBody);
  return html;
}

function escribirArchivo(rutaRelativa, contenido) {
  const rutaAbs = path.join(ROOT, rutaRelativa);
  fs.mkdirSync(path.dirname(rutaAbs), { recursive: true });
  fs.writeFileSync(rutaAbs, contenido, 'utf8');
}

/* ─── 7. GENERAR SITEMAP.XML COMPLETO Y AUTOMÁTICO ───
   🔧 CORREGIDO: <loc> de categorías y negocios ahora termina en "/" */
function generarSitemap(CATS, NEGOCIOS) {
  const hoy = new Date().toISOString().slice(0, 10);
  const domain = CONFIG.domain;

  let urls = `  <url>
    <loc>${domain}/</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

  CATS.forEach(cat => {
    const negs = NEGOCIOS.filter(n => n.cat === cat.id);
    if (!negs.length) return;
    const imgTag = cat.imgHdr
      ? `\n    <image:image>\n      <image:loc>${urlImg(cat.imgHdr)}</image:loc>\n      <image:title>${escapeHtml(cat.n)} en ${CONFIG.ciudad}</image:title>\n    </image:image>`      : '';
    urls += `  <url>
    <loc>${domain}/categoria/${cat.id}/</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>${imgTag}
  </url>
`;
  });

  NEGOCIOS.forEach(neg => {
    if (!neg.id) return;
    if (!CATS.find(c => c.id === neg.cat)) return;
    let imagen = neg.cardImage || neg.portada || (neg.galeria && neg.galeria[0]);
    const imgTag = imagen
      ? `\n    <image:image>\n      <image:loc>${urlImg(imagen)}</image:loc>\n    </image:image>`      : '';
    urls += `  <url>
    <loc>${domain}/${neg.id}/</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${imgTag}
  </url>
`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}</urlset>
`;
}

/* ─── 8. EJECUCIÓN PRINCIPAL ─── */
function main() {
  console.log('🔧 Generando páginas estáticas para SEO (Mosquera)...\n');

  const { CATS, NEGOCIOS } = cargarDatos();
  const plantillaHTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  let contadorNeg = 0;
  NEGOCIOS.forEach(neg => {
    if (!neg.id) return;
    const cat = CATS.find(c => c.id === neg.cat);
    if (!cat) {
      console.log(`  ⏭️  omitido (sin categoría real): ${neg.id}`);
      return;
    }
    const bloqueHead = headNegocio(neg, cat, plantillaHTML);
    const pagina = construirPagina(plantillaHTML, bloqueHead, bodyNegocio(neg, cat, NEGOCIOS));
    escribirArchivo(`${neg.id}/index.html`, pagina);
    contadorNeg++;
    console.log(`  ✅ /${neg.id}/index.html`);
  });

  let contadorCat = 0;
  CATS.forEach(cat => {
    const negs = NEGOCIOS.filter(n => n.cat === cat.id);
    if (!negs.length) return;
    const bloqueHead = headCategoria(cat, negs);
    const pagina = construirPagina(plantillaHTML, bloqueHead, bodyCategoria(cat, negs));
    escribirArchivo(`categoria/${cat.id}/index.html`, pagina);
    contadorCat++;
    console.log(`  ✅ /categoria/${cat.id}/index.html`);
  });

  const sitemap = generarSitemap(CATS, NEGOCIOS);
  escribirArchivo('sitemap.xml', sitemap);
  console.log(`  ✅ sitemap.xml actualizado (${contadorNeg} negocios, ${contadorCat} categorías)`);

  console.log(`\n🎉 Listo: ${contadorNeg} páginas de negocio + ${contadorCat} páginas de categoría generadas.`);
  console.log('   Ahora sube/arrastra la carpeta completa del proyecto a Netlify, como siempre.');
}

main();