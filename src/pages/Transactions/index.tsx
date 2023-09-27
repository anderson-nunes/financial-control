import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import * as S from './styles'

export const Transaction = () => {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <S.PriceHighLight
                  variant="income">
                  R$ 12.000,00
                </S.PriceHighLight>
              </td>
              <td>Venda</td>
              <td>27/09/2023</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <S.PriceHighLight
                  variant="outcome">
                  - R$ 59,00
                </S.PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>27/09/2023</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>

    </div>
  )
}

