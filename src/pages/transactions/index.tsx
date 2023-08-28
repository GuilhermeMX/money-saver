import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { SearchForm } from "./components/SearchForm";

export function Transactions() {
  return (
    <div>
      <Header />
      <Balance />

     <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 1.200,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/08/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>-- R$ 1.200,00</td>
              <td>
                <PriceHighlight variant="outcome">
                  Compra
                </PriceHighlight>
              </td>
              <td>12/08/2023</td>
            </tr>


          </tbody>
        </TransactionsTable>
     </TransactionsContainer>
    </div>
  )
}