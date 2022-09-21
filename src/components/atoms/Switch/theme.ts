import { switchAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type SwitchStyle = PartsStyleObject<typeof switchAnatomy>

type VariantStyles = {
  [key: string]: SwitchStyle
}

type BaseStyle = SwitchStyle

type SwitchConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-solid': {
    track: {
      bgColor: 'neutral.dark',
      _checked: { bgColor: 'brand.primary-default' }
    }
  },
  'brand-secondary-solid': {
    track: {
      bgColor: 'neutral.dark',
      _checked: { bgColor: 'brand.secondary-default' }
    }
  }
}

const SwitchTheme: SwitchConfig = {
  baseStyle: {
    container: {
      fontFamily: 'Nunito',
      display: 'flex',
      alignItems: 'center',
      _checked: { fontWeight: 'bold' },
      _disabled: { opacity: 0.64 }
    },
    track: {
      _focus: {
        boxShadow: 'none'
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'neutral.darkest'
      }
    },
    thumb: { bgColor: 'standard.white' }
  },
  sizes: {
    sm: {
      thumb: { height: '12px', width: '12px' },
      container: {
        fontSize: 'xxxs',
        lineHeight: 'xs'
      }
    },
    md: {
      thumb: { height: '16px', width: '16px' },
      container: {
        fontSize: 'xs',
        lineHeight: 'sm'
      }
    },
    lg: {
      thumb: { height: '24px', width: '24px' },
      container: {
        fontSize: 'xs',
        lineHeight: 'sm'
      }
    }
  },
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand-primary-solid'
  }
}

export default SwitchTheme
