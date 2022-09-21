import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TextInfo } from '..'

describe('Running Test for TextInfo', () => {
  it('Deve renderizar corretamente', () => {
    const label = 'Label'
    const text = 'Text'

    render(<TextInfo label={label} text={text} />)

    expect(screen.getByText('Label')).toBeTruthy()
    expect(screen.getByText('Text')).toBeTruthy()
  })
})
