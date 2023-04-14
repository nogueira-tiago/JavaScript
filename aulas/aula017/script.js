const arrayParaLista=(array)=>{
    let lista = null
    for(let i = array.length - 1;i>=0;i--){
        lista = {value: array[i], rest: lista}
    }
    return lista
}

  console.log(arrayParaLista([1,2,3]))