import { Avatar, Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { RoundedBox } from '../../data-display/rounded-box/rounded-box'

export interface OverviewSidebarProps {
  title: string
  description: string
  avatar: string
}

export const OverviewSidebar: FC<OverviewSidebarProps> = ({
  title,
  avatar,
  description,
  children
}) => (
  <Box width='235px' mt='-65px'>
    <Box display={'flex'} justifyContent={'center'} mb={'-65px'}>
      <Avatar src={avatar} size={'lg'} />
    </Box>
    <RoundedBox pt={'65px'}>
      <Text variant='heading.1' color='gray.96' mt={'18px'} mb={'9px'}>
        {title}
      </Text>
      <Text mb={'18px'}>{description}</Text>
      {children}
    </RoundedBox>
  </Box>
)
