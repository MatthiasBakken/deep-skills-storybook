import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Header } from './header'
import faker from 'faker'
import { IUser } from '../../../../../interfaces/src'

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {
    onLoginClick: { action: 'login clicked' },
    onAvatarClick: { action: 'avatar clicked' },
    onNavigationLinkClick: { action: 'navigation link clicked' }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  links: [
    {
      label: 'Organisations',
      route: 'organisations'
    }
  ]
}
export const LoggedIn = Template.bind({})
LoggedIn.args = {
  links: [
    {
      label: 'Organisations',
      route: 'organisations'
    },
    {
      label: 'Projects',
      route: 'projects'
    }
  ],
  user: {
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName()
  } as IUser
}
