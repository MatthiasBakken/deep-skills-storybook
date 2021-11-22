import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { DataBox } from './data-box'
import { ProfileBox } from '../../layout/profile-box/profile-box'
import { ScopeOfWorkValue } from './scope-of-work-value/scope-of-work-value'
import * as faker from 'faker'

export default {
  title: 'Data Display/DataBox',
  component: DataBox
} as ComponentMeta<typeof DataBox>

const Template: ComponentStory<typeof DataBox> = (args) => (
  <DataBox {...args}>{args.children}</DataBox>
)

export const ScopeOfWork = Template.bind({})
ScopeOfWork.args = {
  label: 'Scope of work',
  tooltipLabel: 'Scope of work tooltip',
  children: (
    <ScopeOfWorkValue
      taskAmount={7}
      onTaskClick={() => alert('task')}
      hourAmount={15}
    />
  )
}

export const WithProfileButton = Template.bind({})
WithProfileButton.args = {
  label: 'Scope of work',
  tooltipLabel: 'Scope of work tooltip',
  children: (
    <ProfileBox
      name={faker.name.firstName() + ' ' + faker.name.lastName()}
      size={'sm'}
      avatarUrl={faker.image.avatar()}
    />
  )
}
export const Text = Template.bind({})
Text.args = {
  label: 'Dates',
  children: 'Aug 5 – Aug 13, 2021'
}
export const Number = Template.bind({})
Number.args = {
  label: 'Projects',
  children: 5
}
