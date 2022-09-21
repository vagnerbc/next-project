import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Paginator } from '..'

import userEvent from '@testing-library/user-event'
import React from 'react'

describe('Testes do componente Paginator', () => {
  it('Deve renderizar corretamente', () => {
    render(<Paginator currentPage={0} lastPage={12} onChangePage={jest.fn()} />)

    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.getByText('3')).toBeTruthy()
    expect(screen.getByText('more_horiz')).toBeTruthy()
    expect(screen.getByText('12')).toBeTruthy()
  })

  it('Deve mostrar os proximos três números e o primeiro ao clicar no more_horiz', () => {
    const onChangePage = jest.fn()
    render(
      <Paginator currentPage={4} lastPage={12} onChangePage={onChangePage} />
    )

    const moreButton = screen.getAllByText('more_horiz')[0]

    userEvent.click(moreButton)

    expect(onChangePage).toHaveBeenCalled()
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('4')).toBeTruthy()
    expect(screen.getByText('5')).toBeTruthy()
    expect(screen.getByText('6')).toBeTruthy()
    expect(screen.getAllByText('more_horiz').length).toEqual(2)
    expect(screen.getByText('12')).toBeTruthy()
  })

  it('Deve mostrar os três números anteriores e o primeiro ao clicar no more_horiz', () => {
    const onChangePage = jest.fn()
    render(
      <Paginator currentPage={11} lastPage={12} onChangePage={onChangePage} />
    )

    const moreButton = screen.getByText('more_horiz')

    userEvent.click(moreButton)

    expect(onChangePage).toHaveBeenCalled()
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('10')).toBeTruthy()
    expect(screen.getByText('11')).toBeTruthy()
    expect(screen.getByText('12')).toBeTruthy()
  })
})
