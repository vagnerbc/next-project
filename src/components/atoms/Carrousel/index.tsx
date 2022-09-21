import React from 'react'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import { Tag } from '../Tag'

type CarrouselProps = {
  children: React.ReactNode[]
  mainItemSize?: string
  subItemSize?: string
}
export const Carrousel = (props: CarrouselProps) => {
  const { children, mainItemSize = '18rem', subItemSize = '9rem' } = props
  const [count, setCount] = React.useState(0)
  const plusHandler = () => {
    if (count <= children.length - 1) {
      setCount(count + 1)
    }
  }
  const minusHandler = () => {
    if (count > 0) setCount(count - 1)
  }
  const content = () => {
    const elements = children.concat([null, null])

    return elements.map((_, index) => {
      return (
        <Box
          hidden={index > count + 2 || index < count}
          key={index}
          marginX="nano"
        >
          {(count === 0 && index === 0) || index === children.length + 1 ? (
            <Box boxSize={count + 1 === index ? mainItemSize : subItemSize} />
          ) : (
            <Box boxSize={count + 1 === index ? mainItemSize : subItemSize}>
              {children[index - 1]}
            </Box>
          )}
        </Box>
      )
    })
  }
  return (
    <Flex
      h="100%"
      w="100%"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Tag
        variant="highlight-neutral-extralight"
        size="md"
        position="absolute"
        fontSize="xxxs"
        color="neutral.extradark"
        top="0"
        left="0"
      >
        {count + 1 + '/' + children.length}
      </Tag>
      <Box position="absolute" left="0">
        <IconButton
          hidden={count === 0}
          variant="icon-default-outline"
          icon={<Icon name="arrow_back" />}
          aria-label="back-carrousel-button"
          onClick={minusHandler}
          data-testid="back-button"
        />
      </Box>
      {content()}
      <Box position="absolute" right="0">
        <IconButton
          hidden={count === children.length - 1}
          variant="icon-default-outline"
          icon={<Icon name="arrow_forward" />}
          aria-label="foward-carrousel-button"
          onClick={plusHandler}
          verticalAlign={'right'}
          data-testid="foward-button"
        />
      </Box>
    </Flex>
  )
}
