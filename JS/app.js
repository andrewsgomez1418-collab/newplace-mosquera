/* ═══════════════════════════════════════════════════════
   NEWPLACE STORE — MOTOR DE LA APLICACIÓN
   No necesitas modificar nada aquí
   ═══════════════════════════════════════════════════════ */

   /* ═══════════════════════════════════════════════════════════
   📊 GOOGLE ANALYTICS — FUNCIONES DE TRACKING
   ═══════════════════════════════════════════════════════════ */

const ANALYTICS_CONFIG = {
  enabled: true,
  trackPageViews: true,
  trackEvents: true,
  debug: false // Cambiar a true para ver logs en consola
};

/**
 * Envía un evento a Google Analytics
 * @param {string} eventName - Nombre del evento
 * @param {object} eventData - Datos adicionales del evento
 */
function trackEvent(eventName, eventData = {}) {
  if (!ANALYTICS_CONFIG.enabled || typeof gtag === 'undefined') return;
  
  try {
    gtag('event', eventName, eventData);
    if (ANALYTICS_CONFIG.debug) {
      console.log(`📊 [GA Event] ${eventName}`, eventData);
    }
  } catch (err) {
    console.warn('Analytics error:', err);
  }
}

/**
 * Envía una vista de página a Google Analytics
 * @param {string} pageName - Nombre de la página
 * @param {object} pageData - Datos adicionales de la página
 */
function trackPageView(pageName, pageData = {}) {
  if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.trackPageViews) return;
  if (typeof gtag === 'undefined') return;
  
  try {
    // Detectar automáticamente el ID correcto según el dominio
    let gaId = 'G-2DENWJZK3G'; // Default: Mosquera
    
    if (window.location.hostname.includes('funza')) {
      gaId = 'G-Y27M9YBP7K'; // Funza
    } else if (window.location.hostname.includes('faca')) {
      gaId = 'G-KN2KGD399Y'; // Facatativá
    }
    
    gtag('config', gaId, {
      'page_title': pageName,
      'page_path': `/${pageName}`,
      ...pageData
    });
    if (ANALYTICS_CONFIG.debug) {
      console.log(`📄 [GA PageView] ${pageName}`, pageData);
    }
  } catch (err) {
    console.warn('Analytics error:', err);
  }
}

/**
 * Abre un enlace externo y lo rastrea en Analytics
 */
function openExternalLink(url, platform, businessName = '') {
  trackEvent('click_external_link', {
    'platform': platform,
    'business_name': businessName,
    'url': url
  });
  window.open(url, '_blank');
}

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — GENERADOR DINÁMICO
   ═══════════════════════════════════════════════════════════════ */

/**
 * Actualiza los meta tags dinámicamente cuando se abre un negocio
 * @param {object} negocio - Objeto del negocio desde NEGOCIOS array
 * @param {object} categoria - Objeto de la categoría desde CATS array
 */
function updateMetaTags(negocio, categoria) {
  const domain = window.location.origin;
  const urlNegocio = `${domain}/${negocio.id}`;

  document.title = `${negocio.nombre} — Newplace Store`;
  updateMetaTag('description', negocio.slogan || negocio.desc);
  updateMetaTag('og:title', negocio.nombre);
  updateMetaTag('og:description', negocio.slogan || negocio.desc);
  updateMetaTag('og:url', urlNegocio);
  updateMetaTag('twitter:title', negocio.nombre);
  updateMetaTag('twitter:description', negocio.slogan || negocio.desc);
  updateCanonicalTag(urlNegocio);

  if (negocio.cardImage) {
    const imgUrl = `${domain}/${negocio.cardImage}`;
    updateMetaTag('og:image', imgUrl);
    updateMetaTag('twitter:image', imgUrl);
  } else if (negocio.portada) {
    const imgUrl = `${domain}/${negocio.portada}`;
    updateMetaTag('og:image', imgUrl);
    updateMetaTag('twitter:image', imgUrl);
  } else if (negocio.galeria && negocio.galeria.length > 0) {
    const imgUrl = `${domain}/${negocio.galeria[0]}`;
    updateMetaTag('og:image', imgUrl);
    updateMetaTag('twitter:image', imgUrl);
  }

  const jsonLd = generateBusinessJSON(negocio, categoria, urlNegocio, domain);
  updateJsonLd(jsonLd);
}

/**
 * Genera el JSON-LD Structured Data para un negocio
 */
function generateBusinessJSON(negocio, categoria, url, domain) {
  let jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": negocio.nombre,
    "url": url,
    "description": negocio.slogan || negocio.desc,
  };

  if (negocio.cardImage) {
    jsonLd.image = `${domain}/${negocio.cardImage}`;
  } else if (negocio.portada) {
    jsonLd.image = `${domain}/${negocio.portada}`;
  } else if (negocio.galeria && negocio.galeria.length > 0) {
    jsonLd.image = `${domain}/${negocio.galeria[0]}`;
  }

  if (negocio.dir) {
    jsonLd.address = {
      "@type": "PostalAddress",
      "streetAddress": negocio.dir,
      "addressLocality": "Mosquera",
      "addressRegion": "Cundinamarca",
      "addressCountry": "CO"
    };
  }

  if (negocio.tel) {
    jsonLd.telephone = negocio.tel;
  }

  if (negocio.wa || (negocio.was && negocio.was.length > 0)) {
    const whatsappNumber = negocio.wa || negocio.was[0].numero;
    if (whatsappNumber) {
      jsonLd.contactPoint = {
        "@type": "ContactPoint",
        "contactType": "WhatsApp",
        "telephone": whatsappNumber
      };
    }
  }

  const sameAs = [];
  if (negocio.ig) {
    sameAs.push(negocio.ig.startsWith('http') ? negocio.ig : `https://instagram.com/${negocio.ig}`);
  }
  if (negocio.fb) {
    sameAs.push(negocio.fb.startsWith('http') ? negocio.fb : `https://facebook.com/${negocio.fb}`);
  }
  if (sameAs.length > 0) {
    jsonLd.sameAs = sameAs;
  }

  if (negocio.greviews) {
    jsonLd.sameAs = jsonLd.sameAs || [];
    jsonLd.sameAs.push(negocio.greviews);
  }

  return jsonLd;
}

/**
 * Actualiza un meta tag existente o lo crea
 */
