// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

if(loader){

loader.classList.add("hide");

}

},800);

});


// =========================
// CARD ANIMATION
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("touchstart",()=>{

card.style.transform="scale(.98)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});


// =========================
// SIZE BUTTON
// =========================

const sizes=document.querySelectorAll(".size span");

sizes.forEach(size=>{

size.addEventListener("click",()=>{

sizes.forEach(item=>{

item.style.background="white";

item.style.color="#111";

});

size.style.background="#111";

size.style.color="white";

});

});