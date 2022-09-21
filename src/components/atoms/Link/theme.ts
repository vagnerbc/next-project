import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type LinkConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'default-neutral-extradark': {
    color: 'neutral.extradark',
    _hover: {
      textDecor: 'none',
      borderColor: 'neutral.darkest'
    }
  },
  'underline-standard-white': {
    color: 'standard.white',
    textDecor: 'underline'
  }
}

const linkTheme: LinkConfig = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    borderBottom: '2px solid',
    borderColor: 'transparent',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'neutral.darkest'
    }
  },
  sizes: {
    xs: {
      fontSize: 'xxxs',
      lineHeight: 'md'
    },
    sm: {
      fontSize: 'xxs',
      lineHeight: 'md'
    },
    md: {
      fontSize: 'xs',
      lineHeight: 'sm'
    },
    lg: {
      fontSize: 'sm',
      lineHeight: 'lg'
    }
  },
  variants,
  defaultProps: {
    variant: 'default-neutral-extradark',
    size: 'sm'
  }
}

export default linkTheme
