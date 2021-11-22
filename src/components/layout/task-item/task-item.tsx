import React, { FC } from 'react'
import {
  Box,
  BoxProps,
  Button,
  Collapse,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'

export interface TaskItemProps {
  /**
   * Size option
   * @default sm
   */
  size?: 'sm' | 'lg'
  /**
   * The element before the title
   */
  beforeElement?: React.ReactNode
  /**
   * Edit click callback, it will show the edit button if it's passed
   */
  onEditClick?: () => void
  /**
   * Title
   */
  title: string
  /**
   * Helper text
   */
  helperText?: string
  /**
   * Description
   */
  description?: string
  /**
   * Will open the url in a new tab
   */
  detailsLink?: string
  /**
   * BoxProps are used for extra styling on the wrapper Box
   */
  boxProps?: BoxProps
}
export const TaskItem: FC<TaskItemProps> = ({
  size = 'sm',
  title,
  helperText,
  beforeElement,
  detailsLink,
  onEditClick,
  description,
  boxProps
}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      bg='gray.22'
      borderRadius='12px'
      px='25px'
      py='15px'
      minHeight='57px'
      {...boxProps}
    >
      <Box width='100%'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          flex='1 0 auto'
        >
          <Box display='flex' alignItems='center' flex='1 0 auto'>
            <Box display='flex' alignItems='center' flex='.8 0 auto'>
              {beforeElement ? (
                <Box display='flex' mr='15px'>
                  {beforeElement}
                </Box>
              ) : null}
              <Text variant='heading.4' color='white'>
                {title}
              </Text>
            </Box>
            {!!helperText && (
              <Text
                color='fluorescent'
                variant={size === 'lg' ? 'heading.7' : 'small'}
              >
                {helperText}
              </Text>
            )}
          </Box>

          <IconButton
            variant='ghost'
            aria-label={isOpen ? 'open collapse' : 'close collapse'}
            onClick={onToggle}
            icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          />
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Text variant='small' color='white' my='16px'>
            {description}
          </Text>
          <Box
            display='flex'
            justifyContent={onEditClick ? 'space-between' : 'flex-end'}
          >
            {!!onEditClick && (
              <Button variant='link' mr='12px' onClick={onEditClick}>
                Edit
              </Button>
            )}
            {!!detailsLink && (
              <Button
                as='a'
                variant='link'
                href={detailsLink}
                target='_blank'
                rightIcon={<ExternalLinkIcon />}
              >
                Task Details
              </Button>
            )}
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}
