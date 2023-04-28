const btns = document.querySelectorAll(".tab-btn");
const sobre = document.querySelector(".about");
const artigos = document.querySelectorAll(".content");

sobre.addEventListener("click",function(elemento){
   const id = elemento.target.dataset.id;
   if(id){
    btns.forEach(function(btn){
        btn.classList.remove("active")
    });
    elemento.target.classList.add("active")
   } 
    //esconder os outros artigos
    artigos.forEach(function(artigo){
        artigo.classList.remove("active")
    })
    const e = document.getElementById(id);
    e.classList.add("active");
})