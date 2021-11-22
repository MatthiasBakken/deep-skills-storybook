import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Checkbox } from '@chakra-ui/react'
import { TaskItem } from './task-item'
import { StaticCheckbox } from '../../data-display/statick-checkbox/statick-checkbox'

export default {
  title: 'Data Display/TaskItem',
  component: TaskItem
} as ComponentMeta<typeof TaskItem>

const Template: ComponentStory<typeof TaskItem> = (args) => (
  <TaskItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Prepare Miro Board',
  detailsLink: 'https://google.com'
}

export const HasEditButton = Template.bind({})
HasEditButton.args = {
  title: 'Prepare Miro Board',
  onEditClick: () => alert('hello edit'),
  detailsLink: 'https://google.com'
}

export const Selectable = Template.bind({})
Selectable.args = {
  beforeElement: <Checkbox />,
  title: 'Prepare Miro Board',
  size: 'lg',
  helperText: 'Completed 5 times',
  detailsLink: 'https://google.com'
}

export const Static = Template.bind({})
Static.args = {
  beforeElement: <StaticCheckbox variant={'confirmed'} />,
  title: 'Prepare Miro Board',
  size: 'sm',
  helperText: 'Interested',
  detailsLink: 'https://google.com'
}
