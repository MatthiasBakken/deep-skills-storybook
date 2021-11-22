import { render, screen } from '@testing-library/react'
import { Header } from './header'
import userEvent from '@testing-library/user-event'

const mockNavClick = jest.fn()

const mockProps = {
  links: [
    {
      label: 'Organisations',
      route: 'organisations'
    }
  ],
  onNavigationLinkClick: mockNavClick
}

const setup = (props = mockProps) => render(<Header {...props} />)

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should show nav link', () => {
    setup()
    expect(screen.getByText(mockProps.links[0].label)).toBeVisible()
  })
  it('should call the nav link callback', () => {
    setup()
    userEvent.click(screen.getByText(mockProps.links[0].label))
    expect(mockNavClick).toBeCalled()
  })
})
