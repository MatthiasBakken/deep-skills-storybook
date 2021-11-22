import { ProjectSummary } from './project-summary'
import faker from 'faker'
import {
  IOrganisation,
  IProject,
  IUser,
  TagValuesEnum
} from '../../../interfaces'
import { generateTaskSet, generateUser } from '../../../fake-data'
import { render } from '../../../test-utils'

const mockOnClose = jest.fn()

const mockProps = {
  isOpen: true,
  onCloseClicked: mockOnClose,
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  } as IOrganisation,
  project: {
    title: faker.company.companyName(),
    tag: 'design',
    dateRange: 'Aug 7 - Aug 13, 2021',
    taskSets: [generateTaskSet()]
  } as unknown as IProject,
  user: {
    firstName: faker.name.firstName()
  } as IUser,
  goodFeedback: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ],
  canBeImproved: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ],
  personalReflection: [
    {
      content: faker.lorem.paragraph(3),
      user: generateUser()
    }
  ]
}

const setup = (props = mockProps) => render(<ProjectSummary {...props} />)

describe('ProjectSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should render the project title', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.project.title)).toBeTruthy()
  })
  it('should render the project tag', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.project.tag as TagValuesEnum)).toBeTruthy()
  })
  it('should render the project date range', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.project.dateRange as string)).toBeTruthy()
  })
  it('should render the project task sets', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.project.taskSets[0].title)).toBeTruthy()
  })
  it('should render the project organisation', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.organisation.name)).toBeTruthy()
  })
  it('should render the project good feedback', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.goodFeedback[0].content)).toBeTruthy()
  })
  it('should render the project can be improved feedback', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.canBeImproved[0].content)).toBeTruthy()
  })
  it('should render the project personal reflection', () => {
    const { getByText } = setup()
    expect(getByText(mockProps.personalReflection[0].content)).toBeTruthy()
  })
})
