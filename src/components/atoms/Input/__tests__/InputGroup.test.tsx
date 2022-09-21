import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Input, InputGroup } from '..'

describe('Running Test for InputGroup', () => {
  it('Check if InputGroup render correctly', () => {
    render(
      <InputGroup data-testid="input-group">
        <Input placeholder="Input" />
      </InputGroup>
    )
    expect(screen.getByPlaceholderText('Input')).toBeTruthy()
    expect(screen.getByTestId('input-group')).toBeTruthy()
  })
})
