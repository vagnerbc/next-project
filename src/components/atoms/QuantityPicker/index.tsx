import { InputGroupProps } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '../Input'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  variant?: string
  value?: number
  step?: number
  max?: number
  min?: number
  fieldProps?: InputGroupProps
  isDisabled?: boolean
  isInvalid?: boolean
  onChange?: (value: number) => void
}

export const QuantityPicker = (props: Props) => {
  const {
    onChange,
    value = 0,
    fieldProps,
    isInvalid = false,
    isDisabled = false,
    max,
    min = 0,
    size = 'md',
    step = 1,
    variant
  } = props

  const canShowDelete = value === 1
  const isMax = value === max
  const isMin = value === min

  const handleTypeValue = (newValue: number) => {
    if (!onChange) return
    onChange(newValue)
  }

  const handleChangeValue = (operator: number) => {
    if (!onChange) return

    const sum = step * operator
    onChange(value + sum)
  }

  useEffect(() => {
    if (!onChange) return

    if (max && value > max) {
      onChange(max)
      return
    }

    if (value < min) {
      onChange(min)
    }
  }, [value])

  return (
    <InputGroup
      size={size}
      variant={variant ?? 'quantity-picker-default'}
      _hover={{
        '.action-icon': {
          color: 'neutral.darkest'
        }
      }}
      {...fieldProps}
    >
      <InputLeftElement>
        <IconButton
          aria-label="Remover"
          variant="unstyled"
          data-testid={
            canShowDelete ? 'delete-icon-container' : 'minus-icon-container'
          }
          isDisabled={isDisabled || isMin}
          className="action-icon"
          onClick={() => handleChangeValue(-1)}
        >
          <Icon
            data-testid={canShowDelete ? 'delete-icon' : 'minus-icon'}
            name={canShowDelete ? 'delete_forever' : 'remove'}
            opacity={isMin || isDisabled ? 0.32 : 1}
            size={size === 'sm' ? 'xs' : 'md'}
          />
        </IconButton>
      </InputLeftElement>
      <Input
        data-testid="input-number"
        value={value}
        isInvalid={isInvalid}
        disabled={isDisabled}
        readOnly={isDisabled}
        type="number"
        textAlign="center"
        onChange={event => handleTypeValue(Number(event.target.value))}
      />
      <InputRightElement>
        <IconButton
          aria-label="Adicionar"
          variant="unstyled"
          data-testid="add-icon-container"
          className="action-icon"
          isDisabled={isDisabled || isMax}
          onClick={() => handleChangeValue(1)}
        >
          <Icon
            data-testid="add-icon"
            name="add"
            opacity={isMax || isDisabled ? 0.32 : 1}
            size={size === 'sm' ? 'xs' : 'md'}
          />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
}
