import { Image } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Carrousel as ThemeCarrousel } from '..'

import { Flex } from '../../Flex'

export default {
  title: 'Core Components/Carrousel',
  component: ThemeCarrousel,
  argTypes: {}
} as ComponentMeta<typeof ThemeCarrousel>

const Template: ComponentStory<typeof ThemeCarrousel> = args => {
  const { children, ...props } = args
  return <ThemeCarrousel {...props}>{children}</ThemeCarrousel>
}
const imgArray = [
  'https://via.placeholder.com/100',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/600'
]
const textArray = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6']
export const CarrouselImage = Template.bind({})
CarrouselImage.args = {
  children: imgArray.map(image => (
    <Image src={image} alt="image" key={image} h="100%" w="100%" />
  ))
}

export const CarrouselFlex = Template.bind({})
CarrouselFlex.args = {
  children: textArray.map(text => (
    <Flex
      bgColor="brand.primary-default"
      h="100%"
      w="100%"
      key={text}
      alignItems="center"
      justifyContent="center"
      color="standard.white"
    >
      {text}
    </Flex>
  ))
}
