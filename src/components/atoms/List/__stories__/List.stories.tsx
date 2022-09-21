import { Flex, HStack, Stack, Text } from '@chakra-ui/react'

import { Icon } from '../../Icon'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { List as ThemeList, ListItem, OrderedList, UnorderedList } from '..'

export default {
  title: 'Components/List',
  component: ThemeList,
  argTypes: {
    spacing: {
      options: ['quarck', 'nano', 'xxxs', 'xxs', 'xs', 'sm', 'md'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeList>

const Template: ComponentStory<typeof ThemeList> = args => {
  const { ref, ...rest } = args
  return (
    <HStack spacing="xxs">
      <Stack>
        <Text fontWeight="bold">UnorderedList</Text>
        <UnorderedList {...rest}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Text fontWeight="bold">OrderedList</Text>
        <OrderedList {...rest}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>
      </Stack>
      <Stack>
        <Text fontWeight="bold">Unstyled list with icon</Text>
        <ThemeList {...rest}>
          <ListItem as={Flex} direction="row">
            <Icon name="check" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem as={Flex} direction="row">
            <Icon name="check" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem as={Flex} direction="row">
            <Icon name="check" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem as={Flex} direction="row">
            <Icon name="check" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </ThemeList>
      </Stack>
    </HStack>
  )
}

export const List = Template.bind({})
List.args = {
  spacing: 'unset'
}
