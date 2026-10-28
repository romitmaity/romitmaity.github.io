ROMIT MAITY — CINEMATIC PORTFOLIO v4
====================================

RUN IT
  Just open index.html (double-click works), or use VS Code Live Server.
  No install needed — everything is bundled, fonts included (works offline).

WHAT'S NEW IN v4 (your v3 files are kept; v4 is a layer on top)
  1. WebGL particle world (Three.js) — one canvas behind the dark chapters that
     morphs as you scroll: galaxy (hero) -> growth bars (method) -> orbit sphere
     (toolkit) -> Hampta-style mountain ridges (off-screen). Each form is locked
     to a real element on the page and parts around your cursor.
  2. Hyperspace launch — "Enter the experience" triggers a star-streak warp, a
     vermilion iris from the button, then the hero assembles itself.
  3. Smooth, inertial scrolling (Lenis) driving GSAP ScrollTrigger.
  4. Headings flip up letter-by-letter in 3D; the manifesto sentence is "read"
     as you scroll; method cards swing up out of depth.
  5. Project cards stack and recede (sticky stack) with tilt + moving glare.
  6. Photo gallery is pinned and the camera dollies through the photos.
  7. Chapter curtain transition (menu / buttons) with a huge chapter title.
  8. Light chapters slide over the dark ones as rounded panels.
  9. Ticker speed/lean follow scroll velocity; footer wordmark waves under the
     cursor; magnetic buttons; cursor labels (OPEN / LOOK / ENTER...).
 10. Vertical chapter indicator on the left edge.
 11. Scroll gesture / arrow key also enters from the intro.
 12. Click any photo (portrait, journey, trek gallery) to view it uncropped;
     Esc, the Close button, or clicking outside closes it.

SAFETY NETS
  - Adaptive quality: if a device renders slowly, pixel ratio then particle
    count are reduced automatically.
  - prefers-reduced-motion: no smooth scroll, no scroll animation, static world.
  - No WebGL or script failure: falls back to your original v3 behaviour.
  - Canvas only renders while a dark chapter is on screen (saves battery).

FILES
  index.html          your markup (links + script order updated)
  style.css           your v3 styles, untouched
  cinematic.css       all v4 styling (scoped under html.cin)
  script.js           your v3 logic, with small hooks (original kept as fallback)
  assets/js/cinematic.js   built bundle (three + gsap + lenis + src/)
  assets/fonts/       self-hosted Space Grotesk, DM Mono, Manrope
  src/                readable source for the bundle

EDITING THE MOTION
  npm install
  npm run build        (or: npm run watch)
  src/scene.js   particle forms, colours, density
  src/motion.js  scroll animations and entrances
  src/ui.js      cursor, magnetic, curtain, chapter indicator
  src/main.js    boot, launch sequence

TIPS
  - Tune particle look in src/scene.js (shader: point size, brightness).
  - Add ?cin-lite to the URL to preview the reduced-quality mode.
