import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props {
  css?: any
}

export const CircleArrowRight: React.FC<Props & IconProps> = (props) => (
  <Icon viewBox='0 0 16 16' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.25 8.8H9.93934L8.21967 10.6343C7.92678 10.9467 7.92678 11.4533 8.21967 11.7657C8.51256 12.0781 8.98744 12.0781 9.28033 11.7657L12.2803 8.56569C12.5732 8.25327 12.5732 7.74673 12.2803 7.43431L9.28033 4.23431C8.98744 3.9219 8.51256 3.9219 8.21967 4.23431C7.92678 4.54673 7.92678 5.05327 8.21967 5.36569L9.93934 7.2H4.25C3.83579 7.2 3.5 7.55817 3.5 8C3.5 8.44183 3.83579 8.8 4.25 8.8Z'
      fill='#67A2FF'
    />
  </Icon>
)
