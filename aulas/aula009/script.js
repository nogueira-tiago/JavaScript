function tabuada(){
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    if(num.value.length == 0){
    window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while(c <= 10){
            res.innerHTML += `${n} X ${c} = ${n*c} <br>`
            c = c+1
        }
    }
}