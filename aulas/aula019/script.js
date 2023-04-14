class Grupo{
    constructor(){
        this.membros = []
    }

    adicionar(valor){
        if(!this.possui(valor)){
            this.membros.push(valor)
        }
    }

    deletar(valor){
        this.membros= this.membros.filter(v => v !== valor)
    }

    possui(valor){
        return this.membros.includes(valor)
    }

    static de(coleção){
        let grupo = new Grupo
        for(let valor of coleção){
            grupo.adicionar(valor)
        }
        return grupo
    }
}

