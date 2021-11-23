module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  },
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react'
        }
      }
    }
  }
}
