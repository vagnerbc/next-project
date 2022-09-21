/* eslint-disable jsx-a11y/alt-text */
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { primarySymbol, secondarySimbol } from './brands/index'
import { BrandSizes } from './index'

type Props = {
  variant: 'primary-symbol' | 'secondary-symbol'
  size?: BrandSizes
}

export default function Symbol(props: Props) {
  const { variant, size = 'md' } = props
  let width = 'auto'

  if (size === 'xs') width = '24px'
  else if (size === 'sm') width = '32px'
  else if (size === 'md') width = '40px'
  else width = '64px'

  if (variant === 'primary-symbol') {
    return (
      <Box w={width}>
        <Image as={primarySymbol} />
      </Box>
    )
  } else {
    return (
      <Box w={width}>
        <Image as={secondarySimbol} />
      </Box>
    )
  }
}
