import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Center as ThemeCenter } from '..'

export default {
  title: 'Core Components/Center',
  component: ThemeCenter,
  argTypes: {}
} as ComponentMeta<typeof ThemeCenter>

const Template: ComponentStory<typeof ThemeCenter> = args => (
  <ThemeCenter bg="brand.primary-default" h="100px" color="white">
    {args.children}
  </ThemeCenter>
)

export const Center = Template.bind({})
Center.args = {
  children: 'This is Centered'
}
