/* eslint-disable react/display-name */
import {
  Input as ChakraInput,
  InputProps,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputLeftAddon as ChakraInputLeftAddon,
  InputRightElement as ChakraInputRightElement,
  InputRightAddon as ChakraInputRightAddon,
  forwardRef,
  Stack
} from '@chakra-ui/react'
import React from 'react'

import { ColorKeys } from '../../../types/colors'
import { Icon, IconSizes, IconsName } from '../Icon'

export const BaseInput = ChakraInput
export const InputGroup = ChakraInputGroup
export const InputLeftElement = ChakraInputLeftElement
export const InputLeftAddon = ChakraInputLeftAddon
export const InputRightElement = ChakraInputRightElement
export const InputRightAddon = ChakraInputRightAddon

type Props = InputProps & {
  leftIcon?: IconsName
  rightIcon?: IconsName
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  rightElementSlot?: React.ReactNode
  leftElementSlot?: React.ReactNode
  iconColor?: ColorKeys
}

const iconSizeMap = new Map<string, IconSizes>([
  ['sm', 'xxs'],
  ['md', 'xs'],
  ['lg', 'sm']
])

export const Input = forwardRef<Props, 'input'>((props, ref) => {
  const {
    isInvalid,
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    iconColor,
    placeholder,
    rightElementSlot,
    leftElementSlot,
    isDisabled,
    disabled,
    ...rest
  } = props

  const testID = rest['data-testid']

  const iconSize = iconSizeMap.get(rest.size ?? 'md')
  const hasMultipleRightElements =
    [isInvalid, !!rightElementSlot, rightIcon].filter(el => el).length > 1
  const hasMultipleLeftElements =
    [!!leftElementSlot, leftIcon].filter(el => el).length > 1

  return (
    <InputGroup {...rest} data-testid={undefined}>
      {!!leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}

      {(leftIcon || leftElementSlot) && (
        <InputLeftElement
          width={hasMultipleLeftElements ? 'fit-content' : undefined}
          pl={hasMultipleLeftElements ? '0.75rem' : undefined}
        >
          <Stack direction="row" alignItems="center" spacing={undefined}>
            {!!leftIcon && (
              <Icon
                px="0.25rem"
                name={leftIcon}
                size={iconSize}
                color={iconColor ?? 'neutral.default'}
                opacity={isDisabled ? 0.32 : undefined}
              />
            )}
            {!!leftElementSlot && leftElementSlot}
          </Stack>
        </InputLeftElement>
      )}

      <ChakraInput
        ref={ref}
        {...rest}
        disabled={isDisabled || disabled}
        cursor={isDisabled || disabled ? 'not-allowed' : undefined}
        placeholder={placeholder}
        data-testid={testID}
        isInvalid={isInvalid}
        pr={hasMultipleRightElements ? '4rem' : undefined}
        pl={hasMultipleLeftElements ? '4rem' : undefined}
      />

      {(rightIcon || rightElementSlot || isInvalid) && (
        <InputRightElement
          width={hasMultipleRightElements ? 'fit-content' : undefined}
          pr={hasMultipleRightElements ? '0.75rem' : undefined}
        >
          <Stack direction="row" alignItems="center" spacing="nano">
            {isInvalid && (
              <Icon name="error" color="feedback.error-dark" size={iconSize} />
            )}
            {!!rightElementSlot && rightElementSlot}
            {!!rightIcon && (
              <Icon
                px="0.25rem"
                name={rightIcon}
                size={iconSize}
                color={iconColor ?? 'neutral.default'}
                opacity={isDisabled ? 0.32 : undefined}
              />
            )}
          </Stack>
        </InputRightElement>
      )}
      {!!rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
    </InputGroup>
  )
})
