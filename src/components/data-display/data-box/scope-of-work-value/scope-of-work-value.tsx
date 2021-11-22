import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  /**
   * Number of tasks
   */
  taskAmount: number
  /**
   * Click handler when taskAmount is clicked
   */
  onTaskClick: () => void
  /**
   * Number of hours | Range of hours will only accept the first two elements of the array
   */
  hourAmount: number | number[]
}
export const ScopeOfWorkValue: React.FC<Props> = ({
  taskAmount,
  onTaskClick,
  hourAmount
}) => (
  <Box display='flex' alignItems='center'>
    <Text
      variant='heading.6'
      color='primary'
      cursor='pointer'
      mr='8px'
      onClick={onTaskClick}
    >
      {taskAmount} task{taskAmount > 1 ? 's' : ''}
    </Text>
    <Box bg='gray.28' px='6px' py='1px' borderRadius='19px'>
      <Text variant='x.small' color='white'>
        {typeof hourAmount === 'number'
          ? `~ ${hourAmount}`
          : `${hourAmount[0]}-${hourAmount[1]}`}{' '}
        <Text as='span' variant='x.small' color='gray.79'>
          hr{hourAmount > 1 ? 's' : ''}
        </Text>
      </Text>
    </Box>
  </Box>
)
