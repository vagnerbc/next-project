import {
  Box,
  useToast as chakraUseToast,
  UseToastOptions
} from '@chakra-ui/react'
import React from 'react'

export type ToastVariant = 'success' | 'warning' | 'error' | 'info'

interface UseToastProps extends UseToastOptions {
  variant: ToastVariant
}

type ToastProps = {
  title: React.ReactNode
  description?: React.ReactNode
  onClose: () => void
}

const ToastSuccess = (props: ToastProps) => {
  return (
    <Box bg="feedback.success-light" color="white">
      {props.title}
      {props.description}
    </Box>
  )
}

const ToastError = (props: ToastProps) => {
  return (
    <Box bg="feedback.error-light" color="white">
      {props.title}
      {props.description}
    </Box>
  )
}

const ToastWarning = (props: ToastProps) => {
  return (
    <Box bg="feedback.warning-light" color="white">
      {props.title}
      {props.description}
    </Box>
  )
}

const ToastInfo = (props: ToastProps) => {
  return (
    <Box bg="feedback.information-light" color="white">
      {props.title}
      {props.description}
    </Box>
  )
}

function getToastContent(variant: ToastVariant) {
  switch (variant) {
    case 'success':
      return ToastSuccess
    case 'error':
      return ToastError
    case 'warning':
      return ToastWarning
    case 'info':
      return ToastInfo
    default:
      return ToastSuccess
  }
}

export const useToast = (options: UseToastProps) => {
  const { variant, ...rest } = options

  const ToastContent = getToastContent(variant)
  const toast = chakraUseToast()

  return (title: React.ReactNode, description: React.ReactNode) =>
    toast({
      ...rest,
      render: ({ onClose }) => (
        <ToastContent
          title={title}
          description={description}
          onClose={onClose}
        />
      )
    })
}
