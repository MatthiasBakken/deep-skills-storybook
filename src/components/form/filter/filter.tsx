import React, { FC, useEffect, useState } from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export interface Option {
  label: string
  value: string
}
interface Props {
  options: Option[]
  onSelect: (value: Option) => void
}
export const Filter: FC<Props> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState<Option>()

  const handleSelectMenuItem = (value: Option) => () => {
    setSelected(value)
    onSelect(value)
  }

  useEffect(() => {
    if (options && options.length > 0) {
      setSelected(options[0])
    }
  }, [options])

  return (
    <Menu autoSelect>
      <MenuButton as={Button} variant='link' rightIcon={<ChevronDownIcon />}>
        {selected?.label}
      </MenuButton>
      <MenuList>
        {options.map((item, index) => (
          <MenuItem key={index} onClick={handleSelectMenuItem(item)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
