import { Stack } from '../../Stack'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  Slider as ThemeSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '..'

export default {
  title: 'Core Components/Slider',
  component: ThemeSlider,
  argTypes: {
    variant: {
      options: ['brand-primary-solid', 'brand-secondary-solid'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    defaultValue: {
      control: { type: 'number' }
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    isDisabled: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    isReadOnly: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    isReversed: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeSlider>

const Template: ComponentStory<typeof ThemeSlider> = args => (
  <Stack maxW="240" height="240" padding="xxxs">
    <ThemeSlider {...args}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ThemeSlider>
  </Stack>
)

export const Slider = Template.bind({})
Slider.args = {
  variant: 'brand-primary-solid',
  size: 'md',
  defaultValue: 50,
  isDisabled: false,
  isReadOnly: false,
  isReversed: false,
  orientation: 'horizontal'
}
