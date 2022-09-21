import { tableAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

type TableStyle = PartsStyleObject<typeof tableAnatomy>

type VariantStyles = {
  [key: string]: TableStyle
}

type BaseStyle = TableStyle

type TableConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'striped-neutral-lightest': {
    tbody: {
      tr: {
        bgColor: 'neutral.extralight',
        _odd: {
          bgColor: 'neutral.lightest'
        }
      }
    }
  },
  'striped-standard-light': {
    tbody: {
      tr: {
        bgColor: 'standard.white',
        _odd: {
          bgColor: 'standard.light'
        }
      }
    }
  },
  'inverted-striped-standard-light': {
    thead: {
      tr: {
        bgColor: 'standard.light'
      }
    },
    tbody: {
      tr: {
        bgColor: 'standard.light',
        _odd: {
          bgColor: 'standard.white'
        }
      }
    }
  },
  'outline-standard-light': {
    tbody: {
      td: {
        borderTop: '1px solid',
        borderColor: 'standard.light'
      }
    }
  }
}

const TableTheme: TableConfig = {
  baseStyle: {
    table: {
      _after: {
        borderWidth: '2px',
        borderRadius: '12px',
        borderColor: 'neutral.mediumlight'
      }
    },
    tbody: {
      color: 'neutral.extradark'
    }
  },
  sizes: {
    xs: {
      thead: {
        th: {
          fontSize: 'xxxs',
          px: 'xxxs',
          py: 'nano'
        }
      },
      tbody: {
        td: {
          fontSize: 'xxs',
          px: 'xxxs',
          py: 'nano'
        }
      }
    },
    sm: {
      thead: {
        th: {
          fontSize: 'xxs',
          px: 'xxxs',
          py: 'nano'
        }
      },
      tbody: {
        td: {
          fontSize: 'xs',
          px: 'xxxs',
          py: 'nano'
        }
      }
    },
    md: {
      thead: {
        th: {
          fontSize: 'xxxs',
          px: 'xxs',
          py: 'xxxs'
        }
      },
      tbody: {
        td: {
          fontSize: 'xxs',
          px: 'xxs',
          py: 'xxxs'
        }
      }
    },
    lg: {
      thead: {
        th: {
          fontSize: 'xxs',
          px: 'xxs',
          py: 'xxxs'
        }
      },
      tbody: {
        td: {
          fontSize: 'xs',
          px: 'xxs',
          py: 'xxxs'
        }
      }
    }
  },
  variants
}

export default TableTheme
