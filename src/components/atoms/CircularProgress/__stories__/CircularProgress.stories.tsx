import { Box } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  CircularProgress as ThemeCircularProgress,
  CircularProgressLabel
} from '..'

export default {
  title: 'Core Components/CircularProgress',
  component: ThemeCircularProgress,
  argTypes: {
    color: {
      options: ['brand.primary-light', 'brand.secondary-light'],
      control: { type: 'select' }
    },
    trackColor: {
      options: ['neutral.extralight', 'neutral.mediumlight'],
      control: { type: 'select' }
    },
    size: {
      options: ['40px', '60px', '80px', '100px', '120px'],
      control: { type: 'select' }
    },
    value: {
      control: { type: 'number' }
    },
    isIndeterminate: {
      control: {
        type: 'boolean',
        control: {
          type: 'boolean'
        }
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeCircularProgress>

const Template: ComponentStory<typeof ThemeCircularProgress> = args => (
  <>
    <Box pb={'10px'}>
      <ThemeCircularProgress {...args} />
    </Box>
    <Box>
      <ThemeCircularProgress {...args}>
        {!args.isIndeterminate && (
          <CircularProgressLabel>{`${args.value}%`}</CircularProgressLabel>
        )}
      </ThemeCircularProgress>
    </Box>
  </>
)

export const CircularProgress = Template.bind({})
CircularProgress.args = {
  color: 'brand.primary-light',
  trackColor: 'neutral.extralight',
  size: '80px',
  value: 50,
  isIndeterminate: false
}