function updateMetaTag(property, content) {
  let meta = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    const isProperty = property.includes(':');
    if (isProperty) {
      meta.setAttribute('property', property);
    } else {
      meta.setAttribute('name', property);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

/**
 * Actualiza el <link rel="canonical"> (no es un meta tag, necesita su propia función)
 */
function updateCanonicalTag(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

/**
 * Actualiza o crea el script JSON-LD
 */
function updateJsonLd(jsonLdObject) {
  let scriptTag = document.querySelector('script[type="application/ld+json"][data-type="business"]');

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-type', 'business');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(jsonLdObject);
}

/**
 * Restaura los meta tags a los valores por defecto (homepage)
 */
function resetMetaTags() {
  const domain = window.location.origin;

  document.title = 'Newplace Store — Centro Comercial Digital';
  updateMetaTag('description', 'Newplace Store: Centro comercial digital que conecta negocios locales con su comunidad en Mosquera, Cundinamarca.');
  updateMetaTag('og:title', 'Newplace Store — Centro Comercial Digital');
  updateMetaTag('og:description', 'Descubre los mejores negocios locales de Mosquera. Conectamos negocios con comunidades.');
  updateMetaTag('og:url', domain);
  updateMetaTag('og:image', `${domain}/assets/img/og-image.jpg`);
  updateMetaTag('twitter:title', 'Newplace Store — Centro Comercial Digital');
  updateMetaTag('twitter:description', 'Descubre los mejores negocios locales de Mosquera. Conectamos negocios con comunidades.');
  updateMetaTag('twitter:image', `${domain}/assets/img/og-image.jpg`);
  updateCanonicalTag(domain + '/');

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Newplace Store Mosquera",
    "url": domain,
    "image": `${domain}/assets/img/logo-color.jpeg`,
    "description": "Centro comercial digital que conecta negocios locales con su comunidad"
  };

  updateJsonLd(defaultJsonLd);
}

/**
 * Actualiza title, description y OG tags para una página de categoría
 */
function updateCategoryMetaTags(cat) {
  const domain = window.location.origin;
  const urlCat = `${domain}/categoria/${cat.id}`;
  const nombreCat = cat.n.charAt(0) + cat.n.slice(1).toLowerCase();
  const titulo = `${nombreCat} en Mosquera — Newplace Store`;
  const descripcion = `Encuentra los mejores negocios de ${nombreCat.toLowerCase()} en Mosquera, Cundinamarca. Contacto directo por WhatsApp con negocios locales verificados.`;

  document.title = titulo;
  updateMetaTag('description', descripcion);
  updateMetaTag('og:title', titulo);
  updateMetaTag('og:description', descripcion);
  updateMetaTag('og:url', urlCat);
  updateMetaTag('twitter:title', titulo);
  updateMetaTag('twitter:description', descripcion);
  updateCanonicalTag(urlCat);

  if (cat.imgHdr || cat.img) {
    const imgUrl = `${domain}/${cat.imgHdr || cat.img}`;
    updateMetaTag('og:image', imgUrl);
    updateMetaTag('twitter:image', imgUrl);
  }
}
 
/* ═══════════════════════════════════════════════════════════
   MOTOR DEL SITIO — No necesitas modificar nada de aquí abajo
   ═══════════════════════════════════════════════════════════ */
 
/* ─── ABRIR NEGOCIO AUTOMÁTICAMENTE DESDE URL LIMPIA ─── */
 
(function () {
 
  const pathParts = window.location.pathname
    .split('/')
    .filter(Boolean);
 
  // HOME
  if (pathParts.length === 0) return;
 
  // CATEGORÍA
  if (pathParts[0] === 'categoria') {
 
    const categoriaID = pathParts[1];
 
    function esperarCategoria() {
 
      if (
        typeof CATS !== 'undefined' &&
        typeof openCat === 'function'
      ) {
 
        const cat = CATS.find(
          c => c.id.toLowerCase() === categoriaID.toLowerCase()
        );
 
        if (cat) {
          openCat(cat);
        }
 
      } else {
 
        setTimeout(esperarCategoria, 100);
 
      }
    }
 
    esperarCategoria();
 
    return;
  }
 
  // NEGOCIO
  const negocioID = pathParts[0];
 
  function esperarNegocio() {
 
    if (
  typeof NEGOCIOS !== 'undefined' &&
  typeof CATS !== 'undefined' &&
  typeof openNeg === 'function' &&
  typeof openCat === 'function'
) {
 
  const negocio = NEGOCIOS.find(
    n => n.id.toLowerCase() === negocioID.toLowerCase()
  );
 
  if (negocio) {
 
    const cat = CATS.find(
      c => c.id === negocio.cat
    );
 
        if (cat) {
 
          openCat(cat);
          openNeg(negocio);
 
        }
      }
 
    } else {
 
      setTimeout(esperarNegocio, 100);
 
    }
  }
 
  if (document.readyState === 'loading') {
 
    document.addEventListener(
      'DOMContentLoaded',
      esperarNegocio
    );
 
  } else {
 
    esperarNegocio();
 
  }
 
})();
 
let navHistory = ['index'];
 
function showPage(id) {
  if (id === 'index') resetMetaTags();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.style.display = id === 'index' ? 'none' : 'flex';
  window.scrollTo(0, 0);
  
  // 📊 TRACK: Página vista
  trackPageView(`page-${id}`, { 
    'page_type': id,
    'timestamp': new Date().toISOString()
  });
  
  // Push state for browser/mobile back button support
  if (id !== 'index') {
    history.pushState(
      { page: id },
      '',
      window.location.pathname
    );
  } else {
    history.replaceState(
      { page: 'index' },
      '',
      '/'
    );
  }
}
 
function goBack() {
  navHistory.pop();
  const prev = navHistory[navHistory.length - 1];
  showPage(prev === 'cat' ? 'cat' : 'index');
}
 
// Mobile/browser back button support
window.addEventListener('popstate', (e) => {
  const page = e.state && e.state.page;
  if (!page || page === 'index') {
    navHistory = ['index'];
    resetMetaTags();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-index').classList.add('active');
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'none';
    window.scrollTo(0, 0);
  } else if (page === 'cat') {
    navHistory = ['index', 'cat'];
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-cat').classList.add('active');
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'flex';
    window.scrollTo(0, 0);
  } else {
    goBack();
  }
});
 
/* RENDER BLOG MOSQUERA */
const blogEl = document.getElementById('blogSection');
blogEl.innerHTML = `
  <div class="blog-card">
    <div class="blog-header">
      <div class="blog-header-inner">
        <div class="blog-flag"></div>
        <div class="blog-header-text">
          <div class="blog-eyebrow">Nuestra Ciudad</div>
          <div class="blog-title">${BLOG.titulo}</div>
          <div class="blog-subtitle">${BLOG.subtitulo}</div>
        </div>
      </div>
    </div>
    <div class="blog-body">
      <p class="blog-desc">${BLOG.descripcion}</p>
      <div class="blog-qualities">
        ${BLOG.cualidades.map(q => `
          <div class="quality-item">
            <div class="quality-icon">${q.icon}</div>
            <div class="quality-text">
              <div class="quality-title">${q.titulo}</div>
              <div class="quality-desc">${q.desc}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="blog-footer">
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${BLOG.etiquetas.map(t => `<span class="blog-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
 
/* RENDER CATEGORÍAS */
const catGrid = document.getElementById('catGrid');
CATS.forEach(cat => {
  const count = NEGOCIOS.filter(n => n.cat === cat.id).length;
  const el = document.createElement('div');
  el.className = 'cat-card';
 
  // Background: photo if available, else solid color
  if (cat.img) {
    el.style.background = cat.c; // fallback color while image loads
    el.innerHTML = `
      <img
        class="cat-card-img"
        src="/${cat.img}"
        alt="${cat.n}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
         ${cat.id === 'mascotas' ? 'style="object-fit:contain;background:#C4EBFD"' : ''}
      >
      <div class="cat-card-overlay"></div>
      <div class="cat-card-placeholder" style="display:none">${cat.e}</div>
      <div class="cat-card-body">
        <span class="cat-name">${cat.n}</span>
        <div class="cat-count">${count} negocio${count !== 1 ? 's' : ''}</div>
      </div>`;
      
  } else {
    // No image: colored background + big emoji
    el.style.background = `linear-gradient(135deg, ${cat.c}ee, ${cat.c}99)`;
    el.innerHTML = `
      <div class="cat-card-overlay" style="background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.5))"></div>
      <div class="cat-card-placeholder" style="display:flex">${cat.e}</div>
      <div class="cat-card-body">
        <span class="cat-name">${cat.n}</span>
        <div class="cat-count">${count} negocio${count !== 1 ? 's' : ''}</div>
      </div>`;
  }
 
  el.addEventListener('click', () => openCat(cat));
  catGrid.appendChild(el);
});
 
/* RENDER NEGOCIOS EN INICIO */
const bizGrid = document.getElementById('bizGrid');
if (bizGrid) {
  if (!NEGOCIOS.length) {
    bizGrid.innerHTML = `<div class="empty-state"><div style="font-size:3rem">📋</div><h3>Aún no hay negocios</h3><p>Agrega el primero en la sección NEGOCIOS del código</p></div>`;
  } else {
    NEGOCIOS.forEach(neg => {
      const cat = CATS.find(c => c.id === neg.cat) || {};
      const card = document.createElement('div');
      card.className = 'biz-card';
      card.innerHTML = bizCardHTML(neg, cat);
      card.addEventListener('click', () => openNeg(neg));
      bizGrid.appendChild(card);
    });
  }
}
 
function bizCardHTML(neg, cat) {
  let logoBoxHTML = '';
  
    if (neg.cardImage) {
    logoBoxHTML = `<div class="biz-logo-box" style="background:${neg.logoBg || '#f0f0f0'};padding:8px;display:flex;align-items:center;justify-content:center;"><img src="/${neg.cardImage}" alt="${neg.nombre}" style="max-width:100%;max-height:240px;object-fit:contain;height:auto;"></div>`;
  } else {
    const logoFillStyle = neg.logoFill ? 'style="width:100%;height:128px;object-fit:contain;"' : '';
    const logoHTML = neg.logo && neg.logo.startsWith('assets')
      ? `<img src="/${neg.logo}" alt="${neg.nombre}" ${logoFillStyle} onerror="this.parentElement.innerHTML='<span class=\\'biz-logo-emoji\\'>${cat.e}</span>'">`
      : `<span class="biz-logo-emoji">${neg.logo || cat.e}</span>`;
    logoBoxHTML = `<div class="biz-logo-box" style="background:${neg.logoBg || cat.c+'12'}">${logoHTML}</div>`;
  }
 
  return `
    ${logoBoxHTML}
    <div class="biz-body">
      <span class="biz-badge" style="background:${cat.c}20;color:${cat.c}">${cat.e} ${cat.n}</span>
      <div class="biz-name">${neg.nombre}</div>
      <div class="biz-slogan">${neg.slogan || ''}</div>
    </div>
    <div class="biz-foot">
      ${neg.agendamiento ? '<span class="btag agendamiento">📅 Agendar</span>' : ''}
      ${neg.wa ? '<span class="btag wa">💬 WhatsApp</span>' : ''}
      ${neg.tk ? '<span class="btag tk">🎵 TikTok</span>' : ''}
      ${neg.ig ? '<span class="btag ig">📸 Instagram</span>' : ''}
      ${neg.fb ? '<span class="btag fb">🔵 Facebook</span>' : ''}
      ${neg.didi ? '<span class="btag didi">🛵 Didi Food</span>' : ''}
      ${neg.rappi ? '<span class="btag rappi">🛵 Rappi</span>' : ''}
    </div>`;
}
 
/* ABRIR CATEGORÍA */
 
function openCat(cat) {
  // 📊 TRACK: Categoría abierta
  trackEvent('view_category', {
    'category_id': cat.id,
    'category_name': cat.n,
    'category_color': cat.c,
    'timestamp': new Date().toISOString()
  });
  navHistory.push('cat');
 
  const hdr = document.getElementById('catHdrEl');
  
  // Limpiar cualquier imagen anterior
  const oldImg = hdr.querySelector('.cat-hdr-img');
  if (oldImg) oldImg.remove();
  
  const oldOverlay = hdr.querySelector('.cat-hdr-overlay');
  if (oldOverlay) oldOverlay.remove();
 
  // ═══════════════════════════════════════════════════════════
  // TODAS LAS CATEGORÍAS SON IGUALES (sin casos especiales)
  // ═══════════════════════════════════════════════════════════
  
  // Verificar si existe imagen de encabezado
  if (cat.imgHdr) {
    // Crear elemento de imagen
    const img = document.createElement('img');
    img.className = 'cat-hdr-img';
    img.src = '/' + cat.imgHdr;
    img.alt = cat.n;
    img.loading = 'lazy';
    
    // Manejar error si la imagen no existe
    img.onerror = function() {
      this.style.display = 'none';
      // Volver al gradiente de color
      hdr.style.background = `linear-gradient(300deg, ${cat.c}ee, ${cat.c}88)`;
    };
    
    // Crear overlay oscuro para legibilidad
    const overlay = document.createElement('div');
    overlay.className = 'cat-hdr-overlay';
    
    // Agregar imagen y overlay al header
    hdr.appendChild(img);
    hdr.appendChild(overlay);
    
    // No establecer background (la imagen la reemplaza)
    hdr.style.background = 'transparent';
  } else {
    // Sin imagen: usar color de fondo con gradiente
    hdr.style.background = `linear-gradient(300deg, ${cat.c}ee, ${cat.c}88)`;
  }
 
  // Mostrar elementos de texto (emoji, título, subtítulo)
  // IGUAL PARA TODAS LAS CATEGORÍAS, sin excepciones
  document.getElementById('catEmoji').style.display = '';
  document.getElementById('catTitle').style.display = '';
  document.getElementById('catSub').style.display = '';
  
  // Actualizar contenido
  document.getElementById('catEmoji').textContent = cat.e;
  if (cat.showTitle !== false) {
  document.getElementById('catTitle').textContent = cat.n;
} else {
  document.getElementById('catTitle').textContent = '';
}
 
// O más corto:
document.getElementById('catTitle').textContent = cat.showTitle !== false ? cat.n : '';
 
  // ═══════════════════════════════════════════════════════════
  // RENDERIZAR NEGOCIOS DE LA CATEGORÍA
  // ═══════════════════════════════════════════════════════════
  const negs = NEGOCIOS.filter(n => n.cat === cat.id);
  
  document.getElementById('catSub').textContent = '';
  
  const grid = document.getElementById('catBizGrid');
  grid.innerHTML = '';
  
  if (!negs.length) {
    grid.innerHTML = `<div class="empty-state"><div style="font-size:3rem">🏗️</div><h3>Próximamente</h3><p>Estamos incorporando negocios en esta categoría.</p></div>`;
  } else {
    negs.forEach((neg, index) => {
      const card = document.createElement('div');
      card.className = 'biz-card' + (neg.destacado ? ' featured featured-' + neg.destacado : '');
      card.innerHTML = bizCardHTML(neg, cat);
      card.addEventListener('click', () => openNeg(neg));
      grid.appendChild(card);
    });
  }
  
  updateCategoryMetaTags(cat);
  showPage('cat');
}
 
/* ABRIR NEGOCIO */
function openNeg(neg) {
  // 📊 TRACK: Negocio abierto
  const catForTracking = CATS.find(c => c.id === neg.cat) || {};
  trackEvent('view_business', {
    'business_id': neg.id,
    'business_name': neg.nombre,
    'business_category': neg.cat,
    'business_category_name': catForTracking.n,
    'business_type': neg.tipo,
    'timestamp': new Date().toISOString()
  });
 
  if (window.location.pathname !== '/' + neg.id) {
 
    history.pushState(
      { page: 'neg', negocio: neg.id },
      '',
      '/' + neg.id
    );
 
  }
  navHistory.push('neg');
  const cat = CATS.find(c => c.id === neg.cat) || {};
  const profCover = document.getElementById('profCover');
if (neg.portada) {
  const portadaHeight = neg.portadaHeight || '120px';
  profCover.style.backgroundImage = `url('${neg.portada}')`;
  profCover.style.backgroundSize = 'contain';
  profCover.style.backgroundRepeat = 'no-repeat';
  profCover.style.backgroundPosition = 'center';
  profCover.style.backgroundColor = '#ffffff'; // ← CAMBIO: transparent en lugar del color
  profCover.style.height = portadaHeight;
}
 
  const logoEl = document.getElementById('profLogo');
  const logoSrc = neg.logoPerfil || neg.logo;
  const perfilFillStyle = neg.logoPerfil ? 'style="width:100%;height:100%;object-fit:cover;padding:0;"' : '';
  if (logoSrc && logoSrc.startsWith('assets'))
     {
     const logoHeight = neg.logoHeight ? `height:${neg.logoHeight};` : '';
    logoEl.innerHTML = `<img src="/${logoSrc}" alt="${neg.nombre}" style="${logoHeight}${perfilFillStyle}" onerror="this.parentElement.innerHTML='<span class=\\'prof-logo-emoji\\'>${cat.e}</span>'">`;
  } else {
    logoEl.innerHTML = `<span class="prof-logo-emoji">${logoSrc || cat.e}</span>`;
  }
 
  /* ─── ESTILOS DE LOGO APLICADOS A TODOS LOS NEGOCIOS ─── */
  logoEl.style.padding = '4px';
  logoEl.style.width = 'fit-content';
  logoEl.style.height = 'fit-content';
  logoEl.style.display = 'flex';
  logoEl.style.alignItems = 'center';
  logoEl.style.justifyContent = 'center';
  logoEl.style.borderRadius = '8px';
  logoEl.style.gap = '0px';
 
  document.getElementById('profBadge').textContent = `${cat.e} ${cat.n}`;
  document.getElementById('profBadge').style.cssText = `background:${cat.c}20;color:${cat.c}`;
  document.getElementById('profName').textContent = neg.nombre;
  document.getElementById('profSlogan').textContent = neg.slogan || '';
 
  /* Botones acción */
  const ab = document.getElementById('profActions');
  ab.innerHTML = '';
  if (neg.agendamiento) ab.innerHTML += `<a href="${neg.agendamiento}" class="abtn agendamiento" target="_blank">📅 Agendar Cita</a>`;
  if (neg.was && neg.was.length > 0) {
      neg.was.forEach(w => {
        ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_whatsapp',{'business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}','phone':'${w.numero}'}); window.open('https://wa.me/${w.numero}?text=Hola!%20Vi%20tu%20negocio%20en%20Newplace%20Store%20y%20quiero%20más%20información', '_blank');" class="abtn wa">💬 ${w.nombre}</a>`;
      });
    } else if (neg.wa) {
      ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_whatsapp',{'business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}','phone':'${neg.wa}'}); window.open('https://wa.me/${neg.wa}?text=Hola!%20Vi%20tu%20negocio%20en%20Newplace%20Store%20y%20quiero%20más%20información', '_blank');" class="abtn wa">💬 WhatsApp</a>`;
    }
  if (neg.tel) ab.innerHTML += `<a href="tel:+57${neg.tel}" class="abtn tel">📞 Llamar</a>`;
  if (neg.ig)  ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Instagram','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.ig}', '_blank');" class="abtn ig">📸 Instagram</a>`;
