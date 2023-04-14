let meusSites = []
const site = document.getElementById('site')
const botao = document.getElementById('btn')
const lista = document.getElementById('lista')

botao.addEventListener("click", function(){
    meusSites.push(site.value)
    salvarSites()
    site.value = ""
})

function salvarSites(){    
    let itensLista = ""
    for(let i = 0; i < meusSites.length;i++){
        itensLista += `<li><a  target = '_blank' href= '${meusSites[i]}' >  ${meusSites[i]} </a></li>`
    }
    lista.innerHTML = itensLista
}