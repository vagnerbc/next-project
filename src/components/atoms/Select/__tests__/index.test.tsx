import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, userEvent } from 'jest/utils/test-utils'

import { Select, SelectOption } from '..'

describe('Running Test for Select', () => {
  const options: SelectOption[] = [
    { id: '1', description: 'option 1' },
    { id: '2', description: 'option 2' }
  ]

  const renderAndOpen = (
    options: SelectOption[] = [],
    disabled = false,
    onChangeSpy: any = undefined
  ) => {
    render(
      <Select
        placeholder="Selecione uma opção"
        options={options}
        onChange={onChangeSpy}
        isDisabled={disabled}
      />
    )
    userEvent.click(screen.getByTestId('menu-button'))
  }

  const clickOption = (label: string) => {
    userEvent.click(screen.getByText(label))
  }

  it('should render correctly', () => {
    renderAndOpen(options, false)

    expect(screen.getByText('Selecione uma opção')).toBeTruthy()

    options.forEach(option => {
      expect(screen.getByText(option.description)).toBeTruthy()
    })
  })

  it('check if options not render if select is disabled', () => {
    renderAndOpen(options, true)

    expect(screen.queryByText(options[0].description)).toBeFalsy()
  })

  it('should call onChange with selected option', () => {
    const onChangeSpy = jest.fn()
    renderAndOpen(options, false, onChangeSpy)

    clickOption(options[0].description)

    expect(onChangeSpy).toHaveBeenCalledWith(options[0].id)
  })

  it('should call onChange with undefined when click to clear selection', () => {
    const onChangeSpy = jest.fn()

    render(
      <Select
        placeholder="Selecione uma opção"
        options={options}
        onChange={onChangeSpy}
        isCleanable
      />
    )

    userEvent.click(screen.getByTestId('menu-button'))

    clickOption(options[0].description)

    userEvent.click(screen.getByTestId('clear-icon'))

    expect(onChangeSpy).toHaveBeenLastCalledWith(undefined)
  })

  it('should show invalid icon if select is invalid', () => {
    render(<Select onChange={jest.fn()} options={options} isInvalid />)

    expect(screen.getByTestId('invalid-icon')).toBeTruthy()
  })
})
