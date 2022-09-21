import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { SimpleGrid as ThemeSimpleGrid } from '..'

import { Box } from '../../Box'

export default {
  title: 'Core Components/Simple Grid',
  component: ThemeSimpleGrid,
  argTypes: {
    columns: {
      name: 'columns',
      type: 'number',
      defaultValue: 2,
      control: {
        type: 'number'
      }
    },
    autoColumns: {
      name: 'gridAutoColumns',
      type: 'number',
      defaultValue: 0,
      control: {
        type: 'number'
      }
    },
    autoFlow: {
      name: 'gridAutoFlow',
      type: 'string',
      defaultValue: 'row',
      options: ['row', 'column', 'dense', 'row dense', 'colum dense'],
      control: {
        type: 'select'
      }
    },
    spacing: {
      name: 'spacing',
      type: 'number',
      defaultValue: 10,
      control: {
        type: 'number'
      }
    }
  }
} as ComponentMeta<typeof ThemeSimpleGrid>

const Template: ComponentStory<typeof ThemeSimpleGrid> = args => (
  <ThemeSimpleGrid
    autoColumns={`${args.autoColumns}px`}
    columns={args.columns}
    spacing={args.spacing}
    autoFlow={args.autoFlow}
  >
    <Box bg="brand.primary-default" height="80px"></Box>
    <Box bg="brand.primary-default" height="80px"></Box>
    <Box bg="brand.primary-default" height="80px"></Box>
    <Box bg="brand.primary-default" height="80px"></Box>
    <Box bg="brand.primary-default" height="80px"></Box>
  </ThemeSimpleGrid>
)

export const SimpleGrid = Template.bind({})
