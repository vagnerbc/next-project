import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import Marca from '../marca'

import { BrandSizes } from '..'

type Variant = 'primary-marca' | 'secondary-marca'

describe('Running Test for Marca', () => {
  const functionTest = (variant: Variant, size?: BrandSizes) => {
    it(`O componente deve renderizar exibindo a imagem ${variant}`, () => {
      render(<Marca variant={variant} size={size} />)
      expect(screen.getByTestId(`${variant}-svg`)).toBeTruthy()
    })
  }

  functionTest('primary-marca', 'xs')
  functionTest('primary-marca', 'sm')
  functionTest('primary-marca', 'md')
  functionTest('primary-marca', 'lg')

  it('O componente deve renderizar com o tamanho padrão e tipo "secondary" ', () => {
    render(<Marca variant="secondary-marca" />)
    expect(screen.getByTestId('secondary-marca-svg')).toBeTruthy()
  })
})
