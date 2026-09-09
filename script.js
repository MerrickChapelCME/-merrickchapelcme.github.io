const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const modal=document.getElementById('giving');
document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}));
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent('Merrick Chapel Website Contact');const body=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`);window.location.href=`mailto:?subject=${subject}&body=${body}`});
