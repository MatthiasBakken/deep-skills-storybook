import { screen } from '@testing-library/react'
import { Notification } from './notification'
import { render } from '../../../test-utils'

const mockProps = {
  buttonLabel: 'Review application',
  onReviewClick: jest.fn()
}
const setup = (props = mockProps) => render(<Notification {...mockProps} />)

describe('Notification', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
  it('should render with the correct button text', () => {
    setup()
    expect(screen.getByText(mockProps.buttonLabel)).toBeTruthy()
  })
})
