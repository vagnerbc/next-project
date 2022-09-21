import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { CircularProgress, CircularProgressLabel } from '..'

describe('Running Test for CircularProgress', () => {
  it('Check CircularProgress render correctly', () => {
    render(
      <CircularProgress value={55} data-testid="circularProgress">
        <CircularProgressLabel>55%</CircularProgressLabel>
      </CircularProgress>
    )
    expect(screen.getByTestId('circularProgress')).toBeTruthy()
    expect(screen.getByText('55%')).toBeTruthy()
  })
})
