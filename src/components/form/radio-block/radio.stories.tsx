import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { RadioBlock } from './radio-block'
import { RadioProps } from '@chakra-ui/react'

export default {
  title: 'Form/RadioBlock',
  component: RadioBlock
} as ComponentMeta<typeof RadioBlock>

const Template: ComponentStory<typeof RadioBlock> = (args) => (
  <RadioBlock {...args} />
)

export const NotChecked = Template.bind({})
NotChecked.args = {
  label: 'Foobar',
  description: 'Longer foobar descript',
  radioProps: {
    value: '',
    checked: false,
    onChange: () => void 0
  } as RadioProps
}
export const Checked = Template.bind({})
Checked.args = {
  label: 'Foobar',
  description: 'Longer foobar descript',
  radioProps: {
    value: '',
    checked: true,
    onChange: () => void 0
  } as RadioProps
}
