class Vetor{
    constructor(x,y){
    this.x = x
    this.y = y 
    }

    mais(outro){
        return new Vetor(this.x + outro.x , this.y + outro.y)
    }

    menos(outro){
        return new Vetor(this.x - outro.x ,this.y - outro.y)
    }

    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}  

console.log(new Vetor(2,5).mais(new Vetor(4,9)))

console.log(new Vetor(2,5).menos(new Vetor(4,9)))

console.log(new Vetor(3,4).lenght)