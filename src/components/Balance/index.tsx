import { ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { BalanceCard, BalanceContainer } from "./styles";

export function Balance() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)
  
  return (
    <BalanceContainer>
      <BalanceCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 12.400,00</strong>
      </BalanceCard>

      <BalanceCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleUp size={32} color="#f75a68" />
        </header>

        <strong>R$ 7.273,30</strong>
      </BalanceCard>

      <BalanceCard variant="green">
        <header>
          <span>Balanço</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 5.166,70</strong>
      </BalanceCard>
    </BalanceContainer>
  );
}