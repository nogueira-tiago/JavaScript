function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<strong>[ERRO]<strong> impossivel contar'
    }else{
        res.innerHTML = 'contando...<br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido! Considerando PASSO = 1')
        p = 1}
    if(i < f){
        var c = i
        do{
            res.innerHTML += `${c}, `
            var c = c + p
        }while(c <= f)
    }else{
        var c = i
        while(c >= f){
            res.innerHTML += `${c}, `
            var c = c - p
        }
    }
    res.innerHTML += '...Fim!'
    }

}