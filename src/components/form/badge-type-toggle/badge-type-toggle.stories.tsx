import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { BadgeTypeToggle } from './badge-type-toggle'

export default {
  title: 'Form/Badge Type Toggle',
  component: BadgeTypeToggle
} as ComponentMeta<typeof BadgeTypeToggle>

const Template: ComponentStory<typeof BadgeTypeToggle> = (args) => (
  <BadgeTypeToggle {...args} />
)

export const Default = Template.bind({})
Default.args = {}
