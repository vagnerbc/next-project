import { Flex } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Avatar as ThemeAvatar, AvatarBadge } from '..'

export default {
  title: 'Components/Avatar',
  component: ThemeAvatar,
  argTypes: {
    size: {
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemeAvatar>

const Template: ComponentStory<typeof ThemeAvatar> = args => (
  <Flex direction="column">
    <Flex gap="25px" pb="25px">
      <ThemeAvatar
        {...args}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      />

      <ThemeAvatar
        {...args}
        name="Dan Abrahmov"
        src="https://bit.ly/broken-link"
      />

      <ThemeAvatar {...args} />
    </Flex>

    <Flex gap="25px" mt="10px">
      <ThemeAvatar
        {...args}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      >
        <AvatarBadge boxSize="1.25em" />
      </ThemeAvatar>

      <ThemeAvatar
        {...args}
        name="Dan Abrahmov"
        src="https://bit.ly/broken-link"
      >
        <AvatarBadge boxSize="1.25em" />
      </ThemeAvatar>

      <ThemeAvatar {...args}>
        <AvatarBadge boxSize="1.25em" />
      </ThemeAvatar>
    </Flex>
  </Flex>
)

export const Avatar = Template.bind({})
Avatar.args = {
  size: 'md'
}
