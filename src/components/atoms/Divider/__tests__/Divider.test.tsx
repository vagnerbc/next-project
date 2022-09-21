import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import { Divider } from '..'

import { Box } from '../../Box'

describe('Running Test for Checkbox', () => {
  it('Check if Checkbox render correctly', () => {
    render(
      <Box>
        <Divider data-testid="divider" />
      </Box>
    )
    expect(screen.getByTestId('divider')).toBeTruthy()
  })
})
