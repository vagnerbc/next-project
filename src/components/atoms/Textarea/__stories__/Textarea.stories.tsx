import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Textarea as ThemeTextarea } from '..'

export default {
  title: 'Core Components/Textarea',
  component: ThemeTextarea,
  argTypes: {
    variant: {
      options: ['brand-primary-default', 'brand-secondary-default'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeTextarea>

const Template: ComponentStory<typeof ThemeTextarea> = args => (
  <ThemeTextarea maxW="800px" {...args} />
)

export const Textarea = Template.bind({})
Textarea.args = {
  variant: 'brand-primary-default',
  isDisabled: false,
  isInvalid: false,
  size: 'md',
  placeholder: 'value'
}
