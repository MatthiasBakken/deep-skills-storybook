import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ProfileBox } from '../profile-box/profile-box'
import { IUser } from '../../../interfaces'

export interface FeedbackItemProps {
  /**
   * User
   * @type IUser
   */
  user: IUser
  /**
   * Main content
   */
  content: string
}
export const FeedbackItem: FC<FeedbackItemProps> = ({ content, user }) => (
  <Box pl='24px'>
    <Text color='gray.79' mb='10px'>
      {content}
    </Text>
    <Box display='flex' alignItems='center' flexWrap='wrap'>
      <ProfileBox
        size='sm'
        name={user.fullName}
        avatarUrl={user.avatar}
        jobTitle={user.jobTitle}
      />
    </Box>
  </Box>
)
