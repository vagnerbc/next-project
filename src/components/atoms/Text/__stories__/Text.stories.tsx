import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  fontSizes,
  fontWeights,
  lineHeights
} from '../../../../theme/typography'

import { Text as ThemeText } from '..'

export default {
  title: 'Core Components/Text',
  component: ThemeText,
  argTypes: {
    color: {
      name: 'color',
      type: 'string',
      config: {
        type: 'color'
      }
    },
    fontSize: {
      name: 'fontSize',
      type: 'string',
      options: Object.keys(fontSizes),
      control: {
        type: 'select'
      }
    },
    fontWeight: {
      name: 'fontWeight',
      type: 'number',
      options: Object.keys(fontWeights),
      control: {
        type: 'select'
      }
    },
    lineHeight: {
      name: 'lineHeight',
      type: 'string',
      options: Object.keys(lineHeights),
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['brand-secondary-default', 'default-neutral-extradark'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeText>

const Template: ComponentStory<typeof ThemeText> = args => (
  <ThemeText {...args}>{args.children}</ThemeText>
)

export const Text = Template.bind({})
Text.args = {
  children: 'This is a Text',
  variant: 'brand-secondary-default'
}
