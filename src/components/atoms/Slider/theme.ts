import { sliderAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type SliderStyle = PartsStyleObject<typeof sliderAnatomy>

type VariantStyles = {
  [key: string]: SliderStyle
}

type BaseStyle = SliderStyle

type SliderConfig = {
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
    filledTrack: { bgColor: 'neutral.extradark' },
    thumb: { bgColor: 'brand.primary-default', _focus: { boxShadow: 'none' } },
    track: { bgColor: 'neutral.mediumlight' }
  },
  'brand-secondary-solid': {
    filledTrack: { bgColor: 'neutral.extradark' },
    thumb: {
      bgColor: 'brand.secondary-default',
      _focus: { boxShadow: 'none' }
    },
    track: { bgColor: 'neutral.mediumlight' }
  }
}

const SliderTheme: SliderConfig = {
  baseStyle: {
    filledTrack: { borderRadius: '2px' },
    track: { borderRadius: '2px' }
  },
  sizes: {
    sm: {
      filledTrack: { height: '4px', width: '4px' },
      track: { height: '4px', width: '4px' },
      thumb: { height: '14px', width: '14px' }
    },
    md: {
      filledTrack: { height: '6px', width: '6px' },
      track: { height: '6px', width: '6px' },
      thumb: { height: '16px', width: '16px' }
    },
    lg: {
      filledTrack: { height: '8px', width: '8px' },
      track: { height: '8px', width: '8px' },
      thumb: { height: '18px', width: '18px' }
    }
  },
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand-primary-solid'
  }
}

export default SliderTheme
