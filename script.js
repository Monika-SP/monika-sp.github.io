const cursor=document.querySelector('.cursor'), ring=document.querySelector('.cursor-ring');
document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';ring.style.left=e.clientX-17+'px';ring.style.top=e.clientY-17+'px'}});
document.querySelectorAll('a,.btn,.skill-card').forEach(el=>{el.addEventListener('mouseenter',()=>ring?.classList.add('hover'));el.addEventListener('mouseleave',()=>ring?.classList.remove('hover'))});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.15}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')});
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav nav')?.classList.remove('open')));
