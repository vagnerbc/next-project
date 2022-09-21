import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Checkbox, CheckboxGroup } from '..'

describe('Running Test for Checkbox', () => {
  it('Check if Checkbox render correctly', () => {
    render(
      <CheckboxGroup>
        <Checkbox value={1}>Valor 1</Checkbox>
      </CheckboxGroup>
    )
    expect(screen.getByText('Valor 1')).toBeTruthy()
  })
})
