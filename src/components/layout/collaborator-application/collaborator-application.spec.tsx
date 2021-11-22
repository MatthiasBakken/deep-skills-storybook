import { render, screen, within } from '@testing-library/react'

import {
  CollaboratorApplication,
  CollaboratorApplicationProps
} from './collaborator-application'
import { generateUser } from '../../../fake-data'
import faker from 'faker'
import userEvent from '@testing-library/user-event'

const mockConfirm = jest.fn()

const mockProps: CollaboratorApplicationProps = {
  user: generateUser(),
  jobTitle: faker.name.jobTitle(),
  onConfirm: mockConfirm
}

const mockChildren = faker.lorem.paragraphs(5)

const setup = (
  props: CollaboratorApplicationProps = mockProps,
  children = mockChildren
) =>
  render(
    <CollaboratorApplication {...props}>{children}</CollaboratorApplication>
  )

describe('CollaboratorApplication', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show the first name on the confirm button', () => {
    setup()
    expect(
      within(screen.getByText(/confirm/i)).getByText(mockProps.user.firstName, {
        selector: 'span'
      })
    ).toBeVisible()
  })
  it('should call the confirm', () => {
    setup()
    userEvent.click(screen.getByText(/confirm/i))
    expect(mockConfirm).toBeCalled()
  })
})
