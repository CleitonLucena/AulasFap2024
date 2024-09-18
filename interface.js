var Bra = /** @class */ (function () {
    function Bra() {
        this.Numero = Bra.NumeroDeContas;
        this.Saldo = 1000;
    }
    Bra.prototype.Sacar = function (valor) {
        if (this.Saldo <= valor) {
            this.Saldo -= valor;
            console.log(this.Saldo);
        }
        else
            (console.log('Não há saldo suficiente'));
    };
    Bra.prototype.Depositar = function (valor) {
        if (valor >= 1000) {
            console.log('Valor ultrapassa o limite');
        }
        else
            (this.Saldo += valor);
    };
    Bra.NumeroDeContas = 0;
    return Bra;
}());
var bra1 = new Bra;
bra1.Depositar(100);
bra1.Sacar(50);
