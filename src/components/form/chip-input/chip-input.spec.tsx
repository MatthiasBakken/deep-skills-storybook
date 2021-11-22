import { ChipInput, ChipInputProps } from './chip-input'
import { render } from '../../../test-utils'
import { screen } from '@testing-library/react'

const initialProps: ChipInputProps = {
  onChange: jest.fn(),
  chips: [],
  placeholder: 'Enter emails'
}

const setup = (props = initialProps) => render(<ChipInput {...props} />)

describe('ChipInput', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
  it('should render box', () => {
    setup()
    expect(screen.getByTestId('chip-input')).toBeTruthy()
  })
  it('should render input', () => {
    setup()
    expect(screen.getByPlaceholderText('Enter emails')).toBeTruthy()
  })
  it('should render chips', () => {
    setup({
      chips: ['qwe'],
      placeholder: 'Enter emails',
      onChange: jest.fn()
    })
    expect(screen.getByTestId('chip-input-chip-0')).toBeTruthy()
  })
  it('should render chips with text', () => {
    setup({
      chips: ['qwe'],
      placeholder: 'Enter emails',
      onChange: jest.fn()
    })
    expect(screen.getByTestId('chip-input-chip-0').textContent).toBe('qwe')
  })
  it('should render chips with remove button', () => {
    setup({
      chips: ['qwe'],
      placeholder: 'Enter emails',
      onChange: jest.fn()
    })
    expect(screen.getByTestId('chip-input-chip-0-remove')).toBeTruthy()
  })
})
