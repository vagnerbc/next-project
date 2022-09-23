import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import theme from '..'

type ThemeProviderProps = React.FC<{ children?: React.ReactNode }>

export const ThemeProvider: ThemeProviderProps = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  )
}
