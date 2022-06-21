//Loading efeito
//Obter todos elementos html

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const bg_hero = document.querySelector('.relative');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container__2');
const quemSouEu = document.querySelector('.section__quemSou')

//Carregar o loading e torna visivel os elementos
function init(){

    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        // bg_hero.style.display = 'block';
        setTimeout(()=>{
            // main.style.opacity = 1
            bg_hero.style.opacity = 1;
            menu.style.opacity = 1;
            container.style.opacity = 1;
            container2.style.opacity = 1;
            quemSouEu.style.opacity = 1;        
        }, 50);
        
    }, 4000)
}

// Maquina de escrever

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }
  const titulo = document.querySelector(".maquina-escrever");
  console.log(titulo);
//   typeWrite(titulo);
  

// Scroll to codigo

function ScrollTO(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"})
}

// document.querySelector('#GoToUP').addEventListener('click', function(event){
//     event.preventDefault();
//     ScrollTO('#container');
    
// })

document.querySelector('#menu__01').addEventListener('click', function(event){
   event.preventDefault();
   ScrollTO('#section__01');
   
})

// document.querySelector('#section__02').addEventListener('click', function(event){
//     event.preventDefault();
//     ScrollTO('#section__02');
    
//  })

 document.querySelector('#menu__03').addEventListener('click', function(event){
    event.preventDefault();
    ScrollTO('#section__03');
    
 })


 document.querySelector('#menu__04').addEventListener('click', function(event){
    event.preventDefault();
    ScrollTO('#section__04');
    
 })

// fim do scroll codigo




function animaScroll(){

    window.addEventListener('scroll', function(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
        if(windowTop >2 ){
            console.log('dddd');
            console.log(windowTop);
        }
    })

}

function PageAnimation(){
    var tl = gsap.timeline();
    tl
    .from(".menu__right",{
        opacity: 0,
        y:20,
        duration: 1,
        delay: 5,
        ease:"power3-out"
    })
    .from(".menu__centro",{
        opacity: 0,
        y:20,
        duration: 1,
        delay: 0.1,
        ease:"power3-out"
    })
    .from(".menu__left",{
        opacity: 0,
        y:20,
        duration: 1,
        delay: 0.1,
        ease:"power3-out"
    })

    .from(".container div",{
        opacity: 0,
        y:20,
        duration: 1,
        stagger:{each:0.2},
        delay: 0.1,
        ease:"power3-out"
    })

    // codificacao do  scroll
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from("#section__01 div", {
        opacity: 0,
        y:100,
        duration: 1,
        // delay: 0.1,
        stagger:{each:0.2},
        ease:"power3-out",
        scrollTrigger:{
            trigger:"#section__01",
            toggleActions: "restart pause none none"
        }
    });

    gsap.from("#section__02 div", {
        opacity: 0,
        y:100,
        duration: 1,
        // delay: 0.1,
        stagger:{each:0.2},
        ease:"power3-out",
        scrollTrigger:{
            trigger:"#section__02",
            toggleActions: "restart pause none none"
        }
    });

    gsap.from("#section__03 div", {
        opacity: 0,
        y:100,
        duration: 1,
        // delay: 0.1,
        stagger:{each:0.2},
        ease:"power3-out",
        scrollTrigger:{
            trigger:"#section__03",
           // start: "center center",
            //markers:true,
            toggleActions: "restart pause none none"
        }
    });

    gsap.from("#section__04 div", {
        opacity: 0,
        y:100,
        duration: 1,
        // delay: 0.1,
        stagger:{each:0.2},
        ease:"power3-out",
        scrollTrigger:{
            trigger:"#section__04",
            // start: "center center",
            // markers:true,
            toggleActions: "restart pause none none"
        }
    })
}

//Funcoa que carrega todos os elmentos para pagina. 

 window.addEventListener("DOMContentLoaded", ()=>{

    init();
    PageAnimation();
    // animas();
    //  animaScroll();
    typeWrite(titulo);   
})

     