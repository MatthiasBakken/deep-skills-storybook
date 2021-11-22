import React from 'react'
import { Avatar, Box, BoxProps, Text, Tooltip } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

interface Props {
  label: string
  helperText?: string
  tooltipText?: string
  color?: string
  imageSrc?: string
  size?: 'sm' | 'md' | 'lg'
}
export const OrganizationButton: React.FC<Props & BoxProps> = ({
  label,
  helperText,
  imageSrc,
  color = 'white',
  size = 'md',
  tooltipText,
  ...rest
}) => {
  const { width, height, lineHeight, fontSize } = getSize(size)
  return (
    <Box display='flex' alignItems='center' {...rest}>
      <Avatar
        data-testid='organization-button-image'
        borderRadius='full'
        width={width}
        height={height}
        src={imageSrc}
        marginRight='12px'
      />
      <Box>
        <Box mb='2px'>
          <Text
            color={color}
            fontWeight={700}
            fontSize={helperText ? 'sm' : fontSize}
            lineHeight={helperText ? '17.71px' : lineHeight}
          >
            {label}
          </Text>
        </Box>
        {!!helperText && (
          <Box display='flex'>
            <Text
              color='gray.79'
              fontSize='sm'
              fontWeight={450}
              lineHeight='17.71px'
              mr='5px'
            >
              {helperText}
            </Text>
            {!!tooltipText && (
              <Tooltip label={tooltipText} fontSize='sm'>
                <InfoIcon color='gray.79' />
              </Tooltip>
            )}
          </Box>
        )}
      </Box>
    </Box>
  )
}

function getSize(size: string): {
  width: string
  height: string
  lineHeight: string
  fontSize: string
} {
  if (size === 'sm') {
    return {
      width: '30px',
      height: '30px',
      lineHeight: '20.24px',
      fontSize: 'sm'
    }
  }
  if (size === 'md') {
    return {
      width: '35px',
      height: '35px',
      lineHeight: '20.24px',
      fontSize: 'md'
    }
  }
  return {
    width: '65px',
    height: '65px',
    lineHeight: '35.42px',
    fontSize: '3xl'
  }
}
