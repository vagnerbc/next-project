import { radioAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type RadioStyle = PartsStyleObject<typeof radioAnatomy>

type SolidStylesProps = {
  color: string
  colorHover: string
  bgColor: string
  bgColorHover: string
}

export const getSolidStyles = (options: SolidStylesProps): RadioStyle => {
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
