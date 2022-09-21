import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { QuantityPicker as ThemeQuantityPicker } from '..'

import { Stack } from '../../Stack'

export default {
  title: 'Core Components/QuantityPicker',
  component: ThemeQuantityPicker,
  argTypes: {
    variant: {
      options: [
        'quantity-picker-default',
        'outline-brand-primary-default',
        'outline-brand-secondary-default',
        'filled-brand-primary-default',
        'filled-brand-secondary-default',
        'flushed-brand-primary-default',
        'flushed-brand-secondary-default'
      ],
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
} as ComponentMeta<typeof ThemeQuantityPicker>

const Template: ComponentStory<typeof ThemeQuantityPicker> = args => (
  <Stack spacing="xxs" maxW="600px">
    <ThemeQuantityPicker {...args} />
  </Stack>
)

export const QuantityPicker = Template.bind({})
QuantityPicker.args = {
  variant: 'quantity-picker-default',
  size: 'md',
  max: 10,
  isDisabled: false,
  isInvalid: false
}
