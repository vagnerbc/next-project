import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '..'

describe('Running Test for Drawer', () => {
  it('Check if Drawer render correctly', () => {
    render(
      <Drawer onClose={jest.fn()} isOpen={true}>
        <DrawerOverlay />
        <DrawerHeader>Drawer Header</DrawerHeader>
        <DrawerContent>
          <DrawerCloseButton />
          <div>Example content</div>
        </DrawerContent>
      </Drawer>
    )
    expect(screen.getByText('Example content')).toBeTruthy()
    expect(screen.getByText('Drawer Header')).toBeTruthy()
  })

  it('Check if onClose is called correctly', () => {
    const closeMock = jest.fn()

    render(
      <Drawer onClose={closeMock} isOpen={true}>
        <DrawerOverlay />
        <DrawerHeader>Drawer Header</DrawerHeader>
        <DrawerContent>
          <DrawerCloseButton data-testid="close-button" />
          <div>Example content</div>
        </DrawerContent>
      </Drawer>
    )

    fireEvent.click(screen.getByTestId('close-button'))
    expect(closeMock).toHaveBeenCalledTimes(1)
  })
})
