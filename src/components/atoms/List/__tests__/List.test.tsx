import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { List, ListItem, UnorderedList, OrderedList } from '..'

describe('Running Test for List', () => {
  it('Check if List render correctly', () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    )

    expect(screen.getByText('Item 1')).toBeTruthy()
    expect(screen.getByText('Item 2')).toBeTruthy()
  })

  it('Check if UnorderedList render correctly', () => {
    render(
      <UnorderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </UnorderedList>
    )

    // debug()

    expect(screen.getByText('Item 1')).toBeTruthy()
    expect(screen.getByText('Item 2')).toBeTruthy()
  })

  it('Check if OrderedList render correctly', () => {
    render(
      <OrderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </OrderedList>
    )

    expect(screen.getByText('Item 1')).toBeTruthy()
    expect(screen.getByText('Item 2')).toBeTruthy()
  })
})
