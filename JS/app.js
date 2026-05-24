/* ═══════════════════════════════════════════════════════
   NEWPLACE STORE — MOTOR DE LA APLICACIÓN
   No necesitas modificar nada aquí
   ═══════════════════════════════════════════════════════ */
 
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
 
          setTimeout(() => {
 
            openNeg(negocio);
 
          }, 400);
 
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
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.style.display = id === 'index' ? 'none' : 'flex';
  window.scrollTo(0, 0);
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
        <div class="blog-flag">🏙️</div>
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
    </div>`;
}
 
/* ABRIR CATEGORÍA */
 
function openCat(cat) {
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
  document.getElementById('catTitle').textContent = cat.n;
 
  // ═══════════════════════════════════════════════════════════
  // RENDERIZAR NEGOCIOS DE LA CATEGORÍA
  // ═══════════════════════════════════════════════════════════
  const negs = NEGOCIOS.filter(n => n.cat === cat.id);
  
  document.getElementById('catSub').textContent = negs.length
    ? `${negs.length} negocio${negs.length > 1 ? 's' : ''} registrado${negs.length > 1 ? 's' : ''}`
    : 'Próximamente más negocios';
  
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
  
  showPage('cat');
}
 
/* ABRIR NEGOCIO */
function openNeg(neg) {
 
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
        ab.innerHTML += `<a href="https://wa.me/${w.numero}?text=Hola!%20Vi%20tu%20negocio%20en%20Newplace%20Store%20y%20quiero%20más%20información" class="abtn wa" target="_blank">💬 ${w.nombre}</a>`;
      });
    } else if (neg.wa) {
      ab.innerHTML += `<a href="https://wa.me/${neg.wa}?text=Hola!%20Vi%20tu%20negocio%20en%20Newplace%20Store%20y%20quiero%20más%20información" class="abtn wa" target="_blank">💬 WhatsApp</a>`;
    }
  if (neg.tel) ab.innerHTML += `<a href="tel:+57${neg.tel}" class="abtn tel">📞 Llamar</a>`;
  if (neg.ig)  ab.innerHTML += `<a href="${neg.ig}" class="abtn ig" target="_blank">📸 Instagram</a>`;
  if (neg.tk)  ab.innerHTML += `<a href="${neg.tk}" class="abtn tk" target="_blank">🎵 TikTok</a>`;
  if (neg.fb)  ab.innerHTML += `<a href="${neg.fb}" class="abtn fb" target="_blank">🔵 Facebook</a>`;
  if (neg.web) ab.innerHTML += `<a href="${neg.web}" class="abtn web" target="_blank">🌐 Sitio Web</a>`;
 
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
  if (neg.web) contactHTML += `<div class="ci"><span>🌐</span><a href="${neg.web}" target="_blank">${neg.web.replace('https://','')}</a></div>`;
 
  let galHTML = '';
  if (neg.galeria && neg.galeria.length) {
    const galeriaHeight = neg.galeriaHeight || '180px';
    galHTML = `<div class="info-sec"><h3 class="info-ttl">📷 Galería</h3><div class="gal-grid">
      ${neg.galeria.map(f => f.startsWith('data:') || f.startsWith('assets') || f.includes('.')
        ? `<img src="${f.startsWith('http') ? f : '/' + f}" class="gal-img" style="height:${galeriaHeight};object-fit:cover;" loading="lazy" onclick="openLB('${f}')">`
        : `<div class="gal-emoji">${f}</div>`
      ).join('')}
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
    <div class="info-sec"><h3 class="info-ttl">Sobre nosotros</h3><p class="info-desc">${neg.desc}</p></div>
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
          ${neg.wa ? `<a href="https://wa.me/${neg.wa}?text=Hola!%20Me%20interesa:%20${encodeURIComponent(p.n)}" class="prod-btn" target="_blank">Pedir por WhatsApp</a>` : ''}
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
 
  showPage('neg');
}
 
/* LIGHTBOX */
function openLB(src) {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<div class="lb-bg"></div><img src="/${src}" class="lb-img"><button class="lb-close" onclick="this.parentElement.remove()">✕</button>`;
  lb.querySelector('.lb-bg').onclick = () => lb.remove();
  document.body.appendChild(lb);
}
 
/* FORMULARIO */
function enviarFormulario() {
  const nombre   = document.getElementById('fNombre').value.trim();
  const contacto = document.getElementById('fContacto').value.trim();
  const wa       = document.getElementById('fWa').value.trim();
  const cat      = document.getElementById('fCat').value;
  const municipio      = document.getElementById('fCat').value;
  const desc     = document.getElementById('fDesc').value.trim();
 
  if (!nombre || !contacto || !wa || !cat || !municipio || !desc) {
    alert('Por favor completa los campos obligatorios (*)');
    return;
  }
 
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