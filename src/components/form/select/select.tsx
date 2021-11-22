import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'
import { Box, Collapse, Input, useDisclosure } from '@chakra-ui/react'

export interface SelectProps {
  options: any[]
  onSelect: (value: any) => void
  renderOption?: (option: any) => ReactElement<any>
  labelKey?: string
  valueKey?: string
  placeholder?: string
  getId?: (option: any) => string
}

export const Select: FC<SelectProps> = ({
  renderOption,
  options,
  getId,
  placeholder,
  valueKey,
  labelKey = 'label',
  onSelect
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    setResults(options)
  }, [options])

  const handleFilterOptions = (value: string) => {
    setResults(
      options.filter((option) =>
        (labelKey ? option[labelKey] : option)
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    if (value) {
      handleFilterOptions(value)
    } else {
      setResults(options)
    }
    onOpen()
  }

  const handleSelect = (option: any) => {
    const value = valueKey ? option[valueKey] : option
    onSelect(value)
    setSearchValue(value)
    onClose()
  }

  return (
    <Box position='relative' zIndex='10000'>
      <Input
        data-testid='select-input'
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={onOpen}
        onBlur={onClose}
      />
      <Collapse in={isOpen}>
        <Box
          p='4px 0'
          overflowX='hidden'
          bg='gray.18'
          rounded='24px'
          minH='50px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          left='0'
          right='0'
        >
          {results.length === 0 && (
            <Box
              p='4px 0'
              bg='gray.18'
              rounded='24px'
              minH='50px'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              No results
            </Box>
          )}
          {renderOption
            ? results.map((option, index) => (
                <Box
                  key={getId ? getId(option) : index}
                  data-testid={`select-option-${index}`}
                  bg='gray.24'
                  p='8px 25px 10px'
                  mb='1px'
                  display='flex'
                  alignItems='center'
                  cursor='pointer'
                  width='100%'
                  onClick={() => handleSelect(option)}
                >
                  {renderOption(option)}
                </Box>
              ))
            : results.map((option, index) => (
                <Box
                  key={getId ? getId(option) : index}
                  data-testid={`select-option-${index}`}
                  p='8px 25px 10px'
                  bg='gray.24'
                  mb='1px'
                  display='flex'
                  alignItems='center'
                  cursor='pointer'
                  width='100%'
                  onClick={() => handleSelect(option)}
                >
                  {option[labelKey]}
                </Box>
              ))}
        </Box>
      </Collapse>
    </Box>
  )
}
