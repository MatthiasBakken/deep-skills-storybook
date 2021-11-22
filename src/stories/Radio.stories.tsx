import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Radio } from '@chakra-ui/react'

export default {
  title: 'Form/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const NotChecked = Template.bind({})
NotChecked.args = {}

export const Checked = Template.bind({})
Checked.args = {
  isChecked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  isChecked: true,
  isDisabled: true
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.args = {
  isDisabled: true
}
