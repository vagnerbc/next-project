import { progressAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type ProgressStyle = PartsStyleObject<typeof progressAnatomy>

type VariantStyles = {
  [key: string]: ProgressStyle
}

type BaseStyle = ProgressStyle

type ProgressConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'brand-primary-solid': {
    filledTrack: {
      bgColor: 'brand.primary-light'
    },
    track: {
      bgColor: 'standard.white'
    }
  },
  'brand-secondary-solid': {
    filledTrack: {
      bgColor: 'brand.secondary-light'
    },
    track: {
      bgColor: 'standard.white'
    }
  }
}

const ProgressTheme: ProgressConfig = {
  baseStyle: {
    filledTrack: { borderRadius: 'pill' },
    track: { borderRadius: 'pill' }
  },
  sizes: {
    xs: { filledTrack: { height: '4px' }, track: { height: '4px' } },
    sm: { filledTrack: { height: '8px' }, track: { height: '8px' } },
    md: { filledTrack: { height: '12px' }, track: { height: '12px' } },
    lg: { filledTrack: { height: '16px' }, track: { height: '16px' } },
    xl: { filledTrack: { height: '32px' }, track: { height: '32px' } }
  },
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand-primary-solid'
  }
}

export default ProgressTheme
