import {usuario} from "./usuario"

export class administrador extends usuario {

    private _token: number;

    constructor(user : string, passoword: string, nome: string, sobrenome: string,
        dataDeNascimento: string, endereço: string, telefone: string) 
    {

            super(user, passoword, nome, sobrenome, dataDeNascimento, endereço, telefone)
            this._token = Math.random()*100000

    }

    public Administrando() :void {
        console.log("Administrando o Sistema")
    }

    public GetToken() :number {
        return this._token
    }

    public VerificarCredenciaisAdministrador(user: string, password: string, token : number) :boolean {

        if (this._token == token){
            return super.VerificarCredenciais(user,password)
        } else 
        return false 
       
        
    }
}