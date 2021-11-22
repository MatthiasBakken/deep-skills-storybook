import React, { FC } from 'react'
import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { DataBox } from '../../data-display/data-box/data-box'
import { ScopeOfWorkValue } from '../../data-display/data-box/scope-of-work-value/scope-of-work-value'
import { RoundedBox } from '../../data-display/rounded-box/rounded-box'
import { IUser } from '../../../interfaces'
import { ProfileBox } from '../profile-box/profile-box'
import { Budget } from '../../data-display/data-box/budget/budget'

export interface ApplicationCardProps {
  /**
   * Title of all application cards
   */
  title: string
  /**
   * The url to role details, it will open a separate tab
   */
  detailsUrl: string
  /**
   * To display the status bar, that the application is in review
   */
  inReview?: boolean
  /**
   * Props for the lead position
   */
  lead: RoleItemProps
  /**
   * Props for the contributor position
   */
  contributor: RoleItemProps
  /**
   * The callback for the Apply as * button
   */
  onApplyClick?: (roleId: string) => void
  /**
   * The callback for withdrawing an application
   */
  onWithdrawClick?: (roleId: string) => void
  /**
   * The callback for clicking on the tasks amount
   */
  onTasksClick?: (roleId: string) => void
}
export const ApplicationCard: FC<ApplicationCardProps> = ({
  title,
  detailsUrl,
  inReview,
  lead,
  contributor,
  onWithdrawClick,
  onTasksClick,
  onApplyClick
}) => (
  <Box display='flex' flexDirection='column'>
    <Box display='flex' justifyContent='space-between' mb='14px'>
      <Text color='white' variant='heading.4'>
        {title}
      </Text>
      <Button
        as='a'
        href={detailsUrl}
        target='_blank'
        variant='link'
        rightIcon={<ExternalLinkIcon />}
      >
        Role details
      </Button>
    </Box>
    {inReview && (
      <RoundedBox px='25px' py='10px' bg='gray.22' mb='7px'>
        <Text color='gray.79'>Your application is in review</Text>
      </RoundedBox>
    )}
    <Box borderRadius='12px' overflow='hidden'>
      <Item
        variant='lead'
        onApplyClick={onApplyClick}
        onTasksClick={onTasksClick}
        onWithdrawClick={onWithdrawClick}
        {...lead}
      />
      <Item
        variant='contributor'
        onApplyClick={onApplyClick}
        onTasksClick={onTasksClick}
        onWithdrawClick={onWithdrawClick}
        {...contributor}
      />
    </Box>
  </Box>
)

interface RoleItemProps {
  roleId: string
  user?: IUser
  alreadyApplied?: boolean
  status?: 'open' | 'pending' | 'closed'
  dates: string
  scopeOfWork: {
    tasks: number
    tasksTooltip?: string
    hoursAmount: number | number[]
    hoursAmountTooltip?: string
  }
  budget: {
    estimatedPayment: string | string[]
    estimatedPaymentTooltip?: string
  }
}
interface _ItemProps {
  variant: 'lead' | 'contributor'
  onApplyClick?: (roleId: string) => void
  onWithdrawClick?: (roleId: string) => void
  onTasksClick?: (roleId: string) => void
}
const Item: React.FC<RoleItemProps & _ItemProps> = ({
  variant,
  roleId,
  user,
  status = 'open',
  alreadyApplied,
  dates,
  scopeOfWork,
  budget,
  onApplyClick,
  onWithdrawClick,
  onTasksClick
}) => {
  const handleApplyClick = () => {
    onApplyClick && onApplyClick(roleId)
  }
  const handleWithdrawClick = () => {
    onWithdrawClick && onWithdrawClick(roleId)
  }
  const handleTasksClick = () => {
    onTasksClick && onTasksClick(roleId)
  }
  return (
    <Box
      bg={variant === 'lead' ? 'gray.22' : 'gray.24'}
      px='20px'
      py='16px'
      display='grid'
      alignItems='center'
      justifyItems='flex-start'
      gridTemplateColumns={{
        base: 'max-content',
        md: 'max-content 1fr auto'
      }}
      gridTemplateAreas={{
        base: `"dates-scopeOfWork"
        "estimatedPayment"
        "avatar-content"`,
        md: '"avatar-content dates-scopeOfWork estimatedPayment"'
      }}
    >
      <Box
        gridArea='avatar-content'
        display='flex'
        alignItems='center'
        width={{ base: 'auto', md: '330px' }}
      >
        {user ? (
          status === 'pending' ? (
            <>
              <Avatar size='md' src={user.avatar} />
              <Button ml='16px' onClick={handleWithdrawClick}>
                Withdraw application
              </Button>
            </>
          ) : (
            <ProfileBox
              size='md'
              variant='compact'
              avatarUrl={user.avatar}
              name={user.fullName}
              jobTitle={user.jobTitle}
            />
          )
        ) : (
          <>
            <Avatar size='md' />
            <Button
              onClick={handleApplyClick}
              disabled={alreadyApplied || status === 'closed'}
              ml='16px'
            >
              {variant === 'lead'
                ? 'Apply for lead role'
                : 'Apply as contributor'}
            </Button>
          </>
        )}
      </Box>
      <Box
        gridArea='dates-scopeOfWork'
        display='grid'
        gridColumnGap='20px'
        gridTemplateColumns='1fr 1fr'
        gridTemplateAreas='"dates scopeOfWork"'
        width='100%'
        alignItems='center'
      >
        <DataBox
          label='Dates'
          boxProps={{
            gridArea: 'dates',
            justifySelf: 'stretch',
            width: { base: 'auto', md: '200px' }
          }}
        >
          {dates}
        </DataBox>
        <DataBox
          label='Scope of work'
          tooltipLabel={scopeOfWork.tasksTooltip}
          boxProps={{
            gridArea: 'scopeOfWork',
            width: { base: 'auto', md: '200px' }
          }}
        >
          <ScopeOfWorkValue
            taskAmount={scopeOfWork.tasks}
            onTaskClick={handleTasksClick}
            hourAmount={scopeOfWork.hoursAmount}
          />
        </DataBox>
      </Box>
      <DataBox
        label='Estimated payment'
        tooltipLabel={budget.estimatedPaymentTooltip}
        boxProps={{
          gridArea: 'estimatedPayment',
          width: { base: 'auto', md: '200px' },
          my: { base: '24px', sm: '0' }
        }}
      >
        <Budget budget={budget.estimatedPayment} />
      </DataBox>
    </Box>
  )
}
