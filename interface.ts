interface Conta {
    Numero : number
    Saldo : number
    Poupanca? : number
    Render?() : void
    Sacar(valor : number) : void
    Depositar(valor: number) : void
}


class Bra implements Conta {

    private static NumeroDeContas : number = 0
    Numero : number
    Saldo: number
    Poupanca?: number 

    constructor() {
        this.Numero = Bra.NumeroDeContas
        this.Saldo = 1000

    }

    Sacar(valor: number): void {
        if (this.Saldo <= valor) {
            this.Saldo -= valor
            console.log(this.Saldo)
        } else (
            console.log('Não há saldo suficiente')
        )
       

    }

    Depositar(valor: number): void {
        if (valor >= 1000) {
            console.log('Valor ultrapassa o limite')
        } else (
            this.Saldo += valor
        )
    }

}

let bra1 = new Bra
bra1.Depositar(100)
bra1.Sacar(50)