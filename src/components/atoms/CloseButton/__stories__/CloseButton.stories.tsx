import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { CloseButton as ThemeCloseButton } from '..'

export default {
  title: 'Core Components/CloseButton',
  component: ThemeCloseButton,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeCloseButton>

const Template: ComponentStory<typeof ThemeCloseButton> = args => (
  <ThemeCloseButton {...args} />
)

export const CloseButton = Template.bind({})
CloseButton.args = {
  isDisabled: false,
  size: 'md'
}
