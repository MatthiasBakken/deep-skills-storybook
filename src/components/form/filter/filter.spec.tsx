import { screen } from '@testing-library/react'

import { Filter, Option } from './filter'
import * as faker from 'faker'
import { render } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

const mockOptions: Option[] = [
  {
    label: faker.lorem.word(),
    value: faker.lorem.word()
  },
  {
    label: faker.lorem.word(),
    value: faker.lorem.word()
  },
  {
    label: faker.lorem.word(),
    value: faker.lorem.word()
  }
]

const mockOnChange = jest.fn()

const setup = () =>
  render(<Filter options={mockOptions} onSelect={mockOnChange} />)
describe('Filter', () => {
  it('should render successfully', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
  it('should display the first option', () => {
    setup()
    expect(
      screen.getByText(mockOptions[0].label, { selector: 'span' })
    ).toBeVisible()
  })
  it('should call on change on item selected', () => {
    setup()
    userEvent.click(
      screen.getByText(mockOptions[0].label, { selector: 'button' })
    )
    userEvent.click(
      screen.getByText(mockOptions[1].label, { selector: 'button' })
    )
    expect(mockOnChange).toBeCalledWith(expect.objectContaining(mockOptions[1]))
  })
  it('should display the selected option', () => {
    const { getByText } = setup()
    userEvent.click(
      screen.getByText(mockOptions[0].label, { selector: 'button' })
    )
    expect(getByText(mockOptions[0].label, { selector: 'span' })).toBeVisible()
  })
})
