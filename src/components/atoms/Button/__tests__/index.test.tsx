import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from '..'

describe('Running Test for Button', () => {
  it('Check Button Disabled', () => {
    render(<Button disabled>Button</Button>)
    expect(screen.getByText('Button')).toBeDisabled()
  })
})
