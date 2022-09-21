/* eslint-disable jsx-a11y/alt-text */
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { primaryLogotype, secondaryLogotype } from './brands/index'
import { BrandSizes } from './index'

type Props = {
  variant: 'primary-logotype' | 'secondary-logotype'
  size?: BrandSizes
}

export default function Logotype(props: Props) {
  const { variant, size = 'md' } = props
  let width = 'auto'

  if (size === 'xs') width = '72px'
  else if (size === 'sm') width = '100px'
  else if (size === 'md') width = '127px'
  else width = '210px'

  if (variant === 'primary-logotype') {
    return (
      <Box w={width}>
        <Image as={primaryLogotype} />
      </Box>
    )
  } else {
    return (
      <Box w={width}>
        <Image as={secondaryLogotype} />
      </Box>
    )
  }
}
