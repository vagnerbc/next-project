import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '..'

describe('Running Test for Accordion', () => {
  it('check if Accordion render correctly', () => {
    render(
      <Accordion data-testid="box-container">
        <AccordionItem>
          <AccordionButton>click to expand</AccordionButton>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByTestId('box-container')).toBeTruthy()
    expect(screen.getByText('content')).toBeTruthy()
  })

  it('check if Accordion expand when clicked', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton data-testid="collapse-button">
            click to expand
          </AccordionButton>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    fireEvent.click(screen.getByTestId('collapse-button'))
    expect(screen.getByRole('button', { expanded: true })).toBeTruthy()
  })

  it('check if accordion expand and collapse when allowToggle is true', () => {
    render(
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton data-testid="collapse-button">
            click to expand
          </AccordionButton>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    fireEvent.click(screen.getByTestId('collapse-button'))
    expect(screen.getByRole('button', { expanded: true })).toBeTruthy()
    fireEvent.click(screen.getByTestId('collapse-button'))
    expect(screen.getByRole('button', { expanded: false })).toBeTruthy()
  })

  it('check if accordion allow multiple open items', () => {
    render(
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton data-testid="collapse-button-one">
            click to expand
          </AccordionButton>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton data-testid="collapse-button-two">
            click to expand
          </AccordionButton>
          <AccordionPanel>content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    fireEvent.click(screen.getByTestId('collapse-button-one'))
    fireEvent.click(screen.getByTestId('collapse-button-two'))
    expect(screen.getAllByRole('button', { expanded: true }).length).toEqual(2)
  })
})
