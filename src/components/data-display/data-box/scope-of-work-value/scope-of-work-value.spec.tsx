import { screen } from '@testing-library/react'
import { render } from '../../../../test-utils'
import { ScopeOfWorkValue } from './scope-of-work-value'
import userEvent from '@testing-library/user-event'

const taskAmount = 5
const hourAmount = 5
const mockOnTaskClick = jest.fn()

describe('ScopeOfWorkValue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ScopeOfWorkValue
        onTaskClick={mockOnTaskClick}
        taskAmount={taskAmount}
        hourAmount={hourAmount}
      />
    )
    expect(baseElement).toBeVisible()
  })
  it('should call the onTaskClick callback on tasks click', () => {
    render(
      <ScopeOfWorkValue
        onTaskClick={mockOnTaskClick}
        taskAmount={taskAmount}
        hourAmount={hourAmount}
      />
    )
    userEvent.click(screen.getByText(`${taskAmount} tasks`))
    expect(mockOnTaskClick).toBeCalled()
  })
  it('should render approx hour amount', () => {
    render(
      <ScopeOfWorkValue
        onTaskClick={mockOnTaskClick}
        taskAmount={taskAmount}
        hourAmount={hourAmount}
      />
    )
    expect(screen.getByText(`~ ${hourAmount}`)).toBeVisible()
  })
  it('should render range hour', () => {
    const taskRange = [0, 10]
    render(
      <ScopeOfWorkValue
        onTaskClick={mockOnTaskClick}
        taskAmount={taskAmount}
        hourAmount={taskRange}
      />
    )
    expect(screen.getByText(`${taskRange[0]}-${taskRange[1]}`)).toBeVisible()
  })
})
