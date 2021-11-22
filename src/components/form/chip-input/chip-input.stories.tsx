import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { ChipInput } from './chip-input'

export default {
  title: 'Form/Chip Input',
  component: ChipInput,
  argTypes: {
    onChange: { action: 'profile selected' }
  }
} as ComponentMeta<typeof ChipInput>

const Template: ComponentStory<typeof ChipInput> = (args) => (
  <ChipInput {...args} />
)

export const Default = Template.bind({})
Default.args = {}
