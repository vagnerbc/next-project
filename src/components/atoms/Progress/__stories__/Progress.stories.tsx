import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Stack } from '../../Stack'

import { Progress as ThemeProgress } from '..'

export default {
  title: 'Core Components/Progress',
  component: ThemeProgress,
  argTypes: {
    variant: {
      options: ['brand-primary-solid', 'brand-secondary-solid'],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    },
    value: {
      control: { type: 'number' }
    },
    hasStripe: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    isAnimated: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeProgress>

const Template: ComponentStory<typeof ThemeProgress> = args => (
  <Stack maxW="500" bg={'neutral.mediumlight'} padding="xxxs">
    <ThemeProgress {...args} />
  </Stack>
)

export const Progress = Template.bind({})
Progress.args = {
  variant: 'brand-primary-solid',
  size: 'md',
  value: 50,
  hasStripe: false,
  isAnimated: false
}
