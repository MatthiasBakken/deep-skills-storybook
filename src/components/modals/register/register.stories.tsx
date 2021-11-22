import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { RegisterModal } from './register'

export default {
  title: 'Modals/Register',
  component: RegisterModal,
  argTypes: {
    onSignUpClicked: { action: 'sign up clicked' }
  }
} as ComponentMeta<typeof RegisterModal>

const Template: ComponentStory<typeof RegisterModal> = (args) => (
  <RegisterModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}
