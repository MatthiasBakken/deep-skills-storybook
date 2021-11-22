import { render } from '@testing-library/react'

import { StaticCheckbox } from './statick-checkbox'

describe('StaticCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StaticCheckbox />)
    expect(baseElement).toBeVisible()
  })
})
