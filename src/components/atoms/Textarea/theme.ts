import { SystemStyleObject } from '@chakra-ui/theme-tools'

import { getDefaultStyle } from './factories'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type TextareaConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-default': getDefaultStyle({
    borderColor: 'brand.primary-default'
  }),
  'brand-secondary-default': getDefaultStyle({
    borderColor: 'brand.secondary-default'
  })
}

const TextareaTheme: TextareaConfig = {
  baseStyle: {
    bgColor: 'standard.white',
    _placeholder: {
      color: 'neutral.dark'
    },
    _hover: {
      border: '1px solid',
      borderColor: 'neutral.darkest'
    },
    _disabled: {
      opacity: 0.32,
      borderColor: 'neutral.extradark'
    }
  },
  sizes: {
    sm: {
      fontSize: 'xxs',
      lineHeight: 'sm'
    },
    md: {
      fontSize: 'xs',
      lineHeight: 'sm'
    }
  },
  variants,
  defaultProps: {
    variant: 'brand-primary-default',
    size: 'md'
  }
}

export default TextareaTheme
