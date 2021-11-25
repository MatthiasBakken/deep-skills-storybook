import { Box, Button, Text } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { OverviewSidebar } from './overview-sidebar'
import * as faker from 'faker'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SkillBox } from '../../data-display/skill-box/skill-box'

export default {
  title: 'Layout/Overview sidebar',
  component: OverviewSidebar
} as ComponentMeta<typeof OverviewSidebar>

const Template: ComponentStory<typeof OverviewSidebar> = (args) => (
  <Box minH='100vh' display='flex'>
    <OverviewSidebar {...args}>
      <div>
        <Box>
          <Button mb={'50px'}>Edit</Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
        >
          <Button
            as='a'
            href={''}
            target='_blank'
            variant='link'
            rightIcon={<ExternalLinkIcon />}
            mb={'30px'}
          >
            Website
          </Button>
          <Button
            as='a'
            href={''}
            target='_blank'
            variant='link'
            rightIcon={<ExternalLinkIcon />}
            mb={'30px'}
          >
            Knowledge base
          </Button>
          <Button
            as='a'
            href={''}
            target='_blank'
            variant='link'
            rightIcon={<ExternalLinkIcon />}
            mb={'50px'}
          >
            Discord Community
          </Button>
        </Box>
        <Box mb={'50px'}>
          <Text variant={'heading.3'} color={'white'} mb={'18px'}>
            Skills
          </Text>
          <SkillBox label='Creative Direction' />
        </Box>
      </div>
    </OverviewSidebar>
    <Box bg='gray.22'>
      <Box p={4}>
        <h1>Overview</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisi nisi aliquam tortor,
          eget tincidunt nunc nisi eget nunc.
        </p>
      </Box>
    </Box>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  title: faker.company.companyName(),
  description: 'Lorem ipsum dolor sit amet, consectetur ipiscing elit.',
  avatar: faker.internet.avatar()
}
