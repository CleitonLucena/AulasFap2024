class ContaBancaria {           /*Nome do objeto*/

    constructor(){
        this.agencia = 123-4    /*Caracteristicas do objeto*/
        this.numeroConta = 1 
        this.saldo = 1000
        this.limite = 500
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
}

let conta1 = new ContaBancaria
let conta2 = new ContaBancaria

console.log(conta1.verificarSaldo())

