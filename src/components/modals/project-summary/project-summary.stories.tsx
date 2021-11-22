import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { ProjectSummary } from './project-summary'
import * as faker from 'faker'
import { IOrganisation, IProject, IUser } from '../../../interfaces'
import { generateTaskSet, generateUser } from '../../../fake-data'

export default {
  title: 'Modals/Project Summary',
  component: ProjectSummary,
  argTypes: {
    onCloseClicked: { action: 'close clicked' }
  }
} as ComponentMeta<typeof ProjectSummary>

const Template: ComponentStory<typeof ProjectSummary> = (args) => (
  <ProjectSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  } as IOrganisation,
  project: {
    title: faker.company.companyName(),
    tag: 'design',
    dateRange: 'Aug 7 - Aug 13, 2021',
    taskSets: [generateTaskSet()]
  } as unknown as IProject,
  user: {
    firstName: faker.name.firstName()
  } as IUser,
  goodFeedback: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ],
  canBeImproved: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ],
  personalReflection: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ]
}
