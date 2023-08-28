import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.DialogPortal>
      <Overlay />

      <Content>
        <Dialog.Title > Nova Transação </Dialog.Title>

        <Dialog.Close />

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">
            Cadastrar
          </button>
        </form>
        
      </Content>
    </Dialog.DialogPortal>
  )
}