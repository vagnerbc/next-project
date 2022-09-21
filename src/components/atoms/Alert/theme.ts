import { alertAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

import { getBaseStyles, getLeftAccentStyle } from './factories'

export type AlertStyle = PartsStyleObject<typeof alertAnatomy>

export type VariantNames =
  | 'solid-feedback-success-mediumdark'
  | 'solid-feedback-warning-default'
  | 'solid-feedback-error-mediumlight'
  | 'solid-feedback-information-extradark'
  | 'subtle-feedback-success-lightest'
  | 'subtle-feedback-warning-lightest'
  | 'subtle-support-tertiary-light'
  | 'subtle-feedback-information-lightest'
  | 'left-accent-feedback-success-lightest'
  | 'left-accent-feedback-warning-lightest'
  | 'left-accent-support-tertiary-light'
  | 'left-accent-feedback-information-lightest'

type VariantStyles = {
  [key in VariantNames]: AlertStyle
}

type SizeStyles = {
  [key: string]: AlertStyle
}

type BaseStyle = AlertStyle

type AlertConfig = {
  baseStyle?: BaseStyle
  sizes?: SizeStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant?: string
  }
}

const variants: VariantStyles = {
  'solid-feedback-success-mediumdark': getBaseStyles({
    bgColor: 'feedback.success-mediumdark',
    color: 'standard.white'
  }),
  'solid-feedback-warning-default': getBaseStyles({
    bgColor: 'feedback.warning-default',
    color: 'neutral.extradark'
  }),
  'solid-feedback-error-mediumlight': getBaseStyles({
    bgColor: 'feedback.error-mediumlight',
    color: 'standard.white'
  }),
  'solid-feedback-information-extradark': getBaseStyles({
    bgColor: 'feedback.information-extradark',
    color: 'standard.white'
  }),
  'subtle-feedback-success-lightest': getBaseStyles({
    bgColor: 'feedback.success-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.success-extradark'
  }),
  'subtle-feedback-warning-lightest': getBaseStyles({
    bgColor: 'feedback.warning-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.warning-extradark'
  }),
  'subtle-support-tertiary-light': getBaseStyles({
    bgColor: 'support.tertiary-light',
    color: 'neutral.darkest',
    iconColor: 'feedback.error-dark'
  }),
  'subtle-feedback-information-lightest': getBaseStyles({
    bgColor: 'feedback.information-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.information-extradark'
  }),
  'left-accent-feedback-success-lightest': getLeftAccentStyle({
    bgColor: 'feedback.success-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.success-extradark',
    borderColor: 'feedback.success-extradark'
  }),
  'left-accent-feedback-warning-lightest': getLeftAccentStyle({
    bgColor: 'feedback.warning-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.warning-extradark',
    borderColor: 'feedback.warning-extradark'
  }),
  'left-accent-support-tertiary-light': getLeftAccentStyle({
    bgColor: 'support.tertiary-light',
    color: 'neutral.darkest',
    borderColor: 'feedback.error-dark',
    iconColor: 'feedback.error-dark'
  }),
  'left-accent-feedback-information-lightest': getLeftAccentStyle({
    bgColor: 'feedback.information-lightest',
    color: 'neutral.darkest',
    iconColor: 'feedback.information-extradark',
    borderColor: 'feedback.information-extradark'
  })
}

const AlertTheme: AlertConfig = {
  baseStyle: {
    title: {
      fontWeight: 'bold'
    },
    container: {
      padding: 'xxxs',
      borderRadius: 'sm',
      lineHeight: 'default'
    },
    icon: {
      marginInlineEnd: 'xxxs'
    }
  },
  sizes: {
    xs: {
      container: {
        height: '32px',
        fontSize: 'xxxs',
        lineHeight: 'xs'
      },
      icon: {
        height: '1rem'
      }
    },
    sm: {
      container: {
        fontSize: 'xxs',
        lineHeight: 'md'
      },
      icon: {
        height: '1rem'
      }
    },
    md: {
      container: {
        fontSize: 'xs',
        lineHeight: 'md'
      },
      icon: {
        height: '1.25rem'
      }
    }
  },
  variants,
  defaultProps: {
    size: 'md'
  }
}

export default AlertTheme
