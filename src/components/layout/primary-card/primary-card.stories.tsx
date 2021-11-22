import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { PrimaryCard } from './primary-card'
import * as faker from 'faker'
import { DataBox } from '../../data-display/data-box/data-box'
import { Budget } from '../../data-display/data-box/budget/budget'
import { TagValuesEnum } from '../../../interfaces'

export default {
  title: 'Layout/Primary Card',
  component: PrimaryCard
} as ComponentMeta<typeof PrimaryCard>

const Template: ComponentStory<typeof PrimaryCard> = (args) => (
  <PrimaryCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  organizationName: 'Deep Work Studio',
  organizationImage: faker.image.business(),
  projectTitle: 'Sourcecred Hypersprint',
  projectDescription:
    'A collective of designers doing meanful projects in web3 with shared profits. ',
  dateRange: 'Aug 5 - Aug 13, 2021',
  tag: TagValuesEnum.design,
  status: 'Team applications open',
  users: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ]
}

export const WithDetails = Template.bind({})
WithDetails.args = {
  organizationName: 'Deep Work Studio',
  organizationImage: faker.image.business(),
  projectTitle: 'Sourcecred Hypersprint',
  dateRange: 'Aug 5 - Aug 13, 2021',
  tag: TagValuesEnum.design,
  status: 'Team applications open',
  users: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ],
  children: (
    <DataBox label='Total Budget'>
      <Budget budget='16,000' />
    </DataBox>
  )
}
