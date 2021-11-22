import { screen } from '@testing-library/react'

import { PrimaryCard } from './primary-card'
import faker from 'faker'
import { TagValuesEnum } from '../../../interfaces'
import { render } from '../../../test-utils'

const mockProps = {
  onCardClick: jest.fn(),
  organizationName: 'Deep Work Studio',
  organizationImage: faker.image.business(),
  projectTitle: 'Sourcecred Hypersprint',
  projectDescription:
    'A collective of designers doing meanful projects in web3 with shared profits. ',
  dateRange: 'Aug 5 - Aug 13, 2021',
  tag: TagValuesEnum.design,
  status: 'Team applications open',
  users: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ]
}

const setup = (props = mockProps) => render(<PrimaryCard {...mockProps} />)

describe('PrimaryCard', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should render the organization name', () => {
    setup()
    expect(screen.getByText(mockProps.organizationName)).toBeVisible()
  })
  it('should render the project title', () => {
    setup()
    expect(screen.getByText(mockProps.projectTitle)).toBeVisible()
  })
  it('should render the project description', () => {
    setup()
    expect(screen.getByText(mockProps.projectDescription.trim())).toBeVisible()
  })
  it('should render the date range', () => {
    setup()
    expect(screen.getByText(mockProps.dateRange)).toBeVisible()
  })
  it('should render the tag', () => {
    setup()
    expect(screen.getByText(mockProps.tag)).toBeVisible()
  })
  it('should render the status', () => {
    setup()
    expect(screen.getByText(mockProps.status)).toBeVisible()
  })
  it('should render the users', () => {
    setup()
    expect(screen.getAllByRole('img')).toHaveLength(mockProps.users.length)
  })
})
