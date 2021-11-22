import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileBox } from './profile-box'
import * as faker from 'faker'

export default {
  title: 'Layout/Profile Box',
  component: ProfileBox
} as ComponentMeta<typeof ProfileBox>

const Template: ComponentStory<typeof ProfileBox> = (args) => (
  <ProfileBox {...args} />
)

export const Small = Template.bind({})
Small.args = {
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  size: 'lg'
}

export const XLarge = Template.bind({})
XLarge.args = {
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  size: 'xl'
}

export const Compact = Template.bind({})
Compact.args = {
  variant: 'compact',
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  jobTitle: faker.name.jobTitle(),
  size: 'lg'
}

export const Wide = Template.bind({})
Wide.args = {
  variant: 'wide',
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  jobTitle: faker.name.jobTitle(),
  size: 'lg'
}
