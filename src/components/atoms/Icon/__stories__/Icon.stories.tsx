import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'

import { Icon as ThemeIcon, IconVariants, IconSizes } from '..'

import { icons as iconNames } from '../../../../types/icons'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Flex } from '../../Flex'
import { Input } from '../../Input'
import { Text } from '../../Text'
import { customIconNames } from '../custom'

import IconWithName from './icon-with-name'

export default {
  title: 'Core Components/Icon',
  component: ThemeIcon,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'round', 'sharp', 'two-tone'],
      control: { type: 'select' }
    },
    name: {
      options: [...customIconNames, ...iconNames],
      control: { type: 'select' }
    },
    size: {
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    color: {
      control: { type: 'color' }
    }
  }
} as ComponentMeta<typeof ThemeIcon>

export const Icon = () => {
  const [name, setName] = useState('')
  const [variant, setVariant] = useState<IconVariants>('filled')
  const [size, setSize] = useState<IconSizes>('md')

  const variantOptions: IconVariants[] = [
    'filled',
    'outlined',
    'round',
    'sharp',
    'two-tone'
  ]

  const sizeoptions: IconSizes[] = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg']

  const icons = [...customIconNames, ...iconNames]

  const hasSearch = name.trim().length > 0

  const result = icons.filter(iconName => iconName.includes(name.toLowerCase()))

  return (
    <Flex flexDirection="column" padding="xxxs">
      <Input
        variant="outline-brand-primary-default"
        leftIcon="search"
        placeholder="Buscar ícones..."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Flex alignItems="center" justifyContent="space-between" paddingY="xxxs">
        <Box>
          <Text
            fontWeight="semibold"
            fontSize="xs"
            color="brand.secondary-default"
          >
            Variantes
          </Text>
          <Flex paddingTop="nano">
            {variantOptions.map(variantOption => (
              <Box key={variantOption} marginRight="xxxs">
                <Button
                  variant="default-outline"
                  color={
                    variantOption === variant
                      ? 'brand.primary-default'
                      : undefined
                  }
                  borderColor={
                    variantOption === variant
                      ? 'brand.primary-default'
                      : undefined
                  }
                  onClick={() => setVariant(variantOption)}
                >
                  <Flex alignItems="center">
                    {variantOption === variant && (
                      <ThemeIcon name="check" size="xs" />
                    )}
                    <Text
                      marginLeft={
                        variantOption === variant ? 'quarck' : undefined
                      }
                    >
                      {variantOption}
                    </Text>
                  </Flex>
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>

        <Box>
          <Text
            fontWeight="semibold"
            fontSize="xs"
            color="brand.secondary-default"
          >
            Tamanhos
          </Text>
          <Flex paddingTop="nano">
            {sizeoptions.map(sizeOption => (
              <Box key={sizeOption} marginRight="xxxs">
                <Button
                  variant="default-outline"
                  color={
                    sizeOption === size ? 'brand.primary-default' : undefined
                  }
                  borderColor={
                    sizeOption === size ? 'brand.primary-default' : undefined
                  }
                  onClick={() => setSize(sizeOption)}
                >
                  <Flex alignItems="center">
                    {sizeOption === size && (
                      <ThemeIcon name="check" size="xs" />
                    )}
                    <Text
                      marginLeft={sizeOption === size ? 'quarck' : undefined}
                    >
                      {sizeOption}
                    </Text>
                  </Flex>
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>

      {hasSearch && (
        <>
          <Text
            paddingTop="lg"
            fontSize="sm"
            fontWeight="semibold"
            color="brand.secondary-default"
          >
            Resultados da busca:
          </Text>
          <Flex
            marginTop="xxxs"
            paddingY="xxxs"
            wrap="wrap"
            justifyContent="space-between"
          >
            {result.map(iconName => (
              <IconWithName
                key={iconName}
                iconName={iconName}
                variant={variant}
                size={size}
              />
            ))}
          </Flex>
        </>
      )}
      {!hasSearch && (
        <>
          <Text
            paddingTop="lg"
            fontSize="sm"
            fontWeight="semibold"
            color="brand.secondary-default"
          >
            Ícones Customizados
          </Text>
          <Flex paddingY="xxxs" wrap="wrap" justifyContent="space-between">
            {customIconNames.map(iconName => (
              <IconWithName
                key={iconName}
                iconName={iconName}
                variant={variant}
                size={size}
              />
            ))}
          </Flex>
          <Text
            paddingTop="sm"
            fontSize="sm"
            fontWeight="semibold"
            color="brand.secondary-default"
          >
            Material Icons
          </Text>
          <Flex paddingY="xxxs" wrap="wrap" justifyContent="space-between">
            {iconNames.map(iconName => (
              <IconWithName
                key={iconName}
                iconName={iconName}
                variant={variant}
                size={size}
              />
            ))}
          </Flex>
        </>
      )}
    </Flex>
  )
}
