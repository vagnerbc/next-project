import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Stack } from '../../Stack'

import { Switch as ThemeSwitch } from '..'

export default {
  title: 'Core Components/Switch',
  component: ThemeSwitch,
  argTypes: {
    variant: {
      options: ['brand-primary-solid', 'brand-secondary-solid'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    isDisabled: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeSwitch>

const Template: ComponentStory<typeof ThemeSwitch> = args => (
  <Stack maxW="500" padding="xxxs">
    <ThemeSwitch {...args}></ThemeSwitch>
    <ThemeSwitch {...args}>Switch</ThemeSwitch>
  </Stack>
)

export const Switch = Template.bind({})
Switch.args = {
  variant: 'brand-primary-solid',
  size: 'md',
  isDisabled: false
}
