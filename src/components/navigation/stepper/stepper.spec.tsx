import { render, screen } from '@testing-library/react'

import { Stepper } from './stepper'

const mockProps = {
  activeStep: 2,
  steps: [
    {
      label: 'Review'
    },
    {
      label: 'Payment'
    },
    {
      label: 'Payment 2'
    },
    {
      label: 'Confirmation'
    }
  ]
}

const setup = (props = mockProps) => render(<Stepper {...props} />)

describe('Stepper', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show the labels', () => {
    setup()
    mockProps.steps.forEach((item) => {
      expect(screen.getByText(item.label)).toBeVisible()
    })
  })
})
