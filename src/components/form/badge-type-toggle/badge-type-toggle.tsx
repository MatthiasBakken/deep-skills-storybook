import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { capitalizeFirstLetter } from '../../../utils/texts';

export interface BadgeTypeToggleProps {
  value: BadgeType
  disabled?: boolean
  onChange?: (value: string) => void
}

export enum BadgeType {
  shadowed = 'shadowed',
  completed = 'completed'
}

export const BadgeTypeToggle = ({
  onChange,
  disabled,
  value
}: BadgeTypeToggleProps) => {
  const [selected, setSelected] = useState(value)

  const handleToggle = (value: BadgeType) => () => {
    if (!disabled) {
      setSelected(value)
      onChange && onChange(value)
    }
  }

  return (
    <Box
      w='192px'
      h='34px'
      bg='gray.28'
      p='4px'
      borderRadius='24px'
      display='flex'
    >
      <ToggleItem
        value={BadgeType.shadowed}
        onChange={handleToggle(BadgeType.shadowed)}
        disabled={!!disabled}
        selected={selected}
      />
      <ToggleItem
        value={BadgeType.completed}
        onChange={handleToggle(BadgeType.completed)}
        disabled={!!disabled}
        selected={selected}
      />
    </Box>
  )
}

const ToggleItem = ({
  value,
  onChange,
  disabled,
  selected
}: {
  value: BadgeType
  onChange: (value: string) => void
  disabled: boolean
  selected: BadgeType
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(value)
    }
  }

  return (
    <Box
      borderRadius='24px'
      cursor='pointer'
      bg={
        selected === value ? (disabled ? 'gray.36' : 'primary') : 'transparent'
      }
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='26px'
      width='92px'
      onClick={handleToggle}
    >
      <Text
        p='4px'
        color={
          selected === value ? (disabled ? 'gray.50' : 'white') : 'gray.50'
        }
        variant='button'
      >
        {capitalizeFirstLetter(value)}
      </Text>
    </Box>
  )
}
