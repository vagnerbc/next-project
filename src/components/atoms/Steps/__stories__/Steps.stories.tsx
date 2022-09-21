import { useColorModeValue } from '@chakra-ui/color-mode'
import { FlexProps, HStack, VStack } from '@chakra-ui/react'
import { ComponentStory, Meta } from '@storybook/react'
import { motion, MotionProps } from 'framer-motion'
import React from 'react'

import { useSteps } from '../../../../hooks/useSteps'
import { Button } from '../../Button'
import { Flex } from '../../Flex'
import { IconsName } from '../../Icon'
import { Radio, RadioGroup } from '../../Radio'
import { Text } from '../../Text'

import { Step, Steps } from '..'

import { StepProps } from '../Step'

const meta: Meta = {
  title: 'Core Components/Steps',
  component: Steps,
  argTypes: {
    color: {
      name: 'color',
      type: 'string',
      defaultValue: '#E85A00',
      config: {
        type: 'color'
      }
    },
    activeStep: {
      control: { type: 'number' }
    },
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    labelOrientation: {
      defaultValue: 'vertical',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    size: {
      defaultValue: 'md',
      options: ['md'],
      control: { type: 'select' }
    }
  },
  parameters: {}
}

export default meta

type ResetPromptProps = Omit<FlexProps, keyof MotionProps> & {
  onReset: () => void
}

const MotionFlex = motion<FlexProps>(Flex)

const ResetPrompt = ({ onReset, ...rest }: ResetPromptProps): JSX.Element => {
  return (
    <MotionFlex
      px={4}
      py={4}
      width="100%"
      align="center"
      justify="center"
      flexDirection="column"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Text fontSize="xl">Woohoo! All steps completed!</Text>
      <Button mt={6} size="sm" onClick={onReset}>
        Reset
      </Button>
    </MotionFlex>
  )
}

type StepButtonsProps = {
  nextStep?: () => void
  prevStep?: () => void
  prevDisabled?: boolean
  nextDisabled?: boolean
  isLast?: boolean
}

const StepButtons = ({
  nextStep,
  prevStep,
  prevDisabled,
  nextDisabled,
  isLast
}: StepButtonsProps): JSX.Element => {
  return (
    <Flex width="100%" justify="flex-end">
      <Button
        mr={4}
        variant="ghost"
        size="sm"
        onClick={prevStep}
        isDisabled={prevDisabled}
      >
        Prev
      </Button>
      <Button isDisabled={nextDisabled} size="sm" onClick={nextStep}>
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </Flex>
  )
}

type ContentProps = FlexProps & {
  index: number
}

const Content = ({ index, ...rest }: ContentProps) => {
  const bg = useColorModeValue('gray.200', 'gray.700')
  return (
    <Flex
      p={6}
      bg={bg}
      rounded="md"
      width="100%"
      align="center"
      justify="center"
      {...rest}
    >
      <Text>Step {index + 1}</Text>
    </Flex>
  )
}

const steps = [
  { label: 'Step 1' },
  { label: 'Step 2 Label', status: 'warning' as StepProps['state'] },
  { label: 'Step 3', status: 'success' as StepProps['state'] }
]

const descriptionSteps = [
  {
    label: 'Step 1',
    description: 'Step 1 teste descrição'
  },
  { label: 'Step 2 Label', description: 'Step 2 Description' },
  { label: 'Step 3 Label', description: 'Step 3 Description' }
]

export const Horizontal: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label} />
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const Vertical: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        orientation="vertical"
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label} />
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const WithDescription: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  return (
    <>
      <Steps
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {descriptionSteps.map(({ label, description }, index) => (
          <Step label={label} key={label} description={description}>
            <Content my={6} index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

type StateValue = 'loading' | 'error' | undefined

export const WithStates: ComponentStory<typeof Steps> = (args): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  const [stepState, setStepState] = React.useState<StateValue>('loading')

  return (
    <>
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          defaultValue="loading"
          onChange={val => setStepState(val as StateValue)}
        >
          <HStack direction="row">
            <Radio value="loading">Loading</Radio>
            <Radio value="error">Error</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Steps
        state={stepState}
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Content my={6} index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

const iconSteps = [
  { label: 'Login', iconName: 'person' as IconsName },
  {
    label: 'Verification',
    iconName: 'content_paste' as IconsName
  },
  { label: 'Pay', iconName: 'local_atm' as IconsName }
]

export const CustomStepIcons: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {iconSteps.map(({ label, iconName }, index) => (
          <Step label={label} key={label} iconName={iconName}>
            <Content my={6} index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const CustomCheckIcon: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        checkIconName="cloud_done"
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label} />
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const CustomStepStatus: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label, status }, index) => (
          <Step label={label} key={label} state={status} />
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const ClickableSteps: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        checkIconName="done_outline"
        onClickStep={step => setStep(step)}
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Content my={6} index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const InnerLabelSteps: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        checkIconName="done_outline"
        onClickStep={step => setStep(step)}
        activeStep={args.activeStep || activeStep}
        size={args.size}
        labelOrientation={args.labelOrientation}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {steps.map(({ label }, index) => (
          <Step
            label={label}
            key={label}
            innerLabel={index === 2 ? 43 : undefined}
          >
            <Content my={6} index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export const VerticalLabels: ComponentStory<typeof Steps> = (
  args
): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <>
      <Steps
        labelOrientation="vertical"
        activeStep={args.activeStep || activeStep}
        size={args.size}
        orientation={args.orientation}
        colorScheme={args.color as string}
      >
        {descriptionSteps.map(({ label, description }, index) => (
          <Step
            label={label}
            key={label}
            description={description}
            state={index === 2 ? 'success' : undefined}
          />
        ))}
        <Step label="Step 4" state="warning" />
      </Steps>
      {activeStep === 6 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}
