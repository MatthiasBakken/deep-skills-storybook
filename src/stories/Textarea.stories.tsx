import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Textarea } from '@chakra-ui/react';
import * as React from 'react';

export default {
  title: 'Form/Textarea',
  component: Textarea
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <>
  <Box mb={'10px'}>
    <Textarea size={'sm'} {...args}/>
  </Box>
  <Box>
    <Textarea size={'md'} {...args}/>
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
