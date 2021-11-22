import React from 'react'
import { OrganizationButton } from '../organization-button/organization-button'
import { Box, Button, Text } from '@chakra-ui/react'
import { Tag } from '../../data-display/tag'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IOrganisation, IProject } from '../../../interfaces'

export interface ProjectModalHeaderProps {
  organisation: Pick<IOrganisation, 'name' | 'imageUrl'>
  project: Partial<IProject>
}

export const ProjectModalHeader: React.FC<ProjectModalHeaderProps> = ({
  organisation,
  project
}) => {
  return (
    <>
      <OrganizationButton
        label={organisation.name}
        imageSrc={organisation.imageUrl}
        mb='12px'
      />
      <Box display='flex' mb='12px' alignItems='center'>
        <Text variant='heading.2' color='white' mr='16px'>
          {project.title}
        </Text>
        {project.tag && <Tag value={project.tag} selected />}
      </Box>
      {project.dateRange && (
        <Text variant='heading.5' color='white' mb='16px'>
          {project.dateRange}
        </Text>
      )}
      {!!project.url && (
        <Button
          as='a'
          href={project.url}
          variant='link'
          rightIcon={<ExternalLinkIcon />}
        >
          Project details
        </Button>
      )}
    </>
  )
}

export default ProjectModalHeader
