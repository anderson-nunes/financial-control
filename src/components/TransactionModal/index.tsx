import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export const TransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action="">
          <input type="text" placeholder='Descrição' required />
          <input type="number" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

          <S.TransactionType>
            <S.Btn variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </S.Btn>

            <S.Btn variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </S.Btn>
          </S.TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}

