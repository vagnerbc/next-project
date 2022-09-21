import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type TextConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-secondary-default': {
    color: 'brand.secondary-default',
    fontWeight: 'bold',
    lineHeight: 'sm'
  },
  'default-neutral-extradark': {
    color: 'neutral.extradark',
    fontWeight: 'bold',
    lineHeight: 'xs'
  }
}

const TextTheme: TextConfig = {
  sizes: {
    sm: {
      fontSize: 'xxxs'
    },
    md: {
      fontSize: 'xxs'
    },
    lg: {
      fontSize: 'xs'
    }
  },
  variants
}

export default TextTheme
