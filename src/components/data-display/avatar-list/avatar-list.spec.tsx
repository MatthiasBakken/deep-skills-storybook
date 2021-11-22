import { screen } from '@testing-library/react'
import { render } from '../../../test-utils'
import { AvatarList, getRestText } from './avatar-list'
import * as faker from 'faker'

describe('AvatarList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AvatarList avatars={[faker.image.avatar()]} />
    )
    expect(baseElement).toBeVisible()
  })
  it('should render 3 images by default', () => {
    const avatars = [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ]
    render(<AvatarList avatars={avatars} />)
    expect(screen.queryAllByRole('img').length).toBe(3)
  })
  it('should render max set images', () => {
    const avatars = [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ]
    const max = 4
    render(<AvatarList avatars={avatars} max={max} />)
    expect(screen.queryAllByRole('img').length).toBe(max)
  })
  it('should show the rest text', () => {
    const avatars = [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ]
    const max = 4
    render(<AvatarList avatars={avatars} max={max} />)
    expect(screen.getByText(getRestText(avatars.length - max))).toBeVisible()
  })
})
