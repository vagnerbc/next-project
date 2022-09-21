/* eslint-disable react/no-unescaped-entities */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Container as ThemeContainer } from '..'

import { Box } from '../../Box'

export default {
  title: 'Core Components/Container',
  component: ThemeContainer,
  argTypes: {
    centerContent: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    size: {
      type: 'string',
      defaultValue: 'sm',
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof ThemeContainer>

const Template: ComponentStory<typeof ThemeContainer> = args => (
  <ThemeContainer
    centerContent={args.centerContent}
    size={args.size}
    padding="xxxs"
    bgColor="standard.light"
  >
    <Box height="60px" width="100%" bgColor="brand.primary-default" />
  </ThemeContainer>
)

export const Flex = Template.bind({})
