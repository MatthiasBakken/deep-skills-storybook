import { screen } from '@testing-library/react'
import { render } from '../../../test-utils'
import { DataBox } from './data-box'

const label = 'Some title'
describe('DataBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataBox label={label} />)
    expect(baseElement).toBeVisible()
  })
  it('should render label', () => {
    render(<DataBox label={label} />)
    expect(screen.getByText(label)).toBeVisible()
  })
  it('should render the children', () => {
    const value = '5'
    render(<DataBox label={label}>{value}</DataBox>)
    expect(screen.getByText(value)).toBeVisible()
  })
})
