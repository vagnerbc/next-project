import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Center } from '..'

describe('Running Test for Center', () => {
  it('Check Center render correctly', () => {
    render(<Center data-testid="center-container">Centered Content</Center>)
    expect(screen.getByTestId('center-container')).toBeTruthy()
    expect(screen.getByText('Centered Content')).toBeTruthy()
  })
})
