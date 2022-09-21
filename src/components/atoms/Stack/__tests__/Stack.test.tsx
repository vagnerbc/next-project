import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Stack } from '..'

describe('Running Test for Stack', () => {
  it('check if Stack render correctly', () => {
    render(
      <Stack data-testid="stack-container">
        <div>Container 1</div>
        <div>Container 2</div>
      </Stack>
    )
    expect(screen.getByTestId('stack-container')).toBeTruthy()
    expect(screen.getByText('Container 1')).toBeTruthy()
    expect(screen.getByText('Container 2')).toBeTruthy()
  })
})
