import React, { FC } from 'react'
import {
  Box,
  BoxProps,
  Button,
  Collapse,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { TaskItem, TaskItemProps } from '../task-item/task-item'

interface CollapsableTaskSetComposition {
  TaskItem: React.FC<TaskItemProps>
}
export interface CollapsableTaskListProps {
  /**
   * The main text
   */
  label: string
  /**
   * Helper text
   */
  helperText: string
  boxProps?: BoxProps
}
export const CollapsableTaskSet: FC<CollapsableTaskListProps> &
  CollapsableTaskSetComposition = ({
  label,
  helperText,
  boxProps,
  children
}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Box
        borderRadius={isOpen ? '12px 12px 0 0' : '12px'}
        bg='gray.24'
        px='25px'
        py='23px'
        display='flex'
        alignItems={{ base: 'unset', md: 'center' }}
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
        {...boxProps}
      >
        <Box
          display='flex'
          mr={{ base: '0', md: '37px' }}
          mb={{ base: '12px', md: '0' }}
        >
          <Text variant='heading.4' color='white'>
            {label}
          </Text>
        </Box>
        <Box display='flex' flex='1 0 auto' justifyContent='space-between'>
          <Box display='flex' flex='1 0 auto'>
            <Text variant='heading.6' color='white'>
              {helperText}
            </Text>
          </Box>
          <Button
            onClick={onToggle}
            variant='link'
            rightIcon={
              <Box
                height='16px'
                width='16px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='50%'
                bg='primary'
              >
                {isOpen ? (
                  <ArrowUpIcon color='#2D3A4A' />
                ) : (
                  <ArrowDownIcon color='#2D3A4A' />
                )}
              </Box>
            }
          >
            {isOpen ? 'Close' : 'Expand'}
          </Button>
        </Box>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </div>
  )
}

CollapsableTaskSet.TaskItem = TaskItem
