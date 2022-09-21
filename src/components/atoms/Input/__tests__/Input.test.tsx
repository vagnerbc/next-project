import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Input } from '..'

describe('Running Test for Input', () => {
  it('Check if Input render correctly', () => {
    render(<Input placeholder="Input" />)
    expect(screen.getByPlaceholderText('Input')).toBeTruthy()
  })
  it('Check if input is disabled', () => {
    render(<Input disabled placeholder="Input" />)
    expect(screen.getByPlaceholderText('Input')).toBeDisabled()
  })

  it('Check if input render left and right element slot', () => {
    const leftElement = <div>left element</div>
    const rightElement = <div>right element</div>

    render(
      <Input
        placeholder="Input"
        leftElementSlot={leftElement}
        rightElementSlot={rightElement}
      />
    )

    expect(screen.getByText('left element')).toBeInTheDocument()
    expect(screen.getByText('right element')).toBeInTheDocument()
  })

  it('Check if input render left and right icons', () => {
    render(<Input placeholder="Input" leftIcon="search" rightIcon="remove" />)

    expect(screen.getByText('remove')).toBeInTheDocument()
    expect(screen.getByText('search')).toBeInTheDocument()
  })

  it('Check if input render left and right addon elements', () => {
    const leftAddon = <div>left addon</div>
    const rightAddon = <div>right addon</div>

    render(
      <Input
        placeholder="Input"
        leftAddon={leftAddon}
        rightAddon={rightAddon}
      />
    )

    expect(screen.getByText('left addon')).toBeInTheDocument()
    expect(screen.getByText('right addon')).toBeInTheDocument()
  })
})
