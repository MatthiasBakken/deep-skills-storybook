import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  /**
   * Steps array to display
   */
  steps: { label: string }[]
  /**
   * Active step, starts with 1
   * @default 1
   */
  activeStep?: number
}
export const Stepper: React.FC<Props> = ({
  steps,
  activeStep = 1,
  children
}) => {
  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
        {steps.map((item, index) => (
          <Step key={index} {...item} isActive={index <= activeStep - 1} />
        ))}
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

interface StepProps {
  label: string
  isActive: boolean
}
const Step: React.FC<StepProps> = ({ label, isActive }) => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    alignItems='center'
    flex='1 0 auto'
    position='relative'
    _notFirst={{
      _before: {
        content: '""',
        position: 'absolute',
        bottom: 'calc(36px / 2)',
        left: 'calc(-50% + 18px)',
        width: 'calc(100% - 18px)',
        height: '2px',
        background: isActive ? 'primary' : 'white',
        order: '-1'
      }
    }}
  >
    <Box mb='14px'>
      <Text variant='heading.3' color={isActive ? 'white' : 'gray.58'}>
        {label}
      </Text>
    </Box>
    <Box
      h='36px'
      w='36px'
      bg={isActive ? 'primary' : 'gray.58'}
      border='8px solid'
      borderColor='gray.12'
      borderRadius='100%'
      zIndex='5'
    />
  </Box>
)
