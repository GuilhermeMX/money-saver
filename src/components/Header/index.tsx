import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.DialogPortal>
            <Dialog.DialogOverlay />

            <Dialog.Content>
              <Dialog.Title > Nova Transação </Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.DialogPortal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}