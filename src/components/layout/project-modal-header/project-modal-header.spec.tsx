import { screen } from '@testing-library/react'

import { ProjectModalHeader } from './project-modal-header'
import faker from 'faker'
import { TagValuesEnum } from '../../../interfaces'
import { render } from '../../../test-utils'

const mockProps = {
  project: {
    title: faker.lorem.words(2),
    tag: TagValuesEnum.design,
    dateRange: 'Aug 7 - Aug 13, 2021',
    url: faker.internet.url()
  },
  organisation: {
    name: faker.company.companyName(),
    imageUrl: faker.image.business()
  }
}
const setup = (props = mockProps) => render(<ProjectModalHeader {...props} />)

describe('ProjectModalHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should render the project title', () => {
    setup()
    expect(screen.getByText(mockProps.project.title)).toBeTruthy()
  })
  it('should render the project tag', () => {
    setup()
    expect(screen.getByText(mockProps.project.tag)).toBeTruthy()
  })
  it('should render the project date range', () => {
    setup()
    expect(screen.getByText(mockProps.project.dateRange)).toBeTruthy()
  })
  it('should render the organisation name', () => {
    setup()
    expect(screen.getByText(mockProps.organisation.name)).toBeTruthy()
  })
  it('should render the organisation image', () => {
    setup()
    expect(screen.getByTestId('organization-button-image')).toBeTruthy()
  })
})
