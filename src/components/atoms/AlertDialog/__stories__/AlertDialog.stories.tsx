import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { AlertDialog as ThemeAlertDialog } from '..'

import { Icon } from '../../Icon'

export default {
  title: 'Core Components/AlertDialog',
  component: ThemeAlertDialog,
  argTypes: {},
  parameters: {}
} as ComponentMeta<typeof ThemeAlertDialog>

const Template: ComponentStory<typeof ThemeAlertDialog> = args => (
  <ThemeAlertDialog
    {...args}
    onClose={() => {}}
    confirmButtonIcon={<Icon name="delete" variant="outlined" />}
  >
    {args.children}
  </ThemeAlertDialog>
)

export const AlertDialog = Template.bind({})
AlertDialog.args = {
  title: 'Core Components/Delete User',
  children: 'Are you sure? You can’t undo this action afterwards.',
  cancelButtonText: 'Button',
  confirmButtonText: 'Button',
  isOpen: true,
  hasCloseButton: true,
  hasOverlay: false
}
