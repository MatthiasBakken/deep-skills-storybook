import { render } from '@testing-library/react'

import { ProfileBox } from './profile-box'
import faker from 'faker'

const mockProps = {
  avatarUrl: faker.image.avatar(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  jobTitle: faker.name.jobTitle()
}

describe('ProfileBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileBox {...mockProps} />)
    expect(baseElement).toBeVisible()
  })
})
