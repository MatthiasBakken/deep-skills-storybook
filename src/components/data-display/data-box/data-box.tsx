import React, { FC } from 'react'
import { Box, BoxProps, Text, Tooltip } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

interface Props {
  /**
   * Label used to display on top of the box
   */
  label: string
  /**
   * Tooltip label. If the value is missing, then the icon is not rendered
   */
  tooltipLabel?: string
  /**
   * BoxProps are used for extra styling on the wrapper Box
   */
  boxProps?: BoxProps
}
export const DataBox: FC<Props> = ({
  label,
  tooltipLabel,
  children,
  boxProps
}) => (
  <Box display='flex' flexDirection='column' {...boxProps}>
    <Box mb='8px' display='flex' alignItems='center'>
      <Text variant='small' color='gray.79' mr='8px'>
        {label}
      </Text>
      {!!tooltipLabel && (
        <Tooltip label={tooltipLabel}>
          <InfoIcon color='gray.79' />
        </Tooltip>
      )}
    </Box>
    <Box>
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text variant='heading.6' color='white'>
          {children}
        </Text>
      ) : (
        children
      )}
    </Box>
  </Box>
)