if (neg.tk)  ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'TikTok','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.tk}', '_blank');" class="abtn tk">🎵 TikTok</a>`;
if (neg.fb)  ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Facebook','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.fb}', '_blank');" class="abtn fb">🔵 Facebook</a>`;
if (neg.didi) ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Didi Food','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.didi}', '_blank');" class="abtn didi">🛵 Didi Food</a>`;
if (neg.rappi) ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Rappi','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.rappi}', '_blank');" class="abtn rappi">🛵 Rappi</a>`;
if (neg.web) ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Sitio Web','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.web}', '_blank');" class="abtn web">🌐 Sitio Web</a>`;
if (neg.greviews) ab.innerHTML += `<a href="javascript:void(0)" onclick="trackEvent('click_social',{'platform':'Google Reviews','business_name':'${neg.nombre.replace(/'/g,"\\'")}','business_id':'${neg.id}'}); window.open('${neg.greviews}', '_blank');" class="abtn greviews">⭐ Google Reviews</a>`;
  ab.innerHTML += `<button class="abtn compartir-neg" onclick="compartirNegocio('${neg.id}', '${neg.nombre.replace(/'/g, "\\'")}')">📤 Compartir</button>`;
 
  /* Tabs */
  const tabs = document.getElementById('negTabs');
  tabs.innerHTML = `<button class="tab active" data-tab="info">📋 Información</button>`;
  document.querySelectorAll('.tab-body').forEach(p => { p.classList.remove('active'); p.innerHTML = ''; });
 
  /* Tab Info */
  let contactHTML = '';
  if (neg.agendamiento) contactHTML += `<div class="ci"><span>📅</span><a href="${neg.agendamiento}" target="_blank">Agendar Cita</a></div>`;
  if (neg.was && neg.was.length > 0) {
      neg.was.forEach(w => {
        contactHTML += `<div class="ci"><span>💬</span><span>${w.nombre}: ${w.numero.replace('57','')}</span></div>`;
      });
    } else if (neg.wa) {
      contactHTML += `<div class="ci"><span>💬</span><span>${neg.wa.replace('57','')}</span></div>`;
    }
  if (neg.tel) contactHTML += `<div class="ci"><span>📞</span><span>${neg.tel}</span></div>`;
  if (neg.dir) contactHTML += `<div class="ci"><span>📍</span><span>${neg.dir}</span></div>`;
  if (neg.ig)  contactHTML += `<div class="ci"><span>📸</span><a href="${neg.ig}" target="_blank">Instagram</a></div>`;
  if (neg.tk)  contactHTML += `<div class="ci"><span>🎵</span><a href="${neg.tk}" target="_blank">TikTok</a></div>`;
  if (neg.fb)  contactHTML += `<div class="ci"><span>🔵</span><a href="${neg.fb}" target="_blank">Facebook</a></div>`;
  if (neg.didi) contactHTML += `<div class="ci"><span>🛵</span><a href="${neg.didi}" target="_blank">Didi Food</a></div>`;
  if (neg.rappi) contactHTML += `<div class="ci"><span>🛵</span><a href="${neg.rappi}" target="_blank">Rappi</a></div>`;
  if (neg.web) contactHTML += `<div class="ci"><span>🌐</span><a href="${neg.web}" target="_blank">${neg.web.replace('https://','')}</a></div>`;
 
  let galHTML = '';
  if (neg.galeria && neg.galeria.length) {
    const imgsGaleria = neg.galeria.filter(f => f.startsWith('data:') || f.startsWith('assets') || f.includes('.'));
    window._negGaleria = imgsGaleria;
    let imgIndex = -1;
    galHTML = `<div class="info-sec"><h3 class="info-ttl">📷 Galería</h3>
      <div class="gal-strip">
        ${neg.galeria.map(f => {
          const esImagen = f.startsWith('data:') || f.startsWith('assets') || f.includes('.');
          if (esImagen) imgIndex++;
          return esImagen
            ? `<div class="gal-strip-item" onclick="openLB(window._negGaleria, ${imgIndex})"><img src="${f.startsWith('http') ? f : '/' + f}" class="gal-strip-img" loading="lazy"></div>`
            : `<div class="gal-strip-item gal-strip-emoji">${f}</div>`;
        }).join('')}
      </div></div>`;
  }
 
  let mapHTML = '';
  if (neg.mapUrl || neg.mapsLink || (neg.mapsLinks && neg.mapsLinks.length > 0)) {
    const btnMaps = neg.mapsLinks && neg.mapsLinks.length > 0
      ? neg.mapsLinks.map(sede => `<a href="${sede.url}" target="_blank" style="display:inline-block;background:var(--primary);color:#fff;padding:10px 22px;border-radius:50px;text-decoration:none;font-weight:700;font-size:.83rem;margin-bottom:14px;margin-right:8px;">📍 ${sede.nombre}</a>`).join('')
      : (neg.mapsLink ? `<a href="${neg.mapsLink}" target="_blank" style="display:inline-block;background:var(--primary);color:#fff;padding:10px 22px;border-radius:50px;text-decoration:none;font-weight:700;font-size:.83rem;margin-bottom:14px;">📍 Ver en Google Maps / GPS</a>` : '');
    const iframeMap = neg.mapUrl
      ? `<iframe src="${neg.mapUrl}" width="100%" height="260" style="border:0;border-radius:16px;display:block" allowfullscreen loading="lazy"></iframe>`
      : '';
    mapHTML = `<div class="info-sec"><h3 class="info-ttl">📍 Ubicación</h3>
      ${neg.dir ? `<p style="font-size:.85rem;color:var(--muted);margin-bottom:10px">${neg.dir}</p>` : ''}
      ${btnMaps}${iframeMap}
    </div>`;
  }
 
  document.getElementById('tab-info').innerHTML = `
    <div class="info-sec"><h3 class="info-ttl">Sobre nosotros</h3><div class="info-desc">${neg.desc}</div></div>
    ${contactHTML ? `<div class="info-sec"><h3 class="info-ttl">Contacto</h3><div class="contact-list">${contactHTML}</div></div>` : ''}
    ${mapHTML}${galHTML}`;
  document.getElementById('tab-info').classList.add('active');
 
  /* Tab Menú */
  if (neg.tipo === 'restaurante' && neg.menu && neg.menu.length) {
    tabs.innerHTML += `<button class="tab" data-tab="menu">🍽️ Menú</button>`;
    document.getElementById('tab-menu').innerHTML = neg.menu.map(sec => `
      <div class="menu-sec">
        <div class="menu-sec-ttl">${sec.s}</div>
        <div class="menu-items-box">
          ${sec.items.map(it => `<div class="mi"><div><div class="mi-name">${it.n}</div><div class="mi-desc">${it.d||''}</div></div><div class="mi-price">${it.p}</div></div>`).join('')}
        </div>
      </div>`).join('');
  }
 
  /* Tab Catálogo */
  if (neg.tipo === 'catalogo' && neg.catalogo && neg.catalogo.length) {
    tabs.innerHTML += `<button class="tab" data-tab="catalogo">🛍️ Catálogo</button>`;
    document.getElementById('tab-catalogo').innerHTML = `<div class="prod-grid">
      ${neg.catalogo.map(p => `<div class="prod-card">
        <div class="prod-img-box">${p.img && p.img.includes('.') ? `<img src="/${p.img}" alt="${p.n}">` : `<div class="prod-img-emoji">${p.img||'📦'}</div>`}</div>
        <div class="prod-body">
          <div class="prod-name">${p.n}</div>
          <div class="prod-desc">${p.d||''}</div>
          <div class="prod-price">${p.p}</div>
          ${(neg.wa || (neg.was && neg.was[0]?.numero)) ? `<a href="https://wa.me/${neg.wa || neg.was[0].numero}?text=Hola!%20Quiero%20comprar:%20${encodeURIComponent(p.n)}" class="prod-btn" target="_blank">🛒 Comprar</a>` : ''}
        </div>
      </div>`).join('')}
    </div>`;
  }
 
  /* Cambio de tabs */
  tabs.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-body').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
 
  updateMetaTags(neg, cat);
  showPage('neg');
}
 

