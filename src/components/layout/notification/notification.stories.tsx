import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Notification } from './notification'

export default {
  title: 'Layout/Notification',
  component: Notification
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
)

export const Default = Template.bind({})
Default.args = {
  buttonLabel: 'review application',
  children: 'You have 2 new collaborator applications!'
}
