import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { prepareEntrances, initScroll } from './motion.js';
import { initUI } from './ui.js';
import { $, $$, reduce, isMobile } from './util.js';

gsap.registerPlugin(ScrollTrigger);
const root = document.documentElement;
root.classList.add('cin');
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
scrollTo(0, 0);

/* ---------- smooth scroll, driven by GSAP's ticker so everything shares one clock ---------- */
const lenis = reduce ? null : new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- WebGL world ---------- */
const canvas = document.createElement('canvas');
canvas.id = 'cinCanvas';
canvas.setAttribute('aria-hidden', 'true');
document.body.prepend(canvas);

const intro = $('#intro');
const anchors = [
  () => (intro && intro.isConnected ? $('.intro-object-stage') : null) || $('.portrait-stage'),
  () => $('.method-grid'),
  () => $('.skill-center'),
  () => $('#photoWorld')
];
const sc = createScene(canvas, { anchors, reduce, mobile: isMobile() });
if (sc) root.classList.add('has-gl'); else canvas.remove();

const ctx = { lenis, sc };

/* where each form morphs: between the bottom of one dark chapter and the top of the next */
const darkEls = ['.hero', '.manifesto', '.skills', '.outside'].map(s => $(s));
let windows = [];
function measure() {
  const y = scrollY;
  const edges = darkEls.map(el => { const r = el.getBoundingClientRect(); return { top: r.top + y, bottom: r.bottom + y }; });
  windows = [0, 1, 2].map(i => ({ a: edges[i].bottom - innerHeight * 0.5, b: edges[i + 1].top - innerHeight * 0.5 }));
}
function progress() {
  const y = scrollY; let p = 0;
  windows.forEach(w => { p += Math.min(1, Math.max(0, (y - w.a) / Math.max(1, w.b - w.a))); });
  return p;
}

if (sc) {
  /* render only while a dark chapter (or the intro) is actually on screen */
  const visible = new Set();
  const io = new IntersectionObserver(es => {
    es.forEach(e => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
    sc.state.active = visible.size > 0;
    canvas.style.visibility = sc.state.active ? 'visible' : 'hidden';
  }, { threshold: 0 });
  [intro, ...darkEls].filter(Boolean).forEach(el => io.observe(el));
  window.__cinForget = el => { visible.delete(el); io.unobserve(el); sc.state.active = visible.size > 0; };

  gsap.ticker.add((_, dtMs) => {
    sc.state.progress = progress();
    sc.frame(Math.min(0.05, dtMs / 1000));
  });
  window.addEventListener('resize', () => { sc.resize(); });
  if (reduce) { sc.state.fade.v = 1; window.addEventListener('scroll', () => sc.frame(0), { passive: true }); }
}

/* ---------- motion layers ---------- */
let entrances = { playIntro() {}, playHero() {} };
let ui = { goTo() { return false; } };
if (!reduce) {
  entrances = prepareEntrances(ctx);
  initScroll(ctx);
}
ui = initUI(ctx);

ScrollTrigger.addEventListener('refresh', measure);
measure();
const refresh = () => { ScrollTrigger.refresh(); measure(); };
addEventListener('load', refresh);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(refresh, 200); });

/* ---------- freeze scrolling under overlays ---------- */
if (lenis) {
  const sync = () => {
    const locked = document.body.classList.contains('menu-open') || document.body.classList.contains('lightbox-open') || $('#skillModal')?.classList.contains('open') || (intro && intro.isConnected);
    locked ? lenis.stop() : lenis.start();
  };
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  const modal = $('#skillModal'); if (modal) new MutationObserver(sync).observe(modal, { attributes: true, attributeFilter: ['class'] });
  sync();
}

/* ---------- loader → intro ---------- */
let introPlayed = false;
const runIntro = () => { if (introPlayed) return; introPlayed = true; entrances.playIntro(); };
window.addEventListener('cin:loaded', () => setTimeout(runIntro, 250));
if (!$('#loader')) runIntro();
setTimeout(runIntro, 6000); // safety net

/* ---------- launch: warp → iris → hero ---------- */
const iris = document.createElement('div');
iris.className = 'cin-iris';
iris.setAttribute('aria-hidden', 'true');
document.body.appendChild(iris);

function launch(target, done) {
  if (reduce || !sc) { done(); return; }
  const btn = $('#launch');
  const b = btn ? btn.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
  const R = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) + 40;

  const tl = gsap.timeline();
  tl.to(sc.state.warp, { v: 1, duration: 1.15, ease: 'power3.in' }, 0)
    .to('.intro-main', { scale: 1.1, autoAlpha: 0, duration: 0.8, ease: 'power2.in', transformOrigin: '30% 50%' }, 0.05)
    .to('.intro-head, .intro-bottomline', { autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, 0)
    .to('.intro-object-stage', { scale: 2.1, autoAlpha: 0, duration: 1.0, ease: 'power3.in' }, 0)
    .fromTo(iris, { clipPath: `circle(0px at ${cx}px ${cy}px)`, autoAlpha: 1 }, { clipPath: `circle(${R}px at ${cx}px ${cy}px)`, duration: 0.8, ease: 'power3.inOut' }, 0.5)
    .add(() => {
      done();                                   // removes the intro, marks the experience started
      if (window.__cinForget && intro) window.__cinForget(intro);
      scrollTo(0, 0); if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      refresh();
      gsap.set(iris, { clipPath: 'inset(0% 0% 0% 0%)' });
    }, 1.35)
    .to(iris, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.95, ease: 'expo.inOut' }, 1.4)
    .to(sc.state.warp, { v: 0, duration: 1.9, ease: 'expo.out' }, 1.4)
    .add(() => {
      entrances.playHero();
      if (lenis) lenis.start();
      if (target && target !== '#top') ui.goTo(target);
    }, 1.55)
    .set(iris, { autoAlpha: 0 });
}

/* leaving the intro also works with a scroll gesture or arrow key */
if (intro && !reduce) {
  const go = () => { const b = $('#launch'); if (b && intro.isConnected) b.click(); };
  let startY = null;
  addEventListener('wheel', e => { if (e.deltaY > 12) go(); }, { passive: true });
  addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchmove', e => { if (startY !== null && startY - e.touches[0].clientY > 50) { startY = null; go(); } }, { passive: true });
  addEventListener('keydown', e => { if (['ArrowDown', 'PageDown', ' '].includes(e.key) && document.activeElement?.id !== 'launch') { e.preventDefault(); go(); } });
}

if (location.search.includes('cin-debug')) window.__cin = { gsap, ScrollTrigger, sc, lenis };
window.cinematic = { launch, goTo: href => { ui.goTo(href); return true; }, lenis, ready: true };
