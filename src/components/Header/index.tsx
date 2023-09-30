import { TransactionModal } from '../TransactionModal';
import * as Dialog from '@radix-ui/react-dialog';
// import logo002 from '../../assets/logo002.png'
import * as S from './styles'
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../styles/themes/default';
import { useTheme } from '../../hooks/useTheme';
import { ToggleLeft, ToggleRight } from 'phosphor-react';


export const Header = () => {

  const { theme, themeName, handleTheme } = useTheme()

  function changeTheme() {

    handleTheme(themeName === 'light' ? 'dark' : 'light')

    console.log('@aqui=>')
  }

  const iconProps = {
    color: theme.icon,
    onClick: changeTheme
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        {/* {themeName === 'light' ? (
          <ToggleLeft size={32} {...iconProps} />
        ) : (
          <ToggleRight size={32} {...iconProps} />
        )} */}
        <button {...iconProps}>clique</button>

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

