import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  Table as ThemeTable,
  Tr,
  Th,
  Td,
  Tbody,
  Thead,
  TableContainer
} from '..'

export default {
  title: 'Team Components/Table',
  component: ThemeTable,
  argTypes: {
    variant: {
      options: [
        'striped-neutral-lightest',
        'striped-standard-light',
        'inverted-striped-standard-light',
        'outline-standard-light',
        'unstyled'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemeTable>

const Template: ComponentStory<typeof ThemeTable> = args => (
  <TableContainer>
    <ThemeTable {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>
            <span>Phone</span>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>John Doe</Td>
          <Td>32</Td>
          <Td>
            <span>+1 (123) 456-7890</span>
          </Td>
        </Tr>
        <Tr>
          <Td>Jane Doe</Td>
          <Td>28</Td>
          <Td>
            <span>+1 (123) 456-2599</span>
          </Td>
        </Tr>
        <Tr>
          <Td>Alan Doe</Td>
          <Td>28</Td>
          <Td>
            <span>+1 (123) 456-4818</span>
          </Td>
        </Tr>
        <Tr>
          <Td>Richard Doe</Td>
          <Td>28</Td>
          <Td>
            <span>+1 (123) 456-4818</span>
          </Td>
        </Tr>
      </Tbody>
    </ThemeTable>
  </TableContainer>
)

export const Table = Template.bind({})
Table.args = {
  variant: 'striped-neutral-light',
  size: 'md'
}
