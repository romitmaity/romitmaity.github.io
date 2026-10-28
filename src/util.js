export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = matchMedia('(pointer:fine)').matches;
export const isMobile = () => innerWidth < 760;

/**
 * Wrap every character in an inline-block span (grouped by word so lines still
 * wrap correctly). Nested <em>/<i>/<b> are preserved. The original text is kept
 * on aria-label so screen readers read the heading as one phrase.
 *
 * opts.shallow — only split direct text nodes (used for the footer wordmark, whose
 * trailing ® is styled by an existing descendant selector).
 */
export function splitChars(el, opts = {}) {
  if (el._chars) return el._chars;
  if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  const chars = [];
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(seg => {
          if (!seg) return;
          if (/^\s+$/.test(seg)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span');
          w.className = 'cw'; w.setAttribute('aria-hidden', 'true');
          [...seg].forEach(ch => {
            const c = document.createElement('span');
            c.className = 'cc'; c.textContent = ch;
            w.appendChild(c); chars.push(c);
          });
          frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !opts.shallow) {
        walk(n);
      }
    });
  };
  walk(el);
  el._chars = chars;
  return chars;
}
