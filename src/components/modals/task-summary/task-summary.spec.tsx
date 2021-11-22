import { screen } from '@testing-library/react'

import { TaskSummary, TaskSummaryProps } from './task-summary'
import faker from 'faker'
import { generateTask } from '../../../fake-data'
import { render } from '../../../test-utils'

const mockClose = jest.fn()

const mockProps: TaskSummaryProps = {
  isOpen: true,
  onCloseClicked: mockClose,
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  },
  project: {
    title: faker.company.companyName()
  },
  tasks: new Array(5).fill(undefined).map(() => generateTask())
}

const setup = () => render(<TaskSummary {...mockProps} />)

describe('TaskSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show org name', () => {
    setup()
    expect(screen.queryByText(mockProps.organisation.name)).toBeTruthy()
  })
  it('should show project title', () => {
    setup()
    expect(screen.getByText(mockProps.project.title as string)).toBeTruthy()
  })
  it('should show tasks', () => {
    setup()
    mockProps.tasks.forEach((task) => {
      expect(screen.getByText(task.title)).toBeTruthy()
    })
  })
  it('should close on close button click', () => {
    setup()
    screen.getByRole('button', { name: 'Close' }).click()
    expect(mockClose).toHaveBeenCalled()
  })
})
