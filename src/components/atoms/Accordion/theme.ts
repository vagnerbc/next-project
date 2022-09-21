import { accordionAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type AccordionStyle = PartsStyleObject<typeof accordionAnatomy>

type VariantStyles = {
  [key: string]: AccordionStyle
}

type BaseStyle = AccordionStyle

type AccordionConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'standard-white': {
    container: {
      border: 'none',
      borderColor: 'neutral.mediumlight',
      borderRadius: 'sm',
      shadow: 'primary-level1',
      bg: 'standard.white'
    },
    button: {
      color: 'brand.secondary-default',
      fontWeight: 'bold',
      justifyContent: 'space-between'
    },
    icon: {
      color: 'brand.primary-default'
    }
  },
  'brand-secondary-default': {
    container: {
      border: 'none'
    },
    button: {
      color: 'brand.secondary-default',
      fontWeight: 'bold',
      justifyContent: 'space-between'
    },
    icon: {
      color: 'neutral.dark'
    }
  }
}

const AccordionTheme: AccordionConfig = {
  baseStyle: {
    button: {
      _focus: {
        bg: 'none',
        boxShadow: 'none'
      },
      _hover: {
        bg: 'none'
      }
    }
  },
  sizes: {
    md: {
      button: {
        fontSize: 'xs',
        px: 0
      },
      icon: {
        fontSize: 'md'
      }
    }
  },
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand-secondary-default'
  }
}

export default AccordionTheme
