import { ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { BalanceCard, BalanceContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useBalance } from "../../hooks/useBalance";

export function Balance() {
  const balance = useBalance()

  return (
    <BalanceContainer>
      <BalanceCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(balance.income)}</strong>
      </BalanceCard>

      <BalanceCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleUp size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(balance.outcome)}</strong>
      </BalanceCard>

      <BalanceCard variant="green">
        <header>
          <span>Balanço</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(balance.total)}</strong>
      </BalanceCard>
    </BalanceContainer>
  );
}