import { menuAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type MenuStyle = PartsStyleObject<typeof menuAnatomy>

type VariantStyles = {
  [key: string]: MenuStyle
}

type BaseStyle = MenuStyle

type MenuConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-default': {
    item: {
      bgColor: 'neutral.lightest'
    }
  },
  'brand-primary-solid': {
    item: {
      bgColor: 'neutral.white',
      fontWeight: 'bold',
      color: 'neutral.extradark'
    },
    list: {
      borderRadius: '0px 0px 4px 4px'
    }
  }
}

const MenuTheme: MenuConfig = {
  baseStyle: {
    item: {
      _hover: {
        bgColor: 'standard.light'
      },
      _focus: {
        bgColor: 'standard.light'
      }
    },
    list: {
      boxShadow: '0px 4px 8px rgba(33, 37, 41, 0.16)'
    }
  },
  sizes: {
    sm: {
      item: {
        fontSize: 'xxs',
        px: 'xxxs',
        py: 'quarck'
      }
    },
    md: {
      item: {
        fontSize: 'xs',
        px: 'xxxs',
        py: 'nano',
        lineHeight: '20px'
      }
    },
    lg: {
      item: {
        fontSize: 'sm',
        px: 'xxxs',
        py: 'nano'
      }
    }
  },
  variants,
  defaultProps: {
    variant: 'brand-primary-default',
    size: 'md'
  }
}

export default MenuTheme
