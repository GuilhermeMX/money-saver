import { ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { BalanceCard, BalanceContainer } from "./styles";

export function Balance() {
  const { transactions } = useContext(TransactionsContext)

  const balance = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }

    return acc;
  }, { income: 0, outcome: 0, total: 0 })

  return (
    <BalanceContainer>
      <BalanceCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{balance.income}</strong>
      </BalanceCard>

      <BalanceCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleUp size={32} color="#f75a68" />
        </header>

        <strong>{balance.outcome}</strong>
      </BalanceCard>

      <BalanceCard variant="green">
        <header>
          <span>Balanço</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{balance.total}</strong>
      </BalanceCard>
    </BalanceContainer>
  );
}