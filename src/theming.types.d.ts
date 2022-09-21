// regenerate by running
// npx @chakra-ui/cli tokens path/to/your/theme.(js|ts)
export interface ThemeTypings {
  blur:
    | 'none'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | (string & {})
  borders:
    | 'none'
    | '1px'
    | '2px'
    | '4px'
    | '8px'
    | 'hairline'
    | 'thin'
    | 'thick'
    | 'heavy'
    | (string & {})
  borderStyles: string & {}
  borderWidths: string & {}
  breakpoints: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {})
  colors:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'whiteAlpha.50'
    | 'whiteAlpha.100'
    | 'whiteAlpha.200'
    | 'whiteAlpha.300'
    | 'whiteAlpha.400'
    | 'whiteAlpha.500'
    | 'whiteAlpha.600'
    | 'whiteAlpha.700'
    | 'whiteAlpha.800'
    | 'whiteAlpha.900'
    | 'blackAlpha.50'
    | 'blackAlpha.100'
    | 'blackAlpha.200'
    | 'blackAlpha.300'
    | 'blackAlpha.400'
    | 'blackAlpha.500'
    | 'blackAlpha.600'
    | 'blackAlpha.700'
    | 'blackAlpha.800'
    | 'blackAlpha.900'
    | 'gray.50'
    | 'gray.100'
    | 'gray.200'
    | 'gray.300'
    | 'gray.400'
    | 'gray.500'
    | 'gray.600'
    | 'gray.700'
    | 'gray.800'
    | 'gray.900'
    | 'red.50'
    | 'red.100'
    | 'red.200'
    | 'red.300'
    | 'red.400'
    | 'red.500'
    | 'red.600'
    | 'red.700'
    | 'red.800'
    | 'red.900'
    | 'orange.50'
    | 'orange.100'
    | 'orange.200'
    | 'orange.300'
    | 'orange.400'
    | 'orange.500'
    | 'orange.600'
    | 'orange.700'
    | 'orange.800'
    | 'orange.900'
    | 'yellow.50'
    | 'yellow.100'
    | 'yellow.200'
    | 'yellow.300'
    | 'yellow.400'
    | 'yellow.500'
    | 'yellow.600'
    | 'yellow.700'
    | 'yellow.800'
    | 'yellow.900'
    | 'green.50'
    | 'green.100'
    | 'green.200'
    | 'green.300'
    | 'green.400'
    | 'green.500'
    | 'green.600'
    | 'green.700'
    | 'green.800'
    | 'green.900'
    | 'teal.50'
    | 'teal.100'
    | 'teal.200'
    | 'teal.300'
    | 'teal.400'
    | 'teal.500'
    | 'teal.600'
    | 'teal.700'
    | 'teal.800'
    | 'teal.900'
    | 'blue.50'
    | 'blue.100'
    | 'blue.200'
    | 'blue.300'
    | 'blue.400'
    | 'blue.500'
    | 'blue.600'
    | 'blue.700'
    | 'blue.800'
    | 'blue.900'
    | 'cyan.50'
    | 'cyan.100'
    | 'cyan.200'
    | 'cyan.300'
    | 'cyan.400'
    | 'cyan.500'
    | 'cyan.600'
    | 'cyan.700'
    | 'cyan.800'
    | 'cyan.900'
    | 'purple.50'
    | 'purple.100'
    | 'purple.200'
    | 'purple.300'
    | 'purple.400'
    | 'purple.500'
    | 'purple.600'
    | 'purple.700'
    | 'purple.800'
    | 'purple.900'
    | 'pink.50'
    | 'pink.100'
    | 'pink.200'
    | 'pink.300'
    | 'pink.400'
    | 'pink.500'
    | 'pink.600'
    | 'pink.700'
    | 'pink.800'
    | 'pink.900'
    | 'linkedin.50'
    | 'linkedin.100'
    | 'linkedin.200'
    | 'linkedin.300'
    | 'linkedin.400'
    | 'linkedin.500'
    | 'linkedin.600'
    | 'linkedin.700'
    | 'linkedin.800'
    | 'linkedin.900'
    | 'facebook.50'
    | 'facebook.100'
    | 'facebook.200'
    | 'facebook.300'
    | 'facebook.400'
    | 'facebook.500'
    | 'facebook.600'
    | 'facebook.700'
    | 'facebook.800'
    | 'facebook.900'
    | 'messenger.50'
    | 'messenger.100'
    | 'messenger.200'
    | 'messenger.300'
    | 'messenger.400'
    | 'messenger.500'
    | 'messenger.600'
    | 'messenger.700'
    | 'messenger.800'
    | 'messenger.900'
    | 'whatsapp.50'
    | 'whatsapp.100'
    | 'whatsapp.200'
    | 'whatsapp.300'
    | 'whatsapp.400'
    | 'whatsapp.500'
    | 'whatsapp.600'
    | 'whatsapp.700'
    | 'whatsapp.800'
    | 'whatsapp.900'
    | 'twitter.50'
    | 'twitter.100'
    | 'twitter.200'
    | 'twitter.300'
    | 'twitter.400'
    | 'twitter.500'
    | 'twitter.600'
    | 'twitter.700'
    | 'twitter.800'
    | 'twitter.900'
    | 'telegram.50'
    | 'telegram.100'
    | 'telegram.200'
    | 'telegram.300'
    | 'telegram.400'
    | 'telegram.500'
    | 'telegram.600'
    | 'telegram.700'
    | 'telegram.800'
    | 'telegram.900'
    | 'standard.black'
    | 'standard.white'
    | 'standard.light'
    | 'brand.primary-extralightest'
    | 'brand.primary-lightest'
    | 'brand.primary-light'
    | 'brand.primary-default'
    | 'brand.primary-default-40'
    | 'brand.primary-dark'
    | 'brand.primary-darkest'
    | 'brand.secondary-lightest'
    | 'brand.secondary-light'
    | 'brand.secondary-default'
    | 'brand.secondary-dark'
    | 'brand.secondary-darkest'
    | 'inverseBrand.primary-lightest'
    | 'inverseBrand.primary-light'
    | 'inverseBrand.primary-default'
    | 'inverseBrand.primary-dark'
    | 'inverseBrand.primary-darkest'
    | 'inverseBrand.secondary-lightest'
    | 'inverseBrand.secondary-light'
    | 'inverseBrand.secondary-default'
    | 'inverseBrand.secondary-dark'
    | 'inverseBrand.secondary-darkest'
    | 'support.primary-light'
    | 'support.primary-default'
    | 'support.primary-dark'
    | 'support.secondary-light'
    | 'support.secondary-default'
    | 'support.secondary-dark'
    | 'support.tertiary-light'
    | 'support.tertiary-default'
    | 'support.tertiary-dark'
    | 'feedback.warning-lightest'
    | 'feedback.warning-light'
    | 'feedback.warning-default'
    | 'feedback.warning-dark'
    | 'feedback.warning-extradark'
    | 'feedback.success-lightest'
    | 'feedback.success-light'
    | 'feedback.success-default'
    | 'feedback.success-dark'
    | 'feedback.success-mediumdark'
    | 'feedback.success-extradark'
    | 'feedback.error-lightest'
    | 'feedback.error-light'
    | 'feedback.error-mediumlight'
    | 'feedback.error-default'
    | 'feedback.error-dark'
    | 'feedback.information-lightest'
    | 'feedback.information-light'
    | 'feedback.information-default'
    | 'feedback.information-dark'
    | 'feedback.information-extradark'
    | 'neutral.lightest'
    | 'neutral.extralight'
    | 'neutral.mediumlight'
    | 'neutral.light'
    | 'neutral.default'
    | 'neutral.dark'
    | 'neutral.mediumdark'
    | 'neutral.extradark'
    | 'neutral.darkest'
    | 'alpha.whitealpha-50'
    | 'alpha.whitealpha-100'
    | 'alpha.whitealpha-200'
    | 'alpha.whitealpha-300'
    | 'alpha.whitealpha-400'
    | 'alpha.whitealpha-500'
    | 'alpha.whitealpha-600'
    | 'alpha.whitealpha-700'
    | 'alpha.whitealpha-800'
    | 'alpha.whitealpha-900'
    | 'alpha.blackalpha-50'
    | 'alpha.blackalpha-100'
    | 'alpha.blackalpha-200'
    | 'alpha.blackalpha-300'
    | 'alpha.blackalpha-400'
    | 'alpha.blackalpha-500'
    | 'alpha.blackalpha-600'
    | 'alpha.blackalpha-700'
    | 'alpha.blackalpha-800'
    | 'alpha.blackalpha-900'
    | (string & {})
  colorSchemes:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | (string & {})
  fonts: 'heading' | 'body' | 'mono' | (string & {})
  fontSizes:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | 'xxxs'
    | 'xxs'
    | 'xxl'
    | 'xxxl'
    | 'display'
    | (string & {})
  fontWeights:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | 'regular'
    | (string & {})
  layerStyles: string & {}
  letterSpacings:
    | 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest'
    | (string & {})
  lineHeights:
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'normal'
    | 'none'
    | 'shorter'
    | 'short'
    | 'base'
    | 'tall'
    | 'taller'
    | 'default'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | (string & {})
  radii:
    | 'none'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
    | 'xs'
    | 'pill'
    | 'circular'
    | (string & {})
  shadows:
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'outline'
    | 'inner'
    | 'none'
    | 'dark-lg'
    | 'primary-level1'
    | 'primary-level2'
    | 'primary-level3'
    | 'primary-level4'
    | 'secondary-level1'
    | 'secondary-level2'
    | 'secondary-level3'
    | 'secondary-level4'
    | (string & {})
  sizes:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64'
    | '72'
    | '80'
    | '96'
    | 'px'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5'
    | 'max'
    | 'min'
    | 'full'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | 'container.sm'
    | 'container.md'
    | 'container.lg'
    | 'container.xl'
    | (string & {})
  space:
    | '1'
    | '-1'
    | '2'
    | '-2'
    | '3'
    | '-3'
    | '4'
    | '-4'
    | '5'
    | '-5'
    | '6'
    | '-6'
    | '7'
    | '-7'
    | '8'
    | '-8'
    | '9'
    | '-9'
    | '10'
    | '-10'
    | '12'
    | '-12'
    | '14'
    | '-14'
    | '16'
    | '-16'
    | '20'
    | '-20'
    | '24'
    | '-24'
    | '28'
    | '-28'
    | '32'
    | '-32'
    | '36'
    | '-36'
    | '40'
    | '-40'
    | '44'
    | '-44'
    | '48'
    | '-48'
    | '52'
    | '-52'
    | '56'
    | '-56'
    | '60'
    | '-60'
    | '64'
    | '-64'
    | '72'
    | '-72'
    | '80'
    | '-80'
    | '96'
    | '-96'
    | 'px'
    | '-px'
    | '0.5'
    | '-0.5'
    | '1.5'
    | '-1.5'
    | '2.5'
    | '-2.5'
    | '3.5'
    | '-3.5'
    | 'quarck'
    | '-quarck'
    | 'nano'
    | '-nano'
    | 'xxxs'
    | '-xxxs'
    | 'xxs'
    | '-xxs'
    | 'xs'
    | '-xs'
    | 'sm'
    | '-sm'
    | 'md'
    | '-md'
    | 'lg'
    | '-lg'
    | 'xl'
    | '-xl'
    | 'xxl'
    | '-xxl'
    | 'xxxl'
    | '-xxxl'
    | 'huge'
    | '-huge'
    | 'giant'
    | '-giant'
    | (string & {})
  textStyles: string & {}
  transition:
    | 'property.common'
    | 'property.colors'
    | 'property.dimensions'
    | 'property.position'
    | 'property.background'
    | 'easing.ease-in'
    | 'easing.ease-out'
    | 'easing.ease-in-out'
    | 'duration.ultra-fast'
    | 'duration.faster'
    | 'duration.fast'
    | 'duration.normal'
    | 'duration.slow'
    | 'duration.slower'
    | 'duration.ultra-slow'
    | (string & {})
  zIndices:
    | 'hide'
    | 'auto'
    | 'base'
    | 'docked'
    | 'dropdown'
    | 'sticky'
    | 'banner'
    | 'overlay'
    | 'modal'
    | 'popover'
    | 'skipLink'
    | 'toast'
    | 'tooltip'
    | (string & {})
  components: {
    Accordion: {
      sizes: 'md' | (string & {})
      variants: 'standard-white' | 'brand-secondary-default' | (string & {})
    }
    Alert: {
      sizes: 'xs' | 'sm' | 'md' | (string & {})
      variants:
        | 'subtle'
        | 'left-accent'
        | 'top-accent'
        | 'solid'
        | 'solid-feedback-success-mediumdark'
        | 'solid-feedback-warning-default'
        | 'solid-feedback-error-mediumlight'
        | 'solid-feedback-information-extradark'
        | 'subtle-feedback-success-lightest'
        | 'subtle-feedback-warning-lightest'
        | 'subtle-support-tertiary-light'
        | 'subtle-feedback-information-lightest'
        | 'left-accent-feedback-success-lightest'
        | 'left-accent-feedback-warning-lightest'
        | 'left-accent-support-tertiary-light'
        | 'left-accent-feedback-information-lightest'
        | (string & {})
    }
    Avatar: {
      sizes:
        | '2xs'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | 'full'
        | (string & {})
      variants: string & {}
    }
    Badge: {
      sizes: 'xxxs' | 'xs' | (string & {})
      variants: 'solid' | 'subtle' | 'outline' | 'notify' | (string & {})
    }
    Breadcrumb: {
      sizes: string & {}
      variants: string & {}
    }
    Button: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | 'lg-square' | (string & {})
      variants:
        | 'ghost'
        | 'outline'
        | 'solid'
        | 'link'
        | 'unstyled'
        | 'brand-primary-solid'
        | 'default-outline'
        | 'neutral-extradark-ghost'
        | 'neutral-extralight-solid'
        | 'feedback-error-default'
        | 'standard-white-solid'
        | 'icon-default-outline'
        | 'select-default'
        | (string & {})
    }
    Checkbox: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'brand-primary-default'
        | 'brand-secondary-default'
        | (string & {})
    }
    CloseButton: {
      sizes: 'lg' | 'md' | 'sm' | (string & {})
      variants: string & {}
    }
    Code: {
      sizes: string & {}
      variants: 'solid' | 'subtle' | 'outline' | (string & {})
    }
    Container: {
      sizes: 'sm' | 'md' | 'lg' | 'xl' | (string & {})
      variants: string & {}
    }
    Divider: {
      sizes: string & {}
      variants: 'solid' | 'dashed' | (string & {})
    }
    Drawer: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | (string & {})
      variants: string & {}
    }
    Editable: {
      sizes: string & {}
      variants: string & {}
    }
    Form: {
      sizes: string & {}
      variants: string & {}
    }
    FormError: {
      sizes: string & {}
      variants: string & {}
    }
    FormLabel: {
      sizes: string & {}
      variants: string & {}
    }
    Heading: {
      sizes:
        | '4xl'
        | '3xl'
        | '2xl'
        | 'xl'
        | 'lg'
        | 'md'
        | 'sm'
        | 'xs'
        | (string & {})
      variants: string & {}
    }
    Input: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & {})
      variants:
        | 'outline'
        | 'filled'
        | 'flushed'
        | 'unstyled'
        | 'outline-brand-primary-default'
        | 'outline-brand-secondary-default'
        | 'filled-brand-primary-default'
        | 'filled-brand-secondary-default'
        | 'flushed-brand-primary-default'
        | 'flushed-brand-secondary-default'
        | 'quantity-picker-default'
        | (string & {})
    }
    Kbd: {
      sizes: string & {}
      variants: string & {}
    }
    Link: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'default-neutral-extradark'
        | 'underline-standard-white'
        | (string & {})
    }
    List: {
      sizes: string & {}
      variants: string & {}
    }
    Menu: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'brand-primary-default' | 'brand-primary-solid' | (string & {})
    }
    Modal: {
      sizes:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full'
        | (string & {})
      variants:
        | 'footer-no-box-shadow'
        | 'footer-neutral-extralight'
        | 'align-bottom'
        | (string & {})
    }
    NumberInput: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    PinInput: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & {})
      variants: 'outline' | 'flushed' | 'filled' | 'unstyled' | (string & {})
    }
    Popover: {
      sizes: string & {}
      variants: string & {}
    }
    Progress: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})
      variants: 'brand-primary-solid' | 'brand-secondary-solid' | (string & {})
    }
    Radio: {
      sizes: 'md' | 'lg' | 'sm' | (string & {})
      variants:
        | 'brand-primary-default'
        | 'brand-secondary-default'
        | (string & {})
    }
    Select: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & {})
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & {})
    }
    Skeleton: {
      sizes: string & {}
      variants: string & {}
    }
    SkipLink: {
      sizes: string & {}
      variants: string & {}
    }
    Slider: {
      sizes: 'lg' | 'md' | 'sm' | (string & {})
      variants: 'brand-primary-solid' | 'brand-secondary-solid' | (string & {})
    }
    Spinner: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})
      variants: string & {}
    }
    Stat: {
      sizes: 'md' | (string & {})
      variants: string & {}
    }
    Switch: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'brand-primary-solid' | 'brand-secondary-solid' | (string & {})
    }
    Table: {
      sizes: 'sm' | 'md' | 'lg' | 'xs' | (string & {})
      variants:
        | 'simple'
        | 'striped'
        | 'unstyled'
        | 'striped-neutral-lightest'
        | 'striped-standard-light'
        | 'inverted-striped-standard-light'
        | 'outline-standard-light'
        | (string & {})
    }
    Tabs: {
      sizes: 'sm' | 'md' | 'lg' | 'xs' | (string & {})
      variants:
        | 'line'
        | 'enclosed'
        | 'enclosed-colored'
        | 'soft-rounded'
        | 'solid-rounded'
        | 'unstyled'
        | 'brand-primary-solid'
        | 'brand-secondary-solid'
        | (string & {})
    }
    Tag: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'subtle'
        | 'solid'
        | 'outline'
        | 'support-primary-default-outline'
        | 'support-secondary-default-outline'
        | 'support-tertiary-dark-outline'
        | 'feedback-information-default-outline'
        | 'select-brand-primary-light'
        | 'select-brand-secondary-light'
        | 'ghost-default'
        | 'outline-default'
        | 'highlight-brand-primary-default'
        | 'highlight-brand-secondary-default'
        | 'highlight-neutral-extralight'
        | 'highlight-neutral-default'
        | 'standard-light-outline'
        | (string & {})
    }
    Textarea: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'outline'
        | 'flushed'
        | 'filled'
        | 'unstyled'
        | 'brand-primary-default'
        | 'brand-secondary-default'
        | (string & {})
    }
    Tooltip: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants: 'brand-default' | 'brand-primary' | (string & {})
    }
    Image: {
      sizes: string & {}
      variants: 'primary-solid' | (string & {})
    }
    Steps: {
      sizes: 'md' | (string & {})
      variants: string & {}
    }
    Text: {
      sizes: 'sm' | 'md' | 'lg' | (string & {})
      variants:
        | 'brand-secondary-default'
        | 'default-neutral-extradark'
        | (string & {})
    }
  }
}
