import { chakra, Flex, forwardRef, Spinner, useStyles } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'
import { motion } from 'framer-motion'
import React from 'react'

import { Icon, IconSizes, IconsName, iconSizesMap } from '../../Icon'

type StepIconProps = {
  isLastStep?: boolean
  isCompletedStep?: boolean
  isCurrentStep?: boolean
  isError?: boolean
  isLoading?: boolean
  iconName?: IconsName
  iconSize?: IconSizes
  index: number
  innerLabel?: string | React.ReactNode
  checkIconName?: IconsName
}

const MotionFlex = motion(Flex)
const AnimatedSpan = motion(chakra.span)

const animationConfig = {
  transition: {
    duration: 0.25
  },
  exit: { scale: 0.5, opacity: 0 },
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
}

export const StepIcon = forwardRef<StepIconProps, 'div'>((props, ref) => {
  const {
    isCompletedStep,
    isLastStep,
    isCurrentStep,
    isError,
    isLoading,
    iconName,
    innerLabel,
    index,
    checkIconName
  } = props

  const { icon: iconStyle, stepLabel } = useStyles()

  const iconSize = iconSizesMap.get(props.iconSize ?? 'md')

  // Mostra icone customizado
  if (iconName) {
    return (
      <MotionFlex key="step-icon" {...animationConfig}>
        <Icon
          data-highlighted={dataAttr(isCurrentStep || isCompletedStep)}
          name={iconName}
          sx={iconStyle}
        />
      </MotionFlex>
    )
  }

  // mostra label customizada
  if (innerLabel) {
    return (
      <AnimatedSpan
        ref={ref}
        data-highlighted={dataAttr(isCurrentStep || isCompletedStep)}
        key="label"
        __css={stepLabel}
        {...animationConfig}
      >
        {innerLabel}
      </AnimatedSpan>
    )
  }

  // Mostra spinner quando a step atual estive com o loading
  if (isCurrentStep && isLoading) {
    return (
      <Spinner
        width={iconSize}
        height={iconSize}
        sx={iconStyle}
        color="standard.white"
      />
    )
  }

  // Mostra icone de concluido quando a step atual é a ultima
  if (isLastStep || (isCurrentStep && isLastStep)) {
    return (
      <MotionFlex key="check-icon" data-testid="done-icon" {...animationConfig}>
        <Icon
          name={checkIconName ?? 'done'}
          size={props.iconSize}
          sx={iconStyle}
          color="standard.white"
        />
      </MotionFlex>
    )
  }

  // Mostra icone de erro quando a step atual está com erro
  if (isCurrentStep && isError) {
    return (
      <Icon
        name="close"
        size={props.iconSize}
        sx={iconStyle}
        color="standard.white"
      />
    )
  }

  // Mostra icone padrão(número da step)
  return (
    <AnimatedSpan
      ref={ref}
      data-highlighted={dataAttr(isCurrentStep || isCompletedStep)}
      key="label"
      __css={stepLabel}
      {...animationConfig}
    >
      {(index || 0) + 1}
    </AnimatedSpan>
  )
})
