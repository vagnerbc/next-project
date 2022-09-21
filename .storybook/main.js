const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: [
    '../src/**/**/*.stories.mdx',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon'
  ],
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  },
  typescript: { reactDocgen: false },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
  // features: { emotionAlias: false },
  // webpackFinal: async (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias ?? {}),
  //     "@emotion/react": toPath("node_modules/@emotion/react"),
  //     "@emotion/styled": toPath("node_modules/@emotion/styled"),
  //     "@emotion/core": toPath("node_modules/@emotion/react"),
  //     "emotion-theming": toPath("node_modules/@emotion/react")
  //   }
  //   return config
  // }
}
