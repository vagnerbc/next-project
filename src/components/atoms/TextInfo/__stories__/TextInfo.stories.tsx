import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { TextInfo as ThemeTextInfo } from '..'

export default {
  title: 'Core Components/TextInfo',
  component: ThemeTextInfo,
  argTypes: {
    labelVariant: {
      options: [
        'brand-secondary-default',
        'brand-secondary-default-bold',
        'default-neutral-extradark',
        'default-neutral-extradark-bold'
      ],
      control: { type: 'select' },
      defaultValue: 'default-neutral-extradark'
    },
    labelSize: {
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md'],
      control: { type: 'select' },
      defaultValue: 'xxs'
    },
    textVariant: {
      options: [
        'brand-secondary-default',
        'brand-secondary-default-bold',
        'default-neutral-extradark',
        'default-neutral-extradark-bold'
      ],
      control: { type: 'select' },
      defaultValue: 'default-neutral-extradark-bold'
    },
    textSize: {
      options: ['xxs', 'xs', 'sm'],
      control: { type: 'select' },
      defaultValue: 'xs'
    }
  }
} as ComponentMeta<typeof ThemeTextInfo>

const Template: ComponentStory<typeof ThemeTextInfo> = args => (
  <ThemeTextInfo {...args} />
)

export const TextInfo = Template.bind({})
TextInfo.args = {
  label: 'This is a Label',
  text: 'This is a Text'
}
