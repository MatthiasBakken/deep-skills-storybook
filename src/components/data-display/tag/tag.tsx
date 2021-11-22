import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { TagValuesEnum } from '../../../interfaces'

interface Props {
  /**
   * Tag value to display
   */
  value: TagValuesEnum
  disabled?: boolean
  selected?: boolean
  onClick?: (value: TagValuesEnum) => void
  textProps?: TextProps
}
export const Tag: React.FC<Props> = ({
  disabled,
  selected,
  value,
  onClick,
  textProps
}) => {
  const color = getColorBasedOnValue(value)
  const background = disabled ? 'gray.28' : color
  const fontColor = disabled ? 'gray.50' : selected ? 'white' : color

  const handleClick = () => {
    onClick && onClick(value)
  }
  return (
    <Text
      {...textProps}
      variant='xx.small'
      as='span'
      display='inline-flex'
      justifyContent='center'
      alignItems='center'
      px='12px'
      py='3px'
      height='20px'
      borderRadius='17px'
      color={fontColor}
      border='1px solid'
      textTransform='capitalize'
      borderColor={background}
      bg={selected || disabled ? background : 'transparent'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      onClick={disabled ? () => undefined : handleClick}
    >
      {splitCamelCase(value)}
    </Text>
  )
}

function splitCamelCase(value: string) {
  return value.replace(/([A-Z])/g, ' $1')
}

function getColorBasedOnValue(value: string): string {
  switch (value) {
    case TagValuesEnum.design:
      return 'pink'
    case TagValuesEnum.dataScience:
      return 'teal'
    case TagValuesEnum.marketing:
      return 'brown2'
    case TagValuesEnum.foodIndustry:
      return 'brown1'
    default:
      return 'pink'
  }
}
