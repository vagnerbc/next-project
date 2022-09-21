import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type ContainerConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const containerTheme: ContainerConfig = {
  baseStyle: {},
  sizes: {
    sm: {
      maxWidth: '40rem'
    },
    md: {
      maxWidth: '48rem'
    },
    lg: {
      maxWidth: '64rem'
    },
    xl: {
      maxWidth: '80rem'
    }
  },
  variants: {}
}

export default containerTheme
