import React from 'react'

import { StepsProps } from './Steps'

type StepsContextValue = StepsProps & {
  stepContainerWidths?: number[]
  clickable?: boolean
  isSuccess?: boolean
  isError?: boolean
  isWarning?: boolean
  isLoading?: boolean
  isVertical?: boolean
  isLabelVertical?: boolean
  widths?: number[]
  setWidths?: React.Dispatch<React.SetStateAction<number[]>>
  stepCount?: number
}

const StepsContext = React.createContext<StepsContextValue>({
  activeStep: 0
})

export const useStepsContext = () => React.useContext(StepsContext)

export const StepsProvider: React.FC<{
  value: StepsContextValue
  children: React.ReactNode
}> = ({ value, children }) => {
  const [widths, setWidths] = React.useState<number[]>([])

  const isSuccess = value.state === 'success'
  const isError = value.state === 'error'
  const isWarning = value.state === 'warning'
  const isLoading = value.state === 'loading'

  const isVertical = value.orientation === 'vertical'
  const isLabelVertical =
    value.orientation !== 'vertical' && value.labelOrientation === 'vertical'

  return (
    <StepsContext.Provider
      value={{
        ...value,
        widths,
        setWidths,
        isSuccess,
        isError,
        isWarning,
        isLoading,
        isVertical,
        isLabelVertical
      }}
    >
      {children}
    </StepsContext.Provider>
  )
}
