const transferir = (entrada)=>{
  let array = []
  for(i = entrada.length-1;i>=0;i--){
    array.push(entrada[i])
  }
  return array
}
console.log(transferir("amambai"))
