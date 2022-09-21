import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '..'

describe('Running Test for Alert', () => {
  it('Deve renderizar corretamente', () => {
    render(
      <Alert>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Title')).toBeTruthy()
    expect(screen.getByText('Description')).toBeTruthy()
  })
})
