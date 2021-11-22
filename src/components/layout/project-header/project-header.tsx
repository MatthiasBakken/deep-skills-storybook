import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { DataBox } from '../../data-display/data-box/data-box'

interface Props {
  title: string
  description?: string
  detailsList?: {
    label: string
    content: string | React.ReactNode
    tooltipLabel?: string
  }[]
  detailsUrl?: string
}
export const ProjectHeader: React.FC<Props> = ({
  title,
  description,
  detailsList,
  detailsUrl
}) => (
  <Box>
    <Box mb='21px'>
      <Text variant='heading.1' color='white'>
        {title}
      </Text>
    </Box>
    {!!detailsList && detailsList.length > 0 && (
      <Box
        mb={{ base: '0', md: '28px' }}
        display='flex'
        alignItems='center'
        flexWrap='wrap'
      >
        {detailsList.map((item, index) => (
          <DataBox
            key={index}
            label={item.label}
            boxProps={{
              mr: { base: '0', md: '40px' },
              mb: { base: '24px', md: '0' },
              w: { base: '50%', md: 'auto' }
            }}
          >
            {item.content}
          </DataBox>
        ))}
      </Box>
    )}
    {!!description && (
      <Box mb='17px'>
        <Text>{description}</Text>
      </Box>
    )}
    {!!detailsUrl && (
      <Button
        as='a'
        href={detailsUrl}
        target='_blank'
        variant='link'
        rightIcon={<ExternalLinkIcon />}
      >
        Project details
      </Button>
    )}
  </Box>
)
