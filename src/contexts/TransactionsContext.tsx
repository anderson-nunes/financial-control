import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {

  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: number) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {

    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })
    setTransactions(response.data)
  },
    [])

  const createTransaction = useCallback(async (data: CreateTransactionInput) => {

    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })
    setTransactions(state => [response.data, ...state])
  },
    [])

  const deleteTransaction = useCallback(async (id: number) => {
    try {
      // Remova ele da lista de transações que eu exibo no front
      setTransactions((prevTransactions) =>
        prevTransactions.filter((transaction) => transaction.id !== id)
      );

      // Faço a solicitação DELETE para a API
      const response = await api.delete(`transactions/${id}`);

      if (response.status !== 204) {
        // Se a solicitação DELETE não foi bem-sucedida, exiba uma mensagem de erro
        console.error('Erro ao excluir a transação:', response.status);
      }
    } catch (error) {
      // Se ocorrer um erro na solicitação DELETE, coloque a transação de volta na lista local
      setTransactions((prevTransactions) =>
        prevTransactions.filter((transaction) => transaction.id !== id)
      );
      console.error('Erro ao excluir a transação:', error);
    }
  }, []);

  useEffect(() => {
    fetchTransactions()

  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
      deleteTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}