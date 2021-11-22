import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { CreateTaskSet } from './create-task-set'

export default {
  title: 'Layout/Create Task Set',
  component: CreateTaskSet
} as ComponentMeta<typeof CreateTaskSet>

const Template: ComponentStory<typeof CreateTaskSet> = (args) => (
  <CreateTaskSet {...args} />
)

export const Default = Template.bind({})
Default.args = {}
