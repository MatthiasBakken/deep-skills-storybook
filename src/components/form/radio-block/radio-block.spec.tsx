import { RadioBlock } from './radio-block'
import * as faker from 'faker'
import { render } from '../../../test-utils'
import { screen } from '@testing-library/react'

const mockLabel = faker.lorem.word()
const mockDescription = faker.lorem.paragraph()

const setup = () =>
  render(<RadioBlock label={mockLabel} description={mockDescription} />)

describe('RadioBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should display label and description', () => {
    setup()
    expect(screen.getByText(mockLabel)).toBeVisible()
    expect(screen.getByText(mockDescription)).toBeVisible()
  })
  it('should display radio button', () => {
    setup()
    expect(screen.getByRole('radio')).toBeVisible()
  })
})
