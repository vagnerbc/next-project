import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { SelectSearch as ThemeSelect } from '..'

export default {
  title: 'Core Components/SelectSearch',
  component: ThemeSelect,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeSelect>

const Template: ComponentStory<typeof ThemeSelect> = args => (
  <div style={{ width: '300px' }}>
    <ThemeSelect {...args} multiValueBackground="brand.secondary-default" />
  </div>
)

export const Select = Template.bind({})
Select.args = {
  options: [
    {
      value: 'id1',
      label: 'Option 1 very long text example to break context'
    },
    { value: 'id2', label: 'Option 2' },
    { value: 'id3', label: 'Option 3' }
  ],
  isMulti: false,
  defaultValue: 'id2',
  placeholder: 'Selecione uma opção',
  isDisabled: false,
  isInvalid: false,
  onChange: () => null
}
