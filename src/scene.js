/*
 * Particle universe.
 * One fixed canvas, one Points object. Every particle owns a position in each of
 * four "forms" (galaxy / growth-city / orbit sphere / mountain range). The vertex
 * shader blends between them using scroll-driven weights, so the morph costs
 * nothing on the CPU after setup. Each form is anchored to a DOM element so the
 * WebGL world stays welded to the page while the page scrolls.
 */
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute,
  Points, ShaderMaterial, AdditiveBlending, Vector2, Vector3, Vector4
} from 'three';

const TAU = Math.PI * 2;
const CAM_Z = 9;

/* ---------- deterministic random + noise ---------- */
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = r => {
  let u = 0; while (!u) u = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * r());
};
function makeNoise(r) {
  const perm = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  const P = new Uint8Array(512);
  for (let i = 0; i < 512; i++) P[i] = perm[i & 255];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const h = (x, y) => P[(P[x & 255] + y) & 511] / 255;
  return (x, y) => {
    const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    const u = fade(fx), v = fade(fy);
    const a = h(ix, iy), b = h(ix + 1, iy), c = h(ix, iy + 1), d = h(ix + 1, iy + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}
const rotX = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c]; };
const rotY = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c]; };
const rotZ = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]]; };
const deg = d => d * Math.PI / 180;

/* ---------- the four forms (world units, built for a 900px-tall viewport) ---------- */
function buildForms(N) {
  const r = rng(7);
  const noise = makeNoise(rng(19));
  const f = [0, 1, 2, 3].map(() => new Float32Array(N * 3));
  const rnd = new Float32Array(N * 4);

  for (let i = 0; i < N; i++) {
    rnd[i * 4] = r(); rnd[i * 4 + 1] = r(); rnd[i * 4 + 2] = r(); rnd[i * 4 + 3] = r();
  }

  // 0 — spiral galaxy, tilted so it reads as a disc in perspective
  for (let i = 0; i < N; i++) {
    let p;
    if (i < N * 0.13) {
      p = [gauss(r) * 0.5, gauss(r) * 0.3, gauss(r) * 0.5];
    } else {
      const rad = Math.pow(r(), 0.72) * 6.4 + 0.35;
      const arm = Math.floor(r() * 3);
      const ang = rad * 0.66 + arm * (TAU / 3) + gauss(r) * 0.2 * (0.35 + rad * 0.07);
      const sp = 0.16 * (0.4 + rad * 0.12);
      p = [Math.cos(ang) * rad + gauss(r) * sp, gauss(r) * 0.12 * (1.1 - rad / 8), Math.sin(ang) * rad + gauss(r) * sp];
    }
    p = rotZ(rotX(p, deg(-62)), deg(18));
    f[0].set(p, i * 3);
  }

  // 1 — growth city: a bar field that climbs left to right (data → decisions)
  {
    const G = 15, cell = 0.82, cols = [];
    for (let ix = 0; ix < G; ix++) for (let iz = 0; iz < G; iz++) {
      const trend = 0.35 + 0.95 * (ix / (G - 1));
      const h = (0.35 + Math.pow(noise(ix * 0.34 + 3, iz * 0.34 + 9), 1.4) * 3.6) * trend;
      cols.push([ix, iz, h]);
    }
    for (let i = 0; i < N; i++) {
      const c = cols[Math.floor(r() * cols.length)];
      const cx = (c[0] - G / 2) * cell, cz = (c[1] - G / 2) * cell * 0.9;
      const cap = r() < 0.27;
      const j = cap ? 0.2 : 0.045;
      const y = cap ? c[2] : c[2] * (0.1 + 0.9 * r());
      let p = [cx + (r() - 0.5) * cell * (cap ? 0.8 : 0.25), y - 1.7, cz + (r() - 0.5) * cell * (cap ? 0.8 : 0.25) + gauss(r) * j * 0.1];
      p = rotX(rotY(p, deg(-28)), 0.42);
      f[1].set(p, i * 3);
    }
  }

  // 2 — orbit sphere: a core, plus three inclined rings (echoes the DOM orbits)
  {
    const rings = [
      { rad: 1.75, rx: 68, rz: -15, ry: 0 },
      { rad: 2.3, rx: 0, rz: 20, ry: 67 },
      { rad: 2.95, rx: 75, rz: 60, ry: 0 }
    ];
    for (let i = 0; i < N; i++) {
      let p;
      if (i < N * 0.48) {
        const k = i + 0.5, phi = Math.acos(1 - 2 * k / (N * 0.48)), th = Math.PI * (1 + Math.sqrt(5)) * k;
        const rr = 1.12 + gauss(r) * 0.012;
        p = [rr * Math.cos(th) * Math.sin(phi), rr * Math.cos(phi), rr * Math.sin(th) * Math.sin(phi)];
      } else {
        const g = rings[i % 3], a = r() * TAU, rr = g.rad + gauss(r) * 0.018;
        p = [Math.cos(a) * rr, gauss(r) * 0.018, Math.sin(a) * rr];
        p = rotZ(rotY(rotX(p, deg(g.rx)), deg(g.ry)), deg(g.rz));
      }
      f[2].set(p, i * 3);
    }
  }

  // 3 — Hampta Pass: ridged-noise mountain range receding into the distance
  {
    const height = (x, z) => {
      let a = 1, fr = 0.15, s = 0, w = 0;
      for (let o = 0; o < 5; o++) {
        const n = noise(x * fr + 7.3 * o, z * fr * 1.25 + 3.1 * o);
        const rg = 1 - Math.abs(2 * n - 1);
        s += rg * rg * a; w += a; a *= 0.5; fr *= 2.05;
      }
      return s / w;
    };
    // contour rows: each particle sits on one of many ridge-lines, so silhouettes read at any density
    const ROWS = 26, Z0 = -12, Z1 = 1.5;
    for (let i = 0; i < N; i++) {
      let p;
      if (i < N * 0.06) {
        p = [(r() - 0.5) * 26, 2.6 + r() * 4.5, -12 + r() * 5];        // stars above the ridgeline
      } else {
        const row = Math.floor(r() * ROWS);
        const z = Z0 + (row / (ROWS - 1)) * (Z1 - Z0);
        const x = (r() - 0.5) * 22;
        const depth = (z - Z0) / (Z1 - Z0);                             // 0 far → 1 near
        const amp = 6.2 - 4.6 * depth;
        const edge = 1 - Math.pow(Math.abs(x) / 11, 5);                 // soften the far left/right ends
        p = [x, -2.6 + height(x, z) * amp * edge + gauss(r) * 0.012, z];
      }
      f[3].set(rotX(p, deg(15)), i * 3);
    }
  }
  return { f, rnd };
}

