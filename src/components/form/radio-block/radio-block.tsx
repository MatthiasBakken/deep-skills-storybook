import React, { FC } from 'react'
import {
  FormControl,
  FormLabel,
  Radio,
  RadioProps,
  Text
} from '@chakra-ui/react'

interface Props {
  label: string
  description: string
  radioProps?: RadioProps
}
export const RadioBlock: FC<Props> = ({ label, description, radioProps }) => {
  return (
    <FormControl
      p={'25px 20px 23px'}
      bg='gray.24'
      width='240px'
      borderRadius='12px'
      display='flex'
      flexDirection='column'
    >
      <Radio mb='16px' {...radioProps} />
      <FormLabel>
        <Text variant='heading.5' mb='14px'>
          {label}
        </Text>
        <Text variant='small'>{description}</Text>
      </FormLabel>
    </FormControl>
  )
}
