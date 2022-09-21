import React from 'react'

import Logotype from './logotype'
import Marca from './marca'
import Symbol from './symbol'

export type BrandSizes = 'xs' | 'sm' | 'md' | 'lg'

export type BrandTypes =
  | 'primary-logotype'
  | 'secondary-logotype'
  | 'primary-symbol'
  | 'secondary-symbol'
  | 'primary-marca'
  | 'secondary-marca'

type Props = {
  variant: BrandTypes
  size?: BrandSizes
}

export function Brand(props: Props) {
  const { variant, size = 'md' } = props

  if (variant === 'primary-symbol' || variant === 'secondary-symbol') {
    return <Symbol variant={variant} size={size} />
  } else if (
    variant === 'primary-logotype' ||
    variant === 'secondary-logotype'
  ) {
    return <Logotype variant={variant} size={size} />
  } else {
    return <Marca variant={variant} size={size} />
  }
}
