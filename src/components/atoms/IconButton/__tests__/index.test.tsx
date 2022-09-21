import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { IconButton } from '..'

describe('Running Test for IconButton', () => {
  it('Check IconButton Disabled', () => {
    render(<IconButton aria-label="test" disabled />)
    expect(screen.getByLabelText('test')).toBeDisabled()
  })
})
