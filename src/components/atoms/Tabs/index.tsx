import {
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  Tab as ChakraTab,
  TabPanels as ChakraTabPanels,
  TabPanel as ChakraTabPanel,
  TabProps,
  SystemProps
} from '@chakra-ui/react'
import React from 'react'

import { Box } from '../Box'
import { Flex } from '../Flex'

import { VariantNames } from './theme'

export const Tabs = ChakraTabs
export const TabList = ChakraTabList
export const TabPanels = ChakraTabPanels
export const TabPanel = ChakraTabPanel

type CustomTabProps = TabProps & {
  icon?: JSX.Element
  iconPosition?: string
  variant?: VariantNames
}

const stylesByDirection = new Map([
  ['left', { margin: { marginRight: 'xxxs' }, direction: 'row' }],
  ['right', { margin: { marginLeft: 'xxxs' }, direction: 'row-reverse' }],
  ['top', { margin: { marginBottom: 'quarck' }, direction: 'column' }],
  [
    'bottom',
    { margin: { marginBottom: 'quarck' }, direction: 'column-reverse' }
  ]
])

export const Tab: React.FC<CustomTabProps> = props => {
  const { icon, css, children, iconPosition, ...rest } = props

  const styles = stylesByDirection.get(iconPosition ?? 'left')

  const direction = styles?.direction as SystemProps['flexDirection']
  const margin = styles?.margin

  return (
    <ChakraTab {...rest}>
      <Flex alignItems="center" direction={direction}>
        {icon && (
          <Box padding="2px" {...margin}>
            {icon}
          </Box>
        )}
        {children}
      </Flex>
    </ChakraTab>
  )
}
