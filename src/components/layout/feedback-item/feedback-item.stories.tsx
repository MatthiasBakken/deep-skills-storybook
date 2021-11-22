import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FeedbackItem } from './feedback-item'
import * as faker from 'faker'
import { generateUser } from '../../../fake-data'

export default {
  title: 'Layout/Feedback Item',
  component: FeedbackItem
} as ComponentMeta<typeof FeedbackItem>

const Template: ComponentStory<typeof FeedbackItem> = (args) => (
  <FeedbackItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: faker.lorem.paragraph(3),
  user: generateUser()
}
