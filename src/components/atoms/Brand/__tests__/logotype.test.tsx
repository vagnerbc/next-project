import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import Logotype from '../logotype'

import { BrandSizes } from '..'

type Variant = 'primary-logotype' | 'secondary-logotype'

describe('Running Test for Logotype', () => {
  const functionTest = (variant: Variant, size?: BrandSizes) => {
    it(`O componente deve renderizar com o tamanho ${size}`, () => {
      render(<Logotype variant={variant} size={size} />)
      expect(screen.getByTestId(`${variant}-svg`)).toBeTruthy()
    })
  }

  functionTest('primary-logotype', 'xs')
  functionTest('primary-logotype', 'sm')
  functionTest('primary-logotype', 'md')
  functionTest('primary-logotype', 'lg')

  it('O componente deve renderizar com o tamanho padrão e tipo "secondary" ', () => {
    render(<Logotype variant="secondary-logotype" />)
    expect(screen.getByTestId('secondary-logotype-svg')).toBeTruthy()
  })
})