function ensureLBStyles() {
  if (document.getElementById('lb-carousel-styles')) return;
  const style = document.createElement('style');
  style.id = 'lb-carousel-styles';
  style.textContent = `
    .lb-carousel{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;touch-action:pan-y;}
    .lb-carousel-bg{position:absolute;inset:0;background:rgba(0,0,0,.9);}
    .lb-carousel-img{position:relative;max-width:92vw;max-height:85vh;object-fit:contain;border-radius:8px;user-select:none;-webkit-user-select:none;pointer-events:none;}
    .lb-carousel-close{position:absolute;top:16px;right:16px;z-index:2;background:rgba(255,255,255,.15);color:#fff;border:none;width:40px;height:40px;border-radius:50%;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}
    .lb-carousel-close:hover{background:rgba(255,255,255,.3);}
    .lb-carousel-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:2;background:rgba(255,255,255,.15);color:#fff;border:none;width:48px;height:48px;border-radius:50%;font-size:1.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:0;}
    .lb-carousel-arrow:hover{background:rgba(255,255,255,.3);}
    .lb-carousel-prev{left:12px;}
    .lb-carousel-next{right:12px;}
    .lb-carousel-counter{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);z-index:2;background:rgba(255,255,255,.15);color:#fff;padding:6px 16px;border-radius:20px;font-size:.85rem;font-weight:600;}
    @media (max-width:600px){
      .lb-carousel-arrow{width:40px;height:40px;font-size:1.3rem;}
      .lb-carousel-prev{left:6px;}
      .lb-carousel-next{right:6px;}
    }
  `;
  document.head.appendChild(style);
}

