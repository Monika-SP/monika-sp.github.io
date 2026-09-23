const cursor=document.querySelector(".cursor"), ring=document.querySelector(".cursor-ring");
document.addEventListener("mousemove",e=>{if(cursor){cursor.style.left=e.clientX-3+"px";cursor.style.top=e.clientY-3+"px"}if(ring){ring.style.left=e.clientX-17+"px";ring.style.top=e.clientY-17+"px"}});
document.querySelectorAll("a,.btn,.skill-card,.video-center").forEach(el=>{
  el.addEventListener("mouseenter",()=>ring?.classList.add("hover"));
  el.addEventListener("mouseleave",()=>ring?.classList.remove("hover"));
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove",e=>{const r=btn.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12;const y=(e.clientY-r.top-r.height/2)*.12;btn.style.transform=`translate(${x}px,${y}px)`});
  btn.addEventListener("mouseleave",()=>btn.style.transform="");
});
const progress=document.querySelector(".scroll-progress");
window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+"%";},{passive:true});
const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll(".skill-icon img").forEach(img=>{
  img.addEventListener("error",()=>{img.style.display="none";img.nextElementSibling.style.display="grid"});
});
