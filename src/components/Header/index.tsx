import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import { useContext } from 'react';
import { ModeDarkLightContext } from '../../contexts/ModeDarkLightContext';
import { TransactionModal } from '../TransactionModal';
import { Moon, Sun } from 'phosphor-react';
import logo from '../../assets/logo.png'

export const Header = () => {
  const { theme, themeName, handleTheme } = useContext(ModeDarkLightContext);

  function changeTheme() {
    handleTheme(themeName === 'light' ? 'dark' : 'light');
  }

  const iconProps = {
    color: theme.icon,
    onClick: changeTheme,
  };

  return (
    <S.HeaderContainer>
      <S.Image src={logo} alt="" />
      <S.HeaderContent>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <TransactionModal />
        </Dialog.Root>
        {themeName === 'light' ? (
          <Sun size={36} {...iconProps} />
        ) : (
          <Moon size={36} {...iconProps} />
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};



