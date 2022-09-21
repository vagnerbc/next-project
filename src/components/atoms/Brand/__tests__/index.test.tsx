import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Brand, BrandTypes } from '..'

describe('Running Test for Brand', () => {
  const functionTest = (variant: BrandTypes) => {
    it(`O componente deve renderizar exibindo a imagem ${variant}`, () => {
      render(<Brand variant={variant} />)
      expect(screen.getByTestId(`${variant}-svg`)).toBeTruthy()
    })
  }

  functionTest('primary-logotype')
  functionTest('secondary-logotype')
  functionTest('primary-symbol')
  functionTest('secondary-symbol')
  functionTest('primary-marca')
  functionTest('secondary-marca')
})
