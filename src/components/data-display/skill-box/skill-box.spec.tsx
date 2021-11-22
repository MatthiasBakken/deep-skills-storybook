import { screen } from '@testing-library/react'

import { SkillBox } from './skill-box'
import { render } from '../../../test-utils'

const label = 'Product Design'
const data = { done: 1, total: 5 }
describe('SkillBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillBox />)
    expect(baseElement).toBeVisible()
  })
  it('should display the label', () => {
    render(<SkillBox label={label} />)
    expect(screen.getByText(label)).toBeVisible()
  })
  it('should display the data of the tasks', () => {
    render(<SkillBox label={label} data={data} />)
    expect(screen.getByText(`${data.done}/${data.total}`)).toBeVisible()
  })
})
