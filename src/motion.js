import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, splitChars, finePointer } from './util.js';

/* ------------------------------------------------------------------ *
 * Entrances: the intro (after the loader) and the hero (after launch).
 * Initial hidden states are set from JS, never CSS, so a failed script
 * can never leave the page invisible.
 * ------------------------------------------------------------------ */
export function prepareEntrances(ctx) {
  const { sc } = ctx;

  /* ---- intro ---- */
  const kinetic = $('.kinetic');
  const kchars = kinetic ? splitChars(kinetic) : [];
  const stage = $('.intro-object-stage');
  const stageOp = stage ? parseFloat(getComputedStyle(stage).opacity) || 1 : 1;
  const introSimple = $$('.intro-head, .intro-main > .eyebrow, .intro-bottomline p, #launch');

  gsap.set(kchars, { yPercent: 120, rotationZ: 6, transformOrigin: '0% 100%' });
  gsap.set(introSimple, { autoAlpha: 0 });
  gsap.set('.intro-head', { y: -18 });
  gsap.set('.intro-main > .eyebrow, .intro-bottomline p', { y: 22 });
  gsap.set('.intro-side-note, .intro-shape', { autoAlpha: 0 });
  if (stage) gsap.set(stage, { autoAlpha: 0, scale: 0.84, y: 50 });

  function playIntro() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to(sc ? sc.state.fade : {}, { v: 1, duration: 2.8, ease: 'power2.out' }, 0)
      .to(kchars, { yPercent: 0, rotationZ: 0, duration: 1.35, stagger: 0.024 }, 0.1)
      .to('.intro-head', { autoAlpha: 1, y: 0, duration: 1.1 }, 0.2)
      .to('.intro-main > .eyebrow', { autoAlpha: 1, y: 0, duration: 1.1 }, 0.4)
      .to(stage, { autoAlpha: stageOp, scale: 1, y: 0, duration: 2 }, 0.25)
      .to('.intro-shape, .intro-side-note', { autoAlpha: 1, duration: 1.6, ease: 'power2.out' }, 0.7)
      .to('.intro-bottomline p', { autoAlpha: 1, y: 0, duration: 1.1 }, 1.0)
      .to('#launch', { autoAlpha: 1, duration: 1.1, ease: 'power2.out' }, 1.15);
    return tl;
  }

  /* ---- hero (hidden until launch) ---- */
  const heroTitleChars = $$('.hero-title b').flatMap(b => splitChars(b));
  const portrait = $('.portrait-image');
  const heroUI = $$('.hero .eyebrow, .hero-desc, .hero-actions, .hero-meta, .hero-bottom, .visual-caption, .crosshair, .portrait-index');

  gsap.set(heroTitleChars, { yPercent: 120, rotationZ: 5, transformOrigin: '0% 100%' });
  gsap.set(heroUI, { autoAlpha: 0, y: 30 });
  gsap.set('.portrait-orbit, .floating-chip, .portrait-backdrop', { autoAlpha: 0 });
  gsap.set('.floating-chip', { scale: 0.3 });
  if (portrait) {
    gsap.set(portrait, { clipPath: 'inset(100% -40px -40px -40px)' });
    gsap.set($('img', portrait), { '--ps': 1.55 });
  }

  function playHero() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero .eyebrow', { autoAlpha: 1, y: 0, duration: 1 }, 0)
      .to(heroTitleChars, { yPercent: 0, rotationZ: 0, duration: 1.35, stagger: 0.02 }, 0.05)
      .to('.portrait-backdrop', { autoAlpha: 1, duration: 2 }, 0.1)
      .to(portrait, { clipPath: 'inset(0% -40px -40px -40px)', duration: 1.7, ease: 'expo.inOut' }, 0.15)
      .to($('img', portrait), { '--ps': 1, duration: 2.4 }, 0.15)
      .to('.portrait-orbit', { autoAlpha: 1, duration: 1.6, stagger: 0.16, ease: 'power2.out' }, 0.55)
      .to('.hero-desc, .hero-actions, .hero-meta', { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 }, 0.65)
      .to('.floating-chip', { autoAlpha: 1, scale: 1, duration: 0.9, ease: 'back.out(2.4)', stagger: 0.14 }, 0.95)
      .to('.visual-caption, .crosshair, .portrait-index, .hero-bottom', { autoAlpha: 1, y: 0, duration: 1, stagger: 0.06 }, 1.1)
      .add(() => { if (portrait) gsap.set(portrait, { clearProps: 'clipPath' }); }, '>');
    return tl;
  }

  return { playIntro, playHero };
}

