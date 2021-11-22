import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdminCreateButton } from './admin-create-button'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout/Admin Create Button',
  component: AdminCreateButton
} as ComponentMeta<typeof AdminCreateButton>

const Template: ComponentStory<typeof AdminCreateButton> = (args) => (
  <Box minH='300px' display='flex' alignItems='center'>
    <AdminCreateButton {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  children: 'create task'
}
