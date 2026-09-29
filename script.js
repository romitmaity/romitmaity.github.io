const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const dot=$(".mouse-dot"), ring=$(".mouse-ring");
addEventListener("pointermove",e=>{if(dot){dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px"}if(ring){ring.style.left=e.clientX+"px";ring.style.top=e.clientY+"px"}});
$$("a,button").forEach(x=>{x.onmouseenter=()=>{if(ring){ring.style.width="46px";ring.style.height="46px"}};x.onmouseleave=()=>{if(ring){ring.style.width="30px";ring.style.height="30px"}}});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});
$$(".reveal").forEach(x=>io.observe(x));
addEventListener("scroll",()=>{let h=document.documentElement.scrollHeight-innerHeight;$(".scrollbar").style.width=(scrollY/h*100)+"%"});
const modal=$("#command"); function openMenu(){modal.classList.add("open")} function closeMenu(){modal.classList.remove("open")}
$(".menu").onclick=openMenu; $("#close").onclick=closeMenu;
document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();openMenu()}if(e.key==="Escape")closeMenu()});
$$("[data-go]").forEach(b=>b.onclick=()=>{closeMenu();document.querySelector(b.dataset.go).scrollIntoView({behavior:"smooth"})});
modal.onclick=e=>{if(e.target===modal)closeMenu()};

// V4 image lightbox
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxClose=document.getElementById('lightboxClose');
const galleryImages=document.querySelectorAll('.gallery img, .career-gallery img, .portrait-wrap img, .timeline article img, .trek-card img');
function closeLightbox(){if(lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}}
galleryImages.forEach(img=>{img.style.cursor='zoom-in';img.addEventListener('click',()=>{if(!lightbox)return;lightboxImage.src=img.currentSrc||img.src;lightboxImage.alt=img.alt||'Portfolio image';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';});});
if(lightboxClose)lightboxClose.addEventListener('click',closeLightbox);
if(lightbox)lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
