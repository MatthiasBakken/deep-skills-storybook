import { render, screen } from '@testing-library/react'

import { FeedbackItem, FeedbackItemProps } from './feedback-item'
import * as faker from 'faker'
import { generateUser } from '../../../fake-data'

const mockProps: FeedbackItemProps = {
  user: generateUser(),
  content: faker.lorem.paragraph(3)
}

const setup = (props = mockProps) => render(<FeedbackItem {...props} />)

describe('FeedbackItem', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should render user name', () => {
    setup()
    expect(screen.getByText(mockProps.user.fullName)).toBeVisible()
  })
  it('should render content', () => {
    setup()
    expect(screen.getByText(mockProps.content)).toBeVisible()
  })
})
