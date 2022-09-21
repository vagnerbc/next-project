import { useClipboard } from '@chakra-ui/hooks'
import React, { memo, useEffect } from 'react'

import { Flex } from '../../Flex'
import { Icon, IconsName, IconVariants, IconSizes } from '../../Icon'
import { Text } from '../../Text'
import { useToast } from '../../Toast'
import { CustomIconNames } from '../custom'

type IconWithNameProps = {
  iconName: IconsName | CustomIconNames
  variant?: IconVariants
  size?: IconSizes
}

const IconWithName = ({ iconName, variant, size }: IconWithNameProps) => {
  const { hasCopied, onCopy } = useClipboard(iconName)

  const config = {
    duration: 3000,
    isClosable: true
  }

  const notifySuccess = useToast({ ...config, variant: 'success' })

  useEffect(() => {
    if (hasCopied) {
      notifySuccess(iconName, 'Copiado com sucesso!!')
    }
  }, [hasCopied])

  return (
    <Flex
      key={iconName}
      padding="xxxs"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="2px solid transparent"
      borderRadius="sm"
      cursor="pointer"
      _hover={{
        borderColor: 'brand.primary-default'
      }}
      onClick={() => onCopy()}
    >
      <Icon name={iconName} variant={variant} size={size} color={'#000'} />
      <Text marginTop="nano" fontWeight="semibold" color="neutral.extradark">
        {iconName}
      </Text>
    </Flex>
  )
}

export default memo(IconWithName)
