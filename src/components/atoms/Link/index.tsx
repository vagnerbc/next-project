import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from 'react'

type Props = LinkProps & {
  children: React.ReactNode
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  isDisabled?: boolean
}

export const Link = (props: Props) => {
  const {
    children,
    leftIcon,
    rightIcon,
    isDisabled,
    isExternal,
    href,
    ...styleProps
  } = props

  const customProps = isDisabled
    ? {
        opacity: 0.64,
        color: 'neutral.dark',
        cursor: 'not-allowed',
        borderColor: 'transparent',
        _hover: {
          borderColor: 'transparent'
        }
      }
    : {
        isExternal,
        href
      }

  return (
    <ChakraLink {...styleProps} {...customProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </ChakraLink>
  )
}
