import { Box, Flex } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Icon } from '../../Icon'

import {
  Menu as ThemeMenu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider
} from '..'

export default {
  title: 'Core Components/Menu',
  component: ThemeMenu,
  argTypes: {
    variant: {
      options: ['brand-primary-default', 'brand-primary-solid'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeMenu>

const Template: ComponentStory<typeof ThemeMenu> = args => (
  <Box bgColor="standard.light" padding="20px">
    <ThemeMenu {...args}>
      <MenuButton w="100px">
        <Flex justify="space-between" align="center">
          Padrão <Icon name="expand_more" fontSize="xs" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Meus pedidos</MenuItem>
        <MenuItem>Meus dados</MenuItem>
        <MenuItem>Show de Prêmios</MenuItem>
        <MenuItem>Vídeo Plataforma do Futuro</MenuItem>
        <MenuDivider />
        <MenuItem>Sair</MenuItem>
      </MenuList>
    </ThemeMenu>
  </Box>
)

export const Menu = Template.bind({})
Menu.args = {
  variant: 'brand-primary-solid',
  size: 'md'
}
