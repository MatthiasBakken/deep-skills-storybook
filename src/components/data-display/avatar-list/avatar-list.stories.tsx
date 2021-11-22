import { Meta, Story } from '@storybook/react'
import faker from 'faker'
import { AvatarList, AvatarListProps } from './avatar-list'

export default {
  component: AvatarList,
  title: 'Data Display/AvatarList'
} as Meta

const Template: Story<AvatarListProps> = (args) => <AvatarList {...args} />

export const Default = Template.bind({})
Default.args = {
  avatars: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ]
}

export const Max = Template.bind({})
Max.args = {
  max: 1,
  avatars: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ]
}
