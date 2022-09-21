import '@testing-library/jest-dom'
import { render, screen } from 'jest/utils/test-utils'
import React from 'react'

import { SelectSearch } from '..'

describe('Running Test for SelectSearch', () => {
  it('should render correctly', () => {
    render(
      <SelectSearch
        placeholder="Selecione uma opção"
        multiValueBackground="black"
      />
    )

    expect(screen.getByText('Selecione uma opção')).toBeTruthy()
  })
})
