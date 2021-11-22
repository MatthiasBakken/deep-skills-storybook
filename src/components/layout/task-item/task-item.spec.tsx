import { render, screen } from '@testing-library/react'

import { TaskItem, TaskItemProps } from './task-item'
import * as React from 'react'
import { StaticCheckbox } from '../../data-display/statick-checkbox/statick-checkbox'

const mockProps: TaskItemProps = {
  beforeElement: <StaticCheckbox variant={'confirmed'} />,
  title: 'Prepare Miro Board',
  size: 'sm',
  helperText: 'Interested',
  detailsLink: 'https://google.com'
}

const setup = (props = mockProps) => render(<TaskItem {...props} />)

describe('TaskItem', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should display the title', () => {
    setup()
    expect(screen.getByText(mockProps.title)).toBeVisible()
  })
  it('should display the helper text', () => {
    setup()
    expect(screen.getByText(mockProps.helperText as string)).toBeVisible()
  })
})
