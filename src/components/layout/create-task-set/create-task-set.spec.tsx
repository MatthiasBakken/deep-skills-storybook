import { render } from '@testing-library/react'

import { CreateTaskSet } from './create-task-set'

describe('TaskSet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTaskSet />)
    expect(baseElement).toBeVisible()
  })
})
