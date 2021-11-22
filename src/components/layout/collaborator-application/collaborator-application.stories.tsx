import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { CollaboratorApplication } from './collaborator-application'
import * as faker from 'faker'
import { generateUser } from '../../../fake-data'

export default {
  title: 'Layout/Collaborator Application',
  component: CollaboratorApplication
} as ComponentMeta<typeof CollaboratorApplication>

const Template: ComponentStory<typeof CollaboratorApplication> = (args) => (
  <CollaboratorApplication {...args} />
)

export const Default = Template.bind({})
Default.args = {
  user: generateUser(),
  children: faker.lorem.paragraphs(5)
}
