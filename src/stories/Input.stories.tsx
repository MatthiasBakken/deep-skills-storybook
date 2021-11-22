import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Input } from '@chakra-ui/react';
import * as React from 'react';

export default {
  title: 'Form/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <>
  <Box mb={'10px'}>
    <Input size={'sm'} {...args}/>
  </Box>
  <Box>
    <Input size={'md'} {...args}/>
  </Box>
</>;

export const Default = Template.bind({})
Default.args = {
  placeholder: 'I would be great because…'
}

export const Typed = Template.bind({})
Typed.args = {
  value: 'I would be great because…'
}
