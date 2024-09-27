import { usuario } from "./usuario";

export class operador extends usuario {
    constructor(user : string, passoword: string, nome: string, sobrenome: string,
        dataDeNascimento: string, endereço: string, telefone: string) {

            super(user, passoword, nome, sobrenome, dataDeNascimento, endereço, telefone)

    }

    public Operar() : void {
        console.log("Operando o Sistema")
    }

}