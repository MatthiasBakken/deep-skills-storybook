import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { FileUpload } from './file-upload'

export default {
  title: 'Form/File Upload',
  component: FileUpload
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
)

export const Default = Template.bind({})
Default.args = {}
