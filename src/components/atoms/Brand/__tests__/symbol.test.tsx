import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import Symbol from '../symbol'

import { BrandSizes } from '..'

type Variant = 'primary-symbol' | 'secondary-symbol'

describe('Running Test for Symbol', () => {
  const functionTest = (variant: Variant, size?: BrandSizes) => {
    it(`O componente deve renderizar exibindo a imagem ${variant}`, () => {
      render(<Symbol variant={variant} size={size} />)
      expect(screen.getByTestId(`${variant}-svg`)).toBeTruthy()
    })
  }

  functionTest('primary-symbol', 'xs')
  functionTest('primary-symbol', 'sm')
  functionTest('primary-symbol', 'md')
  functionTest('primary-symbol', 'lg')

  it('O componente deve renderizar com o tamanho padrão e tipo "secondary" ', () => {
    render(<Symbol variant="secondary-symbol" />)
    expect(screen.getByTestId('secondary-symbol-svg')).toBeTruthy()
  })
})
