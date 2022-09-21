import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { QuantityPicker } from '..'

describe('Testes do QuantityPicker', () => {
  const props = {
    value: 1,
    step: 1
  }

  it('deve renderizar o componente corretamente', () => {
    render(<QuantityPicker {...props} />)

    expect(screen.getByTestId('input-number')).toHaveProperty('value', '1')
    expect(screen.getByTestId('delete-icon-container')).toBeTruthy()
    expect(screen.getByTestId('delete-icon')).toBeTruthy()
    expect(screen.getByTestId('add-icon-container')).toBeTruthy()
    expect(screen.getByTestId('add-icon')).toBeTruthy()
  })

  it('deve desabilitar o componente', () => {
    render(<QuantityPicker {...props} isDisabled />)

    expect(screen.getByTestId('input-number')).toHaveAttribute('disabled')
    expect(screen.getByTestId('delete-icon-container')).toBeTruthy()
    expect(screen.getByTestId('add-icon-container')).toBeTruthy()
  })

  it('deve aumentar o valor em 1', () => {
    const onChange = jest.fn()

    render(<QuantityPicker {...props} onChange={onChange} />)

    const addButton = screen.getByTestId('add-icon-container')
    userEvent.click(addButton)

    expect(onChange).toBeCalledWith(2)
  })

  it('deve diminuir o valor em 1', () => {
    const onChange = jest.fn()
    props.value = 22

    render(<QuantityPicker {...props} onChange={onChange} />)

    const removeButton = screen.getByTestId('minus-icon-container')
    userEvent.click(removeButton)

    expect(onChange).toBeCalledWith(21)
  })

  it('deve aumentar o valor e desabilitar add quando chegar no max', () => {
    const onChange = jest.fn()
    props.value = 4

    const { rerender } = render(
      <QuantityPicker {...props} onChange={onChange} max={5} />
    )

    const addButton = screen.getByTestId('add-icon-container')

    expect(addButton).not.toHaveAttribute('disabled')
    userEvent.click(addButton)

    expect(onChange).toBeCalledWith(5)

    props.value = 5
    rerender(<QuantityPicker {...props} onChange={onChange} max={5} />)

    expect(addButton).toHaveAttribute('disabled')
  })
})
