import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyles
} from '@chakra-ui/system'
import { Collapse } from '@chakra-ui/transition'
import { dataAttr } from '@chakra-ui/utils'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { IconsName } from '../../Icon'
import { Connector } from '../Connector'
import { StepIcon } from '../StepIcon'
import { StepLabel } from '../StepLabel'
import { useStepsContext } from '../steps-context'

export type StepProps = HTMLChakraProps<'div'> & {
  label?: string | React.ReactNode
  innerLabel?: string | React.ReactNode
  description?: string
  iconName?: IconsName
  isCompletedStep?: boolean
  state?: 'loading' | 'error' | 'warning' | 'success'
}

type StepInternalConfig = ThemingProps & {
  index: number
  isCompletedStep?: boolean
  isCurrentStep?: boolean
  isLastStep?: boolean
}

type FullStepProps = StepProps & StepInternalConfig

export const Step = forwardRef<StepProps, 'div'>(
  (props, ref: React.Ref<any>) => {
    const {
      children,
      description,
      iconName,
      innerLabel,
      index,
      isCompletedStep,
      isCurrentStep,
      isLastStep,
      label,
      state,
      ...styleProps
    } = props as FullStepProps

    const {
      isVertical,
      isError,
      isWarning,
      isSuccess,
      isLoading,
      isLabelVertical,
      checkIconName,
      onClickStep,
      clickable,
      setWidths,
      stepCount
    } = useStepsContext()

    const { step, stepContainer, stepIconContainer } = useStyles()

    const hasVisited = isCurrentStep || isCompletedStep

    const handleClick = (index: number) => {
      if (clickable && onClickStep) {
        onClickStep(index)
      }
    }

    const containerRef = React.useRef<HTMLDivElement | null>(null)

    const internalSuccess = state === 'success' || (isCurrentStep && isSuccess)
    const internalError = state === 'error' || (isCurrentStep && isError)
    const internalWarning = state === 'warning' || (isCurrentStep && isWarning)
    const internalLoading = state === 'loading'

    React.useEffect(() => {
      if (!containerRef.current || !setWidths) return

      setWidths(prev => {
        if (prev.length === stepCount) {
          return [containerRef.current?.offsetWidth || 0]
        }
        return [...prev, containerRef.current?.offsetWidth || 0]
      })
    }, [
      stepIconContainer.width,
      stepIconContainer.height,
      containerRef.current,
      isVertical,
      isLabelVertical,
      setWidths,
      stepCount
    ])

    return (
      <chakra.div
        ref={ref}
        onClick={() => handleClick(index)}
        aria-disabled={!hasVisited}
        __css={{
          flexDir: isVertical ? 'column' : 'row',
          alignItems: isVertical || isLabelVertical ? 'flex-start' : 'center',
          flex: isLastStep && !isVertical ? '0 0 auto' : '1 0 auto',
          justifyContent: isLastStep && !isVertical ? 'flex-end' : 'flex-start',
          _hover: {
            cursor: clickable ? 'pointer' : 'default'
          },
          ...step
        }}
        {...styleProps}
      >
        <chakra.div
          ref={containerRef}
          __css={{
            flexDir: isLabelVertical ? 'column' : 'row',
            ...stepContainer
          }}
        >
          <chakra.div
            __css={stepIconContainer}
            aria-current={isCurrentStep ? 'step' : undefined}
            data-invalid={dataAttr(isCurrentStep && isError)}
            data-laststep={
              innerLabel ? undefined : dataAttr(!isCompletedStep && isLastStep)
            }
            data-highlighted={dataAttr(isCompletedStep)}
            data-success={dataAttr(internalSuccess)}
            data-error={dataAttr(internalError)}
            data-warning={dataAttr(internalWarning)}
            data-clickable={dataAttr(clickable)}
          >
            <AnimatePresence exitBeforeEnter>
              {/* Ícone da step(bolinha da step com contador e icones de status) */}
              <StepIcon
                {...{
                  index,
                  isError,
                  isLoading: internalLoading || isLoading,
                  isCurrentStep,
                  isCompletedStep,
                  isLastStep
                }}
                innerLabel={innerLabel}
                iconName={iconName}
                checkIconName={checkIconName}
              />
            </AnimatePresence>
          </chakra.div>

          {/* Label da step */}
          <StepLabel
            label={label}
            description={description}
            {...{ isCurrentStep }}
          />
        </chakra.div>

        {/* Conector da step(linha de conexão entre as steps) */}
        <Connector
          index={index}
          isLastStep={isLastStep}
          hasLabel={!!label || !!description}
          isCompletedStep={isCompletedStep || false}
        >
          <Collapse style={{ width: '100%' }} in={isCurrentStep}>
            {(isCurrentStep || isCompletedStep) && children}
          </Collapse>
        </Connector>
      </chakra.div>
    )
  }
)
