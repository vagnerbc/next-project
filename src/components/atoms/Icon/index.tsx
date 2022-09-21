/* eslint-disable react/display-name */
import { chakra, ChakraProps } from '@chakra-ui/react'
import React from 'react'

import { IconsName } from '../../../types/icons'

import { CustomIconNames, customIcons } from './custom'
export type { IconsName } from '../../../types/icons'

export type IconSizes = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg'

export type IconVariants =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'sharp'
  | 'two-tone'

export type IconProps = ChakraProps & {
  variant?: IconVariants
  isSelectIcon?: boolean
  name: IconsName | CustomIconNames
  size?: IconSizes
}

export const iconSizesMap = new Map<IconSizes, string>([
  ['xxxs', '0.75rem'], // 12px
  ['xxs', '0.875rem'], // 14px
  ['xs', '1rem'], // 16px
  ['sm', '1.25rem'], // 20px
  ['md', '1.5rem'], // 24px
  ['lg', '2rem'] // 32px
])

export const iconSizesSelectMap = new Map<IconSizes, string>([
  ['sm', '1rem'], // 16px
  ['md', '1.5rem'], // 24px
  ['lg', '1.5rem']
])

const ChakraSvg = chakra('svg')
const ChakraSpan = chakra('span')

export const Icon = React.forwardRef<any, IconProps>(
  (
    { variant, name, color, size, css, isSelectIcon = false, ...props },
    ref
  ) => {
    const suffix = variant && variant !== 'filled' ? `-${variant}` : ''

    const iconSize = isSelectIcon
      ? iconSizesSelectMap.get(size || 'sm')
      : iconSizesMap.get(size || 'md')

    if (name.startsWith('custom-')) {
      const iconName = name.split('custom-')[1] as keyof typeof customIcons
      const CustomIcon = customIcons[iconName][variant ?? 'filled']

      return (
        <ChakraSvg
          xmlns="http://www.w3.org/2000/svg"
          display="block"
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          fill={color}
          {...props}
        >
          <CustomIcon />
        </ChakraSvg>
      )
    }

    return (
      <ChakraSpan
        ref={ref}
        className={`material-icons${suffix}`}
        color={color}
        fontSize={iconSize}
        display="block"
        {...props}
      >
        {name}
      </ChakraSpan>
    )
  }
)
