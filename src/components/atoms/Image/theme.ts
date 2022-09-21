import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type ImageConfig = {
  baseStyle?: BaseStyle
  variants?: VariantStyles
  defaultProps?: {
    variant: string
  }
}

const variants: VariantStyles = {
  'primary-solid': {}
}

const ImageTheme: ImageConfig = {
  baseStyle: {},
  variants,
  defaultProps: {
    variant: 'primary-solid'
  }
}

export default ImageTheme
