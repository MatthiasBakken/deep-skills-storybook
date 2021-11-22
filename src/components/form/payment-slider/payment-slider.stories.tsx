import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PaymentSlider } from './payment-slider'

export default {
  title: 'Form/Payment Slider',
  component: PaymentSlider,
  argTypes: {
    onChange: { action: 'changed' }
  }
} as ComponentMeta<typeof PaymentSlider>

const Template: ComponentStory<typeof PaymentSlider> = (args) => (
  <PaymentSlider {...args} />
)

export const Default = Template.bind({})
Default.args = {
  colleagueName: 'Vikrant'
}
