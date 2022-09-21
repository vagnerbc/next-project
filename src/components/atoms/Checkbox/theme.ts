import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

import { getSolidStyles } from './factories'

type CheckboxStyle = PartsStyleObject<typeof checkboxAnatomy>

type VariantStyles = {
  [key: string]: CheckboxStyle
}

type BaseStyle = CheckboxStyle

type CheckboxConfig = {
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
    colorHover: 'standard.white',
    bgColorHover: 'brand.primary-light'
  }),
  'brand-secondary-default': getSolidStyles({
    bgColor: 'brand.secondary-default',
    color: 'standard.white',
    colorHover: 'standard.white',
    bgColorHover: 'brand.secondary-light'
  })
}

const CheckboxTheme: CheckboxConfig = {
  baseStyle: {
    label: {
      color: 'neutral.extradark',
      _disabled: {
        opacity: 0.32
      }
    },
    control: {
      borderColor: 'neutral.mediumdark',
      borderRadius: 'xs',
      border: '2px solid',
      _checked: {
        _disabled: {
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

export default CheckboxTheme
