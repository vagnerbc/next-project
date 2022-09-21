import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Switch } from '..'

describe('Running Test for Switch', () => {
  it('Check Switch render correctly', () => {
    render(<Switch data-testid="switch">Switch</Switch>)
    expect(screen.getByTestId('switch')).toBeTruthy()
    expect(screen.getByText('Switch')).toBeTruthy()
  })
})
