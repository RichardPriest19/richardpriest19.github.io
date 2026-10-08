// Contact page: enquiry form with nature-of-enquiry selection.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const EMAIL = 'RichardPriest19@gmail.com';

  const form = $('#enquiry-form');
  const group = $('#nature-group');
  const errorBox = $('.form-error', form);
  const msg = $('#f-message');

  const preset = new URLSearchParams(location.search).get('topic');
  group.insertAdjacentHTML('beforeend', (window.ENQUIRY_TYPES || []).map(t =>
    `<label class="nature-option"><input type="radio" name="nature" value="${esc(t)}" ${preset && t.toLowerCase().includes(preset.toLowerCase()) ? 'checked' : ''}><span>${esc(t)}</span></label>`).join(''));

  msg.addEventListener('input', () => { $('#char-count').textContent = msg.value.length.toLocaleString('en-GB'); });
  msg.maxLength = 4000;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    errorBox.hidden = true;
    $$('[aria-invalid]', form).forEach(i => i.removeAttribute('aria-invalid'));
    group.classList.remove('invalid');

    const data = Object.fromEntries(new FormData(form));
    const problems = [];
    if (!data.nature) { problems.push('choose the nature of your enquiry'); group.classList.add('invalid'); }
    if (!data.name.trim()) { problems.push('enter your name'); form.name.setAttribute('aria-invalid', 'true'); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) { problems.push('enter a valid email address'); form.email.setAttribute('aria-invalid', 'true'); }
    if (data.message.trim().length < 10) { problems.push('add a short message'); msg.setAttribute('aria-invalid', 'true'); }
    if (problems.length) {
      errorBox.textContent = 'Please ' + problems.join(', ').replace(/, ([^,]*)$/, ' and $1') + '.';
      errorBox.hidden = false; errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); return;
    }

    const btn = $('button[type="submit"]', form);
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      if (window.SITE && window.SITE.mode === 'static') {
        if (!data.website) {
          await window.sendFormEmail({
            subject: `Website enquiry: ${data.nature} — ${data.name.trim()}`,
            name: data.name.trim(), email: data.email.trim(),
            fields: {
              'Nature of enquiry': data.nature, Organisation: data.organisation, Telephone: data.phone,
              'Preferred contact': data.preferredContact, Message: data.message,
            },
          });
        }
      } else {
        const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json();
        if (!res.ok) throw new Error(out.error || 'Something went wrong. Please try again.');
      }

      const subject = `Website enquiry: ${data.nature}`;
      const body = [
        `Nature of enquiry: ${data.nature}`, `Name: ${data.name}`, `Email: ${data.email}`,
        data.organisation && `Organisation: ${data.organisation}`, data.phone && `Telephone: ${data.phone}`,
        `Preferred contact: ${data.preferredContact}`, '', data.message,
      ].filter(x => x !== undefined && x !== '').join('\n');
      $('#mailto-copy').href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      $('#enquiry-form-view').hidden = true;
      const done = $('#enquiry-done');
      done.hidden = false; done.focus();
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      errorBox.textContent = err.message; errorBox.hidden = false;
    } finally {
      btn.disabled = false; btn.textContent = btn.dataset.label;
    }
  });
})();
