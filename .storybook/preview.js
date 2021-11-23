import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#2C2D30'
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <ChakraProvider resetCSS theme={theme}>
        {Story()}
      </ChakraProvider>
  )
]
