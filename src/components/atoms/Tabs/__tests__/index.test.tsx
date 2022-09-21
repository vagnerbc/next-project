import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tabs, Tab, TabList, TabPanel, TabPanels } from '..'

import React from 'react'

describe('Running Test for Tabs', () => {
  const component = (
    <Tabs>
      <TabList>
        <Tab>Tab1</Tab>
        <Tab>Tab2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>panel1</TabPanel>
        <TabPanel>panel2</TabPanel>
      </TabPanels>
    </Tabs>
  )
  it('Check if Tabs render', () => {
    render(component)
    expect(screen.getByText('Tab1')).toBeTruthy()
    expect(screen.getByText('Tab2')).toBeTruthy()
    expect(screen.getByText('panel1')).toBeVisible()
    expect(screen.getByText('panel2')).not.toBeVisible()
  })
  it('Check if tabs switch', () => {
    render(component)

    userEvent.click(screen.getByText('Tab2'))

    expect(screen.getByText('panel1')).not.toBeVisible()
    expect(screen.getByText('panel2')).toBeVisible()
  })
})
