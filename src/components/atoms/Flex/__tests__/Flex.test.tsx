import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Flex } from '..'

describe('Running Test for Flex', () => {
  it('Check Flex render correctly', () => {
    render(<Flex data-testid="flex-container">Container</Flex>)
    expect(screen.getByTestId('flex-container')).toBeTruthy()
    expect(screen.getByText('Container')).toBeTruthy()
  })
})
