import { radioAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

import { getSolidStyles } from './factories'

type RadioStyle = PartsStyleObject<typeof radioAnatomy>

type VariantStyles = {
  [key: string]: RadioStyle
}

type BaseStyle = RadioStyle

type RadioConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-default': getSolidStyles({
    bgColor: 'brand.primary-default',
    color: 'standard.white',
    bgColorHover: 'brand.primary-light',
    colorHover: 'standard.white'
  }),
  'brand-secondary-default': getSolidStyles({
    bgColor: 'brand.secondary-default',
    color: 'standard.white',
    bgColorHover: 'brand.secondary-light',
    colorHover: 'standard.white'
  })
}

const RadioTheme: RadioConfig = {
  baseStyle: {
    label: {
      color: 'neutral.extradark',
      _disabled: {
        opacity: 0.32
      },
      _checked: {
        fontWeight: 'bold'
      },
      pt: '3px'
    },
    control: {
      borderColor: 'neutral.default',
      border: '2px solid',
      _checked: {
        _disabled: {
          border: '2px solid',
          bgColor: 'neutral.mediumlight',
          color: 'neutral.extradark'
        }
      },
      _focusVisible: {
        color: 'standard.black',
        bgColor: 'none',
        outline: '2px solid',
        outlineColor: 'neutral.darkest'
      },
      _focus: { boxShadow: 'none' },
      _disabled: {
        opacity: 0.32,
        borderColor: 'neutral.extradark',
        bgColor: 'neutral.mediumlight'
      },
      _invalid: {
        borderColor: 'feedback.error-default'
      }
    }
  },
  sizes: {
    sm: {
      label: {
        fontSize: 'xxxs',
        lineHeight: 'md'
      },
      control: {
        width: '0.75em',
        height: '0.75em'
      }
    },
    md: {
      label: {
        fontSize: 'xs',
        lineHeight: 'sm'
      },
      control: {
        width: '1em',
        height: '1em'
      }
    },
    lg: {
      control: {
        width: '1.25em',
        height: '1.25em'
      },
      label: {
        fontSize: 'xs',
        lineHeight: 'sm'
      }
    }
  },
  variants
}

export default RadioTheme
