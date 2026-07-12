// ======================================
// LapkiGroom
// script.js
// ======================================

// -------------------------
// Фиксированная шапка
// -------------------------

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// -------------------------
// Плавная прокрутка
// -------------------------

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const id=this.getAttribute("href");

        if(id==="#") return;

        const block=document.querySelector(id);

        if(block){

            e.preventDefault();

            block.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// -------------------------
// Появление блоков
// -------------------------

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(

".adv-card,.service-card,.review-card,.gallery-grid img,.contact-item"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// -------------------------
// Кнопка "Наверх"
// -------------------------

const topButton=document.createElement("div");

topButton.className="to-top";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// -------------------------
// Burger Menu
// -------------------------

const burger=document.querySelector(".burger");

const menu=document.querySelector(".menu");

burger.addEventListener("click",()=>{

    menu.classList.toggle("open");

    burger.classList.toggle("active");

});

// -------------------------
// Закрывать меню
// -------------------------

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("open");

        burger.classList.remove("active");

    });

});

// -------------------------
// Галерея LightBox
// -------------------------

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="lightbox";

        const image=document.createElement("img");

        image.src=img.src;

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.onclick=()=>{

            overlay.remove();

        };

    });

});

// -------------------------
// Простая валидация формы
// -------------------------

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(

"Спасибо!\n\nМы скоро свяжемся с вами ❤️"

    );

    form.reset();

});

}