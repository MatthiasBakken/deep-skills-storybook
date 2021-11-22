import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { LoginModal } from './login'

export default {
  title: 'Modals/Login',
  component: LoginModal,
  argTypes: {
    onClose: { action: 'close clicked' },
    onForgotPassword: { action: 'forgot password clicked' },
    onLogin: { action: 'login clicked' },
    onRegister: { action: 'sign up clicked' }
  }
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}
