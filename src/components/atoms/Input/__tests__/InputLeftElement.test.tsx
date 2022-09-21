/* eslint-disable react/no-children-prop */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Input, InputGroup, InputLeftElement } from '..'

describe('Running Test for InputGroup', () => {
  it('Check if InputGroup render correctly', () => {
    render(
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          data-testid="input-left-element"
          children={<></>}
        />
        <Input placeholder="Input" />
      </InputGroup>
    )
    expect(screen.getByTestId('input-left-element')).toBeTruthy()
  })
})
