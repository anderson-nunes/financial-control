import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = z.object({

  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const TransactionModal = () => {

  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {

    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder='Categoria'
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              console.log(field)
              return (
                <S.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}>
                  <S.Btn variant="income" value="income">
                    <ArrowCircleUp size={24} color='#00b37e' />
                    Entrada
                  </S.Btn>

                  <S.Btn variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} color='#f75a68' />
                    Saída
                  </S.Btn>
                </S.TransactionType>
              )
            }}
          />
          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}

