import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Radio, RadioGroup } from '..'

describe('Running Test for Flex', () => {
  it('Check Radio to render correctly', () => {
    render(
      <RadioGroup data-testid="radio-container">
        <Radio value={1}>Value 1</Radio>
        <Radio value={2}>Value 2</Radio>
      </RadioGroup>
    )
    expect(screen.getByText('Value 1')).toBeTruthy()
    expect(screen.getByText('Value 2')).toBeTruthy()
    expect(screen.getByTestId('radio-container')).toBeTruthy()
  })
})
