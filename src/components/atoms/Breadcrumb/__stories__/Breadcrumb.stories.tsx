import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Breadcrumb as ThemeBreadcrumb } from '..'

export default {
  title: 'Core Components/Breadcrumb',
  component: ThemeBreadcrumb,
  argTypes: {
    fontSize: {
      options: ['xs', 'sm', 'md'],
      defaultValue: 'sm',
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeBreadcrumb>

const Template: ComponentStory<typeof ThemeBreadcrumb> = args => (
  <ThemeBreadcrumb {...args} />
)

export const Breadcrumb = Template.bind({})
Breadcrumb.args = {
  crumbs: [
    { name: 'Home', path: 'home/' },
    { name: 'Clientes', path: 'clients/' },
    { name: 'Edição', path: 'edit/' }
  ]
}
