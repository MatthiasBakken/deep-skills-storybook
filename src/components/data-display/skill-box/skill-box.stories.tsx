import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { SkillBox } from './skill-box'

export default {
  title: 'Data Display/SkillBox',
  component: SkillBox
} as ComponentMeta<typeof SkillBox>

const Template: ComponentStory<typeof SkillBox> = (args) => (
  <SkillBox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Product Design',
  data: { done: 12, total: 12 }
}

export const HalfFull = Template.bind({})
HalfFull.args = {
  label: 'User Research',
  data: { done: 3, total: 12 }
}

export const NotStarted = Template.bind({})
NotStarted.args = {
  label: 'Creative Direction',
  data: { done: 0, total: 10 }
}

export const JustText = Template.bind({})
JustText.args = {
  label: 'Creative Direction'
}

export const Empty = Template.bind({})
Empty.args = {}
