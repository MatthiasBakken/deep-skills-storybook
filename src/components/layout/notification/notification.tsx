import { FC } from 'react'
import { RoundedBox } from '../../data-display/rounded-box/rounded-box'
import { BellIcon } from '@chakra-ui/icons'
import { Box, Button, Text } from '@chakra-ui/react'

export interface NotificationProps {
  /**
   * Button text
   */
  buttonLabel: string
  /**
   * Button action
   */
  onReviewClick: () => void
}

export const Notification: FC<NotificationProps> = ({
  buttonLabel,
  onReviewClick,
  children
}) => {
  return (
    <RoundedBox
      bg='gray.24'
      display='flex'
      alignItems='center'
      py='16px'
      px='24px'
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='#fff'
        borderRadius='50%'
        w={{ base: '32px', md: '46px' }}
        h={{ base: '32px', md: '46px' }}
        fontSize={{ base: '18px', md: '28px' }}
      >
        <BellIcon color='primary' />
      </Box>
      <Box flex='1 0 auto'>
        <Text variant='paragraph.l' ml='16px' color='white'>
          {children}
        </Text>
      </Box>
      <Button onClick={onReviewClick} textTransform='capitalize'>
        {buttonLabel}
      </Button>
    </RoundedBox>
  )
}
