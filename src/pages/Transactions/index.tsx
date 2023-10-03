import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import * as S from './styles'
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"
import { useContextSelector } from "use-context-selector"
import { Trash } from "phosphor-react"

export const Transaction = () => {

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  })

  const removeAccount = useContextSelector(TransactionsContext, (context) => {
    return context.removeAccount
  })

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <S.PriceHighLight
                      variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </S.PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <S.TrashContainer>{dateFormatter.format(new Date(transaction.createdAt))}
                    <Trash size={32} onClick={() => removeAccount(transaction.id)} />
                  </S.TrashContainer>
                </tr>
              )
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>

    </div>
  )
}

