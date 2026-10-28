import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, finePointer, reduce } from './util.js';

export function initUI(ctx) {
  const { lenis, sc } = ctx;

  /* ---------- pointer → WebGL world ---------- */
  if (sc && finePointer) {
    window.addEventListener('pointermove', e => {
      sc.state.pointer.x = (e.clientX / innerWidth) * 2 - 1;
      sc.state.pointer.y = -((e.clientY / innerHeight) * 2 - 1);
      sc.state.pointer.active = true;
    }, { passive: true });
    document.addEventListener('pointerleave', () => { sc.state.pointer.active = false; });
  }

  if (finePointer) {
    /* ---------- cursor learns what it is over ---------- */
    const halo = $('.cursor-halo');
    if (halo) {
      const label = document.createElement('span');
      label.className = 'cin-halo-label';
      halo.appendChild(label);
      const map = [
        ['.project-card', 'OPEN'], ['.photo-card', 'VIEW'], ['.story-photo', 'VIEW'], ['.journey-image', 'VIEW'], ['.skill-node', 'TOOLS'],
        ['#launch', 'ENTER'], ['a[href^="mailto"]', 'WRITE'], ['.portrait-image', 'VIEW']
      ];
      map.forEach(([sel, text]) => $$(sel).forEach(el => {
        el.addEventListener('pointerenter', () => { label.textContent = text; halo.classList.add('has-label'); });
        el.addEventListener('pointerleave', () => halo.classList.remove('has-label'));
      }));
    }

    /* ---------- magnetic controls (CSS `translate`, so hover transforms survive) ---------- */
    $$('.pill, .menu-toggle, #launch, .project-link, .text-link, .contact-links a, .skill-node').forEach(el => {
      el.classList.add('mag');
      el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0);
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          '--mx': (e.clientX - (r.left + r.width / 2)) * 0.28,
          '--my': (e.clientY - (r.top + r.height / 2)) * 0.28,
          duration: 0.45, ease: 'power3.out', overwrite: 'auto'
        });
      });
      el.addEventListener('pointerleave', () => gsap.to(el, { '--mx': 0, '--my': 0, duration: 1, ease: 'elastic.out(1,.4)', overwrite: 'auto' }));
    });

    /* ---------- project cards: 3D tilt + moving glare ---------- */
    $$('.project-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        if (innerWidth < 900) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
        card.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
        gsap.to(card, { rotationY: (x - 0.5) * 5, rotationX: -(y - 0.5) * 5, transformPerspective: 1400, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 1, ease: 'expo.out', overwrite: 'auto' }));
    });
  }

  /* ---------- photo viewer: click any photo to see it whole, uncropped ---------- */
  const lb = document.createElement('div');
  lb.className = 'cin-lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Photo viewer');
  lb.innerHTML = '<button class="cin-lb-close" type="button" aria-label="Close photo">CLOSE <span>\u00d7</span></button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(lb);
  const lbImg = $('img', lb), lbCap = $('figcaption', lb), lbClose = $('.cin-lb-close', lb);
  gsap.set(lb, { autoAlpha: 0 });
  let lbOpen = false, lbFrom = null;

  function openPhoto(src, alt, from) {
    if (lbOpen) return;
    lbOpen = true; lbFrom = from;
    lbImg.src = src; lbImg.alt = alt || '';
    lbCap.textContent = alt || '';
    document.body.classList.add('lightbox-open');
    const d = reduce ? 0 : 1;
    gsap.to(lb, { autoAlpha: 1, duration: 0.45 * d, ease: 'power2.out' });
    gsap.fromTo(lbImg, { scale: 0.9, y: 36, autoAlpha: 0 }, { scale: 1, y: 0, autoAlpha: 1, duration: 0.9 * d, ease: 'expo.out' });
    gsap.fromTo(lbCap, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7 * d, delay: 0.25 * d, ease: 'expo.out' });
    lbClose.focus({ preventScroll: true });
  }
  function closePhoto() {
    if (!lbOpen) return;
    lbOpen = false;
    const d = reduce ? 0 : 1;
    gsap.to(lbImg, { scale: 0.94, autoAlpha: 0, duration: 0.35 * d, ease: 'power2.in' });
    gsap.to(lb, { autoAlpha: 0, duration: 0.4 * d, delay: 0.1 * d, ease: 'power2.inOut', onComplete: () => {
      document.body.classList.remove('lightbox-open');
      lbImg.removeAttribute('src');
      if (lbFrom && lbFrom.focus) lbFrom.focus({ preventScroll: true });
    } });
  }
  $$('.portrait-image, .story-photo, .journey-image, .photo-card').forEach(box => {
    const img = $('img', box);
    if (!img) return;
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');
    box.setAttribute('aria-label', 'View photo: ' + (img.alt || 'photo'));
    box.classList.add('cin-zoomable');
    const open = () => openPhoto(img.currentSrc || img.src, img.alt, box);
    box.addEventListener('click', open);
    box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  lb.addEventListener('click', e => { if (e.target !== lbImg) closePhoto(); });
  lbClose.addEventListener('click', closePhoto);
  addEventListener('keydown', e => { if (e.key === 'Escape' && lbOpen) { e.stopPropagation(); closePhoto(); } }, true);

  /* ---------- curtain transition between chapters ---------- */
  const curtain = document.createElement('div');
  curtain.className = 'cin-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  curtain.innerHTML = '<div class="cin-slats">' + '<i></i>'.repeat(7) + '</div><div class="cin-curtain-label"><small></small><div><span></span></div></div>';
  document.body.appendChild(curtain);
  const slats = $$('.cin-slats i', curtain);
  const lNum = $('small', curtain), lText = $('span', curtain);
  gsap.set(lText, { yPercent: 115 });
  gsap.set(curtain, { autoAlpha: 0 });
  let busy = false;

  function scrollTarget(href) {
    if (href === '#top') return 0;
    const el = document.querySelector(href);
    return el ? el : null;
  }
  function jump(t) {
    if (lenis) lenis.scrollTo(t === 0 ? 0 : Math.max(0, t.getBoundingClientRect().top + scrollY - 72), { immediate: true, force: true });
    else if (t === 0) scrollTo(0, 0);
    else t.scrollIntoView({ behavior: 'auto' });
    ScrollTrigger.update();
  }

  function goTo(href) {
    const t = scrollTarget(href);
    if (t === null || busy) return;
    if (reduce) { jump(t); return; }
    busy = true;
    const top = t === 0 ? null : $('.section-top span', t);
    const parts = (top ? top.textContent : '00 / HELLO').split('/').map(s => s.trim());
    lNum.textContent = parts[0] || '';
    lText.textContent = parts[1] || parts[0];
    curtain.style.pointerEvents = 'auto';
    const idle = () => { busy = false; curtain.style.pointerEvents = 'none'; gsap.set(curtain, { autoAlpha: 0 }); gsap.set(lText, { yPercent: 115 }); };
    gsap.set(curtain, { autoAlpha: 1 });
    const tl = gsap.timeline({ onComplete: idle, onInterrupt: idle });
    tl.set(slats, { transformOrigin: '50% 100%' })
      .to(slats, { scaleY: 1, duration: 0.65, ease: 'power4.inOut', stagger: { each: 0.05, from: 'edges' } })
      .fromTo(lText, { yPercent: 115 }, { yPercent: 0, duration: 0.7, ease: 'expo.out' }, '-=0.3')
      .fromTo(lNum, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, '<')
      .add(() => jump(t), '+=0.12')
      .to(lText, { yPercent: -115, duration: 0.45, ease: 'power3.in' }, '+=0.22')
      .to(lNum, { autoAlpha: 0, duration: 0.3 }, '<')
      .set(slats, { transformOrigin: '50% 0%' })
      .to(slats, { scaleY: 0, duration: 0.7, ease: 'power4.inOut', stagger: { each: 0.05, from: 'edges' } }, '-=0.1');
  }

  /* ---------- chapter indicator ---------- */
  const scenes = $$('main .scene');
  const rail = document.createElement('div');
  rail.className = 'cin-chapter';
  rail.setAttribute('aria-hidden', 'true');
  rail.innerHTML = '<span class="cin-ch-num">01</span><span class="cin-ch-tot">/ ' + String(scenes.length).padStart(2, '0') + '</span><span class="cin-ch-name"><i>HELLO</i></span>';
  document.body.appendChild(rail);
  const rNum = $('.cin-ch-num', rail), rName = $('.cin-ch-name', rail);
  let current = -1;
  function setChapter(i) {
    if (i === current) return;
    const prev = current; current = i;
    const sec = scenes[i];
    const name = ($('.section-top span', sec)?.textContent.split('/').pop().trim()) || 'HELLO';
    rNum.textContent = String(i + 1).padStart(2, '0');
    const old = $('i', rName);
    const fresh = document.createElement('i');
    fresh.textContent = name;
    rName.appendChild(fresh);
    rName.style.width = fresh.offsetWidth + 14 + 'px';
    const dir = i > prev ? 1 : -1;
    gsap.fromTo(fresh, { yPercent: 110 * dir }, { yPercent: 0, duration: 0.7, ease: 'expo.out' });
    if (old) gsap.to(old, { yPercent: -110 * dir, duration: 0.5, ease: 'power3.in', onComplete: () => old.remove() });
  }
  scenes.forEach((sec, i) => ScrollTrigger.create({
    trigger: sec, start: 'top 55%', end: 'bottom 55%',
    onToggle: self => { if (self.isActive) setChapter(i); }
  }));
  setChapter(0);

  return { goTo };
}
