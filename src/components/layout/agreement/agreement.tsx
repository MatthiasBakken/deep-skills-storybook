import React, { FC } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text
} from '@chakra-ui/react'

export interface AgreementProps {
  /**
   * The name for the checkbox
   */
  name: string
  /**
   * The onChange handler for the checkbox
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The error for the checkbox
   */
  error?: string
}

export const Agreement: FC<AgreementProps> = ({ name, error, onChange }) => (
  <>
    <Text variant='heading.4' color='white' mb='23px'>
      Terms and conditions
    </Text>
    <FormControl
      id='agreement'
      isInvalid={!!error}
      display='flex'
      flexDirection='column'
    >
      <Box display='flex' alignItems='center'>
        <Checkbox id='agreement' name={name} onChange={onChange} />
        <FormLabel m='0 0 0 15px' htmlFor='agreement'>
          <Text variant='heading.6' color='gray.79'>
            I agree to the project terms and conditions
          </Text>
        </FormLabel>
      </Box>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  </>
)
