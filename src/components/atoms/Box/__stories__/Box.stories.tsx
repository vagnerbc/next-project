import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box as ThemeBox } from '..'

export default {
  title: 'Core Components/Box',
  component: ThemeBox,
  argTypes: {
    w: {
      name: 'width',
      type: { name: 'number' },
      defaultValue: 100,
      control: {
        min: 0,
        max: 1000,
        type: 'range'
      }
    },
    h: {
      name: 'height',
      type: { name: 'number' },
      defaultValue: 100,
      control: {
        min: 0,
        max: 300,
        type: 'range'
      }
    },
    bg: {
      name: 'backgroundColor',
      type: { name: 'string' },
      defaultValue: 'brand.primary-default',
      control: {
        type: 'color'
      }
    },
    p: {
      name: 'padding',
      type: { name: 'number' },
      defaultValue: 4,
      control: {
        min: 0,
        max: 10,
        type: 'range'
      }
    }
  }
} as ComponentMeta<typeof ThemeBox>

const Template: ComponentStory<typeof ThemeBox> = args => (
  <ThemeBox
    color="standard.white"
    bg={args.bg}
    w={args.w}
    h={args.h}
    p={args.p}
  >
    <ThemeBox>This is a Box</ThemeBox>
  </ThemeBox>
)

export const Box = Template.bind({})
