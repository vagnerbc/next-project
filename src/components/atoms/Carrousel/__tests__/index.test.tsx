import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Carrousel } from '..'

import { Flex } from '../../Flex'

describe('Correndo Testes de Carrousel', () => {
  const textArray = ['text1', 'text2', 'text3']
  const component = (
    <Carrousel>
      {textArray.map(text => (
        <Flex
          bgColor="brand.primary-default"
          h="100%"
          w="100%"
          key={text}
          alignItems="center"
          justifyContent="center"
          color="standard.white"
        >
          {text}
        </Flex>
      ))}
    </Carrousel>
  )
  it('renderizando components', () => {
    render(component)
    expect(screen.getByText('1/3')).toBeTruthy()
    expect(screen.getByText('text1')).toBeVisible()
    expect(screen.getByText('text3')).not.toBeVisible()
    expect(screen.getByTestId('foward-button')).toBeVisible()
    expect(screen.getByTestId('back-button')).not.toBeVisible()
  })
  it('Checando a funcionalidade dos botões', () => {
    render(component)

    userEvent.click(screen.getByTestId('foward-button'))
    userEvent.click(screen.getByTestId('foward-button'))

    expect(screen.getByText('3/3')).toBeTruthy()
    expect(screen.getByText('text1')).not.toBeVisible()
    expect(screen.getByText('text3')).toBeVisible()
    expect(screen.getByTestId('foward-button')).not.toBeVisible()
    expect(screen.getByTestId('back-button')).toBeVisible()

    userEvent.click(screen.getByTestId('back-button'))

    expect(screen.getByText('2/3')).toBeTruthy()
    expect(screen.getByText('text1')).toBeVisible()
    expect(screen.getByTestId('foward-button')).toBeVisible()
    expect(screen.getByTestId('back-button')).toBeVisible()
  })
})
