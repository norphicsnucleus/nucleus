/* ==========================================
   NORPHICS NUCLEUS V6
========================================== */

/* ========= LOADER ========= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 800);

});

/* ========= HEADER ========= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ========= FADE ========= */

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

fades.forEach(item=>observer.observe(item));

/* ========= HERO PARALLAX ========= */

const heroImage = document.querySelector(".hero img");

window.addEventListener("scroll", ()=>{

    const y = window.scrollY;

    if(heroImage){

        heroImage.style.transform =
        `translateY(${y*0.18}px) scale(1.05)`;

    }

});

/* ========= PRODUCT SIZE ========= */

const sizes = document.querySelectorAll(".sizes span");

sizes.forEach(size=>{

    size.addEventListener("click",()=>{

        sizes.forEach(item=>{

            item.style.background="";
            item.style.color="";
            item.style.borderColor="#ddd";

        });

        size.style.background="#111";
        size.style.color="#fff";
        size.style.borderColor="#111";

    });

});

/* ========= SCROLL INDICATOR ========= */

const scrollText = document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

    if(!scrollText) return;

    if(window.scrollY>120){

        scrollText.style.opacity="0";

    }else{

        scrollText.style.opacity="1";

    }

});