import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import { useContext } from 'react';

import { ModeDarkLightContext } from '../../contexts/ModeDarkLightContext';
import { TransactionModal } from '../TransactionModal';

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
      <S.HeaderContent>
        <button {...iconProps}>Clique</button>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <TransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};



