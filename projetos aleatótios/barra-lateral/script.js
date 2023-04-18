const btn = document.querySelector(".btn-lateral");
const lateral = document.querySelector(".lateral");
const fechar = document.querySelector(".btn-fechar")

btn.addEventListener("click", function(){
    lateral.classList.toggle("mostrar-lateral");
})

fechar.addEventListener("click",function(){
    lateral.classList.remove("mostrar-lateral")
})
