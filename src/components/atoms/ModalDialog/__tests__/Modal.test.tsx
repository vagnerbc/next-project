import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '..'

describe('Running Test for Modal', () => {
  it('check if Modal render correctly', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <ModalOverlay />
        <ModalContent data-testid="modal-container">
          <ModalCloseButton />
          <ModalHeader>Header Content</ModalHeader>
          <ModalBody>Body Content</ModalBody>
          <ModalFooter>Footer Content</ModalFooter>
        </ModalContent>
      </Modal>
    )
    expect(screen.getByTestId('modal-container')).toBeTruthy()
    expect(screen.getByText('Header Content')).toBeTruthy()
    expect(screen.getByText('Body Content')).toBeTruthy()
    expect(screen.getByText('Footer Content')).toBeTruthy()
  })

  it('should have call onClose when click the ModalCloseButton', () => {
    const onCloseSpy = jest.fn()

    render(
      <Modal isOpen={true} onClose={onCloseSpy}>
        <ModalOverlay />
        <ModalContent data-testid="modal-container">
          <ModalCloseButton />
          <ModalHeader>Header Content</ModalHeader>
          <ModalBody>Body Content</ModalBody>
          <ModalFooter>Footer Content</ModalFooter>
        </ModalContent>
      </Modal>
    )

    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)

    expect(onCloseSpy).toHaveBeenCalledTimes(1)
  })
})
