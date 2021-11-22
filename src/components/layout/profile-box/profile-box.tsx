import React from 'react'
import { Avatar, Box, BoxProps, Text } from '@chakra-ui/react'

interface Props {
  variant?: 'compact' | 'wide'
  name: string
  jobTitle?: string
  color?: string
  avatarUrl?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
  boxProps?: BoxProps
}
export const ProfileBox: React.FC<Props> = ({
  name,
  avatarUrl,
  jobTitle,
  variant = 'wide',
  color = 'primary',
  size = 'md',
  onClick,
  boxProps
}) => (
  <Box
    display='flex'
    alignItems='center'
    flexWrap='wrap'
    onClick={onClick ? onClick : undefined}
    {...boxProps}
  >
    <Avatar
      borderRadius='full'
      size={size}
      src={avatarUrl}
      alt={name}
      mr='16px'
    />
    <Box
      display='flex'
      flexDirection={variant === 'compact' ? 'column' : 'row'}
      alignItems={variant === 'compact' ? 'flex-start' : 'center'}
    >
      <Text
        as='span'
        color={color}
        fontWeight={700}
        fontSize={size}
        lineHeight='20.24px'
      >
        {name}
      </Text>
      {!!jobTitle && (
        <Text
          variant='heading.8'
          color='gray.79'
          ml={variant === 'compact' ? 0 : '8px'}
          mt={variant === 'compact' ? '7px' : 0}
        >
          {jobTitle}
        </Text>
      )}
    </Box>
  </Box>
)
