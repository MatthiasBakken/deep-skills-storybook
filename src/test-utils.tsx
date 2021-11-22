import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

const AllTheProviders: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
