import "./styles.css";
import entradaImage from "../../assets/images/entrada.png";
import saidaImage from "../../assets/images/saida.png";
import saldoAnterior from "../../assets/images/previous.png";
import saldoAtual from "../../assets/images/current.png";

export function MainCards() {
  return (
    <div className="cards-container">
      <div className="card-revenues">
        <div className="card-header">Total entradas R$  </div>
        <div className="card-body">
     
          <h1> 151.310,00</h1>
          <img className="card-icon"
            src={entradaImage}
            alt="Ícone de entrada de dinheiro"
          />
        </div>
      </div>
      <div className="card-expenses">
        <div className="card-header"> Total saídas R$ </div>
        <div className="card-body">
          <h1> 370,00 </h1>
          <img className="card-icon"
            src={saidaImage}
            alt="Ícone de entrada de dinheiro"
          />
        </div>
      </div>
      <div className="card-previous-balance">
        <div className="card-header"> Saldo anterior R$ </div>
        <div className="card-body">
          <h1> 500,00 </h1>
          <img className="card-icon"
            src={saldoAnterior}
            alt="Ícone de entrada de dinheiro"
          />
        </div>
      </div>
      <div className="card-current-balance">
        <div className="card-header"> Saldo atual R$ </div>
        <div className="card-body">
          <h1> 1070,00 </h1>
          <img className="card-icon"
            src={saldoAtual}
            alt="Ícone de entrada de dinheiro"
          />
        </div>
      </div>
    </div>
  );
}
