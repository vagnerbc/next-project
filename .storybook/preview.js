import React from 'react'
import theme from '../src/theme'

import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../src/theme/providers/ThemeProvider'

import './index.css'

import '../src/theme/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  chakra: {
    theme,
    enableColorModeControl: false
  },
  options: {
    storySort: {
      order: [
        'Global Tokens',
        [
          '1 - Como usar?',
          '2 - Colors',
          '3 - Tipografia',
          '4 - Borders',
          '5 - Shadows',
          '6 - Opacity',
          '7 - Spacing',
          '8 - Layout'
        ]
      ]
    }
  }
}

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>)
