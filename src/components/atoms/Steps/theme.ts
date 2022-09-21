import {
  anatomy,
  PartsStyleFunction,
  SystemStyleFunction
} from '@chakra-ui/theme-tools'

const parts = anatomy('steps').parts(
  'connector',
  'description',
  'icon',
  'label',
  'labelContainer',
  'step',
  'stepLabel',
  'stepContainer',
  'stepIconContainer',
  'steps'
)

const baseStyleStepLabel: SystemStyleFunction = () => ({
  color: 'neutral.dark',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 'xs',
  _highlighted: {
    color: 'standard.white'
  }
})

const baseStyleLabel: SystemStyleFunction = () => ({
  color: 'neutral.extradark',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 'sm'
})

const baseStyleDescription: SystemStyleFunction = () => ({
  color: 'neutral.extradark',
  marginTop: '-2px',
  textAlign: 'center',
  fontSize: 'xs'
})

const baseStyleConnector: SystemStyleFunction = props => {
  const { colorScheme } = props
  const inactiveColor = 'neutral.extralight'
  const activeColor = colorScheme

  return {
    flex: 1,
    display: 'flex',
    bgColor: inactiveColor,
    transitionProperty: 'background-color',
    transitionDuration: 'normal',
    _highlighted: {
      bgColor: activeColor
    }
  }
}

const baseStyleStepIconContainer: SystemStyleFunction = props => {
  const { colorScheme } = props

  return {
    bg: 'standard.white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderColor: 'neutral.mediumdark',
    borderRadius: 'circular',
    transitionProperty: 'background, border-color',
    transitionDuration: 'normal',

    _activeStep: {
      bg: colorScheme,
      borderColor: colorScheme
    },
    _highlighted: {
      bg: colorScheme,
      borderColor: colorScheme
    },
    '&[data-clickable]:hover': {
      borderColor: colorScheme
    },

    '&[data-laststep]': {
      bg: 'neutral.default',
      borderColor: 'neutral.default'
    },
    '&[data-success]': {
      _highlighted: {
        bg: 'support.primary-dark',
        borderColor: 'support.primary-dark'
      },
      _activeStep: {
        bg: 'support.primary-dark',
        borderColor: 'support.primary-dark'
      }
    },
    '&[data-error]': {
      _highlighted: {
        bg: 'feedback.error-mediumlight',
        borderColor: 'feedback.error-mediumlight'
      },
      _activeStep: {
        bg: 'feedback.error-mediumlight',
        borderColor: 'feedback.error-mediumlight'
      }
    },
    '&[data-warning]': {
      _highlighted: {
        bg: 'feedback.warning-dark',
        borderColor: 'feedback.warning-dark'
      },
      _activeStep: {
        bg: 'feedback.warning-dark',
        borderColor: 'feedback.warning-dark'
      }
    },
    zIndex: 1
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = props => ({
  connector: baseStyleConnector(props),
  description: baseStyleDescription(props),
  label: baseStyleLabel(props),
  stepLabel: baseStyleStepLabel(props),
  stepIconContainer: baseStyleStepIconContainer(props),
  icon: {
    _highlighted: {
      color: 'standard.white',
      fill: 'standard.white'
    }
  },
  labelContainer: {
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center'
  },
  step: {
    display: 'flex',
    position: 'relative'
  },
  stepContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  steps: {
    fontFamily: 'heading',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flex: 1
  }
})

const sizes = {
  md: {
    stepIconContainer: {
      width: '32px',
      height: '32px'
    },
    icon: {
      width: '24px',
      height: '24px',
      fontSize: 'md'
    },
    label: {
      textAlign: 'center',
      fontSize: 'xs'
    },
    description: {
      textAlign: 'center',
      fontSize: 'xs'
    }
  }
}

const defaultProps = {
  size: 'md',
  colorScheme: 'brand.primary-default'
}

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps
}
