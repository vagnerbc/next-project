import React from 'react'

import '@testing-library/jest-dom'
import { render, screen, userEvent } from '../../../jest/utils/test-utils'

import { Menu, MenuButton, MenuItem, MenuList } from '..'

describe('Running Test for Menu', () => {
  it('check if Menu render correctly', () => {
    render(
      <Menu isOpen={true} onClose={jest.fn()}>
        <MenuButton />
        <MenuList data-testid="menu-list">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>
    )
    expect(screen.getByTestId('menu-list')).toBeTruthy()
    expect(screen.getByText('Option 1')).toBeTruthy()
    expect(screen.getByText('Option 2')).toBeTruthy()
    expect(screen.getByText('Option 3')).toBeTruthy()
  })

  it('should have call onClose when click the MenuItem', () => {
    const onCloseSpy = jest.fn()

    render(
      <Menu isOpen={true} onClose={onCloseSpy}>
        <MenuButton />
        <MenuList data-testid="menu-list">
          <MenuItem>Option 1</MenuItem>
          <MenuItem data-testid="option-2">Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>
    )

    const menuItem = screen.getByTestId('option-2')
    userEvent.click(menuItem)

    expect(onCloseSpy).toHaveBeenCalled()
  })
})
