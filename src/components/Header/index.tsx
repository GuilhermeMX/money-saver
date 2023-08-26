import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

// import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NewTransactionButton>Nova transação </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}