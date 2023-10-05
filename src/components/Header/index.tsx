import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import { useContext } from 'react';
import { ModeDarkLightContext } from '../../contexts/ModeDarkLightContext';
import { TransactionModal } from '../TransactionModal';
import { ToggleLeft, ToggleRight } from 'phosphor-react';

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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <TransactionModal />
        </Dialog.Root>
        {themeName === 'light' ? (
          <ToggleLeft size={48} {...iconProps} />
        ) : (
          <ToggleRight size={48} {...iconProps} />
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};



