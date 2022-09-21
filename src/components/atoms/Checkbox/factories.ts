import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type CheckboxStyle = PartsStyleObject<typeof checkboxAnatomy>

type SolidStylesProps = {
  color: string
  colorHover: string
  bgColor: string
  bgColorHover: string
}

export const getSolidStyles = (options: SolidStylesProps): CheckboxStyle => {
  return {
    control: {
      _checked: {
        border: 'none',
        bgColor: options.bgColor,
        color: options.color,
        _hover: {
          bgColor: options.bgColorHover,
          color: options.colorHover
        }
      }
    }
  }
}
