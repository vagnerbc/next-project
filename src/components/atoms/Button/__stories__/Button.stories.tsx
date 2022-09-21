import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button as ThemeButton } from '..'

export default {
  title: 'Core Components/Button',
  component: ThemeButton,
  argTypes: {
    variant: {
      options: [
        'brand-primary-solid',
        'default-outline',
        'neutral-extradark-ghost',
        'neutral-extralight-solid',
        'feedback-error-default',
        'standard-white-solid',
        'icon-default-outline'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeButton>

const Template: ComponentStory<typeof ThemeButton> = args => (
  <ThemeButton {...args}>{args.children}</ThemeButton>
)

export const Button = Template.bind({})
Button.args = {
  variant: 'brand-primary-solid',
  isDisabled: false,
  isLoading: false,
  size: 'md',
  children: 'Button'
}
