import { SystemStyleObject } from '@chakra-ui/theme-tools'

import {
  getGhostStyles,
  getOutlineStyles,
  getSolidStyles,
  getSelectStyles
} from './factories'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type ButtonConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-solid': getSolidStyles({
    bgColor: 'brand.primary-default',
    color: 'standard.white',
    bgColorHover: 'brand.primary-light'
  }),
  'brand-secondary-solid': getSolidStyles({
    bgColor: 'brand.secondary-default',
    color: 'standard.white',
    bgColorHover: 'brand.secondary-light'
  }),
  'default-outline': getOutlineStyles({
    border: '1px solid',
    borderColor: 'neutral.mediumdark',
    bgColorHover: 'brand.primary-lightest',
    borderColorHover: 'brand.primary-lightest',
    color: 'neutral.extradark',
    colorHover: 'standard.white'
  }),
  'neutral-extradark-ghost': getGhostStyles({
    color: 'neutral.extradark',
    colorHover: 'neutral.darkest'
  }),
  'neutral-extralight-solid': getSolidStyles({
    bgColor: 'neutral.extralight',
    color: 'neutral.extradark',
    bgColorHover: 'neutral.mediumlight'
  }),
  'feedback-error-default': getSolidStyles({
    bgColor: 'feedback.error-default',
    color: 'standard.white',
    bgColorHover: 'feedback.error-mediumlight'
  }),
  'standard-white-solid': getSolidStyles({
    bgColor: 'standard.white',
    color: 'neutral.extradark',
    bgColorHover: 'neutral.lightest'
  }),
  'icon-default-outline': getOutlineStyles({
    border: '1px solid',
    borderColor: 'neutral.mediumdark',
    bgColorHover: 'brand.primary-light',
    borderColorHover: 'brand.primary-light',
    color: 'neutral.extradark',
    colorHover: 'standard.white'
  }),
  'select-default': getSelectStyles({
    border: '1px solid',
    borderColor: 'neutral.extradark',
    color: 'neutral.extradark',
    bgColorHover: 'neutral.lightest',
    borderColorHover: 'neutral.darkest',
    colorHover: 'neutral.extradark'
  })
}

const buttonTheme: ButtonConfig = {
  baseStyle: {
    borderRadius: 'sm',
    transition: 'all 0.10s ease-in-out',
    _focus: { boxShadow: 'none' }
  },
  sizes: {
    sm: {
      fontSize: 'xxs',
      px: 'xxxs',
      py: 'quarck'
    },
    md: {
      fontSize: 'xs',
      px: 'xxxs',
      py: 'nano'
    },
    lg: {
      fontSize: 'sm',
      px: 'xxxs',
      py: 'nano'
    },
    'lg-square': {
      fontSize: 'xs',
      px: 'sm',
      py: 'sm'
    }
  },
  variants
}

export default buttonTheme
