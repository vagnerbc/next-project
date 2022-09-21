import { SystemStyleObject } from '@chakra-ui/theme-tools'

type DefaultStyleOptions = {
  borderColor: string
}

export const getDefaultStyle = (
  options: DefaultStyleOptions
): SystemStyleObject => {
  return {
    border: '1px solid',
    borderColor: 'neutral.mediumlight',
    borderRadius: 'sm',
    _hover: {
      border: '1px solid',
      borderColor: 'neutral.darkest'
    },
    _focus: {
      border: '2px solid',
      borderColor: options.borderColor
    },
    _invalid: {
      border: '2px solid',
      borderColor: 'feedback.error-dark'
    }
  }
}
