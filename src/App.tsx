import { useEffect } from 'react';
import { GlobalStyle } from './styles/global';
import { Transaction } from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { useThemeDarkLightProvider, ThemeDarkLightProvider } from './contexts/ModeDarkLightContext';

export const App = () => {
  const { theme } = useThemeDarkLightProvider();

  useEffect(() => {
    console.log('@theme=>>', theme);
  }, [theme]);

  return (
    <ThemeDarkLightProvider>
      <GlobalStyle />
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeDarkLightProvider>
  );
};


