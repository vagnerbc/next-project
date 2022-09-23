import { HStack } from '@chakra-ui/react'
import { Button } from 'components/atoms/Button'
import { Flex } from 'components/atoms/Flex'
import { FormControl, FormErrorMessage } from 'components/atoms/Form'
import { Input } from 'components/atoms/Input'
import { VStack } from 'components/atoms/Stack'
import { Text } from 'components/atoms/Text'
import { useAuth } from 'contexts/auth'
import { translate } from 'internationalization'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export const HomePage = () => {
  const { login } = useAuth()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data)
  }

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundColor="brand.primary-lightest"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing="md"
        backgroundColor="brand.primary-default"
        p="md"
        borderRadius="md"
        shadow="2xl"
      >
        <Text fontSize="xl" color="white" fontWeight="bold">
          Backoffice
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl id="email" isInvalid={!!errors.email}>
              <Input
                {...register('email', {
                  required: { value: true, message: 'Email é obrigatório' }
                })}
                background="white"
                borderRadius="md"
                placeholder="Email"
                type="email"
              />
              <FormErrorMessage fontSize="smaller">
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="position" isInvalid={!!errors.password}>
              <Controller
                name="password"
                rules={{
                  required: { value: true, message: 'Senha é obrigatória' }
                }}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    background="white"
                    borderRadius="md"
                    placeholder="Senha"
                    type="password"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage fontSize="smaller">
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <HStack justify="space-between" align="start" w="full" pt="4">
              <Text size="sm" color="brand.primary-extralightest">
                Esqueci minha senha
              </Text>
              <Button type="submit" variant="brand-secondary-solid">
                {translate('commons.enter')}
              </Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    </Flex>
  )
}
