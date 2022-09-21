import { Center, Square, Text } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Flex as ThemeFlex } from '..'

import { Box } from '../../Box'

const alignOptions = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'revert',
  'self-end',
  'self-start',
  'start'
]

const justifyOptions = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]

export default {
  title: 'Core Components/Flex',
  component: ThemeFlex,
  argTypes: {
    direction: {
      name: 'flexDirection',
      type: 'string',
      defaultValue: 'row',
      options: ['column', 'column-reverse', 'reverse', 'row', 'row-reverse'],
      control: {
        type: 'select'
      }
    },
    align: {
      name: 'alignItems',
      type: 'string',
      options: alignOptions,
      defaultValue: 'center',
      control: {
        type: 'select'
      }
    },
    justify: {
      name: 'justifyContent',
      type: 'string',
      options: justifyOptions,
      defaultValue: 'center',
      control: {
        type: 'select'
      }
    },
    shrink: {
      name: 'flexShrink',
      type: 'number',
      defaultValue: 1,
      control: {
        type: 'number'
      }
    },
    grow: {
      name: 'flexGrow',
      type: 'number',
      defaultValue: 1,
      control: {
        type: 'number'
      }
    },
    basis: {
      name: 'flexBasis',
      type: 'number',
      defaultValue: 10,
      control: {
        type: 'number'
      }
    },
    wrap: {
      name: 'flexWrap',
      type: 'string',
      defaultValue: 'wrap',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: {
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof ThemeFlex>

const Template: ComponentStory<typeof ThemeFlex> = args => (
  <ThemeFlex
    color="white"
    align={args.align}
    flexDirection={args.direction}
    justify={args.justify}
    shrink={`${args.shrink}px`}
    wrap={args.wrap}
    grow={`${args.grow}px`}
    basis={`${args.basis}px`}
  >
    <Center w="100px" bg="brand.secondary-default" p={4}>
      <Text>Box 1</Text>
    </Center>
    <Square bg="brand.primary-default" size="150px" p={4}>
      <Text>Box 2</Text>
    </Square>
    <Box bg="brand.secondary-lightest" p={4}>
      <Text>Box 3</Text>
    </Box>
  </ThemeFlex>
)

export const Flex = Template.bind({})
