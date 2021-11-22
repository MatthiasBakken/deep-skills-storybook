import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Agreement } from './agreement'

export default {
  title: 'Layout/Agreement',
  component: Agreement
} as ComponentMeta<typeof Agreement>

const Template: ComponentStory<typeof Agreement> = (args) => (
  <Agreement {...args} />
)

export const Default = Template.bind({})
Default.args = {}
