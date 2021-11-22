import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { StaticCheckbox } from './statick-checkbox'

export default {
  title: 'Data Display/StaticCheckbox',
  component: StaticCheckbox
} as ComponentMeta<typeof StaticCheckbox>

const Template: ComponentStory<typeof StaticCheckbox> = (args) => (
  <Box display={'flex'}>
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      mr={'15px'}
    >
      <Text color='white' mb={'15px'}>
        Empty
      </Text>
      <StaticCheckbox {...args} />
    </Box>
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      mr={'15px'}
    >
      <Text color='white' mb={'15px'}>
        Interested
      </Text>
      <StaticCheckbox {...args} variant={'interested'} />
    </Box>
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      mr={'15px'}
    >
      <Text color='white' mb={'15px'}>
        Confirmed
      </Text>
      <StaticCheckbox {...args} variant={'confirmed'} />
    </Box>
  </Box>
)

export const Default = Template.bind({})
Default.args = {}
