import {
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs'
import React from 'react'

export const DocsWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Description />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
    {children}
  </>
)
