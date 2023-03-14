function carregar() {
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 5 && hora< 12){
        imagem.src = 'imagens/fotomanha.JPG' 
        document.body.style.background = '#ffef87'
    } else if(hora >=12 && hora < 19){
        imagem.src = 'imagens/fototarde.JPG'
        document.body.style.background = '#54deff'
    } else {
        imagem.src = 'imagens/fotonoite.JPG'
        document.body.style.background = '#0c0e35'
    }
}