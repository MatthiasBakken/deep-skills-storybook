import { Box, Input, Tag, TagCloseButton, Text } from '@chakra-ui/react'
import { ChangeEvent, FC, useState } from 'react'

export interface ChipInputProps {
  chips: string[]
  onChange: (values: string[]) => void
  placeholder?: string
}

export const ChipInput: FC<ChipInputProps> = ({
  chips = [],
  placeholder,
  onChange
}) => {
  const [inputValue, setInputValue] = useState('')
  const [chipValues, setChipValues] = useState(chips)

  const handleChange = (value: string) => {
    const updated = [...chipValues, value.split(' ')[0]]
    setChipValues(updated)
    onChange(updated)
  }

  const handleRemove = (value: string) => () => {
    const updated = chipValues.filter((v) => v !== value)
    setChipValues(updated)
    onChange(updated)
  }

  const handleSetInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const indexOfSpace = value.indexOf(' ')
    if (indexOfSpace > -1) {
      handleChange(value)
      setInputValue('')
    } else {
      setInputValue(value)
    }
  }

  return (
    <Box
      data-testid='chip-input'
      borderRadius='8px'
      display='flex'
      alignItems='center'
      border='1px solid'
      borderColor='primary'
      flexWrap='wrap'
      p={'9px 0'}
    >
      {chipValues.map((value, index) => (
        <Tag
          key={index}
          size='md'
          borderRadius='full'
          variant='solid'
          p='4px 20px 4px 16px'
          bg='gray.18'
          ml={index === 0 ? '25px' : 0}
          mr={index === chipValues.length - 1 ? 0 : '16px'}
          data-testid={`chip-input-chip-${index}`}
        >
          <Text variant='small' color='white'>
            {value}
          </Text>
          <TagCloseButton
            data-testid={`chip-input-chip-${index}-remove`}
            onClick={handleRemove(value)}
            color='white'
          />
        </Tag>
      ))}
      <Input
        width='auto'
        minW={'140px'}
        height='auto'
        flex={1}
        value={inputValue}
        onChange={handleSetInputValue}
        placeholder={placeholder}
        border={0}
        _focus={{
          boxShadow: 'none'
        }}
      />
    </Box>
  )
}
