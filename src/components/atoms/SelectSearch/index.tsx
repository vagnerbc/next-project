import { SelectProps, chakra, forwardRef } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import type { RefAttributes } from 'react'
import React from 'react'
import type { GroupBase, Props, SelectInstance } from 'react-select'

import SelectSearchTheme from './theme'

type Option = unknown
type IsMulti = boolean
type Group = GroupBase<Option>

export type SelectOption<T = string> = {
  value: T
  label: string
}

const ChakraSelect = chakra(Select)

type ChakraSelectProps = SelectProps &
  Props<Option, IsMulti, Group> &
  RefAttributes<SelectInstance<Option, IsMulti, Group>>

export const SelectSearch = forwardRef<ChakraSelectProps, 'input'>(
  (props: ChakraSelectProps, ref) => {
    return (
      <ChakraSelect ref={ref} chakraStyles={SelectSearchTheme} {...props} />
    )
  }
)
