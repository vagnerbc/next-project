import { Button, Text, useDisclosure } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {
  Modal as ThemeModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '..'

export default {
  title: 'Components/ModalDialog',
  component: ThemeModal,
  argTypes: {
    variant: {
      options: [
        'footer-no-box-shadow',
        'footer-neutral-extralight',
        'align-bottom'
      ],
      control: { type: 'select' }
    },
    isCentered: {
      control: { type: 'boolean' }
    },
    closeOnEsc: {
      control: { type: 'boolean' }
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof ThemeModal>

const Template: ComponentStory<typeof ThemeModal> = args => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Abrir Modal</Button>

      <ThemeModal {...args} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader fontSize="sm" mt="md" ml="12px">
            Título do Modal
          </ModalHeader>

          <ModalBody mb="24px">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor sit amet ex id laoreet. Integer in rhoncus augue.
              Pellentesque nec turpis cursus, ullamcorper nisl eu, mollis nunc.
              Etiam et velit mollis, cursus quam ut, ornare nulla. Praesent
              vestibulum ipsum ipsum, ut porttitor erat facilisis sed. Maecenas
              molestie pulvinar lorem vitae hendrerit.
            </Text>
          </ModalBody>

          <ModalFooter p="14px">
            <Button bgColor="neutral.light" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="neutral-extralight-solid">Ação secundária</Button>
          </ModalFooter>
        </ModalContent>
      </ThemeModal>
    </>
  )
}

export const Modal = Template.bind({})
Modal.args = {
  variant: 'brand-primary-solid',
  isCentered: false,
  closeOnEsc: false,
  closeOnOverlayClick: false
}
