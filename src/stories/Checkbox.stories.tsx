import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from '@chakra-ui/react'
import * as React from 'react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const NotChecked = Template.bind({})
NotChecked.args = {}
export const Checked = Template.bind({})
Checked.args = {
  isChecked: true
}
export const Disabled = Template.bind({})
Disabled.args = {
  isChecked: false,
  isDisabled: true
}
export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  isChecked: true,
  isDisabled: true
}
