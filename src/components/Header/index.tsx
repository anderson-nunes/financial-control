import { TransactionModal } from '../TransactionModal';
import * as Dialog from '@radix-ui/react-dialog';
// import logo002 from '../../assets/logo002.png'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={''} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <TransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