function openLB(galeria, startIndex) {
  window._lbGaleria = galeria;
  window._lbIndex = startIndex || 0;
  ensureLBStyles();
  renderLB();
  document.addEventListener('keydown', lbKeyHandler);
}

function renderLB() {
  document.querySelectorAll('.lb-carousel').forEach(el => el.remove());

  const galeria = window._lbGaleria || [];
  const idx = window._lbIndex || 0;
  const total = galeria.length;
  if (!total) return;
  const f = galeria[idx];
  const imgSrc = f.startsWith('http') || f.startsWith('data:') ? f : '/' + f;

  const lb = document.createElement('div');
  lb.className = 'lb-carousel';
  lb.innerHTML = `
    <div class="lb-carousel-bg"></div>
    <button class="lb-carousel-close" aria-label="Cerrar">✕</button>
    ${total > 1 ? '<button class="lb-carousel-arrow lb-carousel-prev" aria-label="Anterior">‹</button>' : ''}
    <img src="${imgSrc}" class="lb-carousel-img" alt="Foto ${idx + 1} de ${total}">
    ${total > 1 ? '<button class="lb-carousel-arrow lb-carousel-next" aria-label="Siguiente">›</button>' : ''}
    ${total > 1 ? `<div class="lb-carousel-counter">${idx + 1} / ${total}</div>` : ''}
  `;
  document.body.appendChild(lb);

  lb.querySelector('.lb-carousel-bg').onclick = closeLB;
  lb.querySelector('.lb-carousel-close').onclick = closeLB;

  if (total > 1) {
    lb.querySelector('.lb-carousel-prev').onclick = (e) => { e.stopPropagation(); lbIrA((idx - 1 + total) % total); };
    lb.querySelector('.lb-carousel-next').onclick = (e) => { e.stopPropagation(); lbIrA((idx + 1) % total); };
  }

  /* Swipe táctil */
  let touchStartX = 0;
  let touchStartY = 0;
  lb.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // Solo reacciona a swipes horizontales (ignora scroll vertical accidental)
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && total > 1) {
      if (dx > 0) lbIrA((idx - 1 + total) % total);
      else lbIrA((idx + 1) % total);
    }
  }, { passive: true });
}

