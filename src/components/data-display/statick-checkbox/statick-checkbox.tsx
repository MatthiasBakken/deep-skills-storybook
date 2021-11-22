import React, { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { CheckIcon } from '../../../icons'

export interface StaticCheckboxProps {
  /**
   * The variant of the checkbox
   * @default empty
   */
  variant?: 'empty' | 'interested' | 'confirmed'
}
export const StaticCheckbox: FC<StaticCheckboxProps> = ({
  variant = 'empty'
}) => (
  <Box
    display='inline-flex'
    justifyContent='center'
    alignItems='center'
    w='27px'
    h='27px'
    borderRadius='50%'
    bg={variant === 'empty' || variant === 'interested' ? 'gray.28' : 'pink'}
  >
    {variant !== 'empty' && (
      <Box opacity={variant === 'interested' ? '0.1' : '1'}>
        <CheckIcon />
      </Box>
    )}
  </Box>
)