/* ------------------------------------------------------------------ *
 * Everything that happens while scrolling.
 * ------------------------------------------------------------------ */
export function initScroll(ctx) {
  const { lenis } = ctx;

  /* generic fade-ups from the original markup (hero ones are handled by playHero) */
  const ups = $$('.reveal-up').filter(el => !el.closest('.hero'));
  gsap.set(ups, { autoAlpha: 0, y: 44 });
  ScrollTrigger.batch(ups, {
    start: 'top 90%', once: true,
    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1, overwrite: true })
  });

  /* big headings: letters flip up out of 3D space */
  $$('.giant-heading, .split-heading, .contact-title').forEach(h => {
    const chars = splitChars(h);
    gsap.set(chars, { opacity: 0, yPercent: 70, rotationX: -80, transformOrigin: '50% 100%', transformPerspective: 800 });
    gsap.to(chars, {
      opacity: 1, yPercent: 0, rotationX: 0, duration: 1.2, ease: 'expo.out', stagger: 0.024,
      scrollTrigger: { trigger: h, start: 'top 86%', once: true }
    });
  });

  /* manifesto: the sentence is "read" as you scroll; cards swing up out of depth */
  const mTitle = $('.manifesto-title');
  if (mTitle) {
    const c = splitChars(mTitle);
    gsap.set(c, { opacity: 0.12 });
    gsap.to(c, {
      opacity: 1, ease: 'none', stagger: 0.07,
      scrollTrigger: { trigger: mTitle, start: 'top 78%', end: 'bottom 48%', scrub: 0.5 }
    });
  }
  const mCards = $$('.method-card');
  if (mCards.length) {
    gsap.fromTo(mCards,
      { y: 150, rotationX: 58, z: -200, autoAlpha: 0, transformOrigin: '50% 100%', transformPerspective: 900 },
      {
        y: 0, rotationX: 0, z: 0, autoAlpha: 1, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: '.method-grid', start: 'top 94%', end: 'top 46%', scrub: 0.8 }
      });
  }

  /* chapter panels slide over each other: light sections open up from a rounded card */
  $$('.light-scene').forEach(sec => {
    gsap.fromTo(sec,
      { clipPath: 'inset(5vh 4vw 0vh 4vw round 48px 48px 0px 0px)' },
      {
        clipPath: 'inset(0vh 0vw 0vh 0vw round 0px 0px 0px 0px)', ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top 98%', end: 'top 36%', scrub: true }
      });
  });

  /* hero drifts apart as you leave it */
  if ($('.hero')) {
    const st = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('.hero-copy', { yPercent: -10, ease: 'none', scrollTrigger: st });
    gsap.to('.hero-visual', { yPercent: 9, scale: 0.95, ease: 'none', scrollTrigger: st });
  }

  /* image parallax (uses CSS vars so hover transforms keep working) */
  $$('.story-photo, .journey-image').forEach(box => {
    const img = $('img', box);
    if (!img) return;
    const face = box.classList.contains('story-photo');   // gentler drift so the face stays in frame
    const amt = face ? 3.5 : 9, zoom = face ? 1.08 : 1.18;
    gsap.fromTo(img, { '--py': -amt, '--ps': zoom }, {
      '--py': amt, '--ps': zoom, ease: 'none',
      scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* journey rows: copy rises, photo is unveiled with a wipe */
  $$('.journey-item').forEach(item => {
    const parts = $$('.journey-date, .journey-mark, .journey-copy > *', item);
    const photo = $('.journey-image', item);
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, scrollTrigger: { trigger: item, start: 'top 84%', once: true } });
    gsap.set(parts, { autoAlpha: 0, y: 34 });
    if (photo) gsap.set(photo, { clipPath: 'inset(0 0 0 100%)' });
    tl.to(parts, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.07 }, 0);
    if (photo) tl.to(photo, { clipPath: 'inset(0 0 0 0%)', duration: 1.3, ease: 'expo.inOut' }, 0.15);
  });

  /* project cards: slide in, then stack — earlier cards recede as the next one covers them */
  const cards = $$('.project-card');
  cards.forEach((card, i) => {
    gsap.from(card, { y: 90, autoAlpha: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 94%', once: true } });
    const next = cards[i + 1];
    if (next) {
      gsap.to(card, {
        '--stack': 0.9, '--dim': 0.6, ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 82%', end: 'top 16%', scrub: true }
      });
    }
  });

  /* ticker: speed and lean follow scroll velocity */
  const track = $('.ticker-track');
  if (track) {
    track.style.animation = 'none';
    let x = 0, skew = 0;
    const half = () => track.scrollWidth / 2;
    gsap.ticker.add((_, dtMs) => {
      const v = lenis ? lenis.velocity : 0;
      x -= (70 + v * 26) * (dtMs / 1000);
      const h = half();
      if (x <= -h) x += h; else if (x > 0) x -= h;
      skew += (gsap.utils.clamp(-9, 9, -v * 0.45) - skew) * 0.1;
      track.style.transform = `translate3d(${x}px,0,0) skewX(${skew}deg)`;
    });
  }

  /* pinned gallery: the camera dollies through the photos, then pointer parallax takes over */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 700px)', () => {
    const world = $('#photoWorld');
    if (!world) return;
    const photos = $$('.photo-card', world);
    gsap.set(photos, { '--z': -1200, '--s': 0.7, '--o': 0, '--py': 150 });
    gsap.set('.photo-stamp', { autoAlpha: 0 });
    gsap.timeline({
      scrollTrigger: { trigger: world, start: 'center center', end: '+=115%', pin: true, scrub: 0.7, anticipatePin: 1 }
    })
      .to(photos, { '--z': 0, '--s': 1, '--o': 1, '--py': 0, duration: 1, ease: 'power3.out', stagger: 0.24 })
      .to('.photo-stamp', { autoAlpha: 1, duration: 0.4 }, '>-0.2');

    if (!finePointer) return;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = e => {
      const r = world.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width - 0.5;
      mouse.ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => { mouse.tx = 0; mouse.ty = 0; };
    const tick = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.07; mouse.y += (mouse.ty - mouse.y) * 0.07;
      photos.forEach(p => {
        const d = parseFloat(p.dataset.depth) || 0.1;
        p.style.setProperty('--mx', (-mouse.x * d * 300).toFixed(2));
        p.style.setProperty('--my', (-mouse.y * d * 260).toFixed(2));
      });
    };
    world.addEventListener('pointermove', onMove);
    world.addEventListener('pointerleave', onLeave);
    gsap.ticker.add(tick);
    return () => { world.removeEventListener('pointermove', onMove); world.removeEventListener('pointerleave', onLeave); gsap.ticker.remove(tick); };
  });

  /* contact: the wordmark rises letter by letter, then waves under the cursor */
  const foot = $('.giant-footer');
  if (foot) {
    const chars = splitChars(foot, { shallow: true });
    gsap.set(chars, { yPercent: 110 });
    gsap.to(chars, { yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: 0.04, scrollTrigger: { trigger: foot, start: 'top 94%', once: true } });
    if (finePointer) {
      foot.addEventListener('pointermove', e => {
        chars.forEach(c => {
          const r = c.getBoundingClientRect();
          const d = Math.abs(e.clientX - (r.left + r.width / 2));
          const k = Math.exp(-(d * d) / (2 * 130 * 130));
          gsap.to(c, { yPercent: -k * 16, scaleY: 1 + k * 0.09, transformOrigin: '50% 100%', duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        });
      });
      foot.addEventListener('pointerleave', () => gsap.to(chars, { yPercent: 0, scaleY: 1, duration: 0.9, ease: 'elastic.out(1,.5)', stagger: 0.015 }));
    }
  }
}
