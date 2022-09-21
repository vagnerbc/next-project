import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type BadgeConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant?: string
  }
}

const badgeTheme: BadgeConfig = {
  baseStyle: {},
  sizes: {
    xxxs: {
      minWidth: '12px',
      minHeight: '12px'
    },
    xs: {
      minWidth: '18px',
      minHeight: '18px'
    }
  },
  variants: {
    notify: {
      borderRadius: 'pill',
      color: 'standard.white',
      fontWeight: 'bold',
      fontSize: 'xxxs',
      textAlign: 'center',
      bgColor: 'feedback.error-dark'
    }
  },
  defaultProps: {
    size: 'xs',
    variant: 'notify'
  }
}

export default badgeTheme
