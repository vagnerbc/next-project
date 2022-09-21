import { avatarAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type ProgressStyle = PartsStyleObject<typeof avatarAnatomy>

type VariantStyles = {
  [key: string]: ProgressStyle
}

type BaseStyle = ProgressStyle

type AvatarConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant?: string
  }
}

const AvatarTheme: AvatarConfig = {
  baseStyle: { badge: { bg: 'feedback.success-default' } },
  sizes: {
    '2xs': { container: { size: 'xxxs' } },
    xs: { container: { size: 'xxs' } },
    sm: { container: { size: 'xs' } },
    md: { container: { size: 'md' } },
    lg: { container: { size: 'xl' } },
    xl: { container: { size: '96px' } },
    '2xl': { container: { size: '128px' } }
  },
  defaultProps: {
    size: 'md'
  }
}

export default AvatarTheme
