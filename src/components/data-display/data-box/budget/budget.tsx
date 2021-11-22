import { Text } from '@chakra-ui/react'
import { FC } from 'react'

export interface BudgetProps {
  /**
   * Currency symbol
   * @default $
   */
  symbol?: string
  /**
   * Currency
   * @default USD
   */
  currency?: string
  /**
   * Budget string, is not formatted in any way | Budget range will use only the first two items
   */
  budget: string | string[]
}
export const Budget: FC<BudgetProps> = ({
  budget,
  symbol = '$',
  currency = 'USD'
}) => {
  const value =
    typeof budget === 'string'
      ? `${symbol}${budget}`
      : `${symbol}${budget[0]}-${symbol}${budget[1]}`
  return (
    <Text as='span' color='white' variant='heading.4'>
      {value} <Text as='span'>{currency}</Text>
    </Text>
  )
}
