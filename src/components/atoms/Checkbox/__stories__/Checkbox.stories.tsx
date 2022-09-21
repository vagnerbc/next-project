import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Checkbox as ThemeCheckbox } from '..'

import { Stack } from '../../Stack'

export default {
  title: 'Core Components/Checkbox',
  component: ThemeCheckbox,
  argTypes: {
    variant: {
      options: ['brand-primary-default', 'brand-secondary-default'],
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
    },
    isInvalid: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeCheckbox>

const Template: ComponentStory<typeof ThemeCheckbox> = args => (
  <Stack spacing="xxs">
    <ThemeCheckbox {...args}>{args.children}</ThemeCheckbox>
    <ThemeCheckbox {...args}>{args.children}</ThemeCheckbox>
    <ThemeCheckbox {...args}>{args.children}</ThemeCheckbox>
  </Stack>
)

export const Checkbox = Template.bind({})
Checkbox.args = {
  variant: 'brand-primary-default',
  children: 'Checkbox',
  size: 'md',
  isDisabled: false,
  isInvalid: false
}
