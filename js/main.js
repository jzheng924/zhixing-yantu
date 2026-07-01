/* =====================================
   知行研途
   main.js
===================================== */

/* 导航栏滚动效果 */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* ================================
   滚动渐显动画
================================ */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


document.querySelectorAll(

".about-card,.route-card,.study-card,.advantage-grid div"

).forEach(item=>{

    observer.observe(item);

});


/* ================================
   返回顶部按钮
================================ */

const topBtn=document.createElement("div");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ================================
   Hero文字缓慢浮动
================================ */

const hero=document.querySelector(".hero-content");

let y=0;

setInterval(()=>{

    y+=0.02;

    hero.style.transform=
    `translateY(${Math.sin(y)*8}px)`;

},20);


/* ================================
   图片缓慢放大
================================ */

const heroSection=document.querySelector(".hero");

let scale=1;

setInterval(()=>{

    scale+=0.00008;

    heroSection.style.backgroundSize=
    `${scale*100}%`;

},60);


/* ================================
   鼠标卡片效果
================================ */

document.querySelectorAll(".route-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;

        const y=e.offsetY;

        card.style.transform=

        `rotateX(${(150-y)/35}deg)

         rotateY(${(x-150)/35}deg)

         translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "rotateX(0) rotateY(0)";

    });

});


/* ================================
   页面加载动画
================================ */

window.onload=()=>{

    document.body.classList.add("loaded");

};
