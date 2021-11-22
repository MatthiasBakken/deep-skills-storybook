import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { TaskSummary } from './task-summary'
import * as faker from 'faker'
import { IOrganisation } from '../../../interfaces'
import { generateTask } from '../../../fake-data'

export default {
  title: 'Modals/Task Summary',
  component: TaskSummary,
  argTypes: {
    onCloseClicked: { action: 'close clicked' }
  }
} as ComponentMeta<typeof TaskSummary>

const Template: ComponentStory<typeof TaskSummary> = (args) => (
  <TaskSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  } as IOrganisation,
  project: {
    title: faker.company.companyName()
  },
  tasks: new Array(5).fill(undefined).map(() => generateTask())
}
