import { render } from '@testing-library/react'

import BadgeTypeToggle from './badge-type-toggle'

describe('BadgeTypeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BadgeTypeToggle />)
    expect(baseElement).toBeTruthy()
  })
})
