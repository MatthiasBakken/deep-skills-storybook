import { render, screen } from '@testing-library/react'

import {
  CollapsableTaskListProps,
  CollapsableTaskSet
} from './collapsable-task-set'
import { generateTask } from '../../../fake-data'
import { TaskItem } from '../task-item/task-item'
import * as React from 'react'
import userEvent from '@testing-library/user-event'

const mockProps: CollapsableTaskListProps = {
  label: 'User Research Lead on Sourcecred Hypersprint',
  helperText: '7 tasks'
}
const mockChildren = [
  generateTask(),
  generateTask(),
  generateTask(),
  generateTask(),
  generateTask()
].map((item) => (
  <TaskItem
    key={item.id}
    boxProps={{ bg: 'gray.24', mb: '13px' }}
    title={item.title}
  />
))
const setup = (
  props: CollapsableTaskListProps = mockProps,
  children = mockChildren
) => render(<CollapsableTaskSet {...props}>{children}</CollapsableTaskSet>)

describe('CollapsableTaskList', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show the label', () => {
    setup()
    expect(screen.getByText(mockProps.label)).toBeVisible()
  })
  it('should display helper text', () => {
    setup()
    expect(screen.getByText(mockProps.helperText)).toBeVisible()
  })
  it('should toggle collapse button', () => {
    setup()
    userEvent.click(screen.getByText(/expand/i))
    expect(screen.getByText(/close/i)).toBeVisible()
  })
  it('should toggle collapse button', () => {
    setup()
    userEvent.click(screen.getByText(/expand/i))
    userEvent.click(screen.getByText(/close/i))
    expect(screen.getByText(/expand/i)).toBeVisible()
  })
})
