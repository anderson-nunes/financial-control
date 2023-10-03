import { GlobalStyle } from './styles/global';
import { Transaction } from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { ThemeDarkLightProvider } from './contexts/ModeDarkLightContext';

export const App = () => {
  return (
    <ThemeDarkLightProvider>
      <GlobalStyle />
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeDarkLightProvider>
  );
};


