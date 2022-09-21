import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Progress } from '..'

describe('Running Test for Progress', () => {
  it('Check Progress render correctly', () => {
    render(<Progress value={50} data-testid="progress" />)
    expect(screen.getByTestId('progress')).toBeTruthy()
  })
})
