import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Table, Tbody, Td, Tr, Th, Thead, Tfoot } from '..'

describe('Running Test for Table', () => {
  it('check if Table render correctly', () => {
    render(
      <Table data-testid="table-container">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Value 1</Td>
          </Tr>
          <Tr>
            <Td>Value 2</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Footer 1</Th>
          </Tr>
        </Tfoot>
      </Table>
    )
    expect(screen.getByTestId('table-container')).toBeTruthy()
    expect(screen.getByText('Column 1')).toBeTruthy()
    expect(screen.getByText('Footer 1')).toBeTruthy()
    expect(screen.getByText('Value 1')).toBeTruthy()
    expect(screen.getByText('Value 2')).toBeTruthy()
  })
})
