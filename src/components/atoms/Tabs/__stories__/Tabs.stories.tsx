import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  Tabs as ThemeTabs,
  TabList as ThemeTabList,
  Tab as ThemeTab,
  TabPanels as ThemeTabPanels,
  TabPanel as ThemeTabPanel
} from '..'

export default {
  title: 'Core Components/Tabs',
  component: ThemeTabs,
  argTypes: {
    variant: {
      options: [
        'line',
        'enclosed',
        'enclosed-colored',
        'soft-rounded',
        'solid-rounded',
        'brand-primary-solid',
        'brand-secondary-solid'
      ],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeTabs>

const Template: ComponentStory<typeof ThemeTabs> = args => (
  <ThemeTabs {...args}>
    <ThemeTabList>
      <ThemeTab>One</ThemeTab>
      <ThemeTab isDisabled>Two</ThemeTab>
      <ThemeTab>Three</ThemeTab>
    </ThemeTabList>
    <ThemeTabPanels>
      <ThemeTabPanel>
        <p>one!</p>
      </ThemeTabPanel>
      <ThemeTabPanel>
        <p>two!</p>
      </ThemeTabPanel>
      <ThemeTabPanel>
        <p>three!</p>
      </ThemeTabPanel>
    </ThemeTabPanels>
  </ThemeTabs>
)

export const Tabs = Template.bind({})
Tabs.args = {
  variant: 'brand-primary-solid',
  children: 'Tabs'
}
