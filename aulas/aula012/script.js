let conta = 0
let numero = document.getElementById('valor')
let salvo = document.getElementById('salvo')

function aumentar(){
    conta += 1
    numero.innerHTML = conta
}

function salvar(){
    salvo.textContent += conta  + " - ";
    conta = 0
    numero.textContent = conta
}