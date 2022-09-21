import React from 'react'

import '@testing-library/jest-dom'
import { render, screen, userEvent } from '../../../../jest/utils/test-utils'

import { AlertDialog } from '..'

describe('Running Test for AlertDialog', () => {
  it('Deve renderizar corretamente', () => {
    render(
      <AlertDialog
        title="Title"
        isOpen={true}
        onClose={jest.fn()}
        cancelButtonText="Close"
        confirmButtonText="Confirm"
        hasCloseButton
      >
        <p>Description</p>
      </AlertDialog>
    )

    expect(screen.getByText('Title')).toBeTruthy()
    expect(screen.getByText('Description')).toBeTruthy()
    expect(screen.getByText('Close')).toBeTruthy()
    expect(screen.getByText('Confirm')).toBeTruthy()
    expect(screen.getByLabelText('Close')).toBeTruthy()
  })

  it('should close modal when click on close icon', () => {
    const onCloseSpy = jest.fn()
    render(
      <AlertDialog
        title="Title"
        isOpen={true}
        onClose={onCloseSpy}
        cancelButtonText="Close"
        confirmButtonText="Confirm"
        hasCloseButton
      >
        <p>Description</p>
      </AlertDialog>
    )

    const closeIconButton = screen.getByLabelText('Close')
    userEvent.click(closeIconButton)

    expect(onCloseSpy).toHaveBeenCalled()
  })

  it('should close modal when click on cancel button', () => {
    const onCloseSpy = jest.fn()
    render(
      <AlertDialog
        title="Title"
        isOpen={true}
        onClose={onCloseSpy}
        cancelButtonText="Cancel"
        confirmButtonText="Confirm"
        hasCloseButton
      >
        <p>Description</p>
      </AlertDialog>
    )

    const cancelButton = screen.getByText('Cancel')
    userEvent.click(cancelButton)

    expect(onCloseSpy).toHaveBeenCalled()
  })

  it('should call the onConfirm function when click on confirm button', () => {
    const onConfirmSpy = jest.fn()
    render(
      <AlertDialog
        title="Title"
        isOpen={true}
        onClose={jest.fn()}
        onConfirm={onConfirmSpy}
        cancelButtonText="Cancel"
        confirmButtonText="Confirm"
        hasCloseButton
      >
        <p>Description</p>
      </AlertDialog>
    )

    const cancelButton = screen.getByText('Confirm')
    userEvent.click(cancelButton)

    expect(onConfirmSpy).toHaveBeenCalled()
  })
})
