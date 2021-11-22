import { render } from '@testing-library/react'

import { AdminCreateButton } from './admin-create-button'

describe('AdminCreateButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminCreateButton />)
    expect(baseElement).toBeTruthy()
  })
})
