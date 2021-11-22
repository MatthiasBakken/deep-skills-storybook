import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { CollapsableTaskSet } from './collapsable-task-set'
import { generateTask } from '../../../fake-data'
import { TaskItem } from '../task-item/task-item'
import { StaticCheckbox } from '../../data-display/statick-checkbox/statick-checkbox'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout/Collapsable Task Set',
  component: CollapsableTaskSet
} as ComponentMeta<typeof CollapsableTaskSet>

const Template: ComponentStory<typeof CollapsableTaskSet> = (args) => (
  <CollapsableTaskSet {...args}>
    <Box bg='gray.22' p='17px 17px 25px 17px' borderRadius='0 0 12px 12px'>
      {args.children}
    </Box>
  </CollapsableTaskSet>
)

export const Default = Template.bind({})
Default.args = {
  label: 'User Research Lead on Sourcecred Hypersprint',
  helperText: '7 tasks',
  children: [
    generateTask(),
    generateTask(),
    generateTask(),
    generateTask(),
    generateTask()
  ].map((item) => (
    <TaskItem
      key={item.id}
      beforeElement={
        <StaticCheckbox variant={item.isCompleted ? 'confirmed' : 'empty'} />
      }
      description={item.description}
      boxProps={{ bg: 'gray.24', mb: '13px' }}
      title={item.title}
    />
  ))
}
