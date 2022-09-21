import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Tag } from '..'

describe('Running Test for Tag', () => {
  it('Check if Tag render', () => {
    render(<Tag>Tag</Tag>)
    expect(screen.getByText('Tag')).toBeTruthy()
  })
})