function lbIrA(nuevoIndex) {
  window._lbIndex = nuevoIndex;
  renderLB();
}

function closeLB() {
  document.querySelectorAll('.lb-carousel').forEach(el => el.remove());
  document.removeEventListener('keydown', lbKeyHandler);
}

function lbKeyHandler(e) {
  const galeria = window._lbGaleria || [];
  const total = galeria.length;
  if (e.key === 'Escape') { closeLB(); return; }
  if (!total) return;
  if (e.key === 'ArrowLeft' && total > 1) lbIrA((window._lbIndex - 1 + total) % total);
  if (e.key === 'ArrowRight' && total > 1) lbIrA((window._lbIndex + 1) % total);
}
 
/* FORMULARIO */
function enviarFormulario() {
  const nombre   = document.getElementById('fNombre').value.trim();
  const contacto = document.getElementById('fContacto').value.trim();
  const wa       = document.getElementById('fWa').value.trim();
  const cat      = document.getElementById('fCat').value;
  const municipio      = document.getElementById('fmunicipio').value;
  const desc     = document.getElementById('fDesc').value.trim();
 
  if (!nombre || !contacto || !wa || !cat || !municipio || !desc) {
    alert('Por favor completa los campos obligatorios (*)');
    return;
  }
 
  // 📊 TRACK: Formulario enviado
  trackEvent('form_submit', {
    'business_name': nombre,
    'business_category': cat,
    'municipality': municipio,
    'plan': document.getElementById('fPlan').value,
    'timestamp': new Date().toISOString()
  });
 
  const asunto = 'Solicitud de inscripción - ' + nombre + ' | Newplace Store';
  const cuerpo = [
    '¡Hola equipo Newplace Store!',
    '',
    'Solicito inscribir mi negocio en la revista digital.',
    '',
    'DATOS DEL NEGOCIO:',
    '──────────────────',
    'Negocio:    ' + nombre,
    'Contacto:   ' + contacto,
    'WhatsApp:   ' + wa,
    'Categoría:  ' + cat,
    'Municipio:  ' + municipio,
    'Dirección:  ' + (document.getElementById('fDir').value || 'No indicada'),
    'Redes:      ' + (document.getElementById('fRedes').value || 'No indicadas'),
    'Plan:       ' + (document.getElementById('fPlan').value || 'Por definir'),
    '',
    'DESCRIPCIÓN DEL NEGOCIO:',
    '──────────────────',
    desc,
    '',
    'Quedo atento a su respuesta.',
    contacto,
  ].join('\n');
 
  // Open email client
  window.location.href = 'mailto:programacionnewplace@gmail.com'
    + '?subject=' + encodeURIComponent(asunto)
    + '&body='    + encodeURIComponent(cuerpo);
 
  // Show success message after short delay
  setTimeout(() => {
    document.getElementById('formBody').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 800);
}
 
/* BUSCADOR */
function initSearch() {
  const searchInput  = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchInput) return;
 
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
 
    if (q.length < 1) {
      searchResults.classList.remove('show');
      searchResults.innerHTML = '';
      return;
    }
 
    const results = [];
 
    // ── 1. BUSCAR EN CATEGORÍAS ──────────────────────────────
    CATS.forEach(cat => {
      const count = NEGOCIOS.filter(n => n.cat === cat.id).length;
      if (
        cat.n.toLowerCase().includes(q) ||
        cat.id.toLowerCase().includes(q)
      ) {
        results.push({
          type:    'cat',
          emoji:   cat.e,
          title:   cat.n,
          sub:     count + ' negocio' + (count !== 1 ? 's' : ''),
          color:   cat.c,
          action:  () => openCat(cat),
        });
      }
    });
 
    // ── 2. BUSCAR EN NEGOCIOS ────────────────────────────────
    NEGOCIOS.forEach(neg => {
      const cat = CATS.find(c => c.id === neg.cat) || {};
      const searchText = [
        neg.nombre,
        neg.slogan  || '',
        neg.desc    || '',
        neg.dir     || '',
        cat.n       || '',
      ].join(' ').toLowerCase();
 
      if (searchText.includes(q)) {
        results.push({
          type:   'neg',
          emoji:  cat.e || '🏪',
          title:  neg.nombre,
          sub:    cat.n || '',
          color:  cat.c || '#999',
          action: () => openNeg(neg),
        });
      }
    });
 
    // ── 3. RENDER RESULTADOS ─────────────────────────────────
    if (!results.length) {
      searchResults.innerHTML = `
        <div class="sr-empty">
          Sin resultados para "<strong>${q}</strong>"
        </div>`;
    } else {
      searchResults.innerHTML = results.map((r, i) => `
        <div class="sr-item" data-i="${i}" style="border-left:3px solid ${r.color}">
          <span class="sr-emoji">${r.emoji}</span>
          <div class="sr-info">
            <div class="sr-title">${highlight(r.title, q)}</div>
            <div class="sr-sub">
              ${r.type === 'cat'
                ? '<span class="sr-tag">Categoría</span>'
                : '<span class="sr-tag neg">Negocio</span>'}
              ${r.sub}
            </div>
          </div>
        </div>`).join('');
 
      searchResults.querySelectorAll('.sr-item').forEach((el, i) => {
        el.addEventListener('click', () => {
          results[i].action();
          searchResults.classList.remove('show');
          searchResults.innerHTML = '';
          searchInput.value = '';
        });
      });
    }
 
    searchResults.classList.add('show');
  });
 
  // Cerrar con Escape
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchResults.classList.remove('show');
      searchInput.value = '';
    }
  });
 
  // Cerrar al tocar fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box') && !e.target.closest('.search-results')) {
      searchResults.classList.remove('show');
    }
  });
}
 
