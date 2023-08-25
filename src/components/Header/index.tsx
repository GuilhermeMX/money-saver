import { HeaderContainer, HeaderContent } from "./style";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo"/>

        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}