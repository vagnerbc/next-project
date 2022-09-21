import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Text } from '..'

describe('Running Test for Text', () => {
  it('Check Text render correctly', () => {
    render(<Text data-testid="text-component">Texto Exemplo</Text>)

    expect(screen.getByTestId('text-component')).toBeTruthy()
    expect(screen.getByText('Texto Exemplo')).toBeTruthy()
  })
})
