import { usuario } from "./usuario";
import { administrador } from "./administrador";

export interface Login {
    Logar(userOBJ : usuario, user : string, password : string) : void
    LogarAdm(userOBJ : administrador, user: string, password: string, token : number) :void 
}