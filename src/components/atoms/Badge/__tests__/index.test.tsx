import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Badge } from '..'

describe('Running Test for Badge', () => {
  it('Check Badge render correctly', () => {
    render(<Badge data-testid="Badge">Badge Content</Badge>)
    expect(screen.getByTestId('Badge')).toBeTruthy()
    expect(screen.getByText('Badge Content')).toBeTruthy()
  })
})
