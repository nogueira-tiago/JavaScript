let conta = 0
let numero = document.getElementById('valor')

function aumentar(){
    conta += 1
    numero.innerHTML = conta
}

function diminuir(){
    conta -= 1
    numero.innerHTML = conta
    if(conta <= 0){
        conta += 1
    }
}