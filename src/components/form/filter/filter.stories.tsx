import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Filter } from './filter'

export default {
  title: 'Form/Filter',
  component: Filter,
  argTypes: {
    onSelect: { action: 'selected' }
  }
} as ComponentMeta<typeof Filter>

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'show all', value: 'showAll' },
    { label: 'show none', value: 'showNone' }
  ]
}
