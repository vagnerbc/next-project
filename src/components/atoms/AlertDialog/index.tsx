import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalProps,
  ModalContentProps,
  ModalOverlay,
  ModalBody,
  CloseButton,
  ModalFooter
} from '@chakra-ui/react'
import React from 'react'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { Text } from '../Text'

type Props = ModalProps &
  ModalContentProps & {
    children: React.ReactNode
    title: string
    hasCloseButton?: boolean
    hasOverlay?: boolean
    isCentered?: boolean
    cancelButtonText?: string
    confirmButtonText?: string
    confirmButtonIcon?: React.ReactElement
    onConfirm?: () => void
    onCancel?: () => void
  }

export const AlertDialog = (props: Props) => {
  const {
    children,
    cancelButtonText,
    confirmButtonText,
    hasCloseButton = false,
    hasOverlay = false,
    confirmButtonIcon,
    onConfirm,
    onCancel,
    title,
    onClose,
    isOpen,
    isCentered,
    ...modalContentProps
  } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
      {hasOverlay && <ModalOverlay />}
      <ModalContent
        px="xxs"
        py="xxxs"
        boxShadow="primary-level1"
        {...modalContentProps}
      >
        <ModalHeader p={0}>
          <Flex justify="space-between">
            <Text fontSize="sm" lineHeight="lg">
              {title}
            </Text>
            {hasCloseButton && <CloseButton onClick={onClose} />}
          </Flex>
        </ModalHeader>
        <ModalBody p={0} my="xxs">
          {children}
        </ModalBody>
        <ModalFooter boxShadow="none">
          <Flex justify="flex-end">
            {cancelButtonText && (
              <Button
                variant="neutral-extradark-ghost"
                onClick={onCancel || onClose}
              >
                <Text pt="3px">{cancelButtonText}</Text>
              </Button>
            )}
            {confirmButtonText && (
              <Button
                variant="feedback-error-default"
                ml="xxs"
                onClick={onConfirm}
                leftIcon={confirmButtonIcon}
              >
                <Text pt="3px">{confirmButtonText}</Text>
              </Button>
            )}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
