import { SystemStyleObject } from '@chakra-ui/theme-tools'

type SolidStylesOptions = {
  bgColor: string
  bgColorHover: string
  color: string
}

export const getSolidStyles = (
  options: SolidStylesOptions
): SystemStyleObject => {
  return {
    bgColor: options.bgColor,
    color: options.color,
    _hover: {
      bgColor: options.bgColorHover,
      _disabled: {
        opacity: 0.64,
        bgColor: 'neutral.mediumlight',
        color: 'neutral.extradark'
      }
    },
    _disabled: {
      opacity: 0.64,
      bgColor: 'neutral.mediumlight',
      color: 'neutral.extradark'
    },
    _focusVisible: {
      color: 'standard.black',
      bgColor: options.bgColorHover,
      outline: '2px solid',
      outlineColor: 'neutral.darkest'
    }
  }
}

type OutlineStylesOptions = {
  border: string
  borderColor: string
  color: string
  bgColorHover: string
  borderColorHover: string
  colorHover: string
}

export const getOutlineStyles = (
  options: OutlineStylesOptions
): SystemStyleObject => {
  return {
    bgColor: 'transparent',
    border: options.border,
    borderColor: options.borderColor,
    color: options.color,
    _hover: {
      borderColor: options.borderColorHover,
      bgColor: options.bgColorHover,
      color: options.colorHover,
      _disabled: {
        opacity: 0.64,
        borderColor: 'transparent',
        bgColor: 'neutral.mediumlight',
        color: 'neutral.extradark'
      }
    },
    _disabled: {
      opacity: 0.64,
      borderColor: 'transparent',
      bgColor: 'neutral.mediumlight',
      color: 'neutral.extradark'
    },
    _focusVisible: {
      borderColor: 'transparent',
      color: 'standard.black',
      bgColor: options.bgColorHover,
      outline: '2px solid',
      outlineColor: 'neutral.darkest'
    }
  }
}

export const getSelectStyles = (
  options: OutlineStylesOptions
): SystemStyleObject => {
  const outlineStyles = getOutlineStyles(options)
  return {
    ...outlineStyles,
    bgColor: 'standard.white',
    _focus: {
      border: '2px',
      borderColor: 'brand.primary-default',
      bgColor: 'neutral.lightest',
      color: 'neutral.darkest'
    },
    _disabled: {
      opacity: 0.32,
      border: '1px',
      borderColor: 'neutral.extradark',
      color: 'neutral.extradark',
      bgColor: 'neutral.mediumlight'
    },
    _hover: {
      borderColor: options.borderColorHover,
      bgColor: options.bgColorHover,
      color: options.colorHover,
      _disabled: {
        bgColor: 'neutral.mediumlight'
      }
    },
    _focusVisible: {},
    _active: {
      border: '2px',
      borderColor: 'brand.primary-default',
      bgColor: 'neutral.lightest',
      color: 'neutral.darkest'
    }
  }
}

type GhostStylesOptions = {
  color: string
  colorHover: string
}

export const getGhostStyles = (
  options: GhostStylesOptions
): SystemStyleObject => {
  return {
    bgColor: 'transparent',
    color: options.color,
    _hover: {
      color: options.colorHover,
      _disabled: {
        opacity: 0.64,
        color: 'neutral.extradark'
      }
    },
    _disabled: {
      opacity: 0.64,
      color: 'neutral.extradark'
    },
    _focusVisible: {
      color: 'standard.black',
      outline: '2px solid',
      outlineColor: 'neutral.darkest'
    }
  }
}
