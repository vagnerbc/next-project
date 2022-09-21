import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AddIcon } from '@chakra-ui/icons'

import { TagRightIcon } from '..'

describe('Running Test for TagRightIcon', () => {
  it('Check if TagRightIcon render', () => {
    render(<TagRightIcon data-testid="tag-right-icon" as={AddIcon} />)

    expect(screen.getByTestId('tag-right-icon')).toBeTruthy()
  })
})
