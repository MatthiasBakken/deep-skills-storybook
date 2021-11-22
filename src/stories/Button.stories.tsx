import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button'
}

export const PrimaryWithIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryWithIcon.args = {
  label: 'Button',
  leftIcon: <ExternalLinkIcon />
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'primary',
  disabled: true,
  label: 'Button'
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning',
  label: 'Button'
}

export const Link = Template.bind({})
Link.args = {
  variant: 'link',
  label: 'Button'
}

export const LinkWithLeftIcon = Template.bind({})
LinkWithLeftIcon.args = {
  variant: 'link',
  label: 'Button',
  leftIcon: <ExternalLinkIcon />
}
export const LinkWithRightIcon = Template.bind({})
LinkWithRightIcon.args = {
  variant: 'link',
  label: 'Button',
  rightIcon: <ExternalLinkIcon />
}
