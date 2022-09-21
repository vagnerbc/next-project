import { tagAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type TagStyle = PartsStyleObject<typeof tagAnatomy>

type HighlightStyleProps = {
  bgColor: string
  color: string
}

export const getHighlightStyle = (options: HighlightStyleProps): TagStyle => {
  return {
    container: {
      color: options.color,
      bgColor: options.bgColor,
      border: 'none',
      borderRadius: 'pill',
      _disabled: {
        bgColor: 'neutral.mediumlight',
        color: 'neutral.dark'
      }
    }
  }
}

type HighSelectStyleProps = {
  bgColorHover: string
  bgColorFocusVisible: string
  borderColor: string
}

export const getSelectStyle = (options: HighSelectStyleProps): TagStyle => {
  const { bgColorFocusVisible, bgColorHover, borderColor } = options
  return {
    container: {
      borderRadius: 'pill',
      color: 'neutral.extradark',
      border: '1px solid',
      borderColor: 'neutral.mediumdark',
      _hover: {
        border: borderColor ? '1px solid' : 'none',
        bgColor: bgColorHover,
        color: 'standard.white'
      },
      _disabled: {
        opacity: 0.64,
        color: 'neutral.extradark',
        border: 'none',
        bgColor: 'neutral.mediumlight',
        _hover: {
          color: 'neutral.extradark',
          border: 'none',
          bgColor: 'neutral.mediumlight'
        }
      },
      _focusVisible: {
        color: 'standard.black',
        bgColor: bgColorFocusVisible,
        outline: '2px solid',
        outlineColor: 'neutral.darkest'
      }
    }
  }
}

type CustomTagStyleProps = {
  color: string
  borderColor: string
}

export const customTagStyle = (options: CustomTagStyleProps): TagStyle => {
  return {
    container: {
      color: options.color,
      borderColor: options.borderColor,
      borderRadius: 'lg',
      fontWeight: 'bold',
      border: '1px solid',
      lineHeight: 'xs'
    }
  }
}
