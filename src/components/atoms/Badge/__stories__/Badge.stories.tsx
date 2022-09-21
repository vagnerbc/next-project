/* eslint-disable react/no-unescaped-entities */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Badge as ThemeBadge } from '..'

export default {
  title: 'Core Components/Badge',
  component: ThemeBadge,
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'notify',
      options: ['notify'],
      control: {
        type: 'select'
      }
    },
    size: {
      type: 'string',
      defaultValue: 'xs',
      options: ['xs', 'xxxs'],
      control: {
        type: 'select'
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeBadge>

const Template: ComponentStory<typeof ThemeBadge> = args => (
  <>
    <ThemeBadge size={args.size} variant={args.variant} marginRight="16px">
      3
    </ThemeBadge>

    <ThemeBadge size={args.size} variant={args.variant}></ThemeBadge>
  </>
)

export const Badge = Template.bind({})
