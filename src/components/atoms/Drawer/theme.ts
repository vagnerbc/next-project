import { drawerAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type DrawerStyle = PartsStyleObject<typeof drawerAnatomy>

type VariantStyles = {
  [key: string]: DrawerStyle
}

type BaseStyle = DrawerStyle

type DrawerConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {}

const DrawerTheme: DrawerConfig = {
  baseStyle: {
    closeButton: {
      _focus: { boxShadow: 'none' }
    }
  },
  variants
}

export default DrawerTheme
