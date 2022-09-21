import { StackProps } from '@chakra-ui/react'
import React from 'react'

import { Stack } from '../Stack'
import { Text } from '../Text'

type Variants =
  | 'brand-secondary-default'
  | 'brand-secondary-default-bold'
  | 'default-neutral-extradark'
  | 'default-neutral-extradark-bold'

type LabelSize = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md'

type TextSize = 'xxs' | 'xs' | 'sm'

const textInfoStyles = {
  'brand-secondary-default': {
    color: 'brand.secondary-default',
    fontWeight: 'regular'
  },
  'brand-secondary-default-bold': {
    color: 'brand.secondary-default',
    fontWeight: 'bold'
  },
  'default-neutral-extradark': {
    color: 'neutral.extradark',
    fontWeight: 'regular'
  },
  'default-neutral-extradark-bold': {
    color: 'neutral.extradark',
    fontWeight: 'bold'
  }
}

const textInfoSizes = {
  xxxs: {
    fontSize: 'xxxs',
    lineHeight: '16px'
  },
  xxs: {
    fontSize: 'xxs',
    lineHeight: '18px'
  },
  xs: {
    fontSize: 'xs',
    lineHeight: '20px'
  },
  sm: {
    fontSize: 'sm',
    lineHeight: '28px'
  },
  md: {
    fontSize: 'md',
    lineHeight: '32px'
  }
}

type Props = StackProps & {
  label: string
  text: string
  labelVariant?: Variants
  labelSize?: LabelSize
  textVariant?: Variants
  textSize?: TextSize
}

export const TextInfo = (props: Props) => {
  const {
    label,
    text,
    labelVariant = 'default-neutral-extradark',
    labelSize = 'xxs',
    textVariant = 'default-neutral-extradark-bold',
    textSize = 'xs',
    ...stackProps
  } = props

  return (
    <Stack spacing="nano" {...stackProps}>
      <Text {...textInfoStyles[labelVariant]} {...textInfoSizes[labelSize]}>
        {label}
      </Text>
      <Text {...textInfoStyles[textVariant]} {...textInfoSizes[textSize]}>
        {text}
      </Text>
    </Stack>
  )
}
