import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from '@chakra-ui/react'
import * as React from 'react'
import * as faker from 'faker'

export default {
  title: 'Data Display/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Avatar size={'2xs'} {...args} />
    <Avatar size={'xs'} {...args} />
    <Avatar size={'sm'} {...args} />
    <Avatar size={'md'} {...args} />
    <Avatar size={'lg'} {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {}

export const WithSrc = Template.bind({})
WithSrc.args = {
  src: faker.image.avatar()
}
