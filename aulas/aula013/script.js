let cartas = []
let soma = 0
let mensagem = ""
let mensagemSoma = document.getElementById('soma')
let mensagemCarta = document.getElementById('cartas')

let legenda = document.getElementById('p1')

function jogar(){
    let carta1 = cartaAleatoria()
    let carta2 = cartaAleatoria()
    cartas = [carta1, carta2]
    soma = carta1 + carta2
 retornar()
}

function retornar(){
    mensagemCarta.textContent = "Cartas: "
    for(let i=0; i< cartas.length; i++){
        mensagemCarta.textContent += cartas[i] + " ";
    }
    mensagemSoma.textContent = "soma: " + soma
    
    if(soma <= 20){
        mensagem = "Você quer mais uma carta ?"
    }else if(soma == 21){
        mensagem = "Você tem um Blackjack"
    }else{
        mensagem = "Você perdeu!"
    }
    legenda.textContent = mensagem

}

function novaCarta(){
    let novaCarta = cartaAleatoria()
    soma += novaCarta
    cartas.push(novaCarta)
    retornar()
    
}

function cartaAleatoria(){
    numeroAleatorio = Math.floor(Math.random()*13)+1
    if(numeroAleatorio === 1){
        return 11
    }else if (numeroAleatorio > 10){
        return 10
    }else {
        return numeroAleatorio
    }
    
}