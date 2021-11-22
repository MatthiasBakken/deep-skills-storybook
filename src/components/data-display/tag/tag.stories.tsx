import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Tag } from './tag'
import { HStack } from '@chakra-ui/react'
import { TagValuesEnum } from '../../../interfaces'

export default {
  title: 'Data Display/Tag',
  component: Tag,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (
  <HStack>
    <Tag {...args} value={TagValuesEnum.design} />
    <Tag {...args} value={TagValuesEnum.dataScience} />
    <Tag {...args} value={TagValuesEnum.marketing} />
    <Tag {...args} value={TagValuesEnum.foodIndustry} />
  </HStack>
)

export const NotSelected = Template.bind({})
NotSelected.args = {}

export const Selected = Template.bind({})
Selected.args = {
  selected: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
