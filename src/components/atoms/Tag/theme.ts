import { tagAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

import { getHighlightStyle, getSelectStyle, customTagStyle } from './factories'

type TagStyle = PartsStyleObject<typeof tagAnatomy>

type VariantStyles = {
  [key: string]: TagStyle
}

type BaseStyle = TagStyle

type TagConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'support-primary-default-outline': customTagStyle({
    color: 'support.primary-default',
    borderColor: 'support.primary-default'
  }),
  'support-secondary-default-outline': customTagStyle({
    color: 'support.secondary-default',
    borderColor: 'support.secondary-default'
  }),
  'support-tertiary-dark-outline': customTagStyle({
    color: 'support.tertiary-dark',
    borderColor: 'support.tertiary-dark'
  }),
  'feedback-information-default-outline': customTagStyle({
    color: 'feedback.information-default',
    borderColor: 'feedback.information-default'
  }),
  'select-brand-primary-light': getSelectStyle({
    bgColorFocusVisible: 'brand.primary-lightest',
    bgColorHover: 'brand.primary-light',
    borderColor: 'brand.primary-light'
  }),
  'select-brand-secondary-light': getSelectStyle({
    bgColorFocusVisible: 'brand.secondary-default',
    bgColorHover: 'brand.secondary-light',
    borderColor: 'brand.secondary-light'
  }),
  'ghost-default': {
    container: {
      bgColor: 'transparent',
      border: 'none'
    },
    label: {
      color: 'neutral.extradark'
    }
  },
  'outline-default': customTagStyle({
    color: 'neutral.mediumdark',
    borderColor: 'neutral.mediumdark'
  }),
  'highlight-brand-primary-default': getHighlightStyle({
    bgColor: 'brand.primary-default',
    color: 'standard.white'
  }),
  'highlight-brand-secondary-default': getHighlightStyle({
    bgColor: 'brand.secondary-default',
    color: 'standard.white'
  }),
  'highlight-neutral-extralight': getHighlightStyle({
    bgColor: 'neutral.extralight',
    color: 'neutral.extradark'
  }),
  'highlight-neutral-default': getHighlightStyle({
    bgColor: 'neutral.default',
    color: 'standard.white'
  }),
  'standard-light-outline': {
    container: {
      bgColor: 'standard.light',
      borderRadius: 'pill',
      border: '1px solid',
      borderColor: 'neutral.mediumdark',
      _disabled: {
        border: 'none',
        opacity: 0.64,
        bgColor: 'neutral.mediumlight'
      }
    },
    label: {
      color: 'neutral.mediumdark'
    }
  }
}

const TagTheme: TagConfig = {
  baseStyle: {
    container: {
      _disabled: {
        opacity: 0.64
      },
      fontWeight: 'bold'
    },
    label: {
      fontWeight: 'bold'
    }
  },
  sizes: {
    sm: {
      closeButton: {
        fontSize: 'sm'
      },
      label: {
        fontSize: 'xxxs'
      },
      container: {
        py: '2px',
        px: 'nano',
        fontSize: 'xxxs'
      }
    },
    md: {
      label: {
        fontSize: 'xxs'
      },
      container: {
        py: '3px',
        px: 'nano',
        fontSize: 'xxs'
      },
      closeButton: {
        fontSize: 'sm'
      }
    },
    lg: {
      label: {
        fontSize: 'xs'
      },
      container: {
        py: '6px',
        px: '12px',
        fontSize: 'xs'
      },
      closeButton: {
        fontSize: 'md'
      }
    }
  },
  variants
}

export default TagTheme
