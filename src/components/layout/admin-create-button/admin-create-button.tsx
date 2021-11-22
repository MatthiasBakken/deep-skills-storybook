import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AddIcon } from '@chakra-ui/icons'

export const AdminCreateButton: FC<ButtonProps> = ({ ...props }) => (
  <Button
    w='100%'
    borderRadius='12px'
    bg='gray.24'
    p='21.5px 25px'
    variant='link'
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    rightIcon={<AddIcon w='18px' h='18px' />}
    {...props}
  >
    <Text
      variant={'heading.3'}
      color={props.color ?? 'primary'}
      display='flex'
      flex='1 0 auto'
    >
      {props.children}
    </Text>
  </Button>
)
