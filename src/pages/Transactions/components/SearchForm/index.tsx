import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export const SearchForm = () => {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder='Busque suas transações' />

      <button type='submit'>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}


