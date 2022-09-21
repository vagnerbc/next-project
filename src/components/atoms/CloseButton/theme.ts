import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [variant: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type CloseButtonConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const closeButtonTheme: CloseButtonConfig = {
  baseStyle: {
    color: 'neutral.darkest',
    borderRadius: 'sm',
    _hover: {
      bgColor: 'neutral.extralight'
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'neutral.darkest',
      bgColor: 'neutral.extralight',
      _active: {
        bgColor: 'neutral.mediumlight',
        outline: 'none'
      }
    },
    _disabled: {
      opacity: 0.32,
      _hover: {
        bgColor: 'transparent'
      }
    }
  },
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
  }
}

export default closeButtonTheme
