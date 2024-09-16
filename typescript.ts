class Animal {     /*Classe pai*/
    cor : string
    idade: number
    boca: string

    constructor(){
        this.cor = 'Preto'
        this.idade = 5
        this.boca = 'Grande'
    }

    Correr() : void
    {
        console.log('Correndo')
    }

    Dormir() : void
     {
        console.log('Dormindo')
    }
}

class Cachorro extends Animal {   /*Classe Filho*/
    constructor() {
        super()
    }
}

class Gato extends Animal {
    constructor() {
        super()
    }
}


class Morcego extends Animal {
    constructor() {
        super()
    }


    Dormir() : void
    {
       console.log('Dorme de cabeça para baixo')
   }


    Voar() : void {
        console.log('Voa rápido')
    }
}


let cachorro = new Cachorro()
cachorro.Correr()
cachorro.Dormir()

let gato = new Gato()
cachorro.Correr()
cachorro.Dormir()

let morcego = new Morcego()
morcego.Correr()
morcego.Dormir()
morcego.Voar()
