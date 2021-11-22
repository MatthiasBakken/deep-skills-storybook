import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import ProjectModalHeader from './project-modal-header'
import * as faker from 'faker'
import { TagValuesEnum } from '../../../interfaces'

export default {
  title: 'Layout/Project Modal Header',
  component: ProjectModalHeader
} as ComponentMeta<typeof ProjectModalHeader>

const Template: ComponentStory<typeof ProjectModalHeader> = (args) => (
  <ProjectModalHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  project: {
    title: faker.lorem.words(2),
    tag: TagValuesEnum.design,
    dateRange: 'Aug 7 - Aug 13, 2021',
    url: faker.internet.url()
  },
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  }
}

export const Clean = Template.bind({})
Clean.args = {
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  },
  project: {
    title: faker.lorem.words(2)
  }
}
