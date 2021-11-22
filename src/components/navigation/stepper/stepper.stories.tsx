import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Stepper } from './stepper'

export default {
  title: 'Navigation/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />

export const Default = Template.bind({})
Default.args = {
  activeStep: 2,
  steps: [
    {
      label: 'Review'
    },
    {
      label: 'Payment'
    },
    {
      label: 'Payment 2'
    },
    {
      label: 'Confirmation'
    }
  ]
}
