// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.classList.add("hide");

},1000);

});

// ======================
// HEADER SCROLL
// ======================

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ======================
// FADE ANIMATION
// ======================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".fade").forEach((el)=>{

observer.observe(el);

});

// ======================
// PRODUCT CLICK EFFECT
// ======================

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mousedown",()=>{

card.style.transform="scale(.98)";

});

card.addEventListener("mouseup",()=>{

card.style.transform="scale(1)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

card.addEventListener("touchstart",()=>{

card.style.transform="scale(.98)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});

// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});