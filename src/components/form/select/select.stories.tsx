import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Select } from './select'

export default {
  title: 'Form/Select',
  component: Select,
  argTypes: {
    onSelect: { action: 'profile selected' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'select something',
  options: [
    {
      label: 'Profile 1',
      value: 'prof-1'
    },
    {
      label: 'Profile 2',
      value: 'prof-2'
    }
  ]
}
