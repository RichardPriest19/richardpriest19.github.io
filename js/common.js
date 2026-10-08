// Shared behaviour: header, mobile nav, reveal-on-scroll, CV download modal.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Header background on scroll
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav
  const toggle = $('.nav-toggle');
  const links = $('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', e => {
      if (e.target.closest('a,button')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Reveal on scroll
  window.observeReveals = function () {
    const items = $$('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(i => io.observe(i));
  };
  window.observeReveals();

  // Year
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Back to top: appears once the visitor has scrolled past the first screen.
  const toTop = document.createElement('button');
  toTop.type = 'button';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top of page');
  toTop.title = 'Back to top';
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  const syncToTop = () => toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
  syncToTop();
  window.addEventListener('scroll', syncToTop, { passive: true });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const skip = $('.logo'); if (skip) skip.focus({ preventScroll: true });
  });

  // Static hosting (GitHub Pages): forms are emailed to Richard via Web3Forms.
  window.sendFormEmail = async function ({ subject, name, email, fields }) {
    const key = window.SITE && window.SITE.web3formsKey;
    if (!key) throw new Error('Sorry — this form is not available right now. Please email RichardPriest19@gmail.com.');
    const body = { access_key: key, subject, from_name: 'Portfolio website', name, email, replyto: email };
    Object.entries(fields || {}).forEach(([k, v]) => { if (String(v || '').trim()) body[k] = String(v).trim(); });
    let res, out = {};
    try {
      res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body),
      });
      out = await res.json().catch(() => ({}));
    } catch {
      throw new Error('We could not send your details — please check your connection and try again.');
    }
    if (!res.ok || out.success === false) throw new Error('Sorry — something went wrong sending your details. Please try again, or email RichardPriest19@gmail.com.');
  };

  // ---------- CV download modal ----------
  const modal = $('#cv-modal');
  if (!modal) return;
  const form = $('#cv-form', modal);
  const errorBox = $('.form-error', modal);
  const formView = $('.cv-form-view', modal);
  const doneView = $('.cv-done-view', modal);
  let lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    formView.hidden = false; doneView.hidden = true; errorBox.hidden = true;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => $('input[name="name"]', modal).focus(), 50);
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  $$('[data-open-cv]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openModal(); }));
  $$('[data-close-modal]', modal).forEach(b => b.addEventListener('click', closeModal));
  $$('[data-cv-again]', modal).forEach(b => b.addEventListener('click', () => { doneView.hidden = true; formView.hidden = false; }));
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') { // keep focus inside dialog
      const f = $$('button, input, select, textarea, a[href]', modal).filter(x => !x.closest('[hidden]') && !x.disabled);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    errorBox.hidden = true;
    const data = Object.fromEntries(new FormData(form));
    data.consent = form.consent.checked;
    const problems = [];
    $$('input, select', form).forEach(i => i.removeAttribute('aria-invalid'));
    if (!data.name.trim()) { problems.push('your name'); form.name.setAttribute('aria-invalid', 'true'); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) { problems.push('a valid email address'); form.email.setAttribute('aria-invalid', 'true'); }
    if (!data.organisation.trim()) { problems.push('your organisation'); form.organisation.setAttribute('aria-invalid', 'true'); }
    if (!data.consent) problems.push('your consent to record these details');
    if (problems.length) {
      errorBox.textContent = 'Please provide ' + problems.join(', ').replace(/, ([^,]*)$/, ' and $1') + '.';
      errorBox.hidden = false; return;
    }
    const btn = $('button[type="submit"]', form);
    btn.disabled = true; btn.textContent = 'Preparing your download…';
    try {
      let downloadUrl = null;
      if (window.SITE && window.SITE.mode === 'static') {
        if (!data.website) {
          await window.sendFormEmail({
            subject: `CV downloaded: ${data.name.trim()} (${data.organisation.trim()})`,
            name: data.name.trim(), email: data.email.trim(),
            fields: { Organisation: data.organisation, 'Job title': data.jobTitle, 'Reason': data.reason },
          });
        }
        downloadUrl = window.SITE.cvUrl;
      } else {
        const res = await fetch('/api/cv-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json();
        if (!res.ok) throw new Error(out.error || 'Something went wrong.');
        if (out.token) downloadUrl = '/cv/download?token=' + encodeURIComponent(out.token);
      }
      formView.hidden = true; doneView.hidden = false;
      $('.cv-first-name', modal).textContent = data.name.trim().split(/\s+/)[0];
      if (downloadUrl) {
        const a = document.createElement('a');
        a.href = downloadUrl; a.download = 'Richard_Priest_CV.docx';
        document.body.appendChild(a); a.click(); a.remove();
      }
      form.reset();
    } catch (err) {
      errorBox.textContent = err.message; errorBox.hidden = false;
    } finally {
      btn.disabled = false; btn.innerHTML = btn.dataset.label;
    }
  });
})();
