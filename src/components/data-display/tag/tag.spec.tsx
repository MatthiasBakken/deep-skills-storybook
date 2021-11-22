import { render } from '../../../test-utils'

import { Tag } from './tag'
import { TagValuesEnum } from '../../../interfaces'

describe('Tag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tag value={TagValuesEnum.design} />)
    expect(baseElement).toBeVisible()
  })
})
