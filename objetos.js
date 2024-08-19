class ContaBancaria {           /*Nome do objeto*/

    constructor(){
        this.Agencia = 123-4    /*Caracteristicas do objeto*/
        this.NumeroConta = 1 
        this.Saldo = 1000
        this.Limite = 500
    }
}

depositar(valorDeposito){
    this.saldo += valorDeposito
}

sacar(valorSaque){
    this.saldo -= valorSaque

}

verificarSaldo(){
    return this.saldo
}

emprestimo(){

}

limite() {

}


let conta1 = new ContaBancaria
let conta2 = new ContaBancaria
console.log(conta1.verificarSaldo())

