import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { ProfileSelection } from './profile-selection'
import { generateUser } from '../../../fake-data'

export default {
  title: 'Form/Profile Selection',
  component: ProfileSelection,
  argTypes: {
    onChange: { action: 'profile selected' }
  }
} as ComponentMeta<typeof ProfileSelection>

const Template: ComponentStory<typeof ProfileSelection> = (args) => (
  <ProfileSelection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Organisation admin',
  tooltipLabel: 'Select an organisation admin',
  possibleProfiles: [generateUser(), generateUser(), generateUser()]
}
