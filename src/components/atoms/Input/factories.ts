import { inputAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type InputStyle = PartsStyleObject<typeof inputAnatomy>

type OutlineStylesOptions = {
  borderColorFocus: string
}

export const getOutlineStyles = (options: OutlineStylesOptions): InputStyle => {
  return {
    field: {
      border: '1px solid',
      borderRadius: 'sm',
      borderColor: 'neutral.extradark',
      _focus: {
        border: '2px solid',
        borderColor: options.borderColorFocus,
        bgColor: 'neutral.lightest'
      },
      _hover: {
        borderColor: 'neutral.darkest',
        bgColor: 'neutral.lightest',
        _disabled: {
          bgColor: 'neutral.mediumlight'
        }
      },
      _invalid: {
        border: '2px',
        borderColor: 'feedback.error-dark',
        bgColor: 'neutral.lightest'
      },
      _placeholderShown: {
        borderColor: 'neutral.default',
        _focus: {
          border: '2px solid',
          borderColor: options.borderColorFocus,
          bgColor: 'neutral.lightest'
        },
        _hover: {
          borderColor: 'neutral.darkest',
          bgColor: 'neutral.lightest'
        },
        _invalid: {
          border: '2px',
          borderColor: 'feedback.error-dark',
          bgColor: 'neutral.lightest'
        },
        _disabled: {
          bgColor: 'neutral.mediumlight',
          borderColor: 'neutral.extradark',
          opacity: 0.32
        }
      }
    }
  }
}

type FilledStylesOptions = {
  borderColorFocus: string
}

export const getFilledStyles = (options: FilledStylesOptions): InputStyle => {
  return {
    field: {
      bgColor: 'neutral.extralight',
      borderRadius: 'sm',
      border: 'none',
      _hover: {
        bgColor: 'neutral.mediumlight'
      },
      _focus: {
        border: '2px solid',
        bgColor: 'neutral.lightest',
        borderColor: options.borderColorFocus,
        _hover: {
          bgColor: 'neutral.lightest',
          borderColor: options.borderColorFocus
        }
      },
      _disabled: {
        border: 'none'
      },
      _invalid: {
        border: '2px solid',
        borderColor: 'feedback.error-dark',
        _hover: {
          borderColor: 'feedback.error-dark'
        }
      }
    }
  }
}

type FlushedStylesOptions = {
  borderColorFocus: string
}

export const getFlushedStyles = (options: FlushedStylesOptions): InputStyle => {
  return {
    field: {
      bgColor: 'standard.white',
      border: 'none',
      borderRadius: 'none',
      borderBottom: '1px solid',
      _focus: {
        border: 'none',
        borderBottom: '2px solid',
        borderColor: options.borderColorFocus
      },
      _disabled: {
        bgColor: 'standard.white',
        borderColor: 'brand.extradark'
      },
      _invalid: {
        borderBottom: '2px solid',
        borderColor: 'feedback.error-dark'
      }
    }
  }
}
