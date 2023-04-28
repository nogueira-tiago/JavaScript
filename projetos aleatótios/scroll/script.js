//adicionando data
const data = document.querySelector(".date");
data.innerHTML = new Date().getFullYear();

//links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    //linksContainer.classList.toggle("show-links");
    const alturaConteiner = linksContainer.getBoundingClientRect().height;
    const alturaLinks = links.getBoundingClientRect().height;

    if(alturaConteiner === 0){
        linksContainer.style.height = `${alturaLinks}px`;
    }else{
        linksContainer.style.height = 0;
    }
})

//barra de navegação fixa
const barraNav = document.getElementById("nav");
const btnTopo = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const alturaScroll = window.pageYOffset;
    const alturaBarra = barraNav.getBoundingClientRect().height;

    if(alturaScroll > alturaBarra){
        barraNav.classList.add("fixed-nav");
    }else{
        barraNav.classList.remove("fixed-nav");
    }

    if(alturaScroll > 400){
        btnTopo.classList.add("show-link");
    }else{
        btnTopo.classList.remove("show-link");
    }
})

// nav links scroll
const linksScroll = document.querySelectorAll(".scroll-link");

document.addEventListener("DOMContentLoaded",function(){
    linksScroll.forEach(function(link){
        link.addEventListener("click",function(elemento){
            elemento.preventDefault();
            //navegar para local especifico
            const id = elemento.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

            const alturaBarra = barraNav.getBoundingClientRect().height;
            const alturaConteiner = linksContainer.getBoundingClientRect().height;
            const barraFixa = barraNav.classList.contains("fixed-nav");
            let posição = element.offsetTop - alturaBarra;

            if(!barraFixa){
                posição = posição - alturaBarra
            }
            if(alturaBarra > 82){
                posição = posição + alturaConteiner
            }
            window.scrollTo({
                left:0,
                top:posição,
            });
            linksContainer.style.height = 0;
        });
    
    });
});