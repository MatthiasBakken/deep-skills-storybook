import { render } from '@testing-library/react'

import { Agreement } from './agreement'
import * as faker from 'faker'

const mockProps = {
  name: faker.lorem.words(),
  onChange: jest.fn(),
  error: faker.lorem.paragraphs(3)
}
const setup = (props = mockProps) => render(<Agreement {...props} />)

describe('Agreement', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
})
