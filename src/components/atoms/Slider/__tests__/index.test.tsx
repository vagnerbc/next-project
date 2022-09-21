import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '..'

import React from 'react'

describe('Running Test for Slider', () => {
  const component = (
    <Slider defaultValue={50} data-testid="slider-container">
      <SliderTrack data-testid="slider-track">
        <SliderFilledTrack data-testid="slider-filled-track" />
      </SliderTrack>
      <SliderThumb data-testid="slider-thumb" />
    </Slider>
  )
  it('Check if Slider render', () => {
    render(component)
    expect(screen.getByTestId('slider-container')).toBeTruthy()
    expect(screen.getByTestId('slider-track')).toBeTruthy()
    expect(screen.getByTestId('slider-filled-track')).toBeTruthy()
    expect(screen.getByTestId('slider-thumb')).toBeTruthy()
  })
})
