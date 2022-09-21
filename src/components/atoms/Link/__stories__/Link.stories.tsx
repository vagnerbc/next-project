import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Link as ThemeLink } from '..'

import { Icon, IconSizes } from '../../Icon'
import { Stack } from '../../Stack'

export default {
  title: 'Core Components/Link',
  component: ThemeLink,
  argTypes: {
    variant: {
      options: ['default-neutral-extradark', 'underline-standard-white'],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeLink>

const Template: ComponentStory<typeof ThemeLink> = args => (
  <Stack spacing="xs">
    <ThemeLink
      isExternal
      {...args}
      href="https://google.com.br"
      rightIcon={<Icon name="link" ml="nano" size={args.size as IconSizes} />}
    >
      {args.children}
    </ThemeLink>
    <ThemeLink
      {...args}
      leftIcon={<Icon name="link" mr="nano" size={args.size as IconSizes} />}
    >
      {args.children}
    </ThemeLink>
    <ThemeLink
      {...args}
      leftIcon={<Icon name="link" mr="nano" size={args.size as IconSizes} />}
      rightIcon={<Icon name="link" ml="nano" size={args.size as IconSizes} />}
    >
      {args.children}
    </ThemeLink>
  </Stack>
)

export const Link = Template.bind({})
Link.args = {
  size: 'md',
  isDisabled: false,
  variant: 'default-neutral-extradark',
  children: 'Link'
}
