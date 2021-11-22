import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrganizationButton } from './organization-button'
import * as faker from 'faker'

export default {
  title: 'Layout/Organization Button',
  component: OrganizationButton
} as ComponentMeta<typeof OrganizationButton>

const Template: ComponentStory<typeof OrganizationButton> = (args) => (
  <OrganizationButton {...args} />
)

export const Small = Template.bind({})
Small.args = {
  imageSrc: faker.image.business(),
  label: faker.company.companyName(),
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  imageSrc: faker.image.business(),
  label: faker.company.companyName(),
  size: 'md'
}

export const MediumWithHelperText = Template.bind({})
MediumWithHelperText.args = {
  imageSrc: faker.image.business(),
  label: faker.company.companyName(),
  helperText: 'Mentor',
  tooltipText:
    'The budget for this work can be split between you and the person supporting you. If you choose a supporter, you will receive a bonus payment for mentoring.',
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  imageSrc: faker.image.business(),
  label: faker.company.companyName(),
  size: 'lg'
}
