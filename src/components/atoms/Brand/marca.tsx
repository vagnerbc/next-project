/* eslint-disable jsx-a11y/alt-text */
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { primaryMarca, secondaryMarca } from './brands/index'
import { BrandSizes } from './index'

type Props = {
  variant: 'primary-marca' | 'secondary-marca'
  size?: BrandSizes
}

export default function Marca(props: Props) {
  const { variant, size = 'md' } = props
  let width = 'auto'

  if (size === 'xs') width = '94px '
  else if (size === 'sm') width = '128px'
  else if (size === 'md') width = '160px'
  else width = '260px'

  if (variant === 'primary-marca') {
    return (
      <Box w={width}>
        <Image as={primaryMarca} />
      </Box>
    )
  } else {
    return (
      <Box w={width}>
        <Image as={secondaryMarca} />
      </Box>
    )
  }
}
