import React from 'react'

import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import { QueryClient, QueryClientProvider } from 'react-query'
import {
  ControllerFieldState,
  ControllerProps,
  FieldValues,
  UseFormStateReturn
} from 'react-hook-form'
import { ThemeProvider } from 'providers/ThemeProvider'

const queryClient = new QueryClient()

export const wrapperProvider = () => {
  const wrapper = ({ children }: any) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    )
  }

  return wrapper
}

type FormControllerMockProps = ControllerProps & {
  onChangeSpy?: () => void
}

const FormControllerMock = (props: FormControllerMockProps) => {
  return (
    <>
      {props.render({
        field: {
          onChange: props.onChangeSpy || jest.fn(),
          name: props.name,
          onBlur: jest.fn(),
          value: props.defaultValue || null,
          ref: jest.fn()
        },
        fieldState: {} as ControllerFieldState,
        formState: {} as UseFormStateReturn<FieldValues>
      })}
    </>
  )
}

const customRender = (component: React.ReactElement) => {
  const wrapper = wrapperProvider()

  return render(component, { wrapper })
}

function customRenderHook<T = any>(hook: any) {
  const wrapper = wrapperProvider()

  return renderHook<any, T>(hook, { wrapper })
}

export * from '@testing-library/react'
export {
  customRender as render,
  act as hookAct,
  customRenderHook as renderHook,
  renderHook as baseRenderHook,
  userEvent,
  FormControllerMock
}