/* ---------- shaders ---------- */
const VERT = /* glsl */`
attribute vec3 t1; attribute vec3 t2; attribute vec3 t3; attribute vec4 aRnd;
uniform float uTime, uPix, uWarp, uWarpZ, uScale, uRotY, uOpacity, uMouseK;
uniform vec4 uW, uRed, uBright;
uniform vec3 uOff;
uniform vec2 uMouse;
varying vec3 vCol; varying float vA;
void main(){
  vec3 p = position*uW.x + t1*uW.y + t2*uW.z + t3*uW.w;
  float settle = max(max(uW.x,uW.y),max(uW.z,uW.w));
  float turb = 1.0 - settle;

  float tt = uTime*(0.25 + aRnd.z*0.5);
  p += vec3(sin(tt + aRnd.y*6.283 + p.y*0.9), cos(tt*1.1 + aRnd.x*6.283 + p.z*0.8), sin(tt*0.9 + aRnd.z*6.283 + p.x*0.7)) * (0.04 + 0.07*aRnd.y);
  vec3 dir = normalize(vec3(sin(aRnd.x*40.0), cos(aRnd.y*37.0), sin(aRnd.z*53.0)) + 0.001);
  p += dir * turb*turb * 14.0 * (0.3 + aRnd.w);

  float cy = cos(uRotY), sy = sin(uRotY);
  p.xz = mat2(cy,-sy,sy,cy) * p.xz;
  p *= uScale;
  p += uOff;

  vec2 d2 = p.xy - uMouse; float dist = length(d2);
  float m = smoothstep(2.4, 0.0, dist) * uMouseK;
  p.xy += (d2/(dist + 0.001)) * m * 0.8;
  p.z  += m * 1.3 * (aRnd.y - 0.25);

  float zr = mod(p.z + uWarpZ*(0.5 + aRnd.x) + 18.0, 36.0) - 18.0;
  p.z = mix(p.z, zr, clamp(uWarp, 0.0, 1.0));
  p.xy *= 1.0 + uWarp*0.4*aRnd.y;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = (0.55 + aRnd.x*1.7) * (1.0 + uWarp*1.6) * (1.0 + m*0.6);
  gl_PointSize = clamp(size * uPix * 3.0 * (9.0 / -mv.z), 0.0, 20.0 * uPix);

  float redAmt = dot(uW, uRed);
  float isRed = step(1.0 - redAmt, aRnd.w);
  vec3 bone = vec3(0.949, 0.937, 0.914);
  vec3 red  = vec3(0.941, 0.267, 0.196);
  vCol = mix(bone*1.05, red*1.35, isRed);
  vCol = mix(vCol, red*1.3, m*0.7);
  float tw = 0.72 + 0.28*sin(uTime*(1.0 + aRnd.z*3.0) + aRnd.y*30.0);
  float depthFade = smoothstep(1.5, 5.0, -mv.z) * (1.0 - smoothstep(16.0, 34.0, -mv.z));
  vA = dot(uW, uBright) * tw * (0.3 + 0.7*aRnd.y) * depthFade * uOpacity + m*0.35;
}`;

