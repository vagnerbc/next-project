import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tag as ThemeTag, TagLabel, TagCloseButton } from '..'

import { Stack } from '../../Stack'

export default {
  title: 'Core Components/Tag',
  component: ThemeTag,
  argTypes: {
    variant: {
      options: [
        'select-brand-primary-light',
        'select-brand-secondary-light',
        'ghost-default',
        'outline-default',
        'standard-light-outline',
        'highlight-brand-primary-default',
        'highlight-brand-secondary-default',
        'highlight-neutral-extralight',
        'highlight-neutral-default',
        'support-primary-default-outline',
        'support-secondary-default-outline',
        'support-tertiary-dark-outline',
        'feedback-information-default-outline'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    disabled: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  }
} as ComponentMeta<typeof ThemeTag>

const Template: ComponentStory<typeof ThemeTag> = args => (
  <Stack spacing="xxs">
    <ThemeTag {...args} w="fit-content">
      <TagLabel>{args.children}</TagLabel>
    </ThemeTag>
    <ThemeTag {...args} w="fit-content">
      <TagLabel>{args.children}</TagLabel>
      <TagCloseButton />
    </ThemeTag>
  </Stack>
)

export const Tag = Template.bind({})
Tag.args = {
  variant: 'select-brand-primary-light',
  children: 'Hello',
  size: 'md',
  disabled: false
}
