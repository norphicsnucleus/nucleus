/* =====================================

NORPHICS NUCLEUS

script.js

===================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

/* Fade Animation */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

/* Hero Parallax */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-image");

const y=window.scrollY;

hero.style.transform=`translateY(${y*0.18}px) scale(1.08)`;

});

/* Navbar Shadow (Future) */

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

if(scroll>40){

document.body.classList.add("scrolled");

}else{

document.body.classList.remove("scrolled");

}

});

/* Button Hover Animation */

const button=document.querySelector(".button");

button.addEventListener("mouseenter",()=>{

button.style.letterSpacing="3px";

});

button.addEventListener("mouseleave",()=>{

button.style.letterSpacing="2px";

});

/* Smooth Reveal */

const items=document.querySelectorAll(

".detail-item,.archive p,.price,.size,.product h2,.color"

);

items.forEach((item,index)=>{

item.style.transitionDelay=`${index*70}ms`;

});

/* Scroll Indicator */

const scrollText=document.querySelector(".scroll-text");

window.addEventListener("scroll",()=>{

if(window.scrollY>120){

scrollText.style.opacity="0";

}else{

scrollText.style.opacity=".8";

}

});

/* Image Fade */

const product=document.querySelector(".product-image img");

window.addEventListener("scroll",()=>{

const top=product.getBoundingClientRect().top;

const screen=window.innerHeight;

if(top<screen){

product.style.opacity="1";

product.style.transform="translateY(0px)";

}

});

product.style.opacity="0";

product.style.transform="translateY(60px)";

product.style.transition="1.2s";

/* Cursor */

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty("--x",e.clientX+"px");

document.documentElement.style.setProperty("--y",e.clientY+"px");

});

/* Footer */

const footer=document.querySelector("footer");

const footerObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

footer.style.opacity="1";

footer.style.transform="translateY(0px)";

}

});

});

footer.style.opacity="0";

footer.style.transform="translateY(40px)";

footer.style.transition="1s";

footerObserver.observe(footer);

/* Console */

console.log("NORPHICS NUCLEUS");

console.log("Collection 001 Loaded");

console.log("Designed for Mobile First");