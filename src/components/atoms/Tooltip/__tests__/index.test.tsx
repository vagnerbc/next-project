import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import { Tooltip } from '..'

import { Text } from '../../Text'

describe('Running Test for Tooltip', () => {
  it('Check Tooltip render correctly', () => {
    render(
      <Tooltip label="teste tooltip">
        <Text>TooltipItem 1</Text>
      </Tooltip>
    )
    expect(screen.getByText('TooltipItem 1')).toBeTruthy()
  })
})
