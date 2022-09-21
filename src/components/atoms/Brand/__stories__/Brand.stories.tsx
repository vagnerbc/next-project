import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Brand as ThemeBrand } from '../index'

export default {
  title: 'Components/Brand',
  component: ThemeBrand,
  argTypes: {
    variant: {
      options: [
        'primary-symbol',
        'secondary-symbol',
        'primary-logotype',
        'secondary-logotype',
        'primary-marca',
        'secondary-marca'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeBrand>

const Template: ComponentStory<typeof ThemeBrand> = args => (
  <ThemeBrand {...args} />
)

export const Brand = Template.bind({})
Brand.args = {
  variant: 'primary-symbol',
  size: 'md'
}
