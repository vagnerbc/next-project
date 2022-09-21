import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Box } from '../../Box'

import { SimpleGrid } from '..'

describe('Running Test for SimpleGrid', () => {
  it('Check SimpleGrid render correctly', () => {
    render(
      <SimpleGrid data-testid="simple-grid-container">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
      </SimpleGrid>
    )
    expect(screen.getByTestId('simple-grid-container')).toBeTruthy()
    expect(screen.getByText('Box 1')).toBeTruthy()
    expect(screen.getByText('Box 2')).toBeTruthy()
  })
})