// Resalta el texto buscado en el resultado
function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#e5007d22;color:#e5007d;border-radius:3px;padding:0 2px">$1</mark>');
}
 
// Arrancar buscador
initSearch();
 
/* ─── FUNCIÓN PARA COMPARTIR ─── */
function compartirPlataforma() {
  const urlActual = window.location.href;
  const titulo = 'Newplace Store - Revista Publicitaria Digital';
  const descripcion = 'Descubre los mejores negocios locales de tu zona en Newplace Store. Conectamos negocios con comunidades.';
  
  // Si el navegador soporta Web Share API (celulares modernos)
  if (navigator.share) {
    navigator.share({
      title: titulo,
      text: descripcion,
      url: urlActual
    }).catch(err => console.log('Error al compartir:', err));
  } else {
    // Si no soporta, mostrar modal de opciones
    mostrarModalCompartir(urlActual, titulo, descripcion);
  }
}
 
function mostrarModalCompartir(url, titulo, descripcion) {
  // Crear el modal
  const modal = document.createElement('div');
  modal.className = 'share-modal-overlay';
  
  const enlaceEncodificado = encodeURIComponent(url);
  const tituloEncodificado = encodeURIComponent(titulo);
  const descripcionEncodificada = encodeURIComponent(descripcion);
  
  modal.innerHTML = `
    <div class="share-modal">
      <button class="share-modal-close" onclick="this.closest('.share-modal-overlay').remove()">✕</button>
      <h3 class="share-modal-title">📤 Compartir Newplace Store</h3>
      <p class="share-modal-desc">Invita a tus amigos a conocer los mejores negocios locales</p>
      
      <div class="share-options">
        <a href="https://wa.me/?text=${descripcionEncodificada}%20${enlaceEncodificado}" target="_blank" class="share-option whatsapp">
          <span class="share-icon">💬</span>
          <span class="share-label">WhatsApp</span>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${enlaceEncodificado}" target="_blank" class="share-option facebook">
          <span class="share-icon">f</span>
          <span class="share-label">Facebook</span>
        </a>
        <a href="https://twitter.com/intent/tweet?url=${enlaceEncodificado}&text=${tituloEncodificado}" target="_blank" class="share-option twitter">
          <span class="share-icon">𝕏</span>
          <span class="share-label">Twitter/X</span>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="share-option instagram">
          <span class="share-icon">📷</span>
          <span class="share-label">Instagram</span>
        </a>
      </div>
      
      <div class="share-copy">
        <input type="text" class="share-input" value="${url}" readonly id="shareInput">
        <button class="share-copy-btn" onclick="copiarAlPortapapeles()">📋 Copiar enlace</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Cerrar modal al hacer clic en el overlay
  modal.querySelector('.share-modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('share-modal-overlay')) {
      modal.remove();
    }
  });
}
 
function copiarAlPortapapeles() {
  const input = document.getElementById('shareInput');
  input.select();
  
  try {
    document.execCommand('copy');
    // Feedback visual
    const btn = document.querySelector('.share-copy-btn');
    const textoOriginal = btn.textContent;
    btn.textContent = '✅ ¡Copiado!';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.style.background = '';
    }, 2000);
  } catch (err) {
    alert('No se pudo copiar el enlace');
  }
}
 
/* ─── FUNCIÓN PARA COMPARTIR NEGOCIO ESPECÍFICO ─── */
function compartirNegocio(negocioId, nombreNegocio) {
  const urlNegocio = window.location.origin + '/' + negocioId;
  const titulo = nombreNegocio + ' - Newplace Store';
  const descripcion = 'Descubre este excelente negocio en Newplace Store. ¡Te recomiendo que lo visites!';
  
  // Si el navegador soporta Web Share API (celulares modernos)
  if (navigator.share) {
    navigator.share({
      title: titulo,
      text: descripcion,
      url: urlNegocio
    }).catch(err => console.log('Error al compartir:', err));
  } else {
    // Si no soporta, mostrar modal personalizado
    mostrarModalCompartirNegocio(urlNegocio, nombreNegocio, descripcion);
  }
}
 
function mostrarModalCompartirNegocio(url, nombreNegocio, descripcion) {
  // Crear el modal
  const modal = document.createElement('div');
  modal.className = 'share-modal-overlay';
  
  const enlaceEncodificado = encodeURIComponent(url);
  const nombreEncodificado = encodeURIComponent(nombreNegocio);
  const descripcionEncodificada = encodeURIComponent(descripcion);
  
  modal.innerHTML = `
    <div class="share-modal">
      <button class="share-modal-close" onclick="this.closest('.share-modal-overlay').remove()">✕</button>
      <h3 class="share-modal-title">📤 Compartir ${nombreNegocio}</h3>
      <p class="share-modal-desc">Invita a tus amigos a conocer este negocio</p>
      
      <div class="share-options">
        <a href="https://wa.me/?text=${descripcionEncodificada}%20${enlaceEncodificado}" target="_blank" class="share-option whatsapp">
          <span class="share-icon">💬</span>
          <span class="share-label">WhatsApp</span>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${enlaceEncodificado}" target="_blank" class="share-option facebook">
          <span class="share-icon">f</span>
          <span class="share-label">Facebook</span>
        </a>
        <a href="https://twitter.com/intent/tweet?url=${enlaceEncodificado}&text=${nombreEncodificado}" target="_blank" class="share-option twitter">
          <span class="share-icon">𝕏</span>
          <span class="share-label">Twitter/X</span>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="share-option instagram">
          <span class="share-icon">📷</span>
          <span class="share-label">Instagram</span>
        </a>
      </div>
      
      <div class="share-copy">
        <input type="text" class="share-input" value="${url}" readonly id="shareInputNeg">
        <button class="share-copy-btn" onclick="copiarAlPortapapelesNeg()">📋 Copiar enlace</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Cerrar modal al hacer clic en el overlay
  modal.querySelector('.share-modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('share-modal-overlay')) {
      modal.remove();
    }
  });
}
 
function copiarAlPortapapelesNeg() {
  const input = document.getElementById('shareInputNeg');
  input.select();
  
  try {
    document.execCommand('copy');
    // Feedback visual
    const btn = document.querySelector('.share-copy-btn');
    const textoOriginal = btn.textContent;
    btn.textContent = '✅ ¡Copiado!';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.style.background = '';
    }, 2000);
  } catch (err) {
    alert('No se pudo copiar el enlace');
  }
}

/* ─── MENÚ DROPDOWN DE ZONAS ─── */
function toggleZonasMenu() {
  const btn = document.querySelector('.zonas-menu-btn');
  const dropdown = document.getElementById('zonasDropdown');
  
  btn.classList.toggle('active');
  dropdown.classList.toggle('active');
}

// Cerrar el menú si se hace clic fuera
document.addEventListener('click', function(event) {
  const wrapper = document.querySelector('.zonas-dropdown-wrapper');
  if (wrapper && !wrapper.contains(event.target)) {
    const btn = document.querySelector('.zonas-menu-btn');
    const dropdown = document.getElementById('zonasDropdown');
    if (btn && dropdown) {
      btn.classList.remove('active');
      dropdown.classList.remove('active');
    }
  }
});