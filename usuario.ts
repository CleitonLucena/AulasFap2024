 export class usuario {

    public static NumeroUsuarios: number = 0
    protected user:string 
    protected password:string
    protected nome: string
    protected sobrenome: string
    protected dataDeNascimento: string
    protected endereço: string
    protected telefone: string

    constructor(user : string, passoword: string, nome: string, sobrenome: string,
         dataDeNascimento: string, endereço: string, telefone: string) {

            this.user = user
            this.password = passoword
            this.nome = nome
            this.sobrenome = sobrenome
            this.dataDeNascimento = dataDeNascimento
            this.endereço = endereço
            this.telefone = telefone

        usuario.NumeroUsuarios ++
    }

    public VerificarCredenciais(user: string, password:string) :boolean
    {
        return this.user == user && this.password == password
    }

    public AtualizarCadastro(endereço: string, telefone:string) :void
    {
        this.endereço = endereço
        this.telefone = telefone
    }
    
    public MostrarDados() :void
    {
        console.log(this)
    }
} 
