import { OverviewSidebar, OverviewSidebarProps } from './overview-sidebar'
import { render } from '../../../test-utils'
import * as faker from 'faker'
import { screen } from '@testing-library/react'

const initialProps: OverviewSidebarProps = {
  avatar: faker.image.avatar(),
  title: faker.name.title(),
  description: faker.lorem.paragraph()
}

const setup = (props = initialProps) => render(<OverviewSidebar {...props} />)

describe('OverviewSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeTruthy()
  })
  it('should render title', () => {
    setup()
    expect(screen.getByText(initialProps.title)).toBeTruthy()
  })
  it('should render description', () => {
    setup()
    expect(screen.getByText(initialProps.description)).toBeTruthy()
  })
})
