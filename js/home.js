// Home page: hero effects, career timeline, gallery, lightbox.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ---------- hero network canvas (static) ----------
  const canvas = $('#hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let pts = [], W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const draw = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Seeded positions so the pattern stays identical between redraws.
      let seed = 7;
      const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
      const n = Math.round(Math.min(70, (W * H) / 22000));
      pts = Array.from({ length: n }, () => ({ x: rand() * W, y: rand() * H }));
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y, d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(147, 180, 255, ${0.12 * (1 - d / 140)})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(190, 210, 255, .45)';
        ctx.beginPath(); ctx.arc(pts[a].x, pts[a].y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
    };
    draw();
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(draw, 150); });
  }

  // ---------- hero showcase ----------
  const SHOWCASE = [
    ['img/armstrong-watson.webp', 'Armstrong Watson', 'AI agents · Head of Technology'],
    ['img/nova-pangaea.webp', 'Nova Pangaea', 'IT function from zero · IT Director'],
    ['img/edf-renewables.webp', 'EDF Renewables UK & Ireland', 'UK separation from Paris · Head of IT'],
    ['img/vetpartners.webp', 'VetPartners', 'Acquisition integration · IT Director'],
    ['img/assa-abloy.webp', 'HID Global / ASSA ABLOY', 'UK, EMEA & Asia · IT Director'],
    ['img/bidwells.webp', 'Bidwells', 'Cloud-first transformation · Director of IT'],
    ['img/ghd.webp', 'ghd', 'PE-backed global brand · IT Director'],
    ['img/igt.webp', 'IGT', 'European business systems · Head of IT'],
    ['img/missguided.webp', 'Missguided', 'US market entry · Director of IT Services'],
    ['img/great-places.webp', 'Great Places', '25,000+ homes · IT Director'],
    ['img/claims-advisory-group.webp', 'Claims Advisory Group', 'Built from scratch · IT Director'],
    ['img/bowman.webp', 'Ministry of Defence', 'Bowman programme · Programme Director'],
    ['img/bae-nimrod.webp', 'BAE Systems', 'Aerospace & defence'],
    ['img/honeywell-garrett.webp', 'AlliedSignal Honeywell', 'Aerospace & defence'],
    ['img/philips-semiconductors.webp', 'Philips Semiconductors', 'SAP across European sites'],
  ];
  const stack = $('.showcase-stack');
  if (stack) {
    const dots = $('.showcase-dots');
    const capT = $('.showcase-caption strong'), capS = $('.showcase-caption span');
    stack.innerHTML = SHOWCASE.map(([src, name], i) =>
      `<div class="showcase-card" data-pos="hidden"><img src="${src}" alt="${esc(name)}" ${i > 2 ? 'loading="lazy"' : ''} decoding="async"></div>`).join('');
    dots.innerHTML = SHOWCASE.map((s, i) => `<button type="button" aria-label="Show ${esc(s[1])}" data-i="${i}"></button>`).join('');
    const cards = $$('.showcase-card', stack);
    let cur = 0, timer;
    const show = n => {
      const N = cards.length, prev = cur;
      cur = (n + N) % N;
      cards.forEach((c, i) => {
        const rel = (i - cur + N) % N;
        c.dataset.pos = rel < 3 ? String(rel) : (i === prev && prev !== cur ? 'out' : 'hidden');
      });
      $$('button', dots).forEach((d, i) => d.classList.toggle('on', i === cur));
      capT.textContent = SHOWCASE[cur][1]; capS.textContent = SHOWCASE[cur][2];
    };
    const play = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => show(cur + 1), 3800); };
    dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { show(+b.dataset.i); play(); } });
    stack.addEventListener('click', () => openLightbox(SHOWCASE.map(s => ({ src: s[0], caption: `${s[1]} — ${s[2]}` })), cur));
    stack.style.cursor = 'zoom-in';
    show(0); play();
  }

  // ---------- count-up stats ----------
  const counters = $$('[data-count]');
  const runCount = el => {
    const end = parseFloat(el.dataset.count), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = pre + end + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const step = t => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = pre + v + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { runCount(e.target); io.unobserve(e.target); } }), { threshold: .5 });
    counters.forEach(c => io.observe(c));
  } else counters.forEach(runCount);

  // ---------- AI speed card ----------
  const speed = $('.speed-card');
  if (speed && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { speed.classList.add('in'); io.disconnect(); } }, { threshold: .4 });
    io.observe(speed);
  } else if (speed) speed.classList.add('in');

  // ---------- career timeline ----------
  const TAG_LABEL = { tech: 'Technology leadership', ma: 'M&A & integration', global: 'Global leadership', ai: 'AI' };
  const ICON_ZOOM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg>';
  const ICON_BUILD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>';
  const timeline = $('#timeline');
  if (timeline && window.CAREER) {
    const VISIBLE = 3;
    timeline.innerHTML = CAREER.map((r, idx) => {
      let media = '';
      if (r.compact) media = '';
      else if (r.images && r.images.length) {
        media = `<div class="role-media">
          ${r.images.map((im, i) => `<img src="${im.src}" alt="${esc(r.org)} — ${esc(im.label)}" loading="lazy" decoding="async" class="${i === 0 ? 'active' : ''}">`).join('')}
          <button class="zoom" type="button" data-zoom="${idx}" aria-label="Enlarge image for ${esc(r.org)}"></button>
          ${r.images.length > 1 ? `<div class="media-tabs">${r.images.map((im, i) => `<button type="button" data-img="${i}" aria-pressed="${i === 0}">${esc(im.label)}</button>`).join('')}</div>` : ''}
          <span class="zoom-hint">${ICON_ZOOM}</span>
        </div>`;
      } else if (r.placeholder) {
        media = `<div class="role-media placeholder"><div>${ICON_BUILD}<div class="ph-title">${esc(r.placeholder.title)}</div><div class="ph-sub">${esc(r.placeholder.sub)}</div></div></div>`;
      }
      const pts = r.points.map((p, i) => `<li class="${i >= VISIBLE ? 'hidden-extra' : ''}">${esc(p)}</li>`).join('');
      return `${r.era ? `<p class="era-label" data-era>${esc(r.era)}</p>` : ''}
      <article class="role reveal ${r.compact ? 'compact' : ''}" data-tags="${r.tags.join(' ')}">
        <span class="role-node" aria-hidden="true"></span>
        <div class="role-card">
          ${media}
          <div class="role-body">
            <div class="role-meta"><span class="when">${esc(r.when)}</span></div>
            <h3>${esc(r.title)}</h3>
            <p class="org">${esc(r.org)}</p>
            <p class="ctx">${esc(r.ctx)}</p>
            ${r.metric ? `<div class="headline-metric"><b>${esc(r.metric.value)}</b> ${esc(r.metric.label)}</div>` : ''}
            <ul>${pts}</ul>
            ${r.points.length > VISIBLE ? `<button class="toggle-more" type="button" aria-expanded="false">Show ${r.points.length - VISIBLE} more</button>` : ''}
            <div class="role-tags">${r.tags.map(t => `<span class="tag ${t}">${TAG_LABEL[t]}</span>`).join('')}</div>
          </div>
        </div>
      </article>`;
    }).join('');

    timeline.addEventListener('click', e => {
      const more = e.target.closest('.toggle-more');
      if (more) {
        const body = more.closest('.role-body');
        const open = body.classList.toggle('expanded');
        more.setAttribute('aria-expanded', String(open));
        more.textContent = open ? 'Show less' : `Show ${body.querySelectorAll('.hidden-extra').length} more`;
        return;
      }
      const tab = e.target.closest('[data-img]');
      if (tab) {
        const media = tab.closest('.role-media');
        $$('img', media).forEach((im, i) => im.classList.toggle('active', i === +tab.dataset.img));
        $$('[data-img]', media).forEach(b => b.setAttribute('aria-pressed', String(b === tab)));
        return;
      }
      const zoom = e.target.closest('[data-zoom]');
      if (zoom) {
        const r = CAREER[+zoom.dataset.zoom];
        const media = zoom.closest('.role-media');
        const active = $$('img', media).findIndex(im => im.classList.contains('active'));
        openLightbox(r.images.map(im => ({ src: im.src, caption: `${r.title} — ${r.org} (${r.when})` })), Math.max(0, active));
      }
    });

    // Filters
    const counts = { all: CAREER.length };
    CAREER.forEach(r => r.tags.forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
    $$('.filter').forEach(f => { const c = $('.count', f); if (c) c.textContent = counts[f.dataset.filter] || 0; });
    const applyFilter = key => {
      $$('.filter').forEach(f => f.setAttribute('aria-pressed', String(f.dataset.filter === key)));
      $$('.role', timeline).forEach(el => { el.hidden = key !== 'all' && !el.dataset.tags.split(' ').includes(key); if (!el.hidden) el.classList.add('in'); });
      $$('[data-era]', timeline).forEach(l => { l.hidden = key !== 'all'; });
    };
    $$('.filter').forEach(f => f.addEventListener('click', () => applyFilter(f.dataset.filter)));
    $$('[data-jump-filter]').forEach(a => a.addEventListener('click', () => applyFilter(a.dataset.jumpFilter)));
    window.observeReveals();
  }

  // ---------- gallery marquee ----------
  const track = $('.marquee-track');
  if (track) {
    const items = SHOWCASE.map(s => ({ src: s[0], caption: `${s[1]} — ${s[2]}` }));
    const html = items.map((it, i) => `<button type="button" data-gi="${i}" aria-label="Enlarge ${esc(it.caption)}"><img src="${it.src}" alt="" decoding="async"></button>`).join('');
    track.innerHTML = html + html.replace(/<button /g, '<button tabindex="-1" aria-hidden="true" ');
    track.addEventListener('click', e => { const b = e.target.closest('[data-gi]'); if (b) openLightbox(items, +b.dataset.gi); });
  }

  // ---------- skills ----------
  const fill = (sel, list) => { const el = $(sel); if (el && list) el.innerHTML = list.map(s => `<span class="skill">${esc(s)}</span>`).join(''); };
  fill('#skills', window.SKILLS);
  fill('#sectors', window.SECTORS);
  const cred = $('#credentials');
  if (cred && window.CREDENTIALS) cred.innerHTML = CREDENTIALS.map(c => `<li>${esc(c)}</li>`).join('');

  // ---------- lightbox ----------
  const lb = $('#lightbox');
  let lbItems = [], lbIdx = 0, lbLast = null;
  function renderLb() {
    const it = lbItems[lbIdx];
    $('img', lb).src = it.src; $('img', lb).alt = it.caption; $('figcaption', lb).textContent = it.caption;
    $$('.lb-btn', lb).forEach(b => { b.hidden = lbItems.length < 2; });
  }
  function openLightbox(items, idx) {
    if (!lb) return;
    lbItems = items; lbIdx = idx; lbLast = document.activeElement;
    renderLb(); lb.hidden = false; document.body.style.overflow = 'hidden';
    $('.lb-close', lb).focus();
  }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; if (lbLast) lbLast.focus(); }
  if (lb) {
    $('.lb-close', lb).addEventListener('click', closeLb);
    $('.lb-prev', lb).addEventListener('click', () => { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; renderLb(); });
    $('.lb-next', lb).addEventListener('click', () => { lbIdx = (lbIdx + 1) % lbItems.length; renderLb(); });
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') $('.lb-prev', lb).click();
      if (e.key === 'ArrowRight') $('.lb-next', lb).click();
    });
  }
})();
