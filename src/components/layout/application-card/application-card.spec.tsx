import { render, screen } from '@testing-library/react'

import { ApplicationCard, ApplicationCardProps } from './application-card'
import faker from 'faker'
import userEvent from '@testing-library/user-event'
import { generateUser } from '../../../fake-data'

const setup = (props: ApplicationCardProps = mockProps) =>
  render(<ApplicationCard {...props} />)
const mockOnApply = jest.fn()
const mockOnWithdraw = jest.fn()
const mockOnTasksClick = jest.fn()

const mockProps: ApplicationCardProps = {
  title: 'Creative director',
  detailsUrl: faker.internet.url(),
  onApplyClick: mockOnApply,
  onWithdrawClick: mockOnWithdraw,
  onTasksClick: mockOnTasksClick,
  lead: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['1,000', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: 15
    }
  },
  contributor: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['0', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: [1, 15]
    }
  }
}

describe('ApplicationCard', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show title and details button', () => {
    setup()
    expect(screen.getByText(mockProps.title)).toBeVisible()
    expect(screen.getByText(/role details/i)).toBeVisible()
  })
  it('should call the apply for a role button', () => {
    setup()
    userEvent.click(screen.getByText(/for lead role/i))
    userEvent.click(screen.getByText(/as contributor/i))
    expect(mockOnApply).toBeCalledWith(mockProps.lead.roleId)
    expect(mockOnApply).toBeCalledWith(mockProps.contributor.roleId)
  })
  it('should show withdraw button when the application is pending', () => {
    setup({
      ...mockProps,
      lead: {
        ...mockProps.lead,
        user: generateUser(),
        status: 'pending'
      }
    })
    const withdrawButton = screen.getByText(/withdraw application/i)
    userEvent.click(withdrawButton)
    expect(withdrawButton).toBeVisible()
    expect(mockOnWithdraw).toBeCalledWith(mockProps.lead.roleId)
  })
  it('should show the user profile when the position is filled', () => {
    const customProps = {
      ...mockProps,
      lead: {
        ...mockProps.lead,
        user: generateUser()
      }
    }
    setup(customProps)
    expect(screen.getByText(customProps.lead.user.fullName)).toBeVisible()
  })
  it('should show the tasks button when the position is filled', () => {
    const customProps = {
      ...mockProps,
      lead: {
        ...mockProps.lead,
        user: generateUser()
      }
    }
    setup(customProps)
    userEvent.click(screen.getAllByText(/tasks/i)[0])
    expect(mockOnTasksClick).toBeCalledWith(customProps.lead.roleId)
  })
})
