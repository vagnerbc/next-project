import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AddIcon } from '@chakra-ui/icons'

import { TagLeftIcon } from '..'

describe('Running Test for TagLeftIcon', () => {
  it('Check if TagLeftIcon render', () => {
    render(<TagLeftIcon data-testid="tag-left-icon" as={AddIcon} />)

    expect(screen.getByTestId('tag-left-icon')).toBeTruthy()
  })
})
