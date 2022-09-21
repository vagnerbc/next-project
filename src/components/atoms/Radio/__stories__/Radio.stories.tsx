import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Radio as ThemeRadio, RadioGroup } from '..'

import { Stack } from '../../Stack'

export default {
  title: 'Core Components/Radio',
  component: ThemeRadio,
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
      control: { type: 'boolean' }
    },
    isInvalid: {
      type: 'boolean',
      control: { type: 'boolean' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeRadio>

const Template: ComponentStory<typeof ThemeRadio> = args => (
  <RadioGroup defaultValue="1">
    <Stack spacing="xxs">
      <ThemeRadio {...args} value="1">
        {args.children}
      </ThemeRadio>
      <ThemeRadio {...args} value="2">
        {args.children}
      </ThemeRadio>
      <ThemeRadio {...args} value="3">
        {args.children}
      </ThemeRadio>
    </Stack>
  </RadioGroup>
)

export const Radio = Template.bind({})
Radio.args = {
  variant: 'brand-primary-default',
  children: 'Radio',
  size: 'md',
  isDisabled: false,
  isInvalid: false
}
