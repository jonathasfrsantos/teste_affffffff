import { Table } from "react-bootstrap";
import lançamentos from "../../mock_data/mock-db.json";
import "./styles.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { DateInput } from "../date-input/DateInput";

export function MainTable() {
  const data = [
    {
      id: 1,
      data: "01/01/2024",
      entrada: "150.000,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Ofertas",
      bancoCaixa: "Caixa",
    },
    {
      id: 2,
      data: "02/01/2024",
      entrada: "0,00",
      saida: "50,00",
      historico: "Ciclano",
      finalidade: "Despesas gerais",
      bancoCaixa: "Banco",
    },
    {
      id: 3,
      data: "03/01/2024",
      entrada: "200,00",
      saida: "0,00",
      historico: "Beltrano",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 4,
      data: "04/01/2024",
      entrada: "0,00",
      saida: "100,00",
      historico: "Lorem Ipsum",
      finalidade: "Compras",
      bancoCaixa: "Banco",
    },
    {
      id: 5,
      data: "05/01/2024",
      entrada: "50,00",
      saida: "0,00",
      historico: "Sit Amet",
      finalidade: "Vendas",
      bancoCaixa: "Caixa",
    },
    {
      id: 6,
      data: "06/01/2024",
      entrada: "0,00",
      saida: "20,00",
      historico: "Consectetur",
      finalidade: "Pagamentos",
      bancoCaixa: "Banco",
    },
    {
      id: 7,
      data: "07/01/2024",
      entrada: "250,00",
      saida: "0,00",
      historico: "Adipiscing",
      finalidade: "Recebimentos",
      bancoCaixa: "Caixa",
    },
    {
      id: 8,
      data: "08/01/2024",
      entrada: "90,00",
      saida: "0,00",
      historico: "Elit",
      finalidade: "Ofertas",
      bancoCaixa: "Banco",
    },
    {
      id: 9,
      data: "09/01/2024",
      entrada: "0,00",
      saida: "200,00",
      historico: "Sed",
      finalidade: "Empréstimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 10,
      data: "10/01/2024",
      entrada: "120,00",
      saida: "0,00",
      historico: "Ametista papapapapapapapapapapapapapapapapapapapapapapapapapapapapapapapapa",
      finalidade: "Investimentos",
      bancoCaixa: "Banco",
    },
    {
      id: 11,
      data: "01/01/2024",
      entrada: "150,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 12,
      data: "01/01/2024",
      entrada: "150,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 13,
      data: "01/01/2024",
      entrada: "150,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 14,
      data: "01/01/2024",
      entrada: "150,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
  ];
  return (

    <div className="table-container">
      <div className="table-title">
        <DateInput />
        <p> 01-jan-2024 - 31-jan-2024</p>

      </div>
    
      <Table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Entradas R$</th>
            <th>Saídas R$</th>
            <th>Histórico</th>
            <th>Finalidade</th>
            <th>Banco/Caixa</th>
            <th className="actions-column">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.data}</td>
              <td className={item.entrada ? "blue-text" : ""}>{item.entrada}</td>
              <td className={item.saida ? "red-text" : ""}>{item.saida}</td>
              <td>{item.historico}</td>
              <td>{item.finalidade}</td>
              <td>{item.bancoCaixa}</td>
              <td className="actions-rows" >
                <button className="edit-icon" ><EditIcon/></button>
                <button className="delete-icon"><DeleteIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td> </td>
            <td> Totais R$ </td>
            <td className="total-revenues"> 151.310,00</td>
            <td className="total-expenses"> 370,00 </td>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td> </td>
            <td> Saldor anterior R$</td>
            <td> 500,00</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td> </td>
            <td> Saldor atual R$ R$</td>
            <td> 151.440,00</td>
            <td colSpan="5"></td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
