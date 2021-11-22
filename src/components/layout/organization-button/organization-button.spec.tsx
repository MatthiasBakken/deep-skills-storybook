import { OrganizationButton } from './organization-button'
import faker from 'faker'
import { render } from '../../../test-utils'
import { screen } from '@testing-library/react'

const mockProps = {
  imageSrc: faker.image.business(),
  label: faker.company.companyName()
}

const setup = (props = mockProps) => render(<OrganizationButton {...props} />)

describe('OrganizationalButton', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should render an image', () => {
    setup()
    expect(screen.getByTestId('organization-button-image')).toBeVisible()
  })
  it('should render a label', () => {
    setup()
    expect(screen.getByText(mockProps.label)).toBeVisible()
  })
})
