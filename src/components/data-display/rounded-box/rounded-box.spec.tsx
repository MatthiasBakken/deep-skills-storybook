import { render } from '../../../test-utils'

import { RoundedBox } from './rounded-box'

describe('RoundedBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoundedBox />)
    expect(baseElement).toBeVisible()
  })
})
