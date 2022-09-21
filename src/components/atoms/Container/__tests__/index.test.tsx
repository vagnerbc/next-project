import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Container } from '..'

describe('Running Test for Container', () => {
  it('Check Container render correctly', () => {
    render(<Container data-testid="container">Container Content</Container>)
    expect(screen.getByTestId('container')).toBeTruthy()
    expect(screen.getByText('Container Content')).toBeTruthy()
  })
})
