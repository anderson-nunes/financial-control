import { ThemeProvider } from 'styled-components'
// import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { useTheme } from './hooks/useTheme'
import { useEffect } from 'react'

export const App = () => {

  const { theme } = useTheme()

  useEffect(() => {
    console.log('@theme=>>', theme)

  }, [theme])



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

