import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Box } from '..'

describe('Running Test for Box', () => {
  it('Check Box render correctly', () => {
    render(<Box data-testid="box-container">Container</Box>)
    expect(screen.getByTestId('box-container')).toBeTruthy()
    expect(screen.getByText('Container')).toBeTruthy()
  })
})
