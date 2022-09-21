import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Grid as ThemeGrid, GridItem } from '..'

import { Box } from '../../Box'

export default {
  title: 'Core Components/Grid',
  component: ThemeGrid,
  argTypes: {
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
    }
  }
} as ComponentMeta<typeof ThemeGrid>

const Template: ComponentStory<typeof ThemeGrid> = args => (
  <ThemeGrid autoColumns={`${args.autoColumns}px`} autoFlow={args.autoFlow}>
    <GridItem>
      <Box bg="brand.secondary-default" height="80px"></Box>
    </GridItem>
    <GridItem>
      <Box bg="brand.secondary-default" height="80px"></Box>
    </GridItem>
    <GridItem>
      <Box bg="brand.secondary-default" height="80px"></Box>
    </GridItem>
    <GridItem>
      <Box bg="brand.secondary-default" height="80px"></Box>
    </GridItem>
    <GridItem>
      <Box bg="brand.secondary-default" height="80px"></Box>
    </GridItem>
  </ThemeGrid>
)

export const Grid = Template.bind({})
