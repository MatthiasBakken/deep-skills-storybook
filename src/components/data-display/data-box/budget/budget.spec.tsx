import { screen } from '@testing-library/react'
import { render } from '../../../../test-utils'
import { Budget } from './budget'

describe('Budget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Budget budget={'1500'} />)
    expect(baseElement).toBeVisible()
  })
  it('should render the budget range', () => {
    render(<Budget budget={['0', '1000']} />)
    expect(screen.getByText('$0-$1000')).toBeVisible()
  })
})
