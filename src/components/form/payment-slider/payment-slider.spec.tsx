import { render } from '../../../test-utils'
import { PaymentSlider } from './payment-slider'
import { screen } from '@testing-library/react'

const mockColleagueName = 'Foo Bar'
const mockOnChange = jest.fn()
const setup = () =>
  render(
    <PaymentSlider colleagueName={mockColleagueName} onChange={mockOnChange} />
  )
describe('PaymentSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should display the colleague name', () => {
    setup()
    expect(screen.getByText(mockColleagueName)).toBeVisible()
  })
})
