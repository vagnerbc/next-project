import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Avatar } from '..'

describe('Running Test for Avatar', () => {
  it('O componente deve renderizar corretamente', () => {
    render(<Avatar data-testid="Avatar" />)
    expect(screen.getByTestId('Avatar')).toBeTruthy()
  })
})
