import { AlertStyle } from './theme'

type SolidStyleOptions = {
  bgColor: string
  color: string
  iconColor?: string
}

export const getBaseStyles = (options: SolidStyleOptions): AlertStyle => {
  return {
    container: {
      bgColor: options.bgColor,
      color: options.color
    },
    icon: {
      color: options.iconColor || options.color
    }
  }
}

type LeftAccentStyleOptions = SolidStyleOptions & {
  borderColor: string
}

export const getLeftAccentStyle = (
  options: LeftAccentStyleOptions
): AlertStyle => {
  const { borderColor, ...rest } = options
  const baseStyle = getBaseStyles(rest)

  return {
    ...baseStyle,
    container: {
      borderLeft: '4px solid',
      borderColor,
      ...baseStyle.container
    }
  }
}
