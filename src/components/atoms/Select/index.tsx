/* eslint-disable react/display-name */
import { Input, forwardRef, ButtonProps } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Menu, MenuButton, MenuList, MenuItem } from '../Menu'
import { Text } from '../Text'

export type SelectOption = {
  id: string
  description: string
}

type ButtonSizes = 'sm' | 'md' | 'lg'

type Props = ButtonProps & {
  options: SelectOption[]
  defaultID?: string
  placeholder?: string
  onChange: (value: string | undefined) => void
  size?: ButtonSizes
  isDisabled?: boolean
  isInvalid?: boolean
  isCleanable?: boolean
  maxOptionsHeight?: string
}

export const Select = forwardRef<Props, 'input'>((props, ref) => {
  const {
    options,
    defaultID,
    placeholder = 'Selecione uma opção',
    onChange,
    size = 'sm',
    isDisabled = false,
    isInvalid = false,
    isCleanable = false,
    maxOptionsHeight = '100%',
    ...menuButtonProps
  } = props

  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >()
  const [isOpen, setIsOpen] = useState(false)
  const [optionsWidth, setOptionsWidth] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: SelectOption) => {
    setSelectedOption(e)
    setIsOpen(false)
    onChange(e.id)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedOption(undefined)
    onChange(undefined)
  }

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setOptionsWidth(buttonRef.current ? buttonRef.current.offsetWidth : 0)
    }

    if (buttonRef.current) {
      setOptionsWidth(buttonRef.current.offsetWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [buttonRef?.current?.offsetWidth])

  useEffect(() => {
    setSelectedOption(options.find(option => option.id === defaultID))
  }, [options, defaultID])

  const invalidIcon = !isDisabled && isInvalid && (
    <Flex mr="nano" data-testid="invalid-icon">
      <Icon isSelectIcon size={size} name="error" color="feedback.error-dark" />
    </Flex>
  )

  const clearIcon = isCleanable && !isDisabled && selectedOption && (
    <Flex mr="nano" data-testid="clear-icon" onClick={handleClear}>
      <Icon isSelectIcon size={size} name="close" />
    </Flex>
  )

  const borderColor = selectedOption ? 'neutral.darkest' : 'neutral.default'

  return (
    <Menu
      size={size}
      gutter={0}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      isLazy
    >
      <Input
        ref={ref}
        hidden
        value={selectedOption?.id || ''}
        onChange={() => ({})}
      />
      <MenuButton
        data-testid="menu-button"
        ref={buttonRef}
        as={Button}
        variant="select-default"
        size={size}
        border={isInvalid ? '2px' : '1px'}
        borderColor={isInvalid ? 'feedback.error-dark' : borderColor}
        fontWeight="regular"
        disabled={isDisabled}
        onClick={handleOpen}
        rightIcon={
          <Flex alignItems="center">
            {invalidIcon}
            {clearIcon}
            <Icon
              isSelectIcon
              name={isOpen ? 'expand_less' : 'expand_more'}
              color="neutral.darkest"
              size={size}
            />
          </Flex>
        }
        w="100%"
        textAlign="left"
        {...menuButtonProps}
      >
        <Text
          w="100%"
          fontWeight={400}
          noOfLines={1}
          wordBreak="break-word"
          textAlign="start"
        >
          {selectedOption ? selectedOption.description : placeholder}
        </Text>
      </MenuButton>
      <MenuList
        borderRadius="sm"
        padding="0"
        fontSize="xxs"
        border="2px"
        borderColor="brand.primary-default"
        overflow={maxOptionsHeight === '100%' ? 'hidden' : 'auto'}
        width={optionsWidth}
        maxHeight={maxOptionsHeight}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleChange(option)}>
            <Flex align="center">{option.description}</Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
})
