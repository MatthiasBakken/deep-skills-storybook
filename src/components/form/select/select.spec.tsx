import { render, screen } from '@testing-library/react'

import { Select, SelectProps } from './select'
import userEvent from '@testing-library/user-event'

const initialProps: SelectProps = {
  options: [
    {
      label: 'Option 1',
      value: 'option-1'
    },
    {
      label: 'Option 2',
      value: 'option-2'
    }
  ],
  onSelect: jest.fn()
}

const setup = (props = initialProps) => render(<Select {...props} />)

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
  it('should render an input', () => {
    setup()
    expect(screen.getByTestId('select-input')).toBeVisible()
  })
  it('should render an option', () => {
    setup()
    userEvent.click(screen.getByTestId('select-input'))
    userEvent.type(screen.getByTestId('select-input'), '1')
    expect(screen.getByText('Option 1')).toBeTruthy()
  })
  it('should call onSelect when an option is selected', () => {
    const { getByTestId } = setup()
    userEvent.click(getByTestId('select-input'))
    userEvent.click(screen.getByText('Option 1'))
    expect(initialProps.onSelect).toHaveBeenCalledWith('option-1')
  })
})
