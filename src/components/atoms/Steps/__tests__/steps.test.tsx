import { Flex } from '@chakra-ui/react'

import { render, screen } from '../../../../jest/utils/test-utils'

import * as ChakraSystem from '@chakra-ui/system'
import React from 'react'

import { Step, Steps } from '..'

describe('Steps tests', () => {
  jest.spyOn(ChakraSystem, 'useStyles').mockImplementation(() => ({
    step: {},
    stepContainer: {},
    stepIconContainer: { width: '200px', height: '200px' }
  }))

  it('should render labels if present', async () => {
    render(
      <Steps colorScheme="green" activeStep={0}>
        <Step label="Step 1" />
        <Step label="Step 2" />
        <Step label="Step 3" />
      </Steps>
    )
    expect(screen.getByText('Step 1')).toBeTruthy()
    expect(screen.getByText('Step 2')).toBeTruthy()
    expect(screen.getByText('Step 3')).toBeTruthy()
  })

  it('should render children', async () => {
    render(
      <Steps colorScheme="green" orientation="vertical" activeStep={0}>
        <Step label="Step 1">
          <Flex data-testid="child-1">
            <span>Child 1</span>
          </Flex>
        </Step>
      </Steps>
    )

    const child = screen.queryByTestId('child-1')

    expect(child).toBeTruthy()
  })

  it('should be able to control isCompletedStep for each step', async () => {
    render(
      <Steps colorScheme="green" orientation="vertical" activeStep={1}>
        <Step isCompletedStep={false} label="Step 1">
          <Flex data-testid="child-1">
            <span>Child 1</span>
          </Flex>
        </Step>
        <Step isCompletedStep={true} label="Step 2">
          <Flex data-testid="child-2">
            <span>Child 2</span>
          </Flex>
        </Step>
      </Steps>
    )
    expect(screen.getByTestId('done-icon')).toBeTruthy()
  })
})
