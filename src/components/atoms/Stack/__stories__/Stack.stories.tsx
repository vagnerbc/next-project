import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Stack as ThemeStack } from '..'

import { Box } from '../../Box'

const alignOptions = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'revert',
  'self-end',
  'self-start',
  'start'
]

const justifyOptions = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]

export default {
  title: 'Core Components/Stack',
  component: ThemeStack,
  argTypes: {
    direction: {
      name: 'flexDirection',
      type: 'string',
      defaultValue: 'row',
      options: ['column', 'column-reverse', 'reverse', 'row', 'row-reverse'],
      control: {
        type: 'select'
      }
    },
    align: {
      name: 'alignItems',
      type: 'string',
      options: alignOptions,
      defaultValue: 'center',
      control: {
        type: 'select'
      }
    },
    justify: {
      name: 'justifyContent',
      type: 'string',
      options: justifyOptions,
      defaultValue: 'center',
      control: {
        type: 'select'
      }
    },
    spacing: {
      name: 'spacing',
      type: { name: 'number' },
      defaultValue: 4,
      control: {
        min: 0,
        max: 10,
        type: 'range'
      }
    }
  }
} as ComponentMeta<typeof ThemeStack>

const Template: ComponentStory<typeof ThemeStack> = args => (
  <ThemeStack
    align={args.align}
    direction={args.direction}
    spacing={args.spacing}
    bg="feedback.warning-light"
  >
    <Box w="40px" h="40px" bg="brand.primary-default" color="white">
      1
    </Box>
    <Box w="40px" h="40px" bg="brand.secondary-default" color="white">
      2
    </Box>
    <Box w="40px" h="40px" bg="brand.secondary-lightest">
      3
    </Box>
  </ThemeStack>
)

export const Stack = Template.bind({})
