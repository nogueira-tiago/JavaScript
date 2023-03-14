function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#tano')
    var res = window.document.querySelector('div#res')
    var imagem = window.document.querySelector('img#imagem')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                imagem.src = 'imagens/foto-bebe-m.png'
            }else if(idade <21){
                imagem.src = 'imagens/foto-jovem-m.png'
            }else if(idade <50){
                imagem.src = 'imagens/foto-adulto-m.png'
            }else{
                imagem.src = 'imagens/foto-idoso-m.png'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                imagem.src = 'imagens/foto-bebe-f.png'
            }else if(idade <21){
                imagem.src = 'imagens/foto-jovem-f.png'
            }else if(idade <50){
                imagem.src = 'imagens/foto-adulto-f.png'
            }else{
                imagem.src = 'imagens/foto-idoso-f.png'
            }
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(imagem)
    }
