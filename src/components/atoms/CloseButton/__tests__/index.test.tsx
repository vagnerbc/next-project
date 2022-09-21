import '@testing-library/jest-dom'
import React from 'react'

import { CloseButton } from '../'
import { render, screen } from '../../../jest/utils/test-utils'

describe('CloseButton component', () => {
  test('should render correctly', () => {
    render(<CloseButton />)

    expect(screen.getByLabelText('Close')).toBeTruthy()
  })
})
