import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Breadcrumb } from '..'

describe('Running Test for Breadcrumb', () => {
  it('Deve renderizar corretamente', () => {
    const crumbs = [
      {
        name: 'Home',
        path: 'home/'
      },
      {
        name: 'Clientes',
        path: 'clients/'
      },
      {
        name: 'Edição',
        path: 'edit/'
      }
    ]
    render(<Breadcrumb crumbs={crumbs} />)

    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Clientes')).toBeTruthy()
    expect(screen.getByText('Edição')).toBeTruthy()
  })

  it('Não deve renderizar caso naõ seja passado nada', () => {
    const crumbs = []
    render(<Breadcrumb crumbs={crumbs} />)

    expect(screen.queryByText('Home')).not.toBeTruthy()
    expect(screen.queryByText('Clientes')).not.toBeTruthy()
    expect(screen.queryByText('Edição')).not.toBeTruthy()
  })
})
