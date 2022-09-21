import { chakra, useBreakpointValue, useStyles } from '@chakra-ui/react'
import React from 'react'

import { useStepsContext } from '../steps-context'

type StepLabelProps = {
  isCurrentStep?: boolean
  label?: string | React.ReactNode
  description?: string
}

export const StepLabel = ({
  isCurrentStep,
  label,
  description
}: StepLabelProps) => {
  const {
    labelContainer,
    label: labelStyles,
    description: descriptionStyles
  } = useStyles()

  const { isLabelVertical } = useStepsContext()
  const isMobile = useBreakpointValue({ base: true, sm: true, lg: false })

  const shouldRender = !!label || !!description

  return !shouldRender ? null : (
    <chakra.div
      aria-current={isCurrentStep ? 'step' : undefined}
      __css={{
        textAlign: isLabelVertical ? 'center' : 'left',
        alignItems: isLabelVertical ? 'center' : 'flex-start',
        ...labelContainer
      }}
      maxWidth={isMobile ? undefined : '118px'}
    >
      {!!label && (
        <chakra.span
          __css={{
            mx: isLabelVertical ? 0 : 2,
            mt: isLabelVertical ? 1 : 0,
            ...labelStyles
          }}
        >
          {label}
        </chakra.span>
      )}
      {!!description && (
        <chakra.span
          __css={{
            mx: isLabelVertical ? 0 : 2,
            mt: isLabelVertical ? 2 : 0,
            ...descriptionStyles
          }}
        >
          {description}
        </chakra.span>
      )}
    </chakra.div>
  )
}
