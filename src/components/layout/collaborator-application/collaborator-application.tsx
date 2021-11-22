import React, { FC } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { ProfileBox } from '../profile-box/profile-box'
import { IUser } from '../../../interfaces'

export interface CollaboratorApplicationProps {
  /**
   * IUser
   */
  user: IUser
  /**
   * Job title
   */
  jobTitle: string
  /**
   * Confirm button
   */
  onConfirm: () => void
}

export const CollaboratorApplication: FC<CollaboratorApplicationProps> = ({
  user,
  jobTitle,
  onConfirm,
  children
}) => (
  <Box>
    <Box
      px='20px'
      py='16px'
      bg='gray.22'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderRadius='12px 12px 0 0'
    >
      <Box display='flex' alignItems='center'>
        <ProfileBox
          variant='compact'
          name={user.fullName}
          jobTitle={jobTitle}
          avatarUrl={user.avatar}
        />
      </Box>
      <Box>
        <Button onClick={onConfirm}>
          Confirm
          <Box as='span' ml={1} display={{ base: 'none', md: 'inline-flex' }}>
            {user.firstName}
          </Box>
        </Button>
      </Box>
    </Box>
    <Box
      px='20px'
      py='16px'
      bg='gray.24'
      borderRadius='0 0 12px 12px'
      color='gray.79'
    >
      {children}
    </Box>
  </Box>
)
