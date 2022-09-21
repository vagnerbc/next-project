import { useBreakpointValue } from '@chakra-ui/react'
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  omitThemingProps,
  StylesProvider,
  ThemingProps,
  useMultiStyleConfig
} from '@chakra-ui/system'
import { cx } from '@chakra-ui/utils'
import React from 'react'

import { IconsName } from '../../Icon'
import { StepsProvider } from '../steps-context'

export type StepsProps = HTMLChakraProps<'div'> &
  ThemingProps & {
    activeStep: number
    orientation?: 'vertical' | 'horizontal'
    state?: 'loading' | 'error' | 'warning' | 'success'
    responsive?: boolean
    checkIconName?: IconsName
    onClickStep?: (step: number) => void
    labelOrientation?: 'vertical' | 'horizontal'
  }

export const Steps = forwardRef<StepsProps, 'div'>(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const isMobile = useBreakpointValue({ base: true, sm: true, md: false })
    const styles = useMultiStyleConfig('Steps', props)

    const stepsStyles = { ...styles.steps }

    const {
      className,
      activeStep,
      children,
      orientation: orientationProp,
      state,
      responsive,
      checkIconName,
      onClickStep,
      labelOrientation,
      ...rest
    } = omitThemingProps(props)

    const childArr = React.Children.toArray(children)

    const stepCount = childArr.length

    const renderHorizontalContent = () => {
      if (activeStep <= childArr.length) {
        return React.Children.map(childArr[activeStep], node => {
          if (!React.isValidElement(node)) return
          return React.Children.map(node.props.children, childNode => childNode)
        })
      }
      return null
    }

    const clickable = !!onClickStep

    const orientation = isMobile && responsive ? 'vertical' : orientationProp

    return (
      <StylesProvider value={styles}>
        <StepsProvider
          value={{
            activeStep,
            orientation,
            state,
            responsive,
            checkIconName,
            onClickStep,
            labelOrientation,
            clickable,
            colorScheme: props.colorScheme,
            stepCount
          }}
        >
          <chakra.div
            ref={ref}
            __css={{
              justifyContent: stepCount === 1 ? 'flex-end' : 'space-between',
              flexDir: orientation === 'vertical' ? 'column' : 'row',
              ...stepsStyles
            }}
            className={cx('chakra-steps', className)}
            {...rest}
          >
            {React.Children.map(children, (child, i) => {
              const isCompletedStep =
                (React.isValidElement(child) && child.props.isCompletedStep) ??
                i < activeStep
              const isLastStep = i === stepCount - 1
              const isCurrentStep = i === activeStep

              const stepProps = {
                index: i,
                isCompletedStep,
                isCurrentStep,
                isLastStep
              }

              if (React.isValidElement(child)) {
                return React.cloneElement(child, stepProps)
              }

              return null
            })}
          </chakra.div>
          {orientation === 'horizontal' && renderHorizontalContent()}
        </StepsProvider>
      </StylesProvider>
    )
  }
)

Steps.defaultProps = {
  activeStep: 0,
  orientation: 'horizontal',
  responsive: true
}
