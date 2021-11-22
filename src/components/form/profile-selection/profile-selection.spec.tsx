import { ProfileSelection, ProfileSelectionProps } from './profile-selection'
import { generateUser } from '../../../fake-data'
import { render } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

const mockOnChange = jest.fn()

const initialProps: ProfileSelectionProps = {
  possibleProfiles: [generateUser(), generateUser(), generateUser()],
  onChange: mockOnChange,
  label: 'Select admin'
}

const setup = (props = initialProps) => render(<ProfileSelection {...props} />)

describe('ProfileSelection', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
  it('should render a label', () => {
    setup()
    expect(screen.getByText(initialProps.label)).toBeTruthy()
  })
  it('should call onChange when an option is selected', () => {
    setup()
    userEvent.click(screen.getByLabelText(initialProps.label))
    userEvent.click(screen.getByTestId(/select-option-0/))
    expect(mockOnChange).toHaveBeenCalled()
    expect(screen.getByText('Change', { selector: 'button' })).toBeVisible()
  })
})
