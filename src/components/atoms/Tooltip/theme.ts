import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [key: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type TooltipConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-default': {
    bg: 'neutral.darkest',
    color: 'standard.white'
  },
  'brand-primary': {
    bg: 'standard.white',
    color: 'neutral.darkest',
    borderColor: 'brand.primary-default',
    borderWidth: '2px'
  }
}

const TooltipTheme: TooltipConfig = {
  baseStyle: { p: '8px' },
  sizes: {
    sm: {
      fontSize: 'xxxs',
      lineHeight: '18px',
      fontWeight: 400
    },
    md: {
      fontSize: 'xxs',
      lineHeight: '18px',
      fontWeight: 400
    },
    lg: {
      fontSize: 'xs',
      lineHeight: '18px',
      fontWeight: 400
    }
  },
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand-primary'
  }
}

export default TooltipTheme
