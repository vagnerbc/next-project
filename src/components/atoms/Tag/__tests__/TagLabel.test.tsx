import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TagLabel, Tag } from '..'

describe('Running Test for TagLabel', () => {
  it('Check if TagLabel render', () => {
    render(
      <Tag>
        <TagLabel>TagLabel</TagLabel>
      </Tag>
    )
    expect(screen.getByText('TagLabel')).toBeTruthy()
  })
})
