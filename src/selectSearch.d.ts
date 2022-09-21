import { Token } from '@chakra-ui/styled-system/dist/declarations/src/utils'
import { GroupBase } from 'chakra-react-select'
import { ColorKeys } from 'types'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    multiValueBackground: Token<ColorKeys, 'colors'>
  }
}
