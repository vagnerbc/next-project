import { ChakraStylesConfig } from 'chakra-react-select'

const SelectSearchTheme: ChakraStylesConfig = {
  indicatorSeparator: provited => ({
    ...provited,
    display: 'none'
  }),
  control: (provited, { hasValue }) => ({
    ...provited,
    cursor: 'pointer',
    borderColor: hasValue ? 'neutral.darkest' : 'neutral.default',
    borderRadius: 'sm',
    _focus: {
      border: '2px solid',
      borderColor: 'brand.primary-default'
    },
    _hover: {
      borderColor: 'neutral.darkest'
    }
  }),
  placeholder: provited => ({
    ...provited,
    color: 'neutral.darkest'
  }),
  dropdownIndicator: (provided, { selectProps }) => ({
    ...provided,
    background: 'transparent',
    paddingRight: 'xxxs',
    borderLeft: 'transparent',
    '> svg': {
      transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`
    },
    hr: {
      display: 'none'
    }
  }),
  option: provided => ({
    ...provided,
    fontSize: 'xxs'
  }),
  menu: provided => ({
    ...provided,
    mt: '0'
  }),
  menuList: provided => ({
    ...provided,
    border: '2px solid',
    borderColor: 'brand.primary-default',
    borderRadius: 'sm',
    p: 0
  }),
  multiValue: (provided, { selectProps }) => ({
    ...provided,
    background: selectProps.multiValueBackground || 'neutral.default'
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'standard.white'
  }),
  multiValueRemove: provided => ({
    ...provided,
    opacity: 'unset',
    color: 'standard.white'
  })
}

export default SelectSearchTheme
