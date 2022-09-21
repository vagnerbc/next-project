import { modalAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type ModalStyle = PartsStyleObject<typeof modalAnatomy>

type VariantStyles = {
  [key: string]: ModalStyle
}

type BaseStyle = ModalStyle

type ModalConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'footer-no-box-shadow': {
    footer: {
      boxShadow: 'none'
    }
  },
  'footer-neutral-extralight': {
    footer: {
      bg: 'neutral.extralight'
    }
  },
  'align-bottom': {
    dialogContainer: {
      alignItems: 'flex-end'
    }
  }
}

const ModalTheme: ModalConfig = {
  baseStyle: {
    closeButton: {
      fontSize: 'xxs',
      top: 'xxxs',
      left: 'nano',
      _focus: { boxShadow: 'none' },
      _hover: { bgColor: 'none' }
    },
    header: {
      p: 'xxxs',
      bgColor: 'transparent'
    },
    body: {
      px: 'xs',
      overflowX: 'auto'
    },
    footer: {
      boxShadow: '-3px -5px 8px rgba(33, 37, 41, 0.16)',
      py: 0,
      px: 0
    }
  },
  sizes: {},
  variants
}

export default ModalTheme
