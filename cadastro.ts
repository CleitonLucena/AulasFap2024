import { usuario } from "./usuario";
import { operador } from "./operador";
import { administrador } from "./administrador";

export interface Cadastro {
    CadastrarUsuario(user : string, passoword: string, nome: string, sobrenome: string,
        dataDeNascimento: string, endereço: string, telefone: string) : usuario
    CadastrarAdministrador(user : string, passoword: string, nome: string, sobrenome: string,
        dataDeNascimento: string, endereço: string, telefone: string) : administrador
    CadastrarOperador(user : string, passoword: string, nome: string, sobrenome: string,
        dataDeNascimento: string, endereço: string, telefone: string) : operador
}