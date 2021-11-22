import React from 'react'
import {
  Box,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Tooltip
} from '@chakra-ui/react'
import { useField } from 'formik'
import { InfoIcon } from '@chakra-ui/icons'

interface FormikInputControlProps {
  label: string
  tooltipLabel?: string
  name: string
  placeholder?: string
  type?: string
  styleProps?: FormControlProps
}

export const FormikInputControl: React.FC<FormikInputControlProps> = ({
  styleProps,
  ...props
}) => {
  const [field, meta] = useField(props.name)
  return (
    <FormControl isInvalid={!!meta.error} {...styleProps}>
      <FormLabel>
        <Box mb='8px' display='flex' alignItems='center'>
          <Text variant='heading.4' color='white' mr='8px'>
            {props.label}
          </Text>
          {!!props.tooltipLabel && (
            <Tooltip label={props.tooltipLabel}>
              <InfoIcon color='gray.79' />
            </Tooltip>
          )}
        </Box>
      </FormLabel>
      <Input
        type={props.type}
        required
        placeholder={props.placeholder}
        {...field}
      />
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error ?? ' '}</FormErrorMessage>
      )}
    </FormControl>
  )
}
