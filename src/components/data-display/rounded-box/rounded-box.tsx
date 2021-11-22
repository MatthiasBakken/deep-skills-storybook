import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

/**
 * Accepts the same props as a chakra-ui Box
 */
export const RoundedBox: React.FC<BoxProps> = (props) => (
  <Box bg='gray.22' borderRadius='12px' p='25px 25px 32px 25px' {...props} />
)
