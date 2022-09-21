/* eslint-disable react/display-name */
import {
  chakra,
  HTMLChakraProps,
  ThemingProps,
  useStyles
} from '@chakra-ui/system'
import { dataAttr } from '@chakra-ui/utils'
import React from 'react'

import { Box } from '../../Box'
import { useStepsContext } from '../steps-context'

type ConnectorProps = HTMLChakraProps<'div'> &
  ThemingProps & {
    isCompletedStep: boolean
    isLastStep?: boolean
    hasLabel?: boolean
    index: number
  }

export const Connector = ({
  index,
  isCompletedStep,
  children,
  isLastStep,
  hasLabel
}: ConnectorProps) => {
  const { connector, stepIconContainer } = useStyles()
  const { isVertical, isLabelVertical, widths } = useStepsContext()

  const getMargin = () => {
    if (isVertical) return `calc(${stepIconContainer.width} / 2.7)`
    if (!hasLabel) return 2
    return 0
  }

  const styles = React.useMemo(() => {
    const base = {
      ms: getMargin(),
      mr: isVertical ? 2 : 0,
      me: isVertical || isLabelVertical ? 0 : 2,
      my: isVertical ? '-6px' : '0px',
      height: isVertical ? 'auto' : '8px',
      width: isVertical ? '8px' : 'auto',
      alignSelf: isVertical ? 'stretch' : 'auto',
      minHeight: isLastStep || !isVertical ? 'auto' : '3rem'
    }

    if (isLabelVertical) {
      return {
        ...base,
        position: 'absolute',
        top: `calc(${stepIconContainer.height} / 2  - ${base.height} / 2)`,
        left: `calc(((${widths?.[index]}px + ${stepIconContainer.width}) / 2) - 1px)`,
        right: `calc((${widths?.[index + 1]}px - ${
          stepIconContainer.width
        }) / -2 - 2px)`
      }
    }

    return base
  }, [
    getMargin,
    isVertical,
    isLabelVertical,
    isLastStep,
    stepIconContainer.height,
    stepIconContainer.width,
    widths,
    index
  ])

  return (
    <chakra.div
      __css={{
        ...styles,
        ...connector
      }}
      data-highlighted={dataAttr(isCompletedStep)}
    >
      {isVertical && <Box marginLeft="xxs">{children}</Box>}
    </chakra.div>
  )
}
