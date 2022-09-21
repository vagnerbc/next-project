import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Image as ThemeImage } from '..'

export default {
  title: 'Core Components/Image',
  component: ThemeImage,
  argTypes: {
    variant: {
      options: ['primary-solid'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeImage>

const Template: ComponentStory<typeof ThemeImage> = args => (
  <ThemeImage {...args}></ThemeImage>
)

export const Image = Template.bind({})
Image.args = {
  variant: 'primary-solid',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/CargillLogo.svg/1200px-CargillLogo.svg.png',
  alt: 'image story'
}
