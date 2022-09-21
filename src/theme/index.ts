import { extendTheme } from '@chakra-ui/react'

import * as border from './borders'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import components from './components'
import { shadows } from './shadows'
import { space } from './spacing'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'

const theme = extendTheme({
  styles: {
    global: {
      '*:focus': {
        boxShadow: 'none !important'
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  shadows,
  space,
  borders: border.width,
  radii: border.radius,
  components
})

export default theme
