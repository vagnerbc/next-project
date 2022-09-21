import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Paginator as ThemePaginator } from '..'

export default {
  title: 'Core Components/Paginator',
  component: ThemePaginator,
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
        min: 0
      }
    },
    lastPage: {
      control: {
        type: 'number',
        min: 1
      }
    },
    offsetSize: {
      control: {
        type: 'number',
        min: 3
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md']
      }
    }
  },
  parameters: {}
} as ComponentMeta<typeof ThemePaginator>

const Template: ComponentStory<typeof ThemePaginator> = args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <ThemePaginator
      currentPage={currentPage}
      lastPage={args.lastPage}
      size={args.size}
      offsetSize={args.offsetSize}
      onChangePage={onChangePage}
    />
  )
}

export const Paginator = Template.bind({})
Paginator.args = {
  currentPage: 0,
  lastPage: 8,
  offsetSize: 2,
  size: 'md'
}
