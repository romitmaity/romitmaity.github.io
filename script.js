(()=>{'use strict';const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];const loader=$('#loader'),intro=$('#intro'),wipe=$('#wipe'),flash=$('#clickFlash');let entered=false;
// Animated loading meter, then reveal the original experience.
let n=0;const counter=setInterval(()=>{n+=Math.floor(Math.random()*8)+3;if(n>100)n=100;$('#loadNum').textContent=String(n).padStart(2,'0');$('.load-line i').style.width=n+'%';if(n===100){clearInterval(counter);setTimeout(()=>{loader.classList.add('loaded');window.dispatchEvent(new Event('cin:loaded'))},280);setTimeout(()=>loader.remove(),1400)}},65);
function launch(target='#top'){if(entered)return;entered=true;if(window.cinematic&&window.cinematic.launch){window.cinematic.launch(target,()=>{intro.classList.add('launched');document.body.classList.add('experience-started');intro.remove()});return}wipe.classList.remove('go');void wipe.offsetWidth;wipe.classList.add('go');setTimeout(()=>{intro.classList.add('launched');document.body.classList.add('experience-started');setTimeout(()=>intro.remove(),900);if(target&&target!=='#top')setTimeout(()=>document.querySelector(target)?.scrollIntoView({behavior:'smooth'}),260)},390)}$('#launch').addEventListener('click',()=>launch());
// navigation panel
const panel=$('#menuPanel');function menu(open){panel.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);$('#menuToggle b').textContent=open?'×':'＋'}$('#menuToggle').addEventListener('click',()=>menu(!panel.classList.contains('open')));$('#menuClose').addEventListener('click',()=>menu(false));$$('.menu-panel a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const href=a.getAttribute('href');menu(false);if(window.cinematic&&window.cinematic.goTo){setTimeout(()=>window.cinematic.goTo(href),380);return}flash.classList.remove('flash');void flash.offsetWidth;flash.classList.add('flash');setTimeout(()=>document.querySelector(href)?.scrollIntoView({behavior:'smooth'}),220)}));
// Animated transitions for in-page links, with a curtain wipe.
$$('a[data-transition]').forEach(a=>a.addEventListener('click',e=>{const href=a.getAttribute('href');if(!href||!href.startsWith('#'))return;e.preventDefault();if(!entered){launch(href);return}if(window.cinematic&&window.cinematic.goTo){window.cinematic.goTo(href);return}flash.classList.remove('flash');void flash.offsetWidth;flash.classList.add('flash');setTimeout(()=>document.querySelector(href)?.scrollIntoView({behavior:'smooth'}),150)}));
// Scroll progress and scene entrance transitions.
const progress=$('.progress span');function scrollFx(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}window.addEventListener('scroll',scrollFx,{passive:true});scrollFx();const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('entered');$$('.reveal-up',e.target).forEach((el,i)=>setTimeout(()=>el.classList.add('seen'),i*100));io.unobserve(e.target)}}),{threshold:.14});$$('.scene').forEach(s=>io.observe(s));
// Numbers count up when visible.
const statsIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const end=Number(el.dataset.count);const duration=1200;const start=performance.now();function tick(t){const p=Math.min(1,(t-start)/duration);const val=end*p;el.textContent=end===8.46?val.toFixed(2):Math.round(val).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);statsIO.unobserve(el)}),{threshold:.6});$$('[data-count]').forEach(el=>statsIO.observe(el));
// Magnetic-ish custom cursor and hover state.
const core=$('.cursor-core'),halo=$('.cursor-halo');let mx=innerWidth/2,my=innerHeight/2,hx=mx,hy=my;window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;core.style.left=mx+'px';core.style.top=my+'px'});function cursorLoop(){hx+=(mx-hx)*.17;hy+=(my-hy)*.17;halo.style.left=hx+'px';halo.style.top=hy+'px';requestAnimationFrame(cursorLoop)}cursorLoop();$$('a,button,.project-card,.photo-card,.tilt-card').forEach(el=>{el.addEventListener('mouseenter',()=>halo.classList.add('active'));el.addEventListener('mouseleave',()=>halo.classList.remove('active'))});
// Perspective tilt for hero and cards; gentle enough to remain usable.
$$(window.cinematic?'.tilt-card':'.tilt-card,.project-card').forEach(card=>{card.addEventListener('mousemove',e=>{if(innerWidth<800)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1100px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-3px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});const stage=$('#portraitStage');stage?.addEventListener('mousemove',e=>{if(innerWidth<800)return;const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('.portrait-image',stage).style.transform=`rotateY(${-9+x*14}deg) rotateX(${3-y*8}deg) translateZ(20px)`});stage?.addEventListener('mouseleave',()=>{$('.portrait-image',stage).style.transform=''})
// Skill orbit nodes: animated details + modal pop-out.
const modal=$('#skillModal');$$('.skill-node').forEach(node=>node.addEventListener('click',()=>{const title=node.dataset.skill,desc=node.dataset.desc;$$('.skill-node').forEach(n=>n.classList.toggle('selected',n===node));$('#skillDetail small').textContent='SKILL CLUSTER / SELECTED';$('#skillDetail h3').textContent=title;$('#skillDetail p').textContent=desc;$('#modalTitle').textContent=title;$('#modalDesc').textContent=desc;$('#modalLabel').textContent='THE TOOLKIT / '+title.toUpperCase();modal.classList.add('open');flash.classList.remove('flash');void flash.offsetWidth;flash.classList.add('flash')}));function closeModal(){modal.classList.remove('open')}$('#skillModalClose').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
// 3D photo stack follows pointer and settles into a fan on hover.
const world=window.cinematic?null:$('#photoWorld');world?.addEventListener('mousemove',e=>{if(innerWidth<700)return;const r=world.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$$('.photo-card',world).forEach(card=>{const d=Number(card.dataset.depth);card.style.translate=`${x*-28*d*10}px ${y*-25*d*10}px`;card.style.filter=`brightness(${1-Math.abs(x)*.08})`})});world?.addEventListener('mouseleave',()=>$$('.photo-card',world).forEach(c=>{c.style.translate='';c.style.filter=''}));
// Keyboard controls: Escape closes layers, / opens index, top-level keys don't hijack typing.
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu(false);closeModal()}if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();menu(true)}if(e.key==='Enter'&&document.activeElement.classList.contains('project-card')){const link=$('a',document.activeElement);link?.click()}});
// If reduced motion requested, don't force scroll or motion on interactions.
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.style.scrollBehavior='auto'}
})();
/* V2 chapter transitions and lightweight pointer parallax */
(() => {
 const scenes=[...document.querySelectorAll('main .scene')];
 if('IntersectionObserver' in window){
  const seen=new IntersectionObserver(entries=>{
   entries.forEach(e=>{
    if(e.isIntersecting){
     e.target.classList.remove('scene-entering');
     void e.target.offsetWidth;
     e.target.classList.add('scene-entering');
     seen.unobserve(e.target);
    }
   });
  },{threshold:.16});
  scenes.forEach(s=>seen.observe(s));
 }
 const stage=document.querySelector('.intro-object-stage');
 if(stage && matchMedia('(pointer:fine)').matches){
  let queued=false,px=0,py=0;
  document.addEventListener('pointermove',e=>{
   px=(e.clientX/innerWidth-.5)*10;py=(e.clientY/innerHeight-.5)*8;
   if(queued)return;queued=true;
   requestAnimationFrame(()=>{stage.style.setProperty('--px',px+'px');stage.style.setProperty('--py',py+'px');stage.style.translate=px+'px '+py+'px';queued=false;});
  },{passive:true});
 }
})();
