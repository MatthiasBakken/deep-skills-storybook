import React, { FC } from 'react'
import { Box, BoxProps, Text } from '@chakra-ui/react'
import { Tag } from '../../data-display/tag'
import { OrganizationButton } from '../organization-button/organization-button'
import { AvatarList } from '../../data-display/avatar-list/avatar-list'
import { TagValuesEnum } from '../../../interfaces'

export interface PrimaryCardProps {
  /**
   * Click handler for the primary card
   */
  onCardClick: () => void
  /**
   * Organization name
   */
  organizationName: string
  /**
   * Organization avatar
   */
  organizationImage: string
  /**
   * Organization helper text and tooltip if existent
   */
  organizationHelperText?: {
    text: string
    tooltipText?: string
  }
  /**
   * Project title
   */
  projectTitle?: string
  /**
   * Project description
   */
  projectDescription?: string
  /**
   * Project date range
   */
  dateRange?: string
  /**
   * Project tag
   */
  tag?: TagValuesEnum
  /**
   * Project status
   */
  status?: string
  /**
   * Project member avatars
   */
  users?: string[]
  boxProps?: BoxProps
}

export const PrimaryCard: FC<PrimaryCardProps> = ({
  onCardClick,
  organizationHelperText,
  organizationImage,
  organizationName,
  projectTitle,
  projectDescription,
  tag,
  status,
  dateRange,
  users,
  children,
  boxProps
}) => (
  <Box
    {...boxProps}
    bg='gray.22'
    borderRadius='12px'
    w={{ base: '350px', md: '290px' }}
    onClick={onCardClick}
  >
    <Box p='13px 25px 11px' borderBottom='1px solid' borderColor='gray.18'>
      <OrganizationButton
        label={organizationName}
        imageSrc={organizationImage}
        helperText={organizationHelperText?.text}
        tooltipText={organizationHelperText?.tooltipText}
        size='md'
      />
    </Box>
    <Box
      p='14px 25px 18px'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box marginBottom='24px'>
        {!!projectTitle && (
          <Box mb='10px'>
            <Text color='white' variant='heading.3'>
              {projectTitle}
            </Text>
          </Box>
        )}
        {!!projectDescription && (
          <Box mb='10px'>
            <Text color='white' variant='paragraph'>
              {projectDescription}
            </Text>
          </Box>
        )}

        <Box
          display='flex'
          flexDirection={{ base: 'row', md: 'column' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          justifyContent={{ base: 'space-between', md: 'center' }}
        >
          {!!dateRange && (
            <Box mb={{ base: 'unset', md: '10px' }} order={{ base: 2, md: 1 }}>
              <Text color='gray.79' variant='heading.6'>
                {dateRange}
              </Text>
            </Box>
          )}
          {!!tag && (
            <Box order={{ base: 1, md: 2 }}>
              <Tag value={tag} selected />
            </Box>
          )}
        </Box>
      </Box>
      {!!status && (
        <Box mb='24px'>
          {status && (
            <Box mb='5px'>
              <Text
                color='fluorescent'
                fontWeight='450'
                lineHeight='17.71px'
                fontSize='sm'
              >
                {status}
              </Text>
            </Box>
          )}
        </Box>
      )}
      <Box
        display='flex'
        flexDirection={{ base: 'row', md: 'column' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        {!!children && <Box mb={{ base: 'unset', md: '24px' }}>{children}</Box>}
        {!!users?.length && <AvatarList size='sm' avatars={users} />}
      </Box>
    </Box>
  </Box>
)
