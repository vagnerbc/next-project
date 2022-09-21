import { tabsAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type TabsStyle = PartsStyleObject<typeof tabsAnatomy>

export type VariantNames = 'brand-primary-solid' | 'brand-secondary-solid'

type VariantStyles = {
  [key in VariantNames]?: TabsStyle
}

type SizeStyles = {
  [key: string]: TabsStyle
}

type BaseStyle = TabsStyle

type TabsConfig = {
  baseStyle?: BaseStyle
  sizes?: SizeStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-solid': {
    tab: {
      _selected: {
        color: 'brand.primary-default',
        borderColor: 'brand.primary-default'
      }
    }
  },
  'brand-secondary-solid': {
    tab: {
      _selected: {
        color: 'brand.secondary-default',
        borderColor: 'brand.secondary-default'
      }
    }
  }
}

const TabsTheme: TabsConfig = {
  baseStyle: {
    tab: {
      color: 'neutral.extradark',
      borderBottom: '2px solid transparent',
      marginX: 'xxs',
      _focus: {
        boxShadow: 'none'
      },
      _selected: {
        fontWeight: 'bold',
        borderBottomWidth: '2px'
      },
      _disabled: {
        color: 'neutral.dark',
        cursor: 'not-allowed'
      }
    }
  },
  sizes: {
    xs: {
      tab: {
        fontSize: 'xs'
      }
    },
    sm: {
      tab: {
        fontSize: 'sm'
      }
    },
    md: {
      tab: {
        fontSize: 'md'
      }
    }
  },
  variants,
  defaultProps: {
    size: 'sm',
    variant: 'brand-primary-solid'
  }
}

export default TabsTheme
