import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Grid, GridItem } from '..'

describe('Running Test for Grid', () => {
  it('Check Grid render correctly', () => {
    render(
      <Grid data-testid="grid-container">
        <GridItem>GridItem 1</GridItem>
        <GridItem>GridItem 2</GridItem>
      </Grid>
    )
    expect(screen.getByTestId('grid-container')).toBeTruthy()
    expect(screen.getByText('GridItem 1')).toBeTruthy()
    expect(screen.getByText('GridItem 2')).toBeTruthy()
  })
})