const FRAG = /* glsl */`
varying vec3 vCol; varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d); a = a*a*(0.6 + 0.9*a);
  gl_FragColor = vec4(vCol, a * vA);
}`;

/* ---------- public factory ---------- */
export function createScene(canvas, { anchors, reduce, mobile }) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { return null; }
  if (!renderer.getContext()) return null;

  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, 1, 0.1, 80);
  camera.position.set(0, 0, CAM_Z);

  const lowEnd = (navigator.hardwareConcurrency || 8) <= 4;
  const N = mobile ? 9000 : lowEnd ? 16000 : 28000;
  const { f, rnd } = buildForms(N);

  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(f[0], 3));
  geo.setAttribute('t1', new BufferAttribute(f[1], 3));
  geo.setAttribute('t2', new BufferAttribute(f[2], 3));
  geo.setAttribute('t3', new BufferAttribute(f[3], 3));
  geo.setAttribute('aRnd', new BufferAttribute(rnd, 4));

  const U = {
    uTime: { value: 0 }, uPix: { value: dpr }, uWarp: { value: 0 }, uWarpZ: { value: 0 },
    uScale: { value: 1 }, uRotY: { value: 0 }, uOpacity: { value: 0 }, uMouseK: { value: 0 },
    uW: { value: new Vector4(1, 0, 0, 0) },
    uRed: { value: new Vector4(0.24, 0.12, 0.32, 0.1) },
    uBright: { value: new Vector4(1.15, 0.8, 1.2, 1.7) },
    uOff: { value: new Vector3() }, uMouse: { value: new Vector2(99, 99) }
  };
  const mat = new ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, uniforms: U,
    transparent: true, depthWrite: false, depthTest: false, blending: AdditiveBlending
  });
  const points = new Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  /* state the page drives */
  const state = {
    progress: 0,                 // 0..3, which form we are at
    warp: { v: 0 },              // hyperspace amount
    fade: { v: 0 },              // overall opacity
    pointer: { x: 0, y: 0, active: false },
    active: true,                // false when the canvas is fully covered
    stops: [0, 1, 2, 3].map(() => 0)
  };

  /* adaptive quality: if frames run long, shed pixel ratio first, then particles */
  let ema = 16, level = 0, slowFrames = 0, curDpr = dpr;
  function degrade(to) {
    if (to <= level) return;
    level = to;
    if (level >= 1) { curDpr = Math.min(curDpr, 1); renderer.setPixelRatio(curDpr); U.uPix.value = curDpr; renderer.setSize(vw, vh, false); geo.setDrawRange(0, Math.floor(N * 0.65)); }
    if (level >= 2) { curDpr = Math.min(curDpr, 0.8); renderer.setPixelRatio(curDpr); U.uPix.value = curDpr; renderer.setSize(vw, vh, false); geo.setDrawRange(0, Math.floor(N * 0.32)); }
  }

  const mouse = new Vector2(99, 99);
  const camSmooth = new Vector2();
  let vw = 1, vh = 1, fovApplied = 50, warpZ = 0, time = 0;
  const off = new Vector3(), tmp = new Vector3();

  function resize() {
    vw = window.innerWidth; vh = window.innerHeight;
    renderer.setSize(vw, vh, false);
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
  }
  resize();
  if (/cin-lite/.test(location.search)) setTimeout(() => degrade(2), 0);

  /* scroll progress → weights with a plateau so each form "holds" while on screen */
  function weights(p) {
    const i = Math.min(2, Math.max(0, Math.floor(p)));
    let fr = Math.min(1, Math.max(0, p - i));
    fr = fr * fr * (3 - 2 * fr);
    fr = fr * fr * (3 - 2 * fr);               // double smoothstep = long plateau, quick morph
    const w = [0, 0, 0, 0];
    w[i] = 1 - fr; w[i + 1] = fr;
    return w;
  }

  function anchorOffset(idx, worldPerPx) {
    const el = anchors[idx] && anchors[idx]();
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return [(rect.left + rect.width / 2 - vw / 2) * worldPerPx, -(rect.top + rect.height / 2 - vh / 2) * worldPerPx];
  }

  /* shape scale follows the viewport so the world stays proportioned to the DOM */
  const sizeFor = [1.0, 0.92, 1.0, 1.0];

  function frame(dt) {
    if (!state.active && !reduce) return;
    time += reduce ? 0 : dt;
    ema += (dt * 1000 - ema) * 0.05;
    if (ema > 34 && time > 2.5) { if (++slowFrames > 90) { slowFrames = 0; degrade(level + 1); } } else slowFrames = 0;

    const fov = 50 + state.warp.v * 62;
    if (Math.abs(fov - fovApplied) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); fovApplied = fov; }
    warpZ += dt * state.warp.v * 46;

    const w = weights(state.progress);
    U.uW.value.set(w[0], w[1], w[2], w[3]);

    const worldPerPx = (2 * Math.tan(deg(fovApplied) / 2) * CAM_Z) / vh;
    const k = Math.min(1.3, Math.max(0.62, vh / 900));
    let sc = 0; off.set(0, 0, 0);
    for (let i = 0; i < 4; i++) {
      if (w[i] < 0.002) continue;
      const o = anchorOffset(i, worldPerPx);
      sc += w[i] * sizeFor[i];
      if (o) { off.x += w[i] * o[0]; off.y += w[i] * o[1]; }
    }
    // on narrow screens nudge the world toward centre so it never fights the copy
    const narrow = vw < 760 ? 0.55 : 1;
    U.uOff.value.copy(off);
    U.uScale.value = k * (sc || 1) * narrow;

    // calmer rotation for the mountains so the horizon stays level
    const calm = 1 - 0.9 * w[3];
    U.uRotY.value = (time * 0.05 + state.progress * 0.55) * calm;

    // pointer → world plane, smoothed; repulsion only for fine pointers
    const halfH = Math.tan(deg(fovApplied) / 2) * CAM_Z, halfW = halfH * camera.aspect;
    const tx = state.pointer.x * halfW, ty = state.pointer.y * halfH;
    mouse.x += (tx - mouse.x) * 0.16; mouse.y += (ty - mouse.y) * 0.16;
    U.uMouse.value.copy(mouse);
    U.uMouseK.value += ((state.pointer.active && !mobile ? 1 : 0) - U.uMouseK.value) * 0.06;

    // gentle camera parallax gives the world depth against the flat DOM
    camSmooth.x += (state.pointer.x * 0.55 - camSmooth.x) * 0.04;
    camSmooth.y += (state.pointer.y * 0.35 - camSmooth.y) * 0.04;
    camera.position.set(camSmooth.x, camSmooth.y, CAM_Z);
    camera.lookAt(0, 0, 0);

    U.uTime.value = time;
    U.uWarp.value = state.warp.v;
    U.uWarpZ.value = warpZ;
    U.uOpacity.value = state.fade.v;
    renderer.render(scene, camera);
  }

  return { state, frame, resize, count: N, canvas };
}
