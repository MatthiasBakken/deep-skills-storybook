import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { RoundedBox } from './rounded-box'
import * as faker from 'faker'

export default {
  title: 'Layout/RoundedBox',
  component: RoundedBox
} as ComponentMeta<typeof RoundedBox>

const Template: ComponentStory<typeof RoundedBox> = (args) => (
  <RoundedBox {...args} />
)
export const Default = Template.bind({})
Default.args = {
  children: faker.lorem.sentences(15)
}
